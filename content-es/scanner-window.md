---
title: "Escáner de mercado"
slug: "scanner-window"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "8 min read"
description: "Observe varios símbolos en una sola tabla con apertura, máximo, mínimo, cierre y cambio porcentual, administre la lista de símbolos escaneados y filtre la tabla para ver los mayores movimientos."
keywords: ["escáner", "escáner de mercado", "scanner", "lista de seguimiento", "watchlist", "símbolos del escáner", "lista de símbolos", "rank top", "rank worst", "tabla OHLC", "tabla de cambio porcentual", "panel de cotizaciones"]
source_hash: "3748d8e93a218fa9"
ai_translated: true
source_hash: "3748d8e93a218fa9"
---
El Escáner de mercado es una tabla de cotizaciones compacta: una fila por símbolo, con **Open**, **High**, **Low**, **Close** y una celda de cambio porcentual que se actualiza desde su fuente de datos en vivo. Le ofrece una visión general del mercado sin abrir un gráfico separado para cada instrumento que sigue.

Esta referencia cubre cómo abrir el Escáner, administrar su lista de símbolos, trabajar con resoluciones, el filtro de clasificación y cada configuración de sus diálogos.

## Qué es

El Escáner responde a la pregunta "¿cómo están todos mis mercados ahora mismo?" en una sola ventana. Cada símbolo que añade se convierte en una fila que muestra el **Symbol**, **Open**, **High**, **Low**, **Close** y **%** (cambio porcentual) de ese instrumento para la resolución configurada. La ventana se puede redimensionar libremente, por lo que funciona igual de bien como una franja estrecha en un monitor lateral o como un panel de cotizaciones a pantalla completa.

El Escáner lee de la misma transmisión en vivo que sus gráficos. Si la fuente de datos se desconecta, la tabla deja de actualizarse: consulte las notas de solución de problemas más abajo.

[SCREENSHOT: Ventana del Escáner con dos filas (ES y NQ) mostrando las columnas Symbol, Open, High, Low, Close y %, con las celdas de cambio porcentual resaltadas visibles | dc-es-scanner-window-01.png]

## Cuándo usarlo

- Opera un solo instrumento pero quiere tener visible de un vistazo el resto de su lista de seguimiento.
- Quiere una visión general rápida de la sesión (OHLC y cambio porcentual) en varios mercados sin cargar gráficos completos.
- Quiere detectar los movimientos más fuertes y más débiles de una lista usando el filtro de clasificación.
- Quiere una franja de cotizaciones ligera, siempre visible, junto a su diseño principal de gráficos.

## Inicio rápido

1. En la barra superior de la aplicación, elija **New → Scanner**.
2. Se abrirá la ventana **Select Instrument**: el mismo selector de instrumentos que usan los gráficos, con una barra lateral de bolsas, un cuadro de filtrado por escritura y una tabla con **Symbol**, **Description** y **Exchange**. Elija su primer símbolo y pulse **Select**.

[SCREENSHOT: Selector Select Instrument abierto desde New → Scanner, con la barra lateral de bolsas a la izquierda, el cuadro de filtrado por escritura y una fila de símbolo resaltada antes de pulsar Select | dc-es-scanner-window-02.png]

3. La ventana del Escáner se abrirá con una fila para ese símbolo. Redimensione la ventana libremente: las columnas se estiran con ella.
4. Para añadir más símbolos, haga clic en el **icono de engranaje** de la barra de título y elija **Symbol List**, luego pulse **Add** (consulte "Administrar la lista de símbolos" más abajo).
5. La resolución predeterminada es diaria ("1 Daily"). Si eso es lo que quiere, ya ha terminado: la tabla se actualiza en vivo desde su fuente de datos.

> **Nota:** El selector Select Instrument solo lista las bolsas que tiene suscritas en Symbol Manage. Si el selector aparece vacío, configure primero sus suscripciones de bolsas: consulte [[symbol-manage]].

## Anatomía de la ventana

La barra de título contiene, de izquierda a derecha:

| Elemento | Qué hace |
|---|---|
| Logotipo de DeepCharts | Identidad de la ventana |
| **Icono de embudo** | Muestra u oculta la franja del filtro de clasificación sobre la tabla |
| **Icono de engranaje** | Abre el menú de configuración del Escáner (resoluciones, lista de símbolos, gráficos, plantillas) |
| Icono de enlace (cuadrado) | Control de enlace de ventana, igual que el control de enlace de otras ventanas de DeepCharts; consulte [[link-windows]] (el comportamiento exacto en el Escáner puede variar) |
| Minimizar / maximizar / cerrar | Controles estándar de ventana |

