---
title: "Swing Point"
slug: "swing-point"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Marque automáticamente los máximos y mínimos de swing con líneas horizontales para que los niveles de soporte, resistencia y reversión estén siempre en su gráfico."
keywords: ["swing point", "puntos de swing", "máximo de swing", "mínimo de swing", "indicador soporte resistencia", "pivote máximo mínimo", "estructura de mercado", "swingpoint"]
source_hash: "81f159f66c7de974"
ai_translated: true
source_hash: "81f159f66c7de974"
---
Todo operador marca los máximos y mínimos de swing: los picos y valles locales donde el precio giró. El indicador Swing Point lo hace por usted: identifica los swings significativos usando un período de análisis personalizable y dibuja líneas horizontales en esos niveles de precio, de modo que su mapa de soportes y resistencias se actualiza solo a medida que el mercado imprime nueva estructura.

Como la definición de un swing está completamente parametrizada, usted controla cuán selectivo es el indicador: desde cada pequeña oscilación hasta solo los puntos de giro principales.

## Qué es

El indicador Swing Point responde a la pregunta "¿dónde giró el precio más recientemente y en qué niveles?" Un **máximo de swing** es una barra cuyo máximo es más alto que los máximos de un número determinado de barras a ambos lados; un **mínimo de swing** es la imagen especular con los mínimos. Cuando una barra califica, el indicador dibuja una línea horizontal en ese nivel, con etiquetas, de modo que el nivel permanece visible mientras el precio se aleja de él.

Los máximos de swing marcan posibles zonas de resistencia y reversión; los mínimos de swing marcan posibles soportes. Juntos delinean la estructura de mercado sobre la que se construyen la mayoría de los métodos de acción del precio.

## Cuándo usarlo

- Para mantener un mapa siempre actualizado de niveles de soporte y resistencia sin dibujar líneas manualmente.
- Para leer la estructura del mercado: una secuencia de máximos de swing más altos y mínimos de swing más altos define una tendencia alcista, y una ruptura de esa secuencia es una advertencia temprana de cambio de tendencia.
- Para encontrar referencias de colocación de stops y objetivos: los swings son donde las órdenes en reposo se agrupan de forma natural.
- Para alimentar otros análisis: el trabajo de divergencias y confluencias suele anclarse en los puntos de swing (vea [[divergence-detector]] y [[confluence-identifier]]).

## Inicio rápido

1. Abra un gráfico y haga clic en el icono de gráfico de barras en la esquina superior izquierda para abrir el panel **Indicators**.
2. Haga clic en **Indicators** para abrir la **Indicator List** completa.
3. Busque "Swing Point" y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración. Empiece con los valores predeterminados (**Left Bars** 2, **Right Bars** 2) y aumente ambos si el gráfico muestra más líneas de swing de las que puede usar.
5. Establezca valores distintos de **High Color** y **Low Color** para que los niveles de resistencia y soporte sean distinguibles de un vistazo.

[SCREENSHOT: Un gráfico de precios con el indicador Swing Point activo — líneas horizontales discontinuas extendiéndose desde varios máximos y mínimos de swing, cada una con una pequeña etiqueta de texto junto a la línea | dc-es-swing-point-01.png]

## Cómo leerlo

- **Las líneas de máximos de swing** son niveles donde los vendedores previamente superaron a los compradores: observe si hay rechazo (la resistencia se mantiene) o aceptación (ruptura) cuando el precio vuelve a ellos.
- **Las líneas de mínimos de swing** son el espejo en el lado del soporte.
- **La selectividad es su dial.** Con valores pequeños de **Left Bars** / **Right Bars** verá muchos swings menores, útiles para la estructura de scalping. Valores más grandes conservan solo los giros más significativos que definen el panorama de marcos temporales superiores.
- **La confirmación retrasa por diseño.** Un swing no puede confirmarse hasta que se haya impreso el número requerido de barras a la derecha, por lo que una nueva línea de swing aparece solo después de que esas barras hayan cerrado más allá del extremo. Valores más altos de **Right Bars** significan que el indicador espera más tiempo por la confirmación: menos swings falsos, señales más tardías.

## Referencia de configuración

### Parámetros generales

| Configuración | Qué hace |
|---|---|
| **Left Bars** | Número de barras a la izquierda de la barra candidata que deben tener máximos más bajos (para un máximo de swing) o mínimos más altos (para un mínimo de swing). Aumentar este valor hace al indicador más selectivo, identificando solo swings más significativos. Predeterminado: 2. |
| **Right Bars** | Número de barras a la derecha que deben mostrar máximos más bajos o mínimos más altos antes de que el swing se valide. Valores más altos significan que el indicador espera más tiempo por la confirmación. Predeterminado: 2. |
| **Filter Swing** | Cuando está activado, aplica un filtrado adicional que elimina los swings menores que no cumplen los umbrales de calidad, reduciendo el ruido. |

### Configuración de trazado (Plot Settings)

| Configuración | Qué hace |
|---|---|
| **Line Width** | Grosor de las líneas horizontales de swing. Predeterminado: 2. |
| **Line Style** | Estilo de las líneas de swing. Predeterminado: Dash — las líneas discontinuas mantienen los niveles de swing visualmente diferenciados de otros elementos del gráfico. |
| **High Color** | Color de las líneas de máximos de swing (zonas de resistencia/reversión). |
| **Low Color** | Color de las líneas de mínimos de swing (zonas de soporte/reversión). |
| **Text Tick Offset** | Distancia, en ticks, entre una línea de swing y su etiqueta de texto. Predeterminado: 1. |
| **Text Size** | Tamaño de las etiquetas de swing. Predeterminado: 11.00. |
| **High Text Color** | Color del texto de las etiquetas de máximos de swing. |
| **Low Text Color** | Color del texto de las etiquetas de mínimos de swing. |

[SCREENSHOT: El diálogo de configuración de Swing Point mostrando los parámetros generales (Left Bars, Right Bars, Filter Swing) y el grupo Plot Settings con Line Width, Line Style, colores High/Low y opciones de texto | dc-es-swing-point-02.png]

## Consejos y errores comunes

- **No trate un swing recién formado como operable en la barra en que se forma.** La línea aparece **Right Bars** barras después del extremo real; para entonces el precio ya se ha alejado. Use los swings como niveles para la próxima visita, no como señales de entrada en el momento de la confirmación.
- **Ajuste la selectividad al marco temporal.** Left/Right de 2 en un gráfico de 1 minuto produce una densa red de líneas; suba los valores o habilite **Filter Swing** antes de concluir que el indicador es "demasiado ruidoso".
- **Los valores simétricos son un punto de partida, no una regla.** Un **Right Bars** mayor que **Left Bars** exige más pruebas de que el giro se mantuvo, lo que conviene a los swing traders; los scalpers suelen preferir la compensación opuesta.
- **Lea los swings como estructura, no como señales independientes.** Un mínimo de swing roto en una tendencia alcista importa por lo que dice sobre la secuencia de mínimos más altos: combine las líneas con una lectura de tendencia en lugar de operar en contra de cada nivel.

## Artículos relacionados

- [[zig-zag]]
- [[pivot-points]]
- [[important-levels]]
- [[divergence-detector]]
- [[different-types-of-input]]
- [[indicator-layout]]