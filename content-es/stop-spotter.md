---
title: "Stop Spotter"
slug: "stop-spotter"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "advanced"
time: "6 min read"
description: "Detecta posibles eventos de caza de stops combinando filtros de delta, volumen, tamaño del cuerpo, movimiento del precio y desequilibrios en un único marcador en el gráfico con alertas opcionales."
keywords: ["stop spotter", "caza de stops", "barrido de stops", "caza de stop loss", "captura de liquidez", "cascada de stops", "indicador de caza de stops", "barrido de liquidez"]
source_hash: "d3fc9068b2c2d234"
ai_translated: true
source_hash: "d3fc9068b2c2d234"
---
El indicador Stop Spotter identifica posibles eventos de caza de stops: momentos en los que el precio se acelera hacia un grupo de órdenes stop en reposo y desencadena una cascada. Analiza conjuntamente el delta, el volumen, la acción del precio, el tamaño del cuerpo de la vela y los desequilibrios, e imprime un marcador en la barra cuando todos sus umbrales se cumplen a la vez.

Como una verdadera cacería de stops deja una huella muy específica (un pico repentino de volumen, agresión unilateral, desequilibrios consecutivos y un cuerpo direccional rápido), exigir varias condiciones simultáneamente filtra las barras de momentum ordinarias y le deja los candidatos que merecen ser operados.

## Qué es

Stop Spotter es un indicador de señales de flujo de órdenes multicondición. Cada uno de sus parámetros principales es un umbral mínimo — para el porcentaje de delta, el volumen total, el incremento de volumen, el tamaño del cuerpo, el movimiento del precio, el delta horizontal, y el número y tamaño de los desequilibrios — y una barra solo se marca cuando todas las condiciones habilitadas se cumplen. Responde a la pregunta "¿se comportó esta barra como una cascada de stops, o es solo un empuje normal?"

[SCREENSHOT: Ventana de gráfico con Stop Spotter aplicado — una vela direccional rápida rompiendo un mínimo de swing reciente con un marcador cuadrado impreso sobre ella, las barras circundantes sin marcar, mostrando que solo se señala el candidato a cacería de stops | dc-es-stop-spotter-01.png]

## Cuándo usarlo

- Usted opera reversiones tras capturas de liquidez: una cacería de stops hacia un nivel evidente que se estanca inmediatamente es una configuración clásica de contratendencia.
- Usted opera continuaciones a través de los stops: una cascada confirmada puede alimentar el siguiente tramo, y el marcador le dice que el combustible fue real.
- Quiere una definición objetiva basada en umbrales de "caza de stops" en lugar de estimar mechas a ojo.
- Quiere recibir alertas en tiempo real cuando se dispara una condición de caza de stops, sin vigilar cada barra.

## Inicio rápido

1. Abra la **Indicator List** (lista de indicadores) en su gráfico.
2. Busque **Stop Spotter** y haga clic en **+** para añadirlo.
3. Haga clic en el icono **Settings** junto al indicador.
4. Mantenga los umbrales predeterminados en su primera ejecución — **Min. delta %** 25, **Min. volume** 1500, **Min. volume increase** 500, **Min. body ticks** 6 — y observe con qué frecuencia se imprimen marcadores en su instrumento.
5. Si los marcadores son demasiado frecuentes, suba primero **Min. volume** y **Min. % imbalance**; si son demasiado escasos, baje **Min. body ticks**.
6. Opcionalmente, habilite el sonido de alerta y la ventana emergente de mensaje en las opciones de alerta para que las señales le lleguen cuando no esté mirando el gráfico.

[SCREENSHOT: Diálogo de configuración de Stop Spotter mostrando la lista de parámetros principales — Min. delta %, Min. volume, Min. volume increase, Min. body ticks, Min price ticks increase, Min. horizontal delta, Min. % imbalance, Min. number imbalance, Calculation Mode y Seconds To Close — con sus valores predeterminados visibles | dc-es-stop-spotter-02.png]

> **Nota:** Los valores predeterminados son umbrales calibrados, no verdades universales. Los mínimos basados en volumen en particular (**Min. volume**, **Min. volume increase**) dependen en gran medida del instrumento y la sesión que opere, así que cuente con tener que ajustarlos.

## Cómo leerlo

- **Dirección del marcador.** La configuración **Color** marca las cacerías de stops alcistas y **2° Color** marca las bajistas, de modo que el color del marcador le dice de qué lado se alcanzaron los stops.
- **La ubicación lo es todo.** Un marcador impreso mientras el precio barre un máximo/mínimo de swing evidente, un extremo de sesión o un nivel muy vigilado es mucho más significativo que uno en medio de un rango. El indicador encuentra la huella; usted aporta el contexto.
- **Lo que ocurre después decide la operación.** Si el precio revierte bruscamente tras el marcador, la cascada no encontró continuidad: un posible agotamiento u operación de contratendencia. Si el precio sigue extendiéndose con agresión fresca, los stops se convirtieron en combustible para la continuación.
- **Señales tempranas.** Con **Seconds To Close** en su valor predeterminado de 15, el indicador realiza sus cálculos esa cantidad de segundos antes del cierre de la barra, por lo que un marcador puede aparecer ligeramente antes de que la barra se complete. La advertencia más temprana tiene el costo de la condición ocasional que falla en los últimos segundos.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Parámetros principales

