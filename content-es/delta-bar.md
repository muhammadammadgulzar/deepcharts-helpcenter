---
title: "Delta Bar"
slug: "delta-bar"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Traza el delta de cada vela (compra agresiva menos venta agresiva) como barras debajo del gráfico para que pueda comparar la presión del mercado barra a barra."
keywords: ["delta bar", "indicador de delta", "delta por barra", "delta de compra y venta", "histograma de delta", "vela de delta", "delta por vela", "delta de flujo de órdenes"]
source_hash: "a537a166f692a20f"
ai_translated: true
source_hash: "a537a166f692a20f"
---
Delta Bar muestra el delta de cada vela (la diferencia entre la actividad de **compra a mercado** y **venta a mercado**) como barras al pie de su gráfico de precios. Cada barra le indica qué lado fue más agresivo durante esa vela: los compradores a mercado levantando la oferta de venta o los vendedores a mercado golpeando el bid.

Es la forma más directa de comparar la agresión barra a barra, y el acompañante natural de la lectura de velas: la vela muestra lo que hizo el precio, la barra de delta muestra quién empujaba.

## Qué es

Delta Bar es un medidor de agresión por vela dibujado en su propio panel bajo el gráfico. Un delta positivo significa más compra agresiva que venta en esa vela; un delta negativo significa lo contrario. Con las opciones de subgráfico de estilo vela, cada barra de delta también puede reflejar el rango que el delta cubrió dentro de la barra: no solo dónde cerró, sino los extremos que alcanzó por el camino.

Pruébelo en vivo a continuación: pase el cursor por cualquier barra de delta para ver qué lado empujaba en esa vela, y observe cómo el total acumulado lleva la cuenta.

[WIDGET: delta-lab]

## Cuándo usarlo

- Quiere confirmar un movimiento: un rally con delta positivo creciente está siendo impulsado por compra agresiva real.
- Busca divergencias: el precio marca un nuevo máximo pero el delta se mantiene negativo o se reduce: al empuje le falta participación agresiva.
- Estudia la absorción: un delta fuertemente negativo mientras el precio se niega a caer significa que los compradores pasivos están absorbiendo la venta.
- Quiere la historia de la agresión de un vistazo sin abrir un footprint completo como [[deep-print]].

## Inicio rápido

1. Abra la **Indicator List** (lista de indicadores) en su gráfico.
2. Busque **Delta Bar** y haga clic en **+** para añadirlo.
3. Haga clic en el icono de **Settings** (configuración) junto al indicador.
4. En la configuración de datos, mantenga la entrada en **Volume** (el volumen total negociado en cada nivel de precio) hasta que tenga una razón para cambiar (consulte [[different-types-of-input]]).
5. Deje **Filter Min** y **Filter Max** en sus valores neutros para que se cuente todo el delta (un **Filter Max** de **0** no aplica filtro máximo).
6. En **Subgraphs**, elija un estilo (**Candlestick**, **OHLC** o **CandleBody**) y establezca los colores alcista/bajista para que coincidan con el esquema de su gráfico.

[SCREENSHOT: Diálogo de configuración de Delta Bar mostrando la sección de configuración de datos con las opciones de entrada (Volume, Order, Trades, Aggregate Volume, Aggregate Trades) y la sección Subgraphs con el menú desplegable de estilo abierto en Candlestick, OHLC, CandleBody | dc-es-delta-bar-01.png]

## Cómo leerlo

- **Signo y tamaño.** Una barra de delta positiva grande significa que los compradores dominaron agresivamente la vela; una barra negativa grande, que lo hicieron los vendedores. Un delta pequeño en una vela grande significa que el movimiento ocurrió con poca agresión neta: a menudo liquidez fina más que convicción.
- **Delta frente a dirección del precio.** Las señales más fuertes provienen del desacuerdo. Una vela alcista con delta negativo significa que el precio subió mientras los vendedores eran más agresivos: los compradores pasivos los absorbieron, una señal fuerte. Una vela bajista con delta positivo es la imagen especular.
- **Rango de delta intrabarra.** Con el estilo **Candlestick** u **OHLC**, la barra de delta muestra los extremos que el delta alcanzó dentro de la vela además de dónde cerró. Una barra de delta que se disparó fuertemente en positivo pero cerró casi plana revela compradores que lo intentaron y fracasaron.
- **Las secuencias importan más que las barras individuales.** Barras de delta positivo que se reducen al llegar a una resistencia muestran una presión compradora que se desvanece antes de que el precio lo confirme.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Configuración de datos (Data Setting)

| Configuración | Qué hace |
|---|---|
| **Volume** | Calcula el delta a partir del volumen total negociado en cada nivel de precio: la lectura estándar de la intensidad de trading. |
| **Order** | Usa datos de órdenes, como la cantidad de órdenes de compra y venta en cada nivel de precio, para evaluar la presión de las órdenes y el comportamiento de los participantes. |
| **Trades** | Usa el número de operaciones ejecutadas en cada nivel de precio, independientemente de su tamaño. |
| **Aggregate Volume** | Usa el volumen agregado: órdenes pequeñas colocadas en un breve intervalo de tiempo entre sí y atribuibles a una única orden mayor, recombinadas. |
| **Aggregate Trades** | Usa las operaciones agregadas: la misma reconstrucción aplicada al recuento de operaciones. Consulte [[different-types-of-input]]. |
| **Filter Min** | Filtro mínimo del indicador: solo se muestran los valores de delta por encima de este umbral. |
| **Filter Max** | Filtro máximo del indicador. Dejado en **0**, no se aplica ningún filtro máximo. |

### Subgráficos (Subgraphs)

| Configuración | Qué hace |
|---|---|
| **Colors** | Esquema de colores de las barras de delta, diferenciado para delta positivo (compra) frente a negativo (venta). |
| **Subgraph Style** | Formato de dibujo: **Candlestick**, **OHLC** o **CandleBody**. |
| **Line Width** | Grosor de las barras, para la visibilidad. |

## Consejos y errores comunes

- **El delta es agresión, no predicción.** Un delta positivo contra un muro de vendedores pasivos puede preceder a una caída: lea siempre el delta frente a lo que el precio hizo realmente.
- **Iguale el tipo de entrada antes de comparar gráficos.** Las entradas Volume, Trades y Aggregate producen valores de delta genuinamente diferentes en las mismas velas.
- **Use los filtros deliberadamente.** Un **Filter Min** que aísla las operaciones grandes convierte Delta Bar en una herramienta de "delta de grandes jugadores": útil, pero ya no es la imagen completa.
- **Vigile el contexto acumulado.** El delta por barra cambia de signo constantemente; combínelo con [[delta-cumulative-candlestick]] o [[delta-cumulative-histogram]] para ver el total acumulado.

## Artículos relacionados

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-cumulative-candlestick]]
- [[delta-cumulative-histogram]]
- [[delta-highlight]]