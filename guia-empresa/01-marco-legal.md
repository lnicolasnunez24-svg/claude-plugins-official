# 1. Marco legal: datos personales y sorteos

Esta sección va primero porque condiciona el embudo. Las referencias (F1, F2…) remiten a `fuentes.md`. Todo fue consultado el 17/11/2026.

## 1.1 Conclusión

El paso 3 del modelo original ("sorteo con QR y base de regalo") tiene dos problemas legales y se reemplaza así:

| Modelo original | Modelo corregido |
|---|---|
| Sorteo entre quienes llenan el formulario | Beneficio seguro para todo el que se registra (descuento o regalo). Sin azar, no hay autorización que pedir (F5) |
| La base "queda de regalo" para el comercio | La base es del comercio desde el primer dato. La empresa la opera como encargada y lo deja escrito en el contrato |
| Formulario para participar | Formulario con consentimiento expreso, dos finalidades separadas y la información del art. 13 |
| No previsto | Inscripción de la base del comercio ante la URCDP, incluida en el servicio |

El sorteo queda como proyecto puntual opcional, con autorización del MEF tramitada antes (sección 1.4).

## 1.2 Datos personales: quién es quién

La Ley 18.331 distingue dos roles (art. 4, F1):

- **Responsable:** el "propietario de la base de datos o que decida sobre la finalidad, contenido y uso del tratamiento". Es el comercio.
- **Encargado de tratamiento:** quien "trate datos personales por cuenta del responsable". Es la empresa de los socios.

Consecuencias directas para el modelo:

1. **La empresa no puede usar los datos para fines propios ni cederlos.** El art. 30 dice que los datos tratados por cuenta de terceros "no podrán aplicarse o utilizarse con un fin distinto al que figure en el contrato de servicios, ni cederlos a otras personas, ni aún para su conservación" (F1). No se puede armar una base propia con los clientes de varios comercios, ni usar los contactos de un comercio para promocionar a otro.
2. **Al terminar el contrato, los datos se destruyen.** La excepción es una autorización expresa del comercio, que permite conservarlos hasta dos años con medidas de seguridad (art. 30, F1). El contrato debe decir qué pasa con los datos al terminar: entrega al comercio y borrado de las copias de la empresa.
3. **La empresa responde junto con el comercio.** El art. 12 hace responsables de las infracciones al responsable "y el encargado, en su caso" (F1). Si el formulario que diseñó la empresa no cumple, la sanción puede alcanzar a los dos.
4. **El acceso de la empresa a la base no es una cesión**, siempre que sea necesario para prestar el servicio al comercio y no cree un vínculo nuevo entre la empresa y el titular (Decreto 414/009, F2). Por eso los mensajes salen siempre a nombre del comercio, nunca de la empresa.

## 1.3 Datos personales: qué exige la ley en cada paso

### Consentimiento (arts. 9 y 13)

El tratamiento es lícito cuando el titular dio su consentimiento "libre, previo, expreso e informado, el que deberá documentarse" (art. 9, F1). Antes de pedir los datos hay que informar, en forma "expresa, precisa e inequívoca" (art. 13, F1):

- la finalidad y los destinatarios;
- la existencia de la base y la identidad y domicilio del responsable;
- si cada respuesta es obligatoria o facultativa;
- las consecuencias de dar o no dar los datos;
- la posibilidad de ejercer los derechos de acceso, rectificación y supresión;
- si hay o no transferencia internacional de datos.

Traducido al formulario:

| Requisito | Cómo se cumple |
|---|---|
| Expreso | Casilla sin marcar por defecto. Un texto al pie que diga "al enviar aceptás" no alcanza |
| Documentado | El formulario guarda fecha, hora y versión del texto aceptado en la misma fila del cliente |
| Informado | Texto corto antes del botón de envío, con los seis puntos de arriba |
| Finalidad | Dos casillas: una para recibir el beneficio y otra, opcional, para recibir promociones |

### Finalidad (art. 8)

Los datos "no podrán ser utilizados para finalidades distintas o incompatibles con aquellas que motivaron su obtención" (F1). Quien se anotó solo para el beneficio no puede recibir promociones después. Por eso la casilla de promociones es independiente y opcional. Es interpretación propia, no texto de la ley: condicionar el beneficio a aceptar promociones pone en duda que el consentimiento sea "libre".

### Publicidad y baja (art. 21)

