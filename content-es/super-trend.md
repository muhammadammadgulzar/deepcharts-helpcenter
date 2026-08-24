---
title: "Super Trend"
slug: "super-trend"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Referencia del indicador Super Trend en DeepCharts: longitud y multiplicador del ATR, opciones de área de gráfico, alertas, coloreado de velas y estilo de línea."
keywords: ["supertrend", "indicador super trend", "seguimiento de tendencia", "bandas ATR", "indicador de stop dinámico", "configuración super trend"]
source_hash: "2f4d6c9ac39aa619"
ai_translated: true
source_hash: "2f4d6c9ac39aa619"
---
Super Trend es un indicador de seguimiento de tendencia que identifica la dirección de la tendencia del mercado dibujando una línea dinámica de soporte o resistencia basada en el movimiento del precio y la volatilidad. La línea se sitúa por debajo del precio en una tendencia alcista y por encima en una bajista, cambiando de lado cuando la tendencia cambia.

Como su distancia respecto al precio se deriva del Average True Range (ATR), la línea se ensancha automáticamente en condiciones volátiles y se estrecha en las tranquilas, que es lo que la hace popular tanto como filtro de tendencia como guía de stop dinámico.

## Qué es

Super Trend responde a la pregunta: ¿en qué lado del mercado estoy y dónde está el nivel que invalidaría esa visión? Combina una medida de volatilidad ATR (**Length**) con un **Multiplier** que establece a qué distancia del precio se dibuja la línea. Mientras el precio permanezca en un lado de la línea, la tendencia se considera intacta; un cierre atravesando la línea hace que el indicador cambie al otro lado.

[SCREENSHOT: Un gráfico de velas con la línea Super Trend trazada por debajo del precio en una tendencia alcista, y luego cambiando por encima del precio tras una reversión; ambos colores de línea visibles a lo largo del cambio | dc-es-super-trend-01.png]

## Cuándo usarlo

- Para establecer rápidamente la dirección de la tendencia en cualquier marco temporal: el lado y el color de la línea la indican directamente.
- Para arrastrar un stop detrás de una posición ganadora: la línea avanza con la tendencia y se aleja con la volatilidad.
- Para filtrar señales de herramientas más rápidas: por ejemplo, tomar solo largos mientras Super Trend está por debajo del precio.
- Para detectar cambios de tendencia: el momento en que la línea cambia de lado es un evento definido y objetivo al que puede adjuntar alertas.

## Inicio rápido

1. Abra un gráfico — vea [[first-chart]].
2. Haga clic en el icono de gráfico de barras en la fila de iconos superior izquierda del gráfico para abrir el panel **Indicators**, luego haga clic en **Indicators** para abrir la **Indicator List** completa.
3. Busque **Super Trend** y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje para abrir su configuración.
5. Configuración inicial: mantenga **Length** en el valor predeterminado 10 y **Multiplier** en el predeterminado 3.00. Estos valores predeterminados se adaptan a la mayoría de los marcos temporales; amplíe el multiplicador si recibe señales falsas, acorte la longitud si la línea reacciona demasiado lento.

[SCREENSHOT: Diálogo de configuración de Super Trend mostrando la sección General con Length = 10 y Multiplier = 3.00, además de las secciones Chart Settings y Alert visibles debajo | dc-es-super-trend-02.png]

## Cómo leerlo

- **Línea por debajo del precio**: contexto de tendencia alcista. La línea actúa como soporte dinámico; los retrocesos que se mantienen por encima de ella conservan la tendencia intacta.
- **Línea por encima del precio**: contexto de tendencia bajista. La línea actúa como resistencia dinámica.
- **Un cambio de lado** (la línea salta al otro lado del precio) señala un posible cambio de tendencia. Los cambios en tendencias fuertes son significativos; los cambios en un mercado lateral agitado ocurren constantemente y es mejor ignorarlos o filtrarlos.
- **La distancia entre el precio y la línea** refleja volatilidad, no fuerza: una brecha amplia significa que el ATR está elevado, no que la tendencia sea "más fuerte".
- Con **Chart Color for Marker** habilitado, las propias velas se recolorean con la dirección de la tendencia, haciendo el estado actual legible de un vistazo.

## Referencia de configuración

### General

| Configuración | Qué hace |
|---|---|
| **Length** | Período para el cálculo del ATR. Predeterminado: 10. Valores más altos reducen la sensibilidad a las fluctuaciones de corto plazo; valores más bajos hacen la línea más reactiva. |
| **Multiplier** | Multiplica el ATR para establecer la distancia de la línea respecto al precio. Predeterminado: 3.00. Aumentarlo crea bandas más amplias: menos señales falsas pero entradas más tardías; disminuirlo ajusta las bandas. |

### Configuración del gráfico

| Configuración | Qué hace |
|---|---|
| **Chart Area** | **Horizontal** muestra el indicador sobre el gráfico de precios principal; **Vertical** lo muestra en un panel separado. |
| **Use Sec. Axis** | Traza el indicador en un eje secundario, lo que le permite superponer indicadores con escalas diferentes. |

### Alertas

| Configuración | Qué hace |
|---|---|
| **Enable Alert Sound** | Reproduce una notificación sonora cuando se genera una señal. |
| **Alert Name** | Identificador personalizado, útil al gestionar varias alertas. |
| **Enable Message** | Muestra una notificación visual. |

### Subgráficos

| Configuración | Qué hace |
|---|---|
| **Color / 2° Color** | Color de la línea en estado alcista y bajista respectivamente. |
| **Subgraph Style** | Estilo de visualización. Predeterminado: Line. |
| **Line Style** | Predeterminado: Solid. |
| **Line Width** | Predeterminado: 1. Auméntelo para dar prominencia. |
| **Name Label / Name Background / Value Label / Value Background** | Muestran o dan estilo al identificador y al valor numérico del indicador en el gráfico. |
| **Auto Color** | Elija entre anulación manual del color o ajuste automático del color. |
| **Chart Color for Marker** | Recolorea las propias velas según la dirección actual de la tendencia. |
| **Include on Auto Center** | Incluye el indicador cuando el gráfico se escala automáticamente, de modo que la línea permanezca a la vista. |

## Consejos y errores comunes

- **No haga scalping de los cambios de lado en un rango.** Super Trend es una herramienta de tendencia; en mercados laterales cambia de lado repetidamente y cada cambio parece una señal. Compruebe primero un marco temporal superior o un filtro de fuerza de tendencia como [[adx]].
- **Ajuste con el multiplicador, no solo con la longitud.** Ampliar el **Multiplier** suele ser la forma más eficaz de reducir señales falsas, a costa de entradas más tardías.
- **Retrasa por diseño.** El cambio de lado confirma un movimiento ya en marcha: combínelo con contexto más rápido (por ejemplo [[atr]] para el régimen de volatilidad) en lugar de esperar que capture techos y suelos.
- Use [[super-trend-difference]] junto a él para ver como histograma cuánto se ha estirado el precio respecto a la línea.

## Artículos relacionados

- [[super-trend-difference]]
- [[atr]]
- [[moving-average]]
- [[parabolic-sar]]
- [[different-types-of-input]]
- [[indicator-layout]]