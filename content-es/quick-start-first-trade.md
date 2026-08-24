---
title: "Inicio rápido: de la instalación a su primera operación"
slug: "quick-start-first-trade"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "30 min to complete"
description: "Un camino guiado desde una instalación limpia hasta una orden bracket simulada: licencia, asistente, fuente de datos, gráfico, indicador y el panel de trading."
keywords: ["inicio rápido", "primeros pasos", "primera operación", "guía de configuración", "usuario nuevo", "de la instalación a operar", "tutorial para principiantes", "orden bracket"]
source_hash: "9d0e547100215c4d"
ai_translated: true
source_hash: "9d0e547100215c4d"
---
Al terminar tendrá DeepCharts instalado, conectado a datos de mercado, mostrando un gráfico con un indicador, y habrá colocado su primera orden bracket simulada (entrada, stop loss y take profit) sin arriesgar dinero.

Este es el broche de la serie de primeros pasos. Cada paso es breve y enlaza a un artículo completo si quiere más profundidad o encuentra un problema. No necesita un bróker ni una fuente de datos de pago para completarlo: la fuente gratuita retrasada y el bróker SIM integrado son suficientes.

## Antes de empezar

- Un PC con Windows que cumpla los [[system-requirements]]
- Una cuenta de DeepCharts en my.deepcharts.com con su clave de licencia; [[install-deepcharts]] muestra dónde encontrarla
- No se necesitan credenciales de fuente de datos: esta guía usa la [[free-delayed-data-feed|fuente gratuita retrasada 15 minutos]]

## Pasos

### 1. Instalar y activar

1. Desactive temporalmente su antivirus: es la causa más común de instalaciones fallidas. Reactívelo después de la instalación.
2. Descargue el instalador desde su panel de my.deepcharts.com y ejecútelo. (Si su licencia llegó a través de una **empresa prop**, tanto el instalador como la clave de licencia provienen del panel de la empresa prop.)
3. En el primer arranque, introduzca el **correo electrónico** registrado en my.deepcharts.com y su **clave de licencia**. Pegue ambos sin espacios al principio ni al final: los espacios sueltos son la causa habitual del error "Invalid License".

Detalle completo: [[install-deepcharts]]. Problemas de activación: [[license-issues]].

[SCREENSHOT: El diálogo License Key de DeepCharts en el primer arranque con los campos Email y License visibles y el número de versión en el pie | dc-es-quick-start-first-trade-01.png]

### 2. Ejecutar el asistente de inicio

Tras la activación se ejecuta un asistente de tres pasos:

1. **Elección de fuente**: seleccione **I want to use 15 minutes delayed data powered by dxFeed for the moment** (quiero usar por ahora datos retrasados 15 minutos proporcionados por dxFeed). (Si ya tiene credenciales de fuente, elija la otra opción y consulte [[buy-data-feed]] y [[connect-data-feed]].)
2. **Symbol Manage**: el asistente asigna previamente las principales bolsas (CME, CBOT, COMEX, EUREX, NYMEX) a la fuente elegida. Deje los valores predeterminados y haga clic en **Next**.
3. **Customize experience**: elija un **Theme** (tema) y un **Alert sound profile** (perfil de sonidos de alerta), y haga clic en **Done**.

[SCREENSHOT: Paso 1 del asistente de inicio con la opción 15 minutes delayed data powered by dxFeed seleccionada | dc-es-quick-start-first-trade-02.png]

> **Nota:** ¿Se saltó el asistente o hizo clic donde no era? No se pierde nada: Feed Settings, **Options → Symbol Manage** y **Options → Settings** cubren lo mismo más adelante. Consulte [[free-delayed-data-feed]].

### 3. Conectar la fuente

Abra el selector de fuentes en la parte superior derecha de la barra principal y haga clic en su conexión. Espere al **punto verde**: significa que los datos fluyen. ¿Curiosidad por cómo es una conexión por dentro? Explore la maqueta de Feed Settings de abajo: el menú desplegable de origen cambia qué campos necesita cada proveedor.

[WIDGET: feed-navigator]

### 4. Comprobar Symbol Manage

Abra **Options → Symbol Manage**. La columna **Data Feed** de cada fila de bolsa debe mostrar su conexión. Si falta una bolsa que quiera, haga clic en **Subscribe** y añádala. Pruébelo en la maqueta de abajo: suscriba una bolsa y use el icono de cadena para cambiar su fuente. Detalles: [[symbol-manage]].

