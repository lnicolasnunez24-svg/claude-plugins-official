# Guion de locución — Claude para la venta de seguros

Indicaciones para grabar la voz, sea con una IA o con tu propia voz. Cada escena tiene el texto exacto que tiene que decir el audio y su archivo `tts/escena_NN.txt`, listo para pegar.

## Cómo tiene que sonar (todo el video)

- **Personaje:** un colega que ya usa Claude y le explica a otro corredor, tomando un café. No es locutor de radio ni vendedor.
- **Ritmo:** tranquilo, unas 150 palabras por minuto. Mejor un poco lento que apurado: el público no es técnico.
- **Voseo natural, rioplatense:** «tenés», «usá», «fijate». Si la IA lo pronuncia como español neutro («tienes»), cambiá de voz o de modelo.
- **Sonrisa en la voz** en ejemplos y buenas noticias; **tono firme, sin dramatismo**, en las advertencias (permisos, envío masivo, seguridad).
- **Pausas:** un punto es una pausa corta y un punto y aparte, una pausa más larga. Los textos para la IA ya vienen puntuados para eso.
- **Entre comillas** van pedidos a Claude: se leen como si los dictaras, apenas más livianos.

## Cómo generar el audio con IA

**Recomendación:** ElevenLabs con **tu voz clonada**, en un modelo multilingüe. Por qué: el video sigue sonando a vos y, si cambia una frase, la regenerás sin volver a grabar.

1. Creá la cuenta. Para clonar tu voz hace falta un plan pago (el más barato alcanza; fijate el precio actual en su web).
2. Clonado: subí 2 o 3 minutos tuyos hablando natural, con buena calidad y sin ruido. Leé, por ejemplo, la escena 01 y la 03 de este guion.
3. Elegí un modelo **multilingüe** y tu voz clonada.
4. Ajustes de partida (los nombres pueden cambiar en la interfaz): estabilidad media, alrededor de 50 %; similitud alta, alrededor de 75 %; exageración de estilo baja o en cero; velocidad normal.
5. **Prueba primero:** generá solo la escena 01 y la 03, y escuchá cómo pronuncia los nombres en inglés. Si alguno falla, usá la tabla de pronunciación de abajo.
6. Pegá cada `tts/escena_NN.txt` por separado y descargá el audio como **escena_NN.mp3**, con el mismo número.
7. Mandame los 31 archivos por este chat.

**Lo que la IA no hace bien, para que no te sorprenda:** a veces cambia la entonación de una pregunta, acentúa mal una palabra o mete una pausa rara. Escuchá cada escena antes de mandarla: regenerar una sola cuesta segundos.

**Si preferís grabar vos:** usá las mismas indicaciones de cada escena y leé el «Texto», no la versión para la IA.

## Tabla de pronunciación (usala solo si la IA se equivoca)

En el `.txt` de la escena reemplazás la palabra por su escritura fonética. No lo hagas de entrada: los modelos multilingües suelen pronunciar bien estas palabras y la fonética a veces lo empeora.

| Palabra | Escribí | | Palabra | Escribí |
|---|---|---|---|---|
| Claude | Clod | | Cowork | Cóuork |
| Notion | Nóushon | | Gmail | Yi meil |
| Drive | Dráiv | | ManyChat | Méni chat |
| WhatsApp | Guatsap | | Haiku | Jáiku |
| Sonnet | Sónet | | Fable | Féibol |
| Chrome | Crom | | deeplink | dip link |
| templates | témpleits | | leads / lead | lids / lid |
| skill | eskil | | plugins | pláguins |
| newsletters | niusléters | | tokens | tóquens |
| Seeders Labs | Síders Labs | | Seguros Flow | Seguros Flou |
| Business | Bísnes | | full | ful |

**Zolkwer** (escena 02): confirmá con Federico cómo se pronuncia su apellido antes de generar.

Cambios que ya están hechos en los `.txt`: los números van en letras (treinta, veinticuatro, dos mil veintiuno) y las siglas deletreadas (ce erre eme, pe de efe, a pe i, i a).


---

## 01 Intro

### Escena 01  ·  ~24 s  ·  archivo `escena_01.mp3`

