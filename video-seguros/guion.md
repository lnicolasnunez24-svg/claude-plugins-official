# Guion — Claude para la venta de seguros

Video tutorial para corredores y ejecutivos de seguros. Basado en la presentación de Federico Zolkwer.

**Duración estimada total: 13:47** (31 escenas). Estimación a ~150 palabras por minuto + 1,5 s de aire por escena.

Lo que está entre `…` no está en el PDF: revisalo. Si lo aprobás, se lee sin los corchetes; si no, se borra.


## 01 Intro  ·  empieza en 0:00

| # | Capítulo | Texto para leer | Qué se ve en pantalla | Dur. |
|---|---|---|---|---|
| 01 | Intro (p.1-2) | Si sos corredor o ejecutivo de seguros, este video es para vos. No hace falta saber de tecnología. Claude es un asistente de inteligencia artificial. Vamos a ver cómo usarlo en el trabajo de todos los días. Primero, lo básico. Después, cómo conectarlo con tus herramientas, cómo leer pólizas y cómo programar tareas. Y al final: correo, WhatsApp y seguridad. | Título «Claude para la venta de seguros». Luego entra el índice de 9 capítulos (sin Descanso), uno por uno. | 26 s |
| 02 | Intro (p.3) | Este material lo armó Federico Zolkwer. Es ingeniero en sistemas. Junto a un amigo corredor creó Seguros Flow, una plataforma para vender seguros con IA sin perder el toque humano. Hoy se llama Clivo, un corredor full IA. Y es cofundador de Seeders Labs. | Nombre + «Ingeniero en sistemas». Línea de tiempo con 4 hitos que aparecen en orden: Software → Seguros Flow → Clivo → Seeders Labs. | 19 s |

## 02 Conceptos básicos  ·  empieza en 0:45

| # | Capítulo | Texto para leer | Qué se ve en pantalla | Dur. |
|---|---|---|---|---|
| 03 | Conceptos básicos (p.5) | Claude tiene cuatro modelos. Haiku es rápido y liviano: para preguntas simples, como «resumime esta póliza en tres líneas». Sonnet es el del día a día: redacta y analiza. Por ejemplo, un mail de renovación. Opus razona en profundidad: compara cinco cotizaciones y te recomienda la mejor. Y Fable es el más potente, para problemas muy difíciles. Usalo con criterio: cuanto más potente, más consume de tu plan. | 4 tarjetas (Haiku · Sonnet · Opus · Fable) con su etiqueta y el ejemplo entre comillas. Abajo, flecha: «Menos consumo de tu plan» → «Más consumo (Pro / Max)». | 29 s |
| 04 | Conceptos básicos (p.6) | ¿Cómo sabés cuánto estás usando? Claude mide todo en tokens. Son como su moneda: cada mensaje, cada archivo y cada respuesta gasta tokens. Lo ves en Configuración, Uso. Ahí aparece tu límite de la sesión y de la semana. Para que te rinda: elegí el modelo adecuado, hacé chats cortos y de un solo tema, y subí archivos solo cuando hagan falta. | Ícono de moneda + «Tokens = la moneda de Claude». Ruta en texto: Configuración → Uso (límite de sesión y semanal). Tres consejos con check. | 26 s |
| 05 | Conceptos básicos (p.7) | Claude trabaja en tres modos. Chat es para preguntar: consultas, ideas, borradores. Por ejemplo: «¿qué cubre un seguro de responsabilidad civil?». Cowork es para trabajar con archivos: lee, crea y modifica archivos de tu computadora. Le podés pedir: «ordená las pólizas de esta carpeta y armá un Excel de vencimientos». Y Code es para construir aplicaciones, como un cotizador web para seguros de auto. | 3 columnas: Chat «Para preguntar» · Cowork «Para trabajar con archivos» · Code «Para construir aplicaciones», cada una con su ejemplo. | 27 s |
| 06 | Conceptos básicos (p.8) | Tres ideas clave. Un proyecto es un espacio con instrucciones y archivos fijos: tus condicionados, tus tarifas, el tono de tu agencia. Se reutilizan en cada chat del proyecto. La memoria es lo que Claude recuerda de vos entre conversaciones: tu rol, tu forma de trabajar. La podés ver y editar. Y la ventana de contexto es todo lo que Claude tiene en la cabeza dentro de un chat. Es grande, pero finita: los chats muy largos pierden precisión y gastan más. | Tres bloques que entran de a uno: Proyectos (carpeta) · Memoria (marcador) · Ventana de contexto (barra que se llena y se pone naranja). | 34 s |
| 07 | Conceptos básicos (p.9) | Una skill es una instrucción a medida. Le enseñás a Claude una tarea a tu manera, una sola vez: pasos, tono, formato y ejemplos. Después la usa sola cuando la tarea coincide, o la llamás por su nombre. Por ejemplo, una skill de «mail de renovación»: saludar por el nombre, mostrar la prima actual contra la nueva en una tabla, ofrecer dos alternativas y cerrar con un link para agendar llamada. Así todo el equipo trabaja con el mismo estándar. | Izquierda: «Se escribe una vez · Se activa sola · Mismo resultado siempre». Derecha: tarjeta oscura «Ejemplo de skill: Mail de renovación» con los 5 puntos y «Uso: Armá el mail de renovación para María G.». | 34 s |

