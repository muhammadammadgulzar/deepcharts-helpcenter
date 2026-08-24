---
title: "Deep Profile Values"
slug: "deep-profile-values"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "8 min read"
description: "Referencia de Deep Profile Values: trace el POC, el área de valor, el VWAP con desviaciones, picos y valles como líneas de nivel limpias, incluidos los POC vírgenes (naked)."
keywords: ["profile values", "vbp values", "poc naked", "poc virgen", "líneas de área de valor", "desviaciones vwap", "poc en desarrollo", "línea poc"]
source_hash: "78422ac7afc4caac"
ai_translated: true
source_hash: "78422ac7afc4caac"
---
Deep Profile Values (también llamado VBP Values) traza en su gráfico los valores clave del análisis de volumen por precio — Volume POC, área de valor, VWAP con desviaciones estándar, picos y valles — sin dibujar las propias distribuciones de volumen. Obtiene los niveles que importan sobre un gráfico limpio.

Donde [[deep-profile]] muestra el histograma completo, este indicador extrae solo sus resultados, y añade una lógica de extensión de líneas lo bastante potente como para rastrear los POC vírgenes (naked): niveles a los que el precio nunca ha vuelto a tocar.

## Qué es

El indicador calcula un perfil de volumen sobre un período que usted define (compuesto, múltiplos, visible o personalizado) y luego dibuja solo los niveles de referencia resultantes como líneas: el punto de control, los límites del área de valor, el VWAP y sus bandas de desviación, y los nodos de alto/bajo volumen. Cada familia de líneas tiene sus propios controles de visualización, extensión y estilo, además de un resumen de datos opcional por perfil.

El perfil en vivo a continuación muestra de dónde provienen esos niveles: el POC y los límites del área de valor descansan sobre el histograma del que se calculan. Arrastre el Value Area % para ver moverse el VAH y el VAL.

[WIDGET: volume-profile-lab]

## Cuándo usarlo

- Opera niveles de perfil (POC, VAH/VAL, VWAP) pero quiere velas legibles: sin superposición de histograma.
- Rastrea POC naked/vírgenes a lo largo de los días: niveles intactos que a menudo actúan como imanes al revisitarse.
- Quiere el VWAP con bandas de desviación estándar ±1/±2/±3 ancladas a un período del perfil.
- Quiere los niveles clave de varios períodos en pantalla a la vez (la configuración **Number of Profiles**).

## Inicio rápido

1. Abra un gráfico y añada **Deep Profile Values** desde el botón **Indicators** del gráfico.
2. Establezca **VBP Period** en **Multiples** con **Length Type** = Days y **Length Value** = 1 para que cada día produzca su propio conjunto de niveles.
3. En la sección **POC**, active **Enable** y establezca **Extend Line** en **Till Interaction**.
4. En **Value Area**, habilite las líneas con **% Value Area** = 70.
5. Aplique: el POC y los límites del área de valor de cada día se dibujan ahora como líneas, y las líneas de POC que el precio aún no ha revisitado siguen extendiéndose: esos son sus POC naked.

[SCREENSHOT: Gráfico con Deep Profile Values activo mostrando líneas de POC diarias y líneas de límites del área de valor; una línea de POC más antigua se extiende intacta durante varios días, anotada como POC naked | dc-es-deep-profile-values-01.png]

## Cómo leerlo

- **POC**: el precio de mayor volumen del período. Puede mostrarse fijo, en desarrollo (actualizándose en vivo a medida que el volumen se desplaza) o con resaltado de zonas desplazadas.
- **Área de valor**: el rango de precios que contiene el porcentaje configurado del volumen del período (70% es la elección convencional). Sus límites superior e inferior son las clásicas referencias VAH/VAL.
- **VWAP**: el precio medio ponderado por volumen. Operar por encima de él significa pagar más que la media ponderada por volumen: "caro" respecto al negocio de la sesión; por debajo es "barato". Las instituciones lo usan como referencia de ejecución.
- **Desviaciones estándar del VWAP**: ±1 es el rango típico donde el precio suele permanecer; ±2 marca condiciones significativamente estiradas; ±3 es raro y señala un movimiento extremo.
- **Picos y valles**: los picos son áreas concentradas de alto volumen (fuerte interés del mercado); los valles son vacíos de bajo volumen que el precio tiende a cruzar rápidamente.
- **Niveles naked (vírgenes)**: con **Extend Line** = **Till Interaction**, una línea se detiene en el momento en que el precio la toca. Cualquier línea que siga extendiéndose nunca ha sido revisitada: un POC naked o un nivel no probado. Esta es la mecánica clave del indicador.