- **Intención:** Bienvenida cálida, como quien recibe a un colega. Sonrisa en la voz.
- **Remarcá:** «para vos», «No hace falta»
- **Ritmo:** Enumerá los temas del final con calma, una pausa corta en cada coma.

**Texto:**

> Si sos corredor o ejecutivo de seguros, este video es para vos. No hace falta saber de tecnología. Claude es un asistente de inteligencia artificial. Vamos a ver cómo usarlo en el trabajo de todos los días. Primero, lo básico. Después, cómo conectarlo con tus herramientas, cómo leer pólizas y cómo programar tareas. Y al final: correo, WhatsApp y seguridad.

### Escena 02  ·  ~18 s  ·  archivo `escena_02.mp3`

- **Intención:** Presentación respetuosa, sin vender. Estás hablando de otra persona.
- **Remarcá:** «Federico Zolkwer», «sin perder el toque humano»
- **Ritmo:** Nombres propios despacio y claros.

**Texto:**

> Este material lo armó Federico Zolkwer. Es ingeniero en sistemas. Junto a un amigo corredor creó Seguros Flow, una plataforma para vender seguros con IA sin perder el toque humano. Hoy se llama Clivo, un corredor full IA. Y es cofundador de Seeders Labs.

**Para la IA** (`tts/escena_02.txt`):

> Este material lo armó Federico Zolkwer. Es ingeniero en sistemas. Junto a un amigo corredor creó Seguros Flow, una plataforma para vender seguros con i a sin perder el toque humano. Hoy se llama Clivo, un corredor full i a. Y es cofundador de Seeders Labs.


---

## 02 Conceptos básicos

### Escena 03  ·  ~27 s  ·  archivo `escena_03.mp3`

- **Intención:** Explicativo, ordenado. Cada modelo es un paso.
- **Remarcá:** «Haiku», «Sonnet», «Opus», «Fable», «con criterio»
- **Ritmo:** Pausa antes de cada nombre de modelo. Los ejemplos entre comillas, un poco más livianos.

**Texto:**

> Claude tiene cuatro modelos. Haiku es rápido y liviano: para preguntas simples, como «resumime esta póliza en tres líneas». Sonnet es el del día a día: redacta y analiza. Por ejemplo, un mail de renovación. Opus razona en profundidad: compara cinco cotizaciones y te recomienda la mejor. Y Fable es el más potente, para problemas muy difíciles. Usalo con criterio: cuanto más potente, más consume de tu plan.

**Para la IA** (`tts/escena_03.txt`):

> Claude tiene cuatro modelos. Haiku es rápido y liviano: para preguntas simples, como "resumime esta póliza en tres líneas". Sonnet es el del día a día: redacta y analiza. Por ejemplo, un mail de renovación. Opus razona en profundidad: compara cinco cotizaciones y te recomienda la mejor. Y Fable es el más potente, para problemas muy difíciles. Usalo con criterio: cuanto más potente, más consume de tu plan.

### Escena 04  ·  ~25 s  ·  archivo `escena_04.mp3`

- **Intención:** Práctico, de consejo entre colegas.
- **Remarcá:** «tokens», «Configuración, Uso»
- **Ritmo:** Los tres consejos del final, con pausa entre cada uno.

**Texto:**

> ¿Cómo sabés cuánto estás usando? Claude mide todo en tokens. Son como su moneda: cada mensaje, cada archivo y cada respuesta gasta tokens. Lo ves en Configuración, Uso. Ahí aparece tu límite de la sesión y de la semana. Para que te rinda: elegí el modelo adecuado, hacé chats cortos y de un solo tema, y subí archivos solo cuando hagan falta.

### Escena 05  ·  ~26 s  ·  archivo `escena_05.mp3`

- **Intención:** Claro y comparativo.
- **Remarcá:** «Chat», «Cowork», «Code»
- **Ritmo:** Pausa marcada antes de cada modo.

**Texto:**

> Claude trabaja en tres modos. Chat es para preguntar: consultas, ideas, borradores. Por ejemplo: «¿qué cubre un seguro de responsabilidad civil?». Cowork es para trabajar con archivos: lee, crea y modifica archivos de tu computadora. Le podés pedir: «ordená las pólizas de esta carpeta y armá un Excel de vencimientos». Y Code es para construir aplicaciones, como un cotizador web para seguros de auto.