Debajo de la barra de título se encuentra la tabla en sí: **Symbol | Open | High | Low | Close | %**.

[SCREENSHOT: Barra de título del Escáner ampliada con los iconos de embudo, engranaje y enlace visibles y etiquetados | dc-es-scanner-window-03.png]

## Cómo leerlo

Cada fila es un símbolo escaneado en la resolución configurada:

- **Open / High / Low / Close**: los valores OHLC de la barra actual de la resolución configurada (para la resolución predeterminada "1 Daily", el día actual).
- **%**: el cambio porcentual, mostrado en una celda resaltada con color. [CONFIRM: what the % column is measured against (previous close vs session open) and the exact rule for when the cell shows green vs red]

Los símbolos recién añadidos aparecen en la parte superior de la tabla.

> **Nota:** El Escáner es una ventana en vivo: depende de una conexión de fuente de datos activa. Vigile el punto indicador de la fuente de datos en la barra superior de la aplicación: verde significa conectado, rojo significa desconectado.

## Administrar la lista de símbolos

El Escáner comienza solo con el símbolo que eligió al crearlo. Todo lo demás se administra en una ventana dedicada:

1. Haga clic en el **icono de engranaje** y elija **Symbol List**.
2. Se abrirá la ventana **Scanner Symbols** con las columnas **Symbol**, **Description** y **Exchange**.
3. Pulse el botón verde **Add** para abrir el selector **Select Instrument** y añadir otro símbolo. La tabla del Escáner se actualiza inmediatamente, sin necesidad de reiniciar.
4. Seleccione una fila y pulse el botón rojo **Remove** para quitar un símbolo del escaneo.

[SCREENSHOT: Ventana de administración Scanner Symbols listando las filas NQ y ES con los botones rojo Remove y verde Add visibles | dc-es-scanner-window-04.png]

Los símbolos de índices y de amplitud (los instrumentos con prefijo $ en el selector) también se pueden escanear, siempre que su grupo de bolsa esté suscrito en [[symbol-manage]].

## Resoluciones

El Escáner admite resoluciones configurables, administradas desde **icono de engranaje → Resolutions**. El submenú lista la resolución actual, por ejemplo **1 Daily**, más una entrada **Add Resolution**.

Al hacer clic en una entrada de resolución se abre el diálogo **Resolution Settings**. El nombre de la resolución se construye a partir de **Param 1** más **Param Type**: Param 1 = 1 con Param Type = Daily se lee "1 Daily"; Param 1 = 5 con Param Type = Minute se lee "5 Minute".

[SCREENSHOT: Diálogo Resolution Settings abierto desde el menú de engranaje del Escáner, mostrando Days To Load, Param 1, Param 2, el menú desplegable Param Type, el interruptor Based on minute data, el menú desplegable Continuos contract, y los interruptores Exclude Auction(Tick Data), Filter Bad Ticks y Extended market hour | dc-es-scanner-window-05.png]

Después de pulsar **OK**, la tabla se vacía y se recarga con la nueva resolución: es normal ver brevemente un indicador de carga, de la misma forma que un gráfico se reconstruye tras un cambio de marco temporal.

**Add Resolution** crea una resolución adicional para el Escáner. [CONFIRM: how the table presents multiple resolutions at once — extra column sets per resolution, or another layout]

## Filtrar los mayores movimientos (filtro de clasificación)

Haga clic en el **icono de embudo** de la barra de título para mostrar una franja de filtro sobre la tabla con dos controles:

- **Rank top**: casilla de verificación más un selector numérico (predeterminado 0)
- **Rank worst**: casilla de verificación más un selector numérico (predeterminado 0)

Según sus etiquetas, estos controles parecen limitar la tabla a los N mejores y N peores movimientos por cambio porcentual, pero el comportamiento exacto de la clasificación puede variar. [CONFIRM: exact Rank top / Rank worst semantics, and whether 0 means the filter is disabled]

Haga clic de nuevo en el icono de embudo para ocultar la franja.

[SCREENSHOT: Ventana del Escáner con la franja de filtro de embudo visible sobre la tabla, mostrando las casillas Rank top y Rank worst con sus selectores numéricos | dc-es-scanner-window-06.png]

## Referencia de configuración

Toda la configuración del Escáner se encuentra tras el **icono de engranaje** de la barra de título.

### Menú de engranaje

