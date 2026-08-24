---
title: "Ichimoku"
slug: "ichimoku"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Referencia del indicador Ichimoku en DeepCharts: Tenkan-sen, Kijun-sen, Chikou Span, Senkou Span y la nube, con configuración de períodos y estilos."
keywords: ["ichimoku kinko hyo", "nube ichimoku", "kumo", "tenkan", "kijun", "senkou span", "chikou span", "línea de conversión", "línea base"]
source_hash: "f536e77e60463be4"
ai_translated: true
source_hash: "f536e77e60463be4"
---
El indicador Ichimoku, formalmente conocido como Ichimoku Kinko Hyo, es una herramienta integral de análisis técnico desarrollada en los años 30 por el periodista japonés Goichi Hosoda. De un solo indicador obtiene niveles de soporte y resistencia, dirección de tendencia y una lectura de momento: el nombre se traduce aproximadamente como "gráfico de equilibrio de un vistazo".

Traza varias líneas y una nube sombreada (el Kumo) directamente sobre el gráfico de precios. Cada línea responde a una pregunta distinta, y sus posiciones respecto al precio y entre sí construyen la imagen general.

## Qué es

Ichimoku responde a la pregunta: ¿cuál es la tendencia, dónde está el equilibrio y dónde están los niveles que importan, todo de un vistazo? En lugar de promediar cierres como una media móvil, sus líneas se construyen a partir del punto medio de máximos y mínimos sobre períodos fijos de retroceso, y algunas se proyectan hacia adelante o se desplazan hacia atrás en el tiempo. Ese desplazamiento temporal es lo que crea la nube por delante del precio y la línea de comparación rezagada por detrás.

[SCREENSHOT: Un gráfico de velas con el indicador Ichimoku completo aplicado: las líneas Tenkan-sen y Kijun-sen sobre el precio, la nube Kumo sombreada proyectada por delante de la última vela y el Chikou Span rezagado por detrás del precio | dc-es-ichimoku-01.png]

## Cuándo usarlo

- Para leer la dirección de la tendencia y su calidad en una sola vista: el precio por encima de una nube ascendente es una tendencia alcista saludable; el precio dentro de la nube es un mercado en transición.
- Para encontrar soporte y resistencia dinámicos: la Kijun-sen y los bordes de la nube son niveles muy vigilados.
- Para sincronizar entradas con los cruces de líneas: la Tenkan-sen cruzando la Kijun-sen es la señal Ichimoku clásica.
- Para confirmar el momento con la posición del Chikou Span respecto al precio pasado.

## Inicio rápido

1. Abra un gráfico: consulte [[first-chart]].
2. Haga clic en el icono de gráfico de barras en la fila de iconos superior izquierda del gráfico para abrir el panel **Indicators**, y luego haga clic en **Indicators** para abrir la **Indicator List** completa.
3. Busque **Ichimoku** y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje para abrir su configuración.
5. Configuración inicial: mantenga los valores por defecto: **Conversion Line Period** 9, **Baseline Period** 26, **Lagging Span Period** 26. Son los valores originales de Hosoda y los que asume prácticamente toda la literatura sobre Ichimoku.

[SCREENSHOT: Diálogo de configuración de Ichimoku mostrando Conversion Line Period = 9, Baseline Period = 26 y Lagging Span Period = 26, con las opciones de color de Subgraph para cada línea visibles | dc-es-ichimoku-02.png]

## Cómo leerlo

Los componentes del indicador:

| Componente | Construcción | Función |
|---|---|---|
| **Tenkan-sen** (línea de conversión) | Promedio de los máximos y mínimos de los últimos 9 períodos | Dirección de la tendencia a corto plazo |
| **Kijun-sen** (línea base) | Promedio de los máximos y mínimos de los últimos 26 períodos | Soporte/resistencia; nivel potencial de cambio de tendencia |
| **Chikou Span** (línea de retraso) | El precio de cierre desplazado 26 períodos hacia atrás | Compara el precio actual con la acción del precio pasada |
| **Senkou Span** | Promedio de la Tenkan-sen y la Kijun-sen, proyectado 26 períodos hacia adelante | Una de las dos líneas que forman la nube (Kumo) |

Lectura de la imagen:

- **Precio vs. nube**: por encima de la nube = contexto alcista; por debajo = bajista; dentro = tierra de nadie. La nube por delante del precio mapea el soporte/resistencia futuro.
- **Cruce Tenkan/Kijun**: la Tenkan-sen cruzando por encima de la Kijun-sen es alcista (más fuerte cuando ocurre por encima de la nube); el cruce por debajo es bajista.
- **La Kijun-sen como ancla**: el precio tiende a revertir a la media hacia la línea base; una distancia pronunciada respecto a ella advierte de un movimiento sobreextendido.
- **Confirmación del Chikou Span**: la línea rezagada situada por encima de las barras de precio de hace 26 períodos confirma el momento alcista; por debajo de ellas, bajista.
- **Grosor de la nube**: una nube gruesa implica soporte/resistencia fuerte; una nube fina es más fácil de atravesar por el precio.

## Referencia de configuración

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Conversion Line Period** | Período de retroceso para el punto medio de la Tenkan-sen. Por defecto: 9. Más corto = línea de señal más rápida y con más ruido. |
| **Baseline Period** | Período de retroceso para el punto medio de la Kijun-sen. Por defecto: 26. |
| **Lagging Span Period** | Desplazamiento del Chikou Span (cierre desplazado hacia atrás). Por defecto: 26. |

[CONFIRM: whether the settings dialog also exposes a separate period for the second cloud line (Senkou Span B) — the live article documents one Senkou Span and three period parameters only]

### Subgraph

Los colores y estilos se ajustan por línea: **Tenkan-sen**, **Kijun-sen**, **Chikou Span** y **Senkou Span**, además de:

| Configuración | Qué hace |
|---|---|
| **Line Style** | Apariencia de cada línea trazada. |
| **Line Width** | Grosor de cada línea. |
| **Use Secondary Axis** | Muestra el indicador en un eje alternativo. |

## Consejos y errores comunes

- **No elija una sola línea a conveniencia.** Ichimoku es un sistema: un cruce Tenkan/Kijun alcista por debajo de una nube bajista es una señal en conflicto, no una compra.
- **Resista la tentación de reajustar los períodos de entrada.** La estructura 9/26 es el lenguaje compartido de toda referencia sobre Ichimoku; cámbiela solo cuando entienda qué hace cada desplazamiento.
- **Respete el estado "dentro de la nube".** Es la forma que tiene el indicador de decir que el mercado está en equilibrio: la mayoría de las estrategias Ichimoku se mantienen al margen ahí.
- **Despeje el gráfico si hace falta.** Cinco trazados superpuestos pueden sepultar la acción del precio; reduzca el grosor de las líneas o recoloree los componentes en la sección Subgraph, y consulte [[indicator-layout]] para organizar gráficos cargados.

## Artículos relacionados

- [[moving-average]]
- [[super-trend]]
- [[donchian-channel]]
- [[adx]]
- [[different-types-of-input]]
- [[indicator-layout]]