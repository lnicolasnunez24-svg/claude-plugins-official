// Renderiza cada escena a un MP4 mudo. Uso: node render.js timing.json carpeta_salida escala calidad
// Solo saca captura de los cuadros donde algo se mueve; el resto mantiene la última imagen.
// Si una escena no cambió (mismo HTML, misma duración), reutiliza el MP4 ya hecho.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const { execFileSync } = require('child_process');

const [timingPath, outDir, scaleArg, calidad] = process.argv.slice(2);
const scale = parseFloat(scaleArg || '1');
const FPS = 30, ANIM = 0.55, FADE = 0.4;
const timing = JSON.parse(fs.readFileSync(timingPath, 'utf8'));
const visual = require('./escenas_visual.js');
const stage = 'file://' + path.join(__dirname, 'stage.html');
fs.mkdirSync(outDir, { recursive: true });
if (visual.length !== timing.length) { console.error(`Hay ${visual.length} pantallas y ${timing.length} escenas`); process.exit(1); }

const sinTag = new Set([1, 31]);
const html = (e) => (sinTag.has(e.n) ? '' :
  `<div class="tag"><b>${e.capitulo.slice(0, 2)}</b>${e.capitulo.slice(3)}</div>`) + visual[e.n - 1];

async function renderEscena(page, e) {
  const h = html(e);
  const key = crypto.createHash('md5').update(h + e.texto + e.dur + e.habla + scale + calidad +
    fs.readFileSync(path.join(__dirname, 'stage.html'))).digest('hex').slice(0, 10);
  const out = path.join(outDir, `escena_${String(e.n).padStart(2, '0')}_${key}.mp4`);
  if (fs.existsSync(out)) return { out, cached: true, warn: [] };

  const { warn, starts } = await page.evaluate(([h, t, l, s, sc]) => window.mount(h, t, l, s, sc), [h, e.texto, e.lead, e.habla, scale]);
  const N = e.frames;
  const tmp = fs.mkdtempSync(path.join(outDir, 'tmp_'));
  const sig = (t) => [Math.min(1, t / FADE), ...starts.map((s) => Math.max(0, Math.min(1, (t - s) / ANIM)))]
    .map((x) => x.toFixed(3)).join(',');
  const lista = []; let prev = null;
  for (let f = 0; f < N; f++) {
    const t = f / FPS, s = sig(t);
    if (s === prev) { lista[lista.length - 1].n++; continue; }
    prev = s;
    await page.evaluate((t) => window.setT(t), t);
    const file = path.join(tmp, `f${String(f).padStart(5, '0')}.${calidad === 'final' ? 'png' : 'jpg'}`);
    await page.screenshot(calidad === 'final' ? { path: file } : { path: file, type: 'jpeg', quality: 88 });
    lista.push({ file, n: 1 });
  }
  const txt = lista.map((x) => `file '${x.file}'\nduration ${(x.n / FPS).toFixed(6)}`).join('\n') +
    `\nfile '${lista[lista.length - 1].file}'\n`;
  fs.writeFileSync(path.join(tmp, 'lista.txt'), txt);
  const enc = calidad === 'final' ? ['-preset', 'medium', '-crf', '18'] : ['-preset', 'veryfast', '-crf', '30'];
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', path.join(tmp, 'lista.txt'),
    '-vf', `fps=${FPS}`, '-frames:v', String(N), '-c:v', 'libx264', ...enc, '-pix_fmt', 'yuv420p', '-r', String(FPS), out]);
  fs.rmSync(tmp, { recursive: true, force: true });
  return { out, cached: false, warn, shots: lista.length };
}

(async () => {
  const browser = await chromium.launch();
  const W = Math.round(1920 * scale), H = Math.round(1080 * scale);
  const cola = [...timing]; const res = {};
  const worker = async () => {
    const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
    await page.goto(stage); await page.evaluate(() => document.fonts.ready);
    while (cola.length) {
      const e = cola.shift(); const r = await renderEscena(page, e); res[e.n] = r.out;
      console.log(`escena ${String(e.n).padStart(2, '0')}  ${r.cached ? 'sin cambios' : `${r.shots} capturas`}` +
        (r.warn.length ? `  ⚠ palabras no encontradas en la narración: ${r.warn.join(' | ')}` : ''));
    }
    await page.close();
  };
  await Promise.all([worker(), worker(), worker()]);
  await browser.close();
  fs.writeFileSync(path.join(outDir, 'segmentos.txt'), timing.map((e) => `file '${res[e.n]}'`).join('\n') + '\n');
  // Limpia versiones viejas de cada escena
  const vivos = new Set(Object.values(res).map((p) => path.basename(p)));
  for (const f of fs.readdirSync(outDir)) if (/^escena_\d+_.*\.mp4$/.test(f) && !vivos.has(f)) fs.unlinkSync(path.join(outDir, f));
})();