Los datos facilitados por el propio titular pueden usarse con fines promocionales, y el titular "podrá en cualquier momento solicitar el retiro o bloqueo de sus datos" (F1). Cada mensaje debe ofrecer la baja y la baja se procesa en el momento. No se encontró en esta investigación una norma uruguaya específica sobre mensajes comerciales no solicitados distinta de esta ley: consultar con abogado.

### Datos mínimos (art. 7)

Los datos deben ser "adecuados, ecuánimes y no excesivos" para la finalidad (F1). Para este servicio alcanza con nombre, celular y, si el comercio lo usa, mes de cumpleaños. No pedir cédula ni dirección. No pedir datos sensibles (salud, religión, entre otros, art. 4 literal E); en una veterinaria, los datos son del dueño, y lo que se anote de la mascota no debe revelar datos de salud de personas.

### Inscripción de la base (arts. 6, 28 y 29)

"La formación de bases de datos será lícita cuando se encuentren debidamente inscriptas" (art. 6, F1), y toda persona privada que cree una base debe registrarla (arts. 28 y 29, F1). La URCDP lo lista como primera obligación del sector privado (F3).

- El trámite es en línea, no tiene costo y se ingresa con usuario gub.uy de una persona física (F4).
- Quien inscribe es el comercio, porque es el responsable. La empresa lo acompaña en una sesión de 30 a 45 minutos (ESTIMACIÓN) o lo hace con el titular presente.
- No encontrado: plazo de resolución de la URCDP y si la empresa, como encargada, debe inscribirse por su cuenta. Consultar con URCDP (2901 0065, opción 3).

### Herramientas en el exterior (art. 23)

La ley prohíbe transferir datos a países sin protección adecuada, salvo excepciones; una de ellas es que "el interesado haya dado su consentimiento inequívocamente a la transferencia" (art. 23, F1). La URCDP considera adecuados, entre otros, a los países de la Unión Europea y a las organizaciones de Estados Unidos incluidas en el listado del Marco de Privacidad de Datos (Resolución 63/023, F22).

En la práctica: elegir proveedores europeos o estadounidenses que figuren en ese listado, y además informar la transferencia en el formulario. La verificación de cada proveedor está en la sección 5.

### Seguridad (art. 10)

El responsable debe adoptar medidas para evitar "adulteración, pérdida, consulta o tratamiento no autorizado" (F1). Mínimo razonable para este tamaño (criterio propio): cuentas con verificación en dos pasos, planilla compartida solo con las personas que la usan, sin copias en computadoras personales, y un registro de quién tiene acceso.

### Sanciones (art. 35)

Observación, apercibimiento, multa de hasta 500.000 UI, suspensión de la base por cinco días y clausura (F1). Con la UI del 17/11/2026 en $ 6,7054 (F27), el tope equivale a $ 3.352.700 (ESTIMACIÓN: 500.000 × 6,7054).

### Texto modelo para el formulario

Es un borrador para que lo revise un abogado, no un texto validado.

> **[Nombre del comercio]** (RUT …, domicilio …) guarda estos datos en su base de clientes para darte el beneficio de bienvenida.
> Los datos se guardan en servicios en la nube ubicados fuera de Uruguay. Los opera [nombre de la empresa] por cuenta de [nombre del comercio] y no se entregan a nadie más.
> Nombre y celular son necesarios para el beneficio. El resto es opcional.
> Podés pedir ver, corregir o borrar tus datos cuando quieras escribiendo a [contacto del comercio].
>
> ☐ Acepto que [comercio] guarde mis datos para darme el beneficio.
> ☐ (Opcional) Acepto recibir promociones de [comercio] por WhatsApp. Puedo darme de baja cuando quiera.

### Cláusulas que debe tener el contrato con el comercio

1. El comercio es responsable de la base; la empresa es encargada (art. 4).
2. La empresa trata los datos solo para lo que dice el contrato (art. 30).
3. Las cuentas de las herramientas se abren a nombre del comercio; la empresa tiene acceso como colaboradora.
4. Al terminar: entrega de la base al comercio en un archivo y borrado de las copias de la empresa en un plazo fijo, o conservación hasta dos años si el comercio lo autoriza por escrito (art. 30).
5. Medidas de seguridad que aplica cada parte (art. 10).
6. Quién responde las solicitudes de acceso, corrección y baja de los clientes, y en qué plazo. No verificado en esta investigación: los plazos legales de respuesta de los arts. 14 a 16; consultar con abogado.
7. Obligación del comercio de inscribir la base ante la URCDP.

