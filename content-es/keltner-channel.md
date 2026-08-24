---
title: "Canal de Keltner"
slug: "keltner-channel"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Referencia del indicador Canal de Keltner en DeepCharts: línea central EMA, bandas basadas en ATR, la configuración de ATR Multiplier y Length con valores predeterminados, y cómo operar el canal."
keywords: ["canal de keltner", "keltner", "bandas de keltner", "canal atr", "bandas atr", "chester keltner", "canal kelter", "canales de keltner"]
source_hash: "7995f161ecf54bdd"
ai_translated: true
source_hash: "7995f161ecf54bdd"
---
El Canal de Keltner (Keltner Channel) es un indicador clásico de análisis técnico desarrollado por Chester Keltner en 1960, utilizado para identificar tendencias, volatilidad y áreas de reversión. Dibuja tres líneas sobre el precio: una línea central basada en una media móvil exponencial, con una banda superior y una inferior situadas a una distancia proporcional al Average True Range (ATR).

Como la distancia de las bandas proviene del ATR en lugar de la desviación estándar, el canal se expande y se contrae con el rango real de negociación del mercado, incluidos los gaps, lo que le da una envolvente más suave y estable que las [[bollinger-bands]].

## Qué es

El Canal de Keltner responde a la pregunta: ¿a qué distancia está el precio de su promedio ajustado por volatilidad, medido en unidades de rango típico? Sus tres líneas son:

- **Keltner Avg** — la línea central, una media móvil exponencial del input seleccionado.
- **Keltner Up** — la banda superior, la línea central más el ATR multiplicado por el ATR Multiplier.
- **Keltner Down** — la banda inferior, la línea central menos la misma distancia.

[SCREENSHOT: Gráfico de velas con el Canal de Keltner superpuesto, línea EMA central con bandas superior e inferior, precio en tendencia a lo largo de la banda superior con retrocesos que respetan la línea central | dc-es-keltner-channel-01.png]

## Cuándo utilizarlo

- Identificación de tendencia: un precio que se mantiene por encima de la línea central con el canal inclinado al alza es una lectura limpia de tendencia alcista (y viceversa).
- Localizar entradas en retrocesos dentro de una tendencia, donde la línea central suele actuar como soporte o resistencia dinámicos.
- Detectar áreas de reversión cuando el precio se estira más allá de una banda en un mercado sin tendencia.
- Encuadre de volatilidad: el ancho del canal escala con el ATR, por lo que se mantiene fiel en mercados tranquilos y rápidos.

## Inicio rápido

1. Abra un gráfico de precio: consulte [[first-chart]].
2. Haga clic en el botón verde **Indicators** (o pulse **Ctrl I**) para abrir la **Indicator List**.
3. Busque **Keltner Channel** y haga clic en **+** para añadirlo. Las tres líneas se dibujan sobre las velas.
4. Haga clic en el icono de engranaje para abrir la ventana de configuración del indicador.
5. Los valores predeterminados, **Length** 21 y **ATR Multiplier Value** 2.00, son una configuración inicial sólida; amplíe el multiplicador si su instrumento toca las bandas con demasiada frecuencia para su estilo.

[SCREENSHOT: Ventana de configuración del Canal de Keltner abierta mostrando el campo ATR Multiplier Value en 2.00, el menú desplegable Input y el campo Length en 21, con las opciones de color de Subgraphs debajo | dc-es-keltner-channel-02.png]

## Cómo interpretarlo

- **Pendiente y lado.** La pendiente del canal da la tendencia; el lado de la línea central en que se mantiene el precio da el sesgo. Ambos juntos son más fuertes que cualquiera por separado.
- **Retrocesos a la línea central.** En un mercado en tendencia, los retrocesos hasta la Keltner Avg que se sostienen son entradas de continuación clásicas.
- **Recorridos por la banda frente a pinchazos de banda.** Cierres sostenidos a lo largo de una banda indican una tendencia fuerte (no la contradiga). Un pinchazo aislado más allá de una banda en un canal plano es más probablemente un área de agotamiento o reversión.
- **Ancho del canal.** Un canal visiblemente estrechándose significa un rango real en contracción: la misma lógica de "calma antes del movimiento" que una compresión de Bollinger, pero medida en términos de ATR.

## Referencia de configuración

Se accede a la configuración a través de la ventana de configuración del indicador.

### Parámetros

| Configuración | Qué hace | Predeterminado |
|---|---|---|
| **ATR Multiplier Value** | Multiplica el ATR para determinar a qué distancia de la línea central se sitúan las bandas exteriores. Los valores más altos contienen más acción del precio; los valores más bajos señalan antes pero con más frecuencia. | 2.00 |
| **Input** | Los datos de precio usados para la media del canal: Close, Open, High, Low o volumen. | — |
| **Length** | El número de períodos usados para calcular la media del canal. | 21 |

### Subgráficos

| Configuración | Qué hace |
|---|---|
| **Keltner Avg Color** | Color de la línea central. |
| Color secundario | Color secundario opcional para la línea. |
| **Keltner Up Color** | Color de la banda superior. |
| **Keltner Down Color** | Color de la banda inferior. |
| Estilo de visualización / estilo de línea / ancho de línea | Estilo visual de cada línea. |
| Eje secundario | Opción de escalar en un eje secundario. |

## Consejos y errores comunes

- **No opere contra los toques de banda en un canal en tendencia.** Las lecturas de reversión más fiables llegan cuando el canal está plano; en un canal inclinado, un toque de banda suele ser fuerza de tendencia.
- **Ajuste primero el multiplicador, no la longitud.** El Length cambia el carácter de la línea central; el ATR Multiplier solo cambia cuán tolerantes son las bandas. La mayoría de los problemas de ajuste son problemas de multiplicador.
- **Combínelo con las Bandas de Bollinger para detectar compresiones.** Cuando las Bandas de Bollinger se contraen dentro del Canal de Keltner, la volatilidad está inusualmente comprimida: una configuración de expansión muy utilizada.
- **Recuerde que las bandas se basan en ATR.** Tras un pico de volatilidad, el canal permanece ancho durante un tiempo aunque el precio se calme; eso es el suavizado del ATR, no una señal.

## Artículos relacionados

- [[bollinger-bands]]
- [[atr]]
- [[moving-average]]
- [[standard-deviation]]
- [[different-types-of-input]]
- [[indicator-layout]]