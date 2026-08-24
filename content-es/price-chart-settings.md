---
title: "Configuración del gráfico de precios"
slug: "price-chart-settings"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "10 min read"
description: "Referencia del diálogo Price Settings: parámetros de datos, todos los tipos de barra, modos de velas de volumen/delta, línea de precio, cuenta atrás, sesiones y estilo de los subgráficos."
keywords: ["configuración de precio", "días a cargar", "tipo de parámetro", "barras de rango", "renko", "vol bars", "punto y figura", "barras delta", "contrato continuo", "excluir subasta", "agrupamiento de ticks", "volumen basado en ancho", "color basado en delta", "sesión de tiempo personalizada"]
source_hash: "72d46d62ee6f48ee"
ai_translated: true
source_hash: "72d46d62ee6f48ee"
---
El diálogo **Price Settings** (configuración de precio) controla cómo se construye y se dibuja la propia serie de precios: cuánta historia se carga, qué tipo de barras se forman, si las velas codifican volumen y delta, y los elementos adicionales superpuestos al gráfico, como la línea de precio, la cuenta atrás y los marcadores de sesión.

Este artículo cubre todo el diálogo, sección por sección, en el orden en que aparece en la aplicación. Si busca los conmutadores rápidos de visualización (estilo de barra, sesión ETH, cuenta atrás activada/desactivada), estos están en el menú desplegable de dos velas y se cubren en [[chart-display-options]]: varios de ellos son atajos a configuraciones descritas aquí.

## Qué es

Price Settings es el diálogo de configuración de la serie base **Price**: las velas en sí. Responde a preguntas como "cómo cargo más historia", "cómo cambio a barras Renko o Range", "por qué mis velas tienen anchos o colores distintos" y "cómo restrinjo el gráfico a una sesión personalizada".

El gráfico visualiza las transacciones históricas de compradores y vendedores basadas en el libro de órdenes, y este diálogo decide cómo se agrupan esas transacciones en barras y cómo se renderizan.

## Cuándo usarlo

- Cambiar cuántos días de datos carga el gráfico, o alternar entre historia basada en ticks y basada en minutos.
- Cambiar el tipo de barra: barras de tiempo, Range, Vol Bars, Volume, Trades, Renko, Point & Figure, Delta.
- Habilitar velas con ancho por volumen o coloreadas por delta (y afinar cómo se colorean).
- Configurar la línea del último precio, la cuenta atrás del cierre de barra, la variación % diaria, la línea de inicio del día o una ventana de sesión personalizada.
- Controlar el empalme de rollover de futuros (**Continuous Contract**) y el filtrado de ticks.

## Inicio rápido

1. Haga clic en el icono de dos velas en la parte superior izquierda del gráfico y elija **⚙ Price Settings** al final del menú desplegable. (Alternativa: icono de gráfico de barras → engranaje en la fila **Price**.)
2. El diálogo se abre con dos pestañas: **Parameters** y **Subgraphs**. La columna izquierda de **Parameters** lista las secciones: DATA, VOLUME/DELTA, PRICE LINE, COUNTDOWN, % VAR, LINE START DAY, CUSTOM TIME SESSION, DEEP RANGE.
3. Realice un cambio, por ejemplo, establezca **Days To Load** en 30.
4. Haga clic en **Apply** para ver el resultado en el gráfico, y luego en **Save**.

[SCREENSHOT: El diálogo Price Settings abierto en la pestaña Parameters, mostrando la lista de secciones de la izquierda (DATA, VOLUME/DELTA, PRICE LINE, COUNTDOWN, % VAR, LINE START DAY, CUSTOM TIME SESSION, DEEP RANGE) y los campos de GENERAL con Days To Load=10, Param Type=Minute, Param 1=5 | dc-es-price-chart-settings-01.png]

> **Nota:** Algunos cambios (por ejemplo, activar **Exclude Auction**) reconstruyen todo el gráfico: el indicador **Building chart** mientras se recarga es normal.

## Cómo leerlo

Los parámetros de datos reflejan la barra de título del gráfico: **Days To Load** es el mismo valor que el menú desplegable de rango de datos (por ejemplo **10D - BT**, donde BT = Based on Tick, basado en tick, y BM = Based on Minute, basado en minuto), y **Param Type** más **Param 1** son lo mismo que el menú desplegable de marco temporal (Param Type **Minute** con Param 1 **5** es un gráfico de 5 minutos). Puede cambiarlos en cualquiera de los dos lugares: el diálogo y la barra de título se mantienen sincronizados.

