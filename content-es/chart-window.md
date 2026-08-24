---
title: "La ventana de gráfico"
slug: "chart-window"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "9 min read"
description: "Recorrido completo por la ventana de gráfico de DeepCharts: controles de la barra de título, iconos de la barra de herramientas, pestañas, la barra inferior, navegación y el menú de clic derecho."
keywords: ["ventana de gráfico", "gráfico de precios", "pestañas de gráfico", "barra de herramientas del gráfico", "indicador OHLC", "duplicar gráfico", "siempre visible", "captura de pantalla del gráfico", "modo compacto", "añadir pestaña de gráfico", "separar gráfico"]
source_hash: "30c98d3101c5b915"
ai_translated: true
source_hash: "30c98d3101c5b915"
---
La ventana de gráfico es donde pasará la mayor parte de su tiempo en DeepCharts. Cada gráfico de precios se abre dentro de una, y cada control que necesita en el día a día — símbolo, marco temporal, indicadores, dibujos, trading — es accesible desde su marco sin abrir un menú aparte.

Este artículo describe cada área de la ventana de gráfico para que sepa qué hace cada icono, menú desplegable y botón y dónde encontrar la configuración correspondiente. Para las configuraciones que controlan cómo se construye la propia serie de precios, consulte [[price-chart-settings]]; para los estilos de barra y los conmutadores de sesión, consulte [[chart-display-options]].

## Qué es

La ventana de gráfico es el contenedor de uno o más gráficos de precios. Responde a la pregunta "¿dónde cambio X en mi gráfico?": el símbolo y el marco temporal viven en la barra de título, los controles de visualización e indicadores viven en la fila de iconos superior izquierda, las herramientas de dibujo viven en la barra de herramientas izquierda, y las plantillas rápidas y los conmutadores de trading viven en la barra inferior.

[SCREENSHOT: Una ventana de gráfico completa con un gráfico de velas cargado (p. ej. NQ, 5 Minute), anotada con llamadas para la barra de título, la fila de iconos superior izquierda, el indicador OHLC, la barra de herramientas de dibujo izquierda y la barra inferior | dc-es-chart-window-01.png]

## Cuándo usarla

- Quiere abrir, cambiar o comparar instrumentos en un gráfico.
- Necesita encontrar dónde vive un control: estilo de barra, indicadores, dibujos, captura de pantalla, conmutador de trading.
- Quiere organizar varios gráficos como pestañas o ventanas separadas.
- Quiere vincular varios gráficos para que sigan el mismo símbolo.

## Inicio rápido

1. En la barra principal, elija **New → Price Chart**.
2. En el diálogo **Select Instrument**, elija una bolsa en la barra lateral izquierda, seleccione un símbolo (por ejemplo **NQ**) y haga clic en **Select**.
3. Espere a que termine la barra de progreso **Building chart**: DeepCharts está cargando o descargando los datos de tick.
4. Utilice los tres menús desplegables de la barra de título para ajustar el gráfico: el símbolo (abre el mismo selector de instrumentos), el rango de datos (por ejemplo **10D - BT**) y el marco temporal (por ejemplo **5 Minute**).

[SCREENSHOT: El diálogo Select Instrument con la barra lateral de bolsas a la izquierda, CME seleccionada, la lista de símbolos con NQ resaltado y los botones New / Cancel / Select visibles | dc-es-chart-window-02.png]

> **Nota:** El selector de instrumentos solo lista las bolsas a las que se ha suscrito en **Options → Symbol Manage**. Si el selector parece vacío, suscriba primero una bolsa; consulte [[symbol-manage]].

## Cómo leerla

**El indicador superior izquierdo.** Con **Bar values** habilitado (lo está por defecto), la esquina superior izquierda muestra **O: H: L: C:** más tres campos de volumen para la barra sobre la que pasa el cursor (o la última barra cuando el cursor está fuera del gráfico): **%V** es la variación porcentual respecto al cierre del día anterior; **ΣV** y **ΔV** son las cifras de volumen de la barra [CONFIRM: exact definitions of ΣV and ΔV — likely bar total volume and bar delta]. Los campos no muestran valores mientras el cursor no está sobre una barra: eso es normal.

