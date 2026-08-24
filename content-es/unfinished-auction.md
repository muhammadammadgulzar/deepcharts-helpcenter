---
title: "Subasta sin terminar (Unfinished Auction)"
slug: "unfinished-auction"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Referencia del indicador Unfinished Auction: cómo detecta máximos y mínimos donde la subasta no se completó, y cada ajuste para filtrarlos y extenderlos."
keywords: ["subasta sin terminar", "asuntos pendientes", "subasta terminada", "máximo defectuoso", "mínimo defectuoso", "anomalía de subasta", "unfinished auktion", "impresiones cero en el máximo"]
source_hash: "3eead02216946b22"
ai_translated: true
source_hash: "3eead02216946b22"
---
El indicador Unfinished Auction encuentra máximos y mínimos donde la subasta del mercado no se completó — extremos alcanzados sin que apareciera la agresión del lado opuesto — y los marca con rectángulos en su gráfico. Estos niveles representan asuntos pendientes: en la teoría de subastas, el precio vuelve con frecuencia a revisitarlos.

Este artículo cubre el indicador en sí. Para la teoría subyacente de las subastas terminadas y sin terminar, vea [[understanding-auction-theory]].

## Qué es

Una subasta terminada ocurre cuando el precio alcanza un extremo donde participan tanto compradores agresivos como vendedores agresivos: el mercado exploró el nivel por completo. Una subasta sin terminar ocurre cuando se alcanza un extremo sin la presencia de la agresión del lado opuesto: por ejemplo, un máximo que muestra 60 vendedores agresivos pero cero compradores agresivos. Ese extremo nunca se probó adecuadamente, y puede atraer una futura revisita.

Técnicamente, el indicador busca anomalías en los extremos de las barras. Normalmente el máximo de una vela muestra 0 en el Bid con contratos en el Ask, y su mínimo muestra contratos en el Bid con 0 en el Ask. Cuando este patrón se rompe — contratos en el Bid imprimiéndose en un máximo, o contratos en el Ask imprimiéndose en un mínimo — el indicador muestra un rectángulo en la anomalía.

Pase el cursor por las celdas bid×ask del footprint interactivo de abajo para ver esa estructura por sí mismo: observe cómo los extremos de una barra normalmente imprimen cero en un lado:

[WIDGET: footprint-lab]

## Cuándo usarlo

- Para construir un mapa de máximos y mínimos sin terminar que puedan actuar como imanes para futuras revisitas del precio.
- Para juzgar si el extremo de un swing fue una subasta completada (más seguro operar en su contra) o sin terminar (probable que sea retesteada).
- Para combinar la evidencia de compleción de la subasta con su lectura del footprint — vea [[reading-a-footprint]].
- Para seguir cómo se comporta el precio cuando regresa a reparar los asuntos pendientes.

## Inicio rápido

1. Añada **Unfinished Auction** a su gráfico.
2. Ajuste **Days to Load** para controlar cuánto historial se escanea y se muestra.
3. Mantenga **Show rectangle** habilitado y elija colores distintos para **Color Bad High** y **Color Bad Low** de modo que los dos tipos de anomalía sean fáciles de separar.
4. Si el gráfico se satura, use la configuración de filtro en modo manual para exigir un volumen mínimo antes de resaltar una anomalía.

[SCREENSHOT: Un gráfico de futuros con el indicador Unfinished Auction mostrando un rectángulo en un máximo de swing marcado como máximo defectuoso, en un color que contrasta con un rectángulo de mínimo defectuoso en un mínimo de swing más abajo | dc-es-unfinished-auction-01.png]

## Cómo leerlo

Un rectángulo en un máximo (un máximo defectuoso o "bad high") significa que la subasta al alza terminó sin que compradores agresivos participaran en el extremo: el mercado no terminó de explorar precios más altos allí. Un rectángulo en un mínimo (un mínimo defectuoso o "bad low") es el caso simétrico. En ambas situaciones el nivel es candidato a una revisita: muchos traders de subastas esperan que el precio vuelva, toque el nivel y complete la subasta antes de que el mercado siga adelante.

Trate estos niveles como puntos de referencia y no como operaciones automáticas. Un máximo sin terminar por encima del mercado es una razón para ser cauteloso con los cortos agresivos hacia esa zona, y un candidato a objetivo para los largos; una vez que el nivel se revisita y se repara, su efecto imán está agotado.

## Referencia de configuración

### General

| Ajuste | Qué hace |
|---|---|
| **Days to Load** | Número de días históricos escaneados y mostrados. |
| **Line Width** | Grosor de la línea divisoria del rectángulo. |
| **Color Bad High** / **Color Bad Low** | Colores separados para diferenciar las anomalías de máximo de las de mínimo. |
| **Show rectangle** | Alterna la visibilidad del rectángulo. |
| **Show background** | Alterna el fondo relleno del área marcada. |
| **Opacity** | Transparencia del relleno de fondo. |

### Filtro

El modo manual habilita el filtrado por volumen mínimo, de modo que solo se resaltan las anomalías con volumen significativo. Úselo en instrumentos activos donde las impresiones diminutas en los extremos inundarían el gráfico.

### Extensión

Controla la extensión de líneas desde las anomalías detectadas:

- Extender líneas desde la anomalía hacia adelante en el tiempo.
- Las opciones de reinicio diario detienen las extensiones al final del día.
- Los controles de intersección con la sombra de la vela deciden cómo un toque de la mecha de una vela interactúa con la línea extendida (y la termina).

[SCREENSHOT: El diálogo de configuración de Unfinished Auction mostrando la sección General con Days to Load, Line Width, Color Bad High, Color Bad Low, Show rectangle, Show background y Opacity | dc-es-unfinished-auction-02.png]

## Consejos y errores comunes

- **Filtre por volumen en los contratos líquidos.** Sin un filtro de volumen mínimo, las impresiones menores en los extremos generan anomalías que aportan poca información.
- **Sin terminar no significa inmediato.** La revisita puede llegar muchas barras — o sesiones — después; use **Days to Load** y la configuración de extensión para mantener a la vista los niveles antiguos.
- **Distinga los niveles reparados.** Una vez que el precio ha vuelto a un extremo sin terminar, la subasta allí está completa; no siga operando el nivel como un imán.
- **Los colores son su lectura más rápida.** Mantener **Color Bad High** y **Color Bad Low** claramente diferenciados hace que el gráfico sea legible de un vistazo en mercados rápidos.

## Artículos relacionados

- [[understanding-auction-theory]]
- [[auction-gap-tracker]]
- [[reading-a-footprint]]
- [[deep-print]]
- [[different-types-of-input]]
- [[indicator-layout]]