## Referencia de configuración

### Pestaña Parameters — DATA (GENERAL)

| Configuración | Qué hace |
|---|---|
| **Days To Load** | Número de días de historia que se cargan en el gráfico. Refleja el menú desplegable de rango de datos de la barra de título. |
| **Param Type** | El tipo de barra: consulte la tabla de tipos de barra más abajo. |
| **Param 1** | El parámetro de barra para el tipo seleccionado (p. ej., 5 para un gráfico de 5 minutos, ticks para Range). |
| **Param 2** | Segundo parámetro, usado por los tipos de barra que necesitan dos valores: Vol Bars y Point & Figure. [CONFIRM: whether Param 2 has any effect on other bar types] |
| **Based on minute data** | Desactivado por defecto: las barras se construyen a partir de datos de tick para máxima precisión. Activado: las barras se construyen a partir de datos de minuto. Los rangos de historia largos (3 meses o más en el menú de la barra de título) usan datos de minuto. |
| **Continuous Contract** | Cómo se empalma la historia de futuros entre meses de contrato: **None**, **Date**, **Volume**, **Adjusted Date**, **Adjusted Volume**. Adjusted Date hace el rollover según la expiración temporal; los modos Adjusted eliminan el hueco artificial de precio en el rollover. Consulte [[symbol-rollover]]. |
| **Exclude Auction (Tick Data)** | Desactivado por defecto. Elimina los datos de subasta de apertura/cierre de los cálculos del gráfico; el comportamiento exacto del filtrado puede variar [CONFIRM: precisely which auction prints are excluded]. Es la misma configuración que el conmutador **Auction filter** del menú de dos velas; al activarlo se reconstruye el gráfico. |
| **Filter Bad Ticks** | Activado por defecto. Filtra los ticks erróneos de la serie [CONFIRM: what qualifies as a bad tick and when to disable]. |
| **Trade Type** | **All** por defecto. [CONFIRM: other Trade Type options and what each restricts] |
| **RTH - only** | Desactivado por defecto. Restringe el gráfico al horario regular de negociación (Regular Trading Hours): el inverso del conmutador **ETH Session** del menú de dos velas (misma configuración, dos lugares). |
| **Bid/Ask type** | **Bid ask** por defecto. [CONFIRM: other options and their effect on the chart] |

#### Tipos de barra (Param Type)

| Tipo | Cómo se forman las barras |
|---|---|
| **Second / Minute / Daily / Weekly / Monthly** | Cada barra cubre un período de tiempo fijo. |
| **Range** | No depende del tiempo: Param 1 define el rango en ticks de cada barra individual (p. ej., un rango de 8 ticks dispara una nueva barra). |
| **Vol Bars** | Dos parámetros: **Target**, el umbral mínimo de ticks que debe alcanzar la barra, y **Reverse**, los ticks en dirección opuesta necesarios para iniciar una nueva barra. |
| **Volume** | Cada barra se cierra cuando se alcanza un umbral máximo de volumen: no se basa en tiempo ni en precio. |
| **Trades** | Se basa en el número máximo de transacciones por barra, en lugar de contratos negociados. |
| **Renko** | Como Range, pero el movimiento se mide desde el cuerpo de la vela anterior (p. ej., nueva barra cuando el precio se mueve 10 ticks desde el cuerpo anterior). |
| **Point Figure** | Dos parámetros: tamaño de caja y cantidad de reversión. |
| **Delta** | Cada barra se forma según el delta, en valor absoluto: la diferencia entre compras y ventas agresivas. Consulte [[orderflow-101]]. |

> **Consejo:** En los tipos de barra no temporales, las funciones ancladas al tiempo (marcadores de sesión, indicadores basados en tiempo) se comportan de forma diferente, y los recuentos de barras ya no corresponden al tiempo de reloj. Téngalo en cuenta al comparar gráficos.

### Pestaña Parameters — DATA (TICK GROUPING y AGGREGATED TRADES)

| Configuración | Qué hace |
|---|---|
| **Tick Grouping — Mode** | **Automatic** por defecto; un campo **Fixed value** (predeterminado 1) se usa con el modo fijo. Agrupa los ticks entrantes antes de graficarlos [CONFIRM: exact tick-grouping behavior and when a fixed value helps]. |
| **Aggregated Trades — Price Mode** | **Last** por defecto. [CONFIRM: available Price Mode options and their effect on aggregated trade pricing] |

### Pestaña Parameters — VOLUME/DELTA

