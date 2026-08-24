---
title: "Canal de regresión"
slug: "regression-channel"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Referencia del indicador Canal de regresión en DeepCharts: línea central y bandas de desviación, modos de barras y Zig Zag, y configuración de trazado por línea."
keywords: ["canal de regresión lineal", "bandas de regresión", "canal de desviación estándar", "indicador de canal de tendencia", "canal zig zag"]
source_hash: "b3aa487fe1357861"
ai_translated: true
source_hash: "b3aa487fe1357861"
---
El Canal de regresión (Regression Channel) es una herramienta utilizada para identificar tendencias y áreas de soporte y resistencia. Dibuja un canal derivado de la regresión lineal: una línea de tendencia central ajustada al precio, flanqueada por bandas superior e inferior desplazadas un número elegido de desviaciones estándar.

Mientras que el indicador [[linear-regression]] traza una única línea móvil, el Canal de regresión enmarca el movimiento completo: muestra la dirección de la tendencia, su centro estadístico y la zona donde ha permanecido la mayor parte de la acción del precio.

## Qué es

El Canal de regresión responde a la pregunta: ¿cuál es la tendencia actual y cuánto puede alejarse el precio de ella antes de que eso signifique algo? La línea central es la regresión de mejor ajuste sobre la ventana de análisis; las bandas se sitúan un número configurable de desviaciones estándar por encima y por debajo. Un precio cerca de la línea central está en el valor justo de la tendencia; un precio en una banda está estadísticamente estirado, lo que favorece o bien una reversión hacia el centro o, si rompe y se mantiene, un cambio de tendencia.

[SCREENSHOT: Un gráfico de velas con el Canal de regresión aplicado — línea central con pendiente ascendente y bandas de desviación superior e inferior conteniendo la tendencia, con el precio tocando la banda inferior y revirtiendo hacia el centro | dc-es-regression-channel-01.png]

## Cuándo utilizarlo

- Para enmarcar una tendencia con objetividad: la pendiente del canal indica la dirección, su anchura indica la volatilidad.
- Para operar retrocesos dentro de una tendencia: entradas cerca de la banda inferior del canal en una pendiente ascendente, salidas o cortos cerca de la banda superior en una pendiente descendente.
- Para detectar rupturas de tendencia: un precio que cierra y se mantiene fuera del canal sugiere que la regresión que definió el movimiento ya no encaja.
- Para combinarlo con la estructura de swings mediante el modo Zig Zag, de modo que el canal se ancle a los swings detectados en lugar de a un número fijo de barras.

## Inicio rápido

1. Abra un gráfico: vea [[first-chart]].
2. Haga clic en el icono de gráfico de barras en la fila de iconos de la esquina superior izquierda del gráfico para abrir el panel **Indicators**, y luego haga clic en **Indicators** para abrir la **Indicator List** completa.
3. Busque **Regression Channel** y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje para abrir su configuración.
5. Configuración inicial: mantenga **Bars** en el valor predeterminado de 100 y **Value Dev. Std.** en el valor predeterminado de 1.00. Amplíe la desviación (por ejemplo hacia 2.00) si quiere que las bandas contengan más acción del precio y marquen solo los estiramientos mayores.

[SCREENSHOT: Diálogo de configuración del Canal de regresión mostrando la sección General con Mode, Value Dev. Std. = 1.00 y Bars = 100, más la sección Zig Zag y las secciones de trazado MID/UP/DN debajo | dc-es-regression-channel-02.png]

## Cómo interpretarlo

- **Pendiente de la línea central**: la tendencia. Pendiente ascendente, favorezca los largos; pendiente descendente, favorezca los cortos; casi plana, trate el canal como un rango.
- **Posición dentro del canal**: un precio cerca de la línea central está en el valor justo de la tendencia ajustada; un precio en una banda está en un extremo estadístico para la ventana.
- **Toques de banda**: en una tendencia sana, los toques de la banda del lado de la tendencia (banda inferior en una tendencia alcista) son oportunidades de retroceso; los fallos repetidos en alcanzar la banda opuesta muestran que la tendencia se debilita.
- **Rupturas del canal**: un cierre decisivo fuera del canal que se mantiene significa que la tendencia ajustada está fallando; espere o bien una aceleración en la dirección de la ruptura o un nuevo régimen al que el canal se reajustará.
- **Coloreado por tendencia**: las líneas MID, UP y DN tienen cada una colores positivo y negativo, de modo que el propio coloreado del canal le dice qué dirección tiene actualmente el ajuste.

## Referencia de configuración

### Configuración general

| Configuración | Qué hace |
|---|---|
| **Mode** | Selecciona cómo opera el canal. [CONFIRM: the exact list of Mode options and what each does — the live article names the setting without enumerating its values] |
| **Value Dev. Std.** | Número de desviaciones estándar para las bandas superior e inferior. Predeterminado: 1.00. Los valores más altos sitúan las bandas más lejos de la línea central. |
| **Bars** | Número de barras utilizado para el cálculo de la regresión. Predeterminado: 100. |

### Zig Zag

| Configuración | Qué hace |
|---|---|
| **Zig Zag Mode** | Habilita la detección de patrones de swing para que el canal trabaje a partir de los swings del Zig Zag. |
| **Zig Zag Abs.Rev.** | Umbral de reversión en ticks para la detección de swings. Predeterminado: 0.50. |
| **Zig Zag Tick Rev./Highest-Lowest** | Valor de reversión para el cálculo de los swings. Predeterminado: 22. |

### MID: trazado de la línea central

| Configuración | Qué hace |
|---|---|
| **Line Width** | Grosor de la línea central. Predeterminado: 2. |
| **Line Style** | Sólida, discontinua, punteada y otros formatos. |
| **Positive Color** | Color cuando la tendencia ajustada es alcista. |
| **Negative Color** | Color cuando la tendencia ajustada es bajista. |

### UP: trazado de la línea superior

| Configuración | Qué hace |
|---|---|
| **Line Width** | Grosor de la banda superior. Predeterminado: 2. |
| **Line Style** | Sólida, discontinua, punteada y otros formatos. |
| **Positive / Negative Color** | Coloreado según la tendencia para la banda superior. |

### DN: trazado de la línea inferior

| Configuración | Qué hace |
|---|---|
| **Line Width** | Grosor de la banda inferior. Predeterminado: 2. |
| **Line Style** | Opciones de formato de línea disponibles. |
| **Positive / Negative Color** | Coloreado según la tendencia para la banda inferior. |

## Consejos y errores comunes

- **Ajuste Bars al movimiento que quiere enmarcar.** 100 barras ajustadas sobre dos tendencias distintas producen un canal promedio sin significado; acorte la ventana o use **Zig Zag Mode** para anclar el canal a los swings detectados.
- **Una desviación estándar contiene menos de lo que quizá espera.** Con el valor predeterminado de 1.00, el precio negociará fuera de las bandas con regularidad en condiciones normales: eso por sí solo no es una señal. Suba **Value Dev. Std.** si quiere que los toques de banda sean eventos más raros y significativos.
- **No opere en contra de cada toque de banda.** En una tendencia fuerte, el precio puede recorrer la banda opuesta durante tramos prolongados; compruebe la pendiente de la línea central antes de tratar una banda como nivel de reversión.
- Compare con [[zig-zag]] para entender la detección de swings sobre la que se construye **Zig Zag Mode**, y con [[standard-deviation]] para la medida de dispersión detrás de las bandas.

## Artículos relacionados

- [[linear-regression]]
- [[zig-zag]]
- [[standard-deviation]]
- [[bollinger-bands]]
- [[different-types-of-input]]
- [[indicator-layout]]