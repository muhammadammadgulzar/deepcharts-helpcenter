---
title: "Delta Profundo (Deep Delta)"
slug: "deep-delta-deepdom"
category: "Deep Indicators"
subcategory: ""
type: "reference"
difficulty: "advanced"
time: "2 min read"
description: "Delta Profundo (Deep Delta) es una versión avanzada de Delta Bar que le permite aplicar filtros al delta y resaltar hasta cuatro rangos configurables, facilitando el enfoque en desequilibrios significativos de compra o venta."
keywords: ["delta profundo", "delta profundo deepdom", "deepdom", "indicadores deep"]
source_hash: "c861012bbd343d5e"
ai_translated: true
source_hash: "c861012bbd343d5e"
---
Delta Profundo (Deep Delta) es una versión avanzada de Delta Bar que le permite aplicar filtros al delta y resaltar hasta cuatro rangos configurables, facilitando el enfoque en desequilibrios significativos de compra o venta.

[SCREENSHOT: Delta Profundo — vista general (DeepDOM) | dd-es-deep-delta-deepdom-01.png]

## Configuración de uso

Haga clic con el botón derecho en el gráfico y seleccione **Indicators** (Indicadores).

Busque el indicador deseado y añádalo a su espacio de trabajo haciendo clic en el botón "+".

Abra el panel de configuración del indicador, personalice los parámetros según sus preferencias y confirme los cambios haciendo clic en **Save** (Guardar).

[SCREENSHOT: Delta Profundo — Configuración de uso (DeepDOM) | dd-es-deep-delta-deepdom-02.png]

## Configuración general

[SCREENSHOT: Delta Profundo — Configuración general (DeepDOM) | dd-es-deep-delta-deepdom-03.png]

#### Datos de entrada (Input Data)

[SCREENSHOT: Delta Profundo — Datos de entrada (DeepDOM) | dd-es-deep-delta-deepdom-04.png]

Seleccione la base de datos utilizada para calcular el delta:

Volume – volumen total negociado en cada precio.

Aggregate Trades – volumen agregado de operaciones agrupadas en el mismo nivel de precio.

Trades – número de operaciones ejecutadas en cada precio.

Order – cantidades de órdenes en cada precio, útil para evaluar la presión de órdenes.

#### Modo de delta (Delta Mode)

[SCREENSHOT: Delta Profundo — Modo de delta (DeepDOM) | dd-es-deep-delta-deepdom-05.png]

Elija cómo se calcula el delta:

Classic – se comporta como el Delta Bar estándar.

Multi Range – habilita toda la funcionalidad de Delta Filter Bar con múltiples rangos filtrados.

#### Barras agrupadas

Establece cuántas barras se agrupan juntas. Un valor más pequeño produce información más detallada; un valor más grande suaviza el resultado.

## Idea central

Las barras de delta estándar muestran todos los desequilibrios con el mismo peso visual. Delta Filter Bar añade lógica encima:

Usted define rangos de magnitud del delta (p. ej., 0–100, 100–300, 300–600, 600+).

Cada rango puede usar colores diferentes para los deltas de Bid y Ask.

Los rangos más pequeños proporcionan contexto, mientras que los rangos más grandes resaltan la agresión genuina de nivel institucional.

## Configuración de los rangos 1–4

[SCREENSHOT: Delta Profundo — Configuración de los rangos 1–4 (DeepDOM) | dd-es-deep-delta-deepdom-06.png]

Cada rango se configura de forma independiente e incluye:

Un interruptor **Enable** (Habilitar).

Campos de filtro **Min** y **Max** (valores de delta).

Opciones de color para los deltas de Bid y Ask en ese rango.

Establecer *Max = 0* en un rango elimina el límite superior, de modo que todos los deltas por encima del mínimo caen en esa banda.

#### Ejemplo: mapa de delta de cuatro niveles

Rango 1: 50–150 contratos (colores claros), Rango 2: 150–350 (medios), Rango 3: 350–700 (fuertes), Rango 4: 700+ (muy fuertes, colores saturados). En el gráfico, ve inmediatamente dónde tuvo lugar una agresión extrema, porque solo esas barras usan la paleta del Rango 4.