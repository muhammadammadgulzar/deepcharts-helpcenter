---
title: "Ventana Advanced DOM"
slug: "advanced-dom"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "13 min read"
description: "La escalera del Advanced DOM en DeepCharts: columnas de profundidad, trading con clic, la escalera de P&L, las dos columnas de perfil de volumen y todos los diálogos de configuración."
keywords: ["advanced dom", "adv dom", "ventana DOM", "profundidad de mercado", "escalera", "trading con clic", "pull stack", "columnas dom", "columna P&L", "columna de perfil de volumen", "configuración dom"]
source_hash: "9d0080ac18aa1521"
ai_translated: true
source_hash: "9d0080ac18aa1521"
---
El Advanced DOM es la escalera de precios independiente de DeepCharts: profundidad de mercado en vivo a ambos lados del precio, columnas de órdenes con clic para operar, una escalera de P&L proyectado mientras mantiene una posición y hasta dos columnas de perfil de volumen, todo en una ventana.

Este artículo mapea toda la ventana: anatomía, cada columna de la escalera, el menú del engranaje y los diálogos de configuración profundamente anidados (**Chart Dom Settings** y los dos diálogos de perfil). Si busca el concepto detrás de un DOM en lugar de esta ventana específica, comience con [[depth-of-market]]; para la escalera que vive dentro de un gráfico, consulte [[dom-trading-chart]].

## Qué es

Un DOM (Depth of Market, profundidad de mercado) muestra el libro de órdenes en reposo como una escalera de precios vertical: los tamaños del bid apilados por debajo y alrededor del precio actual en un lado, los tamaños del ask en el otro. La ventana Advanced DOM añade columnas de trading (haga clic en un nivel para trabajar una orden allí), una columna de beneficio/pérdida proyectado por nivel para su posición abierta, contadores de volumen operado por nivel y perfiles de volumen construidos a partir de operaciones ejecutadas.

Si la idea de la escalera es nueva para usted, explore el libro de órdenes vivo de abajo: pase el cursor sobre cualquier nivel para ver qué significa el tamaño en reposo allí.

[WIDGET: dom-ladder]

> **Nota:** La visualización de profundidad depende de su fuente de datos. Con datos de nivel 1 solo está disponible el mejor bid/ask; la escalera completa de tamaños en reposo necesita datos de profundidad de nivel 2.

## Cuándo usarla

- Trabajar órdenes de límite precisas en niveles elegidos en lugar de hacer clic en botones de un panel.
- Observar cómo se acumula o desaparece la liquidez en reposo alrededor de un nivel ([[understanding-auction-theory]] explica por qué eso importa).
- Gestionar una posición abierta con una lectura de P&L proyectado por nivel.
- Combinar la profundidad en vivo con contexto de volumen ejecutado mediante las dos columnas de perfil de volumen.
- Ejecutar la cinta y el libro juntos: combínela con [[adv-time-and-sales]].

## Inicio rápido

1. En la barra principal, abra **New → Book → Adv. Dom** (el submenú **Book** también ofrece las variantes **Horizontal dom** y **Vertical dom**).
2. Elija su instrumento en **Select Instrument** y confirme. Solo aparecen las bolsas suscritas en [[symbol-manage]].
3. La ventana se abre y la escalera comienza a actualizarse en vivo. Mientras se descarga el historial, la barra principal puede mostrar una insignia **DWT:**: es normal (DWT = descargando datos del servidor de la fuente; LDT = cargando datos ya en disco).

[SCREENSHOT: Menú New abierto con el submenú Book expandido mostrando Adv. Dom, Horizontal dom y Vertical dom, y el diálogo Select Instrument detrás | dc-es-advanced-dom-01.png]

## Anatomía de la ventana

[SCREENSHOT: Ventana completa de Advanced DOM en NQ con las cuatro secciones visibles: barra de título con logo, borrador, engranaje, menú desplegable de símbolo e iconos de enlace; el encabezado Broker/Account/Qty/Daily P&L; la fila de estadísticas %V %O V T; la escalera con las columnas P&L, B, Bid, Price, Ask, S y VP con la fila del precio actual resaltada en naranja; y el pie con la caja A, el selector Qty, Cancel - Flat All, Buy, Cancel, Flat, Sell y el bloque OCO | dc-es-advanced-dom-02.png]

