---
title: "POC Dinámico"
slug: "dynamic-poc"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Referencia del indicador POC Dinámico: un punto de control móvil sobre los últimos N minutos o barras, con bandas envolventes configurables y todas las opciones explicadas."
keywords: ["POC dinámico", "POC móvil", "punto de control", "POC en movimiento", "envolvente de POC", "punto de control de volumen", "poc dinamico", "punto de control dinámico"]
source_hash: "6a1d0d69c54c8a0e"
ai_translated: true
source_hash: "6a1d0d69c54c8a0e"
---
El indicador POC Dinámico (Dynamic POC) sigue el nivel de precio donde se ha desarrollado el mayor volumen en una ventana móvil — los últimos N minutos o las últimas N barras — y lo traza como una línea en movimiento en su gráfico. Alrededor de esa línea puede dibujar hasta tres bandas envolventes configurables, ofreciéndole una vista dinámica de dónde se concentra el volumen y de cuánto se ha alejado el precio de él.

Mientras un perfil de sesión le da un POC estático por periodo, el POC Dinámico responde una pregunta distinta: ¿dónde está el ancla de volumen del mercado en este momento? Para la teoría detrás del punto de control, consulte [[understanding-volume-profile]].

## Qué es

En cada momento el indicador construye una distribución de volumen sobre su periodo de referencia elegido y marca su punto de control: el único nivel de precio con el máximo volumen negociado en esa ventana. A medida que llegan datos nuevos y los datos antiguos salen de la ventana, el POC se actualiza, produciendo una línea que sigue el centro de volumen cambiante del mercado. La sección de envolvente añade bandas porcentuales por encima y por debajo del POC que actúan como desviaciones de volatilidad.

Para experimentar de forma práctica cómo una distribución de volumen produce su punto de control, pase el cursor sobre las filas del perfil interactivo de abajo — el POC es la fila magenta:

[WIDGET: volume-profile-lab]

## Cuándo usarlo

- Para seguir el ancla de volumen actual del mercado de forma intradía sin gestionar periodos de perfil manualmente.
- Para juzgar si el precio opera en, por encima o por debajo del nivel donde el mercado ha operado más.
- Para enmarcar el comportamiento de estiramiento y reversión con las bandas envolventes alrededor del POC móvil.
- Para comparar ventanas cortas (subasta reciente) con ventanas largas (aceptación establecida) ejecutando dos instancias.

## Inicio rápido

1. Añada **Dynamic POC** a su gráfico.
2. Elija un **Period Mode** (Modo de periodo): **Minutes** para una ventana basada en tiempo (útil para patrones de volumen intradía a corto plazo) o **Bars** para una ventana por número de velas.
3. Establezca el **Period Value** (Valor del periodo) — por ejemplo, 120 con **Minutes** muestra el POC de la ventana de los 120 minutos anteriores.
4. Mantenga los tres porcentajes de envolvente en sus valores configurados para empezar, y luego amplíelos o redúzcalos una vez que haya visto cuánto suele estirarse su instrumento respecto a su POC.

[SCREENSHOT: Un gráfico intradía con la línea de POC Dinámico siguiendo el punto de control móvil, con tres bandas envolventes trazadas por encima y por debajo | dc-es-dynamic-poc-01.png]

## Cómo interpretarlo

La línea del POC es el consenso móvil: el precio donde se hizo la mayor parte del negocio en su ventana. Que el precio se mantenga cerca de ella significa que el mercado está aceptando valor allí; que el precio se aleje significa que el mercado está buscando valor en otra parte. Cuando el precio opera muy por encima del POC móvil, la compra reciente aún no ha sido ratificada por volumen a esos precios más altos — un estiramiento que o bien se consolida (el POC migra hacia arriba) o revierte.

Las envolventes gradúan ese estiramiento. La primera banda marca una desviación leve, la segunda una significativa, la tercera una extrema. Observar si la línea del POC sigue al precio (comportamiento de tendencia) o se mantiene quieta mientras el precio regresa (comportamiento de rotación) es la lectura central.

## Referencia de configuración

### General

| Configuración | Qué hace |
|---|---|
| **Period Mode** | Tipo de periodo de referencia: **Minutes** muestra el POC de los últimos n minutos (adecuado para análisis de volumen intradía a corto plazo); **Bars** muestra el POC de las últimas n barras (basado en número de velas). |
| **Period Value** | La ventana numérica para el modo seleccionado — por ejemplo, 120 en modo **Minutes** muestra el POC de la ventana de los 120 minutos anteriores. |

### Envolvente

Bandas porcentuales alrededor del POC que muestran desviaciones de volatilidad:

| Configuración | Qué hace |
|---|---|
| **% First** | Desviación de la primera banda envolvente (la más interna). El valor predeterminado típico documentado es 0.10. |
| **% Second** | Desviación de la segunda banda envolvente. El valor predeterminado típico documentado es 0.25. |
| **% Third** | Desviación de la tercera banda envolvente (la más externa). El valor predeterminado típico documentado es 0.50. |

La documentación de origen da este ejemplo: con el POC en 5900 y **% First** en 0.10, las primeras bandas aparecen aproximadamente en 5890 y 5910. [CONFIRM: exact unit/scaling of the envelope percentage values — the 5900 → ±10 points example does not correspond to a plain 0.10% calculation.]

### Subgráficos

- **Color de la línea del POC**, más una opción de color secundario.
- **Estilo de línea**, **ancho** y ajustes de grosor.
- **Nombre corto personalizado** para la etiqueta del indicador.

[SCREENSHOT: El diálogo de configuración de Dynamic POC mostrando Period Mode, Period Value y los tres campos de porcentaje de envolvente | dc-es-dynamic-poc-02.png]

## Consejos y errores comunes

- **Ajuste la ventana a su horizonte de trading.** Un POC de 120 minutos y un POC de 20 barras responden preguntas distintas; tomar decisiones de scalping con una ventana lenta (o viceversa) mezcla marcos temporales.
- **Minutes y Bars no son intercambiables.** En modo **Minutes** el número de barras de la ventana varía con el marco temporal de su gráfico; en modo **Bars** varía el lapso de tiempo. Elija el modo que coincida con su forma de pensar.
- **No trate los toques de la envolvente como reversiones automáticas.** En días de tendencia el POC migra y el precio puede desplazarse sobre la banda externa; confirme con la propia dirección de la línea del POC.
- **Verifique el escalado de la envolvente en su instrumento.** Trace las bandas y compruebe las distancias reales antes de dimensionar el riesgo con ellas.

## Artículos relacionados

- [[understanding-volume-profile]]
- [[bar-poc]]
- [[deep-profile]]
- [[market-profile-tpo]]
- [[different-types-of-input]]
- [[indicator-layout]]