[WIDGET: symbol-manage-mock]

### 5. Abrir su primer gráfico

Haga clic en **New → Price Chart**, elija **CME** en el diálogo Select Instrument, elija un símbolo (**MES** (Micro S&P) o **MNQ** (Micro Nasdaq) son buenos contratos para empezar) y haga clic en **Select**. Espere unos segundos mientras se construye el gráfico. Recorrido completo: [[first-chart]].

[SCREENSHOT: El diálogo Select Instrument con CME seleccionado y MES MICRO SP resaltado | dc-es-quick-start-first-trade-03.png]

### 6. Añadir su primer indicador

1. Haga clic en el icono de gráfico de barras de la barra superior izquierda del gráfico para abrir el panel Indicators.
2. Haga clic en el botón verde **Indicators**. Se abre la Indicator List con pestañas de categoría (All, Volume, Statistics, Oscillator, Overlay, Utility, Third) y un cuadro de búsqueda.
3. Busque **Volume** y haga clic en el icono **+** junto a él. El indicador aparece bajo el gráfico.

[SCREENSHOT: La ventana Indicator List con el cuadro de búsqueda mostrando Volume y el icono + junto al indicador Volume resaltado | dc-es-quick-start-first-trade-04.png]

Cómo se organizan y configuran los indicadores: [[indicator-layout]] y [[volume]].

### 7. Activar el panel de trading con una cuenta SIM

1. Habilite el conmutador **Trading panel** en la barra inferior del gráfico. El panel se abre en el lado derecho del gráfico.
2. Establezca **Broker** en **SIM** y elija una cuenta de simulación en **Account**. Si no existe ninguna, cree una en **Options → Settings → Sim Account**; consulte [[simulation-accounts]].

[SCREENSHOT: El panel de trading del gráfico con Broker establecido en SIM, una cuenta seleccionada y la cantidad establecida en 1 | dc-es-quick-start-first-trade-05.png]

### 8. Colocar su primera orden bracket

1. Establezca el campo de cantidad en **1**.
2. Habilite el conmutador **OCO Strategy** y establezca **Mode** en **SL/TP**.
3. Introduzca las distancias de **SL** (stop loss) y **TP** (take profit) en ticks: empiece con márgenes amplios mientras aprende.
4. Haga clic en **BUY MKT**. Su entrada se ejecuta en la cuenta SIM y las órdenes de stop loss y take profit se adjuntan como bracket: cuando una se ejecuta, la otra se cancela.

[SCREENSHOT: El panel de trading con OCO Strategy habilitado, Mode establecido en SL/TP, valores de SL y TP en ticks introducidos y el botón BUY MKT resaltado | dc-es-quick-start-first-trade-06.png]

> **Nota:** En la fuente gratuita retrasada sus ejecuciones se basan en precios 15 minutos por detrás del mercado en vivo: sirve para aprender la plataforma, no para juzgar una estrategia. Consulte [[oco-strategies]] para saber qué hace cada configuración del bracket, y [[trading-from-chart]] para colocar órdenes directamente en el gráfico.

Para cerrarlo todo de una vez, haga clic en **Cancel and Flat**: cierra la posición y cancela las órdenes bracket restantes.

## Verifique que funcionó

Tras hacer clic en **BUY MKT**: **Open Qty** muestra 1, **Open P/L** se mueve con el mercado, y su stop y su objetivo son visibles como órdenes activas en la [[orders-window]]. Tras **Cancel and Flat**, Open Qty vuelve a 0 y no queda ninguna orden activa.

Ya ha tocado todas las partes fundamentales de la plataforma: instalación, datos, gráficos, indicadores y órdenes.

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| El instalador no se ejecuta o falla | [[installation-problems]] |
| "Invalid License" en la activación | [[license-issues]] |
| La lista de Select Instrument está vacía | [[symbol-manage]] |
| Gráfico abierto pero el precio no se mueve | [[feed-connected-chart-not-moving]] |
| Todo funciona pero los datos parecen antiguos | Esperado en la fuente retrasada: [[free-delayed-data-feed]]; para datos en vivo consulte [[buy-data-feed]] |

## Artículos relacionados

- [[welcome-to-deepcharts]]
- [[install-deepcharts]]
- [[free-delayed-data-feed]]
- [[simulation-accounts]]
- [[trading-from-chart]]
- [[oco-strategies]]