De arriba abajo:

- **Barra de título**: logo de DeepCharts, icono de **borrador** (limpia la columna Resettable Profile), icono de **engranaje** (el centro de configuración), el menú desplegable de símbolo (por ejemplo NQ-202609), el icono cuadrado de **enlace**, minimizar y cerrar. Al cerrar se pide confirmación ("Are you sure to close the window?").
- **Encabezado de trading**: **Broker**, **Account** (Cuenta), **Qty** (Cantidad, se vuelve verde con +N mientras está largo) y **Daily P/L** (P/L diario).
- **Fila de fundamentales**: **%V** (cambio porcentual respecto al día anterior), **%O** (cambio respecto a la apertura de la sesión), **V** (volumen total) y **T** (número de operaciones).
- **La escalera**: las columnas descritas abajo; la fila del precio actual está resaltada en naranja (el marcador **Last**).
- **Pie**: la caja de tipo de orden **[A]**, el selector **Qty**, **Cancel - Flat All** (naranja), **Buy**, **Cancel**, **Flat**, **Sell**, el interruptor OCO con los botones de radio **Server/Client** y el menú desplegable de estrategia con su propio engranaje.

Las cuatro secciones intermedias/exteriores se corresponden una a una con los interruptores **Show Fundamental**, **Show Trading Panel**, **Show Trading Buttons** y **Show OCO Panel** del menú del engranaje: desmarque uno y esa sección desaparece.

### Columnas de la escalera

La vista por defecto muestra **P&L | B | Bid | Price | Ask | S | VP**. Habilitarlo todo (mediante la configuración o el menú de clic derecho en el encabezado de columna) produce **P&L | #B | B.PS | B | Bid | B.T | Price | A.T | Ask | S | A.PS | #A | VP | VP**.

| Columna | Qué muestra |
|---|---|
| **Price** | La escalera de precios en sí. La fila naranja es el precio actual (marcador Last). |
| **Bid / Ask** | Tamaños de profundidad de mercado en reposo por nivel (celdas de bid azules, celdas de ask moradas por defecto), actualizándose en vivo. |
| **B / S** | Bandas anchas de clic para operar con sus propias órdenes: lado de compra verde, lado de venta rojo oscuro. Sus órdenes en curso aparecen aquí. |
| **P&L** | Con una posición abierta: el beneficio/pérdida proyectado de esa posición en cada nivel de precio. La fila verde 0.00 marca su nivel de entrada/punto de equilibrio. |
| **B.PS / A.PS** | Columnas Pull/Stack: seguimiento del cambio de liquidez por nivel (verde = liquidez añadida, rojo = retirada). Vacías hasta que ocurran eventos de pull/stack; la función está desactivada por defecto. |
| **B.T / A.T** | Contadores de volumen operado por nivel y por lado (volumen vendido a mercado / comprado a mercado). |
| **#B / #A** | Columnas de recuento de órdenes, ligadas a la función Offers (recuento de órdenes individuales por nivel). Pueden permanecer vacías en fuentes que no entregan datos a nivel de orden: el requisito exacto de datos no está confirmado. |
| **VP / VP** | Dos columnas de perfil de volumen: el Resettable Profile (acumula hasta que lo limpie con el icono del borrador) y el Daily Profile (desde el inicio de la sesión). Barras con números por nivel; el valor del nivel con mayor volumen se resalta en rojo (el POC). |

[SCREENSHOT: Escalera del Advanced DOM ampliada para mostrar celdas de profundidad del bid azules, celdas de profundidad del ask moradas, una orden de compra en curso verde en la columna B, y las dos columnas VP a la derecha con el valor del POC resaltado en rojo | dc-es-advanced-dom-03.png]

## Cómo interpretarla

