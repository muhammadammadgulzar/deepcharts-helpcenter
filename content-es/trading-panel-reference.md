---
title: "Referencia del panel de trading: cada botón y campo"
slug: "trading-panel-reference"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "8 min read"
description: "Referencia completa del panel de trading del gráfico: cada indicador, botón de orden, botón de salida y campo OCO, con valores predeterminados y cuándo cambiarlos."
keywords: ["panel de trading", "panel de órdenes", "MKT BID ASK LMT STP", "ticks diff", "botón breakeven", "cancel and flat", "vincular órdenes pendientes", "oco servidor cliente", "exclamación roja oco"]
source_hash: "a480ce839fd38efb"
ai_translated: true
source_hash: "a480ce839fd38efb"
---
El panel de trading es la columna de entrada de órdenes que se acopla al lado derecho de cada gráfico de precios. Este artículo documenta cada indicador, botón y campo del panel, de arriba abajo, para que pueda consultar exactamente qué hace un control antes de confiarle órdenes reales.

Si nunca ha operado desde un gráfico, comience con el recorrido de [[trading-from-chart]]: esta página es la referencia a la que volverá.

## Qué es

El panel de trading responde a una pregunta: ¿cómo envío, protejo y cierro órdenes sobre un instrumento concreto sin salir del gráfico? Agrupa la selección de instrumento, los indicadores de posición, una cuadrícula de botones por tipo de orden, botones de salida de un clic y un bloque de brackets OCO en una sola columna. Aparece cuando se activa **Trading panel** en la barra inferior del gráfico (o clic derecho → **Show Trading Panel**, **Ctrl Alt P**) y requiere **Trading Enabled** (el icono **$** verde): deshabilitar el icono $ oculta el panel automáticamente.

Explore el panel en vivo de abajo: pase el cursor sobre cada botón e indicador para ver qué hace, y haga clic en la posición SIM para ver cómo se actualiza el P/L.

[WIDGET: trading-panel-mock]

## Cuándo usarlo

- Ejecuta desde gráficos y quiere entrada de órdenes, salidas y brackets en un solo lugar.
- Necesita operar un contrato distinto del graficado (gráfico del mini, órdenes del micro).
- Quiere acciones de riesgo de un clic: **Cancel**, **Flat**, **Cancel and Flat**, **Breakeven**.
- Quiere brackets automáticos de stop/objetivo (OCO) adjuntos a cada entrada.

Para el trading de clic estilo escalera en niveles de precio, use el DOM en el gráfico en su lugar — consulte [[dom-trading-chart]].

## Inicio rápido

1. Abra un gráfico y haga clic en el icono **$** hasta que se vuelva verde ([[trading-from-chart]] lo cubre paso a paso).
2. Active **Trading panel** en la barra inferior del gráfico.
3. Establezca **Broker** en **SIM** y elija una cuenta de simulación ([[simulation-accounts]]).
4. Establezca **Qty** en 1 y coloque una orden de prueba con **MKT**.
5. Ciérrela con **Flat**.

## Cómo interpretarlo

El bloque de cabecera le indica su exposición de un vistazo:

- **Open Qty** — cuántos contratos (o acciones) mantiene actualmente en el instrumento del panel. 0 significa sin posición.
- **Open P/L** — beneficio o pérdida no realizado de la posición abierta, actualizándose en tiempo real.
- **Daily P/L** — el beneficio o pérdida total del día para este instrumento.

En el bloque OCO, vigile el icono **rojo (!)** junto a **Mode**: significa que la cantidad total de la estrategia MULTI seleccionada no coincide con el campo **Qty** del panel, y la ejecución queda bloqueada hasta que los iguale. Las marcas de verificación verdes indican que las cantidades están alineadas.

[SCREENSHOT: Bloque OCO del panel de trading en modo MULTI mostrando el icono de exclamación rojo junto al desplegable Mode, con el campo Qty del panel visible mostrando un valor no coincidente | dc-es-trading-panel-reference-01.png]

## Referencia de configuración

### Cabecera: instrumento y posición