Consulte [[understanding-volume-profile]] y [[understanding-vwap]] para los conceptos detrás de estos niveles.

## Referencia de configuración

Agrupada como en el diálogo del indicador.

> **Nota:** La opción de extensión de línea continua aparece listada como **Till End Window** en algunas secciones y como **Till End Interaction** en otras. [CONFIRM: exact label of the continuous Extend Line option in each section of the Deep Profile Values dialog]

### Configuración general

| Configuración | Qué hace |
|---|---|
| **VBP Period** | Marco temporal de referencia: **Composite** (todos los datos cargados en un solo perfil), **Multiples** (perfiles separados por intervalo de tiempo), **Visible** (basado en la porción del gráfico visible actualmente), **Personalized** (período manual a partir de fechas/horas específicas) |
| **Length Type** | Unidad de medida del perfil: minutos, días, semanas, meses o volumen |
| **Length Value** | Cuántas unidades del Length Type cubre cada perfil |

### Período personalizado

| Configuración | Qué hace |
|---|---|
| **Start Date/Time** | Inicio del período cuando VBP Period está establecido en el modo personalizado |

### Configuración de datos

| Configuración | Qué hace |
|---|---|
| **Input Data** | Base de cálculo: **Volume** (volumen total por nivel), **Order** (cantidades de órdenes de compra/venta), **Aggregate Trades** (operaciones combinadas en el mismo precio), **Number of Trades** (frecuencia de transacciones por nivel). Consulte [[different-types-of-input]] |
| **Filter Min** | Umbral mínimo de volumen para la inclusión |
| **Max Filter** | Techo máximo, excluyendo volúmenes muy grandes que distorsionan |

### Auto Grouping

| Configuración | Qué hace |
|---|---|
| **Type** | **Automatic** (adapta el agrupamiento de ticks al mercado) o **Manual** (usted lo especifica) |
| **Grouping Factor** | Intensidad de agregación en modo Automatic: más alto significa más agregación |
| **Tick in Manual** | Cantidad de ticks agrupados en modo Manual |

### Configuración de trazado

| Configuración | Qué hace |
|---|---|
| **Number of Profiles** | Cuántos valores de perfiles se muestran simultáneamente para el período seleccionado |

### POC

| Configuración | Qué hace |
|---|---|
| **Enable** | Muestra el POC: el nivel de precio de mayor volumen |
| **Show Line** | Método de visualización: **Show** (línea fija en el nivel de máximo volumen), **Developing** (línea dinámica que se actualiza a medida que el POC se mueve), **Extend Shifted** (resalta las zonas donde el POC se desplazó durante su evolución) |
| **Extend Line** | **None** (sin extensión más allá del período), **Till Interaction** (se extiende hasta que el precio toca o supera el nivel: las líneas que sobreviven son POC naked), **Till End Window** (continua a través del gráfico) |
| **Line-Color / Line Width** | Estilo de la línea del POC |
| **Dev. POC Start Time** | Cuándo comienza el cálculo del POC dinámico (en desarrollo) |
| **Shifted POC Tick Grouping** | Cuántos ticks se agrupan antes de que una posición del POC cuente como desplazada |
| **Opacity POC Grouping** | Visibilidad de la visualización del POC agrupado: más alto es más visible |

### Área de valor

| Configuración | Qué hace |
|---|---|
| **Enable** | Muestra el área de valor: el rango que contiene el porcentaje de volumen establecido |
| **% Value Area** | El umbral porcentual (p. ej. 70% dibuja el rango que contiene el 70% del volumen total) |
| **Show Line** | Dibuja las líneas que delimitan el Value Area High y Low |
| **Developing** | Modo dinámico: traza los desplazamientos del área de valor a medida que cambia el volumen operado |
| **Extend Line** | **None**, **Till Interaction**, o continua a través del gráfico |
| **Line Color / Line Width** | Estilo de las líneas del área de valor |