- **Profundidad (columnas Bid/Ask)**: los tamaños se actualizan tick a tick; observe los niveles donde el tamaño se apila o desaparece. Para patrones de interpretación, consulte [[understanding-auction-theory]] y [[orderflow-101]].
- **La escalera de P&L**: mientras está plano permanece vacía; una vez que mantiene una posición, cada nivel muestra lo que significaría cerrar allí. La fila verde 0.00 es su punto de equilibrio/entrada; los valores por encima y por debajo escalan con la distancia.
- **Las dos columnas VP**: contexto de volumen ejecutado. El Daily Profile muestra la sesión completa; el Resettable Profile muestra solo lo operado desde la última vez que pulsó el icono del borrador, lo que lo hace útil para preguntas del tipo "qué ha pasado desde la noticia". El valor resaltado en rojo es el nivel con más volumen operado (POC: consulte [[understanding-volume-profile]]).
- **Marcadores**: la escalera resalta niveles de sesión: **Last** (naranja, activado por defecto), **High** (verde, activado), **Low** (rojo, activado), **Open** (desactivado por defecto), más **Suspension** (cian, activado) y **Auction** (desactivado). Qué indican exactamente los marcadores Suspension y Auction es [CONFIRM: Suspension and Auction marker semantics].

[SCREENSHOT: Advanced DOM con posición larga de 2 contratos: campo Qty en verde mostrando +2, la columna P&L llena con valores por nivel y la fila verde 0.00 en el nivel de entrada, con la fila del precio actual en naranja debajo | dc-es-advanced-dom-04.png]

## Operar desde el DOM

- **Tipo de orden: la caja [A].** La caja junto a Qty selecciona el tipo de orden: **Automatic / Limit / Market / Conditional**. En modo Automatic la plataforma decide según su acción de ratón: el clic derecho coloca una orden a mercado, el clic izquierdo coloca una orden de límite o stop según a qué lado del precio haga clic.
- **Órdenes en curso.** Haga clic en la columna **B** para trabajar una compra en ese nivel, en **S** para una venta. Arrastre una orden para moverla, haga clic derecho sobre ella para eliminarla, doble clic para editar su cantidad.
- **Botones del pie.** **Buy** y **Sell** envían con la cantidad del pie; **Cancel** cancela las órdenes en curso y **Flat** cierra la posición. **Cancel - Flat All** hace ambas cosas en un clic: su alcance exacto (solo este símbolo, o todas las cuentas/símbolos) es [CONFIRM: scope of Cancel - Flat All in the Adv DOM footer].
- **Bloque OCO.** El interruptor OCO del pie, los botones de radio **Server/Client** y el menú desplegable de estrategia reflejan el sistema de brackets del panel de trading: consulte [[oco-strategies]] y [[trading-panel-reference]] para ver cómo se comportan los brackets del lado del servidor frente a los del lado del cliente.

> **Advertencia:** Las columnas B y S son superficies de entrada de órdenes en vivo. Un clic coloca o trabaja una orden real para la cuenta seleccionada: mantenga seleccionada la cuenta de simulación mientras aprende la escalera ([[simulation-accounts]]).

### Disposición compacta

Cuando la ventana es estrecha, el DOM se reorganiza: el encabezado gana campos **Price** y **P/L**, la escalera se divide con el precio en el centro y columnas **X** que cancelan la orden en curso en ese nivel, y el pie se convierte en un ticket de orden explícito (**Qty**, **Price**, menú desplegable **Type** mostrando LMT, **Buy**, **Cancel all**, **Flat**, **Sell**, más la fila OCO). Qué ancho activa el cambio es [CONFIRM: activation rule for the compact split layout].

[SCREENSHOT: Advanced DOM estrecho en disposición compacta dividida mostrando las columnas de precio centradas, las columnas X de cancelación y el pie de ticket de orden con los campos Qty, Price y Type=LMT | dc-es-advanced-dom-05.png]

## Referencia de configuración

Todo comienza en el icono de **engranaje**: **Duplicate Dom**, **Settings Column Order**, **Settings Dom**, **Resettable Profile ▸**, **Daily Profile ▸**, los cuatro interruptores **Show**, **Always on Top** y **Template ▸** (Load / Save As).

