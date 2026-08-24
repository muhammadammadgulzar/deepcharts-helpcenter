---
title: "Cómo conectar una fuente de datos (Feed Settings)"
slug: "connect-data-feed"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Añada una conexión de fuente de datos en Feed Settings, conéctela y obtenga datos en vivo en un gráfico."
keywords: ["feed settings", "añadir conexión", "select connection", "configuración de fuente de datos", "conectar fuente", "punto verde", "feed source", "campo server"]
source_hash: "995ff39503399f26"
ai_translated: true
source_hash: "995ff39503399f26"
---
Al terminar, tendrá su fuente de datos guardada en Feed Settings, conectada con un punto verde y un gráfico cargando datos en vivo. Esta es la guía genérica que se aplica a todas las fuentes: las guías específicas de cada proveedor ([[connect-dxfeed]], [[connect-rithmic]], [[connect-cqg]] y otras) siguen la misma estructura con sus valores exactos.

## Antes de empezar

- Sus credenciales de la fuente (nombre de usuario y contraseña emitidos para la fuente, no el inicio de sesión del sitio web de su proveedor). Si aún no tiene una fuente, consulte [[buy-data-feed]] o empiece con la [[free-delayed-data-feed]].
- El acuerdo de datos de mercado firmado para su tipo de cuenta — consulte [[sign-market-data-agreement]]. Sin él, la conexión permanece roja aunque las credenciales sean correctas.
- Los valores exactos de **Feed Source** y **Server** para su proveedor: consúltelos en [[compatibility-guide]].

## Pasos

1. En DeepCharts, haga clic en **Select Connection** en la barra de herramientas principal.

2. Haga clic en **Feed Settings** en la parte inferior del menú desplegable. Se abre la ventana Feed Settings.

[SCREENSHOT: Barra de herramientas principal de DeepCharts con el menú desplegable Select Connection abierto y la entrada Feed Settings resaltada en la parte inferior del desplegable | dc-es-connect-data-feed-01.png]

3. Haga clic en **Add Connection**. Aparece un formulario con varios campos.

4. En **Name**, escriba cualquier nombre que reconozca después, por ejemplo "Apex Eval" o "Mi dxFeed". Es solo una etiqueta; aparece en el menú desplegable Select Connection.

5. En **Feed Source**, elija la fuente que corresponde a su cuenta:

| Su cuenta | Feed Source |
|---|---|
| dxFeed comprado en el sitio web de DeepCharts o en dxfeed.com | dxFeed |
| dxFeed de una empresa prop (MFF, Aqua, Goat...) | dxFeed Prop |
| Cualquier cuenta Rithmic (empresa prop, bróker, compra en el sitio web) | Rithmic RAPI |
| Cuenta CQG de un bróker o directamente de CQG | CQG |
| Fuente gratuita integrada con retraso | 15 min delayed |
| Cuenta de la Competición de DeepCharts | V-Sim |
| Interactive Brokers | IBKR (TWS API) |

> **Nota:** Las entradas de Rithmic en el menú desplegable son **Rithmic RAPI** y **Rithmic Wss - beta**: no hay una opción "Rithmic" a secas. Elija **Rithmic RAPI**; es la fuente recomendada.

Pruebe el mismo formulario en vivo abajo: elija cada Feed Source y observe cómo los campos cambian para adaptarse.

[WIDGET: feed-navigator]

6. Introduzca su **Username** y **Password**.

> **Advertencia:** Estas son las credenciales emitidas para la propia fuente, normalmente entregadas en un correo de bienvenida de su bróker o empresa prop. No son el inicio de sesión del sitio web o panel del proveedor: usar el inicio de sesión del sitio web es la causa más común de una conexión fallida.

7. Si aparece un campo **Server**, configúrelo con el valor exacto de su proveedor según [[compatibility-guide]]. Cada empresa prop de Rithmic tiene una entrada con nombre (por ejemplo "Apex"); las firmas sin una usan "Rithmic Paper Trading"; las cuentas Rithmic de bróker usan "Rithmic 01"; el dxFeed comprado en el sitio web usa "Website Account". Cuando el Feed Source es **dxFeed Prop** no existe campo Server: eso es normal.

