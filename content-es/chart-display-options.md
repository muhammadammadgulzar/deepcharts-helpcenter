---
title: "Opciones de visualización del gráfico (estilos de barra, sesiones, cuenta regresiva)"
slug: "chart-display-options"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "El menú desplegable de las dos velas explicado: estilos de vela/línea/OHLC, velas equi-volumen y delta-volumen, conmutador de sesión ETH/RTH, filtro de subasta, valores de barra y cuenta regresiva."
keywords: ["estilo de barra", "gráfico de línea", "OHLC", "barras equi-volumen", "barras delta-volumen", "sesión ETH", "RTH", "filtro de subasta", "temporizador de cuenta regresiva", "valores de barra", "colores de velas", "ancho de vela"]
source_hash: "ef4e8ba50ad718eb"
ai_translated: true
source_hash: "ef4e8ba50ad718eb"
---
La forma más rápida de cambiar el aspecto de un gráfico en DeepCharts es el icono de las dos velas en la parte superior izquierda de cada ventana de gráfico. Su menú desplegable contiene el estilo de barra (vela, línea, OHLC), dos modificadores visuales que codifican el volumen y el delta en las velas, el conmutador de sesión ETH/RTH, el filtro de subasta, el indicador de valores de barra y la cuenta regresiva al cierre de la barra.

Varios de estos conmutadores son atajos a configuraciones que también viven en el diálogo **Price Settings** (Configuración de precio); este artículo le dice cuáles, para que siempre sepa dónde está la configuración "real". Para el diálogo completo, consulte [[price-chart-settings]].

## Qué es

El menú desplegable de estilo de barra es el menú rápido de visualización del gráfico. Responde a "cómo cambio a un gráfico de línea", "por qué mis velas tienen anchos diferentes o colores extraños", "cómo oculto los datos nocturnos" y "cómo obtengo una cuenta regresiva al cierre de la barra", todo sin abrir un diálogo de configuración.

[SCREENSHOT: El menú desplegable del icono de dos velas abierto en un gráfico, mostrando Candlestick resaltado como activo, Line, OHLC, las casillas Equi-Volume Bars y Delta-Volume Bars, ETH Session marcada, Auction filter, Bar values marcada, Countdown timer y la entrada Price Settings al final | dc-es-chart-display-options-01.png]

## Cuándo usarlo

- Cambiar entre representación de velas, línea y OHLC.
- Activar velas con ancho por volumen (Equi-Volume) o velas coloreadas por delta (Delta-Volume).
- Mostrar solo el horario regular de negociación, o la sesión ETH completa incluida la nocturna.
- Alternar el indicador OHLC superior izquierdo y la cuenta regresiva al cierre de la barra.
- Saltar al diálogo completo **Price Settings**.

## Inicio rápido

1. Haga clic en el icono de las dos velas en la parte superior izquierda del gráfico.
2. Elija un estilo base: **Candlestick** (predeterminado), **Line** u **OHLC**; son excluyentes y el activo aparece resaltado.
3. Opcionalmente marque **Equi-Volume Bars** y/o **Delta-Volume Bars**; son casillas que se aplican sobre el estilo base y ambas pueden estar activas a la vez.
4. El gráfico se redibuja de inmediato (el filtro de subasta es el único elemento que provoca una reconstrucción completa).

## Cómo leerlo

**Velas Equi-Volume:** el ancho codifica el volumen de la barra en relación con otras velas: una vela ancha negoció mucho, una delgada muy poco. El objetivo es ver al instante si un movimiento grande tuvo volumen real detrás o si un libro fino permitió que una pequeña orden agresiva moviera mucho el precio; juzgar eso mentalmente a partir de un histograma de volumen en tiempo real es difícil.

**Velas Delta-Volume:** la intensidad del color codifica el delta. Color pálido = delta bajo; color intenso = delta alto. Verde más oscuro = más compradores agresivos (delta positivo); rojo más oscuro = más vendedores agresivos (delta negativo). ¿Es nuevo con el delta? Empiece con [[orderflow-101]].

**Indicador de valores de barra:** los campos **O: H: L: C:** de la parte superior izquierda más **%V** (variación porcentual respecto al cierre del día anterior), **ΣV** y **ΔV** (las cifras de volumen de la barra [CONFIRM: exact definitions of ΣV and ΔV]). Los valores se rellenan para la barra sobre la que pasa el cursor, o la última barra cuando el cursor está fuera del gráfico.

¿Es nuevo leyendo O, H, L y C en una vela? Pase el cursor sobre la vela de abajo: cada zona se explica sola, y puede alternarla entre alcista y bajista.