## 1.4 Sorteos y promociones

### La regla

Una promoción necesita autorización del Ministerio de Economía y Finanzas cuando reúne dos condiciones: promociona el consumo de un producto o servicio, y adjudica premios por azar (F5, F6). El valor del premio es indiferente. El ejemplo oficial es casi idéntico al modelo original: "entre los clientes [que] compren productos del establecimiento y completen un cupón participan de un sorteo de un huevo de pascua" requiere autorización (F5).

No requieren autorización, según la misma fuente (F5):

- el regalo que reciben todos los que cumplen una condición, porque no hay azar;
- el sorteo que solo promociona la marca y no un producto o servicio concreto;
- el concurso que decide un jurado o una votación.

### Qué implica pedir la autorización

| Requisito | Detalle | Fuente |
|---|---|---|
| Antelación | No menos de 20 días antes del inicio | F6 |
| Difusión | No puede publicitarse ni empezar antes de la autorización | F6 |
| Costo del trámite | Sin costo | F7 |
| Firma | Formulario firmado por el representante legal, con certificación notarial de firma | F7 |
| Participación gratuita | Si se promocionan productos, debe existir una vía sin compra, equivalente y sin condiciones, informada en toda la publicidad | F6 |
| Premio | No puede ser dinero | F6 |
| Retiro del premio | Plazo de al menos 60 días desde la comunicación al ganador | F6 |
| Acreditación | Enviar constancia del sorteo y de la entrega del premio; plazo de 60 días desde el fin de la promoción | F6, F8 |
| Incumplimiento | Cese de la promoción y entre 6 meses y 2 años sin nuevas autorizaciones | F6 |
| Multas | De 10 a 1.000 UR, es decir $ 19.490 a $ 1.948.970 con la UR de noviembre de 2026 (ESTIMACIÓN: 1.948,97 × 10 y × 1.000) | F12 y F28, [sin confirmar] |

El organizador es el comercio: necesita RUT, usuario gub.uy con firma electrónica y un escribano que certifique la firma. Costo del escribano: no encontrado, consultar con escribano.

En Montevideo, además, los sorteos con premios de más de 100 UR ($ 194.897, ESTIMACIÓN: 1.948,97 × 100) requerirían trámite ante la Intendencia y una tasa del 5 % del valor de los premios [sin confirmar] (F13). Un premio de comercio de barrio queda muy por debajo.

### Por qué el sorteo sale del embudo estándar

- Agrega al menos 20 días entre la venta y el inicio, más el tiempo de reunir la documentación.
- Suma un costo notarial por cada comercio y cada sorteo.
- Exige al comerciante trámites que no va a querer hacer.
- Un error deja al comercio inhabilitado y expone a la empresa que lo asesoró.

### Zona gris que conviene consultar

Un sorteo abierto a cualquier persona que llene el formulario, sin exigir compra y sin promocionar un producto concreto, podría entrar en el caso "solo promociona la marca" y no requerir autorización (F5). Es interpretación propia. Antes de ofrecerlo, hacer la consulta por escrito a la Unidad Defensa del Consumidor (promociones@consumidor.gub.uy, F6) y guardar la respuesta.

### Base legal

No encontrado: la norma vigente que funda la exigencia de autorización. El art. 64 de la Ley 12.367, que algunas fuentes citan, figura derogado por la Ley 15.809 (F11). La Ley 17.166 y el Decreto-Ley 14.841 regulan otros supuestos (sorteos telefónicos con desembolso y rifas) y no se aplican a este modelo (F9, F10). Consultar con escribano o abogado.

## 1.5 Embudo corregido

1. Asesoramiento sin costo, de 30 minutos, con guion fijo.
2. Demo estándar: el formulario con el nombre del comercio, funcionando en el celular del dueño.
3. Contratación del paquete de arranque. Se firma el contrato con las cláusulas de datos.
4. Puesta en marcha: QR en el mostrador, beneficio de bienvenida para quien se registra, inscripción de la base ante la URCDP.
5. Entrega: base del comercio funcionando en cuentas a su nombre, una hoja de instrucciones y el contacto de soporte.
6. Continuidad: abono mensual, o proyectos puntuales (entre ellos, el sorteo autorizado).