| Configuración | Predeterminado | Qué hace |
|---|---|---|
| **Min. delta %** | 25 | Diferencia mínima entre el volumen de compra y de venta, como porcentaje, que señala la presión direccional típica de la actividad de caza de stops. |
| **Min. volume** | 1500 | Volumen mínimo que debe negociar una barra para ser considerada en la detección de caza de stops; filtra los períodos de baja actividad. |
| **Min. volume increase** | 500 | Incremento mínimo de volumen respecto a las barras recientes necesario para disparar una señal; identifica picos repentinos de participación. |
| **Min. body ticks** | 6 | Tamaño mínimo del cuerpo de la vela en ticks para que una barra califique; una cascada de stops produce un cuerpo direccional fuerte. |
| **Min price ticks increase** | 1 | Movimiento mínimo del precio en ticks necesario para identificar un evento de caza de stops. |
| **Min. horizontal delta** | 60 | Diferencia mínima entre el volumen de bid y ask en niveles de precio específicos; identifica trading agresivo concentrado. |
| **Min. % imbalance** | 200% | Desequilibrio porcentual mínimo entre el volumen de bid y ask, que indica el flujo de órdenes unilateral típico de las cascadas de stops. |
| **Min. number imbalance** | 2 | Número mínimo de desequilibrios consecutivos requeridos para confirmar el evento, para una confirmación más sólida. |
| **Calculation Mode** | Close | Determina qué nivel de precio se usa para los cálculos y dónde se coloca la señal en el gráfico. |
| **Seconds To Close** | 15 | Número de segundos antes del cierre de la barra en que el indicador realiza sus cálculos, lo que permite señales más tempranas. |

### Cálculo de contratos

Habilita una visualización de cálculo de contratos en el gráfico junto a los eventos detectados, para que pueda traducir una señal en un tamaño de posición.

| Configuración | Qué hace |
|---|---|
| **Max loss** | La pérdida máxima usada como dato de entrada para el dimensionamiento de la posición. |
| **Tick value divider** | Divisor aplicado junto con el valor del tick del instrumento en el cálculo del tamaño. |
| **Font size** | Tamaño del texto del cálculo. |
| **Back color / text colors** | Colores de fondo y de texto de la visualización del cálculo. |

### Configuración visual

| Configuración | Predeterminado | Qué hace |
|---|---|---|
| **Subgraph Style** | Square | Forma del marcador para los eventos detectados: cuadrado, círculo, rombo, cruz o triángulo. |
| **Color** | — | Color del marcador para las cacerías de stops alcistas. |
| **2° Color** | — | Color del marcador para las cacerías de stops bajistas. |
| **Line Style / Line Width** | — | Estilo y grosor del borde de los marcadores. |
| **Short Name** | — | Etiqueta personalizada para el indicador en el gráfico. |

### Opciones de alerta

| Configuración | Qué hace |
|---|---|
| **Alert sound** | Reproduce una notificación sonora cuando se detectan las condiciones. |
| **Message popup** | Muestra una ventana emergente en pantalla cuando se detectan las condiciones. |

## Consejos y errores comunes

- **Ajuste un umbral a la vez.** Con ocho mínimos que interactúan entre sí, cambiar varios a la vez hace imposible saber qué edición modificó su recuento de señales. Ajuste, observe una sesión y luego ajuste de nuevo.
- **No trate cada marcador como una señal de reversión.** Una cacería de stops es un evento de liquidez, no una indicación de dirección. Las cascadas se resuelven tanto como agotamiento como continuación: lea la reacción y confirme con la cinta o un footprint como [[deep-print]].
- **Los umbrales de volumen son específicos de cada instrumento.** 1500 contratos significan algo completamente distinto en un futuro de índice principal que en un contrato poco líquido. Recalibre **Min. volume** y **Min. volume increase** cada vez que cambie de instrumento.
- **Vigile las señales cerca de reservas de liquidez evidentes.** Los máximos/mínimos del día anterior, los extremos nocturnos y los números redondos son donde se agrupan los stops; combine el marcador con una herramienta de niveles como [[important-levels]] para marcar de antemano los terrenos de caza.

## Artículos relacionados

- [[orderflow-101]]
- [[understanding-icebergs-absorption]]
- [[big-trades]]
- [[imbalance-tracker]]
- [[different-types-of-input]]
- [[indicator-layout]]