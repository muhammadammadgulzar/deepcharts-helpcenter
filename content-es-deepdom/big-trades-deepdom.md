---
title: "Operaciones grandes"
slug: "big-trades-deepdom"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "2 min read"
description: "El indicador Big Trades resalta las órdenes grandes agregadas en el gráfico mediante marcadores visuales, facilitando ver dónde ocurrieron las mayores transacciones de compra y venta."
keywords: ["operaciones grandes", "big trades deepdom", "deepdom", "indicadores"]
source_hash: "2de0a0d9309d8cc9"
ai_translated: true
source_hash: "2de0a0d9309d8cc9"
---
El indicador Operaciones grandes (Big Trades) resalta las órdenes grandes agregadas en el gráfico mediante marcadores visuales, facilitando ver dónde ocurrieron las mayores transacciones de compra y venta.

[SCREENSHOT: Operaciones grandes — visión general (DeepDOM) | dd-es-big-trades-deepdom-01.png]

## Configuración de uso

Abra la configuración del indicador haciendo clic en su icono de configuración. La ventana reúne todas las opciones de visualización y los controles de niveles.

[SCREENSHOT: Operaciones grandes — Configuración de uso (DeepDOM) | dd-es-big-trades-deepdom-02.png]

## Configuración de datos

[SCREENSHOT: Operaciones grandes — Configuración de datos (DeepDOM) | dd-es-big-trades-deepdom-03.png]

#### Input data

Elija el input utilizado para detectar operaciones grandes:

Volume – volumen total en cada nivel de precio.

Order – cantidades de órdenes en cada precio; útil para el análisis del flujo de órdenes.

Iceberg – se centra en la actividad de tipo iceberg.

Aggregate Trades – agrupa las operaciones pequeñas ejecutadas en una ventana de tiempo corta al mismo precio en una sola operación más grande.

#### Min / Max Filter

Min Filter – establece el tamaño mínimo requerido para que una operación se considere una operación grande.

Max Filter – establece el tamaño máximo. Dejarlo en 0 deshabilita el filtro máximo. Usar distintos filtros máximos es útil cuando se ejecutan varios indicadores Big Trades con bandas de tamaño diferenciadas.

## Configuración de trazado (Plot Settings)

[SCREENSHOT: Operaciones grandes — Configuración de trazado (DeepDOM) | dd-es-big-trades-deepdom-04.png]

Dev. standard – parámetro de desviación estándar utilizado para escalar el tamaño del marcador según la magnitud de la operación.

Minimum opacity – límite inferior de la opacidad del marcador; las operaciones más grandes obtienen fondos más opacos.

Ask/Bid Color – colores aplicados a las operaciones grandes ejecutadas en el lado del Ask (compra) y del Bid (venta).

Marker – elija la forma del marcador: Circle, Square, Diamond o Text.

Hollow fill – cuando está habilitado, elimina el fondo del marcador, dejando solo el contorno.

### Configuración de marcador y texto

[SCREENSHOT: Operaciones grandes — Configuración de marcador y texto (DeepDOM) | dd-es-big-trades-deepdom-05.png]

Marker Settings – defina los tamaños mínimo y máximo del marcador para aumentar el tamaño de la burbuja

Text Settings – configure el tamaño de fuente y el color al usar marcadores de texto.

## Aplicaciones de trading

#### 1. Localizar la actividad de los grandes participantes

Las operaciones grandes cerca de máximos/mínimos previos o del VWAP muestran dónde los grandes participantes defienden un nivel o inician nuevas posiciones. Cuando estos marcadores se alinean con un delta y un volumen fuertes, puede inferir que el flujo institucional está impulsando el movimiento.

#### 2. Agotamiento frente a iniciativa

Un grupo de operaciones grandes al final de una tendencia extendida puede significar dos cosas:

Continuación: si el precio atraviesa el nivel y se mantiene, es probable que los grandes participantes estén iniciando en la dirección de la ruptura.

Agotamiento: si el precio retrocede rápidamente, estas operaciones a menudo representan perseguidores tardíos siendo absorbidos por liquidez pasiva.

#### 3. Decisiones de escalado

Los traders profesionales vigilan las operaciones grandes en contra de su posición como señal temprana para reducir la posición o mover los stops. Por ejemplo, si está comprado hacia una resistencia y varias operaciones grandes del lado del Bid no logran empujar el precio al alza, puede indicar absorción y justificar reducir el riesgo.