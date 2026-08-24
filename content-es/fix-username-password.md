---
title: "Solución: Connection Failed — Verifique el nombre de usuario y la contraseña"
slug: "fix-username-password"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Solucione el error de conexión de Rithmic 'check username and password' usando las credenciales de Rithmic correctas y el servidor adecuado para su tipo de cuenta."
keywords: ["Please make sure you entered the username and password correctly", "fallo de inicio de sesión rithmic", "contraseña incorrecta rithmic", "credenciales rithmic", "el inicio de sesión de apex no funciona en deepcharts", "nombre de usuario o contraseña no válidos", "gateway rithmic"]
source_hash: "f8fc52b8452913b5"
ai_translated: true
source_hash: "f8fc52b8452913b5"
---
Este error aparece cuando DeepCharts no puede autenticar sus credenciales de Rithmic. Normalmente significa una de dos cosas: los datos de inicio de sesión son incorrectos (muy a menudo porque se usó el inicio de sesión del sitio web de la empresa prop en lugar de las credenciales de Rithmic separadas), o se seleccionó el servidor equivocado para su tipo de cuenta.

## Síntoma

Al conectar una fuente de datos o cuenta de trading de Rithmic, la conexión falla con:

**Connection failed: Please make sure you entered the username and password correctly.**

[SCREENSHOT: El cuadro de diálogo de error de conexión mostrando el mensaje "Please make sure you entered the username and password correctly" tras una conexión de Rithmic fallida | dc-es-fix-username-password-01.png]

No debe confundirse con:

- [[fix-log-in-using-rtrader]]: Rithmic acepta sus credenciales pero le exige firmar antes los acuerdos de datos de mercado.
- [[fix-bad-server]]: un error de autorización de dxFeed, sin relación con Rithmic.
- [[fix-unable-to-establish-connection]]: un fallo a nivel de red antes de que la autenticación siquiera ocurra.

## Causa más probable

El nombre de usuario o la contraseña son incorrectos, muy comúnmente porque los traders de empresas prop introducen el inicio de sesión del sitio web de su empresa en lugar de las credenciales de Rithmic separadas que la empresa emitió.

## Solución rápida

1. Localice sus credenciales de Rithmic reales. Traders de empresas prop (Apex y otras): su empresa emite dos conjuntos de credenciales: el inicio de sesión del sitio web para el panel de la empresa y credenciales de Rithmic separadas para la fuente de datos. DeepCharts necesita las de **Rithmic**, que llegan en el correo de bienvenida de la empresa. Busque "Rithmic" en su bandeja de entrada si no está seguro.
2. Copie y pegue el nombre de usuario y la contraseña en lugar de escribirlos manualmente.
3. Asegúrese de no haber copiado espacios adicionales antes o después de ninguno de los valores: un espacio final es invisible pero hace fallar la autenticación.
4. En **Feed Settings**, edite la conexión, vuelva a introducir ambos campos, guarde e intente conectar de nuevo. La maqueta interactiva a continuación muestra el formulario: elija **Rithmic** como origen para ver los campos exactos que debe rellenar.

[WIDGET: feed-navigator]

## Si eso no funcionó

### Causa: Servidor incorrecto para su tipo de cuenta

Rithmic rechaza los inicios de sesión enviados al gateway equivocado. En **Feed Settings**, edite la conexión y compruebe el campo **Server** (la documentación de Rithmic lo llama gateway) contra su tipo de cuenta:

| Su tipo de cuenta | Servidor a seleccionar |
|---|---|
| Cuenta real de bróker (fondeada en un bróker) | La entrada del servidor real de su bróker |
| Solo fuente de datos de Rithmic (sin cuenta de bróker) | **Paper Trading** |
| Cuenta de empresa prop | El nombre de su empresa si aparece (por ejemplo **Apex**); en caso contrario, **Paper Trading** |

[SCREENSHOT: Feed Settings con el menú desplegable Server abierto, mostrando entradas como Apex y Paper Trading, con la correcta resaltada | dc-es-fix-username-password-02.png]

> **Nota:** El campo separado **Gateway** selecciona una ubicación regional (Chicago, Europa, Singapur...). Una ubicación lejana añade latencia, pero no es lo que causa este error: céntrese en el campo **Server**.

Guarde el cambio y reconecte. La tabla de servidores para empresas prop específicas está en [[connect-rithmic-prop-firm]].

### Causa: Las credenciales en sí son incorrectas o están inactivas

Si puede descartar errores de escritura y el servidor es correcto, verifique las credenciales fuera de DeepCharts: intente iniciar sesión en R Trader Pro con el mismo nombre de usuario y contraseña. Si Rithmic también las rechaza allí, contacte a su bróker o empresa prop para restablecer o reemitir las credenciales: DeepCharts no puede arreglar credenciales que el propio Rithmic no acepta.

> **Consejo:** Lista de comprobación final antes de reconectar: el nombre de usuario coincide exactamente con el del correo de bienvenida, la contraseña se pegó sin espacios adicionales, el **Server** corresponde a su tipo de cuenta y las mismas credenciales funcionan en R Trader Pro.

## Si sigue atascado

Genere un [[diagnostic-report]] (nunca comparta la contraseña en sí) y luego contacte al equipo a través de [[get-help]] con su nombre de usuario y una captura de pantalla del formulario de Feed Settings.

## Cómo prevenirlo

Configure la conexión con las credenciales y el servidor correctos desde el principio: siga [[connect-rithmic]], la tabla de servidores de empresas prop en [[connect-rithmic-prop-firm]] o la guía específica de Apex en [[connect-apex]].

## Artículos relacionados

- [[connect-rithmic]]
- [[connect-rithmic-prop-firm]]
- [[connect-apex]]
- [[fix-log-in-using-rtrader]]
- [[rtrader-pro-plugin]]
- [[fix-bad-server]]