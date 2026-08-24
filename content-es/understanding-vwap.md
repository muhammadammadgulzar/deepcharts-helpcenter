---
title: "Entender el VWAP"
slug: "understanding-vwap"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "intermediate"
time: "6 min read"
description: "Qué mide el VWAP, por qué las instituciones lo usan como referencia, cómo funcionan las bandas de desviación estándar y cómo operar en torno a él sin los errores clásicos."
keywords: ["VWAP", "precio medio ponderado por volumen", "bandas vwap", "bandas de desviación estándar", "vwap vs media móvil", "vwap vs poc", "D-VL", "vwap de sesión", "retroceso al vwap"]
source_hash: "898979238857fc81"
ai_translated: true
source_hash: "898979238857fc81"
---
El VWAP — Volume Weighted Average Price, el precio medio ponderado por volumen — es una de las pocas líneas del gráfico que las mesas de ejecución profesionales, las estrategias algorítmicas y los traders intradía discrecionales observan al mismo tiempo. Esa atención compartida es exactamente lo que lo hace útil: es menos una herramienta de predicción que un punto de encuentro.

Este artículo explica qué mide realmente el VWAP, por qué se comporta de forma distinta a una media móvil, y cómo se construyen y se leen las bandas de desviación estándar que lo rodean. Para las herramientas que lo dibujan, vea la sección Véalo en DeepCharts.

## La idea en un párrafo

El VWAP es el precio medio de todo lo que se ha negociado hasta el momento en la sesión, donde cada operación cuenta en proporción a su tamaño. Imagine un puesto de un mercado agrícola vendiendo manzanas toda la mañana: unas pocas ventas tempranas a 2,10, un gran aluvión de ventas a 2,00, un puñado tardío a 2,30. La media simple de esos precios sobrepondera las ventas sueltas; la media ponderada por volumen — el dinero total recaudado dividido por el total de manzanas vendidas — le dice lo que la multitud pagó realmente. El VWAP es ese número para un mercado, actualizado operación a operación. Un precio por encima del VWAP significa que el participante medio que operó hoy tiene una ganancia en el lado largo; un precio por debajo significa que el comprador medio está en pérdidas. Ese único hecho da a cada movimiento intradía un punto de referencia.

## Por qué les importa a los traders

- **Es la referencia institucional.** A los algoritmos de ejecución se les juzga rutinariamente por si se ejecutaron mejor o peor que el VWAP, así que un gran flujo de órdenes pasivas se agrupa a su alrededor: por eso el precio reacciona allí tan a menudo.
- **Da un sesgo de sesión de un vistazo.** Una negociación persistente por encima de un VWAP ascendente es un día de compradores en control; una negociación persistente por debajo de un VWAP descendente es lo contrario. Un vaivén a ambos lados de un VWAP plano es un día de rotación.
- **Las bandas miden el estiramiento.** Las bandas de desviación estándar alrededor del VWAP se adaptan a la volatilidad propia del día, así que "extendido" significa lo mismo en un día tranquilo y en uno salvaje.
- **Se combina naturalmente con el flujo de órdenes.** Un retroceso al VWAP es una ubicación; lo que hagan el delta y el footprint en esa ubicación es la operación — vea [[orderflow-101]] y [[reading-a-footprint]].

## Cómo funciona

### El anclaje y el reinicio de sesión

El VWAP se calcula siempre *desde un ancla*. El ancla más común es el inicio del día de trading, así que la línea se reinicia cada sesión y las primeras impresiones dominan al principio. Ese reinicio importa: minutos después de la apertura, el VWAP está construido con muy poco volumen y oscila con cada ráfaga de negociación; a media sesión tiene tanto volumen detrás que apenas se mueve. Trate el VWAP de primera hora como provisional y el VWAP de última hora como pesado.

### Las bandas

Como el VWAP es una media, el precio oscila naturalmente a su alrededor. Las bandas de desviación estándar cuantifican esa oscilación: la primera banda contiene el vagabundeo "normal", mientras que la segunda y la tercera marcan precios estadísticamente estirados para la distribución de *este* día. Los traders usan las bandas exteriores de dos maneras: como zonas de desvanecimiento en los días de rotación (un precio estirado desde un VWAP plano tiende a revertir) y como confirmación de tendencia en los días de impulso (un precio cabalgando una banda exterior con el VWAP en pendiente pronunciada es fortaleza, no un corto automático).

Pruébelo abajo: ajuste las bandas sigma y pase el cursor por el gráfico para una lectura en vivo de cuán estirado está el precio respecto a la media.

[WIDGET: vwap-lab]

### Las matemáticas (opcional)

Tras *n* operaciones (o barras), con precio *P* y volumen *V*:

```
VWAP = Σ(Pi × Vi) / Σ(Vi)
```

