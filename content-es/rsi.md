---
title: "Índice de fuerza relativa (RSI)"
slug: "rsi"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Configure e interprete el Índice de fuerza relativa (RSI), el clásico oscilador de momento de 0 a 100 para detectar condiciones de sobrecompra y sobreventa."
keywords: ["rsi", "índice de fuerza relativa", "sobrecompra sobreventa", "rsi 70 30", "oscilador de momento", "rsi de wilder", "divergencia rsi", "configuración rsi"]
source_hash: "76577f355dd9e068"
ai_translated: true
source_hash: "76577f355dd9e068"
---
El Índice de fuerza relativa (RSI) es uno de los indicadores de análisis técnico más populares para evaluar la fuerza o debilidad de un activo durante un periodo de tiempo. Desarrollado por J. Welles Wilder, es un oscilador de momento que se mueve en una escala de 0 a 100 y se utiliza principalmente para identificar condiciones de sobrecompra o sobreventa, que pueden indicar una reversión o una consolidación del precio.

Si va a aprender un oscilador primero, que sea este: la mayoría de las demás herramientas de momento son variaciones del mismo tema.

## Qué es

El RSI compara el tamaño de las subidas de precio recientes con el de las caídas recientes en la misma ventana y expresa el resultado como una única curva entre 0% y 100%. Cuando las ganancias han dominado, la curva sube hacia la parte alta de la escala; cuando las pérdidas han dominado, cae hacia la parte baja.

La versión de DeepCharts añade una línea **Average** (promedio) suavizada opcional sobre el propio RSI, que puede usar como línea de señal, además de líneas de nivel de sobrecompra/sobreventa configurables.

## Cuándo utilizarlo

- Para marcar condiciones de sobrecompra (RSI por encima del nivel de sobrecompra) y sobreventa (por debajo del nivel de sobreventa) que pueden preceder a una reversión o una pausa.
- Para leer el sesgo de momento: un RSI que se mantiene en la mitad superior de su rango respalda el momento alcista; la mitad inferior, el bajista.
- Para detectar divergencias: un precio que marca un nuevo extremo mientras el RSI no lo hace es una advertencia temprana de que el momento se desvanece (vea [[divergence-detector]]).
- En rangos, como herramienta de sincronización de reversión a la media: el entorno donde mejor funcionan las señales clásicas de 70/30.

## Inicio rápido

1. Abra un gráfico y haga clic en el icono de gráfico de barras en la esquina superior izquierda para abrir el panel **Indicators**.
2. Haga clic en **Indicators** para abrir la **Indicator List** completa.
3. Busque "Relative Strength Index" y haga clic en **+** para añadirlo: se traza en su propio panel debajo del gráfico de precio.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración.

Los valores predeterminados son la configuración de manual: **Length** de 14 con el **Overbought Level** en 70 y el **Oversold Level** en 30. Déjelos tal cual mientras aprende el indicador; además son lo que la mayoría de los otros traders está observando, lo que importa para niveles que actúan en parte por consenso. Pruébelo en vivo abajo: arrastre los deslizadores de Length y de niveles, pase el cursor sobre la curva para ver lecturas y observe cómo se mueven los puntos de señal.

[WIDGET: rsi-lab]

## Cómo interpretarlo

- **Por encima del nivel de sobrecompra (70 por defecto)**: las ganancias recientes han superado con fuerza a las pérdidas. Esto marca un momento estirado: es una señal de precaución, no una venta automática.
- **Por debajo del nivel de sobreventa (30 por defecto)**: la condición especular en el lado bajista.
- **La línea media de 50**: un RSI que pasa su tiempo por encima de 50 indica un régimen de momento alcista; por debajo de 50, bajista. Muchos traders de tendencia usan la línea media en lugar de 70/30.
- **Divergencia**: el precio imprime un máximo más alto mientras el RSI imprime un máximo más bajo (divergencia bajista), o el precio un mínimo más bajo mientras el RSI un mínimo más alto (divergencia alcista). Las divergencias advierten de que el momento del movimiento se está adelgazando.
- **Con la línea Average habilitada**: un RSI que cruza por encima de su promedio es una señal de giro alcista del momento, y el cruce por debajo lo contrario, de forma similar a una línea de señal en [[macd|MACD]].

> **Advertencia:** En una tendencia fuerte, el RSI puede permanecer en sobrecompra o sobreventa durante mucho tiempo mientras el precio sigue corriendo. Operar en contra de cada toque de 70/30 en un mercado en tendencia es la forma más cara de usar este indicador.

## Referencia de configuración

### Parámetros: General

| Configuración | Qué hace |
|---|---|
| **Input data** | Qué datos de precio alimentan el cálculo. Vea [[different-types-of-input]]. |
| **Length** | Número de periodos usados en el cálculo del RSI. Predeterminado: 14. Las longitudes más cortas hacen la curva más rápida y ruidosa; las más largas la suavizan. |

### Parámetros: Average

| Configuración | Qué hace |
|---|---|
| **Enable** | Activa la línea de promedio (señal) adicional calculada sobre el RSI. |
| **Average Type** | La metodología de promediado usada para la línea de señal. |
| **Length** | Número de periodos para el promedio. Predeterminado: 20. |

### Parámetros: configuración de niveles

| Configuración | Qué hace |
|---|---|
| **Overbought Level** | La línea de umbral superior. Predeterminado: 70. Súbala (p. ej. hacia 80) para exigir lecturas más extremas en mercados con tendencia fuerte. |
| **Oversold Level** | La línea de umbral inferior. Predeterminado: 30. |
| **Overbought Color** / **Oversold Color** | Colores de las dos líneas de umbral. |
| **Level Width** | Ajuste de anchura para las líneas de nivel. Predeterminado: 10. |

### Subgráfico

| Configuración | Qué hace |
|---|---|
| Color de la línea RSI / color de la línea de promedio / color secundario | Colores para la curva del RSI, su línea de promedio y la opción de color secundario. |
| Estilo de visualización / estilo de línea / ancho de línea | Cómo se dibujan las curvas y con qué grosor. |
| Visualización en eje secundario | Opción para mostrar el indicador en un eje secundario. |

[SCREENSHOT: El diálogo de configuración del RSI mostrando el grupo General (Input data, Length 14), el grupo Average (Enable, Average Type, Length 20) y el grupo de configuración de niveles (Overbought 70, Oversold 30) | dc-es-rsi-01.png]

## Consejos y errores comunes

- **El contexto primero.** La misma lectura de RSI 75 es candidata a operar en contra dentro de un rango y una confirmación de fuerza en una ruptura reciente. Decida en qué régimen está — un filtro de tendencia como el [[adx|ADX]] ayuda — antes de aplicar la lógica de sobrecompra/sobreventa.
- **La divergencia necesita confirmación.** Una divergencia es una advertencia, no una entrada; espere a que la estructura del precio (una ruptura de un nivel de swing) confirme antes de actuar sobre ella.
- **No acorte Length para "ver señales antes".** Un RSI de 5 periodos produce lecturas extremas constantes que significan muy poco; si necesita señales más rápidas, acorte el marco temporal del gráfico y mantenga la ventana del RSI con significado.
- **Use la línea Average para reducir el ruido**: exigir que el RSI esté por encima/por debajo de su propio promedio filtra un número sorprendente de cruces falsos de la línea media.

## Artículos relacionados

- [[stochastic-oscillator]]
- [[macd]]
- [[williams-r]]
- [[divergence-detector]]
- [[different-types-of-input]]
- [[indicator-layout]]