---
title: "Abra su primer gráfico"
slug: "first-chart"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Abra un nuevo gráfico de precios, elija un instrumento y comprenda qué hace el gráfico mientras se carga."
keywords: ["abrir gráfico", "nuevo gráfico", "gráfico de precios", "seleccionar instrumento", "construyendo gráfico", "el gráfico no se abre", "nuevo gráfico de precios"]
source_hash: "a5072e958eca0e50"
ai_translated: true
source_hash: "a5072e958eca0e50"
---
Al terminar tendrá un gráfico de precios en vivo abierto, actualizándose y ajustado al marco temporal que desee.

Abrir un gráfico en DeepCharts toma dos clics, pero la primera vez que lo hace hay algunas cosas que vale la pena entender: de dónde proviene la lista de instrumentos, por qué el gráfico tarda unos segundos en construirse y qué controlan los tres menús desplegables de la barra de título del gráfico.

## Antes de empezar

- DeepCharts instalado y activado — [[install-deepcharts]]
- Una fuente de datos conectada — [[connect-data-feed]], o la [[free-delayed-data-feed|fuente gratuita con retraso de 15 minutos]] si aún no tiene credenciales. (Los gráficos también funcionan con datos grabados mediante [[replay-data]].)
- Las bolsas en las que opera asignadas a su fuente — el asistente de inicio normalmente lo hace por usted; [[symbol-manage]] lo cubre en detalle

## Pasos

1. Compruebe que su fuente está conectada: el selector de fuente en la parte superior derecha de la barra principal muestra el nombre de su conexión con un **punto verde**. Si dice **Select a connection**, abra el menú desplegable y haga clic en su conexión guardada.

[SCREENSHOT: El selector de fuente de la barra principal en la parte superior derecha mostrando el nombre de una fuente conectada con un punto de estado verde, con el menú desplegable abierto listando las conexiones guardadas y el elemento Feed Settings | dc-es-first-chart-01.png]

2. Haga clic en **New → Price Chart** en la barra principal.

[SCREENSHOT: El menú New abierto en la barra principal con Price Chart resaltado (otros elementos visibles: Adv. Time And Sales, Book, Correlation Viewer, Profile Chart, Scanner) | dc-es-first-chart-02.png]

3. Se abrirá el diálogo **Select Instrument**. Elija una bolsa en la barra lateral izquierda (por ejemplo **CME**), o use el cuadro **Type to filter** para buscar. Haga clic en su símbolo — por ejemplo **NQ** (MINI NASDAQ) — y luego haga clic en **Select**.

[SCREENSHOT: El diálogo Select Instrument con la bolsa CME seleccionada en la barra lateral, la lista de símbolos mostrando NQ MINI NASDAQ resaltado, y el cuadro Type to filter y el botón Select visibles | dc-es-first-chart-03.png]

> **Nota:** El diálogo solo lista las bolsas suscritas en **Options → Symbol Manage**. Si la lista está vacía o falta su bolsa, corríjalo allí — consulte [[symbol-manage]].

4. Espere mientras el gráfico se construye. Un indicador giratorio de **Building chart** se muestra durante unos segundos, y aparece una insignia de estado en la barra principal indicándole de dónde provienen los datos: **LDT** significa que se están cargando desde su disco, **DWT** significa que se están descargando del servidor de la fuente.

[SCREENSHOT: Una nueva ventana de gráfico mostrando el indicador giratorio Building chart, con la insignia de estado LDT/DWT visible en la barra principal | dc-es-first-chart-04.png]

5. El gráfico se abre. La barra de título tiene tres menús desplegables que controlan lo que está viendo:

| Control | Ejemplo | Qué hace |
|---|---|---|
| Símbolo | **NQ-202609** | Abre Select Instrument para cambiar el gráfico a otro contrato |
| Rango de carga de datos | **10D - BT** | Cuánto historial se carga — "10 Days, Based on Tick" (BM = Based on Minute) |
| Marco temporal | **5 Minute** | El tipo y tamaño de barra que dibuja el gráfico |

[SCREENSHOT: Un gráfico de precios terminado con los tres menús desplegables de la barra de título (símbolo, rango 10D - BT, marco temporal 5 Minute) anotados | dc-es-first-chart-05.png]

### Si quiere un marco temporal diferente

Haga clic en el menú desplegable de marco temporal. Cada tipo de barra tiene su propia fila con preajustes rápidos: **Second**, **Minute**, **Time** (diario/semanal/mensual), **Vol Bars**, **Range**, **Volume**, **Trade**, **Renko**, **P/F** y **Delta**. Haga clic en un preajuste para reconstruir el gráfico con él.

[SCREENSHOT: El menú desplegable de marco temporal abierto mostrando todas las filas de tipos de barra (Second, Minute, Time, Vol Bars, Range, Volume, Trade, Renko, P/F, Delta) con sus preajustes rápidos | dc-es-first-chart-06.png]

### Si quiere más historial en el gráfico

Haga clic en el menú desplegable de rango de carga de datos. Los rangos cortos cargan datos de tick (5/10/15/30/60 días); los rangos largos cargan datos de minuto (3/6 meses, 1/2/5/10 años); **Custom** abre un diálogo donde establece cualquier número de días más una casilla **Based on minute**. El valor predeterminado es 5 días.

> **Advertencia:** Cargar muchos más días hace el gráfico más pesado: más RAM y CPU, carga más lenta. Aumente gradualmente y prefiera datos basados en minuto para rangos de varios meses. Cada indicador solo puede calcular sobre los días que el gráfico tiene cargados.

## Verifique que funcionó

Las velas se dibujan y el último precio se mueve. La lectura en la esquina superior izquierda muestra los valores O/H/L/C cuando pasa el cursor sobre una barra. Si está en la fuente gratuita con retraso, un aviso naranja indica que los datos van con retraso — eso es normal, los precios se actualizan con un desfase de 15 minutos (consulte [[free-delayed-data-feed]]).

¿No está seguro de qué significan esos valores O/H/L/C en una vela? Pase el cursor sobre la anatomía de abajo — cada zona se explica por sí misma, y puede alternarla entre alcista y bajista.

[WIDGET: candle-anatomy]

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| El diálogo Select Instrument está vacío | No hay nada suscrito en Symbol Manage — [[symbol-manage]] |
| El gráfico se abre pero el precio no se mueve | [[feed-connected-chart-not-moving]] |
| Aparece "Connection lost" al abrir el gráfico | [[connection-lost-opening-chart]] |
| El gráfico se queda en Building chart / carga muy lento | [[data-delayed-lagging]] |

## Artículos relacionados

- [[chart-window]]
- [[connect-data-feed]]
- [[symbol-manage]]
- [[free-delayed-data-feed]]
- [[chart-display-options]]
- [[quick-chart-templates]]