Las implementaciones basadas en barras suelen usar el precio típico de cada barra ((high + low + close) / 3) en lugar de los precios de operaciones individuales. Las bandas son VWAP ± k × σ, donde σ es la desviación estándar del precio ponderada por volumen en torno al VWAP y k es 1, 2 o 3. Como tanto la media como σ son acumulativas desde el ancla, las bandas se ensanchan en las sesiones volátiles y se estrechan en las tranquilas.

> **Nota:** Dos plataformas pueden imprimir valores de VWAP ligeramente distintos para el mismo mercado si anclan en horas de inicio de sesión diferentes o calculan a partir de barras en lugar de ticks. La forma y las reacciones importan más que el decimal exacto.

## Véalo en DeepCharts

- **La plantilla rápida D-VL** — un clic en la barra inferior del gráfico traza el VWAP diario con tres bandas de desviación estándar por encima y por debajo, preconfigurado sobre el indicador [[deep-profile]]. Vea [[quick-chart-templates]].
- [[vwap-envelopes|Envolventes VWAP]] — el indicador dedicado a una línea VWAP con bandas envolventes a su alrededor; vea su referencia para la configuración disponible.
- **Herramienta de dibujo VWAP** — la caja de herramientas **Drawing Objects** del gráfico incluye una herramienta VWAP para colocar un VWAP directamente sobre el gráfico. Vea [[drawing-tools]].
- [[deep-profile|Deep Profile]] — el indicador de perfil sobre el que está construido el preajuste D-VL.

## Ejemplo práctico

Digamos que ES abre en 5.300,00, impulsa hasta 5.312,00 en la primera media hora, y el VWAP de sesión se asienta cerca de 5.305,00 (cifras ilustrativas). A media mañana, el precio retrocede hasta 5.305,50: el primer toque del VWAP desde el impulso. Este es el punto de decisión clásico: si los compradores de respuesta defienden la media y el footprint muestra que la venta se seca en el toque, el manual del día de tendencia dice que el impulso puede continuar, con la primera banda superior como objetivo inicial. Supongamos en cambio que el precio atraviesa el VWAP con un delta negativo fuerte y luego *lo vuelve a probar desde abajo* en 5.304,75, se estanca y se da la vuelta. La línea ha pasado de soporte a resistencia, la pendiente del VWAP se aplana, y el carácter del día cambia de impulso a rotación: ahora la jugada es desvanecer las bandas exteriores de vuelta hacia la media, no perseguir rupturas. La misma línea, dos regímenes distintos; la pendiente y la reacción, no el toque en sí, le dijeron en cuál estaba.

[SCREENSHOT: El ejemplo práctico como gráfico de ES anotado — impulso matinal por encima del VWAP, primer toque de retroceso etiquetado "punto de decisión", el retest fallido desde abajo etiquetado "el soporte se convierte en resistencia", y la rotación vespertina entre las bandas con flechas | dc-es-understanding-vwap-01.png]

## Malinterpretaciones comunes

- **"El VWAP es soporte."** El VWAP es una *referencia*, no un muro. Marca dónde es probable que se decida una reacción; el flujo de órdenes en el toque la decide.
- **"Las bandas son niveles de sobrecompra/sobreventa."** En un día de tendencia, el precio puede cabalgar una banda exterior durante horas. Lea primero la pendiente del VWAP: desvanezca el estiramiento desde un VWAP plano, respete el estiramiento a lo largo de uno pronunciado.
- **"El VWAP de las 9:35 significa algo."** El VWAP de primera hora está construido sobre un volumen acumulado escaso y es inestable. Dele tiempo a acumular peso antes de apoyarse en él.
- **"El VWAP y el POC son lo mismo."** El VWAP es el precio medio ponderado por volumen; el POC es el precio único con el mayor volumen ([[understanding-volume-profile]]). Suelen situarse cerca en los días equilibrados y lejos en los días de tendencia: la distancia entre ellos es información en sí misma.
- **"Un solo VWAP sirve para todos los marcos temporales."** Un VWAP anclado a la sesión no dice nada directo sobre un swing de varios días. Si su idea abarca días, necesita un ancla distinta, no la misma línea.

## Profundice

El VWAP responde a "qué pagó el participante medio"; el perfil de volumen responde a "en qué precios ocurrió el negocio": lea [[understanding-volume-profile]] para combinar las dos vistas del precio justo. [[understanding-auction-theory]] explica el marco de equilibrio/desequilibrio detrás de los días de rotación y los días de impulso, y [[orderflow-101]] cubre las herramientas de delta que necesita para juzgar cada toque del VWAP. Los términos desconocidos están recogidos en el [[glossary]].

## Artículos relacionados

- [[vwap-envelopes]]
- [[quick-chart-templates]]
- [[deep-profile]]
- [[understanding-volume-profile]]
- [[drawing-tools]]
- [[glossary]]