**La insignia de estado.** Mientras un gráfico se construye, la barra principal muestra una insignia junto al icono de ayuda: **LDT** significa que se están cargando datos ya presentes en disco; **DWT** significa que se están descargando datos del servidor de la fuente. Un gráfico atascado en **DWT** normalmente apunta a la conexión, no al gráfico.

**El banner de datos con retraso.** Un banner naranja como "Connect dxFeed - 15m to see delayed data" significa que el gráfico no tiene conexión en vivo y está usando la fuente con retraso; consulte [[free-delayed-data-feed]].

[SCREENSHOT: Esquina superior izquierda de un gráfico ampliada, mostrando el indicador OHLC con valores reales (O H L C, %V, ΣV, ΔV) mientras se pasa el cursor sobre una vela | dc-es-chart-window-03.png]

## Referencia de configuración

### Controles de la barra de título

| Control | Qué hace |
|---|---|
| Menú desplegable del símbolo (p. ej. **NQ-202609**) | Abre **Select Instrument** para cambiar el símbolo del gráfico sin salir de él. |
| Menú desplegable del rango de datos (p. ej. **10D - BT**) | Cuánta historia cargar: 5–60 días en datos de tick, 3 meses–10 años en datos de minuto, o **Custom**. **BT** = Based on Tick (basado en tick), **BM** = Based on Minute (basado en minuto). |
| Menú desplegable del marco temporal (p. ej. **5 Minute**) | El tipo y tamaño de barra: segundos/minutos/diario hasta barras Renko, Range, Volume, Trade, Point & Figure y Delta. Cada fila tiene un engranaje que abre un editor de presets (días a cargar, base tick/minuto, parámetro de barra). Consulte [[price-chart-settings]] para saber qué significa cada tipo de barra. |
| Icono de abrir en nueva ventana | Separa la pestaña de gráfico activa en su propia ventana independiente. |
| **+** verde | Añade una nueva pestaña de gráfico (primero abre **Select Instrument**). |
| Icono de enlace (cuadrado, a la izquierda de minimizar) | Menú de vinculación de gráficos: **None link**, **Link 1–8** (grupos de color) y **$ Link Trading Symbol**. Los gráficos que comparten un color siguen los cambios de símbolo de los demás: solo el símbolo, no el marco temporal. Consulte [[link-windows]]. |

Pruebe los grupos de enlace en vivo a continuación: ponga ambos minigráficos en el mismo color, cambie el símbolo en uno y observe cómo el otro lo sigue.

[WIDGET: link-groups-demo]

### Fila de iconos superior izquierda

| Icono | Qué hace |
|---|---|
| **≡** | Muestra/oculta la tira de la barra de herramientas de dibujo izquierda. |
| Icono de dos velas | Menú desplegable de estilo de barra: Candlestick / Line / OHLC, modificadores Equi-Volume y Delta-Volume, ETH Session, Auction filter, Bar values, Countdown timer y la entrada **Price Settings**. Referencia completa: [[chart-display-options]]. |
| Icono de gráfico de barras | Gestor de indicadores por gráfico (ver abajo). |
| Engranaje | Dos opciones: **Duplicate chart** (abre una copia exacta — mismas configuraciones e indicadores — como un nuevo gráfico) y **Always on top** (la ventana se mantiene por encima de cualquier otra aplicación hasta deshabilitarla). |
| **$** | Conmutador **Trading Enabled** (Ctrl Alt T). Se pone verde cuando está armado. Deshabilitarlo también oculta el panel de trading. Consulte [[trading-from-chart]]. |
| Cámara | Toma una captura de pantalla del gráfico. El comportamiento sigue **Options → Settings → General → Various → Screenshot Mode**: **Auto Save** (guarda en la carpeta configurada), **Save Dialog** (pregunta dónde), **Copy** (al portapapeles) o **Copy and Auto Save**. |

[SCREENSHOT: Los seis iconos superiores izquierdos del gráfico ampliados, en orden: hamburguesa, dos velas, gráfico de barras, engranaje, signo de dólar (estado verde/armado), cámara | dc-es-chart-window-04.png]

### Gestión de indicadores

Haga clic en el icono de gráfico de barras para abrir el panel **Indicators**. Cada fila de indicador activo tiene un icono de papelera (eliminar), un icono de ojo (ocultar/mostrar) y un icono de engranaje (configuración). Los indicadores se agrupan por **Chart Area** (área de gráfico), la banda horizontal en la que se dibujan; redimensione un área arrastrando la línea divisoria entre áreas.