### Si eligió Rithmic RAPI

- Configure **Gateway** en la región más cercana a usted. Las opciones son Automatic, Chicago Area, Seoul, Mumbai, Hong Kong, Sao Paolo, Singapore, Sydney, Tokyo, Frankfurt, Europe, Cape Town, NYC Area y US West; la opción predeterminada es Automatic. Un gateway lejano funciona igualmente pero añade latencia.
- **Include commissions** está activado de forma predeterminada: muestra las comisiones en su P/L.
- Habilite **Show only active accounts** si las cuentas prop antiguas o vencidas saturan su lista de cuentas.
- No toque el botón **Use R Trader** a menos que quiera ejecutar R Trader junto a DeepCharts con la misma fuente; esa configuración se cubre en [[rtrader-pro-plugin]].

[SCREENSHOT: Formulario de conexión Rithmic RAPI completado, con el menú desplegable Gateway abierto mostrando la lista de regiones y Automatic seleccionado | dc-es-connect-data-feed-02.png]

### Si eligió dxFeed o dxFeed Prop

- Configure **DOM Type** en **MBO** o **MBP**. MBO entrega profundidad de nivel 2 completa por orden (lo mejor para las herramientas de flujo de órdenes); MBP son datos mucho más ligeros y es la elección correcta si su conexión es lenta o los gráficos se retrasan durante períodos activos.

### Si eligió CQG

- Habilite **Use demo credentials** solo si tiene una cuenta demo de CQG; déjelo desactivado para una cuenta en vivo.
- Habilite **Connect on startup** si quiere que esta fuente se conecte automáticamente cada vez que se abre DeepCharts.

8. Deje todos los demás campos en sus valores predeterminados y haga clic en **Save**.

9. De vuelta en la barra de herramientas principal, haga clic de nuevo en **Select Connection**: su nueva fuente aparece ahora con el nombre que le dio. Haga clic en ella para conectarse. En unos 10 segundos el indicador de conexión debería ponerse verde.

[SCREENSHOT: Menú desplegable Select Connection mostrando la fuente recién guardada con un punto de estado verde a su lado | dc-es-connect-data-feed-03.png]

10. Desconecte la fuente (haga clic en ella de nuevo) y, a continuación, configure sus bolsas en **Options → Symbol Manage**: siga [[symbol-manage]]. Este paso dirige cada bolsa a su nueva fuente; omitirlo es la mayor causa de tickets de "conectado pero los gráficos no se mueven".

11. Reconecte la fuente y abra un gráfico mediante **New → Price Chart** — consulte [[first-chart]].

## Verifique que funcionó

- El punto junto a su conexión en **Select Connection** está verde.
- Un gráfico abierto en una bolsa suscrita dibuja velas y el precio se actualiza (en vivo, o con un retraso de 15 minutos si eligió la fuente con retraso).

## Si algo salió mal

| Síntoma | Consulte |
|---|---|
| El punto sigue rojo — "check username and password" | [[fix-username-password]] |
| El punto sigue rojo — "bad server" | [[fix-bad-server]] |
| El punto sigue rojo — "unable to establish connection" | [[fix-unable-to-establish-connection]] |
| Rithmic le pide iniciar sesión usando R Trader | [[fix-log-in-using-rtrader]] |
| El punto está verde pero el gráfico no se mueve | [[feed-connected-chart-not-moving]] |
| Los gráficos se retrasan durante períodos activos | [[data-delayed-lagging]] |

> **Nota:** Si también ejecuta DeepDom, ambas aplicaciones comparten un único puente de datos: una sola conexión sirve a las dos al mismo tiempo, pero la configuración de la fuente debe introducirse de forma idéntica en ambas aplicaciones. Una configuración discordante en una aplicación puede impedir que la otra se conecte.

## Artículos relacionados

- [[compatibility-guide]]
- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[manage-feed-connections]]
- [[first-chart]]