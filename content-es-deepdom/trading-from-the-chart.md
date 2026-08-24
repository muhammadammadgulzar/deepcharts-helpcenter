---
title: "Operar desde el gráfico"
slug: "trading-from-the-chart"
category: "Trading"
subcategory: ""
type: "how-to"
difficulty: "intermediate"
time: "5 min read"
description: "Esta guía explica cómo habilitar el trading directamente desde un gráfico de DeepDom, usar el panel de trading y el Chart DOM, gestionar órdenes y personalizar las columnas y los marcadores relacionados con el trading."
keywords: ["operar desde el gráfico", "deepdom operar desde el gráfico", "deepdom", "trading"]
source_hash: "0613ddb99ff8b5d7"
ai_translated: true
source_hash: "0613ddb99ff8b5d7"
---
Esta guía explica cómo habilitar el trading directamente desde un gráfico de DeepDom, usar el panel de trading y el Chart DOM, gestionar órdenes y personalizar las columnas y los marcadores relacionados con el trading.

## Habilitar el trading y mostrar el panel de trading

[SCREENSHOT: Operar desde el gráfico — Habilitar el trading y mostrar el panel de trading (DeepDOM) | dd-es-trading-from-the-chart-01.png]

### Habilitar el trading en un gráfico

Para permitir la introducción de órdenes desde un gráfico:

Haga clic en el icono del dólar en la esquina superior derecha del gráfico, o

Abra el menú **Settings** (Configuración) del gráfico y habilite **Trading enabled**.

### Mostrar el panel de trading

Para mostrar el panel de trading debajo del gráfico:

Habilite la casilla **Trading panel** en la esquina inferior derecha del gráfico, o

Use el menú **Settings** del gráfico y habilite **Show trading panel**.

## Panel de trading y trading cruzado Mini/Micro

[SCREENSHOT: Operar desde el gráfico — Panel de trading y trading cruzado Mini/Micro (DeepDOM) | dd-es-trading-from-the-chart-02.png]

En la parte superior del panel de trading puede seleccionar el instrumento utilizado para la ejecución de órdenes. DeepDom permite el trading cruzado, por ejemplo, ver los datos de un contrato de futuros Mini mientras ejecuta órdenes en un contrato Micro, sin abrir gráficos adicionales. Para un análisis volumétrico preciso, base siempre sus decisiones en el contrato de futuros principal.

El panel también muestra:

Open quantity: número de contratos o acciones actualmente en el mercado.

Open P/L: ganancia o pérdida no realizada de la posición abierta.

Daily P/L: ganancia o pérdida realizada en el instrumento durante el día de trading actual.

## Botones de trading y acciones básicas

[SCREENSHOT: Operar desde el gráfico — Botones de trading y acciones básicas (DeepDOM) | dd-es-trading-from-the-chart-03.png]

El panel de trading incluye botones de acceso rápido para distintos tipos de órdenes:

MKT: enviar órdenes a mercado de compra o venta.

BID / ASK: colocar órdenes de límite en el mejor Bid o el mejor Ask actual.

LMT: colocar órdenes de límite manuales (límite de compra por debajo del precio de mercado o límite de venta por encima del mercado).

STP: colocar órdenes stop que se convierten en órdenes a mercado al activarse (stop de compra por encima del mercado, stop de venta por debajo del mercado).

STP LMT: colocar órdenes stop-límite, que envían órdenes de límite en lugar de órdenes a mercado al activarse, lo que ayuda a controlar el deslizamiento con el riesgo de no obtener ejecución.

Cancel: cancelar todas las órdenes pendientes (en curso).

Close: cerrar la posición abierta actual y cancelar todas las órdenes pendientes restantes.

Utilice los campos **Qty**, **Broker** y **Account** para elegir el tamaño de la operación, el bróker y la cuenta de cada operación.

Si la opción **Tick diff.** está habilitada, los botones Bid y Ask colocarán órdenes de límite a un número especificado de ticks de distancia del precio de mercado en lugar de exactamente en el mejor Bid/Ask.

## Estrategia OCO y ejecuciones históricas

### Estrategia OCO

La función OCO (Order-Cancels-Order) le permite adjuntar dos órdenes de salida a una posición principal: una orden de límite para tomar beneficios y un stop de protección. Cuando una de estas órdenes de salida se ejecuta, la otra se cancela automáticamente.

[SCREENSHOT: Operar desde el gráfico — Estrategia OCO (DeepDOM) | dd-es-trading-from-the-chart-04.png]

