// Pantallas de cada escena. El orden coincide con escenas.json (escena 1 = índice 0).
// data-cue="palabra": el elemento entra cuando la narración llega a esa palabra.
// data-at="seg": entra en un segundo fijo. data-d: retraso extra. data-anim: up | pop | fade | grow.
const fs = require('fs'), path = require('path');
const ICONS = path.join(__dirname, '..', 'node_modules', 'lucide-static', 'icons');
const svg = (n) => fs.readFileSync(path.join(ICONS, n + '.svg'), 'utf8').replace(/<!--.*?-->/s, '');
const ic = (n, cls = '') => `<div class="ico ${cls}">${svg(n)}</div>`;
const cue = (c, d) => `data-cue="${c}"${d ? ` data-d="${d}"` : ''}`;
const at = (s) => `data-at="${s}"`;
const T = (title, sub, subCue) =>
  `<h1 ${at(0.15)}>${title}</h1>` + (sub ? `<div class="sub" ${subCue ? cue(subCue) : at(0.5)}>${sub}</div>` : '');
const EJ = (txt = 'Datos de ejemplo', c) => `<div class="ejemplo" ${c ? cue(c) : at(0.8)}>${txt}</div>`;
const AR = (c, d) => `<div class="arrow" ${cue(c, d)}>→</div>`;
const path_ = (parts, c) =>
  `<div class="path" ${cue(c)}>${parts.map((p) => `<span>${p}</span>`).join('<span class="ar">→</span>')}</div>`;