| Entrada | Qué hace |
|---|---|
| **Resolutions** ▸ | Lista la(s) resolución(es) configurada(s) y **Add Resolution**; al hacer clic en una resolución se abre Resolution Settings |
| **Always on Top** | Mantiene el Escáner por encima de otras ventanas, útil para una franja de cotizaciones compacta |
| **Symbol List** | Abre la ventana de administración Scanner Symbols (añadir o quitar símbolos escaneados) |
| **Graphics Settings** | Apariencia de la tabla: colores de celdas y encabezados y tamaños de texto |
| **Template** ▸ | Guardar o cargar una configuración con nombre del Escáner, el mismo patrón de plantillas usado en todas las ventanas de DeepCharts; consulte [[templates-workspaces]] |

[SCREENSHOT: Menú de engranaje del Escáner abierto mostrando las entradas Resolutions, Always on Top, Symbol List, Graphics Settings y Template | dc-es-scanner-window-07.png]

### Diálogo Resolution Settings

| Configuración | Qué hace |
|---|---|
| **Days To Load** | Cuántos días de historial se cargan para esta resolución (4 fue el valor observado con 1 Daily; 10 con 5 Minute). Más días = recarga más larga. |
| **Param 1** | El valor numérico de la resolución (1 para "1 Daily", 5 para "5 Minute") |
| **Param 2** | Predeterminado 0. [CONFIRM: what Param 2 controls] |
| **Param Type** | La unidad de la resolución: en el menú desplegable se observaron **Daily** y **Minute** |
| **Based on minute data** | Interruptor, activado por defecto: construye la resolución a partir de datos de minuto en lugar de datos de tick (el mismo concepto que la base BT/BM en los gráficos; consulte [[price-chart-settings]]) |
| **Continuos contract** (tal como aparece etiquetado en la aplicación) | Menú desplegable, predeterminado **None**: encadenado de contrato continuo entre meses de contrato, reflejando la configuración de datos del gráfico; consulte [[symbol-rollover]] |
| **Exclude Auction(Tick Data)** | Interruptor, desactivado por defecto: filtra las ejecuciones de subasta de los datos basados en tick (el comportamiento exacto del filtrado puede variar) |
| **Filter Bad Ticks** | Interruptor, activado por defecto: filtra los ticks erróneos de los datos |
| **Extended market hour** | Interruptor, desactivado por defecto: incluye las horas de la sesión extendida (ETH) cuando está habilitado |

### Diálogo Graphics Settings

| Configuración | Predeterminado | Qué hace |
|---|---|---|
| **Cell back color** | — | Color de fondo de las celdas de la tabla |
| **Cell selection back color** | Verde | Fondo de la celda resaltada (el resaltado de la celda %) |
| **Cell selection text color** | — | Color del texto dentro de la celda resaltada |
| **Cell text color** | — | Color del texto de las celdas normales |
| **Cell text size** | 12.00 | Tamaño de fuente de las celdas de la tabla |
| **Header back color** | — | Fondo de la fila de encabezados de columna |
| **Headers text color** | — | Color del texto de los encabezados de columna |
| **Header text size** | 14.00 | Tamaño de fuente de los encabezados de columna |

**Apply** muestra los cambios en vivo; **OK** confirma y cierra.

[SCREENSHOT: Diálogo Graphics Settings del Escáner mostrando todas las muestras de color de celdas y encabezados y los dos campos de tamaño de texto | dc-es-scanner-window-08.png]

## Consejos y errores comunes

- **El Escáner comienza con un solo símbolo por diseño.** Solo escanea lo que usted añade: si la tabla parece vacía, abra **icono de engranaje → Symbol List** y añada símbolos.
- **Un selector Select Instrument vacío significa que no hay suscripciones de bolsas**, no que el Escáner esté roto. Suscriba primero las bolsas en [[symbol-manage]].
- **Los números congelados son casi siempre un problema de la fuente de datos.** Compruebe el punto indicador de la fuente de datos en la barra superior; si está rojo, arregle primero la conexión: consulte [[connect-data-feed]] y [[feed-connected-chart-not-moving]].
- **Una recarga tras cambiar de resolución es normal.** La tabla se vacía y se vuelve a llenar igual que se reconstruye un gráfico.
- **Utilice Always on Top junto con una ventana estrecha** para tener una franja de cotizaciones persistente junto a sus gráficos.
- **Guarde su configuración como plantilla** (**icono de engranaje → Template**) para poder restaurar más adelante la misma lista de símbolos y el mismo estilo.

## Artículos relacionados

- [[correlation-viewer]]
- [[symbol-manage]]
- [[connect-data-feed]]
- [[feed-connected-chart-not-moving]]
- [[price-chart-settings]]
- [[templates-workspaces]]