**Para la IA** (`tts/escena_05.txt`):

> Claude trabaja en tres modos. Chat es para preguntar: consultas, ideas, borradores. Por ejemplo: "¿qué cubre un seguro de responsabilidad civil?". Cowork es para trabajar con archivos: lee, crea y modifica archivos de tu computadora. Le podés pedir: "ordená las pólizas de esta carpeta y armá un Excel de vencimientos". Y Code es para construir aplicaciones, como un cotizador web para seguros de auto.

### Escena 06  ·  ~33 s  ·  archivo `escena_06.mp3`

- **Intención:** Pausado: son tres conceptos nuevos.
- **Remarcá:** «proyecto», «memoria», «ventana de contexto», «finita»
- **Ritmo:** Pausa larga entre un concepto y el siguiente.

**Texto:**

> Tres ideas clave. Un proyecto es un espacio con instrucciones y archivos fijos: tus condicionados, tus tarifas, el tono de tu agencia. Se reutilizan en cada chat del proyecto. La memoria es lo que Claude recuerda de vos entre conversaciones: tu rol, tu forma de trabajar. La podés ver y editar. Y la ventana de contexto es todo lo que Claude tiene en la cabeza dentro de un chat. Es grande, pero finita: los chats muy largos pierden precisión y gastan más.

### Escena 07  ·  ~32 s  ·  archivo `escena_07.mp3`

- **Intención:** Entusiasmo contenido: esto ahorra trabajo.
- **Remarcá:** «una sola vez», «mismo estándar»
- **Ritmo:** La lista del ejemplo con ritmo, sin apurar.

**Texto:**

> Una skill es una instrucción a medida. Le enseñás a Claude una tarea a tu manera, una sola vez: pasos, tono, formato y ejemplos. Después la usa sola cuando la tarea coincide, o la llamás por su nombre. Por ejemplo, una skill de «mail de renovación»: saludar por el nombre, mostrar la prima actual contra la nueva en una tabla, ofrecer dos alternativas y cerrar con un link para agendar llamada. Así todo el equipo trabaja con el mismo estándar.

**Para la IA** (`tts/escena_07.txt`):

> Una skill es una instrucción a medida. Le enseñás a Claude una tarea a tu manera, una sola vez: pasos, tono, formato y ejemplos. Después la usa sola cuando la tarea coincide, o la llamás por su nombre. Por ejemplo, una skill de "mail de renovación": saludar por el nombre, mostrar la prima actual contra la nueva en una tabla, ofrecer dos alternativas y cerrar con un link para agendar llamada. Así todo el equipo trabaja con el mismo estándar.


---

## 03 Integraciones

### Escena 08  ·  ~23 s  ·  archivo `escena_08.mp3`

- **Intención:** Paso a paso, como si guiaras a alguien al lado tuyo.
- **Remarcá:** «cinco pasos», «autorizás»
- **Ritmo:** Pausa clara entre cada paso. Es la escena que más se va a pausar.

**Texto:**

> Ahora, las integraciones: conectar Claude con las herramientas que ya usás. Se agregan en cinco pasos. Entrás a Configuración. Vas a Conectores. Tocás Explorar o Agregar. Elegís la herramienta, por ejemplo Notion, y tocás Conectar. Y por último autorizás el acceso. Los nombres de los menús pueden cambiar un poco con el tiempo, pero el camino es ese.

### Escena 09  ·  ~23 s  ·  archivo `escena_09.mp3`

- **Intención:** Descriptivo, tranquilo.
- **Remarcá:** «todo en uno», «leer, buscar y actualizar»
- **Ritmo:** Enumeración con ritmo parejo.

**Texto:**

> ¿Qué es Notion? Un espacio de trabajo todo en uno, compartido con tu equipo. Ahí podés tener documentos, como tus procesos de venta. Bases de datos, con clientes, pólizas y vencimientos. Un wiki con el manual de productos y aseguradoras. Y las tareas de seguimiento. Con el conector, Claude puede leer, buscar y actualizar todo eso por vos.

### Escena 10  ·  ~30 s  ·  archivo `escena_10.mp3`

- **Intención:** Concreto, mostrando un ejemplo real.
- **Remarcá:** «tu base de clientes»
- **Ritmo:** Los tres pedidos con tono de pregunta o pedido, como si los escribieras.

