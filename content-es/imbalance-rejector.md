---
title: "Rechazador de Desequilibrios (Imbalance Rejector)"
slug: "imbalance-rejector"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Referencia del indicador Rechazador de Desequilibrios (Imbalance Rejector): cómo marca posibles giros a partir de desequilibrios en máximos y mínimos de swing, y qué controla cada configuración."
keywords: ["rechazador de desequilibrios", "rechazo de desequilibrio", "marcador de giro", "desequilibrio diagonal", "rechazo de swing", "imbalance rejector", "indicador de giro de flujo de órdenes"]
source_hash: "1a70dc23083d5901"
ai_translated: true
source_hash: "1a70dc23083d5901"
---
El Rechazador de Desequilibrios (Imbalance Rejector) identifica patrones volumétricos basados en desequilibrios y devuelve marcadores directamente sobre el gráfico para resaltar posibles situaciones de giro. En lugar de dibujar zonas como [[imbalance-tracker]], busca un evento específico: un desequilibrio agresivo impreso en un máximo o mínimo de swing, una señal de que el empuje hacia el extremo puede estar siendo rechazado.

Como trabaja con comparaciones diagonales de Bid/Ask en los extremos de las barras, este indicador asume que usted domina la lógica del footprint. Si términos como comprador agresivo, tick de Bid y tick de Ask son nuevos para usted, empiece por [[orderflow-101]] y [[reading-a-footprint]].

## Qué es

En el máximo de una vela bajista o en el mínimo de una vela alcista, el indicador compara el volumen en diagonal entre las columnas de Ask y Bid de ticks de precio vecinos. Cuando el porcentaje de desequilibrio en ese extremo supera su mínimo, y el extremo califica como punto de swing dentro de su período de retroceso, se traza un marcador a un número configurable de ticks del máximo o del mínimo.

La comparación diagonal se entiende mejor haciéndola: en el footprint interactivo de abajo, ajuste la ratio de desequilibrio y pase el cursor sobre las celdas bid×ask para ver qué pares diagonales califican.

[WIDGET: footprint-lab]

## Cuándo usarlo

- Para detectar posibles puntos de giro donde un extremo imprimió un desequilibrio fuerte.
- Para confirmar un máximo o mínimo de swing con evidencia de flujo de órdenes antes de operar contra un movimiento.
- Para automatizar un patrón que de otro modo tendría que buscar manualmente en un gráfico footprint.
- Para generar puntos de referencia para análisis posteriores con sus otras herramientas de flujo de órdenes.

## Inicio rápido

1. Añada **Imbalance Rejector** a su gráfico.
2. Revise **% Min. Imbalance**: es el control principal de sensibilidad; valores más altos exigen un desequilibrio más fuerte antes de imprimir un marcador.
3. Ajuste el **Lookback Period** para definir cuántas barras a la izquierda deben confirmar un máximo o mínimo como punto de swing.
4. En las opciones de subgraph, elija colores y formas de marcador distintos para las señales alcistas y bajistas, de modo que pueda leerlos de un vistazo.

[SCREENSHOT: Un gráfico con el Rechazador de Desequilibrios activo, mostrando un marcador bajista trazado unos ticks por encima de un máximo de swing y un marcador alcista por debajo de un mínimo de swing, en colores contrastantes | dc-es-imbalance-rejector-01.png]

## Cómo leerlo

Un marcador bajista por encima de un máximo de swing significa que el indicador encontró el desequilibrio requerido en los máximos de una vela bajista: el empuje hacia el máximo fue recibido con un desequilibrio consistente con un rechazo, así que el nivel es candidato a un movimiento a la baja. Un marcador alcista por debajo de un mínimo de swing es el caso espejo en los mínimos de una vela alcista.

Los marcadores son contexto, no órdenes de mando. El filtro de retroceso ya exige que el extremo sea un punto de swing genuino, pero la calidad de la señal sigue dependiendo de dónde aparece: un marcador de rechazo sobre un nivel de un marco temporal superior tiene más peso que uno en medio de un rango.

## Referencia de configuración

### Settings Imbalance

| Configuración | Qué hace |
|---|---|
| **% Min. Imbalance** | El porcentaje mínimo de desequilibrio que debe existir en los máximos para las velas bajistas, o en los mínimos para las velas alcistas, antes de considerar un marcador. |
| **Minimum Diagonal Comparison** | La comparación diagonal mínima en la que buscar un desequilibrio. Con 1, el tick de Ask más reciente se compara con el tick de Bid anterior para las barras bajistas (y el tick de Bid más reciente con el tick de Ask anterior para las barras alcistas); valores más altos amplían la comparación a más ticks de la vela. |
| **Lookback Period** | El número de barras requerido a la izquierda para que el máximo o mínimo de una vela califique como punto de swing. Períodos más cortos imprimen más marcadores pero con menor fiabilidad; períodos más largos imprimen menos marcadores, pero más robustos. |
| **Tick Offset** | A cuántos ticks del máximo o del mínimo se traza el marcador: es solo un desplazamiento visual para mantener los marcadores separados de la barra. |

### Subgraphs

- **Colores** — colores separados para las señales alcistas y bajistas.
- **Forma del marcador** — cuadrado, círculo, rombo, triángulo o cruz.
- **Grosor** — tamaño/peso de los marcadores trazados.

[SCREENSHOT: El diálogo de configuración del Rechazador de Desequilibrios mostrando el grupo Settings Imbalance con % Min. Imbalance, Minimum Diagonal Comparison, Lookback Period y Tick Offset | dc-es-imbalance-rejector-02.png]

## Consejos y errores comunes

- **No configure el retroceso demasiado corto.** Se aplica el propio compromiso de la documentación: los retrocesos cortos inundan el gráfico de señales frágiles; los retrocesos largos compensan su escasez con robustez.
- **Ajuste % Min. Imbalance por instrumento.** Lo que cuenta como desequilibrio extremo en un contrato puede ser ruido rutinario en otro.
- **Entienda qué cambia Minimum Diagonal Comparison.** Aumentarlo amplía la búsqueda a más ticks de la vela, lo que cambia el carácter de la señal: vuelva a probar tras ajustarlo.
- **Use Tick Offset solo por legibilidad.** Mueve el marcador, no el nivel detectado; el rechazo sigue estando en el máximo o mínimo real.
- **Combine, no aísle.** Emparejar los marcadores con las zonas de [[imbalance-tracker]] o con un marco de swings como [[swing-point]] da a cada señal un contexto de ubicación.

## Artículos relacionados

- [[orderflow-101]]
- [[reading-a-footprint]]
- [[imbalance-tracker]]
- [[swing-point]]
- [[different-types-of-input]]
- [[indicator-layout]]