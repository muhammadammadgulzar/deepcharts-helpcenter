---
title: "Cómo conectar una fuente de datos dxFeed"
slug: "connect-dxfeed"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Conecte una cuenta dxFeed comprada en el sitio web de DeepCharts o en dxfeed.com, incluida la configuración de DOM Type y Symbol Manage."
keywords: ["dxfeed", "dx feed", "conectar dxfeed", "cuenta del sitio web", "dom type", "mbo", "mbp", "credenciales dxfeed"]
source_hash: "d493928e9467305f"
ai_translated: true
source_hash: "d493928e9467305f"
---
Al terminar, tendrá su cuenta dxFeed conectada con un punto verde y un gráfico cargando datos dxFeed en vivo. Esta guía cubre las suscripciones a dxFeed compradas en el sitio web de DeepCharts (el caso más común) y directamente en dxfeed.com. Si su cuenta dxFeed proviene de una empresa prop (MFF, Aqua, Goat y similares), siga en su lugar [[connect-dxfeed-prop-firm]]: las cuentas prop usan un Feed Source distinto y no tienen campo Server.

## Antes de empezar

- Una suscripción a dxFeed, comprada en el sitio web de DeepCharts ([[buy-data-feed]]) o en dxfeed.com con DeepCharts seleccionado como plataforma.
- El acuerdo de datos de mercado firmado — consulte [[sign-market-data-agreement]]. Para las compras en el sitio web, sus credenciales permanecen ocultas en el panel hasta que firme; tras firmar, el nombre de usuario y la contraseña se hacen visibles en la página Subscriptions. Anótelos.
- DeepCharts instalado y en ejecución — consulte [[install-deepcharts]].

## Pasos

1. En DeepCharts, haga clic en **Select Connection** en la barra de herramientas principal y, a continuación, haga clic en **Feed Settings** en la parte inferior del menú desplegable.

[SCREENSHOT: Barra de herramientas principal con el menú desplegable Select Connection abierto y Feed Settings resaltado en la parte inferior | dc-es-connect-dxfeed-01.png]

2. En la ventana Feed Settings, haga clic en **Add Connection**.

3. Complete los campos de la conexión:

| Campo | Valor |
|---|---|
| **Name** | Cualquier nombre para este perfil, por ejemplo "Mi dxFeed" |
| **Feed Source** | dxFeed |
| **Username** | El nombre de usuario dxFeed de su panel |
| **Password** | La contraseña dxFeed de su panel |
| **Server** | **Website Account** si lo compró en el sitio web de DeepCharts; **dxFeed Account** si lo compró en dxfeed.com |
| **DOM Type** | MBO o MBP — vea más abajo |

Pruebe el formulario en vivo abajo: elija dxFeed como Feed Source y vea qué campos le pide.

[WIDGET: feed-navigator]

> **Nota:** **DOM Type** controla el formato de la profundidad de nivel 2. Los datos de nivel 2 de dxFeed para CME Group son MBO (market-by-order): elija **MBO** para la profundidad completa por orden, que es lo mejor para el DOM y los indicadores de flujo de órdenes. **MBP** son datos mucho más ligeros; elíjalo si su conexión es lenta o los gráficos se retrasan durante períodos de alto volumen.

4. Haga clic en **Save** y cierre la ventana.

5. Haga clic de nuevo en **Select Connection** y haga clic en su nuevo perfil dxFeed para conectarse. El círculo junto a él debería ponerse verde en unos 10 segundos.

[SCREENSHOT: Menú desplegable Select Connection con el perfil dxFeed conectado y su círculo de estado en verde | dc-es-connect-dxfeed-02.png]

6. Desconecte la fuente (haga clic en ella de nuevo) y, a continuación, abra **Options → Symbol Manage** y dirija sus bolsas a esta fuente: la guía completa está en [[symbol-manage]]. En resumen: si su bolsa está en la lista, asegúrese de que su columna **Data Feed** apunte al perfil dxFeed (icono de cadena para cambiarlo); si no está en la lista, haga clic en **Subscribe**, busque la bolsa y asigne el perfil dxFeed.

7. Cierre Symbol Manage y reconecte. Confirme que el círculo está verde de nuevo.

8. Abra un gráfico: **New → Price Chart**, seleccione un instrumento (por ejemplo ES o NQ) y ábralo.

### Si también ejecuta DeepDom

DeepCharts y DeepDom comparten un único puente de datos: la misma conexión dxFeed sirve a ambas aplicaciones al mismo tiempo, pero la configuración debe coincidir exactamente. En la configuración de fuente de DeepDom introduzca las credenciales dxFeed idénticas, el mismo valor de Server (**Website Account**) y el mismo **DOM Type**, y luego conéctese. Si una aplicación no se conecta mientras la otra funciona, lo primero que hay que comprobar es una configuración de fuente discordante entre las dos.

## Verifique que funcionó

- El círculo de conexión en **Select Connection** está verde.
- Un gráfico de una bolsa suscrita dibuja velas y el precio se actualiza en vivo.

> **Nota:** dxFeed opera dos servidores, Frankfurt (UE) y Virginia (EE. UU.), y le dirige automáticamente al más cercano; no hay elección de región de servidor. Si observa retraso en los datos, lo que importa es su velocidad de descarga desde la región de ese servidor, y cambiar el **DOM Type** a MBP es la solución habitual en una línea lenta.

## Si algo salió mal

| Síntoma | Consulte |
|---|---|
| El círculo sigue rojo — credenciales rechazadas | [[fix-username-password]] — asegúrese de estar usando las credenciales de la fuente emitidas en el panel y de que el acuerdo esté firmado |
| Error "Unable to load DLL DXFeed_64.dll" | [[fix-dxfeed-dll]] |
| Error DATA_ACCESS_SUSPENDED | [[fix-data-access-suspended]] |
| Círculo verde pero los gráficos no se mueven | [[feed-connected-chart-not-moving]] |
| Los gráficos se retrasan durante períodos activos | [[data-delayed-lagging]] — y considere DOM Type = MBP |

> **Advertencia:** Las credenciales dxFeed emitidas a través de otras plataformas de gráficos (Quantower, Sierra Chart, ATAS y similares) no se pueden usar con DeepCharts, y las compras en dxfeed.com solo funcionan cuando DeepCharts fue seleccionado como plataforma en el momento de la compra. Si eligió otra plataforma, contacte a soporte de dxFeed para que reemitan credenciales para DeepCharts.

## Artículos relacionados

- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[connect-dxfeed-prop-firm]]
- [[connect-data-feed]]
- [[compatibility-guide]]
- [[first-chart]]