## 03 Integraciones  ·  empieza en 3:15

| # | Capítulo | Texto para leer | Qué se ve en pantalla | Dur. |
|---|---|---|---|---|
| 08 | Integraciones (p.10-11) | Ahora, las integraciones: conectar Claude con las herramientas que ya usás. Se agregan en cinco pasos. Entrás a Configuración. Vas a Conectores. Tocás Explorar o Agregar. Elegís la herramienta, por ejemplo Notion, y tocás Conectar. Y por último autorizás el acceso. Los nombres de los menús pueden cambiar un poco con el tiempo, pero el camino es ese. | Diagrama de 5 pasos numerados que se van encendiendo: Configuración → Conectores → Explorar / Agregar → Notion → Conectar → Autorizar acceso. Sin capturas. | 25 s |
| 09 | Integraciones (p.12) | ¿Qué es Notion? Un espacio de trabajo todo en uno, compartido con tu equipo. Ahí podés tener documentos, como tus procesos de venta. Bases de datos, con clientes, pólizas y vencimientos. Un wiki con el manual de productos y aseguradoras. Y las tareas de seguimiento. Con el conector, Claude puede leer, buscar y actualizar todo eso por vos. | 4 tarjetas: Documentos · Bases de datos · Wiki · Tareas, con su ejemplo. Remate en naranja: «Con el conector, Claude lee, busca y actualiza». | 25 s |
| 10 | Integraciones (p.13) | Mirá este ejemplo. Una tabla en Notion con tus clientes. Es lo que se llama un CRM: tu base de clientes. Ahí tenés el ramo, cuándo vence y en qué estado está. Con eso le podés pedir a Claude: «¿qué pólizas vencen en los próximos 30 días?». O: «agregá a Ana R. como lead de Vida con lo que hablamos hoy». O incluso: «armá un mail de renovación para cada cliente en estado Renovar». | Tabla Cliente/Ramo/Vence/Estado (María G., Pedro L., Ana R., Juan M.) con rótulo **«Datos de ejemplo»**. A la derecha, los 3 pedidos aparecen como globos de chat. | 31 s |
| 11 | Integraciones (p.15) | Ojo con los permisos: empezá con lo mínimo. Primero, solo lectura. En la configuración del conector, habilitá únicamente las acciones de lectura. Así Claude consulta tu CRM, pero no modifica ni borra nada. Segundo: cuando Claude te pida usar una herramienta en el chat, elegí «Permitir una vez», no «Permitir siempre». Así aprobás vos cada acción. | Dos bloques: «Solo lectura» (ícono ojo, ruta Configuración → Conectores → Notion) y «Permitir una vez» vs. «Permitir siempre» (este último tachado). | 24 s |

## 04 Análisis de documentos  ·  empieza en 5:00