Estas configuraciones alimentan los modos de velas con ancho por volumen y coloreadas por delta. Los conmutadores **Equi-Volume Bars** y **Delta-Volume Bars** del menú de dos velas son atajos a los dos interruptores maestros de aquí.

| Configuración | Qué hace |
|---|---|
| **Width based volume** | El ancho de la vela escala con el volumen de la barra en relación con las demás velas: más ancha = más volumen. Le permite ver de un vistazo si un movimiento tuvo volumen real detrás o el libro estaba fino. |
| **% max width based volume** | Ancho máximo de vela usado por el escalado (100 según la configuración del diálogo). |
| **Color based on delta** | El color de la vela varía con el delta de la barra: baja intensidad = delta bajo, alta intensidad = delta alto. |
| **Border color mode** | **Fixed delta**, **Fading delta** o **Bar direction**: la estrategia de coloreado del borde [CONFIRM: per-option behavior]. |
| **Delta input** | **Volume**, **Trades** o **Delta volume**: qué alimenta el coloreado por delta [CONFIRM: per-option behavior]. |
| **Color mode** | **Fixed** o **Fading color** [CONFIRM: exact visual difference]. |
| **Delta fading mode** | **Delta volume** o **Delta percentual** [CONFIRM: exact difference]. |
| **Std dev for coloring** | 2.00 según la configuración [CONFIRM: how the standard deviation scales the coloring]. |

[SCREENSHOT: Un gráfico con Width based volume y Color based on delta habilitados a la vez, velas de anchos visiblemente distintos e intensidades de color verde/morado, junto a la sección VOLUME/DELTA del diálogo Price Settings | dc-es-price-chart-settings-02.png]

### Pestaña Parameters — PRICE LINE

La línea discontinua que marca el precio actual.

| Configuración | Qué hace |
|---|---|
| **Enable** | Muestra la línea del precio actual. Activada por defecto. |
| **Line Color / Line Style / Line Width** | Estilo. Estilos: **Solid, Dash, Dot, Dash dot, Dash dot dot** (predeterminado Dash, grosor 1). |
| **Extend line to left** | Desactivado por defecto. Al activarlo, la línea se extiende por todo el gráfico en lugar de solo a la derecha de la última barra. |

### Pestaña Parameters — COUNTDOWN

El recuadro que cuenta atrás hasta el cierre de la barra actual (un gráfico de 5 minutos cuenta atrás 5 minutos por vela).

| Configuración | Qué hace |
|---|---|
| **Enable** | Muestra el recuadro de la cuenta atrás. También se activa desde el menú de dos velas (**Countdown timer**). |
| **Mode** | **Axis**, adosado a la escala de precios, o **Floating**, un recuadro libre que puede arrastrar a cualquier parte del gráfico. |
| **Text Size / Text Color / BackColor** | Estilo (tamaño de texto 18 según la configuración). |

> **Nota:** Con una fuente retrasada o inactiva la cuenta atrás puede quedarse en 00:00: la fuente no está entregando ticks en vivo; no hay nada roto.

### Pestaña Parameters — % VAR

Muestra la variación porcentual respecto al precio de cierre de la sesión anterior (el mismo % de cambio diario que reporta el campo **%V** del panel de lectura).

| Configuración | Qué hace |
|---|---|
| **Enable** | Desactivado por defecto. Muestra el elemento de variación % (desplazable). |
| **Text Size / Pos. Text Color / Neg. Text Color / BackColor** | Estilo: cambio positivo en el color positivo (verde por defecto), negativo en el color negativo (rojo por defecto). |

### Pestaña Parameters — LINE START DAY

| Configuración | Qué hace |
|---|---|
| **Enable** | Desactivado por defecto. Dibuja una línea vertical al inicio de cada sesión/día, trazada a la hora de la bolsa: en NQ eso es a las 18:00, hora de Nueva York; con otra zona horaria del gráfico sigue cayendo donde las 18:00 de NY se convierten. |
| **Line Color / Line Style / Line Width** | Estilo (los mismos cinco estilos de línea que la línea de precio). |

### Pestaña Parameters — CUSTOM TIME SESSION (EXCHANGE TIME ZONE)

Restringe el gráfico a una ventana de sesión definida por el usuario: como el interruptor ETH/RTH, pero con sus propios horarios. Ejemplo: **Ini Time** 09:30:00 y **End Time** 11:30:00 muestra solo las dos primeras horas tras la apertura. Las horas están en la zona horaria de la bolsa.