### Mostrar ejecuciones históricas

Para mostrar las ejecuciones históricas en el gráfico, abra la configuración del gráfico y habilite **Show historical executions**. Los marcadores de operaciones aparecerán entonces en los precios y horas correspondientes.

[SCREENSHOT: Operar desde el gráfico — Mostrar ejecuciones históricas (DeepDOM) | dd-es-trading-from-the-chart-05.png]

## Vista general del Chart DOM

[SCREENSHOT: Operar desde el gráfico — Vista general del Chart DOM (DeepDOM) | dd-es-trading-from-the-chart-06.png]

El Chart DOM proporciona una escalera vertical del libro de órdenes junto a su gráfico.

Habilítelo seleccionando la casilla **DOM** en la parte inferior derecha del gráfico, o

Abra la configuración del gráfico y habilite **Enable chart DOM**.

De forma predeterminada, el Chart DOM muestra estas columnas de izquierda a derecha:

B.PS: Bid Pull Stack; cantidades añadidas o retiradas en cada nivel del Bid.

B: columna de gestión de órdenes para órdenes de compra (mover o cancelar).

Bid: órdenes de límite de compra en cada nivel de precio.

Ask: órdenes de límite de venta en cada nivel de precio.

S: columna de gestión de órdenes para órdenes de venta.

A.PS: Ask Pull Stack; cantidades añadidas o retiradas en cada nivel del Ask.

## Introducción y gestión de órdenes en el DOM

### Órdenes a mercado y órdenes de límite/stop

Compra a mercado: clic derecho en cualquier parte de la columna Bid.

Venta a mercado: clic derecho en cualquier parte de la columna Ask.

Límite de compra: clic izquierdo en la columna Bid en cualquier precio por debajo del precio de mercado actual.

Stop de compra: clic izquierdo en la columna Bid en cualquier precio por encima del precio de mercado actual.

Límite de venta: clic izquierdo en la columna Ask en cualquier precio por encima del precio de mercado actual.

Stop de venta: clic izquierdo en la columna Ask en cualquier precio por debajo del precio de mercado actual.

### Modificar y cancelar órdenes

Para órdenes de límite o condicionales existentes:

Utilice las columnas de gestión de órdenes (B y S) y arrastre con el botón izquierdo del ratón para mover una orden a un nuevo nivel de precio.

Haga clic con el botón derecho para cancelar una orden.

Haga doble clic con el botón izquierdo del ratón para editar la cantidad de la orden.

## Configuración y columnas del Chart DOM

[SCREENSHOT: Operar desde el gráfico — Configuración y columnas del Chart DOM (DeepDOM) | dd-es-trading-from-the-chart-07.png]

Haga clic en el icono **Settings** (Configuración) del Chart DOM para abrir la configuración del DOM. Aquí puede ajustar el tamaño de fuente, el formato del texto y la apariencia de varias columnas, entre ellas:

[SCREENSHOT: Operar desde el gráfico — Configuración y columnas del Chart DOM (DeepDOM) | dd-es-trading-from-the-chart-08.png]

Bid/Ask Columns: cambiar los colores de fondo y de texto para el Bid y el Ask.

Pull Stack Columns: habilitar el Pull Stack de Bid/Ask, elegir filtros (promedio o ninguno) y personalizar los colores.

Filled filter: aplicar un filtro a las cantidades ejecutadas para mostrar solo las operaciones significativas.

Bid/Ask Filled: mostrar los volúmenes ejecutados en las columnas B.T (Bid Trades) y A.T (Ask Trades), formando en la práctica una vista de tipo footprint. El restablecimiento automático puede vaciarlas en función de los giros del precio, o puede restablecerlas manualmente.

Last Filled: habilitar la columna de la última operación.

Order View: mostrar/ocultar las columnas de gestión de órdenes y ajustar sus colores.

Price Scale: habilitar la columna de la escalera de precios y personalizar su apariencia.

P/L Column: mostrar la ganancia y pérdida no realizada tick a tick cuando tiene una posición abierta.

Markers: habilitar marcadores para el último precio negociado, la apertura, el máximo y el mínimo.

Column Order: abrir la configuración del orden de columnas para reorganizar las columnas del DOM según sea necesario.

## ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre. Al ponerse en contacto, incluya:

Una captura de pantalla del problema.

Una breve descripción de lo que intentaba hacer.

Ticket de soporte (respuesta más rápida): visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico: también puede escribirnos a support@deepcharts.com. Tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.