---
title: "Super Trend Difference"
slug: "super-trend-difference"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Referencia del indicador Super Trend Difference en DeepCharts: el histograma de distancia entre el precio y la línea Super Trend, la longitud y el multiplicador del ATR, y el estilo del histograma."
keywords: ["diferencia supertrend", "histograma super trend", "oscilador supertrend", "distancia del precio al supertrend", "histograma de momentum de tendencia"]
source_hash: "677775add5851008"
ai_translated: true
source_hash: "677775add5851008"
---
Super Trend Difference traza la distancia entre el precio actual y la línea Super Trend como un histograma en un panel separado. En lugar de decirle solamente en qué lado de la tendencia se encuentra, muestra cuánto se ha alejado el precio de la línea de tendencia: una lectura rápida del momentum y del posible agotamiento.

Utiliza el mismo cálculo basado en ATR que [[super-trend]], por lo que ambos indicadores se complementan de forma natural: Super Trend en el gráfico de precios para la dirección, y Super Trend Difference debajo para la fuerza de esa dirección.

## Qué es

El indicador responde a la pregunta: ¿la tendencia está ganando o perdiendo fuerza? Cada barra del histograma es la diferencia entre el precio y la línea Super Trend. Las barras positivas significan que el precio está por encima de la línea (estado alcista); las barras negativas significan que está por debajo (estado bajista). Las barras crecientes muestran al precio alejándose de la línea de tendencia; las barras que se encogen muestran al precio acercándose de nuevo a ella, a menudo la primera pista de un estancamiento o una reversión antes de que la propia línea Super Trend cambie de lado.

[SCREENSHOT: Un gráfico de velas con Super Trend en el precio y el histograma Super Trend Difference en un panel inferior, mostrando barras verdes positivas encogiéndose hacia cero antes de un cambio de tendencia | dc-es-super-trend-difference-01.png]

## Cuándo usarlo

- Para medir el momentum detrás de una señal de Super Trend: un cambio de lado respaldado por barras de histograma en rápido crecimiento tiene más convicción que uno que apenas supera el cero.
- Para detectar agotamiento temprano: barras que se encogen hacia cero mientras el precio aún sigue la tendencia advierten que el movimiento se está desacelerando.
- Para cronometrar salidas antes del cambio de lado: muchos operadores reducen la posición cuando el histograma se contrae, en lugar de esperar a que Super Trend cambie de lado.
- Para comparar la fuerza de los swings: picos de histograma sucesivamente más bajos durante una tendencia alcista sugieren empujes cada vez más débiles.

## Inicio rápido

1. Abra un gráfico — vea [[first-chart]].
2. Haga clic en el icono de gráfico de barras en la fila de iconos superior izquierda del gráfico para abrir el panel **Indicators**, luego haga clic en **Indicators** para abrir la **Indicator List** completa.
3. Busque **Super Trend Difference** y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje para abrir su configuración.
5. Configuración inicial: mantenga **Length** en 10 y **Multiplier** en 3.00; y si utiliza [[super-trend]] en el mismo gráfico, use valores idénticos en ambos para que el histograma coincida con la línea que ve en el precio.

[SCREENSHOT: Diálogo de configuración de Super Trend Difference mostrando los parámetros generales Length = 10 y Multiplier = 3.00, con la sección Subgraphs mostrando Auto Color +/- y Line Width 4 | dc-es-super-trend-difference-02.png]

## Cómo leerlo

- **El signo** = estado de la tendencia. Histograma positivo: precio por encima de la línea Super Trend. Negativo: por debajo.
- **La altura** = distancia. Barras más altas significan que el precio está más estirado respecto a la línea. Como la línea se basa en el ATR, parte de esa altura es volatilidad: compare frente a barras recientes, no valores absolutos.
- **La pendiente de las barras** es la parte accionable: barras en expansión confirman el momentum a favor de la tendencia; barras en contracción significan que el precio está convergiendo hacia la línea y un cambio de lado se acerca.
- **El cruce de cero** ocurre en el mismo momento en que la línea Super Trend cambia de lado: el histograma no anticipa el cambio en sí, pero su contracción previa a menudo sí lo hace.

## Referencia de configuración

### General

| Configuración | Qué hace |
|---|---|
| **Length** | Define la longitud del período para calcular el Average True Range (ATR) usado en el cálculo del Super Trend. Predeterminado: 10. Valores más altos reducen la sensibilidad a las fluctuaciones de corto plazo; valores más bajos aumentan la capacidad de respuesta. |
| **Multiplier** | Establece el multiplicador del valor del ATR, que determina la distancia de la línea Super Trend respecto al precio. Predeterminado: 3.00. Multiplicadores más altos producen valores de diferencia más grandes en el histograma. |

### Configuración del gráfico

| Configuración | Qué hace |
|---|---|
| **Chart Area** | **Horizontal** muestra el histograma encima o debajo del gráfico principal; **Vertical** lo muestra en un panel vertical separado. |
| **Use Sec. Axis** | Traza en un eje secundario para un escalado independiente. |

### Subgráficos

| Configuración | Qué hace |
|---|---|
| **Color** | Color principal de las barras del histograma cuando la diferencia es positiva (condiciones alcistas). |
| **2° Color** | Color secundario de las barras del histograma cuando la diferencia es negativa (condiciones bajistas). |
| **Subgraph Style** | El predeterminado muestra los datos como un histograma con barras verticales. |
| **Auto Color** | La opción **+/-** asigna colores automáticamente según los valores positivos o negativos. |
| **Line Style** | Predeterminado: Solid, para barras rellenas. |
| **Line Width** | Predeterminado: 4. Barras más anchas aumentan la prominencia; barras más estrechas pueden volverse difíciles de ver en algunos niveles de zoom. |
| **Short Name** | Etiqueta personalizada utilizada para identificar el indicador en la leyenda del gráfico. |

## Consejos y errores comunes

- **Haga coincidir los parámetros con su superposición de Super Trend.** Si el histograma usa un **Length** o **Multiplier** distinto al de la línea Super Trend en su gráfico de precios, los cruces de cero no se alinearán con los cambios visibles y las dos herramientas parecerán estar en desacuerdo.
- **No interprete la altura bruta como fuerza entre instrumentos o sesiones.** El ATR escala con la volatilidad, así que una barra "alta" en un día tranquilo puede ser menor en puntos que una barra modesta en uno volátil. Compare las barras con sus vecinas recientes.
- **La contracción es una advertencia, no una señal.** Las barras que se encogen hacia cero señalan desaceleración; espere sus criterios de entrada/salida en lugar de tratar cada contracción como una reversión.
- Si el panel del histograma está apretado o en la posición equivocada, reorganice las áreas del gráfico — vea [[indicator-layout]].

## Artículos relacionados

- [[super-trend]]
- [[atr]]
- [[macd]]
- [[momentum]]
- [[different-types-of-input]]
- [[indicator-layout]]