Haga clic en el botón **Indicators** de ese panel para abrir la **Indicator List** completa: pestañas de categoría a la izquierda (**All, Volume, Statistics, Oscillator, Overlay, Utility, Third**), un cuadro de búsqueda, **+** para añadir y **−** para eliminar, un engranaje para la configuración y un asa de arrastre de tres líneas para reordenar. Consulte [[indicator-layout]] para organizar indicadores entre áreas de gráfico.

[SCREENSHOT: La ventana Indicator List con las pestañas de categoría a la izquierda, el cuadro de búsqueda en la parte superior, la lista desplazable de indicadores con iconos + y el panel derecho mostrando los indicadores activos | dc-es-chart-window-05.png]

### Pestañas de gráfico (vista compacta y modo grupo)

DeepCharts ofrece dos formas de gestionar varios gráficos, que se cambian en **Options → Settings → General → Chart → Chart tabs compact mode**:

- **Vista compacta** (modo compacto activado): los gráficos aparecen como pestañas en la parte superior de la ventana. Haga clic en el **+** verde para añadir una pestaña; la pestaña activa se resalta en verde. Con dos o más pestañas, los tres menús desplegables de la barra de título son reemplazados por la tira de pestañas: haga clic en la pestaña activa para abrir un panel emergente con los menús de símbolo, rango de datos y marco temporal más **Detach** y **Close**.
- **Modo grupo** (modo compacto desactivado): todos los gráficos abiertos se listan de forma centralizada en un panel de grupo. Haga clic en **Add Chart** para añadir uno, en el icono de flecha para sacar un gráfico a una ventana dedicada, o en el icono **X** para eliminarlo.

Cada pestaña conserva su propio panel de trading y su estado de DOM Trading. Al cerrar una ventana de gráfico separada se pregunta "Are you sure to close the window?" antes de cerrar.

[SCREENSHOT: Una ventana de gráfico en modo de pestañas compactas con dos pestañas ("NQ 5 m" activa en verde, la segunda pestaña inactiva) y el panel emergente de la pestaña abierto mostrando los tres menús desplegables más los botones Detach y Close | dc-es-chart-window-06.png]

### Barra inferior

| Control | Qué hace |
|---|---|
| Botón **Templates** | Atajo de clic derecho → **Template → Load**: abre el selector de archivos Local/Cloud/Shared. Consulte [[templates-workspaces]]. |
| Botones de plantilla rápida (**OF-VP**, **OF-B/A**, **D-VP**, **D-DP**, **D-VL**, **W-VP**, **W-DP**, **C-VP**) | Presets de indicadores integrados de un solo clic (no editables por el usuario). Desglose completo: [[quick-chart-templates]]. |
| Botón **DOM Trading** | Cambia el gráfico a la escalera de trading con clics sobre el gráfico. Consulte [[dom-trading-chart]]. |
| Conmutador **Trading panel** | Muestra/oculta el panel de entrada de órdenes en el lado derecho del gráfico. |

### Navegación

- **Eje X:** desplace la rueda del ratón, o haga clic izquierdo en la línea de tiempo y arrastre. Haga clic derecho en el eje X para habilitar el desplazamiento automático de modo que el gráfico avance con cada nueva barra. Vuelva a la barra actual con un doble clic o con el botón de reproducción en la parte inferior derecha.
- **Eje Y:** haga clic derecho en el eje de precios para ver sus opciones, incluido el desplazamiento automático (el eje sigue al precio cuando se sale de la vista) y el modo de movimiento: **Automatic Detection**, **Move Axis Range** (arrastrar con clic izquierdo mueve el gráfico verticalmente) o **Resize Axis Range** (arrastrar con clic izquierdo reescala los precios). El modo de movimiento predeterminado se establece en **Options → Settings → General → Chart**.

Si el zoom deja de responder, consulte [[chart-zoom]].

### Menú de clic derecho