[SCREENSHOT: Menú del engranaje del Advanced DOM abierto mostrando Duplicate Dom, Settings Column Order, Settings Dom, Resettable Profile, Daily Profile, los cuatro interruptores Show marcados, Always on Top y Template | dc-es-advanced-dom-06.png]

> **Nota:** Tras algunos cambios de configuración o de perfil, la escalera muestra brevemente un indicador de carga mientras se reconstruye. Es normal: el mismo patrón que un gráfico reconstruyéndose.

### Settings Column Order

Una lista simple de los identificadores internos de columna con botones **Up / Down** más **Apply / OK**: reordene aquí las columnas de la escalera. El inventario completo: ProfitLoss, BidOffer, BidPullStack, BuyOrder, BidQty, BidFilled, PriceScale, AskFilled, AskQty, SellOrder, AskPullStack, AskOffer.

Una alternativa más rápida: haga clic derecho en cualquier encabezado de columna para el menú rápido: **Adjust column size**, **Adjust window to fit content**, e interruptores de mostrar/ocultar para **Pull/Stack**, **Trades**, **Offers**, **Profit/Loss** más los dos submenús de perfil.

[SCREENSHOT: Menú rápido de clic derecho en el encabezado de columna abierto mostrando Adjust column size, Adjust window to fit content, Pull/Stack, Trades, Offers, la entrada Profit/Loss marcada y los submenús Resettable/Daily Profile | dc-es-advanced-dom-07.png]

### Settings Dom (diálogo Chart Dom Settings)

El diálogo principal, organizado en diez secciones plegables:

| Sección | Ajustes |
|---|---|
| GENERAL | **Font size** (11.00), **Text format** (Automatic), **Background color**, **Number of levels to show** (0), **Tick grouping** (1), **Auto. axis margin %** (20). [CONFIRM: meaning of Number of levels to show = 0 — all levels?] |
| BID/ASK COLUMN | **Bid back color** (azul), **Ask back color** (morado), **Bid/Ask profile color** (las barras de tamaño horizontales dentro de las celdas de profundidad), **Text Color**. |
| PULL/STACK COLUMN | **Enable** (desactivado por defecto), **Calculation Mode** (Avg filter: otras opciones sin confirmar), **Show As Profile** (activado), **Text Color**, más colores de pull/stack por lado (bid pull rojo, bid stack verde, ask pull verde, ask stack rojo). |
| FILLED COLUMN | **Enable** (desactivado), **Auto reset** (activado), **Bid Text**, **Ask Text**, **Highlight Bid/Ask** (desactivado), colores **Bid/Ask Highlight**. Qué cuenta exactamente Filled frente a las columnas Trades, y cuándo se dispara Auto reset, está sin confirmar. |
| OFFERS COLUMN | **Enable offers** (desactivado), colores de fondo **Bid/Ask offer**, **Text Color**. |
| ORDER SETTINGS | **Text Color**, **Buy Order** (verde), **Sell Order** (rojo), **Buy/Sell BackGround**, **Buy/Sell Filled Color**: los colores de las órdenes en curso en las columnas B/S. |
| PRICE SCALE | **Price back color**, **Price text color**. |
| PL COLUMN | **Enable** (activado), **Background**, **Gain Text Color** (verde), **Loss Text Color** (morado): desactive aquí la escalera de P&L si no la quiere. |
| MARKER SETTINGS | Activación + color por marcador: **Last** (activado, naranja), **Open** (desactivado), **High** (activado, verde), **Low** (activado, rojo), **Suspension** (activado, cian), **Auction** (desactivado, morado). |
| ORDER ENABLE SETTINGS | **Enable stop order** (activado), **Enable market order** (activado). Si estos controlan solo los clics en la escalera o también los botones del pie está sin confirmar. |

[SCREENSHOT: Diálogo Chart Dom Settings abierto con la sección GENERAL expandida y la lista de los diez encabezados de sección visible | dc-es-advanced-dom-08.png]

### Configuración de Resettable Profile y Daily Profile