module.exports = [
// 01 — Apertura + índice
`<div class="hrow" ${at(0.1)}>${ic('shield-half')}<div><h1 style="margin:0">Claude para la venta de seguros</h1>
 <div class="sub">Para corredores y ejecutivos</div></div></div>
 <div class="def mt2" ${cue('asistente')}><b>Claude</b> asistente de inteligencia artificial</div>
 <div class="mt" style="display:grid;grid-template-columns:repeat(3,1fr);gap:22px">
 ${[['01','Intro','vamos'],['02','Conceptos básicos','lo básico'],['03','Integraciones','conectarlo'],
    ['04','Análisis de documentos','leer pólizas'],['05','Rutinas','programar'],['06','Correo','correo'],
    ['07','ManyChat (o similares)','whatsapp'],['08','WhatsApp templates','whatsapp'],['09','Seguridad','seguridad']]
   .map(([n,t,c])=>`<div class="card" style="padding:24px 30px;display:flex;gap:24px;align-items:center" ${cue(c)}>
   <span class="num" style="font-size:44px">${n}</span><span style="font-size:32px;font-weight:600">${t}</span></div>`).join('')}
 </div>`,

// 02 — Federico
`${T('Quién armó este material')}
 <div class="mt2" ${cue('federico')}><div style="font-size:52px;font-weight:700">Federico Zolkwer</div>
 <div class="sub" style="margin-top:6px">Ingeniero en sistemas. Siempre en el mundo del software.</div></div>
 <div style="position:relative;margin-top:90px">
  <div style="position:absolute;left:12%;right:12%;top:58px;height:6px;background:#D5D9E0" data-anim="grow" ${cue('ingeniero')}></div>
  <div class="row" style="position:relative">
  ${[['code-xml','Software','Equipo de tecnología en una empresa de cumplimiento tributario en LATAM','ingeniero'],
     ['users','Seguros Flow','Con un amigo corredor: venta masiva con IA sin perder el toque humano','seguros flow'],
     ['bot','Clivo','Seguros Flow mutó a Clivo: un corredor full IA','clivo'],
     ['sprout','Seeders Labs','Cofundador. Gestión de agentes de IA','seeders']]
    .map(([i,t,d,c])=>`<div class="grow" style="text-align:center" ${cue(c)}>
     <div style="display:flex;justify-content:center">${ic(i)}</div>
     <div style="font-size:40px;font-weight:700">${t}</div><p style="font-size:29px;color:var(--muted);margin-top:10px">${d}</p></div>`).join('')}
  </div></div>`,

// 03 — Modelos
`${T('Modelos: cuándo usar cada uno')}
 <div class="row mt">
 ${[['zap','Haiku','Rápido y liviano','Preguntas simples y tareas repetitivas','Resumime esta póliza en 3 líneas'],
    ['scale','Sonnet','El del día a día','Redacción, análisis y la mayoría de las tareas','Armá un mail de renovación para este cliente'],
    ['brain','Opus','Razonamiento profundo','Tareas complejas de varios pasos','Compará 5 cotizaciones y recomendá la mejor'],
    ['gem','Fable','El más potente','Problemas muy difíciles; usar con criterio','Diseñá el proceso comercial completo de la agencia']]
   .map(([i,n,k,p,q])=>`<div class="card grow" ${cue(n)}>${ic(i)}<h3>${n}</h3><div class="k">${k}</div><p style="font-size:31px">${p}</p><div class="q">“${q}”</div></div>`).join('')}
 </div>
 <div class="mt2" ${cue('cuanto más potente')}>
  <div style="height:14px;border-radius:7px;background:linear-gradient(90deg,#D5D9E0,var(--orange))"></div>
  <div style="display:flex;justify-content:space-between;font-size:29px;color:var(--muted);margin-top:12px"><span>Menos consumo de tu plan</span><span>Más consumo de tu plan (Pro / Max)</span></div>
 </div>`,

// 04 — Tokens
`${T('¿Cuánto estoy usando?')}
 <div class="row mt">
  <div class="card grow" ${cue('tokens')}>${ic('coins')}<h3>Tokens</h3><div class="k">La “moneda” de Claude</div>
   <p>Cada mensaje, archivo y respuesta consume tokens.</p></div>
  <div class="card grow" ${cue('lo ves')}>${ic('settings')}<h3>Dónde verlo</h3>
   <div style="margin:18px 0">${path_(['Configuración','Uso'],'lo ves')}</div>
   <p>Límite de la sesión y de la semana.</p></div>
  <div class="card grow peach" ${cue('para que te rinda')}>${ic('check')}<h3>Cómo rendirlo</h3>
   <ul class="b ok" style="margin-top:14px"><li ${cue('modelo adecuado')}>Modelo adecuado</li><li ${cue('chats cortos')}>Chats cortos y por tema</li><li ${cue('subí archivos')}>Archivos solo cuando hacen falta</li></ul></div>
 </div>`,

// 05 — Modos
`${T('Modos: Chat, Cowork y Code')}
 <div class="row mt">
 ${[['message-circle','Chat','Para preguntar','Consultas, ideas, borradores','¿Qué cubre un seguro de responsabilidad civil?','chat es'],
    ['folder-open','Cowork','Para trabajar con archivos','Lee, crea y modifica archivos de tu computadora y usa tus herramientas','Ordená las pólizas de esta carpeta y armá un Excel de vencimientos','cowork'],
    ['code-xml','Code','Para construir aplicaciones','Programa, prueba y despliega software','Creá un cotizador web para seguros de auto','code']]
   .map(([i,n,k,p,q,c])=>`<div class="card grow" ${cue(c)}>${ic(i)}<h3>${n}</h3><div class="k">${k}</div><p>${p}</p><div class="q">Ejemplo: “${q}”</div></div>`).join('')}
 </div>`,

// 06 — Proyectos, memoria, contexto
`${T('Proyectos, memoria y ventana de contexto')}
 <div class="col mt">
 <div class="card hrow" style="padding:30px 40px" ${cue('un proyecto')}>${ic('briefcase','sm')}<div><h3 style="font-size:40px;margin:0">Proyectos</h3>
   <p style="font-size:31px">Instrucciones y archivos fijos (condicionados, tarifas, tono de la agencia) que se reutilizan en cada chat del proyecto.</p></div></div>
 <div class="card hrow" style="padding:30px 40px" ${cue('la memoria')}>${ic('bookmark','sm')}<div><h3 style="font-size:40px;margin:0">Memoria</h3>
   <p style="font-size:31px">Recuerda datos tuyos entre conversaciones: tu rol, tu forma de trabajar. Se puede ver y editar.</p></div></div>
 <div class="card hrow" style="padding:30px 40px" ${cue('la ventana')}>${ic('app-window','sm')}<div class="grow"><h3 style="font-size:40px;margin:0">Ventana de contexto</h3>
   <p style="font-size:31px">Todo lo que Claude “tiene en la cabeza” en un chat. Grande, pero finita.</p>
   <div style="margin-top:14px;height:22px;border-radius:11px;background:#EEF0F4;overflow:hidden"><div style="height:100%;width:100%;background:var(--orange)" data-anim="grow" ${cue('finita')}></div></div>
   <div class="note" style="margin-top:8px" ${cue('chats muy largos')}>Chats muy largos: menos precisión, más consumo</div></div></div>
 </div>`,

// 07 — Skills
`${T('Skills: instrucciones a medida')}
 <div class="row mt">
  <div class="col grow" style="gap:40px">
   ${[['pen-tool','Se escribe una vez','Pasos, tono, formato y ejemplos','una sola vez'],
      ['wand-sparkles','Se activa sola','Cuando la tarea coincide, o la llamás por su nombre','la usa sola'],
      ['check-check','Mismo resultado siempre','Todo el equipo con el mismo estándar','mismo estándar']]
     .map(([i,t,d,c])=>`<div class="hrow" ${cue(c)}>${ic(i,'sm')}<div><div style="font-size:38px;font-weight:700">${t}</div><div style="font-size:30px;color:var(--muted)">${d}</div></div></div>`).join('')}
  </div>
  <div class="card dark" style="width:820px" ${cue('por ejemplo')}>
   <div style="font-size:26px;color:#AEB6C6">Ejemplo de skill</div>
   <div style="font-size:42px;font-weight:700;color:var(--orange);margin:6px 0 20px">“Mail de renovación”</div>
   <ul class="b" style="gap:12px">
    <li ${cue('saludar')} style="font-size:30px">Saludar por el nombre y nombrar la póliza que vence</li>
    <li ${cue('prima')} style="font-size:30px">Prima actual vs. nueva en una tabla</li>
    <li ${cue('dos alternativas')} style="font-size:30px">Ofrecer 2 alternativas de cobertura</li>
    <li ${cue('dos alternativas','0.6')} style="font-size:30px">Tono cercano, máximo 120 palabras</li>
    <li ${cue('link')} style="font-size:30px">Cerrar con link para agendar llamada</li></ul>
   <div class="q" ${cue('link','0.6')}>Uso: “Armá el mail de renovación para María G.”</div>
  </div>
 </div>`,

// 08 — Dónde se agregan
`${T('¿Dónde se agregan las integraciones?','Conectar Claude con las herramientas que ya usás','conectar')}
 <div class="flow mt" style="margin-top:90px;flex-wrap:nowrap">
 ${[['1','Configuración','entrás'],['2','Conectores','vas a conectores'],['3','Explorar / Agregar','explorar'],['4','Notion → Conectar','notion'],['5','Autorizar acceso','autorizás']]
   .map(([n,t,c],k)=>`${k?AR(c):''}<div class="box ${k==4?'o':''}" style="flex:1;padding:30px 18px" ${cue(c)}><div class="num" style="font-size:52px;${k==4?'color:#fff':''}">${n}</div>${t}</div>`).join('')}
 </div>
 <div class="note mt" style="margin-top:70px" ${cue('los nombres')}>Los nombres de los menús pueden variar un poco: el camino es el mismo.</div>`,

// 09 — Qué es Notion
`${T('¿Qué es Notion?','Un espacio de trabajo todo-en-uno, compartido con tu equipo.','todo en uno')}
 <div class="row mt">
 ${[['file-text','Documentos','Notas, procesos de venta, guiones','documentos'],['table','Bases de datos','Clientes, pólizas, vencimientos','bases de datos'],
    ['book-open','Wiki','Manual de productos y aseguradoras','wiki'],['list-checks','Tareas','Seguimientos y pendientes del equipo','tareas']]
   .map(([i,t,d,c])=>`<div class="card grow" style="text-align:center" ${cue(c)}><div style="display:flex;justify-content:center">${ic(i)}</div><h3>${t}</h3><p style="font-size:30px;color:var(--muted)">${d}</p></div>`).join('')}
 </div>
 <div class="note mt" style="font-size:36px" ${cue('con el conector')}>Con el conector, Claude puede leer, buscar y actualizar todo esto por vos.</div>`,

// 10 — Notion como CRM
`${T('Ejemplo: Notion como CRM')}
 <div class="def mt2" ${cue('crm')}><b>CRM</b> tu base de clientes</div>
 <div class="row mt2">
  <div style="width:880px" ${cue('el ramo')}>
   <table class="t"><tr><th>Cliente</th><th>Ramo</th><th>Vence</th><th>Estado</th></tr>
   <tr><td>María G.</td><td>Auto</td><td>02/12</td><td>Renovar</td></tr><tr><td>Pedro L.</td><td>Hogar</td><td>15/12</td><td>Cotizado</td></tr>
   <tr><td>Ana R.</td><td>Vida</td><td>10/01</td><td>Nuevo lead</td></tr><tr><td>Juan M.</td><td>Auto</td><td>20/01</td><td>Al día</td></tr></table>
  </div>
  <div class="col grow" style="gap:24px"><div style="font-size:32px;font-weight:700" ${cue('le podés pedir')}>Le pedís a Claude:</div>
   <div class="bubble" ${cue('qué pólizas')}>“¿Qué pólizas vencen en los próximos 30 días?”</div>
   <div class="bubble" ${cue('agregá')}>“Agregá a Ana R. como lead de Vida con lo que hablamos hoy”</div>
   <div class="bubble" ${cue('armá')}>“Armá un mail de renovación para cada cliente en estado Renovar”</div></div>
 </div>${EJ('Datos de ejemplo','el ramo')}`,

// 11 — Permisos
`${T('Permisos: empezar con lo mínimo')}
 <div class="col mt">
  <div class="card peach hrow" ${cue('solo lectura')}>${ic('eye','sm')}<div class="grow"><h3>Solo lectura</h3>
   <p>En la configuración del conector, habilitá únicamente las acciones de lectura.</p>
   <p style="font-weight:700;margin-top:6px" ${cue('así claude consulta')}>Claude consulta tu CRM, pero no modifica ni borra nada.</p>
   <div class="mt2" style="margin-top:18px">${path_(['Configuración','Conectores','Notion'],'en la configuración')}</div></div></div>
  <div class="card hrow" ${cue('cuando claude te pida')}>${ic('user-check','sm')}<div class="grow"><h3>Permitir una vez</h3>
   <div class="hrow" style="gap:24px;margin-top:8px">
    <span class="chip hot" ${cue('permitir una vez')}>✓ Permitir una vez</span>
    <span class="chip" style="position:relative;background:#EEF0F4;color:var(--muted)" ${cue('permitir siempre')}>Permitir siempre
     <span style="position:absolute;left:16px;right:16px;top:50%;height:4px;background:var(--orange)" data-anim="grow" ${cue('permitir siempre','0.4')}></span></span>
   </div>
   <p style="margin-top:14px" ${cue('aprobás')}>Vos aprobás cada acción. Aparece en el chat, antes de cada uso.</p></div></div>
 </div>`,

// 12 — Tres formas
`${T('Tres formas de darle documentos','Pólizas · condicionados · cotizaciones')}
 <div class="row mt">
 ${[['file-up','01','En el chat','Arrastrás el archivo a la conversación.','Rápido para un documento puntual','una:'],
    ['folder-open','02','Carpeta en Cowork','Le das acceso a una carpeta. Claude decide qué abrir y cuándo.','Usá copias: Cowork puede modificar archivos','dos:'],
    ['cloud','03','Integración','Los documentos viven en Notion, Drive u otra herramienta. Claude pide permiso para leerlos.','Ideal si ya están organizados ahí','tres:']]
   .map(([i,n,t,p,nota,c])=>`<div class="card grow" style="display:flex;flex-direction:column" ${cue(c)}>
    <div style="display:flex;justify-content:space-between">${ic(i)}<span class="num" style="font-size:54px;color:#C9CFDB">${n}</span></div>
    <h3>${t}</h3><p class="grow">${p}</p><div class="note" style="background:var(--bg);border-radius:14px;padding:16px 20px;margin-top:20px;${n=='02'?'font-weight:700':''}">${nota}</div></div>`).join('')}
 </div>`,

// 13 — Límite
`${T('El límite: documentos muy largos','Claude lee muy bien documentos cortos.','lee muy bien')}
 <div class="col mt" style="gap:44px;margin-top:70px">
 ${[['Cotización de 4 páginas','22%','var(--teal)','Sobra espacio','cuatro páginas'],
    ['Póliza de 30 páginas','60%','var(--yellow)','Funciona, con cuidado','treinta'],
    ['Póliza + condicionado de 200 páginas','100%','var(--orange)','Contexto lleno','doscientas']]
   .map(([l,w,c,r,q])=>`<div class="hrow" style="gap:40px" ${cue(q)}><div style="width:560px;font-size:32px">${l}</div>
    <div class="grow" style="height:56px;border-radius:16px;background:#fff;border:2px solid var(--line);overflow:hidden">
     <div style="height:100%;width:${w};background:${c}" data-anim="grow" ${cue(q,'0.2')}></div></div>
    <div style="width:330px;font-size:29px;${w=='100%'?'color:var(--orange);font-weight:700':'color:var(--muted)'}">${r}</div></div>`).join('')}
 </div>
 <div class="hrow mt" style="justify-content:center;gap:20px" ${cue('pierde detalle')}>
  <span class="chip hot">Pierde detalle</span><span class="chip hot" ${cue('mezcla')}>Mezcla datos</span><span class="chip hot" ${cue('no termina')}>No termina</span></div>`,

// 14 — Dos soluciones
`${T('Dos soluciones')}
 <div class="row mt">
  <div class="card grow" ${cue('la primera')}><h3>1. Extraer y después trabajar</h3>
   <p style="font-size:30px;color:var(--muted)">Un chat pasa el PDF a texto con solo lo importante. Otro chat trabaja sobre ese texto.</p>
   <div class="flow mt2" style="gap:16px">
    <div class="box n" ${cue('lee el pdf')}>PDF</div>${AR('lo pasa a texto')}<div class="box o" ${cue('lo pasa a texto')}>Chat 1<small>extrae</small></div>${AR('otro chat')}<div class="box p" ${cue('otro chat')}>Chat 2<small>usa el .txt</small></div></div>
   <div class="note mt2" ${cue('medianos')}>Para: documentos medianos</div></div>
  <div class="card grow" ${cue('la segunda')}><h3>2. Dividir y consolidar</h3>
   <p style="font-size:30px;color:var(--muted)">Varios agentes leen partes distintas en paralelo. Uno final junta todo.</p>
   <div class="flow mt2" style="gap:16px">
    <div class="box n">PDF</div><div class="arrow">→</div>
    <div class="col" style="gap:10px" ${cue('partes distintas')}><div class="box o" style="padding:12px 22px">Pág. 1-5</div><div class="box o" style="padding:12px 22px">Pág. 6-10</div><div class="box o" style="padding:12px 22px">Pág. 11-15</div></div>
    ${AR('uno final')}<div class="box p" ${cue('uno final')}>Agente final<small>consolida</small></div></div>
   <div class="note mt2" ${cue('enormes')}>Para: pólizas y condicionados enormes</div></div>
 </div>
 <div class="def mt2" ${cue('o sea')}><b>Agente</b> una tarea de Claude trabajando a la vez que otras</div>`,

// 15 — De menos a más
`${T('Siempre de menos a más')}
 <div class="row mt" style="align-items:flex-end;height:640px">
  <div style="width:400px;height:220px;background:var(--peach);border-radius:24px;padding:30px" ${cue('escalón uno')} data-anim="pop">
   <div class="num" style="font-size:60px">1</div><div style="font-size:34px;font-weight:700">Adjuntar y preguntar</div></div>
  <div style="width:400px;height:390px;background:var(--orange);color:#fff;border-radius:24px;padding:30px" ${cue('escalón dos')} data-anim="pop">
   <div class="num" style="font-size:60px;color:#fff">2</div><div style="font-size:34px;font-weight:700">Extraer a texto</div></div>
  <div style="width:400px;height:560px;background:var(--navy);color:#fff;border-radius:24px;padding:30px" ${cue('escalón tres')} data-anim="pop">
   <div class="num" style="font-size:60px;color:#fff">3</div><div style="font-size:34px;font-weight:700">Agentes en paralelo</div></div>
  <div class="grow col" style="align-self:flex-start;gap:16px;padding-left:20px">
   <div style="font-size:40px;font-weight:700" ${cue('la regla')}>La regla</div>
   <p style="font-size:30px" ${cue('la regla','0.4')}>Empezá por el escalón 1. Si se llena la ventana de contexto o el resultado no alcanza, subí uno.</p>
   <div style="font-size:28px;color:var(--muted)" ${cue('muchas veces')}>1 · Muchas veces alcanza</div>
   <div style="font-size:28px;color:var(--muted)" ${cue('si ves')}>2 · Chat lleno o poco detalle</div>
   <div style="font-size:28px;color:var(--muted)" ${cue('enorme')}>3 · Documentos enormes</div></div>
 </div>`,

// 16 — Prompt agentes en paralelo
`<h1 ${at(0.15)} style="font-size:72px">Ejemplo de pedido: agentes en paralelo</h1>
 <div class="row mt2">
  <div class="card dark mono" style="width:1060px;font-size:26px;line-height:1.4;padding:32px;align-self:flex-start" ${cue('así se ve')}>
   <div style="color:var(--orange);margin-bottom:14px">Modo Cowork</div>
   <p style="font-size:26px">Quiero procesar este archivo. Para hacerlo vamos a usar 2 tipos de agentes.</p>
   <p style="font-size:26px;margin-top:14px" ${cue('el primero')}>Agente 1: analiza 5 páginas del PDF polizas/autos-sura.pdf y extrae toda la información relevante. Guarda el extracto en un archivo .txt en la carpeta resumenes-txt. Lanzá estos agentes en paralelo, de a 5 páginas cada uno, hasta completar el archivo.</p>
   <p style="font-size:26px;margin-top:14px" ${cue('el segundo')}>Agente 2: se ejecuta cuando todos los anteriores terminaron y genera un .txt con el resumen de todos los extractos.</p>
  </div>
  <div class="col grow" style="gap:4px;align-items:stretch">
   <div class="box" style="font-size:28px;padding:18px" ${cue('el primero')}>polizas/autos-sura.pdf</div><div class="arrow" style="text-align:center;font-size:36px;line-height:1.1" ${cue('cinco páginas')}>↓</div>
   <div class="box o" style="font-size:28px;padding:18px" ${cue('cinco páginas')}>Agente 1 × N<small>5 páginas c/u, en paralelo</small></div><div class="arrow" style="text-align:center;font-size:36px;line-height:1.1" ${cue('archivo de texto')}>↓</div>
   <div class="box" style="font-size:28px;padding:18px" ${cue('archivo de texto')}>resumenes-txt/</div><div class="arrow" style="text-align:center;font-size:36px;line-height:1.1" ${cue('el segundo')}>↓</div>
   <div class="box p" style="font-size:28px;padding:18px" ${cue('el segundo')}>Agente 2<small>resumen final .txt</small></div>
  </div>
 </div>
 <div class="note mt2" style="font-size:32px" ${cue('pausá')}>Pausá el video si querés copiar el texto.</div>`,

// 17 — Rutina
`${T('Rutina: que Claude te avise','Una tarea programada que revisa el CRM en Notion sola y te deja el resumen listo.','tarea programada')}
 <div class="row mt">
  <div class="card grow">
   <div class="hrow" ${cue('lunes a viernes')}>${ic('clock','sm')}<div><div style="font-weight:700">Cuándo</div><div style="color:var(--orange);font-size:40px;font-weight:700">Lunes a viernes, 8:30</div></div></div>
   <div style="font-weight:700;margin-top:34px" ${cue('que revise')}>Qué le pedís</div>
   <p class="q" style="font-size:31px;margin-top:10px" ${cue('que revise')}>“Revisá el CRM en Notion. Listame las pólizas que vencen en los próximos 30 días, los leads sin contacto hace más de 3 días y los seguimientos de hoy.”</p></div>
  <div class="card dark grow" ${cue('cuando llegás')}>
   <div style="font-size:40px;font-weight:700;color:var(--orange);margin-bottom:24px">Tu resumen de hoy</div>
   <ul class="b" style="gap:22px"><li ${cue('cuando llegás','0.3')}>Vencen pronto: María G. (Auto, 02/12) y Pedro L. (Hogar, 15/12)</li>
   <li ${cue('cuando llegás','0.7')}>Leads sin contacto: Ana R. (Vida), hace 4 días</li>
   <li ${cue('cuando llegás','1.1')}>Seguimientos de hoy: llamar a Juan M. por endoso</li></ul></div>
 </div>${EJ('Datos de ejemplo','cuando llegás')}`,

// 18 — Gmail
`${T('Integración con Gmail')}
 <div class="col mt">
 ${[['search','Buscar y leer','Encuentra correos, hilos y adjuntos','buscar'],['pen-line','Redactar borradores','Escribe respuestas y las deja en tu bandeja','redactar'],['tags','Organizar','Etiqueta y ordena correos','etiquetar']]
   .map(([i,t,d,c])=>`<div class="card hrow" style="padding:28px 40px" ${cue(c)}>${ic(i,'sm')}<div><div style="font-size:40px;font-weight:700">${t}</div><div style="font-size:31px;color:var(--muted)">${d}</div></div></div>`).join('')}
 </div>
 <div class="hrow mt2" style="gap:30px">${path_(['Configuración','Conectores','Gmail'],'se conecta')}<span class="note" ${cue('mismas reglas')}>Mismas reglas de permisos</span></div>`,

// 19 — Borrador
`${T('Tu formato, y la salida en borrador')}
 <div class="flow mt" style="align-items:stretch">
 ${[['message-square','Pedido','“Respondé a Pedro con la cotización de Hogar”','respondé'],
    ['wand-sparkles','Skill de formato','Saludo, estructura, tono y firma de la agencia','skill'],
    ['file-text','Borrador en Gmail','Claude lo deja en Borradores, no lo envía','borradores'],
    ['user-check','Vos revisás y enviás','El toque humano queda en tus manos','vos lo revisás']]
   .map(([i,t,d,c],k)=>`${k?`<div class="arrow" style="align-self:center;color:var(--orange)" ${cue(c)}>→</div>`:''}<div class="card grow ${k==2?'peach':''}" style="text-align:center;padding:32px 24px" ${cue(c)}>
    <div style="display:flex;justify-content:center">${ic(i)}</div><div style="font-size:36px;font-weight:700">${t}</div><p style="font-size:29px;color:var(--muted);margin-top:10px">${d}</p></div>`).join('')}
 </div>
 <div class="mt" style="font-size:38px;font-weight:700;color:var(--orange)" ${cue('la regla')}>Pedile siempre: “dejalo en borrador”. Nunca le pidas que envíe directo a un cliente.</div>`,

// 20 — Resumen diario
`${T('Resumen diario de la bandeja')}
 <div class="row mt">
  <div class="card grow">
   <div class="hrow" ${cue('todos los días')}>${ic('clock','sm')}<div><div style="font-weight:700">Rutina diaria</div><div style="color:var(--orange);font-size:40px;font-weight:700">Todos los días, 8:00</div></div></div>
   <p class="q" style="font-size:31px;margin-top:34px" ${cue('resumí')}>“Resumí los correos de las últimas 24 horas. Separá: urgentes, clientes, aseguradoras y siniestros. Marcá cuáles necesitan respuesta y dejá borradores para los simples.”</p></div>
  <div class="col grow" style="gap:18px">
  ${[['Urgentes','Siniestro de Juan M.: falta la denuncia policial','siniestro urgente',1],['Clientes','3 consultas; 2 borradores listos para revisar','consultas',0],
     ['Aseguradoras','Sura envió la cotización de Hogar de Pedro L.','consultas',0],['Sin acción','12 newsletters y avisos','newsletters',0]]
    .map(([t,d,c,h],k)=>`<div class="card ${h?'peach':''}" style="padding:22px 32px" ${cue(c,k==2?'0.6':'')}><div style="font-size:32px;font-weight:700;${h?'color:var(--orange)':''}">${t}</div><div style="font-size:29px">${d}</div></div>`).join('')}
  </div>
 </div>${EJ('Datos de ejemplo','algo así')}`,

// 21 — Encontrar ese correo
`${T('Encontrar ese correo','En vez de pelear con el buscador, pedíselo como a un asistente.','pedíselo')}
 <div class="mt" style="display:grid;grid-template-columns:1fr 1fr;gap:30px">
 ${[['receipt','Traeme el último mail de Sura con la cotización de Pedro L.','traeme'],['car','¿Qué siniestros me reportaron esta semana?','siniestros'],
    ['hourglass','¿Qué clientes me escribieron y siguen sin respuesta hace más de 2 días?','clientes me'],['paperclip','Buscá la póliza firmada de María G. y guardala en su carpeta','buscá']]
   .map(([i,t,c])=>`<div class="card hrow" style="padding:36px" ${cue(c)}>${ic(i,'sm')}<div style="font-style:italic;font-size:33px">“${t}”</div></div>`).join('')}
 </div>`,

// 22 — Juntemos todo
`${T('Juntemos todo: seguimiento de siniestros')}
 <div class="row mt">
  <div class="card" style="width:640px" ${cue('una rutina')}>
   <div class="hrow">${ic('clock','sm')}<div><div style="font-weight:700">Rutina diaria</div><div style="color:var(--orange);font-size:40px;font-weight:700">Todos los días, 8:00</div></div></div>
   <p class="q" style="font-size:33px;margin-top:34px">Seguimiento de los siniestros con los ejecutivos</p></div>
  <div class="col grow" style="gap:20px">
  ${[['Notion','Cuáles están abiertos','notion'],['Drive','Fotos de siniestros','drive'],['Gmail','Creación de borradores','gmail']]
    .map(([t,d,c])=>`<div class="card" style="padding:26px 34px" ${cue(c)}><div style="font-size:36px;font-weight:700">${t}</div><div style="font-size:31px;color:var(--muted)">${d}</div></div>`).join('')}
  </div>
 </div>
 <div class="note mt2" style="font-size:38px;font-weight:700;text-align:center" ${cue('tres herramientas')}>Tres herramientas, una sola tarea.</div>${EJ('Datos de ejemplo','una rutina')}`,

// 23 — ManyChat
`${T('ManyChat: un agente de respuestas rápidas','Automatiza WhatsApp: un agente que contesta al instante, a cualquier hora.','automatizar')}
 <div class="row mt">
  <div class="card peach grow" ${cue('contesta')}><div class="hrow" style="margin-bottom:26px">${ic('check','sm')}<h3 style="margin:0;color:var(--orange)">Lo que hace bien</h3></div>
   <ul class="b ok"><li ${cue('al instante')}>Responde en segundos, 24/7</li><li ${cue('pide datos')}>Pide datos y los guarda con tags (ramo, vehículo, edad, zona)</li><li ${cue('califica')}>Califica leads antes de que lleguen al corredor</li></ul></div>
  <div class="card grow" ${cue('límites')}><div class="hrow" style="margin-bottom:26px">${ic('triangle-alert','sm')}<h3 style="margin:0">Sus límites</h3></div>
   <ul class="b no"><li ${cue('coberturas')}>No sabe tanto de la póliza: coberturas y excepciones son terreno del corredor</li><li ${cue('cerradas')}>Funciona mejor con preguntas cerradas y flujos cortos</li><li ${cue('derivar')}>Necesita derivar a una persona cuando la charla se complica</li></ul></div>
 </div>`,

// 24 — Calificar leads
`${T('Para qué sirve: calificar leads')}
 <div class="row mt2">
  <div class="card col" style="width:880px;gap:16px;background:#EDE7DF;border:none;padding:32px">
   ${[['r','Hola, quiero cotizar un seguro para mi auto','quiero cotizar'],['l','¡Hola! ¿Qué auto es y de qué año?','qué auto'],['r','Corolla 2021','corolla'],
      ['l','¿En qué barrio lo guardás de noche?','barrio'],['r','Pocitos','pocitos'],['l','¡Listo! Un asesor te escribe en minutos con tu cotización.','asesor']]
     .map(([s,t,c])=>`<div style="align-self:${s=='r'?'flex-end':'flex-start'};max-width:80%;background:${s=='r'?'#DDF5CC':'#fff'};border-radius:20px;padding:16px 24px;font-size:29px" ${cue(c)}>${t}</div>`).join('')}
  </div>
  <div class="col grow" style="gap:22px">
   <div style="font-size:34px;font-weight:700" ${cue('guardó todo')}>Datos que guarda (tags)</div>
   <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;font-size:0">
    <span class="chip" style="text-align:center;font-size:26px;padding:12px 16px" ${cue('guardó todo','0.2')}>ramo: Auto</span><span class="chip" style="text-align:center;font-size:26px;padding:12px 16px" ${cue('guardó todo','0.5')}>vehículo: Corolla 2021</span>
    <span class="chip" style="text-align:center;font-size:26px;padding:12px 16px" ${cue('guardó todo','0.8')}>zona: Pocitos</span><span class="chip hot" style="text-align:center;font-size:26px;padding:12px 16px" ${cue('lead caliente')}>estado: Lead caliente</span></div>
   <div class="card dark" ${cue('vos recibís')}><div style="color:var(--orange);font-weight:700;margin-bottom:10px">Resultado</div>
    <p style="font-size:30px">El corredor recibe solo leads con los datos completos y listos para cotizar. Menos tiempo preguntando, más tiempo vendiendo.</p></div>
  </div>
 </div>${EJ('Ejemplo','quiero cotizar')}`,

// 25 — Claude baja a Notion
`${T('Claude baja las conversaciones a Notion')}
 <div class="flow mt" style="align-items:stretch">
 ${[['message-circle','ManyChat','Conversaciones, datos y tags de cada lead','manychat tiene',0],['bot','Claude','Ordena, resume la charla, evita duplicados y propone el próximo paso','claude las ordena',1],
    ['table','CRM en Notion','Lead cargado con su resumen, estado y fecha de seguimiento','todo termina',0]]
   .map(([i,t,d,c,h],k)=>`${k?`<div class="arrow" style="align-self:center;color:var(--orange)" ${cue(c)}>→</div>`:''}<div class="card grow ${h?'peach':''}" style="text-align:center" ${cue(c)}>
    <div style="display:flex;justify-content:center">${ic(i)}</div><h3>${t}</h3><p style="font-size:30px;color:var(--muted)">${d}</p></div>`).join('')}
 </div>
 <div class="card dark mt" ${cue('rutina diaria')}><p style="font-size:31px"><b style="color:var(--orange)">Rutina diaria ·</b> <i>“Tomá los leads nuevos de ManyChat de las últimas 24 horas. Para cada uno, creá o actualizá su ficha en el CRM de Notion con los tags, un resumen de la conversación y el próximo paso sugerido.”</i></p></div>`,

// 26 — Deeplink
`${T('¿Qué es un deeplink?','Un link que ya trae a quién mandarle y qué decirle. WhatsApp arma el chat listo: solo tocás enviar.','un link')}
 <div class="card dark mono mt" style="font-size:40px;padding:40px 48px" ${cue('lo abrís')}>https://wa.me/<span style="color:var(--orange)" >59899123456</span>?text=<span style="color:var(--yellow)">Hola%20María%2C%20tu%20seguro...</span></div>
 <div class="row mt2">
 ${[['phone','Número','Con código de país, sin “+”, espacios ni guiones','el número'],['message-square','Mensaje','El texto prearmado, codificado para el link (Claude lo hace por vos)','el mensaje'],['send','Resultado','Un clic abre el chat con todo listo. El envío sigue siendo tuyo','el envío']]
   .map(([i,t,d,c])=>`<div class="card grow" ${cue(c)}><div class="hrow" style="gap:20px;margin-bottom:14px">${ic(i,'sm')}<h3 style="margin:0">${t}</h3></div><p style="font-size:30px">${d}</p></div>`).join('')}
 </div>${EJ('Ejemplo','lo abrís')}`,

// 27 — Renovaciones del mes
`${T('Ejemplo: renovaciones del mes')}
 <div class="row mt2">
  <div class="card peach" style="width:560px" ${cue('le pedís')}><div style="color:var(--orange);font-weight:700;margin-bottom:12px">Le pedís a Claude</div>
   <p class="q" style="font-size:30px;margin:0;color:var(--ink)">“Tomá del CRM las pólizas que vencen este mes. Para cada cliente armá un mensaje de renovación personalizado y su deeplink de WhatsApp. Guardalos en una columna del CRM.”</p></div>
  <div class="grow" ${cue('te queda')}>
   <table class="t" style="font-size:27px"><tr><th>Cliente</th><th>Mensaje</th><th>Link</th></tr>
   ${[['María G.','Hola María, tu seguro de auto vence el 02/12. Te preparé la renovación con dos opciones, ¿te las paso?'],
      ['Pedro L.','Hola Pedro, tu seguro de hogar vence el 15/12. ¿Querés que revisemos la suma asegurada antes de renovar?'],
      ['Juan M.','Hola Juan, se viene la renovación de tu auto (20/01). ¿Coordinamos 10 minutos esta semana?']]
     .map(([c,m])=>`<tr><td style="white-space:nowrap">${c}</td><td>${m}</td><td style="background:var(--green);color:#fff;font-weight:700;white-space:nowrap">Abrir WhatsApp</td></tr>`).join('')}
   </table></div>
 </div>
 <div class="note mt2" style="font-size:34px" ${cue('combinalo')}>Combinalo con una skill (tono de los mensajes) y una rutina mensual.</div>${EJ('Datos de ejemplo','te queda')}`,

// 28 — Envío masivo
`${T('¿Se puede automatizar el envío masivo?','Sí, por dos caminos con riesgos muy distintos.','dos caminos')}
 <div class="row mt">
  <div class="card grow" ${cue('el no oficial')}><div class="hrow" style="margin-bottom:14px">${ic('triangle-alert','sm')}<h3 style="margin:0;color:var(--orange)">No oficial</h3></div>
   <p class="q" style="margin:0 0 24px">Herramientas que automatizan tu WhatsApp por fuera de la API de Meta</p>
   <ul class="b no"><li ${cue('fácil')}>Fácil y rápido de armar</li><li ${cue('dar de baja')}>Meta puede dar de baja el número</li><li ${cue('perdés el canal')}>Riesgo de perder tu canal con clientes</li></ul></div>
  <div class="card peach grow" ${cue('el oficial')}><div class="hrow" style="margin-bottom:14px">${ic('shield-check','sm')}<h3 style="margin:0">Oficial (API de WhatsApp Business)</h3></div>
   <p class="q" style="margin:0 0 24px">Directo con Meta o con un proveedor certificado</p>
   <ul class="b"><li ${cue('más técnica')}>Más técnica y compleja de configurar</li><li ${cue('templates aprobados')}>Envíos masivos solo con templates aprobados por Meta</li><li ${cue('mensajes libres')}>No permite mensajes libres a quien no te escribió</li></ul></div>
 </div>
 <div class="def mt2" ${cue('dueña')}><b>Meta</b> la empresa dueña de WhatsApp</div>`,

// 29 — Accesos
`${T('Accesos: lo mínimo necesario','Darle a Claude solo lo que necesita, y nada más.','solo lo que necesita')}
 <div class="row mt">
 ${[['folder','Cowork: nunca toda la compu','Dale acceso solo a la carpeta del trabajo, idealmente con copias de los documentos.','Sí: /polizas-autos · No: el disco entero','en cowork',1],
    ['globe','Claude in Chrome: solo las páginas que vas a usar','La extensión tiene control total del navegador en los sitios que autorizás.','Autorizá sitio por sitio, no “todos”','chrome',0],
    ['puzzle','Plugins y conectores: solo los necesarios','Activá únicamente los que la tarea requiere y siempre en solo lectura.','Escritura solo cuando haga falta y por un rato','plugins',0]]
   .map(([i,t,d,n,c,h])=>`<div class="card grow ${h?'peach':''}" style="display:flex;flex-direction:column" ${cue(c)}>${ic(i)}<h3 style="font-size:38px">${t}</h3><p class="grow" style="font-size:30px">${d}</p><div class="note" style="margin-top:20px">${n}</div></div>`).join('')}
 </div>`,

// 30 — Datos y credenciales
`${T('Datos y credenciales')}
 <div class="row mt">
 ${[['eye-off','No compartir tus datos','Revisá la privacidad y desactivá la opción de compartir tus chats para mejorar el modelo.',path_(['Configuración','Privacidad'],'uno:'),'uno:',1],
    ['key-round','Credenciales fuera del chat','Usuarios, contraseñas y API keys nunca se pegan en la conversación. Pedile que las lea de un archivo de configuración que vos le indicás.','<div class="note">“Usá la API key de config/.env”</div>','dos:',0],
    ['clipboard-check','Pedile checks de seguridad','Antes de poner algo en marcha, pedile que revise riesgos.','<div class="note">“¿Este flujo expone datos de clientes o credenciales?”</div>','tres:',0]]
   .map(([i,t,d,x,c,h])=>`<div class="card grow ${h?'peach':''}" style="display:flex;flex-direction:column" ${cue(c)}>${ic(i)}<h3 style="font-size:38px">${t}</h3><p class="grow" style="font-size:30px">${d}</p><div style="margin-top:20px">${x}</div></div>`).join('')}
 </div>`,

// 31 — Cierre
`<div class="col" style="height:900px;justify-content:center;gap:36px">
 ${[['Elegí el modelo justo','modelo justo'],['Conectá tus herramientas con permisos mínimos','permisos mínimos'],['Andá de menos a más','menos a más']]
   .map(([t,c],k)=>`<div class="hrow" ${cue(c)}><span class="num" style="font-size:64px">${k+1}</span><span style="font-family:Caladea,serif;font-weight:700;font-size:64px">${t}</span></div>`).join('')}
 <div style="font-size:40px;color:var(--orange);font-weight:700;margin-top:30px" ${cue('la revisión')}>La revisión y el envío siguen siendo tuyos.</div>
 <div class="hrow" style="margin-top:50px;gap:20px;color:var(--muted)" ${cue('la revisión','0.8')}>${ic('shield-half','sm')}<span style="font-size:32px">Claude para la venta de seguros</span></div>
</div>`,
];