**Texto:**

> Mirá este ejemplo. Una tabla en Notion con tus clientes. Es lo que se llama un CRM: tu base de clientes. Ahí tenés el ramo, cuándo vence y en qué estado está. Con eso le podés pedir a Claude: «¿qué pólizas vencen en los próximos 30 días?». O: «agregá a Ana R. como lead de Vida con lo que hablamos hoy». O incluso: «armá un mail de renovación para cada cliente en estado Renovar».

**Para la IA** (`tts/escena_10.txt`):

> Mirá este ejemplo. Una tabla en Notion con tus clientes. Es lo que se llama un ce erre eme: tu base de clientes. Ahí tenés el ramo, cuándo vence y en qué estado está. Con eso le podés pedir a Claude: "¿qué pólizas vencen en los próximos treinta días?". O: "agregá a Ana como lead de Vida con lo que hablamos hoy". O incluso: "armá un mail de renovación para cada cliente en estado Renovar".

### Escena 11  ·  ~22 s  ·  archivo `escena_11.mp3`

- **Intención:** Advertencia amable. Serio, pero sin asustar.
- **Remarcá:** «Ojo», «solo lectura», «Permitir una vez», «vos»
- **Ritmo:** Pausa después de «Ojo con los permisos».

**Texto:**

> Ojo con los permisos: empezá con lo mínimo. Primero, solo lectura. En la configuración del conector, habilitá únicamente las acciones de lectura. Así Claude consulta tu CRM, pero no modifica ni borra nada. Segundo: cuando Claude te pida usar una herramienta en el chat, elegí «Permitir una vez», no «Permitir siempre». Así aprobás vos cada acción.

**Para la IA** (`tts/escena_11.txt`):

> Ojo con los permisos: empezá con lo mínimo. Primero, solo lectura. En la configuración del conector, habilitá únicamente las acciones de lectura. Así Claude consulta tu ce erre eme, pero no modifica ni borra nada. Segundo: cuando Claude te pida usar una herramienta en el chat, elegí "Permitir una vez", no "Permitir siempre". Así aprobás vos cada acción.


---

## 04 Análisis de documentos

### Escena 12  ·  ~28 s  ·  archivo `escena_12.mp3`

- **Intención:** Práctico.
- **Remarcá:** «Una», «Dos», «Tres», «usá copias»
- **Ritmo:** Pausa antes de cada número.

**Texto:**

> Pasemos a los documentos. Hay tres formas de dárselos a Claude. Una: arrastrás el archivo al chat. Es lo más rápido para un documento puntual. Dos: en Cowork le das acceso a una carpeta, y Claude decide qué abrir y cuándo. Ahí usá copias, porque Cowork puede modificar archivos. Tres: por una integración, si tus documentos ya están organizados en Notion o en Drive. Claude te pide permiso para leerlos.

### Escena 13  ·  ~19 s  ·  archivo `escena_13.mp3`

- **Intención:** Honesto sobre un límite.
- **Remarcá:** «cuatro», «treinta», «doscientas», «no termina»
- **Ritmo:** Subí un poco la tensión de cuatro a doscientas páginas.

**Texto:**

> Ahora, el límite. Claude lee muy bien documentos cortos. Una cotización de cuatro páginas entra sobrada. Una póliza de treinta páginas funciona, con cuidado. Pero una póliza con su condicionado, de doscientas páginas, puede llenar la ventana de contexto. Ahí Claude pierde detalle, mezcla datos o no termina.

### Escena 14  ·  ~28 s  ·  archivo `escena_14.mp3`

- **Intención:** Tranquilizador: hay solución.
- **Remarcá:** «La primera», «La segunda», «enormes»
- **Ritmo:** Pausa entre las dos soluciones.

**Texto:**

> Para eso hay dos soluciones. La primera: extraer y después trabajar. Un chat lee el PDF y lo pasa a texto, solo con lo importante. Después, otro chat trabaja sobre ese texto. Sirve para documentos medianos. La segunda: dividir y consolidar. Varios agentes, o sea, varias tareas de Claude trabajando a la vez, leen partes distintas del archivo en paralelo. Y uno final junta todo. Es para pólizas y condicionados enormes.

**Para la IA** (`tts/escena_14.txt`):

