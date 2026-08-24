---
title: "Índice de canal de mercancías (CCI)"
slug: "cci"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Cómo el Commodity Channel Index mide la desviación del precio respecto a su media estadística, con guía de interpretación y todas las configuraciones del CCI en DeepCharts."
keywords: ["CCI", "commodity channel index", "indicador cci", "CCI de Lambert", "cci sobrecompra sobreventa"]
source_hash: "c87cbeec27568a2e"
ai_translated: true
source_hash: "c87cbeec27568a2e"
---
El Commodity Channel Index (CCI) mide cuánto se ha desviado el precio de un activo de su valor medio estadístico. Desarrollado por Donald Lambert en los años ochenta para los mercados de materias primas, hoy se aplica también a acciones, divisas e índices, y es una herramienta básica para identificar condiciones de sobrecompra y sobreventa.

En DeepCharts, el CCI dibuja una sola línea en su propia área de gráfico alrededor de una línea cero, con líneas de umbral de sobrecompra y sobreventa configurables y una media de suavizado opcional.

## Qué es

El CCI responde: ¿está el precio inusualmente estirado respecto a su propia media? Una lectura fuertemente positiva significa que el precio opera muy por encima de su nivel típico para la ventana de análisis; una lectura fuertemente negativa significa que opera muy por debajo. Como el índice mide desviación en lugar de cambio bruto, sirve tanto para señalar oportunidades de reversión a la media en rangos como para confirmar fortaleza en tendencias.

## Cuándo usarlo

- Opera configuraciones de reversión a la media y quiere una medida estadística de "estirado" en lugar de una estimación visual.
- Quiere confirmar la fortaleza de una ruptura: una lectura que se mantiene profundamente en territorio positivo señala una fuerte desviación alcista que no revierte de inmediato.
- Busca divergencias entre los extremos del precio y los extremos de la desviación.
- Opera materias primas o futuros y quiere la herramienta que fue diseñada para su comportamiento cíclico.

## Inicio rápido

1. Abra un gráfico y pulse **Ctrl I** — o haga clic en el icono de gráfico de barras en la barra de herramientas del gráfico y luego en **Indicators** — para abrir la **Indicator List** (Lista de indicadores).
2. Busque "Commodity Channel Index" (o "CCI") y haga clic en **+** para añadirlo. El indicador se dibuja en su propia área de gráfico debajo de las barras de precio (consulte [[indicator-layout]]).
3. Haga clic en el icono de engranaje en la fila del indicador para abrir su configuración.
4. Establezca **Input Data** en Close y elija un **Period**; 14 o 20 son los puntos de partida habituales de los manuales. Establezca los niveles de sobrecompra y sobreventa según su zona extrema; +100 y −100 son la convención clásica.

[SCREENSHOT: Un gráfico con el indicador CCI en su propia área debajo del precio, con la línea disparándose por encima de la línea de umbral de sobrecompra y girando de vuelta hacia cero | dc-es-cci-01.png]

## Cómo leerlo

- **Línea cero.** Una lectura cercana a cero significa que el precio está en su media estadística para la ventana. Cuanto más se aleja la línea de cero, más estirado está el precio.
- **Zonas extremas.** La mayoría de los operadores consideran las lecturas más allá de ±100 como la zona extrema. En un rango, una rotación de vuelta al interior de la zona es un disparador clásico de reversión a la media. En una tendencia, una lectura que se *mantiene* más allá de +100 (o −100) es evidencia de fortaleza de la tendencia, no una señal automática de operar en contra.
- **Divergencia.** El precio marca un nuevo extremo mientras el CCI marca uno más superficial: la desviación se está reduciendo y el movimiento puede estar agotándose.
- **Primero el régimen.** La misma lectura significa cosas opuestas en un rango y en una tendencia. Decida en qué estado de mercado se encuentra antes de actuar sobre un extremo.

## Referencia de configuración

Abra el diálogo desde el icono de engranaje en la fila del indicador en el panel **Indicators**.

### Parámetros: General

| Configuración | Qué hace |
|---|---|
| **Input Data** | La serie de datos usada para el cálculo del CCI. Consulte [[different-types-of-input]]. |
| **Period** | Número de periodos del cálculo. Periodos más cortos producen más visitas a la zona extrema; periodos más largos reservan los extremos para movimientos genuinamente inusuales. |

### Parámetros: Media

| Configuración | Qué hace |
|---|---|
| **Enable** | Activa o desactiva la línea de media (suavizado) opcional. |
| **Average Type** | Método de promedio de la línea: Simple, Exponencial y otros métodos. |
| **Periods** | Número de periodos para el cálculo de la media. |

### Niveles

| Configuración | Qué hace |
|---|---|
| **Overbought level** | Posición de la línea de umbral superior. ±100 es la convención clásica. |
| **Oversold level** | Posición de la línea de umbral inferior. |
| **Zero line color** | Color de la línea central (cero). |

### Series

| Configuración | Qué hace |
|---|---|
| **CCI line color** | Color de la línea principal del CCI. |
| **Secondary color** | Color adicional opcional para la visualización. |
| **Average line color** | Color de la línea de media opcional. |
| **Display style** | Cómo se dibuja la serie en el área del gráfico. |
| **Line style / Line width** | Estilo de dibujo y grosor de las líneas. |
| **Use secondary axis** | Traza el indicador contra un eje de valores secundario. |

[SCREENSHOT: El diálogo de configuración del CCI mostrando los parámetros generales con Input Data y Period, la sección Average y la sección Levels con las opciones de sobrecompra, sobreventa y línea cero | dc-es-cci-02.png]

## Consejos y errores comunes

- **El CCI no tiene límites.** Puede ir mucho más allá de ±100 en una tendencia fuerte: una lectura de sobrecompra no es, por sí sola, una señal de venta.
- **Opere en contra en rangos, a favor en tendencias.** Las lecturas más allá de ±100 son material de reversión dentro de un rango y material de continuación dentro de una tendencia. Aplicar el manual de rangos a un mercado en tendencia es el error más común con el CCI.
- **Suavice antes de acortar.** Si la línea tiene demasiado ruido, habilite la sección Average en lugar de recortar el **Period**: conserva el significado estadístico de la ventana mientras limpia la visualización.
- **Mantenga el Input Data consistente.** Haga backtesting y opere con la misma entrada; cambiar la fuente de precio cambia dónde caen los extremos.

## Artículos relacionados

- [[rsi|Índice de fuerza relativa (RSI)]]
- [[stochastic-oscillator]]
- [[williams-r|Williams %R]]
- [[macd]]
- [[different-types-of-input]]
- [[indicator-layout]]