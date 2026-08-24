---
title: "On Candle Stats"
slug: "on-candle-stats"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Imprime estadísticas por vela — volumen, delta, recuentos de operaciones y más — como cuadros de texto directamente en el gráfico junto a cada barra."
keywords: ["on candle stats", "estadísticas de vela", "volumen en la vela", "delta en la vela", "estadísticas por vela", "texto de estadísticas en velas", "estadísticas de barra en el gráfico"]
source_hash: "27b10b276355701b"
ai_translated: true
source_hash: "27b10b276355701b"
---
On Candle Stats imprime estadísticas detalladas directamente sobre sus velas como cuadros de texto: volumen total, delta, recuentos de operaciones y otros datos de microestructura de mercado, barra a barra. En lugar de alternar la vista entre el gráfico y un panel separado, los números se sitúan justo al lado de la acción del precio que describen.

Es un favorito de los traders de flujo de órdenes que quieren información de nivel footprint de un vistazo sin abrir un gráfico footprint completo para cada instrumento.

## Qué es

Para cada vela, el indicador calcula un conjunto de series de datos — hay once disponibles, incluidas Max/Min Delta, volumen total, volumen delta, operaciones totales, operaciones delta, extensión, COT High, COT Low, COT Bar, Bid-Ask/Vol y Ratio — y representa los valores que usted elija como un cuadro de texto compacto colocado encima, debajo o sobre la vela. Las opciones de coloreado y opacidad vinculan la apariencia del texto al signo y la magnitud del delta, de modo que la propia anotación transmite una lectura direccional.

[SCREENSHOT: Gráfico con On Candle Stats activo: pequeños cuadros de texto encima de cada vela mostrando valores de volumen y delta, las velas con delta positivo etiquetadas en texto verde y las de delta negativo en rojo | dc-es-on-candle-stats-01.png]

## Cuándo usarlo

- Quiere cifras exactas por barra (volumen, delta, operaciones) visibles en el gráfico mientras opera.
- Revisa sesiones barra a barra y necesita detalle de microestructura sin cambiar a [[deep-print]].
- Compara la agresión entre velas consecutivas en niveles clave: por ejemplo, un delta que se reduce mientras el precio presiona contra una resistencia.
- Anota gráficos para su diario o para enseñar, donde los valores deben ser legibles en una captura de pantalla.

## Inicio rápido

1. Abra la **Indicator List** en su gráfico y añada **On Candle Stats**.
2. Abra la **Settings** (configuración) del indicador.
3. Mantenga **Input Data** en **Volume** para empezar; cambie a **Aggregate Volume** cuando quiera que las órdenes al mismo precio se combinen para una vista de actividad más precisa (vea [[different-types-of-input]]).
4. Habilite solo las series de subgraph que realmente necesite — **Tot. Vol** y **Delta Vol** son un buen par mínimo — y deje el resto desactivado para mantener el gráfico legible.
5. Active **Color Text Based on Delta** para que las lecturas positivas se impriman en un color (normalmente verde) y las negativas en otro (normalmente rojo).
6. Ponga **Price Plot** en **High** y añada un pequeño **Tick Offset** para que los cuadros de texto queden despejados de las mechas de las velas.

[SCREENSHOT: Cuadro de diálogo de configuración de On Candle Stats: Data Settings arriba (Input Data, Filter Min, Filter Max), con las secciones Text, Coloring y Price debajo, y Color Text Based on Delta habilitado | dc-es-on-candle-stats-02.png]

## Cómo leerlo

- **Volumen con contexto de delta**: una vela de alto volumen con delta pequeño significa una batalla en ambos sentidos; alto volumen con un delta fuertemente unilateral significa convicción.
- **Delta contra la dirección de la vela**: una vela verde imprimiendo delta negativo (o viceversa) sugiere absorción o fuerza pasiva; merece una mirada más de cerca en un footprint.
- **Recuentos de operaciones frente a volumen**: muchas operaciones con volumen modesto sugieren participantes pequeños; menos operaciones cargando gran volumen sugieren que el tamaño está activo.
- **Gradación de opacidad**: con **Opacity Based on Ratio** habilitado, los cuadros más tenues marcan barras estadísticamente ordinarias y los más intensos marcan las que se desvían, permitiéndole repasar una sesión rápidamente.

## Referencia de configuración

### Data Settings

| Opción | Qué hace |
|---|---|
| **Input Data** | Base de datos utilizada para las estadísticas: **Volume** (volumen total en cada nivel de precio: intensidad de trading), **Order** (recuento de transacciones en cada nivel de precio: frecuencia de órdenes) o **Aggregate Volume** (combina las órdenes al mismo nivel de precio para una vista de actividad más precisa). |
| **Filter Min** | Umbral mínimo: solo se muestran los datos por encima de este valor. |
| **Filter Max** | Umbral máximo: establézcalo en **0** para no aplicar ningún filtro máximo. |

### Text Settings

| Opción | Qué hace |
|---|---|
| **Font Size** | Tamaño del texto sobre las velas. |
| **Smaller Font Size** | Tamaño de texto mínimo conservado para la legibilidad en escalas de gráfico más pequeñas. |
| **Auto Text Format** | Cuando está habilitado, los números por encima de mil se muestran agrupados (p. ej., "1,234"). |
| **Absolute Sign** | Cuando está habilitado, los valores se muestran sin signos +/-. |

### Coloring Settings

| Opción | Qué hace |
|---|---|
| **Opacity Based on Ratio** | Ajusta la opacidad del cuadro de texto según el ratio de la barra, restando énfasis a las barras ordinarias. |
| **Max Ratio** | Controla el ratio de opacidad máximo y la visibilidad del cuadro de texto. |
| **Color Text Based on Delta** | El delta positivo se imprime en un color (normalmente verde) y el delta negativo en otro (normalmente rojo). |

### Price Settings

| Opción | Qué hace |
|---|---|
| **Tick Offset** | Distancia en ticks entre el cuadro de texto y la vela, evitando la superposición con la acción del precio. |
| **Price Plot** | Colocación del texto: **High**, **Low**, **Center**, **Price Slope** o **Delta Sign**. |

### Subgraphs

Hay once series de datos disponibles para mostrar: **Max/Min Delta**, **Tot. Vol**, **Delta Vol**, **Tot. Trade**, **Delta Trade**, **Extension**, **COT High**, **COT Low**, **COT Bar**, **Bid-Ask/Vol** y **Ratio**. Habilite solo las series que realmente lea: cada serie activa añade una línea de texto a cada vela.

## Consejos y errores comunes

- **Menos es más.** Habilitar muchas series de subgraph convierte cada vela en un párrafo. Dos o tres valores bien elegidos superan a once sin leer.
- **Vigile el nivel de zoom.** El texto necesita espacio horizontal; en gráficos muy alejados habilite **Smaller Font Size** o los cuadros colisionarán.
- **La colocación Delta Sign es contextual.** Poner **Price Plot** en **Delta Sign** mueve el texto con la dirección del delta, lo que hace más rápida la lectura de un vistazo pero desplaza la posición de los cuadros barra a barra: elíjalo deliberadamente.
- **Use Absolute Sign para capturas de diario** donde el color ya transmite el signo y el desorden de +/- no aporta nada.

## Artículos relacionados

- [[deep-print]]
- [[deep-stats]]
- [[delta-bar]]
- [[market-statistics]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]