> Para eso hay dos soluciones. La primera: extraer y después trabajar. Un chat lee el pe de efe y lo pasa a texto, solo con lo importante. Después, otro chat trabaja sobre ese texto. Sirve para documentos medianos. La segunda: dividir y consolidar. Varios agentes, o sea, varias tareas de Claude trabajando a la vez, leen partes distintas del archivo en paralelo. Y uno final junta todo. Es para pólizas y condicionados enormes.

### Escena 15  ·  ~19 s  ·  archivo `escena_15.mp3`

- **Intención:** Regla simple, fácil de recordar.
- **Remarcá:** «de menos a más», «uno», «dos», «tres»
- **Ritmo:** Escalones con pausa, como subiendo.

**Texto:**

> La regla es ir de menos a más. Escalón uno: adjuntar y preguntar. Muchas veces alcanza. Si ves que el chat se llena o el resultado no tiene detalle, subí al escalón dos: extraer a texto. Y si el documento es enorme, escalón tres: agentes en paralelo.

### Escena 16  ·  ~28 s  ·  archivo `escena_16.mp3`

- **Intención:** Didáctico, sin apuro. Es lo más técnico del video.
- **Remarcá:** «en paralelo», «El primero», «El segundo»
- **Ritmo:** Más lento que el resto. Remate amable: «Pausá el video…».

**Texto:**

> Así se ve un pedido de agentes en paralelo, en modo Cowork. Le pedís dos tipos de agentes. El primero analiza el PDF de a cinco páginas, guarda lo importante en un archivo de texto, y se lanzan varios a la vez hasta cubrir todo el archivo. El segundo arranca cuando todos terminaron, y arma un resumen final con todos los extractos. Pausá el video si querés copiar el texto.

**Para la IA** (`tts/escena_16.txt`):

> Así se ve un pedido de agentes en paralelo, en modo Cowork. Le pedís dos tipos de agentes. El primero analiza el pe de efe de a cinco páginas, guarda lo importante en un archivo de texto, y se lanzan varios a la vez hasta cubrir todo el archivo. El segundo arranca cuando todos terminaron, y arma un resumen final con todos los extractos. Pausá el video si querés copiar el texto.


---

## 05 Rutinas

### Escena 17  ·  ~28 s  ·  archivo `escena_17.mp3`

- **Intención:** Una buena noticia: Claude trabaja solo.
- **Remarcá:** «tarea programada», «solo», «ya está listo»
- **Ritmo:** Las tres cosas de la lista, con pausa entre cada una.

**Texto:**

> Una rutina es una tarea programada: Claude la hace solo, todos los días, sin que se lo pidas. Por ejemplo, de lunes a viernes a las ocho y media, que revise tu CRM en Notion y te liste tres cosas: las pólizas que vencen en los próximos 30 días, los leads sin contacto hace más de tres días, y los seguimientos de hoy. Y cuando llegás, el resumen ya está listo.

**Para la IA** (`tts/escena_17.txt`):

> Una rutina es una tarea programada: Claude la hace solo, todos los días, sin que se lo pidas. Por ejemplo, de lunes a viernes a las ocho y media, que revise tu ce erre eme en Notion y te liste tres cosas: las pólizas que vencen en los próximos treinta días, los leads sin contacto hace más de tres días, y los seguimientos de hoy. Y cuando llegás, el resumen ya está listo.


---

## 06 Correo

### Escena 18  ·  ~20 s  ·  archivo `escena_18.mp3`

- **Intención:** Informativo.
- **Remarcá:** «buscar», «redactar», «etiquetar», «mismas reglas»
- **Ritmo:** La ruta de menús, despacio.

**Texto:**

> Ahora, el correo. Con la integración de Gmail, Claude puede buscar y leer correos, hilos y adjuntos. Puede redactar respuestas y dejarlas como borrador en tu bandeja. Y puede etiquetar y ordenar tus correos. Se conecta igual que Notion: Configuración, Conectores, Gmail. Y con las mismas reglas de permisos.

### Escena 19  ·  ~25 s  ·  archivo `escena_19.mp3`

- **Intención:** Firme en la regla final.
- **Remarcá:** «No lo envía», «dejalo en borrador», «Nunca»
- **Ritmo:** Pausa antes de «La regla»; la última frase, seria.

