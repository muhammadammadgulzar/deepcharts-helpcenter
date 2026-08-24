---
title: "Williams %R"
slug: "williams-r"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Cómo Williams %R ubica el cierre dentro del rango reciente máximo-mínimo para señalar condiciones de sobrecompra y sobreventa, con cada configuración en DeepCharts."
keywords: ["williams percent r", "%R", "W%R", "william r", "indicador williams r", "sobrecompra sobreventa"]
source_hash: "635e9f57ae6ac107"
ai_translated: true
source_hash: "635e9f57ae6ac107"
---
Williams %R es un oscilador de momento que mide las condiciones de sobrecompra y sobreventa comparando el precio de cierre con el rango máximo-mínimo durante un período retrospectivo especificado. Es uno de los osciladores de reacción más rápida disponibles, lo que lo hace popular para el timing de corto plazo.

En DeepCharts, el indicador traza valores entre 0 y 100 en su propia área de gráfico, con niveles de referencia alto, medio y bajo configurables y un promedio de suavizado opcional.

## Qué es

Williams %R responde: ¿en qué punto de su rango reciente está cerrando el precio en este momento? Un cierre cerca de la parte superior del rango durante el período retrospectivo empuja la lectura hacia la parte superior de la escala; un cierre cerca de la parte inferior la empuja hacia abajo. En DeepCharts, los valores por encima de 80 sugieren condiciones de sobrecompra (posibles oportunidades de venta) y los valores por debajo de 20 sugieren condiciones de sobreventa (posibles oportunidades de compra).

La línea sin suavizar es deliberadamente nerviosa. La sección integrada **Average** puede suavizarla cuando quiera señales menos numerosas y más limpias.

## Cuándo usarlo

- Necesita un timing de reversión rápido en los bordes de un rango de negociación: %R reacciona más rápido que la mayoría de los osciladores.
- Quiere una segunda opinión que confirme una señal de [[rsi]] o de [[stochastic-oscillator]].
- Quiere una lectura del momento basada en la pendiente: la opción Slope de **Auto Color** colorea la línea según esté subiendo o bajando.
- Opera en marcos temporales cortos donde un oscilador más lento señalaría demasiado tarde.

## Inicio rápido

1. Abra un gráfico y presione **Ctrl I**, o haga clic en el icono de gráfico de barras en la barra de herramientas del gráfico y luego en **Indicators**, para abrir la **Indicator List**.
2. Busque "Williams" y haga clic en **+** para añadir el indicador. Se muestra en su propia área de gráfico debajo de las barras de precio (consulte [[indicator-layout]]).
3. Haga clic en el icono de engranaje en la fila del indicador para abrir su configuración.
4. Mantenga los valores predeterminados para empezar: **Length** 14 con el **High Level** en 80, **Middle Level** en 50 y **Low Level** en 20. Si la línea es demasiado ruidosa para su marco temporal, habilite la sección **Average** (Simple, 20 barras) para suavizarla.

[SCREENSHOT: Un gráfico con el indicador Williams %R en su propia área debajo del precio, la línea cayendo por debajo del nivel bajo 20 y girando de nuevo al alza, con las líneas de nivel 80/50/20 visibles | dc-es-williams-r-01.png]

## Cómo leerlo

- **Zonas extremas.** Por encima del nivel alto (80 por defecto), el precio está cerrando cerca de la parte superior de su rango reciente: sobrecompra. Por debajo del nivel bajo (20), está cerrando cerca de la parte inferior: sobreventa.
- **La salida supera a la entrada.** Que la línea abandone una zona extrema (cruzando de nuevo por debajo de 80, o de nuevo por encima de 20) es una señal de timing más fuerte que la línea entrando por primera vez en la zona.
- **El nivel medio como sesgo.** La línea de 50 es una referencia de punto medio: las lecturas que se mantienen por encima de ella se inclinan al alza, por debajo, a la baja.
- **Las tendencias fijan la lectura.** En una tendencia fuerte, %R puede permanecer en un extremo durante muchas barras. Trate los extremos como zonas de reversión solo cuando el mercado esté en rango.

## Referencia de configuración

Abra el diálogo desde el icono de engranaje en la fila del indicador en el panel **Indicators**.

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Length** | El período retrospectivo para el cálculo de %R. Predeterminado: 14. Períodos más cortos aumentan la sensibilidad; períodos más largos suavizan los resultados. |

### Promedio (Average)

| Configuración | Qué hace |
|---|---|
| **Enable** | Aplica un suavizado de media móvil a la línea %R para reducir el ruido y aclarar la tendencia. |
| **Average Type** | Método de suavizado: Simple (ponderación igual), Exponential (enfatiza los valores recientes), Triangular (doble suavizado) o Weighted (ponderación progresiva). |
| **Average Length** | Longitud del promedio de suavizado. Predeterminado: 20 barras. Valores más altos crean una línea más suave. |

### Niveles (Levels)

| Configuración | Qué hace |
|---|---|
| **Middle Level** | Línea de referencia del punto medio. Predeterminado: 50. |
| **Low Level** | Línea del umbral de sobreventa. Predeterminado: 20. |
| **High Level** | Línea del umbral de sobrecompra. Predeterminado: 80. |

Cada línea de nivel tiene su propia configuración de color y grosor (grosor de línea predeterminado: 1).

### Subgráfico (Subgraph)

| Configuración | Qué hace |
|---|---|
| **Subgraph Style** | Cómo se dibuja la serie. Predeterminado: Line, una línea continua de los valores. |
| **Auto Color** | La opción Slope cambia el color de la línea según el momento esté subiendo o bajando. |
| **Line Style** | Predeterminado: Solid; hay alternativas discontinua y punteada disponibles. |
| **Line Width** | Grosor de la línea. Predeterminado: 1. |
| **Short Name** | La etiqueta mostrada para el indicador. Predeterminado: "W%R". |

[SCREENSHOT: El diálogo de configuración de Williams %R mostrando Length 14, la sección Average con las opciones de Average Type y la sección Levels con Middle 50, Low 20 y High 80 | dc-es-williams-r-02.png]

## Consejos y errores comunes

- **Cuidado con la escala.** Las definiciones de los manuales citan Williams %R en una escala de 0 a −100. DeepCharts muestra la información equivalente en una escala de 0 a 100, por lo que "por encima de 80" aquí corresponde al "por encima de −20" de los manuales. Las señales son las mismas; solo difieren las etiquetas del eje.
- **%R duplica la línea K del Estocástico.** Ambos miden la posición del cierre dentro del rango reciente: ejecutar Williams %R junto con [[stochastic-oscillator]] no añade información nueva. Elija uno.
- **Suavice en gráficos rápidos.** En marcos temporales bajos, la línea sin suavizar oscila constantemente; habilitar la sección Average suele ser mejor que alargar el período retrospectivo.
- **No opere en contra de un extremo fijado.** Una lectura estacionada por encima de 80 en una fuerte tendencia alcista es información de tendencia, no una señal de venta.

## Artículos relacionados

- [[stochastic-oscillator]]
- [[rsi|Índice de fuerza relativa (RSI)]]
- [[cci|Índice de canal de materias primas (CCI)]]
- [[momentum]]
- [[different-types-of-input]]
- [[indicator-layout]]