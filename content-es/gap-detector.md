---
title: "Detector de gaps (Gap Detector)"
slug: "gap-detector"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Resalte automáticamente los gaps de precio en el gráfico, filtrados por porcentaje o tamaño en ticks, y haga seguimiento hasta que se rellenen."
keywords: ["detector de gaps", "gap de precio", "relleno de gap", "gap de apertura", "gap alcista", "gap bajista", "gap sin rellenar", "indicador de gaps"]
source_hash: "cc6357e1fbe5a33c"
ai_translated: true
source_hash: "cc6357e1fbe5a33c"
---
Un gap de precio, un área que el mercado saltó sin negociar, es uno de los niveles de referencia más antiguos del análisis técnico. El Detector de gaps (Gap Detector) resalta automáticamente cualquier gap de precio en el gráfico, para que nunca tenga que desplazarse hacia atrás buscando el área sin negociar a la que el precio podría regresar para rellenarla.

Usted define qué cuenta como gap (por porcentaje o por ticks), y el indicador marca los gaps que cumplen los criterios con colores distintos para los casos alcistas y bajistas.

## Qué es

El Detector de gaps escanea el gráfico en busca de lugares donde el precio saltó de una barra a la siguiente dejando una zona sin negociar en medio, y resalta esas zonas. Como en los gráficos intradía rápidos los gaps diminutos ocurren constantemente, el indicador incluye un filtro de tamaño mínimo: usted elige si un gap debe abarcar al menos un **porcentaje** determinado del precio o un **número de ticks** determinado antes de ser marcado.

> **Nota:** Este indicador marca gaps de mercado genuinos. Si su gráfico muestra velas ausentes o tramos en blanco causados por problemas de datos, eso es un asunto distinto: consulte [[gaps-in-price]].

## Cuándo usarlo

- Para hacer seguimiento de gaps abiertos (sin rellenar) como objetivos de precio: el "relleno de gap" es una idea de operación muy seguida, especialmente para los gaps de apertura.
- Para marcar los bordes de los gaps como soporte y resistencia: los límites de una zona sin negociar suelen producir reacciones en un retest.
- Para filtrar la relevancia: con un mínimo en ticks o porcentual, solo verá los gaps lo bastante grandes como para importar a su estrategia.
- Para revisar rápidamente las aperturas de sesión: los gaps nocturnos y de fin de semana destacan de inmediato con el indicador activo.

## Inicio rápido

1. Abra un gráfico y haga clic en el icono de gráfico de barras en la esquina superior izquierda para abrir el panel **Indicators**.
2. Haga clic en **Indicators** para abrir la **Indicator List** completa.
3. Busque "Gap Detector" y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración. Elija su **Gap Mode**: **Tick** es la opción natural para futuros (ajuste **Tick Value** a un tamaño significativo para su instrumento), mientras que **Percentual** escala con el precio y funciona en cualquier instrumento.
5. Establezca colores claramente diferentes para los gaps alcistas y bajistas y ajuste la opacidad para que los resaltados no oculten las velas.

[SCREENSHOT: Un gráfico intradía de futuros con el Detector de gaps activo: una zona de gap alcista resaltada desde una apertura de sesión, mostrada como un rectángulo sombreado que se extiende hacia la derecha hasta rellenarse | dc-es-gap-detector-01.png]

## Cómo leerlo

- **Un gap alcista** (gap up) es una zona donde el precio saltó al alza sin negociar; **un gap bajista** (gap down) es el caso espejo. El indicador los colorea por separado.
- **Los gaps abiertos son imanes y marcadores.** Muchos traders tratan un gap sin rellenar como un objetivo potencial, y sus bordes como niveles de reacción. Ninguna de las dos cosas está garantizada: un gap que corre con fuerte momento puede permanecer abierto durante mucho tiempo.
- **Que un gap desaparezca del gráfico significa que se rellenó.** Con **Trigger Whole Bar** habilitado, un gap solo se elimina una vez que se ha cerrado por completo; los rellenos parciales dejan el gap marcado, de modo que aún puede operar la porción sin negociar restante.
- **El tamaño importa.** Los gaps que apenas superan su filtro mínimo son ruido rutinario; los gaps varias veces mayores que el mínimo suelen contener información sobre reajustes de precio nocturnos o noticias.

## Referencia de configuración

### General

| Configuración | Qué hace |
|---|---|
| **Gap Mode** | Determina cómo se identifican y miden los gaps. **Percentual** calcula los gaps en base a un valor porcentual; **Tick** los calcula en base a un valor en ticks. |
| **Perc Value** | El valor porcentual mínimo para el cálculo de gaps: valores más pequeños detectan gaps más pequeños. Se usa en el modo Percentual. |
| **Tick Value** | El número mínimo de ticks para el cálculo de gaps. Se usa en el modo Tick. |
| **Trigger Whole Bar** | Cuando está activado, el indicador solo elimina los gaps que se han cerrado por completo; los gaps parcialmente rellenados permanecen resaltados. |

### Colores

| Configuración | Qué hace |
|---|---|
| **Colores de gap alcista / bajista** | Colores separados para las zonas de gap al alza y a la baja, de modo que la dirección se lea de un vistazo. |
| **Opacidad** | Transparencia de las zonas de gap resaltadas. |

[SCREENSHOT: El diálogo de configuración del Detector de gaps mostrando Gap Mode con las opciones Percentual y Tick, los campos Perc Value y Tick Value, el interruptor Trigger Whole Bar y los controles de color/opacidad | dc-es-gap-detector-02.png]

## Consejos y errores comunes

- **Ajuste el mínimo a su instrumento.** Un gap de 4 ticks es significativo en algunos productos y ruido constante en otros. Si el gráfico está cubierto de resaltados, su **Tick Value** o **Perc Value** es demasiado pequeño para el instrumento y el marco temporal.
- **Decida cómo quiere manejar los rellenos parciales.** Con **Trigger Whole Bar** desactivado, el comportamiento de eliminación de gaps cambia: si opera rellenos parciales de gap, manténgalo activado para que la zona restante siga visible.
- **Distinga los gaps de sesión de los saltos intrabar.** En movimientos rápidos a nivel de tick pueden aparecer pequeños gaps intradía; los que tienen las mejores estadísticas de continuación suelen ser los gaps de apertura de sesión. Considere el contexto de sesión de [[session-marker]] al clasificarlos.
- **Un gap es contexto, no una señal.** Combine las zonas de gap con contexto de flujo de órdenes o de subasta ([[understanding-auction-theory]] explica por qué las áreas sin negociar atraen al precio) en lugar de operar en contra de cada gap automáticamente.

## Artículos relacionados

- [[fvg-identifier]]
- [[auction-gap-tracker]]
- [[unfinished-auction]]
- [[understanding-auction-theory]]
- [[different-types-of-input]]
- [[indicator-layout]]