| Control | Qué hace |
|---|---|
| Desplegable de símbolo | Abre **Select Instrument** para elegir el contrato que opera el panel. Un gráfico nuevo preselecciona el símbolo del gráfico; después de cambiar cualquiera de los dos, gráfico y panel son independientes (ver NQ, operar MNQ). Solo se listan las bolsas suscritas en **Options → Symbol Manage** — [[symbol-manage]]. |
| **Open Qty** | Tamaño de la posición abierta actual en el instrumento del panel. |
| **Open P/L** | P/L no realizado de esa posición. |
| **Daily P/L** | El P/L realizado más abierto del día para el instrumento. |

### Fila de cuenta

| Control | Qué hace |
|---|---|
| **Qty** | Tamaño en contratos de la próxima orden. El valor prellenado y el incremento al ajustarlo provienen de **Options → Settings → Trading Quantity** (por símbolo: **Default Quantity** e **Increment Quantity**). Es un valor predeterminado de conveniencia, no un límite: los topes estrictos corresponden al [[risk-manager|gestor de riesgos]]. |
| **Broker** | Qué conexión ejecuta la orden: una conexión de fuente/bróker en vivo o **SIM** para trading simulado. |
| **Account** | La cuenta bajo esa conexión de bróker (relevante para configuraciones multicuenta y de empresas prop). |

### Ticks diff.