| Configuración | Qué hace |
|---|---|
| **Enable** | Desactivado por defecto. |
| **Ini Time / End Time** | Límites de inicio y fin de la sesión. |
| **Use ini time as base for minute tf.** | [CONFIRM: what this toggle changes about minute-bar anchoring] |

Consulte [[understanding-market-structure-sessions]] para entender por qué importan los límites de sesión.

### Pestaña Parameters — DEEP RANGE

Filtros de barra para la función Deep Range [CONFIRM: purpose and behavior of the DEEP RANGE section]. Campos tal como aparecen: **TIME/VOLUME** — **Mode** (**Disabled**, **Time and volume**, **Time or volume**; predeterminado Disabled), **Time-Minimum(s)**, **Time-Maximum(s)**, **Volume-Minimum**, **Volume-Maximum**; **WICK VOLUME** — **Custom mode** (predeterminado None), **Ticks** (predeterminado 1), **Minimum volume** (predeterminado 1.00).

### Pestaña Subgraphs

Controla cómo se dibuja y etiqueta la propia serie de precios en el eje.

| Configuración | Qué hace |
|---|---|
| **Bull/Bear Border and Fill colors** | Los colores de las velas para barras alcistas y bajistas. |
| **Subgraph Style** | **Line**, **Candlestick** (predeterminado), **OHLC**, **Hidden**, **CandleBody** [CONFIRM: how CandleBody differs from Candlestick]. |
| **Auto Color** | **None** (predeterminado), **Slope**, **+/-**: reglas de coloreado automático [CONFIRM: exact behavior of Slope and +/- modes]. |
| **Line Style / Line Width** | **Solid** (predeterminado) o **Dash**, grosor 1: se usa cuando el estilo es Line. |
| **Short Name** | Texto de la etiqueta de la serie. |
| **Name Label / Value Label** | Muestra el nombre de la serie / el valor actual en el eje (predeterminados: nombre desactivado, valor activado). |
| **Name Background / Value Background** | Relleno de fondo tras esas etiquetas (predeterminados: nombre desactivado, valor activado). |
| **Chart color for marker** | Desactivado por defecto [CONFIRM: exact effect]. |
| **Include on Auto Center** | Activado por defecto: si esta serie se tiene en cuenta cuando el gráfico autocentra el rango de precios visible [CONFIRM: exact Auto Center behavior]. |

[SCREENSHOT: El diálogo Price Settings en la pestaña Subgraphs mostrando la fila Price seleccionada, las muestras de color Bull/Bear y el menú Subgraph Style abierto con Line / Candlestick / OHLC / Hidden / CandleBody visibles | dc-es-price-chart-settings-03.png]

### Pie del diálogo

- Selector de **Chart area** (arriba): en qué área del gráfico se renderiza la serie.
- **Indicator Template**: guarde o cargue esta configuración para reutilizarla en otros gráficos.
- Conmutador **Protected** [CONFIRM: what the Protected toggle protects].
- **Apply** / **Save**: Apply muestra los cambios en el gráfico; Save los almacena [CONFIRM: exact difference between Apply and Save].

## Consejos y errores comunes

- **Las reconstrucciones del gráfico tras un cambio son normales.** Las configuraciones a nivel de datos (Exclude Auction, tipo de barra, días a cargar) activan el indicador **Building chart**: espere a que termine.
- **¿Gráfico distinto al de un colega?** Compare el estado de **RTH - only** / sesión ETH, el tipo de barra y **Days To Load** antes que nada.
- **El precio salta en el rollover de contrato en historias largas**: cambie **Continuous Contract** a un modo Adjusted para eliminar el hueco artificial.
- **Las velas tienen de repente anchos raros o colores desvaídos**: **Width based volume** o **Color based on delta** está activado (posiblemente desde el menú de dos velas como Equi-Volume/Delta-Volume Bars).
- **¿Carga años de historia?** Los rangos de 3 meses o más se basan en minutos (BM). El detalle a nivel de tick solo está disponible en los rangos más cortos basados en tick.
- Las configuraciones cambiadas aquí afectan solo a este gráfico. Para reutilizar una configuración, guárdela mediante **Indicator Template** o guarde el gráfico completo como plantilla; consulte [[templates-workspaces]].

## Artículos relacionados

- [[chart-window]]
- [[chart-display-options]]
- [[understanding-market-structure-sessions]]
- [[symbol-rollover]]
- [[orderflow-101]]
- [[different-types-of-input]]