**Texto:**

> Un pedido típico. Le decís: «respondé a Pedro con la cotización de Hogar». Claude aplica tu skill de formato: el saludo, la estructura, el tono y la firma de tu agencia. Y deja el mail en Borradores. No lo envía. Vos lo revisás y lo mandás. La regla: pedile siempre «dejalo en borrador». Nunca le pidas que le envíe directo a un cliente.

**Para la IA** (`tts/escena_19.txt`):

> Un pedido típico. Le decís: "respondé a Pedro con la cotización de Hogar". Claude aplica tu skill de formato: el saludo, la estructura, el tono y la firma de tu agencia. Y deja el mail en Borradores. No lo envía. Vos lo revisás y lo mandás. La regla: pedile siempre "dejalo en borrador". Nunca le pidas que le envíe directo a un cliente.

### Escena 20  ·  ~26 s  ·  archivo `escena_20.mp3`

- **Intención:** Imaginá que contás tu mañana.
- **Remarcá:** «todos los días», «urgente»
- **Ritmo:** El pedido entre comillas, como dictado.

**Texto:**

> También podés tener un resumen diario de la bandeja. Todos los días a las ocho, una rutina le pide: «resumí los correos de las últimas 24 horas, separá urgentes, clientes, aseguradoras y siniestros, y dejá borradores para los simples». Y te encontrás algo así: un siniestro urgente al que le falta la denuncia policial, consultas de clientes con borradores listos, y newsletters que no necesitan nada.

**Para la IA** (`tts/escena_20.txt`):

> También podés tener un resumen diario de la bandeja. Todos los días a las ocho, una rutina le pide: "resumí los correos de las últimas veinticuatro horas, separá urgentes, clientes, aseguradoras y siniestros, y dejá borradores para los simples". Y te encontrás algo así: un siniestro urgente al que le falta la denuncia policial, consultas de clientes con borradores listos, y newsletters que no necesitan nada.

### Escena 21  ·  ~21 s  ·  archivo `escena_21.mp3`

- **Intención:** Liviano, casi divertido: «basta de pelear con el buscador».
- **Remarcá:** «como a un asistente»
- **Ritmo:** Cada pedido es otra voz interna: cambiá apenas el tono.

**Texto:**

> Para encontrar un correo, pedíselo como a un asistente. «Traeme el último mail de Sura con la cotización de Pedro L.». «¿Qué siniestros me reportaron esta semana?». «¿Qué clientes me escribieron y siguen sin respuesta hace más de dos días?». O: «buscá la póliza firmada de María G. y guardala en su carpeta».

**Para la IA** (`tts/escena_21.txt`):

> Para encontrar un correo, pedíselo como a un asistente. "Traeme el último mail de Sura con la cotización de Pedro". "¿Qué siniestros me reportaron esta semana?". "¿Qué clientes me escribieron y siguen sin respuesta hace más de dos días?". O: "buscá la póliza firmada de María y guardala en su carpeta".

### Escena 22  ·  ~17 s  ·  archivo `escena_22.mp3`

- **Intención:** Cierre de capítulo: integrar todo.
- **Remarcá:** «Notion», «Drive», «Gmail», «Tres herramientas, una sola tarea»
- **Ritmo:** La última frase, como remate.

**Texto:**

> Juntemos todo. Una rutina diaria, a las ocho, para el seguimiento de siniestros con los ejecutivos. Claude mira en Notion cuáles siguen abiertos. Busca en Drive las fotos de cada siniestro. Y en Gmail te deja los borradores. Tres herramientas, una sola tarea.


---

## 07 ManyChat (o similares)

### Escena 23  ·  ~25 s  ·  archivo `escena_23.mp3`

- **Intención:** Balanceado: virtudes y límites.
- **Remarcá:** «al instante», «Pero tiene límites», «derivar a una persona»
- **Ritmo:** Pausa clara antes de «Pero».

**Texto:**

> ManyChat, o herramientas similares, sirve para automatizar WhatsApp. Armás un agente que contesta al instante, a cualquier hora. Pide datos, los guarda con etiquetas y califica a los leads antes de que lleguen a vos. Pero tiene límites: no sabe tanto de coberturas y excepciones, funciona mejor con preguntas cerradas, y cuando la charla se complica tiene que derivar a una persona.