| Control | Qué hace |
|---|---|
| Casilla **Ticks diff.** + número | Modifica los botones **BID**/**ASK**. Desactivada (predeterminado 0): BID compra con límite al mejor bid, ASK vende con límite al mejor ask. Con una diferencia N habilitada: BID coloca el límite de compra N ticks por debajo del mejor bid, ASK coloca el límite de venta N ticks por encima del mejor ask. Úselo para dejar órdenes a una distancia fija detrás del mercado con un clic. |

### Cuadrícula de botones de órdenes

Cada fila tiene un botón de compra (izquierda) y otro de venta (derecha).

| Botón | Orden colocada | Cuándo usarlo |
|---|---|---|
| **MKT** | Orden a mercado | Quiere entrar o salir ahora y acepta el precio actual. |
| **BID / ASK** | Límite al mejor bid (compra) / mejor ask (venta), con el desplazamiento de **Ticks diff.** si está habilitado | Unirse al mejor precio de forma pasiva en lugar de cruzar el diferencial. |
| **LMT** | Límite al precio que usted elija | Compre por debajo del mercado o venda por encima. Colocada en el lado equivocado, se ejecuta inmediatamente como orden a mercado. |
| **STP** | Stop que dispara una orden a mercado | Compre por encima del mercado o venda por debajo: entradas de ruptura y stops de protección. |
| **STP LMT** | Stop-límite | Evita el slippage en el disparo, con el riesgo de no ejecutarse en absoluto. |

### Botones de salida y cancelación

Los cuatro actúan solo sobre el símbolo actualmente seleccionado en el panel.

| Botón | Qué hace |
|---|---|
| **Cancel** | Cancela todas las órdenes activas (pendientes): LMT/STP. Las posiciones abiertas no se tocan. |
| **Flat** | Cierra solo la posición abierta actual. |
| **Cancel and Flat** | Cierra la posición abierta y cancela todas las órdenes activas restantes. |
| **Breakeven** | Mueve el stop al punto de equilibrio: precio de entrada más el margen **Breakeven - Ticks** establecido en **Options → Settings → General → Trading**. 0 = entrada exacta; auméntelo para cubrir comisiones/slippage. |

### Bloque OCO Strategy

El motor de brackets: una salida ejecutada cancela la otra. Recorrido completo: [[oco-strategies]].

| Control | Qué hace |
|---|---|
| Interruptor **OCO Strategy** | Arma los brackets automáticos para las nuevas entradas. |
| **Mode** | **SL/TP** = un stop loss y un objetivo, cada uno definido en ticks o dinero y habilitado individualmente. **MULTI** = estrategias multibracket con nombre para salir escalonadamente. |
| Campos **SL / TP** | Las distancias de stop-loss y take-profit (ticks o dinero) en modo SL/TP. |
| **BE** | Automatización de punto de equilibrio en modo SL/TP (ticks o dinero). |
| **Trail** | Automatización de stop dinámico en modo SL/TP, con los campos de cantidad y desplazamiento del trailing debajo. |
| Icono de engranaje (MULTI) | Abre el editor **Oco Strategy**: nombre la estrategia, añada brackets **Stop**/**Target** (cada uno con una cantidad y un valor **Ticks**/**Money**, añadidos mediante **Add bracket**), mueva opcionalmente el stop al punto de equilibrio cuando se ejecute un objetivo, y luego **Save**. Las estrategias guardadas quedan disponibles en el panel cuando el modo MULTI está activo. |
| Botón de opción **Server / Client** | Dónde reside el bracket. **Server**: gestionado en el servidor del proveedor de la fuente de datos; sobrevive al cierre de la plataforma o a la pérdida de conexión. **Client**: gestionado dentro de DeepCharts; la plataforma debe permanecer abierta y conectada o el OCO no es efectivo. Client existe porque algunos proveedores de fuentes no ofrecen OCO del lado del servidor. |
| **Link pending orders** | Para un take-profit y un stop-loss que ya colocó sin OCO: abre una ventana para seleccionar las dos órdenes pendientes y vincularlas retroactivamente en un par OCO. |

> **Advertencia:** Rithmic no permite OCO del lado del servidor junto con el copy trading. Si ejecuta el [[trade-copier]] en Rithmic, debe usar OCO del lado **Client**, y mantener la plataforma abierta y en línea, o sus brackets no se dispararán. Una única cuenta de Rithmic sin el copiador puede usar Server con normalidad.

### Ajustes relacionados fuera del panel

| Ajuste | Ubicación | Qué hace |
|---|---|---|
| **Breakeven - Ticks** | **Options → Settings → General → Trading** | Margen añadido a la entrada cuando el botón **Breakeven** mueve su stop. |
| **Frequency Limitation** | **Options → Settings → General → Trading** | Máximo de órdenes por segundo más una duración de pausa tras superarlo: protege contra envíos rápidos accidentales. |
| **Default / Increment Quantity** | **Options → Settings → Trading Quantity** | Valor inicial e incremento por símbolo para el campo **Qty**. Cambiar el valor predeterminado no modifica las órdenes activas ni las posiciones abiertas: solo las órdenes futuras. No está confirmado si también se aplica a la entrada de órdenes por clic en el DOM o el gráfico; verifíquelo en una cuenta SIM. |

## Consejos y errores comunes

- **¿Desapareció el panel?** El icono **$** de Trading Enabled se desactivó: oculta automáticamente el panel. Vuelva a armarlo con **Ctrl Alt T**.
- **Un límite se ejecutó instantáneamente a precio de mercado.** Se colocó en el lado equivocado (límite de compra por encima / límite de venta por debajo). La escalera de clic de [[dom-trading-chart]] elige LMT o STP automáticamente según el nivel en el que haga clic, eliminando la decisión por completo.
- **"Flat" frente a "Cancel and Flat".** Flat solo cierra la posición; un stop u objetivo en reposo olvidado sigue activo. Cancel and Flat limpia ambos. Al final de la sesión, verifique en la [[orders-window|Ventana de órdenes]] con el filtro **Submitted** que no queda nada activo.
- **La estrategia MULTI no se ejecuta.** Busque el (!) rojo: la cantidad total de la estrategia debe ser igual al **Qty** del panel. Cambie uno para que coincida con el otro.
- **Los brackets desaparecieron tras cerrar la plataforma.** Eran del lado Client. Solo el OCO del lado Server sobrevive con la plataforma cerrada.
- **Pruebe primero en SIM los cambios de tamaño.** Subir la cantidad predeterminada de 1 a 2 duplica el tamaño — y el riesgo — de cada orden futura en ese símbolo.

## Artículos relacionados

- [[trading-from-chart]]
- [[oco-strategies]]
- [[dom-trading-chart]]
- [[orders-window]]
- [[risk-manager]]
- [[trade-copier]]