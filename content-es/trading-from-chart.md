---
title: "Operar desde el gráfico"
slug: "trading-from-chart"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Habilite el trading desde el gráfico, abra el panel de trading y coloque, mueva y cancele sus primeras órdenes directamente en un gráfico de precios de DeepCharts."
keywords: ["trading desde el gráfico", "trading habilitado", "panel de trading", "icono de dólar", "colocar orden en el gráfico", "ctrl alt t", "comprar vender desde el gráfico", "cómo operar en deepcharts"]
source_hash: "cdad8a0234831ff6"
ai_translated: true
source_hash: "cdad8a0234831ff6"
---
Al terminar tendrá el trading armado en un gráfico, el panel de trading abierto, y sabrá cómo colocar, mover y cancelar órdenes sin salir del gráfico.

Cada gráfico de precios en DeepCharts puede funcionar también como pantalla de entrada de órdenes. Intervienen dos controles distintos: **Trading Enabled** (el icono de dólar) arma el gráfico para operar, y el **Trading panel** (panel de trading) es la columna de botones y campos que aparece en el lado derecho. Están vinculados — desactivar el icono de dólar oculta automáticamente el panel — así que conviene entender ambos antes de hacer clic en nada.

## Antes de empezar

- DeepCharts instalado y activado — [[install-deepcharts]]
- Una fuente de datos con trading (ejecución) conectada — [[connect-data-feed]]
- Un gráfico abierto en el instrumento que desea operar — [[first-chart]]
- Muy recomendable para su primer intento: una cuenta SIM para que no haya dinero real en riesgo — [[simulation-accounts]]

## Pasos

1. Habilite el trading en el gráfico. Haga clic en el icono **$** en la fila de iconos superior izquierda del gráfico: se vuelve **verde** cuando el trading está armado. Alternativas: haga clic con el botón derecho en el gráfico y elija **Trading Enabled** (**Ctrl Alt T**).

[SCREENSHOT: Fila de iconos superior izquierda del gráfico con el icono de dólar resaltado en su estado verde (armado), junto a los iconos de barra de herramientas, estilo de barras, indicadores, engranaje y cámara | dc-es-trading-from-chart-01.png]

2. Muestre el panel de trading. Active **Trading panel** en la barra inferior del gráfico, o haga clic con el botón derecho en el gráfico y elija **Show Trading Panel** (**Ctrl Alt P**). El panel se abre en el lado derecho del gráfico.

[SCREENSHOT: Gráfico de precios con el panel de trading abierto en el lado derecho, mostrando el desplegable de símbolo, los indicadores Open Qty / Open P/L / Daily P/L, el selector Qty, los desplegables Broker y Account y la cuadrícula de botones BUY/SELL | dc-es-trading-from-chart-02.png]

> **Nota:** El icono de dólar y el panel están vinculados. Si su panel de trading "desapareció", la causa más común es que **Trading Enabled** se desactivó: vuelva a armarlo y el panel reaparece.

3. Compruebe el instrumento en la parte superior del panel. Un gráfico nuevo preselecciona aquí el símbolo del propio gráfico, pero el panel tiene su propio desplegable **Select Instrument**: después de cambiar cualquiera de los dos, gráfico y panel son independientes. Así es como puede observar el contrato mini (por ejemplo NQ) mientras opera el micro (MNQ) desde el mismo gráfico.

[SCREENSHOT: Desplegable de símbolo del panel de trading abierto mostrando el diálogo Select Instrument con la barra lateral de bolsas y el cuadro de filtro | dc-es-trading-from-chart-03.png]

> **Nota:** El selector de instrumentos del panel solo lista las bolsas suscritas en **Options → Symbol Manage**; si está vacío, consulte [[symbol-manage]].

4. Establezca el tamaño de su orden en el selector **Qty**, y elija el **Broker** y la **Account** (cuenta) con los que operar. Para una prueba sin riesgo, establezca **Broker** en **SIM** y elija su cuenta de simulación.

5. Coloque una orden con la cuadrícula de botones. Cada tipo de orden tiene un botón de compra y otro de venta:

| Botón | Qué coloca |
|---|---|
| **MKT** | Orden a mercado: se ejecuta inmediatamente al mejor precio disponible |
| **BID / ASK** | Orden de límite al mejor bid actual (compra) o al mejor ask (venta) |
| **LMT** | Orden de límite a un precio que usted elige: compre por debajo del mercado, venda por encima |
| **STP** | Orden stop que dispara una orden a mercado: compre por encima del mercado, venda por debajo |
| **STP LMT** | Orden stop-límite: evita el slippage, con el riesgo de no ejecutarse |