| # | Capítulo | Texto para leer | Qué se ve en pantalla | Dur. |
|---|---|---|---|---|
| 12 | Análisis de documentos (p.16-17) | Pasemos a los documentos. Hay tres formas de dárselos a Claude. Una: arrastrás el archivo al chat. Es lo más rápido para un documento puntual. Dos: en Cowork le das acceso a una carpeta, y Claude decide qué abrir y cuándo. Ahí usá copias, porque Cowork puede modificar archivos. Tres: por una integración, si tus documentos ya están organizados en Notion o en Drive. Claude te pide permiso para leerlos. | 3 tarjetas numeradas: En el chat · Carpeta en Cowork · Integración. Cada una con su nota abajo («Usá copias» resaltado). | 30 s |
| 13 | Análisis de documentos (p.18) | Ahora, el límite. Claude lee muy bien documentos cortos. Una cotización de cuatro páginas entra sobrada. Una póliza de treinta páginas funciona, con cuidado. Pero una póliza con su condicionado, de doscientas páginas, puede llenar la ventana de contexto. Ahí Claude pierde detalle, mezcla datos o no termina. | Tres barras que se llenan animadas: 4 págs (verde, «Sobra espacio») · 30 págs (amarilla, «Con cuidado») · 200 págs (naranja, «Contexto lleno»). | 21 s |
| 14 | Análisis de documentos (p.19) | Para eso hay dos soluciones. La primera: extraer y después trabajar. Un chat lee el PDF y lo pasa a texto, solo con lo importante. Después, otro chat trabaja sobre ese texto. Sirve para documentos medianos. La segunda: dividir y consolidar. Varios agentes, o sea, varias tareas de Claude trabajando a la vez, leen partes distintas del archivo en paralelo. Y uno final junta todo. Es para pólizas y condicionados enormes. | Diagrama 1: PDF → Chat 1 extrae → Chat 2 usa el .txt. Diagrama 2: PDF → Pág. 1-5 / 6-10 / 11-15 → Agente final consolida. | 30 s |
| 15 | Análisis de documentos (p.20) | La regla es ir de menos a más. Escalón uno: adjuntar y preguntar. Muchas veces alcanza. Si ves que el chat se llena o el resultado no tiene detalle, subí al escalón dos: extraer a texto. Y si el documento es enorme, escalón tres: agentes en paralelo. | Escalera de 3 escalones que se construye: 1 Adjuntar y preguntar · 2 Extraer a texto · 3 Agentes en paralelo. | 20 s |
| 16 | Análisis de documentos (p.21) | Así se ve un pedido de agentes en paralelo, en modo Cowork. Le pedís dos tipos de agentes. El primero analiza el PDF de a cinco páginas, guarda lo importante en un archivo de texto, y se lanzan varios a la vez hasta cubrir todo el archivo. El segundo arranca cuando todos terminaron, y arma un resumen final con todos los extractos. Pausá el video si querés copiar el texto. | Izquierda: el prompt completo del PDF en tipografía monoespaciada. Derecha: flujo polizas/autos-sura.pdf → Agente 1 × N → resumenes-txt/ → Agente 2 resumen final .txt. | 30 s |

## 05 Rutinas  ·  empieza en 7:11

| # | Capítulo | Texto para leer | Qué se ve en pantalla | Dur. |
|---|---|---|---|---|
| 17 | Rutinas (p.14) | Una rutina es una tarea programada: Claude la hace solo, todos los días, sin que se lo pidas. Por ejemplo, de lunes a viernes a las ocho y media, que revise tu CRM en Notion y te liste tres cosas: las pólizas que vencen en los próximos 30 días, los leads sin contacto hace más de tres días, y los seguimientos de hoy. Y cuando llegás, el resumen ya está listo. | Reloj «Lunes a viernes, 8:30» + el pedido entre comillas. Después entra la tarjeta oscura «Tu resumen de hoy» con 3 puntos y rótulo **«Datos de ejemplo»**. | 30 s |

## 06 Correo  ·  empieza en 7:41

| # | Capítulo | Texto para leer | Qué se ve en pantalla | Dur. |
|---|---|---|---|---|
| 18 | Correo (p.22-23) | Ahora, el correo. Con la integración de Gmail, Claude puede buscar y leer correos, hilos y adjuntos. Puede redactar respuestas y dejarlas como borrador en tu bandeja. Y puede etiquetar y ordenar tus correos. Se conecta igual que Notion: Configuración, Conectores, Gmail. Y con las mismas reglas de permisos. | Tres filas: Buscar y leer · Redactar borradores · Organizar. Abajo, ruta en texto: Configuración → Conectores → Gmail. | 21 s |
| 19 | Correo (p.24) | Un pedido típico. Le decís: «respondé a Pedro con la cotización de Hogar». Claude aplica tu skill de formato: el saludo, la estructura, el tono y la firma de tu agencia. Y deja el mail en Borradores. No lo envía. Vos lo revisás y lo mandás. La regla: pedile siempre «dejalo en borrador». Nunca le pidas que le envíe directo a un cliente. | Flujo de 4 pasos con flechas: Pedido → Skill de formato → Borrador en Gmail → Vos revisás y enviás. Remate en naranja: «Pedile siempre: dejalo en borrador». | 27 s |
| 20 | Correo (p.25) | También podés tener un resumen diario de la bandeja. Todos los días a las ocho, una rutina le pide: «resumí los correos de las últimas 24 horas, separá urgentes, clientes, aseguradoras y siniestros, y dejá borradores para los simples». Y te encontrás algo así: un siniestro urgente al que le falta la denuncia policial, consultas de clientes con borradores listos, y newsletters que no necesitan nada. | Reloj «Todos los días, 8:00» + pedido. A la derecha, 4 tarjetas: Urgentes (resaltada) · Clientes · Aseguradoras · Sin acción, con rótulo **«Datos de ejemplo»**. | 28 s |
| 21 | Correo (p.26) | Para encontrar un correo, pedíselo como a un asistente. «Traeme el último mail de Sura con la cotización de Pedro L.». «¿Qué siniestros me reportaron esta semana?». «¿Qué clientes me escribieron y siguen sin respuesta hace más de dos días?». O: «buscá la póliza firmada de María G. y guardala en su carpeta». | Los 4 pedidos aparecen como globos de chat, uno por vez, cada uno con su ícono. | 23 s |
| 22 | Correo (p.27) | Juntemos todo. Una rutina diaria, a las ocho, para el seguimiento de siniestros con los ejecutivos. Claude mira en Notion cuáles siguen abiertos. Busca en Drive las fotos de cada siniestro. Y en Gmail te deja los borradores. Tres herramientas, una sola tarea. | Reloj «Todos los días, 8:00». Tres bloques conectados: Notion (abiertos) → Drive (fotos) → Gmail (borradores), rótulo **«Datos de ejemplo»**. | 19 s |

