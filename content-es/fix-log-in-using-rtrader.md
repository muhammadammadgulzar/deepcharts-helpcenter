---
title: "Solución: Please Log In Using R Trader or R Trader Pro"
slug: "fix-log-in-using-rtrader"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "Solucione el error de Rithmic que le pide iniciar sesión con R Trader o R Trader Pro firmando una sola vez el Acuerdo de Datos de Mercado de su cuenta."
keywords: ["Please log in using R | Trader or R | Trader Pro and sign the agreements", "rtrader firmar acuerdos", "acuerdo rithmic no firmado", "acuerdo r trader pro", "firmar acuerdo de datos de mercado rithmic", "error acuerdos rithmic"]
source_hash: "b498bb7fbb32f5f9"
ai_translated: true
source_hash: "b498bb7fbb32f5f9"
---
Este error proviene de Rithmic cuando intenta conectar una fuente de datos o cuenta de trading de Rithmic cuyo Acuerdo de Datos de Mercado (Market Data Agreement) requerido aún no se ha firmado. Rithmic exige que inicie sesión a través de R Trader o R Trader Pro (o de su sitio web) al menos una vez y acepte los acuerdos antes de permitir la conexión de cualquier plataforma de terceros, incluida DeepCharts. Sus credenciales pueden ser perfectamente correctas y aun así la conexión será rechazada hasta que lo haga.

## Síntoma

Al conectar una fuente de Rithmic, la conexión falla con:

**Connection Failed: Please log in using R | Trader or R | Trader Pro and sign the agreements**

[SCREENSHOT: El cuadro de diálogo de error de conexión mostrando el mensaje "Please log in using R | Trader or R | Trader Pro and sign the agreements" | dc-es-fix-log-in-using-rtrader-01.png]

No debe confundirse con:

- [[fix-username-password]]: Rithmic rechaza las credenciales en sí; aquí las credenciales se aceptan pero falta el acuerdo.
- [[fix-rithmic-expert-not-attached]]: un error de Rithmic diferente con su propia causa.

## Causa más probable

El Acuerdo de Datos de Mercado de Rithmic para esta cuenta nunca se ha firmado, normalmente porque nunca ha iniciado sesión en R Trader o R Trader Pro con ella.

## Solución rápida

Firme el acuerdo a través del sitio web de Rithmic, sin necesidad de instalar nada:

1. Abra la página de inicio de sesión para traders del sitio web de Rithmic. [CONFIRM: exact URL of the Rithmic web page where the Market Data Agreement is signed]
2. Inicie sesión con sus credenciales de Rithmic (traders de empresas prop: el nombre de usuario y la contraseña de Rithmic del correo de bienvenida de su empresa, no el inicio de sesión del sitio web de su empresa).
3. Revise y firme el Acuerdo de Datos de Mercado, seleccionando el estado **Non-Professional** si le corresponde.
4. Guarde y confirme el acuerdo.
5. Reinicie DeepCharts y reconecte la fuente.

## Si eso no funcionó

### Causa: El acuerdo debe firmarse en R Trader Pro

Si la vía del sitio web no está disponible para su cuenta, firme a través de la aplicación R Trader Pro:

1. Descargue R Trader Pro desde https://www.rithmic.com/rtraderpro haciendo clic en el botón **Download R | Trader Pro**.
2. Ejecute el instalador y complete la instalación con las opciones predeterminadas.
3. Inicie R Trader Pro. La pantalla de inicio de sesión muestra dos formularios de inicio de sesión uno junto al otro: rellene **ambos** formularios con las mismas credenciales y las mismas selecciones; así es como está diseñado para funcionar.
4. En cada formulario, establezca **System** en su empresa o sistema (los usuarios de Apex seleccionan **Apex**), establezca **Gateway** en la ubicación más cercana a usted (Chicago, Europa, Singapur...) e introduzca su nombre de usuario y contraseña de Rithmic.

[SCREENSHOT: La pantalla de inicio de sesión de R Trader Pro mostrando los dos formularios de inicio de sesión lado a lado, ambos rellenados con System, Gateway, Username y Password | dc-es-fix-log-in-using-rtrader-02.png]

5. Haga clic en **Login**.
6. Cuando se le solicite, lea y acepte el Acuerdo de Datos de Mercado, seleccionando el estado **Non-Professional** si le corresponde.

[SCREENSHOT: El aviso del Acuerdo de Datos de Mercado dentro de R Trader Pro con la acción de aceptar visible | dc-es-fix-log-in-using-rtrader-03.png]

7. Cierre R Trader Pro: el acuerdo ya queda registrado en el lado de Rithmic.
8. Abra DeepCharts y reconecte la fuente.

> **Consejo:** Si cerró R Trader Pro antes de que apareciera el aviso del acuerdo, vuelva a iniciar sesión: el aviso reaparece hasta que el acuerdo sea aceptado.

> **Nota:** No confunda el campo **System** con el campo **Server**: ambos pueden mostrar valores similares (como Apex), pero son campos diferentes.

### Causa: No puede iniciar sesión en R Trader Pro en absoluto

Si R Trader Pro también rechaza su inicio de sesión, el problema son las credenciales, no el acuerdo: lo más habitual es que se haya usado el inicio de sesión del sitio web de la empresa prop en lugar de las credenciales de Rithmic separadas. Consulte [[fix-username-password]].

## Si sigue atascado

Genere un [[diagnostic-report]] y contacte al equipo a través de [[get-help]]; mencione si pudo iniciar sesión en R Trader Pro y si el aviso del acuerdo llegó a aparecer.

## Cómo prevenirlo

El acuerdo solo necesita firmarse una vez por cuenta: hágalo antes del primer intento de conexión. Consulte [[sign-market-data-agreement]] para el proceso general, [[rtrader-pro-plugin]] para trabajar con R Trader Pro y [[connect-rithmic]] para la configuración completa de la conexión.

## Artículos relacionados

- [[sign-market-data-agreement]]
- [[rtrader-pro-plugin]]
- [[connect-rithmic]]
- [[connect-apex]]
- [[connect-rithmic-prop-firm]]
- [[fix-username-password]]