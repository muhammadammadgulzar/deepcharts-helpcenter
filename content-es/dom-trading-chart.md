---
title: "DOM Trading en el gráfico (escalera de trading con clics)"
slug: "dom-trading-chart"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Active la escalera DOM sobre el gráfico y coloque órdenes de compra y venta con un solo clic en las columnas de precio verde y roja."
keywords: ["dom trading", "dom del gráfico", "trading con clics", "trading en escalera", "columnas verde y roja", "cancel all", "flat all", "smart dom", "mini dom", "trading con un clic"]
source_hash: "0a897e57b1f65e9d"
ai_translated: true
source_hash: "0a897e57b1f65e9d"
---
Al terminar tendrá la escalera de trading con clics activa en su gráfico y sabrá exactamente qué hacen un clic izquierdo y un clic derecho en las columnas verde y roja.

**DOM Trading** superpone dos columnas verticales en el borde derecho del gráfico de precios, una columna verde de compra y una columna roja de venta, para que pueda colocar órdenes en niveles de precio exactos con un clic. Su mayor ventaja sobre la cuadrícula de botones: la plataforma elige el tipo de orden correcto (límite o stop) según el nivel en el que haga clic, de modo que un error del tipo "compra límite por encima del mercado" resulta imposible.

## Antes de empezar

- Un gráfico abierto con una fuente de datos conectada: [[first-chart]], [[connect-data-feed]]
- El trading armado en el gráfico (icono **$** verde) y el panel de trading disponible: [[trading-from-chart]]
- La cantidad de la orden establecida en el campo **Qty** del panel de trading: la escalera la usa en cada clic
- Recomendado: practique primero en una cuenta SIM: [[simulation-accounts]]

## Pasos

1. En la barra inferior del gráfico, seleccione el botón de opción **DOM Trading**. Aparecen dos columnas de altura completa en el borde derecho del gráfico, una columna verde de compra y una columna roja de venta, con una etiqueta **D:** en la parte superior y los botones naranjas **CANCEL ALL** / **FLAT ALL** en la parte inferior.

[SCREENSHOT: Gráfico de precios con DOM Trading habilitado: columna verde de compra y columna roja de venta en el borde derecho, la etiqueta D: 0.00 $ en la parte superior de la escalera y los botones naranjas CANCEL ALL y FLAT ALL en la parte inferior, con el botón de opción DOM Trading de la barra inferior resaltado | dc-es-dom-trading-chart-01.png]

2. Establezca su tamaño en el campo **Qty** del panel de trading. Cada clic en la escalera envía esta cantidad.

3. Para comprar, haga clic izquierdo en la columna **verde** en el precio que desee. La plataforma elige el tipo de orden según dónde esté el nivel respecto al precio actual:

| Usted hace clic | Orden colocada |
|---|---|
| Columna verde por debajo del precio actual | Buy Limit (compra límite) |
| Columna verde por encima del precio actual | Buy Stop (compra stop) |
| Columna roja por encima del precio actual | Sell Limit (venta límite) |
| Columna roja por debajo del precio actual | Sell Stop (venta stop) |

Para vender, haga lo mismo en la columna **roja**. Esta selección automática significa que la orden siempre queda en el lado correcto del mercado.

Familiarícese con la lógica de niveles en la escalera en vivo a continuación: las ventas límite se sitúan en violeta por encima del mercado, las compras límite en verde por debajo; pase el cursor por cualquier nivel para ver por qué ese lado recibe ese tipo de orden.

[WIDGET: dom-ladder]

4. Para operar a mercado, haga **clic derecho** en la columna: el clic derecho en la columna verde envía una orden Buy Market, el clic derecho en la columna roja envía una orden Sell Market, independientemente del nivel (comportamiento predeterminado).

5. Gestione las órdenes activas directamente en la escalera: **clic izquierdo** en una orden existente para moverla a otro nivel, **clic derecho** para cancelarla.

6. Lea los indicadores de la escalera. La etiqueta **D:** en la parte superior de la escalera es la lectura de ganancias y pérdidas de su posición. Si su fuente proporciona profundidad Level 2, la escalera también muestra la liquidez pasiva en cada nivel de precio: amplíe el gráfico para ver los números. Con datos de Level 1 solo se muestran el mejor bid y ask.

[SCREENSHOT: Escalera DOM ampliada con una fuente Level 2 mostrando las cantidades de liquidez pasiva en los niveles de precio de las columnas verde y roja | dc-es-dom-trading-chart-02.png]

7. Use los botones naranjas de emergencia de la parte inferior de la escalera: **CANCEL ALL** cancela las órdenes activas, **FLAT ALL** cierra las posiciones.

> **Advertencia:** No está confirmado si **CANCEL ALL** y **FLAT ALL** actúan solo sobre el símbolo del panel o sobre todos los símbolos y cuentas: el alcance exacto puede variar. [CONFIRM: scope of the ladder's CANCEL ALL / FLAT ALL buttons — panel symbol only, or all symbols/accounts] Hasta que lo haya verificado en una cuenta SIM, trátelos como interruptores de emergencia de toda la plataforma.

### Si quiere personalizar la escalera

Abra el menú desplegable junto al botón de opción **DOM Trading** en la barra inferior:

- **Enable Chart Trading**: activa o desactiva la propia colocación de órdenes desde el gráfico.
- **Chart Trading Width**: define el ancho de las columnas del Chart DOM.
- **Trading Colors**: personalice los colores de las columnas.
- **Line Bid/Ask**: muestre u oculte la línea de bid/ask.
- **DOM Settings**: muestre la profundidad de mercado con personalización de colores.
- **Text Settings**: habilite el texto sobre el gráfico y ajuste su color y apariencia.

[SCREENSHOT: El menú desplegable de DOM Trading abierto en la barra inferior del gráfico mostrando Enable Chart Trading, Chart Trading Width, Trading Colors, Line Bid/Ask, DOM Settings y Text Settings | dc-es-dom-trading-chart-03.png]

### Si quiere brackets adjuntos a las entradas de la escalera

Habilite el bloque **OCO Strategy** en el panel de trading antes de hacer clic: las entradas reciben un stop y un objetivo automáticos. Vea [[oco-strategies]].

## Verifique que funcionó

Haga clic izquierdo en la columna verde unos ticks por debajo del precio actual en una cuenta SIM: aparece una Buy Limit en ese nivel en la escalera y en la [[orders-window]]. Arrástrela un nivel: se mueve. Haga clic derecho sobre ella: se cancela. Tras una operación de prueba ejecutada, la etiqueta **D:** se actualiza con su P/L.

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| Los clics en las columnas no hacen nada | Compruebe **Trading Enabled** (icono **$** verde) y el interruptor **Enable Chart Trading** del menú desplegable de DOM Trading: [[trading-from-chart]] |
| No hay números de liquidez en la escalera | Su fuente solo entrega Level 1: la escalera necesita datos de Level 2 para mostrar la liquidez pasiva por nivel; pruebe también a ampliar para que las filas sean lo bastante altas para los números |
| Orden colocada con el tamaño equivocado | La escalera usa el campo **Qty** del panel de trading: compruébelo antes de hacer clic |
| Órdenes bloqueadas tras varios clics rápidos | La protección **Frequency Limitation** de **Options → Settings → General → Trading** pausó los envíos: vea [[trading-panel-reference]] |
| El gráfico no se actualiza en absoluto | [[feed-connected-chart-not-moving]] |

## Artículos relacionados

- [[trading-from-chart]]
- [[trading-panel-reference]]
- [[depth-of-market]]
- [[advanced-dom]]
- [[oco-strategies]]
- [[orders-window]]