## 07 ManyChat (o similares)  ·  empieza en 9:39

| # | Capítulo | Texto para leer | Qué se ve en pantalla | Dur. |
|---|---|---|---|---|
| 23 | ManyChat (o similares) (p.28-29) | ManyChat, o herramientas similares, sirve para automatizar WhatsApp. Armás un agente que contesta al instante, a cualquier hora. Pide datos, los guarda con etiquetas y califica a los leads antes de que lleguen a vos. Pero tiene límites: no sabe tanto de coberturas y excepciones, funciona mejor con preguntas cerradas, y cuando la charla se complica tiene que derivar a una persona. | Dos columnas: «Lo que hace bien» (3 puntos con check) y «Sus límites» (3 puntos con alerta). | 26 s |
| 24 | ManyChat (o similares) (p.30) | Mirá cómo se ve. Alguien escribe: «quiero cotizar un seguro para mi auto». El agente pregunta qué auto es y de qué año. «Corolla 2021». Pregunta en qué barrio lo guarda de noche. «Pocitos». Y le avisa que un asesor le escribe en minutos. Mientras, guardó todo: ramo, vehículo, zona y estado: lead caliente. Vos recibís el lead completo, listo para cotizar. Menos tiempo preguntando, más tiempo vendiendo. | Conversación tipo chat que se va escribiendo (globos genéricos, no captura de WhatsApp). A la derecha aparecen las etiquetas: ramo: Auto · vehículo: Corolla 2021 · zona: Pocitos · estado: Lead caliente. Rótulo «Ejemplo». | 29 s |
| 25 | ManyChat (o similares) (p.31) | Y acá entra Claude. ManyChat tiene las conversaciones y las etiquetas de cada lead. Claude las ordena, resume la charla, evita duplicados y propone el próximo paso. Todo termina en tu CRM de Notion, con resumen, estado y fecha de seguimiento. Y lo podés dejar como rutina diaria: «tomá los leads nuevos de ManyChat de las últimas 24 horas, y creá o actualizá su ficha en Notion». | Flujo: ManyChat → Claude → CRM en Notion. Abajo, banda oscura con el texto de la rutina diaria. | 28 s |

## 08 WhatsApp templates  ·  empieza en 11:02

| # | Capítulo | Texto para leer | Qué se ve en pantalla | Dur. |
|---|---|---|---|---|
| 26 | WhatsApp templates (p.32-33) | Ahora, los templates de WhatsApp. La clave es el deeplink: un link que ya trae a quién mandarle y qué decirle. Lo abrís, y WhatsApp arma el chat listo. Solo tocás enviar. Tiene dos partes. El número, con código de país, sin el signo más, sin espacios ni guiones. Y el mensaje, codificado para el link. De eso se encarga Claude. El envío sigue siendo tuyo. | El link de ejemplo grande (wa.me/59899123456?text=…) con el número resaltado en naranja y el mensaje en amarillo. Debajo: Número · Mensaje · Resultado. Rótulo «Ejemplo». | 28 s |
| 27 | WhatsApp templates (p.34) | Un ejemplo: las renovaciones del mes. Le pedís a Claude que tome del CRM las pólizas que vencen este mes, que arme un mensaje personalizado para cada cliente con su deeplink, y que lo guarde en una columna del CRM. Te queda una tabla: cliente, mensaje y un botón para abrir WhatsApp. Combinalo con una skill para el tono, y con una rutina mensual. | Pedido a la izquierda. Tabla Cliente/Mensaje/Link (María G., Pedro L., Juan M.) con botones verdes «Abrir WhatsApp» y rótulo **«Datos de ejemplo»**. | 27 s |
| 28 | WhatsApp templates (p.35) | ¿Se puede automatizar el envío masivo? Sí, pero por dos caminos con riesgos muy distintos. El no oficial: herramientas que automatizan tu WhatsApp por fuera de la API de Meta, la empresa dueña de WhatsApp. Es fácil de armar, pero Meta te puede dar de baja el número y perdés el canal con tus clientes. El oficial: la API de WhatsApp Business, directo con Meta o con un proveedor certificado. Es más técnica: solo permite envíos masivos con templates aprobados, y no podés mandar mensajes libres a quien no te escribió. | Dos columnas: «No oficial» (alerta, 3 puntos) vs. «Oficial · API de WhatsApp Business» (escudo, 3 puntos). | 38 s |

