---
title: "Canal de Donchian"
slug: "donchian-channel"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Trace el máximo más alto y el mínimo más bajo de un período retrospectivo con el Canal de Donchian para detectar rupturas, dirección de tendencia y expansión de volatilidad."
keywords: ["canal de donchian", "donchian", "máximo más alto mínimo más bajo", "canal de rupturas", "canal de precios", "canal turtle", "donchain"]
source_hash: "37171f25cdf2750c"
ai_translated: true
source_hash: "37171f25cdf2750c"
---
El Canal de Donchian traza dos líneas alrededor del precio: el máximo más alto y el mínimo más bajo de un número elegido de barras pasadas. El resultado es un canal que contiene toda la acción del precio reciente, haciendo inconfundibles las rupturas y las consolidaciones.

Es uno de los indicadores más sencillos de entender, hay exactamente un parámetro, lo que lo convierte en un buen primer indicador de canal antes de pasar a las bandas basadas en volatilidad.

## Qué es

El canal responde a la pregunta "¿dónde están los extremos recientes y está el precio rompiendo más allá de ellos?". Consta de dos elementos:

- **Upper Line** (línea superior): el máximo más alto del período retrospectivo.
- **Lower Line** (línea inferior): el mínimo más bajo del período retrospectivo.

Cuando el precio toca o supera la línea superior, está haciendo un nuevo máximo del período; la misma lógica se aplica a la línea inferior para los nuevos mínimos. La distancia vertical entre las líneas es una lectura directa del rango reciente: un canal que se ensancha significa expansión de volatilidad; un canal estrecho significa compresión.

## Cuándo usarlo

- Para operar rupturas: un cierre más allá del canal significa que el precio ha superado todos los máximos o mínimos de la ventana retrospectiva.
- Para leer la dirección de la tendencia: en una tendencia alcista la línea superior sube escalonadamente una y otra vez mientras la línea inferior la sigue por detrás.
- Para detectar expansión y contracción de volatilidad a partir del ancho del canal.
- Para localizar soportes y resistencias: las líneas del canal marcan los extremos del período, que a menudo actúan como niveles de reacción.

## Inicio rápido

1. Abra un gráfico y haga clic en el icono de gráfico de barras de la esquina superior izquierda para abrir el panel **Indicators** (indicadores).
2. Haga clic en **Indicators** para abrir la **Indicator List** completa.
3. Busque "Donchian Channel" y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración y establezca **Length** (longitud) en el período retrospectivo que quiera operar: una longitud más corta se ciñe al precio para señales de corto plazo, una más larga define la estructura mayor.

[SCREENSHOT: Un gráfico de precios con el Canal de Donchian trazado: líneas superior e inferior escalonándose alrededor de las velas, con una vela de ruptura reciente cerrando por encima de la línea superior | dc-es-donchian-channel-01.png]

## Cómo leerlo

- **Ruptura por encima de la Upper Line**: el precio ha impreso un nuevo máximo de todo el período retrospectivo, impulso alcista. Una ruptura por debajo de la Lower Line es el espejo bajista.
- **Líneas escalonadas**: una línea superior que sigue subiendo escalón a escalón mientras la línea inferior sube por detrás es comportamiento de tendencia; use la línea inferior como referencia de seguimiento.
- **Canal plano y estrecho**: el precio no ha hecho un nuevo extremo en toda la ventana, consolidación. Los canales comprimidos suelen preceder a expansiones, así que una compresión es una razón para vigilar la próxima ruptura.
- **Ancho del canal**: ensanchamiento = volatilidad en expansión; estrechamiento = volatilidad en contracción. Compárelo con [[atr|ATR]] si quiere la misma información como un único número.

## Referencia de configuración

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Length** | Cuántas barras pasadas se usan para calcular el máximo más alto (Upper Line) y el mínimo más bajo (Lower Line). Aumentar la longitud ensancha el canal y ralentiza su reactividad; disminuirla hace el canal más sensible al movimiento reciente del precio. |

### Subgraphs

| Configuración | Qué hace |
|---|---|
| **Donchian_Channel** | Controla el estilo visual del indicador: colores de línea, estilo del subgraph, coloreado automático, estilo de línea, grosor de línea y una etiqueta de nombre corto personalizada. |
| **+DI (Upper Line)** | El subgraph que representa el máximo más alto del período seleccionado. |
| **-DI (Lower Line)** | El subgraph que representa el mínimo más bajo del período seleccionado. |

> **Nota:** Las líneas superior e inferior aparecen en el diálogo de configuración bajo los nombres de subgraph **+DI** y **-DI**. Son las líneas superior e inferior de Donchian, no las líneas de movimiento direccional de [[adx|ADX]].

Cada subgraph también expone opciones de visualización: **Name Label**, **Value Label**, **Name Background**, **Value Background**, **Include on Auto Center** y **Chart color for marker**; estas controlan cómo se etiqueta la línea y si influye en el centrado automático del gráfico.

[SCREENSHOT: El diálogo de configuración del Canal de Donchian mostrando el parámetro Length y las filas de subgraph para Donchian_Channel, +DI (Upper Line) y -DI (Lower Line) con sus opciones de visualización | dc-es-donchian-channel-02.png]

## Consejos y errores comunes

- **Ajuste Length a su horizonte de mantenimiento.** Un operador intradía que lee un gráfico de 5 minutos y un swing trader que lee un gráfico diario no deberían usar el mismo período retrospectivo; el canal solo tiene sentido en relación con el horizonte que usted opera.
- **Un toque no es una ruptura.** Que el precio toque la línea superior solo significa que igualó el máximo del período; muchos operadores esperan un cierre más allá del canal para filtrar el ruido.
- **Espere latigazos en los rangos.** En mercados laterales el precio pincha repetidamente ambos extremos; combine el canal con un filtro de fuerza de tendencia como [[adx|ADX]] antes de operar rupturas.
- **No lo confunda con bandas de volatilidad.** Las [[bollinger-bands|Bandas de Bollinger]] y el [[keltner-channel|Canal de Keltner]] se construyen a partir de medias y volatilidad; el Canal de Donchian son puros extremos de precio, así que se comporta de forma distinta en períodos tranquilos.

## Artículos relacionados

- [[keltner-channel]]
- [[bollinger-bands]]
- [[atr]]
- [[adx]]
- [[different-types-of-input]]
- [[indicator-layout]]