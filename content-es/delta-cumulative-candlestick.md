---
title: "Delta Cumulative Candlestick"
slug: "delta-cumulative-candlestick"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Traza el delta acumulado como velas para que pueda leer el total acumulado de agresión compradora frente a vendedora con todo el detalle de apertura, máximo, mínimo y cierre."
keywords: ["delta cumulative candlestick", "delta acumulado", "CVD", "delta de volumen acumulado", "velas de delta", "velas CVD", "divergencia de delta acumulado"]
source_hash: "fd84c146b2eed0ae"
ai_translated: true
source_hash: "fd84c146b2eed0ae"
---
Delta Cumulative Candlestick traza la suma acumulada del delta de cada vela (la diferencia entre las compras a mercado agresivas y las ventas a mercado) como su propia serie de velas debajo del gráfico. Mientras que una herramienta de delta por barra muestra la agresión de cada vela de forma aislada, este indicador muestra el marcador acumulado de toda la batalla, de modo que puede ver qué lado ha sido más agresivo a lo largo del tiempo.

Como el delta acumulado se dibuja como velas y no como una sola línea, también ve su apertura, máximo, mínimo y cierre por barra: el camino que tomó la agresión dentro de cada vela.

## Qué es

El indicador visualiza la suma del delta acumulado de cada vela. Cada barra nueva añade su delta al total acumulado: una compra agresiva sostenida inclina la serie hacia arriba, una venta sostenida la inclina hacia abajo. Los traders lo llaman comúnmente CVD (delta de volumen acumulado). Su uso principal es comparar la forma de la serie de delta con la forma del precio: los acuerdos confirman el movimiento, las divergencias lo advierten.

Explore el total acumulado a continuación: pase el cursor por las barras para ver cómo el delta de cada vela se añade a la línea acumulada.

[WIDGET: delta-lab]

## Cuándo usarlo

- Quiere confirmación de tendencia: el precio marcando máximos crecientes mientras el delta acumulado también marca máximos crecientes muestra participación agresiva real.
- Caza divergencias: el precio rompe a un nuevo máximo pero el delta acumulado no: a la ruptura le faltan compradores agresivos.
- Estudia la absorción: el delta acumulado cae con fuerza mientras el precio aguanta: los compradores pasivos están absorbiendo la agresión vendedora.
- Quiere detalle intrabarra del propio recorrido del delta, algo que una versión de línea simple no puede mostrar.

## Inicio rápido

1. Abra la **Indicator List** (lista de indicadores) en su gráfico.
2. Busque **Delta Cumulative Candlestick** y haga clic en **+** para añadirlo.
3. Haga clic en el icono de **Settings** (configuración) junto al indicador.
4. Establezca **Input Data** en **Volumes** (delta a partir de las cantidades de contratos/acciones negociadas), la opción estándar (consulte [[different-types-of-input]]).
5. Habilite **Reset to Start Session** para que la acumulación se reinicie en cada sesión de trading y la lectura de hoy no quede contaminada por el total de ayer.
6. En **Subgraphs**, elija el estilo **Candlestick** y los colores que coincidan con su gráfico, y luego aplique.

[SCREENSHOT: Diálogo de configuración de Delta Cumulative Candlestick mostrando el menú desplegable Input Data abierto con las opciones Volumes, Order y Aggregates Trades, además de la configuración de Filter Min, Filter Max, Reset to Start Session, Average y Zero Line | dc-es-delta-cumulative-candlestick-01.png]

## Cómo leerlo

- **La línea cero es el punto de equilibrio.** Por encima de ella, lidera la agresión compradora acumulada; por debajo, la vendedora. Con el reinicio de sesión habilitado, la línea cero se lee como "quién ha ganado la sesión hasta ahora".
- **Confirmación:** la tendencia del precio y la tendencia del delta acumulado moviéndose juntas es el estado saludable: la agresión está produciendo resultado.
- **Divergencia:** precio al alza con delta acumulado plano o a la baja significa que el rally se sostiene sobre demanda pasiva u oferta fina, no sobre compra agresiva. Suele preceder a estancamientos, aunque las divergencias pueden persistir en tendencias fuertes: trátelas como precaución, no como señal por sí mismas.
- **Absorción:** un delta acumulado que cae bruscamente mientras el precio apenas se mueve significa que los vendedores agresivos están siendo absorbidos por compradores pasivos. Consulte [[understanding-icebergs-absorption]].
- **La línea de media** suaviza el delta acumulado y le ayuda a leer su tendencia con claridad; sus bandas de desviación añaden una envolvente de volatilidad alrededor del recorrido del delta.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Input Data** | Base de datos para el cálculo: **Volumes** (las cantidades de contratos/acciones negociadas), **Order** (datos de órdenes, como la cantidad de órdenes de compra y venta) o **Aggregates Trades** (el número de intercambios o transacciones ejecutadas). Las operaciones indican con qué frecuencia se negocia un instrumento; los volúmenes, cuánto. Consulte [[different-types-of-input]]. |
| **Filter Min** | Solo se cuentan las contribuciones al delta acumulado por encima de este umbral. |
| **Filter Max** | Filtro máximo. Dejado en **0**, no se aplica ningún filtro máximo. |
| **Reset to Start Session** | Reinicia el cálculo del delta acumulado al comienzo de cada sesión de trading en lugar de acumular indefinidamente. |
| **Average** | Añade una media de suavizado a la línea del delta acumulado, lo que ayuda a identificar su tendencia con más claridad. |
| **Zero Line** | La línea divisoria entre el delta acumulado positivo (más agresión compradora) y el negativo (más agresión vendedora). |

### Subgráficos (Subgraphs)

| Configuración | Qué hace |
|---|---|
| **Cumulative Delta** | Colores, estilo de subgráfico (**Candlestick**, **OHLC** o **CandleBody**) y grosor de línea de la serie de delta acumulado. |
| **Average** | Color, estilo de línea, grosor de línea y configuración de desviaciones: las desviaciones dibujan bandas de volatilidad alrededor de la media. |

## Consejos y errores comunes

- **Decida conscientemente sobre el reinicio de sesión.** Con el reinicio habilitado compara la agresión intradía; deshabilitado, sigue un total de más largo recorrido cuyo nivel absoluto depende de cuándo empezó la acumulación. Mezclar las dos lecturas lleva a conclusiones erróneas.
- **Las divergencias son contexto, no disparadores.** Las tendencias fuertes pueden ignorar varias divergencias de CVD seguidas. Espere la confirmación del precio.
- **Compare cosas comparables.** El delta acumulado construido a partir de **Volumes** y de **Aggregates Trades** puede divergir entre sí: elija una entrada y manténgala dentro de un mismo análisis.
- **Use las mechas de las velas.** Una vela de delta acumulado con una mecha inferior larga muestra agresión vendedora que se recuperó dentro de la misma barra: información que un trazado de línea desecha.

## Artículos relacionados

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-cumulative-histogram]]
- [[delta-bar]]
- [[deep-delta]]