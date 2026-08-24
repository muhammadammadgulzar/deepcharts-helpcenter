---
title: "Bandas de Bollinger"
slug: "bollinger-bands"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Referencia del indicador Bandas de Bollinger en DeepCharts: media central, bandas superior e inferior de desviación estándar, toda la configuración, y cómo leer el squeeze y los toques de banda."
keywords: ["bandas de bollinger", "bollinger", "indicador de bandas", "bandas de desviación estándar", "bandas de volatilidad", "squeeze de bollinger", "bandas boilinger", "bandas bolinger"]
source_hash: "7f36345f1a73f5a6"
ai_translated: true
source_hash: "7f36345f1a73f5a6"
---
Las Bandas de Bollinger, desarrolladas por John Bollinger en los años 80, miden la volatilidad del mercado y ayudan a identificar posibles oportunidades de trading. El indicador dibuja tres líneas directamente sobre el precio: una media móvil central con una banda superior y una inferior colocadas a un número determinado de desviaciones estándar de ella.

Como las bandas se construyen a partir de la desviación estándar, se ensanchan automáticamente cuando el mercado se vuelve volátil y se estrechan cuando se calma, que es lo que las hace útiles en cualquier condición de mercado sin necesidad de reajustes.

## Qué es

Las Bandas de Bollinger responden a la pregunta: ¿está el precio alto o bajo en relación con su propio comportamiento reciente? Los tres componentes son:

- **Bollinger Avg**: la línea media, normalmente una media móvil simple del dato de precio seleccionado.
- **Bollinger Up**: la banda superior, la media más un múltiplo de la desviación estándar.
- **Bollinger Down**: la banda inferior, la media menos el mismo múltiplo.

Dado que, en condiciones normales, prácticamente toda la acción reciente del precio queda contenida entre las bandas, un toque o una ruptura de una banda es una declaración sobre extremos ajustados por volatilidad, no una señal por sí misma.

[SCREENSHOT: Gráfico de velas con las Bandas de Bollinger superpuestas, mostrando la media central y las bandas superior e inferior, con un squeeze visible (bandas estrechándose) seguido de una expansión | dc-es-bollinger-bands-01.png]

## Cuándo usarlo

- Juzgar si el precio está estirado en relación con su media reciente antes de entrar o salir.
- Detectar contracciones de volatilidad (el "squeeze") que a menudo preceden a movimientos direccionales fuertes.
- Enmarcar operaciones de reversión a la media en mercados en rango: retrocesos desde las bandas exteriores de vuelta hacia la media.
- Contexto de seguimiento en tendencias: las tendencias fuertes tienden a caminar a lo largo de una banda mientras la media actúa como soporte o resistencia en los retrocesos.

## Inicio rápido

1. Abra un gráfico de precio: consulte [[first-chart]].
2. Haga clic en el botón verde **Indicators** (o pulse **Ctrl I**) para abrir la lista **Indicator List**.
3. Busque **Bollinger Bands** y haga clic en **+** para añadirlo. Las tres líneas se dibujan sobre las velas de precio.
4. Haga clic en el icono de engranaje (el icono de configuración del indicador) para abrir su ventana de configuración.
5. La configuración clásica descrita por John Bollinger es una media de 20 períodos con un valor de desviación estándar de 2, calculada sobre el Close: un punto de partida sólido en cualquier marco temporal.

[SCREENSHOT: Ventana de configuración de las Bandas de Bollinger abierta, mostrando el menú desplegable Input Data, el campo Periods y el campo Std Dev Value, con la sección de estilo Subgraphs debajo | dc-es-bollinger-bands-02.png]

## Cómo leerlo

- **Ancho de banda = volatilidad.** Bandas anchas significan un mercado activo; bandas estrechas, uno tranquilo. Un estrechamiento pronunciado (squeeze) señala energía acumulada: espere una expansión, pero deje que el precio elija la dirección.
- **Los toques de banda son contexto, no disparadores.** En un rango, el precio tocando la banda superior es un candidato a retroceso hacia la media. En una tendencia, el precio recorriendo la banda superior es fuerza, no una venta automática.
- **La línea media es la media.** Los retrocesos que respetan la Bollinger Avg mantienen la tendencia intacta; una ruptura limpia de ella desplaza el sesgo hacia la banda opuesta.
- **Los cierres fuera de una banda son raros por construcción.** Cierres repetidos fuera de una banda indican un movimiento inusualmente fuerte: ajuste la gestión de riesgos en lugar de operar en contra a ciegas.

## Referencia de configuración

Al hacer clic en el icono de configuración del indicador se abre la ventana de configuración.

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Input Data** | La fuente de precio usada para el cálculo de la media: High, Low, Open o Close. Close es la opción convencional. |
| **Periods** | El número de períodos usados para calcular la línea media. Menos períodos siguen el precio más de cerca; más períodos suavizan las bandas. |
| **Std Dev Value** | El coeficiente aplicado a la desviación estándar, que controla a qué distancia de la media se sitúan las bandas superior e inferior. Valores más altos contienen más acción del precio pero señalan con menos frecuencia. |

### Subgráficos

Cada una de las tres líneas se puede estilizar individualmente: color, estilo (sólido o discontinuo) y grosor:

| Línea | Qué es |
|---|---|
| **Bollinger Avg** | La línea media (la media). |
| **Bollinger Up** | La banda superior. |
| **Bollinger Down** | La banda inferior. |

## Consejos y errores comunes

- **Un toque de banda no es una señal de reversión.** El error de principiante más común es vender cada toque de la banda superior; en una tendencia, el precio puede recorrer una banda durante docenas de barras.
- **Combine el squeeze con un filtro de dirección.** El squeeze predice expansión, no dirección: combínelo con la estructura, el [[volume|volumen]] o una herramienta de tendencia antes de posicionarse.
- **No reduzca Periods para "ver más señales".** Un período de análisis corto hace que las bandas persigan cada vela y destruye el significado estadístico de la desviación estándar.
- **Compare con los Canales de Keltner.** Las Bandas de Bollinger, construidas sobre la desviación estándar, reaccionan a la dispersión del precio, mientras que las bandas del [[keltner-channel]], construidas sobre el ATR, reaccionan al rango: ejecutar ambas hace que los squeezes sean más fáciles de detectar.

## Artículos relacionados

- [[keltner-channel]]
- [[standard-deviation]]
- [[atr]]
- [[moving-average]]
- [[different-types-of-input]]
- [[indicator-layout]]