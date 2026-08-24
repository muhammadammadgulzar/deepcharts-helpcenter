---
title: "Velocidad de la cinta (instantánea)"
slug: "speed-of-tape-instant"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Muestra la velocidad instantánea de ejecución de operaciones como barras coloreadas por delta, para que pueda medir la urgencia y la presión en tiempo real."
keywords: ["velocidad de la cinta instantánea", "speed of tape instant", "velocidad instantánea de la cinta", "velocidad de la cinta en tiempo real", "velocidad de ejecución de operaciones", "velocidad de la cinta"]
source_hash: "f9ad5b7653bb496e"
ai_translated: true
source_hash: "f9ad5b7653bb496e"
---
Speed of Tape (Instant) mide la velocidad instantánea de ejecución de operaciones: cuánto se está negociando ahora mismo dentro de una ventana temporal corta y móvil. La altura de la barra muestra a qué velocidad corre la cinta; el color de la barra muestra si domina la presión compradora o la vendedora en el flujo medido.

Mientras que el indicador estándar [[speed-of-tape]] traza el ritmo como una serie histórica, la variante instantánea le mantiene centrado en las últimas lecturas, convirtiéndolo en un medidor de urgencia en tiempo real para el trading activo.

La cinta en streaming de abajo es el flujo bruto que este indicador destila: observe cómo cambian los contadores de compra/venta/delta a medida que llegan las impresiones, y filtre por All/Ask/Bid para aislar un lado.

[WIDGET: tape-lab]

## Qué es

El indicador analiza el flujo de volumen a lo largo de una ventana configurable (**Number of seconds**, predeterminado **10**) y dibuja el resultado como barras coloreadas: las barras verdes/turquesa marcan periodos de delta positivo donde domina la presión compradora, las barras rojas/rosas marcan periodos de delta negativo donde domina la presión vendedora, y la altura de la barra refleja la intensidad de la velocidad de negociación. Por defecto solo se muestran las lecturas más recientes (**Bars to show**, predeterminado **3**), manteniendo la visualización anclada al presente.

[SCREENSHOT: Gráfico con Speed of Tape (Instant) activo — las tres barras de velocidad de la cinta más recientes visibles, la barra más alta en el color de compra durante un empuje alcista rápido, con las velas de precio moviéndose de fondo | dc-es-speed-of-tape-instant-01.png]

## Cuándo usarlo

- Confirma el impulso en tiempo real: picos repentinos en la velocidad de la cinta en la dirección de su operación validan la entrada.
- Vigila el agotamiento: barras que se acortan progresivamente mientras el precio se extiende avisan de que el movimiento se está quedando sin participación.
- Identifica fases de aceleración: barras progresivamente más altas señalan urgencia de escala institucional en aumento.
- Reconoce la consolidación: una velocidad persistentemente baja le dice que espere movimiento lateral en lugar de continuación.

## Inicio rápido

1. Abra la **Indicator List** en su gráfico y añada **Speed of Tape (Instant)**.
2. Abra la **Settings** (configuración) del indicador.
3. Mantenga **Input data** en **Volume** (el valor predeterminado) para ponderar la velocidad por el tamaño negociado (consulte [[different-types-of-input]]).
4. Deje **Number of seconds** en el predeterminado **10** y **Display value** en **Total**: esto agrega toda la actividad de negociación dentro de cada ventana de 10 segundos.
5. Mantenga **Bars to show** en el predeterminado **3**; auméntelo solo si quiere más historial reciente a la vista.

[SCREENSHOT: Diálogo de configuración de Speed of Tape (Instant) — Plot Settings con Bars to show = 3 y Scale min value = 0, y las secciones Data Settings y Mode Settings visibles con Number of seconds = 10 | dc-es-speed-of-tape-instant-02.png]

## Cómo leerlo

- **Barra alta, color de compra**: actividad intensa dominada por la presión compradora; confirmación de impulso para largos.
- **Barra alta, color de venta**: la misma urgencia en el lado vendedor.
- **Barras que se encogen entre lecturas**: una señal de agotamiento: cada ventana es más tranquila que la anterior aunque el precio siga derivando.
- **Barras que crecen entre lecturas**: una fase de aceleración; las rupturas que comienzan con velocidad de cinta creciente tienen más peso.
- **Barras uniformemente cortas**: velocidad baja, típica de consolidación; aquí las señales de otras herramientas se disparan con menor fiabilidad.

Recuerde que el color codifica el dominio del delta dentro de la ventana medida, no la dirección de la vela actual: una barra de velocidad roja puede imprimirse mientras el precio sube si los vendedores dominan el flujo ejecutado.

## Referencia de configuración

### Configuración de trazado (Plot Settings)

| Configuración | Qué hace |
|---|---|
| **Bars to show** | Cuántas barras históricas de datos de Speed of Tape se muestran en el gráfico. Predeterminado **3**. |
| **Scale min value** | Establece la línea base para la representación visual de la velocidad de la cinta. Predeterminado **0**. |

### Configuración general (Candle Settings)

| Configuración | Qué hace |
|---|---|
| **Line width** | Grosor de las barras para su visibilidad. Predeterminado **1**. |
| **Plot reversed** | Invierte la orientación vertical de las barras cuando está habilitado. |
| **Delta Positive** | Color de las barras de delta positivo (dominio comprador). Predeterminado verde/turquesa. |
| **Delta Negative** | Color de las barras que representan periodos de delta negativo. |
| **Delta Positive (Secondary)** / **Delta Negative (Secondary)** | Opciones de color adicionales para cada lado. |

### Configuración de datos

| Configuración | Qué hace |
|---|---|
| **Input data** | Fuente de datos: **Volume** (predeterminado) o datos de flujo de **Order**. Consulte [[different-types-of-input]]. |
| **Filter min** | Excluye del cálculo los periodos de baja actividad. |
| **Filter max** | Limita los periodos de actividad extremadamente alta. Predeterminado **0** (sin límite). |

### Configuración de modo

| Configuración | Qué hace |
|---|---|
| **Display value** | Cómo se resume la actividad de la ventana. Predeterminado **Total**: agrega toda la actividad de negociación dentro de la ventana temporal especificada. |
| **Number of seconds** | La ventana temporal en segundos sobre la que se calcula la velocidad de la cinta. Predeterminado **10**. |

## Consejos y errores comunes

- **Diez segundos es un valor predeterminado razonable, pero no sagrado.** Los scalpers en símbolos muy rápidos pueden preferir una ventana más corta; los instrumentos más lentos se leen mejor con una más larga. Cambie una cosa a la vez.
- **No trate el color como una señal de operación.** El coloreado por delta muestra quién dominó el flujo medido; la dirección todavía necesita confirmación del precio y la estructura.
- **Mantenga Bars to show pequeño.** El valor del indicador es su inmediatez: convertirlo en un historial largo duplica lo que [[speed-of-tape]] ya hace mejor.
- **Use Filter min para silenciar el ruido en mercados poco líquidos**, donde un puñado de operaciones pequeñas puede registrarse de otro modo como una "velocidad" sin significado.

## Artículos relacionados

- [[speed-of-tape]]
- [[delta-bar]]
- [[big-trades]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]