[WIDGET: candle-anatomy]

[SCREENSHOT: Comparación lado a lado del mismo movimiento de precio como velas estándar frente a Equi-Volume + Delta-Volume habilitados, mostrando anchos de vela variables y diferencias de intensidad verde/púrpura | dc-es-chart-display-options-02.png]

## Referencia de configuración

Elementos en el orden en que aparecen en el menú desplegable:

| Elemento | Qué hace |
|---|---|
| **Candlestick** | Velas estándar. Estilo base predeterminado. |
| **Line** | Una línea continua que conecta los precios de cierre de cada vela. |
| **OHLC** | Barras de apertura/máximo/mínimo/cierre: barras verticales con marcas de apertura y cierre. |
| **Equi-Volume Bars** | Modificador de casilla: ancho de vela = volumen negociado. Atajo a **Price Settings → VOLUME → Width based volume** (la misma configuración, en dos lugares). |
| **Delta-Volume Bars** | Modificador de casilla: intensidad del color de la vela = delta. Atajo a **Price Settings → DELTA → Color based on delta**. Puede combinarse con Equi-Volume. |
| **ETH Session** | Activado por defecto: el gráfico muestra el horario electrónico completo (Electronic Trading Hours), incluida la sesión nocturna. Desactivado: las barras ETH se ocultan y solo se muestra la acción del precio del horario regular. Es el inverso de **Price Settings → DATA → RTH - only** (el mismo conmutador). |
| **Auction filter** | Desactivado por defecto. Elimina de los cálculos los datos de las subastas de apertura/cierre; el comportamiento exacto puede variar [CONFIRM: precisely which auction prints are excluded]. Es la misma configuración que **Price Settings → Exclude Auction (Tick Data)**. Al alternarlo se reconstruye todo el gráfico. |
| **Bar values** | Activado por defecto. Muestra/oculta el indicador superior izquierdo (O H L C, %V, ΣV, ΔV). |
| **Countdown timer** | Muestra una caja 00:00 con la cuenta regresiva al cierre de la vela actual, en la parte inferior de la escala de precios (un gráfico de 5 minutos cuenta 5 minutos por vela). La posición de la caja es configurable en **Price Settings → COUNTDOWN**: el modo **Axis** la fija a la escala, el modo **Floating** la convierte en una caja libre que puede arrastrar a cualquier lugar. |
| **⚙ Price Settings** | Abre el diálogo completo de Price Settings; consulte [[price-chart-settings]]. |

> **Nota:** Al alternar **Auction filter** se muestra el indicador de progreso **Building chart** mientras todo el gráfico se reconstruye. La breve espera es normal: nada está roto.

### Controles de visualización relacionados en otros lugares

- **El tipo de barra y el marco temporal** (minutos, Range, Renko, Volume, barras Delta...) se eligen en el menú desplegable de marco temporal de la barra de título o en **Price Settings → Param Type**; consulte [[price-chart-settings]].
- **Las ventanas de sesión personalizadas** (por ejemplo, solo las dos primeras horas tras la apertura) y la línea vertical de inicio del día se configuran en **Price Settings → CUSTOM TIME SESSION** y **LINE START DAY**.
- El fondo del gráfico, la cuadrícula y los colores de texto viven en clic derecho → **Properties**; consulte [[chart-window]].

## Consejos y errores comunes

- **"Mis velas se ven deslavadas / los colores son extraños"**: el modo Delta-Volume está activado. La intensidad codifica el delta; no es un tema roto. Desmarque **Delta-Volume Bars** para volver.
- **"Mis velas tienen anchos diferentes"**: el modo Equi-Volume está activado; el ancho codifica el volumen.
- **"Mi gráfico muestra velas diferentes a las de mi colega"**: revise primero el conmutador **ETH Session**: probablemente uno de los dos está en solo RTH. Conceptos básicos de sesiones: [[understanding-market-structure-sessions]].
- **"La cuenta regresiva se queda en 00:00"**: en una fuente con retraso o inactiva no hay ticks en vivo que la impulsen; consulte [[free-delayed-data-feed]].
- **"Mi indicador OHLC está vacío"**: los campos solo se rellenan mientras pasa el cursor sobre las barras (o desde la última barra); si nunca se rellenan, compruebe que **Bar values** esté marcado.
- Los dos modificadores de casilla y los estilos base son independientes: cambiar de Candlestick → Line mantiene marcados Equi-Volume/Delta-Volume.

## Artículos relacionados

- [[price-chart-settings]]
- [[chart-window]]
- [[understanding-market-structure-sessions]]
- [[orderflow-101]]
- [[quick-chart-templates]]