Cada una de las dos columnas VP tiene su propio diálogo de configuración completo (estructura idéntica, nueve secciones): GENERAL (**Auto grouping** Manual/Automatic, **Auto group factory** 2, **Manual ticks** 1), PLOT SETTINGS (**Background → Show Settings**, **Show text**, **Text → Show Settings**, **Text format**, **Number of profile** 2), VISUAL APPEARANCE (**Vbp opacity** 90, **Show filled vbp** desactivado), POINT OF CONTROL (**Enable** activado, **Highlight** activado, color de resaltado magenta, línea opcional), VALUE AREA (**Enable** activado, **% Value Area** 70, **Highlight** activado, **Outside Color** amarillo: las barras amarillas que ve en la escalera son niveles fuera del área de valor, línea opcional), PEAK AND VALLEY (**Sensitivity** 20 más una ventana de configuración PEAK/VALLEY anidada con activación, resaltado, volumen mínimo y opciones de línea), SUMMARY, PRICE LINE y LAST FILLED QTY (cada una con un interruptor Enable más colores).

La ventana anidada **Background Settings** controla el coloreado de las barras del perfil: **Method color** (Fading color), **Color calculation** (Volume), **Min. Vol. Diff. for Imbalance**, **Include zero on imbalance**, **Color only dominant side**, muestras de color fijo y un sistema RANGE (**Range defining** Automatic más niveles de color FIRST–FOURTH RANGE). Las listas completas de opciones y qué define los cuatro niveles de rango están sin confirmar: espere que esta área recompense la experimentación en una fuente de simulación.

Estos conceptos de perfil (POC, área de valor, picos y valles) son los mismos que usa el indicador [[deep-profile]] en los gráficos.

[SCREENSHOT: Diálogo de configuración del Resettable Profile mostrando los nueve encabezados de sección con GENERAL expandido, y la ventana anidada Background Settings abierta encima mostrando Method color=Fading color y Color calculation=Volume | dc-es-advanced-dom-09.png]

## Solución de problemas

- **La escalera muestra solo el mejor bid/ask, la mayoría de las celdas de profundidad vacías.** Su fuente es de nivel 1. La profundidad completa necesita datos de nivel 2: compruebe qué incluye su suscripción ([[buy-data-feed]]).
- **Las columnas #B/#A permanecen vacías.** Estas columnas de recuento de órdenes pueden permanecer vacías en fuentes sin datos a nivel de orden incluso mientras B.T/A.T se pueblan. Requisito exacto sin confirmar.
- **Ventana atascada en Loading.** Los cambios de configuración y de perfil reconstruyen la escalera: dele un momento. Si la barra principal muestra **DWT:**, la plataforma está descargando historial de la fuente; si nunca termina, siga [[data-delayed-lagging]].
- **La columna Resettable Profile se ve vacía o escasa.** Solo acumula desde el último clic en el borrador: ese es su trabajo. La columna Daily Profile de al lado lleva la sesión completa.
- **Precios congelados.** Compruebe el punto de la fuente en la barra principal y consulte [[feed-connected-chart-not-moving]].

## Consejos y errores comunes

- **Borrador vs Daily.** Pulse el borrador de la barra de título deliberadamente: limpia el Resettable Profile inmediatamente. El Daily Profile no se ve afectado.
- Use **Duplicate Dom** para crear una segunda escalera con configuración idéntica y luego cambie su símbolo: más rápido que reconfigurar desde cero.
- Si una sección de la ventana "desapareció", compruebe los cuatro interruptores **Show** del menú del engranaje antes de suponer un fallo.
- Guarde su DOM configurado como plantilla (**Engranaje → Template → Save As**) y recárguelo en cualquier espacio de trabajo.
- Tenga en cuenta **Enable stop order / Enable market order**: si un clic en la escalera se niega a colocar una orden stop o a mercado, estos interruptores son el primer lugar donde mirar.

## Artículos relacionados

- [[depth-of-market]]
- [[dom-trading-chart]]
- [[adv-time-and-sales]]
- [[trading-panel-reference]]
- [[oco-strategies]]
- [[understanding-volume-profile]]