---
title: "Cuentas de trading y simulación"
slug: "simulation-accounts"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Cree cuentas de simulación, opérelas desde el panel de trading y cambie a una cuenta real de bróker cuando esté listo."
keywords: ["cuenta sim", "cuenta de simulación", "paper trading", "cuenta demo", "cuenta de práctica", "bróker SIM", "añadir cuenta sim", "cuenta de trading"]
source_hash: "e9652caf67b71078"
ai_translated: true
source_hash: "e9652caf67b71078"
---
Al terminar tendrá una cuenta de simulación con el saldo inicial que usted eligió y un panel de trading configurado para operarla.

DeepCharts incluye un bróker **SIM** integrado que ejecuta sus órdenes contra los datos de mercado de sus gráficos sin arriesgar dinero real. Solo necesita una fuente de datos para los precios: no se requiere una cuenta de bróker para practicar. Es la forma más segura de aprender las herramientas de órdenes, y también es como los operadores prueban estrategias antes de pasar a real.

## Antes de empezar

- DeepCharts instalado y activado — [[install-deepcharts]]
- Una fuente de datos conectada — [[connect-data-feed]] o la [[free-delayed-data-feed|fuente de datos gratuita retrasada 15 minutos]]
- Un gráfico abierto — [[first-chart]]

## Pasos

### Crear o administrar una cuenta de simulación

1. Haga clic en **Options → Settings** en la barra principal. Se abrirá la ventana **General Settings**.

2. Seleccione la pestaña **Sim Account**. Las cuentas de simulación existentes se listan con su **Name** y **Balance**.

[SCREENSHOT: La ventana General Settings en la pestaña Sim Account mostrando la tabla de cuentas con las columnas Name y Balance, una fila de cuenta SIM, el icono de papelera por fila y el botón Add | dc-es-simulation-accounts-01.png]

3. Haga clic en **Add**. En el diálogo **Add Sim Account** introduzca un **Name** y un **Balance** inicial (predeterminado 10000), y luego haga clic en **Add**.

[SCREENSHOT: El diálogo Add Sim Account con el campo Name rellenado y el campo Balance mostrando el predeterminado 10000, con los botones Cancel y Add visibles | dc-es-simulation-accounts-02.png]

4. Haga clic en **Save Settings** en la parte inferior de la ventana.

> **Nota:** Puede crear varias cuentas de simulación, por ejemplo una por cada estrategia que esté probando. La divisa del saldo sigue la configuración regional de Windows, por eso algunos usuarios ven Rs, € o $ en el mismo número predeterminado.

### Si quiere eliminar una cuenta de simulación

Haga clic en el icono de papelera en la fila de la cuenta y luego en **Save Settings**.

> **Advertencia:** Eliminar una cuenta de simulación la quita de la lista de cuentas del panel de trading. [CONFIRM: whether a deleted sim account's trade history remains available in Signal Performance / reports]

### Operar con una cuenta de simulación

1. En un gráfico abierto, habilite el interruptor **Trading panel** en la barra inferior del gráfico. El panel de trading se abrirá en el lado derecho del gráfico. (También puede hacer clic derecho en el gráfico y elegir **Show Trading Panel**.)

[SCREENSHOT: Un gráfico de precios con el interruptor Trading panel de la barra inferior resaltado y el panel de trading abierto en el lado derecho | dc-es-simulation-accounts-03.png]

2. En el panel de trading, establezca **Broker** en **SIM**.

3. Elija su cuenta de simulación en el menú desplegable **Account**. El panel de trading interactivo de abajo muestra lo que obtiene: pase el cursor sobre cualquier botón para ver qué hace, y haga clic en la posición SIM para observar el P/L en vivo y cerrarla.

[WIDGET: trading-panel-mock]

4. Coloque una orden de prueba: por ejemplo, establezca la cantidad en 1 y haga clic en **BUY MKT**. [[trading-from-chart]] recorre cada tipo de orden.

### Si quiere empezar de nuevo con un saldo fresco

Añada una nueva cuenta de simulación y cambie el panel de trading a ella, o elimine y vuelva a crear la anterior. [CONFIRM: whether an existing sim account's balance can be reset directly without re-creating it]

## Cambiar a una cuenta real de bróker

Cuando tenga credenciales de un bróker o de una empresa prop, la misma conexión que entrega sus datos de mercado también transporta sus órdenes:

1. Cree la conexión de la fuente de datos con las credenciales de su bróker — [[connect-data-feed]].
2. Compruebe en **Options → Symbol Manage** que sus bolsas están asignadas a esa conexión — [[symbol-manage]].
3. Conéctese, abra un gráfico y abra el panel de trading.
4. Establezca **Broker** en su conexión de bróker y elija la cuenta.

Todo lo demás del panel funciona exactamente igual que en SIM: consulte [[trading-panel-reference]] para cada campo.

## Verifique que funcionó

Con **Broker** = SIM y su cuenta seleccionada, coloque una orden a mercado de un contrato: **Open Qty** cambia a 1 y **Open P/L** empieza a moverse con el mercado. La orden también aparece en la [[orders-window]]. Cierre la posición con **Cancel and Flat** cuando termine.

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| El menú desplegable Account está vacío | La cuenta no se guardó: vuelva a añadirla en **Options → Settings → Sim Account** y haga clic en **Save Settings** |
| No hay panel de trading en el gráfico | Habilite el interruptor **Trading panel** en la barra inferior del gráfico |
| Las órdenes se colocan pero nada se ejecuta / precio congelado | El gráfico no tiene datos en movimiento — [[feed-connected-chart-not-moving]] |
| El saldo muestra un símbolo de divisa inesperado | La divisa sigue la configuración regional de Windows: es solo cosmético |

## Artículos relacionados

- [[trading-from-chart]]
- [[trading-panel-reference]]
- [[orders-window]]
- [[portfolio-wallet]]
- [[risk-manager]]
- [[quick-start-first-trade]]