### Escena 24  ·  ~27 s  ·  archivo `escena_24.mp3`

- **Intención:** Narrativo, como contando una charla.
- **Remarcá:** «lead caliente», «Menos tiempo preguntando, más tiempo vendiendo»
- **Ritmo:** Las respuestas del cliente («Corolla 2021», «Pocitos»), cortas y naturales.

**Texto:**

> Mirá cómo se ve. Alguien escribe: «quiero cotizar un seguro para mi auto». El agente pregunta qué auto es y de qué año. «Corolla 2021». Pregunta en qué barrio lo guarda de noche. «Pocitos». Y le avisa que un asesor le escribe en minutos. Mientras, guardó todo: ramo, vehículo, zona y estado: lead caliente. Vos recibís el lead completo, listo para cotizar. Menos tiempo preguntando, más tiempo vendiendo.

**Para la IA** (`tts/escena_24.txt`):

> Mirá cómo se ve. Alguien escribe: "quiero cotizar un seguro para mi auto". El agente pregunta qué auto es y de qué año. "Corolla dos mil veintiuno". Pregunta en qué barrio lo guarda de noche. "Pocitos". Y le avisa que un asesor le escribe en minutos. Mientras, guardó todo: ramo, vehículo, zona y estado: lead caliente. Vos recibís el lead completo, listo para cotizar. Menos tiempo preguntando, más tiempo vendiendo.

### Escena 25  ·  ~27 s  ·  archivo `escena_25.mp3`

- **Intención:** Entusiasta: acá se conecta todo.
- **Remarcá:** «Y acá entra Claude», «rutina diaria»
- **Ritmo:** Pausa después de «Y acá entra Claude».

**Texto:**

> Y acá entra Claude. ManyChat tiene las conversaciones y las etiquetas de cada lead. Claude las ordena, resume la charla, evita duplicados y propone el próximo paso. Todo termina en tu CRM de Notion, con resumen, estado y fecha de seguimiento. Y lo podés dejar como rutina diaria: «tomá los leads nuevos de ManyChat de las últimas 24 horas, y creá o actualizá su ficha en Notion».

**Para la IA** (`tts/escena_25.txt`):

> Y acá entra Claude. ManyChat tiene las conversaciones y las etiquetas de cada lead. Claude las ordena, resume la charla, evita duplicados y propone el próximo paso. Todo termina en tu ce erre eme de Notion, con resumen, estado y fecha de seguimiento. Y lo podés dejar como rutina diaria: "tomá los leads nuevos de ManyChat de las últimas veinticuatro horas, y creá o actualizá su ficha en Notion".


---

## 08 WhatsApp templates

### Escena 26  ·  ~26 s  ·  archivo `escena_26.mp3`

- **Intención:** Explicativo, simple.
- **Remarcá:** «deeplink», «Solo tocás enviar», «El envío sigue siendo tuyo»
- **Ritmo:** La última frase, lenta y clara.

**Texto:**

> Ahora, los templates de WhatsApp. La clave es el deeplink: un link que ya trae a quién mandarle y qué decirle. Lo abrís, y WhatsApp arma el chat listo. Solo tocás enviar. Tiene dos partes. El número, con código de país, sin el signo más, sin espacios ni guiones. Y el mensaje, codificado para el link. De eso se encarga Claude. El envío sigue siendo tuyo.

### Escena 27  ·  ~26 s  ·  archivo `escena_27.mp3`

- **Intención:** Práctico, ejemplo concreto.
- **Remarcá:** «renovaciones del mes», «una skill», «una rutina mensual»
- **Ritmo:** Ritmo parejo.

**Texto:**

> Un ejemplo: las renovaciones del mes. Le pedís a Claude que tome del CRM las pólizas que vencen este mes, que arme un mensaje personalizado para cada cliente con su deeplink, y que lo guarde en una columna del CRM. Te queda una tabla: cliente, mensaje y un botón para abrir WhatsApp. Combinalo con una skill para el tono, y con una rutina mensual.

**Para la IA** (`tts/escena_27.txt`):

