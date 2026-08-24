---
title: "Desviación estándar"
slug: "standard-deviation"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Referencia del indicador Desviación estándar (Standard Deviation) en DeepCharts: cómo mide la dispersión del precio respecto a la media, la configuración de Períodos (predeterminado 14) y las opciones de estilo."
keywords: ["desviación estándar", "std dev", "indicador stdev", "dispersión del precio", "medida de volatilidad", "desviacion estandar", "indicador sigma"]
source_hash: "58015f806c14c35c"
ai_translated: true
source_hash: "58015f806c14c35c"
---
El indicador Desviación estándar (Standard Deviation) mide la volatilidad del precio de un activo en relación con su media durante un período determinado. Muestra cuánto se alejan los valores del precio de la media: una desviación estándar elevada refleja mayor volatilidad (precios alejándose de la media), mientras que un valor reducido muestra menor volatilidad (precios manteniéndose más cerca de la media).

Es el motor estadístico detrás de varias otras herramientas: [[bollinger-bands]] coloca sus bandas a un múltiplo de este valor respecto a la media, y [[vwap-envelopes]] puede usarlo para construir bandas de desviación alrededor del VWAP; por lo tanto, leerlo directamente le da el número de dispersión bruto que esos indicadores reempaquetan.

## Qué es

La Desviación estándar responde a la pregunta: ¿cuán dispersos han estado los precios alrededor de su propia media últimamente? Estadísticamente, es la raíz cuadrada de la distancia cuadrática media entre cada precio y la media de la ventana de análisis. El resultado se traza como una sola línea en un panel debajo del gráfico de precios: siempre positiva, subiendo cuando el precio se dispersa y bajando cuando se agrupa.

[SCREENSHOT: Gráfico de precios con el indicador Desviación estándar en un panel inferior, la línea repuntando durante una ruptura rápida y decayendo hacia su base durante una consolidación lateral | dc-es-standard-deviation-01.png]

## Cuándo usarlo

- Para medir la volatilidad directamente, sin la superposición direccional de un indicador de bandas o canales.
- Para detectar contracciones de volatilidad: una desviación estándar en descenso persistente suele preceder a un movimiento de expansión.
- Para comparar la intensidad de movimientos sucesivos en el mismo instrumento y marco temporal.
- Para verificar los indicadores de bandas: cuando las Bandas de Bollinger parecen inusualmente anchas o estrechas, esta línea muestra el dato de entrada bruto que lo causa.

## Inicio rápido

1. Abra un gráfico de precios — vea [[first-chart]].
2. Haga clic en el botón verde **Indicators** (o presione **Ctrl I**) para abrir la **Indicator List** (lista de indicadores).
3. Busque **Standard Deviation** y haga clic en **+** para añadirlo. Aparece en su propio panel debajo del precio.
4. Haga clic en el icono de configuración del indicador para abrir su ventana de configuración.
5. El valor predeterminado de 14 períodos es un punto de partida equilibrado: lo suficientemente largo para ser estable y lo suficientemente corto para reaccionar dentro de una sesión.

[SCREENSHOT: Ventana de configuración de Desviación estándar abierta mostrando el campo Periods con valor 14 y la sección Subgraphs con las opciones Std. Dev Color, Subgraph Style, Line Style y Line Width | dc-es-standard-deviation-02.png]

## Cómo leerlo

- **El nivel es relativo.** La desviación estándar se expresa en las unidades de precio del instrumento, así que júzguela frente a su propio historial reciente en lugar de un umbral fijo.
- **Línea ascendente**: el precio se está dispersando de su media; hay en curso un tramo de tendencia, una ruptura o una sacudida volátil.
- **Línea descendente**: el precio se está comprimiendo alrededor de su media. Una compresión prolongada es la precondición clásica de una expansión de rango.
- **Sin dirección.** Al igual que [[atr]], la desviación estándar es ciega a la dirección; un desplome y una subida vertical se ven idénticos en esta línea. Combínela con una lectura de tendencia o estructura para obtener la dirección.
- **Los picos decaen lentamente.** Una sola barra enorme infla el valor durante toda la ventana de análisis; espere una meseta y luego un escalón a la baja cuando esa barra salga de la ventana.

## Referencia de configuración

Al hacer clic en el icono de configuración del indicador se abre la ventana de configuración.

### Parámetros

| Configuración | Qué hace | Predeterminado |
|---|---|---|
| **Periods** | El número de períodos utilizados para el cálculo de la desviación estándar. Menos períodos hacen la línea más nerviosa pero actual; más períodos la suavizan hasta convertirla en un medidor de régimen. | 14 |

### Subgráficos

| Configuración | Qué hace | Predeterminado |
|---|---|---|
| **Std. Dev Color** | Establece el color de la línea de desviación estándar. | — |
| **Secondary Color** | Color secundario opcional para la línea. | — |
| **Subgraph Style** | Elige el estilo de visualización de la serie. | — |
| **Line Style** | Define el estilo de la línea. | — |
| **Line Width** | Define el ancho de la línea del indicador. | 2 |
| **Use Secondary Axis** | Muestra el indicador en un eje secundario. | — |

## Consejos y errores comunes

- **No trate una lectura alta como "sobrecompra".** La desviación estándar mide dispersión, no extensión en una dirección: un valor alto puede acompañar el inicio, la mitad o el final de un movimiento.
- **Ajuste el período de análisis a su horizonte de operación.** Un valor de 14 períodos en un gráfico de 1 minuto describe el último cuarto de hora; la misma configuración en un gráfico diario describe tres semanas. El mismo número, un significado muy distinto.
- **Vigile los artefactos de la ventana de análisis.** Las caídas repentinas de la línea suelen significar que una barra atípica antigua salió de la ventana, no que el mercado acabe de calmarse.
- **Úsela junto con el ATR, no en su lugar.** [[atr]] mide el rango de la barra incluyendo huecos; la desviación estándar mide la dispersión del precio de entrada alrededor de su media. Los mercados tranquilos con huecos grandes pueden mostrar desviación estándar baja pero ATR alto: ver ambos evita puntos ciegos.

## Artículos relacionados

- [[bollinger-bands]]
- [[atr]]
- [[vwap-envelopes]]
- [[keltner-channel]]
- [[different-types-of-input]]
- [[indicator-layout]]