---
title: "MACD"
slug: "macd"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Qué muestran la línea MACD, la línea de señal y el histograma, cómo leer cruces y divergencias, y cada configuración del MACD en DeepCharts."
keywords: ["convergencia divergencia de medias móviles", "histograma macd", "línea de señal macd", "cruce macd", "divergencia macd", "mcad"]
source_hash: "9a84d1b50cebabc9"
ai_translated: true
source_hash: "9a84d1b50cebabc9"
---
El MACD (Moving Average Convergence Divergence) convierte la relación entre dos medias móviles exponenciales en una visualización compacta de momentum: una línea MACD, una línea de señal y un histograma. Desarrollado por Gerald Appel en los años setenta, sigue siendo uno de los indicadores más utilizados en el análisis técnico.

Esta referencia cubre cómo añadir el MACD a un gráfico de DeepCharts, cómo leer sus tres componentes y cada opción de su diálogo de configuración.

## Qué es

El MACD responde a una pregunta: ¿el momentum a corto plazo se está fortaleciendo o debilitando respecto a la tendencia de más largo plazo? Compara una media móvil exponencial rápida (12 periodos por defecto) con una lenta (26 periodos por defecto). La línea MACD sigue la distancia entre las dos medias, la línea de señal es una compañera suavizada de la línea MACD, y el histograma muestra la brecha entre ambas: una lectura visual rápida del momentum en formación o en desvanecimiento.

Como está construido íntegramente con medias móviles, el MACD es un indicador retrasado: confirma los cambios de momentum en lugar de predecirlos.

## Cuándo usarlo

- Quiere un solo panel que muestre a la vez la dirección de la tendencia y la fuerza del momentum.
- Necesita confirmación antes de actuar sobre un nivel de precio o un patrón: un cruce del MACD en la misma dirección añade peso.
- Está atento a divergencias: el precio marcando un nuevo extremo mientras el momentum no lo hace.
- Quiere una definición objetiva de "el momentum giró" (un cruce de líneas) en lugar de estimarlo a ojo con las velas.

## Inicio rápido

1. Abra un gráfico y pulse **Ctrl I**, o haga clic en el icono de gráfico de barras en la barra de herramientas del gráfico y luego en **Indicators**, para abrir la **Indicator List**.
2. Escriba "MACD" en el cuadro de búsqueda y haga clic en **+** junto al indicador. El MACD se representa en su propia área de gráfico debajo de las barras de precio (consulte [[indicator-layout]] para moverlo o redimensionarlo).
3. Haga clic en el icono de engranaje en la fila del indicador para abrir su configuración.
4. Para una primera configuración, mantenga los valores predeterminados: **Fast EMA Period** 12, **Slow EMA Period** 26 e **Input Data** en Close. Puede probar esas elecciones en el MACD en vivo a continuación: arrastre los deslizadores rápido, lento y de señal y observe cómo responden el histograma y el recuento de cruces.

[WIDGET: macd-lab]

## Cómo leerlo

- **Línea de cero.** Un MACD por encima de cero significa que la media rápida está por encima de la lenta: el momentum está del lado alcista. Por debajo de cero, del lado bajista.
- **Cruces.** La línea MACD cruzando por encima de la línea de señal marca que el momentum gira al alza; cruzando por debajo, que gira a la baja. Los cruces que ocurren lejos de la línea de cero tienen más peso que los que se producen justo sobre ella.
- **Histograma.** Cada barra es la distancia entre la línea MACD y la de señal. Barras que se encogen significan que el movimiento está perdiendo momentum, y a menudo preceden a un cruce por unas pocas barras.
- **Divergencia.** El precio marca un nuevo máximo mientras el MACD marca un máximo más bajo (o la imagen especular en los mínimos): el movimiento avanza con menos momentum y es más vulnerable a una reversión.

[SCREENSHOT: Primer plano del área de gráfico del MACD mostrando el histograma encogiéndose hasta un cruce de la línea de señal, con la barra del cruce resaltada | dc-es-macd-01.png]

## Referencia de configuración

Abra el diálogo desde el icono de engranaje en la fila del indicador en el panel **Indicators**.

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Fast EMA Period** | Longitud de la media móvil rápida. Predeterminado: 12. Redúzcala para señales más tempranas pero más ruidosas. |
| **Slow EMA Period** | Longitud de la media móvil lenta. Predeterminado: 26. Auméntela para centrarse en oscilaciones más largas. |
| **Input Data** | La serie de datos que alimenta el cálculo: Close, Open, High, Low o Volume. Close es la opción estándar; consulte [[different-types-of-input]] para saber cuándo tienen sentido las demás. |
| **Smooth** | Suavizado aplicado a la línea MACD. Mantenga el valor predeterminado a menos que la línea sea demasiado irregular para leerla en marcos temporales rápidos. |

[CONFIRM: whether the signal-line period is configurable in this dialog and what its default value is]

### Subgráfico

| Configuración | Qué hace |
|---|---|
| **Histogram color** | Color de las barras del histograma. |
| **Signal color** | Color de la línea de señal. |
| **MACD color** | Color de la línea MACD. |
| **Secondary color** | Color adicional opcional para la visualización del indicador. |
| **Subgraph style** | Cómo se dibujan las series en el área del gráfico. |
| **Line style** | Estilo de representación de las líneas MACD y de señal. |
| **Line width** | Grosor de las líneas. |
| **Use secondary axis** | Traza el indicador contra un eje de valores secundario. |

[SCREENSHOT: El diálogo de configuración del MACD abierto en la sección Parameters, mostrando Fast EMA Period 12, Slow EMA Period 26, el menú desplegable Input Data y la opción Smooth | dc-es-macd-02.png]

## Consejos y errores comunes

- **El MACD se retrasa por diseño.** Está construido con medias móviles, así que úselo para confirmar un movimiento que ya tiene motivos para esperar, no para predecirlo.
- **El mercado lateral mata los cruces.** En un mercado en rango, el MACD se pega a la línea de cero y da señales falsas. Filtre tomando solo cruces en el lado de cero de la tendencia, o combínelo con un filtro de tendencia de [[moving-average]].
- **Un giro del histograma no es un cruce.** El histograma cambia de dirección antes de que las líneas se crucen realmente: trátelo como una alerta temprana, no como una señal completada.
- **Los valores absolutos no son comparables entre símbolos.** El MACD se mide en unidades de precio, así que una lectura de 5 en un instrumento no le dice nada sobre una lectura de 5 en otro. Léalo solo dentro de un mismo gráfico.

## Artículos relacionados

- [[rsi|Índice de fuerza relativa (RSI)]]
- [[stochastic-oscillator]]
- [[momentum]]
- [[moving-average]]
- [[different-types-of-input]]
- [[indicator-layout]]