### Picos y valles

| Configuración | Qué hace |
|---|---|
| **Sensitivity** | Precisión de detección: más alta da menos detecciones (más significativas), más baja da más |
| **Exclude High/Low** | Elimina automáticamente los picos/valles en las zonas extremas superior e inferior del perfil |
| **Peak: Enable / Minimum Volume / Extend Line / Line Width / Line Color** | Visualización de las líneas de pico, su umbral de volumen, modo de extensión (None, Till Interaction, Till End Window) y estilo |
| **Valley: Enable / Minimum Volume / Extend Line / Line Width / Line Color** | Los mismos controles para las líneas de valle |

### VWAP

| Configuración | Qué hace |
|---|---|
| **Enable** | Muestra la línea del VWAP |
| **Extend Line** | **None**, **Till Interaction**, o continua a través del gráfico |
| **Line Color / Line Width** | Estilo de la línea del VWAP |
| **Developing VWAP** | VWAP dinámico en tiempo real que se actualiza con cada nuevo volumen |
| **Enable Bands** | Muestra la envolvente de desviaciones estándar alrededor del VWAP |
| **Envelope Settings** | Abre la personalización de las bandas, incluido cuántas desviaciones estándar dibujar |

### Resumen

| Configuración | Qué hace |
|---|---|
| **Enable-Summary** | Muestra un resumen de datos por perfil: volumen total, delta, operaciones, ticks y estadísticas relacionadas |
| **Volume Summary** | Muestra el volumen total operado |
| **Trade Summary** | Muestra el recuento total de transacciones del período del perfil |
| **Text Color / Ask Color / Bid Color** | Colores del texto del resumen y de sus cifras de volumen ask/bid |

### Horario personalizado (Customized Timetable)

| Configuración | Qué hace |
|---|---|
| **Filter Mode** | **None** (todos los datos, sin filtrado), **Filter** (un filtro temporal personalizado sobre un período específico), **Split** (divide el perfil por sesiones, p. ej. mañana/tarde) |
| **Ini Session / End Session** | Horas de inicio y fin de la sesión de trading |

> **Advertencia:** Las horas de sesión del Customized Timetable se refieren exclusivamente a la zona horaria de EE. UU. Si opera desde otra región, convierta los límites de su sesión antes de introducirlos, o los perfiles cubrirán las horas equivocadas.

[SCREENSHOT: Diálogo de configuración de Deep Profile Values abierto en la sección POC mostrando los menús desplegables Show Line y Extend Line con Till Interaction seleccionado | dc-es-deep-profile-values-02.png]

## Consejos y errores comunes

- **Buscar POC naked:** establezca el **Extend Line** del POC en **Till Interaction**: las líneas que sobreviven son los niveles intactos. Con **Till End Window** todas las líneas se extienden para siempre y la distinción entre naked y probado desaparece.
- **Demasiadas líneas de pico/valle:** aumente **Sensitivity** — valores más altos producen menos detecciones pero más significativas — y use el umbral **Minimum Volume** de cada familia de líneas.
- **Los niveles se desplazan al hacer zoom:** el agrupamiento Automatic recalcula las alturas de las barras; establezca el agrupamiento en Manual (Tick in Manual = 1) para congelar los precios de los niveles.
- **Los valores discrepan de su histograma de Deep Profile:** compare VBP Period, Input Data y el agrupamiento entre los dos indicadores: calculan de forma independiente a partir de su propia configuración.
- **Sobrecarga de pantalla:** este indicador puede dibujar POC, VA, VWAP, bandas, picos y valles simultáneamente. Habilite una familia a la vez y conserve solo lo que realmente utiliza para operar.

## Artículos relacionados

- [[deep-profile]]
- [[understanding-volume-profile]]
- [[understanding-vwap]]
- [[vwap-envelopes]]
- [[dynamic-poc]]
- [[different-types-of-input]]