> Un ejemplo: las renovaciones del mes. Le pedís a Claude que tome del ce erre eme las pólizas que vencen este mes, que arme un mensaje personalizado para cada cliente con su deeplink, y que lo guarde en una columna del ce erre eme. Te queda una tabla: cliente, mensaje y un botón para abrir WhatsApp. Combinalo con una skill para el tono, y con una rutina mensual.

### Escena 28  ·  ~36 s  ·  archivo `escena_28.mp3`

- **Intención:** Serio: hay un riesgo real.
- **Remarcá:** «riesgos muy distintos», «dar de baja el número», «El oficial»
- **Ritmo:** Pausa larga entre el camino no oficial y el oficial.

**Texto:**

> ¿Se puede automatizar el envío masivo? Sí, pero por dos caminos con riesgos muy distintos. El no oficial: herramientas que automatizan tu WhatsApp por fuera de la API de Meta, la empresa dueña de WhatsApp. Es fácil de armar, pero Meta te puede dar de baja el número y perdés el canal con tus clientes. El oficial: la API de WhatsApp Business, directo con Meta o con un proveedor certificado. Es más técnica: solo permite envíos masivos con templates aprobados, y no podés mandar mensajes libres a quien no te escribió.

**Para la IA** (`tts/escena_28.txt`):

> ¿Se puede automatizar el envío masivo? Sí, pero por dos caminos con riesgos muy distintos. El no oficial: herramientas que automatizan tu WhatsApp por fuera de la a pe i de Meta, la empresa dueña de WhatsApp. Es fácil de armar, pero Meta te puede dar de baja el número y perdés el canal con tus clientes. El oficial: la a pe i de WhatsApp Business, directo con Meta o con un proveedor certificado. Es más técnica: solo permite envíos masivos con templates aprobados, y no podés mandar mensajes libres a quien no te escribió.


---

## 09 Seguridad

### Escena 29  ·  ~28 s  ·  archivo `escena_29.mp3`

- **Intención:** Firme y protector.
- **Remarcá:** «solo lo que necesita», «nunca toda la computadora», «sitio por sitio», «solo lectura»
- **Ritmo:** Pausa entre Cowork, Chrome y plugins.

**Texto:**

> Última parte: seguridad. La idea es darle a Claude solo lo que necesita. En Cowork, nunca toda la computadora: solo la carpeta del trabajo, y mejor con copias. Con Claude in Chrome, la extensión del navegador, autorizá sitio por sitio, porque tiene control total en los sitios que habilitás. Y de plugins y conectores, activá solo los necesarios, en solo lectura. Escritura, solo cuando haga falta y por un rato.

### Escena 30  ·  ~27 s  ·  archivo `escena_30.mp3`

- **Intención:** Firme, de consejo final.
- **Remarcá:** «Uno», «Dos», «tres», «nunca se pegan en el chat»
- **Ritmo:** Pausa antes de cada número.

**Texto:**

> Tres cuidados más. Uno: en Configuración, Privacidad, desactivá la opción de compartir tus chats para mejorar el modelo. Dos: usuarios, contraseñas y claves de acceso nunca se pegan en el chat. Pedile que las lea de un archivo de configuración que vos le indiques. Y tres: antes de poner algo en marcha, pedile un chequeo de seguridad. Por ejemplo: «¿este flujo expone datos de clientes o credenciales?».

**Para la IA** (`tts/escena_30.txt`):

> Tres cuidados más. Uno: en Configuración, Privacidad, desactivá la opción de compartir tus chats para mejorar el modelo. Dos: usuarios, contraseñas y claves de acceso nunca se pegan en el chat. Pedile que las lea de un archivo de configuración que vos le indiques. Y tres: antes de poner algo en marcha, pedile un chequeo de seguridad. Por ejemplo: "¿este flujo expone datos de clientes o credenciales?".

### Escena 31  ·  ~13 s  ·  archivo `escena_31.mp3`

- **Intención:** Cierre cálido y seguro. Como despedirte de un colega.
- **Remarcá:** «modelo justo», «permisos mínimos», «de menos a más», «siguen siendo tuyos»
- **Ritmo:** La última frase, lenta. Dejá un segundo de silencio al final.

**Texto:**

> Resumiendo: elegí el modelo justo, conectá tus herramientas con permisos mínimos y andá de menos a más. Claude prepara, ordena y te avisa. Pero la revisión y el envío siguen siendo tuyos.

