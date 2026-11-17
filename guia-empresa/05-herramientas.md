# 5. Herramientas técnicas

Precios consultados el 17/11/2026. Conversión a pesos con dólar a $ 40,59 (apertura del 16/11/2026 según prensa, F29); es ESTIMACIÓN y varía con el tipo de cambio.

## 5.1 Criterios

- Costo cercano a cero por cliente, porque el abono es chico.
- Cuentas a nombre del comercio, que es el responsable de la base (sección 1.2). La empresa entra como colaboradora.
- Proveedores en países que la URCDP considera adecuados (Unión Europea, o Estados Unidos dentro del Marco de Privacidad de Datos, F22).
- Sin programación propia en la primera etapa. Lo que se arma tiene que poder mantenerlo cualquiera de los dos socios.

## 5.2 Stack recomendado

| Función | Herramienta | Precio | Pago desde Uruguay | Fuente |
|---|---|---|---|---|
| Formulario | Tally, plan gratuito | $ 0. Formularios y respuestas sin límite dentro de su política de uso razonable. Plan Pro: USD 24 por mes ($ 974), quita la marca y permite dominio propio | Cobro en dólares; no emite factura uruguaya | F24 |
| Base de clientes | Google Sheets, en una cuenta de Google del comercio | $ 0 con cuenta personal | No aplica | No verificado en esta investigación: límites de la cuenta gratuita |
| QR | Código QR estático que apunta al formulario | $ 0. Un QR estático no vence ni depende de un proveedor | No aplica | Criterio propio |
| Mensajería | Aplicación WhatsApp Business en el celular del comercio | $ 0 | No aplica | No verificado en esta investigación: límites de las listas de difusión |
| Correo (opcional) | Brevo, plan gratuito | $ 0 hasta 300 correos por día. Plan Starter: USD 9 por mes ($ 365), desde 5.000 correos al mes | Cobro en dólares; no emite factura uruguaya | F25 |
| Reportes | Una hoja de resumen dentro de la misma planilla, exportada a PDF | $ 0 | No aplica | Criterio propio |
| Trabajo interno de la empresa | Google Workspace Business Starter, dos usuarios | USD 7 por usuario al mes con plan anual o USD 8,40 con plan flexible, precio de Estados Unidos. Para dos usuarios: $ 568 a $ 682 por mes | Precio para Uruguay [sin confirmar] | F33 |
| Dominio propio | Un dominio para la empresa | $ 150 por mes (supuesto propio, no relevado) | — | — |
| Facturación electrónica | Proveedor habilitado por DGI | $ 354 a $ 720 por mes con IVA [sin confirmar] | Sí, proveedores uruguayos | F30 |

Costo mensual de herramientas para la empresa, sin la facturación electrónica: unos $ 900 (682 + 150, redondeado).

Sobre el pago: Tally y Brevo publican sus precios en dólares. No se verificó en esta investigación el alta y el pago con tarjeta uruguaya en cada una; probarlo durante la validación, antes de comprometerse con un cliente. Tampoco se relevó el tratamiento tributario de estos pagos al exterior: consultar con contador.

## 5.3 Mensajería: lo que se puede y lo que no

**Aplicación WhatsApp Business (gratuita).** Es la opción para el abono Contacto. Las listas de difusión llegan solo a quienes tienen agendado el número del comercio, por lo que la hoja de instrucciones debe pedir al cliente que lo agende al registrarse. No verificado en esta investigación: el tamaño máximo de cada lista y las condiciones de uso actuales; revisarlas en la ayuda oficial de WhatsApp antes de prometer cantidades. Enviar muchos mensajes iguales desde la aplicación puede terminar en el bloqueo del número: es un riesgo conocido del canal, sin fuente oficial relevada acá.

**Plataforma de WhatsApp Business (API, paga).** Permite envíos masivos con plantillas aprobadas por Meta. Meta cobra por mensaje según categoría y país; Uruguay está en la región "Resto de América Latina" (F26). La tarifa de marketing para esa región sería de unos USD 0,074 por mensaje [sin confirmar], dato de un tercero. Con ese valor:

| Contactos | Campañas al mes | Mensajes | Costo mensual |
|---|---|---|---|
| 300 | 2 | 600 | USD 44,40, unos $ 1.802 (600 × 0,074 × 40,59) |
| 300 | 4 | 1.200 | USD 88,80, unos $ 3.604 |

Ese costo es del orden del abono completo. La API no entra en los paquetes B ni C a los precios de la sección 4. Si un comercio la necesita, se cotiza con el costo de mensajes a su cargo. Los mensajes de servicio, que son respuestas a un cliente que escribió primero, tienen 1.000 gratuitos por mes y por número (F26).

**Correo.** El plan gratuito de Brevo alcanza para cualquier comercio de barrio (300 por día, F25). El problema no es el costo: pocos clientes de un almacén dejan su correo y menos lo leen. Sirve como canal secundario.

## 5.4 Dónde quedan los datos

| Herramienta | Empresa | Situación frente al art. 23 |
|---|---|---|
| Tally | Empresa europea según información general (no verificado en esta investigación: sede y lugar donde aloja los datos) | La Unión Europea está en la lista de países adecuados (F22) |
| Brevo | Empresa europea según información general (no verificado en esta investigación: sede y lugar donde aloja los datos) | Ídem |
| Google | Estados Unidos | Adecuada si figura en el listado del Marco de Privacidad de Datos (F22). No verificado en esta investigación: comprobarlo en el listado del Departamento de Comercio de Estados Unidos |
| WhatsApp (Meta) | Estados Unidos | Ídem |

En todos los casos el formulario informa que los datos se guardan fuera del país y pide el consentimiento (sección 1.3), que es una de las excepciones del art. 23 (F1). Las dos cosas juntas, proveedor adecuado y consentimiento, dejan cubierto el punto.

## 5.5 Estructura estándar por cliente

Todos los clientes tienen exactamente lo mismo, con los mismos nombres:

- Una cuenta de Google del comercio, con verificación en dos pasos.
- Una planilla "Clientes – [comercio]" con cuatro hojas: Registros (la llena el formulario), Bajas, Campañas (fecha, texto, cantidad enviada) y Resumen.
- Un formulario creado desde la plantilla maestra, con el texto de consentimiento y su número de versión.
- Un QR estático, guardado como imagen en la carpeta del cliente.
- Una carpeta compartida con la empresa.

Columnas de la hoja Registros: fecha y hora, nombre, celular, mes de cumpleaños, acepta beneficio, acepta promociones, versión del texto aceptado, origen.

## 5.6 Lo que estas herramientas no hacen

- No miden ventas. El reporte muestra registros, envíos y bajas. Para saber si una campaña trajo gente hay que contar los beneficios canjeados en el mostrador, y eso lo anota el comercio.
- No evitan que el comerciante exporte la planilla y la use mal. Lo cubre el contrato, no la herramienta.
- No reemplazan un sistema de caja ni de stock, y no hay que prometerlo.
- Un formulario gratuito puede cambiar sus condiciones. Por eso el QR debería apuntar a una dirección del dominio de la empresa que redirige al formulario, para poder cambiar de proveedor sin reimprimir carteles. Requiere una configuración simple del dominio; es recomendación propia.
