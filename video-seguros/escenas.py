# Fuente única del guion. guion.md se genera desde acá (python3 escenas.py).
CAPS = {1:"01 Intro",2:"02 Conceptos básicos",3:"03 Integraciones",4:"04 Análisis de documentos",
        5:"05 Rutinas",7:"07 Correo",8:"08 ManyChat (o similares)",9:"09 WhatsApp templates",10:"10 Seguridad"}
E = [
(1,"Si sos corredor o ejecutivo de seguros, este video es para vos. No hace falta saber de tecnología. [AGREGADO: Claude es un asistente de inteligencia artificial.] Vamos a ver cómo usarlo en el trabajo de todos los días. Primero, lo básico. Después, cómo conectarlo con tus herramientas, cómo leer pólizas y cómo programar tareas. Y al final: correo, WhatsApp y seguridad.",
 "Título «Claude para la venta de seguros». Luego entra el índice de 9 capítulos (sin Descanso), uno por uno.", "p.1-2"),
(1,"Este material lo armó Federico Zolkwer. Es ingeniero en sistemas. Junto a un amigo corredor creó Seguros Flow, una plataforma para vender seguros con IA sin perder el toque humano. Hoy se llama Clivo, un corredor full IA. Y es cofundador de Seeders Labs.",
 "Nombre + «Ingeniero en sistemas». Línea de tiempo con 4 hitos que aparecen en orden: Software → Seguros Flow → Clivo → Seeders Labs.", "p.3"),
(2,"Claude tiene cuatro modelos. Haiku es rápido y liviano: para preguntas simples, como «resumime esta póliza en tres líneas». Sonnet es el del día a día: redacta y analiza. Por ejemplo, un mail de renovación. Opus razona en profundidad: compara cinco cotizaciones y te recomienda la mejor. Y Fable es el más potente, para problemas muy difíciles. Usalo con criterio: cuanto más potente, más consume de tu plan.",
 "4 tarjetas (Haiku · Sonnet · Opus · Fable) con su etiqueta y el ejemplo entre comillas. Abajo, flecha: «Menos consumo de tu plan» → «Más consumo (Pro / Max)».", "p.5"),
(2,"¿Cómo sabés cuánto estás usando? Claude mide todo en tokens. Son como su moneda: cada mensaje, cada archivo y cada respuesta gasta tokens. Lo ves en Configuración, Uso. Ahí aparece tu límite de la sesión y de la semana. Para que te rinda: elegí el modelo adecuado, hacé chats cortos y de un solo tema, y subí archivos solo cuando hagan falta.",
 "Ícono de moneda + «Tokens = la moneda de Claude». Ruta en texto: Configuración → Uso (límite de sesión y semanal). Tres consejos con check.", "p.6"),
(2,"Claude trabaja en tres modos. Chat es para preguntar: consultas, ideas, borradores. Por ejemplo: «¿qué cubre un seguro de responsabilidad civil?». Cowork es para trabajar con archivos: lee, crea y modifica archivos de tu computadora. Le podés pedir: «ordená las pólizas de esta carpeta y armá un Excel de vencimientos». Y Code es para construir aplicaciones, como un cotizador web para seguros de auto.",
 "3 columnas: Chat «Para preguntar» · Cowork «Para trabajar con archivos» · Code «Para construir aplicaciones», cada una con su ejemplo.", "p.7"),
(2,"Tres ideas clave. Un proyecto es un espacio con instrucciones y archivos fijos: tus condicionados, tus tarifas, el tono de tu agencia. Se reutilizan en cada chat del proyecto. La memoria es lo que Claude recuerda de vos entre conversaciones: tu rol, tu forma de trabajar. La podés ver y editar. Y la ventana de contexto es todo lo que Claude tiene en la cabeza dentro de un chat. Es grande, pero finita: los chats muy largos pierden precisión y gastan más.",
 "Tres bloques que entran de a uno: Proyectos (carpeta) · Memoria (marcador) · Ventana de contexto (barra que se llena y se pone naranja).", "p.8"),
(2,"Una skill es una instrucción a medida. Le enseñás a Claude una tarea a tu manera, una sola vez: pasos, tono, formato y ejemplos. Después la usa sola cuando la tarea coincide, o la llamás por su nombre. Por ejemplo, una skill de «mail de renovación»: saludar por el nombre, mostrar la prima actual contra la nueva en una tabla, ofrecer dos alternativas y cerrar con un link para agendar llamada. Así todo el equipo trabaja con el mismo estándar.",
 "Izquierda: «Se escribe una vez · Se activa sola · Mismo resultado siempre». Derecha: tarjeta oscura «Ejemplo de skill: Mail de renovación» con los 5 puntos y «Uso: Armá el mail de renovación para María G.».", "p.9"),
(3,"Ahora, las integraciones: conectar Claude con las herramientas que ya usás. Se agregan en cinco pasos. Entrás a Configuración. Vas a Conectores. Tocás Explorar o Agregar. Elegís la herramienta, por ejemplo Notion, y tocás Conectar. Y por último autorizás el acceso. [AGREGADO: Los nombres de los menús pueden cambiar un poco con el tiempo, pero el camino es ese.]",
 "Diagrama de 5 pasos numerados que se van encendiendo: Configuración → Conectores → Explorar / Agregar → Notion → Conectar → Autorizar acceso. Sin capturas.", "p.10-11"),
(3,"¿Qué es Notion? Un espacio de trabajo todo en uno, compartido con tu equipo. Ahí podés tener documentos, como tus procesos de venta. Bases de datos, con clientes, pólizas y vencimientos. Un wiki con el manual de productos y aseguradoras. Y las tareas de seguimiento. Con el conector, Claude puede leer, buscar y actualizar todo eso por vos.",
 "4 tarjetas: Documentos · Bases de datos · Wiki · Tareas, con su ejemplo. Remate en naranja: «Con el conector, Claude lee, busca y actualiza».", "p.12"),
(3,"Mirá este ejemplo. Una tabla en Notion con tus clientes [AGREGADO: lo que se llama un CRM, tu base de clientes]: el ramo, cuándo vence y en qué estado está. Con eso le podés pedir a Claude: «¿qué pólizas vencen en los próximos 30 días?». O: «agregá a Ana R. como lead de Vida con lo que hablamos hoy». O incluso: «armá un mail de renovación para cada cliente en estado Renovar».",
 "Tabla Cliente/Ramo/Vence/Estado (María G., Pedro L., Ana R., Juan M.) con rótulo **«Datos de ejemplo»**. A la derecha, los 3 pedidos aparecen como globos de chat.", "p.13"),
(3,"Ojo con los permisos: empezá con lo mínimo. Primero, solo lectura. En la configuración del conector, habilitá únicamente las acciones de lectura. Así Claude consulta tu CRM, pero no modifica ni borra nada. Segundo: cuando Claude te pida usar una herramienta en el chat, elegí «Permitir una vez», no «Permitir siempre». Así aprobás vos cada acción.",
 "Dos bloques: «Solo lectura» (ícono ojo, ruta Configuración → Conectores → Notion) y «Permitir una vez» vs. «Permitir siempre» (este último tachado).", "p.15"),
(4,"Pasemos a los documentos. Hay tres formas de dárselos a Claude. Una: arrastrás el archivo al chat. Es lo más rápido para un documento puntual. Dos: en Cowork le das acceso a una carpeta, y Claude decide qué abrir y cuándo. Ahí usá copias, porque Cowork puede modificar archivos. Tres: por una integración, si tus documentos ya están organizados en Notion o en Drive. Claude te pide permiso para leerlos.",
 "3 tarjetas numeradas: En el chat · Carpeta en Cowork · Integración. Cada una con su nota abajo («Usá copias» resaltado).", "p.16-17"),
(4,"Ahora, el límite. Claude lee muy bien documentos cortos. Una cotización de cuatro páginas entra sobrada. Una póliza de treinta páginas funciona, con cuidado. Pero una póliza con su condicionado, de doscientas páginas, puede llenar la ventana de contexto. Ahí Claude pierde detalle, mezcla datos o no termina.",
 "Tres barras que se llenan animadas: 4 págs (verde, «Sobra espacio») · 30 págs (amarilla, «Con cuidado») · 200 págs (naranja, «Contexto lleno»).", "p.18"),
(4,"Para eso hay dos soluciones. La primera: extraer y después trabajar. Un chat lee el PDF y lo pasa a texto, solo con lo importante. Después, otro chat trabaja sobre ese texto. Sirve para documentos medianos. La segunda: dividir y consolidar. Varios agentes [AGREGADO: o sea, varias tareas de Claude trabajando a la vez] leen partes distintas del archivo en paralelo. Y uno final junta todo. Es para pólizas y condicionados enormes.",
 "Diagrama 1: PDF → Chat 1 extrae → Chat 2 usa el .txt. Diagrama 2: PDF → Pág. 1-5 / 6-10 / 11-15 → Agente final consolida.", "p.19"),
(4,"La regla es ir de menos a más. Escalón uno: adjuntar y preguntar. Muchas veces alcanza. Si ves que el chat se llena o el resultado no tiene detalle, subí al escalón dos: extraer a texto. Y si el documento es enorme, escalón tres: agentes en paralelo.",
 "Escalera de 3 escalones que se construye: 1 Adjuntar y preguntar · 2 Extraer a texto · 3 Agentes en paralelo.", "p.20"),
(4,"Así se ve un pedido de agentes en paralelo, en modo Cowork. Le pedís dos tipos de agentes. El primero analiza el PDF de a cinco páginas, guarda lo importante en un archivo de texto, y se lanzan varios a la vez hasta cubrir todo el archivo. El segundo arranca cuando todos terminaron, y arma un resumen final con todos los extractos. Pausá el video si querés copiar el texto.",
 "Izquierda: el prompt completo del PDF en tipografía monoespaciada. Derecha: flujo polizas/autos-sura.pdf → Agente 1 × N → resumenes-txt/ → Agente 2 resumen final .txt.", "p.21"),
(5,"Una rutina es una tarea programada: Claude la hace solo, todos los días, sin que se lo pidas. Por ejemplo, de lunes a viernes a las ocho y media, que revise tu CRM en Notion y te liste tres cosas: las pólizas que vencen en los próximos 30 días, los leads sin contacto hace más de tres días, y los seguimientos de hoy. Y cuando llegás, el resumen ya está listo.",
 "Reloj «Lunes a viernes, 8:30» + el pedido entre comillas. Después entra la tarjeta oscura «Tu resumen de hoy» con 3 puntos y rótulo **«Datos de ejemplo»**.", "p.14"),
(7,"Ahora, el correo. Con la integración de Gmail, Claude puede buscar y leer correos, hilos y adjuntos. Puede redactar respuestas y dejarlas como borrador en tu bandeja. Y puede etiquetar y ordenar tus correos. Se conecta igual que Notion: Configuración, Conectores, Gmail. Y con las mismas reglas de permisos.",
 "Tres filas: Buscar y leer · Redactar borradores · Organizar. Abajo, ruta en texto: Configuración → Conectores → Gmail.", "p.22-23"),
(7,"Un pedido típico. Le decís: «respondé a Pedro con la cotización de Hogar». Claude aplica tu skill de formato: el saludo, la estructura, el tono y la firma de tu agencia. Y deja el mail en Borradores. No lo envía. Vos lo revisás y lo mandás. La regla: pedile siempre «dejalo en borrador». Nunca le pidas que le envíe directo a un cliente.",
 "Flujo de 4 pasos con flechas: Pedido → Skill de formato → Borrador en Gmail → Vos revisás y enviás. Remate en naranja: «Pedile siempre: dejalo en borrador».", "p.24"),
(7,"También podés tener un resumen diario de la bandeja. Todos los días a las ocho, una rutina le pide: «resumí los correos de las últimas 24 horas, separá urgentes, clientes, aseguradoras y siniestros, y dejá borradores para los simples». Y te encontrás algo así: un siniestro urgente al que le falta la denuncia policial, consultas de clientes con borradores listos, y newsletters que no necesitan nada.",
 "Reloj «Todos los días, 8:00» + pedido. A la derecha, 4 tarjetas: Urgentes (resaltada) · Clientes · Aseguradoras · Sin acción, con rótulo **«Datos de ejemplo»**.", "p.25"),
(7,"Para encontrar un correo, pedíselo como a un asistente. «Traeme el último mail de Sura con la cotización de Pedro L.». «¿Qué siniestros me reportaron esta semana?». «¿Qué clientes me escribieron y siguen sin respuesta hace más de dos días?». O: «buscá la póliza firmada de María G. y guardala en su carpeta».",
 "Los 4 pedidos aparecen como globos de chat, uno por vez, cada uno con su ícono.", "p.26"),
(7,"Juntemos todo. Una rutina diaria, a las ocho, para el seguimiento de siniestros con los ejecutivos. Claude mira en Notion cuáles siguen abiertos. Busca en Drive las fotos de cada siniestro. Y en Gmail te deja los borradores. Tres herramientas, una sola tarea.",
 "Reloj «Todos los días, 8:00». Tres bloques conectados: Notion (abiertos) → Drive (fotos) → Gmail (borradores), rótulo **«Datos de ejemplo»**.", "p.27"),
(8,"ManyChat, o herramientas similares, sirve para automatizar WhatsApp. Armás un agente que contesta al instante, a cualquier hora. Pide datos, los guarda con etiquetas y califica a los leads antes de que lleguen a vos. Pero tiene límites: no sabe tanto de coberturas y excepciones, funciona mejor con preguntas cerradas, y cuando la charla se complica tiene que derivar a una persona.",
 "Dos columnas: «Lo que hace bien» (3 puntos con check) y «Sus límites» (3 puntos con alerta).", "p.28-29"),
(8,"Mirá cómo se ve. Alguien escribe: «quiero cotizar un seguro para mi auto». El agente pregunta qué auto es y de qué año. «Corolla 2021». Pregunta en qué barrio lo guarda de noche. «Pocitos». Y le avisa que un asesor le escribe en minutos. Mientras, guardó todo: ramo, vehículo, zona y estado: lead caliente. Vos recibís el lead completo, listo para cotizar. Menos tiempo preguntando, más tiempo vendiendo.",
 "Conversación tipo chat que se va escribiendo (globos genéricos, no captura de WhatsApp). A la derecha aparecen las etiquetas: ramo: Auto · vehículo: Corolla 2021 · zona: Pocitos · estado: Lead caliente. Rótulo «Ejemplo».", "p.30"),
(8,"Y acá entra Claude. ManyChat tiene las conversaciones y las etiquetas de cada lead. Claude las ordena, resume la charla, evita duplicados y propone el próximo paso. Todo termina en tu CRM de Notion, con resumen, estado y fecha de seguimiento. Y lo podés dejar como rutina diaria: «tomá los leads nuevos de ManyChat de las últimas 24 horas, y creá o actualizá su ficha en Notion».",
 "Flujo: ManyChat → Claude → CRM en Notion. Abajo, banda oscura con el texto de la rutina diaria.", "p.31"),
(9,"Ahora, los templates de WhatsApp. La clave es el deeplink: un link que ya trae a quién mandarle y qué decirle. Lo abrís, y WhatsApp arma el chat listo. Solo tocás enviar. Tiene dos partes. El número, con código de país, sin el signo más, sin espacios ni guiones. Y el mensaje, codificado para el link. De eso se encarga Claude. El envío sigue siendo tuyo.",
 "El link de ejemplo grande (wa.me/59899123456?text=…) con el número resaltado en naranja y el mensaje en amarillo. Debajo: Número · Mensaje · Resultado. Rótulo «Ejemplo».", "p.32-33"),
(9,"Un ejemplo: las renovaciones del mes. Le pedís a Claude que tome del CRM las pólizas que vencen este mes, que arme un mensaje personalizado para cada cliente con su deeplink, y que lo guarde en una columna del CRM. Te queda una tabla: cliente, mensaje y un botón para abrir WhatsApp. Combinalo con una skill para el tono, y con una rutina mensual.",
 "Pedido a la izquierda. Tabla Cliente/Mensaje/Link (María G., Pedro L., Juan M.) con botones verdes «Abrir WhatsApp» y rótulo **«Datos de ejemplo»**.", "p.34"),
(9,"¿Se puede automatizar el envío masivo? Sí, pero por dos caminos con riesgos muy distintos. El no oficial: herramientas que automatizan tu WhatsApp por fuera de la API de Meta [AGREGADO: la empresa dueña de WhatsApp]. Es fácil de armar, pero Meta te puede dar de baja el número y perdés el canal con tus clientes. El oficial: la API de WhatsApp Business, directo con Meta o con un proveedor certificado. Es más técnica: solo permite envíos masivos con templates aprobados, y no podés mandar mensajes libres a quien no te escribió.",
 "Dos columnas: «No oficial» (alerta, 3 puntos) vs. «Oficial · API de WhatsApp Business» (escudo, 3 puntos).", "p.35"),
(10,"Última parte: seguridad. La idea es darle a Claude solo lo que necesita. En Cowork, nunca toda la computadora: solo la carpeta del trabajo, y mejor con copias. Con Claude in Chrome, la extensión del navegador, autorizá sitio por sitio, porque tiene control total en los sitios que habilitás. Y de plugins y conectores, activá solo los necesarios, en solo lectura. Escritura, solo cuando haga falta y por un rato.",
 "3 tarjetas: Cowork («Sí: /polizas-autos · No: el disco entero») · Claude in Chrome («Sitio por sitio») · Plugins y conectores («Solo lectura»).", "p.36-37"),
(10,"Tres cuidados más. Uno: en Configuración, Privacidad, desactivá la opción de compartir tus chats para mejorar el modelo. Dos: usuarios, contraseñas y claves de acceso nunca se pegan en el chat. Pedile que las lea de un archivo de configuración que vos le indiques. Y tres: antes de poner algo en marcha, pedile un chequeo de seguridad. Por ejemplo: «¿este flujo expone datos de clientes o credenciales?».",
 "3 tarjetas: No compartir tus datos (ruta Configuración → Privacidad) · Credenciales fuera del chat («Usá la API key de config/.env») · Checks de seguridad (el pedido de ejemplo).", "p.38"),
(10,"[AGREGADO — escena completa] Resumiendo: elegí el modelo justo, conectá tus herramientas con permisos mínimos y andá de menos a más. Claude prepara, ordena y te avisa. Pero la revisión y el envío siguen siendo tuyos.",
 "Tres frases clave que entran en secuencia. Cierre con el título del video.", "—"),
]
NOTAS = """
## [AGREGADO] — para que revises

| Escena | Qué agregué | Por qué |
|---|---|---|
| 01 | «Claude es un asistente de inteligencia artificial» | El PDF nunca dice qué es Claude; un corredor no técnico puede no saberlo. |
| 08 | «Los nombres de los menús pueden cambiar un poco…» | Te cubre si la interfaz real no coincide con la ruta del PDF. |
| 10 | «lo que se llama un CRM, tu base de clientes» | El PDF usa «CRM» sin definirlo. |
| 14 | «agentes, o sea, varias tareas de Claude trabajando a la vez» | El PDF usa «agentes» sin definirlo. |
| 28 | «Meta, la empresa dueña de WhatsApp» | El PDF nombra a Meta sin explicar quién es. |
| 31 | Escena de cierre completa | El PDF termina en «Datos y credenciales», sin cierre. Solo resume ideas del PDF. |

## Lo que no me quedó claro del PDF

1. **Capítulo 05 «Rutinas» no tiene sección propia.** La única diapositiva de rutina general (p.14) está dentro de Integraciones, antes de Análisis. La moví al capítulo 05 para respetar el orden del índice. Las otras rutinas quedan en Correo y ManyChat.
2. **«Descanso» (06) no tiene diapositiva**, así que no se salteó contenido. Los números de capítulo saltan de 05 a 07: ¿los dejo así o renumero 01–09?
3. **¿Quién habla?** La p.3 está en primera persona («Quién soy», de Federico). Como la voz es tuya, la escena 02 lo presenta en tercera persona. Si preferís sacarla, el video baja ~20 s.
4. **«Hace un año»** (p.3) depende de cuándo se escribió el PDF. Lo saqué para que el video no quede desactualizado.
5. **Cómo se conecta Claude con ManyChat** (p.31): el PDF no lo dice (¿conector?, ¿exportación?). El guion no lo explica; un corredor lo va a preguntar.
6. **Drive** aparece como integración (p.17 y p.27) pero el PDF no muestra cómo se conecta. Asumo que es por la misma ruta de Conectores, pero no lo digo en el guion.
7. **Escena 30, «config/.env»** (p.38): es un concepto técnico para esta audiencia. Lo muestro en pantalla tal cual está en el PDF, pero en la voz digo «un archivo de configuración».
8. **Ejemplos sin rótulo en el PDF:** la conversación de ManyChat (p.30) y el número del deeplink (p.33) no dicen «Datos de ejemplo». Les puse «Ejemplo» en pantalla igual, para que nadie copie el número.
9. **Escena 17 (rutina):** recorté la lectura del resumen de ejemplo para bajar tiempo; los datos se ven en pantalla.
"""
import re
def palabras(t): return len(re.sub(r"\[AGREGADO[^\]]*?:?","",t).replace("]","").split())
def dur(t): return max(20, round(palabras(t)/2.5 + 1.5))
if __name__=="__main__":
    tot=sum(dur(t) for _,t,_,_ in E)
    out=["# Guion — Claude para la venta de seguros\n",
         f"Video tutorial para corredores y ejecutivos de seguros. Basado en la presentación de Federico Zolkwer.\n",
         f"**Duración estimada total: {tot//60}:{tot%60:02d}** ({len(E)} escenas). Estimación a ~150 palabras por minuto + 1,5 s de aire por escena.\n",
         "Lo que está entre `[AGREGADO: …]` no está en el PDF: revisalo. Si lo aprobás, se lee sin los corchetes; si no, se borra.\n"]
    cap=None; t0=0
    for i,(c,txt,pant,src) in enumerate(E,1):
        if c!=cap:
            cap=c; out.append(f"\n## {CAPS[c]}  ·  empieza en {t0//60}:{t0%60:02d}\n")
            out.append("| # | Capítulo | Texto para leer | Qué se ve en pantalla | Dur. |\n|---|---|---|---|---|")
        d=dur(txt); t0+=d
        out.append(f"| {i:02d} | {CAPS[c][3:]} ({src}) | {txt} | {pant} | {d} s |")
    open("guion.md","w").write("\n".join(out)+"\n"+NOTAS)
    print(tot, [dur(t) for _,t,_,_ in E])
