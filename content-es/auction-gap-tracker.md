---
title: "Auction Gap Tracker"
slug: "auction-gap-tracker"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Referencia del indicador Auction Gap Tracker: cómo resalta los zero prints y los huecos de baja participación en la subasta, con cada configuración explicada."
keywords: ["auction gap tracker", "zero prints", "huecos de subasta", "falta de participación", "seguimiento de unfinished", "indicador de zero print", "auction gap traker"]
source_hash: "d5a4c2a8188d7cbe"
ai_translated: true
source_hash: "d5a4c2a8188d7cbe"
---
El Auction Gap Tracker identifica huecos en el proceso de subasta, áreas del gráfico donde hay una falta de participación de compradores o vendedores, y resalta esos desequilibrios con rectángulos de colores. Mientras que [[unfinished-auction]] se centra en anomalías en los extremos de las barras, esta herramienta rastrea zero prints y participación casi nula en cualquier lugar donde la configure para mirar, incluso dentro de las barras.

Esta es una herramienta avanzada de flujo de órdenes: asume que usted entiende la compra y la venta agresivas en el Bid y el Ask. Si necesita los fundamentos, comience con [[orderflow-101]] y [[understanding-auction-theory]].

## Qué es

En los niveles de precio donde un lado de la cinta no negoció nada (un zero print) o casi nada, la subasta se saltó un paso: faltó participación. El Auction Gap Tracker busca series de tales niveles y, cuando aparecen suficientes consecutivos, dibuja un rectángulo que marca el hueco del lado comprador o del lado vendedor. Cuando el precio cruza más tarde un nivel resaltado, la opacidad del resaltado disminuye, indicando que el nivel ha sido cruzado.

Para ver cómo se ve un zero print dentro de una barra, pase el cursor sobre las celdas bid×ask en el footprint interactivo de abajo:

[WIDGET: footprint-lab]

## Cuándo usarlo

- Para mapear áreas de baja participación que el precio puede revisitar para completar la subasta.
- Para rastrear zero prints dentro de las barras, no solo en máximos y mínimos.
- Para separar los huecos no probados de los huecos que ya han sido reprobados (zonas activadas).
- Para recibir una alerta sonora cuando se detecta un nuevo hueco.

## Inicio rápido

1. Añada **Auction Gap Tracker** a su gráfico.
2. Comience de forma estricta: mantenga **Threshold-max. unfinished** en 0 para que solo se rastreen los verdaderos zero prints.
3. Establezca **Min. Num. Of Consecutive Zero** para exigir una serie de niveles: por ejemplo, 5 resalta solo áreas con cinco o más niveles de precio consecutivos sin un lado agresivo.
4. Elija su **Include Mode**: **Intrabar** para ignorar máximos y mínimos, o **All** para rastrear cada hueco que cumpla los requisitos.
5. Elija colores de compra y venta distintos, y habilite la visualización de zonas activadas si quiere que los huecos reprobados se mantengan en el gráfico.

[SCREENSHOT: Un gráfico con el Auction Gap Tracker activo, mostrando un rectángulo de hueco del lado vendedor completamente opaco extendiéndose hacia la derecha y un rectángulo de opacidad reducida donde el precio ya ha cruzado el nivel | dc-es-auction-gap-tracker-01.png]

## Cómo leerlo

Cada rectángulo marca una serie de niveles de precio donde un lado del mercado no participó. Un hueco del lado comprador significa que los compradores agresivos estuvieron ausentes en esos niveles; un hueco del lado vendedor significa que lo estuvieron los vendedores agresivos. La lógica de subasta trata estas como áreas incompletas que el mercado puede revisitar, de forma similar a los asuntos pendientes en un extremo, pero detectables en cualquier parte de la barra.

La opacidad es el indicador de estado: opacidad completa significa que el hueco está intacto desde su detección, mientras que opacidad reducida significa que el precio ha cruzado el nivel al menos una vez. Con **Enable Triggered Zone** activado, los huecos cruzados permanecen visibles en sus colores de activación; con **Trigger Only Touch** habilitado, solo se trazan los huecos que han sido reprobados al menos una vez.

## Referencia de configuración

### Unfinished Settings

| Configuración | Qué hace |
|---|---|
| **Minimum Tick Vol** | El volumen mínimo requerido en los ticks donde ocurre el cero. |
| **Threshold-max. unfinished** | Umbral máximo para el seguimiento de Unfinished. 0 rastrea solo zero prints; 1 rastrea también niveles donde solo se negoció 1 contrato en el lado del Ask o del Bid, y así sucesivamente. |
| **Include Mode** | **Intrabar** rastrea Unfinished solo dentro de las barras, excluyendo máximos y mínimos; **All** rastrea cada nivel Unfinished que cumpla sus parámetros. |
| **Min. Num. Of Consecutive Zero** | Número mínimo de ceros consecutivos requeridos para activar un resaltado: por ejemplo, 5 resalta solo series de cinco o más niveles de precio consecutivos sin compradores o vendedores agresivos. |

### Plot Settings

| Configuración | Qué hace |
|---|---|
| **Num. Extended Bars** | Cuántas barras hacia adelante se extienden las líneas del indicador. |
| **Line Width** | Grosor de las líneas. |
| **Buy Color** / **Sell Color** | Colores para los huecos del lado comprador y del lado vendedor. |
| **Enable Triggered Zone** | Cuando está habilitado, traza también los huecos que el precio ya ha reprobado. |
| **Trigger Only Touch** | Cuando está habilitado, traza solo los huecos que han sido reprobados al menos una vez. |
| **Buy Trig Color** / **Sell Trig Color** | Colores para las zonas Unfinished cruzadas (activadas). |

### Alert Settings

Alertas sonoras para las señales generadas, configurables por el usuario.

[SCREENSHOT: El diálogo de configuración del Auction Gap Tracker mostrando el grupo Unfinished Settings con Minimum Tick Vol, Threshold-max. unfinished, Include Mode y Min. Num. Of Consecutive Zero | dc-es-auction-gap-tracker-02.png]

## Consejos y errores comunes

- **Suba el umbral de forma deliberada.** Mover **Threshold-max. unfinished** por encima de 0 redefine qué cuenta como hueco: de verdaderos zero prints a participación escasa. Sepa en qué definición se apoya su estrategia.
- **Los ceros consecutivos son el filtro de ruido.** Los zero prints aislados son rutinarios; las series de ellos son la señal. Aumente **Min. Num. Of Consecutive Zero** si el gráfico se llena de resaltados triviales.
- **Elija el Include Mode conscientemente.** **Intrabar** excluye deliberadamente máximos y mínimos; si también quiere subastas sin terminar basadas en extremos, use **All** o combine esta herramienta con [[unfinished-auction]].
- **Lea la opacidad antes de actuar.** Un rectángulo desvanecido ya ha sido cruzado; su contenido informativo es diferente del de un hueco intacto.

## Artículos relacionados

- [[understanding-auction-theory]]
- [[unfinished-auction]]
- [[imbalance-tracker]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]