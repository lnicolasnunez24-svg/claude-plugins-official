#!/usr/bin/env python3
"""Arma el video.

  python3 build.py --preview   Vista previa 640x360, con duraciones estimadas (o con los audios que haya).
  python3 build.py             Video final 1920x1080 con los audios de audio/. Para si falta un audio o
                               alguno se aleja mucho de lo estimado.
  python3 build.py --forzar    Igual que el anterior, pero sigue aunque haya audios fuera de rango.
"""
import json, os, subprocess, sys

RAIZ = os.path.dirname(os.path.abspath(__file__))
FPS, LEAD, COLA, COLA_FINAL = 30, 0.4, 1.1, 2.5
RANGO = (0.6, 1.5)          # audio real / estimado aceptable
EXT = (".wav", ".mp3", ".m4a", ".aac", ".flac", ".ogg")

def sh(*a): return subprocess.run(a, check=True, capture_output=True, text=True).stdout

def dur_audio(p):
    return float(sh("ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", p).strip())

def buscar_audio(n):
    for ext in EXT:
        p = os.path.join(RAIZ, "audio", f"escena_{n:02d}{ext}")
        if os.path.exists(p): return p
    return None

def mmss(s): s = int(round(s)); return f"{s//60}:{s%60:02d}"

def main():
    preview = "--preview" in sys.argv; forzar = "--forzar" in sys.argv
    subprocess.run([sys.executable, os.path.join(RAIZ, "escenas.py")], check=True, capture_output=True, cwd=RAIZ)
    escenas = json.load(open(os.path.join(RAIZ, "escenas.json")))

    problemas, timing = [], []
    for e in escenas:
        a = buscar_audio(e["n"])
        if a:
            habla = dur_audio(a); r = habla / e["habla_est"]
            if not (RANGO[0] <= r <= RANGO[1]):
                problemas.append(f"escena {e['n']:02d}: dura {habla:.1f} s y se estimaron {e['habla_est']:.1f} s ({r:.0%})")
        else:
            habla = e["habla_est"]
            if not preview: problemas.append(f"escena {e['n']:02d}: falta audio/escena_{e['n']:02d}.wav")
        cola = COLA_FINAL if e["n"] == len(escenas) else COLA
        frames = round((LEAD + habla + cola) * FPS)
        timing.append({**e, "audio": a, "lead": LEAD, "habla": round(habla, 3), "frames": frames, "dur": frames / FPS})

    if problemas and not preview:
        print("No armé el video final. Revisá esto:\n  " + "\n  ".join(problemas))
        if not forzar: sys.exit(1)
    elif problemas:
        print("Aviso:\n  " + "\n  ".join(problemas))

    out = os.path.join(RAIZ, "render", "preview" if preview else "final")
    os.makedirs(out, exist_ok=True)
    tj = os.path.join(out, "timing.json"); json.dump(timing, open(tj, "w"), ensure_ascii=False, indent=1)
    subprocess.run(["node", os.path.join(RAIZ, "motor", "render.js"), tj, out,
                    "0.3333334" if preview else "1", "preview" if preview else "final"], check=True)

    mudo = os.path.join(out, "video_mudo.mp4")
    sh("ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", os.path.join(out, "segmentos.txt"), "-c", "copy", mudo)

    # Pista de voz: cada audio arranca 0,4 s después del inicio de su escena y se rellena con silencio hasta el final.
    pistas = []
    for t in timing:
        w = os.path.join(out, f"voz_{t['n']:02d}.wav")
        if t["audio"]:
            sh("ffmpeg", "-y", "-loglevel", "error", "-i", t["audio"], "-af",
               f"aresample=48000,adelay={int(LEAD*1000)}:all=1,apad", "-t", f"{t['dur']:.6f}", "-ac", "2", "-ar", "48000", w)
        else:
            sh("ffmpeg", "-y", "-loglevel", "error", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=stereo", "-t", f"{t['dur']:.6f}", w)
        pistas.append(w)
    lista = os.path.join(out, "voces.txt"); open(lista, "w").write("".join(f"file '{p}'\n" for p in pistas))
    voz = os.path.join(out, "voz.wav")
    sh("ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", lista,
       "-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-ar", "48000", voz)

    final = os.path.join(RAIZ, "preview.mp4" if preview else "video_final.mp4")
    sh("ffmpeg", "-y", "-loglevel", "error", "-i", mudo, "-i", voz, "-map", "0:v", "-map", "1:a",
       "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-shortest", "-movflags", "+faststart", final)
    for p in pistas: os.remove(p)

    # Capítulos para la descripción de YouTube
    t0, caps, visto = 0.0, [], set()
    for t in timing:
        if t["cap"] not in visto:
            visto.add(t["cap"]); caps.append(f"{mmss(t0)} {t['capitulo'][3:]}")
        t0 += t["dur"]
    open(os.path.join(RAIZ, "capitulos.txt"), "w").write("\n".join(caps) + "\n")
    print(f"\nListo: {os.path.basename(final)}  ·  duración {mmss(t0)}\n" + "\n".join(caps))

if __name__ == "__main__":
    main()
