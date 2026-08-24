---
title: "Cómo usar la fuente de datos gratuita con 15 minutos de retraso"
slug: "free-delayed-data-feed"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Configure la fuente de datos gratuita de dxFeed con 15 minutos de retraso: sin credenciales, suscripción ni acuerdo de datos de mercado."
keywords: ["fuente de datos gratuita", "datos retrasados", "15 min de retraso", "15 minutos de retraso", "dxFeed - 15m delayed", "fuente demo", "datos gratis", "sin suscripción"]
source_hash: "ceaaf05d34227cc0"
ai_translated: true
source_hash: "ceaaf05d34227cc0"
---
Al terminar tendrá datos de mercado gratuitos fluyendo hacia DeepCharts a través de la fuente integrada de dxFeed con 15 minutos de retraso: sin nombre de usuario, contraseña, suscripción de pago ni acuerdo de datos de mercado.

Todo lo que ve en esta fuente va 15 minutos por detrás del mercado en vivo. Eso la hace ideal para aprender la plataforma, explorar indicadores y practicar en una cuenta SIM, e inadecuada para tomar decisiones de trading en tiempo real. Cuando necesite datos en vivo, consulte [[buy-data-feed]].

## Antes de empezar

- DeepCharts instalado y su licencia activada; consulte [[install-deepcharts]].
- Nada más. Esta fuente no requiere credenciales ni acuerdo: ese es precisamente su propósito.

## Pasos

### Si está en el Startup Wizard de la primera ejecución

1. En el paso de fuente de datos del asistente, seleccione **I want to use 15 minutes delayed data powered by dxFeed for the moment** (quiero usar por el momento datos con 15 minutos de retraso proporcionados por dxFeed) y haga clic en **Next**.

[SCREENSHOT: Paso de fuente de datos del Startup Wizard con la opción de radio I want to use 15 minutes delayed data powered by dxFeed for the moment seleccionada | dc-es-free-delayed-data-feed-01.png]

2. En el paso **Symbol Manage**, revise la tabla que asigna cada bolsa a la fuente retrasada. El asistente asigna previamente por usted las principales bolsas de futuros (CME, CBOT, COMEX, EUREX, NYMEX y otras): puede dejarlo tal como está. Haga clic en **Next**, termine el paso de personalización y haga clic en **Done**.

[SCREENSHOT: Paso Symbol Manage del Startup Wizard mostrando las columnas Exchange, Description y Data Feed con filas asignadas a la conexión dxFeed retrasada | dc-es-free-delayed-data-feed-02.png]

Ha terminado: pase directamente a "Verifique que funcionó" más abajo.

### Si ya terminó el asistente (añadir la fuente más tarde)

1. Haga clic en el selector **Feed** de la barra principal y elija **Feed Settings**.

[SCREENSHOT: Menú desplegable del selector Feed en la barra principal con el elemento Feed Settings resaltado | dc-es-free-delayed-data-feed-03.png]

2. Haga clic en **Add Connection**.

3. En **Name**, escriba un nombre para mostrar de la conexión, por ejemplo `dxFeed - 15m`.

4. En **Feed Source**, seleccione **dxFeed - 15m delayed**. Este origen no requiere nombre de usuario ni contraseña. Pruébelo en la ventana interactiva de Feed Settings a continuación: el menú desplegable Feed Source cambia los campos que pide cada origen.

[WIDGET: feed-navigator]

5. Haga clic en **Save** y espere la confirmación de guardado.

6. Abra de nuevo el selector **Feed** de la barra principal y seleccione su nueva conexión. El punto de estado se pone **verde** al conectarse.

7. Abra **Options → Symbol Manage** y asegúrese de que las bolsas que desea estén asignadas a su conexión retrasada en la columna **Data Feed**. Para añadir una, haga clic en **Subscribe**, elija su conexión retrasada en el menú desplegable **Data feed source** y seleccione las bolsas. Para reasignar una fila existente, use su icono de cadena (**Change connection**). Pruebe ambas acciones en la maqueta interactiva a continuación. Referencia completa: [[symbol-manage]].

[WIDGET: symbol-manage-mock]

8. Abra su primer gráfico: **New → Price Chart**; consulte [[first-chart]].

## Verifique que funcionó

- El selector **Feed** muestra su conexión retrasada con un punto **verde**.
- Un gráfico de precios se construye y se actualiza: durante el horario de mercado, los precios que ve van aproximadamente 15 minutos por detrás del mercado en vivo, y la plataforma marca los datos como retrasados en lugar de en tiempo real. [CONFIRM: exact wording and placement of the delayed-data banner shown with the 15-minute feed]

[SCREENSHOT: Un gráfico de precios recibiendo datos de la fuente retrasada con la indicación de datos retrasados visible y el punto verde de la fuente en la barra principal | dc-es-free-delayed-data-feed-04.png]

> **Nota:** Lo que pierde frente a una fuente en vivo: cada precio, nivel del DOM e impresión de la cinta llega 15 minutos tarde, por lo que el trabajo sensible al tiempo (practicar scalping contra el mercado actual, decisiones de operaciones en vivo) queda descartado. Lo que sigue funcionando por completo: todas las ventanas e indicadores, los diseños de gráficos, la reproducción y el paper trading en una cuenta SIM; consulte [[simulation-accounts]]. Cuando se le quede pequeña, una fuente en vivo se integra a través del mismo cuadro de diálogo Feed Settings: [[buy-data-feed]].

## Si algo salió mal

| Síntoma | A dónde ir |
|---|---|
| La fuente está en verde pero el gráfico nunca se mueve | [[feed-connected-chart-not-moving]]: con la fuente retrasada, recuerde además que las barras solo avanzan 15 minutos por detrás del reloj |
| El selector de instrumentos está vacío al abrir un gráfico | No hay bolsas suscritas: asígnelas en [[symbol-manage]] |
| La conexión nunca se pone verde | [[fix-unable-to-establish-connection]] |
| Esperaba precios en vivo | Esta fuente está retrasada por diseño; para datos en tiempo real consulte [[buy-data-feed]] |

## Artículos relacionados

- [[install-deepcharts]]
- [[buy-data-feed]]
- [[symbol-manage]]
- [[first-chart]]
- [[simulation-accounts]]
- [[quick-start-first-trade]]