## 09 Seguridad  ·  empieza en 12:35

| # | Capítulo | Texto para leer | Qué se ve en pantalla | Dur. |
|---|---|---|---|---|
| 29 | Seguridad (p.36-37) | Última parte: seguridad. La idea es darle a Claude solo lo que necesita. En Cowork, nunca toda la computadora: solo la carpeta del trabajo, y mejor con copias. Con Claude in Chrome, la extensión del navegador, autorizá sitio por sitio, porque tiene control total en los sitios que habilitás. Y de plugins y conectores, activá solo los necesarios, en solo lectura. Escritura, solo cuando haga falta y por un rato. | 3 tarjetas: Cowork («Sí: /polizas-autos · No: el disco entero») · Claude in Chrome («Sitio por sitio») · Plugins y conectores («Solo lectura»). | 30 s |
| 30 | Seguridad (p.38) | Tres cuidados más. Uno: en Configuración, Privacidad, desactivá la opción de compartir tus chats para mejorar el modelo. Dos: usuarios, contraseñas y claves de acceso nunca se pegan en el chat. Pedile que las lea de un archivo de configuración que vos le indiques. Y tres: antes de poner algo en marcha, pedile un chequeo de seguridad. Por ejemplo: «¿este flujo expone datos de clientes o credenciales?». | 3 tarjetas: No compartir tus datos (ruta Configuración → Privacidad) · Credenciales fuera del chat («Usá la API key de config/.env») · Checks de seguridad (el pedido de ejemplo). | 28 s |
| 31 | Seguridad (—) | Resumiendo: elegí el modelo justo, conectá tus herramientas con permisos mínimos y andá de menos a más. Claude prepara, ordena y te avisa. Pero la revisión y el envío siguen siendo tuyos. | Tres frases clave que entran en secuencia. Cierre con el título del video. | 14 s |

## Agregados al PDF

| Escena | Qué agregué | Por qué |
|---|---|---|
| 01 | «Claude es un asistente de inteligencia artificial» | El PDF nunca dice qué es Claude; un corredor no técnico puede no saberlo. |
| 08 | «Los nombres de los menús pueden cambiar un poco…» | Te cubre si la interfaz real no coincide con la ruta del PDF. |
| 10 | «lo que se llama un CRM, tu base de clientes» | El PDF usa «CRM» sin definirlo. |
| 14 | «agentes, o sea, varias tareas de Claude trabajando a la vez» | El PDF usa «agentes» sin definirlo. |
| 28 | «Meta, la empresa dueña de WhatsApp» | El PDF nombra a Meta sin explicar quién es. |
| 31 | Escena de cierre completa | El PDF termina en «Datos y credenciales», sin cierre. Solo resume ideas del PDF. |

## Decisiones tomadas (aprobadas)

1. Capítulos renumerados 01–09 (el «Descanso» no tiene diapositiva, así que no se pierde contenido).
2. La rutina general (p.14) va en el capítulo 05 Rutinas, para respetar el orden del índice.
3. Federico se presenta en tercera persona: la voz es tuya.
4. Se quitó «hace un año» para que el video no quede desactualizado.
5. El PDF no dice cómo se conecta Claude con ManyChat (p.31) ni muestra cómo se conecta Drive: el guion no lo inventa.
6. «config/.env» (p.38) se muestra en pantalla tal cual; en la voz se dice «un archivo de configuración».
7. La conversación de ManyChat y el número del deeplink llevan rótulo «Ejemplo» aunque el PDF no lo ponga.
8. Los agregados de la tabla de arriba quedan en el texto de lectura, sin corchetes.