| Elemento (atajo) | Qué hace |
|---|---|
| **Pointer** (Alt P) / **Crosshair** (Alt C) / **Hand** (Alt H) | Modos de cursor: seleccionar, cruceta, arrastrar para desplazar. |
| **Global Crosshair** (Alt G) | Cruceta sincronizada entre gráficos del mismo instrumento. |
| **Zoom Range** (Alt R) / **Zoom Out** | Haga clic en los puntos inicial y final para hacer zoom en una sección; Zoom Out lo restablece. |
| **Crosshair Window** | Lista todo lo activo en el gráfico con su ID de gráfico (la serie de precios es siempre el ID de gráfico 1), los ID y sub-ID de cada indicador y las estadísticas del indicador de valores. Útil cuando un indicador pide el ID de gráfico de otro indicador. |
| **Drawing Objects ▸** / **Drawing Utilities ▸** / **Drawing Tool From Other Chart** | Las herramientas de anotación; referencia completa: [[drawing-tools]]. |
| **Trading Enabled** (Ctrl Alt T) / **Show Trading Panel** (Ctrl Alt P) | Los mismos conmutadores que el icono **$** y el interruptor de la barra inferior. |
| **Show Historical Orders** (Ctrl Alt H) | Marca sus entradas y salidas pasadas en el gráfico con flechas. |
| **Clear Historical Account Report** | Elimina el historial de trading de la cuenta seleccionada en el panel de trading. |
| **Trading Settings** | Opciones de gráfico relacionadas con el trading [CONFIRM: contents of the Trading Settings dialog]. |
| **Autotrading ▸** | **Execute Backtest / Reset Backtest / Show Report / Save Report**: el motor de backtesting usado con Deep Pattern Builder. Consulte [[deep-pattern-builder]]. |
| **Rebuild Chart** (Ctrl R) | Actualiza y recarga el gráfico: un primer paso rápido e inofensivo cuando la visualización parece defectuosa. |
| **Template ▸** | **Load** / **Save As** la plantilla del gráfico. Consulte [[templates-workspaces]]. |
| **Indicators** (Ctrl I) | Abre el gestor de indicadores. |
| **Properties** (Ctrl P) | Diálogo de apariencia por gráfico (abajo). |

> **Advertencia:** **Clear Historical Account Report** elimina de forma permanente el historial del Strategy Report de esa cuenta. Úselo solo si está seguro de que ya no necesita los datos.

### Propiedades del gráfico (Ctrl P)

Configuraciones de apariencia por gráfico, agrupadas como en el diálogo:

- **CHART AREA** — **Back Color**, **Border Color**, **Text Size** (predeterminado 12), **Text Color**, color de **Crosshair**, **Series Marker Margin (px)** (predeterminado 6).
- **GRID** — **Enable** (desactivado por defecto), **Line Color**, **Line Style** (predeterminado Dot).
- **USER ANNOTATIONS** — **Anchor Points - Enable Static Color** y la muestra de color estático para los puntos de anclaje de los dibujos.
- **EXTRA** — **Name**: da nombre a la ventana de gráfico.

## Consejos y errores comunes

- **Nada se guarda automáticamente.** DeepCharts no guarda automáticamente los diseños de gráfico. Guarde una plantilla (un gráfico) o un espacio de trabajo (pantalla completa) antes de cerrar, o el próximo arranque comenzará desde los valores predeterminados; consulte [[templates-workspaces]].
- **Duplique en lugar de reconstruir.** Icono de engranaje → **Duplicate chart** le da una copia exacta, indicadores incluidos: más rápido que configurar un segundo gráfico a mano.
- **¿Selector de instrumentos vacío?** No hay bolsas suscritas en **Options → Symbol Manage**: el selector solo muestra las bolsas suscritas.
- **¿El gráfico se ve defectuoso?** Primero clic derecho → **Rebuild Chart** (Ctrl R). Es rápido e inofensivo.
- **¿Gráficos desincronizados con los de un colega?** Revise el conmutador de sesión ETH/RTH y el tipo de barra antes de comparar; consulte [[chart-display-options]].
- **Mantenga un gráfico visible sobre otras aplicaciones** con icono de engranaje → **Always on top**: útil con un solo monitor. Para diseños con varios monitores, consulte [[multi-monitor-windows]].

## Artículos relacionados

- [[first-chart]]
- [[price-chart-settings]]
- [[chart-display-options]]
- [[drawing-tools]]
- [[templates-workspaces]]
- [[link-windows]]