Pruebe el panel en vivo de abajo: pase el cursor sobre cualquier botón para ver exactamente qué coloca, y haga clic en la posición SIM para ver cómo se actualiza el P/L.

[WIDGET: trading-panel-mock]

> **Advertencia:** Un límite de compra colocado por encima del mercado (o un límite de venta por debajo) se ejecuta inmediatamente como orden a mercado: el libro solo tiene liquidez de venta por encima del precio y liquidez de compra por debajo. Los stops son la imagen especular. Si lo coloca en el lado equivocado, espere una ejecución instantánea.

6. Gestione las órdenes activas directamente en el gráfico: **haga clic izquierdo y arrastre** una orden de límite o stop para moverla a un nuevo precio; **haga clic con el botón derecho** sobre una orden para cancelarla.

[SCREENSHOT: Una orden de límite de compra activa mostrada en el gráfico siendo arrastrada a un nuevo nivel de precio con el cursor visible | dc-es-trading-from-chart-04.png]

7. Salga o limpie con los botones del panel — todos actúan solo sobre el símbolo actualmente seleccionado en el panel:

- **Cancel** — cancela todas las órdenes activas (pendientes); las posiciones abiertas no se tocan.
- **Flat** — cierra solo la posición abierta actual.
- **Cancel and Flat** — cierra la posición abierta y cancela todas las órdenes activas restantes.
- **Breakeven** — mueve su stop al precio de entrada, más el margen **Breakeven - Ticks** de **Options → Settings → General → Trading** (0 significa la entrada exacta; auméntelo para cubrir comisiones y slippage).

### Si quiere entradas de límite a una distancia fija del mercado

Habilite la casilla **Ticks diff.** encima de la cuadrícula de botones y establezca un número N. **BID** coloca entonces el límite de compra N ticks por debajo del mejor bid, y **ASK** coloca el límite de venta N ticks por encima del mejor ask, en lugar de exactamente al mejor bid/ask.

### Si quiere brackets automáticos de stop-loss y take-profit

Habilite la casilla **OCO Strategy** en el panel antes de entrar. Cada nueva entrada recibe entonces un límite de take-profit y un stop de protección vinculados: cuando uno se ejecuta, el otro se cancela. La configuración completa, incluidas las estrategias multicontrato y la elección Server/Client, está en [[oco-strategies]].

### Si quiere ver operaciones pasadas en el gráfico

Haga clic con el botón derecho en el gráfico y elija **Show Historical Orders** (**Ctrl Alt H**) para trazar las ejecuciones históricas en el gráfico. La apariencia de la visualización de órdenes en el gráfico (tamaño del texto, colores) se personaliza en **Trading Settings** del menú de clic derecho.

## Verifique que funcionó

El icono **$** está verde, el panel es visible, y después de colocar una pequeña orden SIM puede verla activa en el gráfico y los indicadores del panel se actualizan: **Open Qty** muestra el tamaño de su posición, **Open P/L** el beneficio o pérdida en curso de la posición y **Daily P/L** el total del día para ese instrumento. La orden también aparece en la [[orders-window|Ventana de órdenes]].

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| El panel de trading desapareció | **Trading Enabled** (icono $) se desactivó: oculta automáticamente el panel; vuelva a habilitarlo (**Ctrl Alt T**) |
| Una orden de límite se ejecutó instantáneamente a mercado | Se colocó en el lado equivocado del precio: consulte la Advertencia del paso 5, o use la escalera de clic de [[dom-trading-chart]], que elige el tipo correcto automáticamente |
| Órdenes bloqueadas con un error del tipo "demasiadas órdenes" | La protección **Frequency Limitation** en **Options → Settings → General → Trading** limita las órdenes por segundo y pausa el envío tras superar el límite: ajuste el umbral o el tiempo de pausa |
| No puede operar un símbolo en absoluto, o la cuenta aparece bloqueada | Puede haberse activado una regla del gestor de riesgos — consulte [[risk-manager]] |
| La lista de instrumentos del panel está vacía | No hay nada suscrito en **Options → Symbol Manage** — [[symbol-manage]] |

## Artículos relacionados

- [[trading-panel-reference]]
- [[dom-trading-chart]]
- [[oco-strategies]]
- [[orders-window]]
- [[simulation-accounts]]
- [[risk-manager]]