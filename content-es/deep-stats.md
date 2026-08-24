---
title: "Deep Stats"
slug: "deep-stats"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Tabla de estadísticas de flujo de órdenes por barra que muestra volúmenes, delta, valores COT, ratios y métricas de esfuerzo debajo de su gráfico."
keywords: ["deep stats", "deepstats", "estadísticas de flujo de órdenes", "COT H", "COT L", "delta acumulado", "porcentaje de delta", "tabla de estadísticas por barra", "tabla de estadísticas bajo el gráfico"]
source_hash: "2aa5068d0ff48d0b"
ai_translated: true
source_hash: "2aa5068d0ff48d0b"
---
Deep Stats muestra una tabla de texto de varios niveles debajo de su gráfico con una columna por barra. Cada fila es una métrica de flujo de órdenes: volumen total, delta, número de operaciones, valores COT, ratios, esfuerzo; así puede leer los números detrás de cada vela en lugar de adivinar por su forma.

Mientras que las herramientas footprint le muestran dónde se negoció el volumen dentro de la barra, Deep Stats condensa cada barra en un conjunto de números comparables. Es la radiografía numérica de la vela.

## Qué es

Deep Stats es un indicador de estadísticas de flujo de órdenes que dibuja una cuadrícula de texto bajo el gráfico de precios. Cada barra completada recibe una columna de valores, y los colores de las celdas escalan con la intensidad estadística para que los valores atípicos destaquen de un vistazo. Responde a preguntas como "¿cuánto delta tuvo realmente esta barra?", "¿fue absorbido ese empuje?" y "¿se está secando el volumen en estos máximos?"

[SCREENSHOT: Ventana de gráfico con Deep Stats aplicado: velas de precio arriba y la tabla de texto de varios niveles de Deep Stats en un panel debajo, con varias filas de métricas (Tot Vol, Delta Vol, Delta %, COT Bar) visibles y una celda atípica fuertemente coloreada | dc-es-deep-stats-01.png]

## Cuándo usarlo

- Quiere una confirmación por barra de lo que sugiere la forma de la vela (delta real, número de operaciones, intensidad) antes de actuar en consecuencia.
- Está buscando absorción: alto esfuerzo o lecturas COT contrarias mientras el precio apenas se mueve.
- Quiere indicios de agotamiento en máximos o mínimos mediante las columnas High Ratio y Low Ratio.
- Sigue el delta acumulado (CVD) numéricamente junto al precio en lugar de como un trazado separado.

## Inicio rápido

1. Abra la **Indicator List** (lista de indicadores) en su gráfico.
2. Busque **Deep Stats** y haga clic en **+** para añadirlo.
3. Haga clic en el icono de **Settings** (configuración) junto a Deep Stats.
4. En **Data Settings** (configuración de datos), elija su **Input Data** (**Volume**, **Order** o **Aggregate Trades**; consulte [[different-types-of-input]] para saber qué significa cada uno). **Volume** es el punto de partida natural.
5. En la sección **Subgraphs**, establezca el **Series style** (estilo de serie) de cada métrica que no necesite en **Ignore**. Un conjunto inicial compacto: **Tot Vol**, **Delta Vol**, **Delta %**, **Delta Dly**, **COT Bar**.
6. Haga clic en aplicar/guardar y confirme que la tabla se muestra bajo el gráfico.

[SCREENSHOT: Diálogo de configuración de Deep Stats abierto en la sección Data Settings, mostrando el menú desplegable Input Data expandido con las opciones Volume, Order y Aggregate Trades, además de los campos Min Filter y Max Filter | dc-es-deep-stats-02.png]

## Cómo leerlo

Cada columna es una barra; cada fila es una métrica. La intensidad del color de la celda se basa en desviaciones estándar, de modo que una celda fuertemente coloreada significa "estadísticamente inusual para este instrumento en este momento".

| Métrica | Qué le indica |
|---|---|
| **Tot Vol / Bid Vol / Ask Vol / Delta Vol** | Los fundamentos del volumen: total negociado, vendido en el bid, comprado en el ask y la diferencia neta. |
| **Max Delta Vol / Min Delta Vol** | Los extremos de delta alcanzados dentro de la barra: una barra puede cerrar con delta plano tras una oscilación interna violenta. |
| **Tot NT / Delta NT** | Número de operaciones y el diferencial de recuento de operaciones ask frente a bid. |
| **Delta HL** | Ticks entre el máximo y el mínimo de la barra. |
| **Delta %** | Delta Vol como porcentaje de Tot Vol: (Delta Vol / Tot Vol) × 100. |
| **Delta Dly** | CVD (delta de volumen acumulado) en curso. |
| **Vol(s)** | Volumen por segundo: intensidad de trading. |
| **COT H** | Delta acumulado desde el último mínimo hasta el cierre. Un COT H negativo en una barra bajista es una señal de absorción alcista. |
| **COT L** | Delta acumulado desde el último máximo hasta el cierre. Un COT L positivo en una barra alcista es una señal de absorción bajista. |
| **COT Bar** | Muestra automáticamente COT H en barras alcistas y COT L en barras bajistas. |
| **Time(s)** | Duración de la barra en segundos: contextualiza las cifras de volumen. |
| **Bar Ratio / High Ratio / Low Ratio** | Ratios de volumen de tick entre el penúltimo y el último tick. Un High Ratio bajo señala agotamiento comprador en los máximos; un Low Ratio bajo señala agotamiento vendedor en los mínimos. |
| **Total Effort / Delta Effort** | Volumen (o delta) en relación con la amplitud de la barra. Un esfuerzo alto con poco movimiento de precio apunta a absorción. |

Lecturas prácticas:

- **Absorción**: COT H negativo en barras bajistas (los compradores absorben la venta), COT L positivo en barras alcistas (los vendedores absorben la compra), o esfuerzo alto mientras el precio apenas avanza.
- **Agotamiento**: un High Ratio bajo al llegar a una resistencia o un Low Ratio bajo al llegar a un soporte sugiere que el agresor se está quedando sin órdenes.
- **Cambios de intensidad**: Vol(s) que se dispara mientras Time(s) se reduce significa que la participación se está acelerando.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Configuración de datos (Data Settings)

| Configuración | Qué hace |
|---|---|
| **Input Data** | Fuente de datos para los cálculos: **Volume**, **Order** o **Aggregate Trades**. Consulte [[different-types-of-input]]. |
| **Min Filter** | Umbral mínimo de tamaño de operación; las operaciones más pequeñas se excluyen de las estadísticas. |
| **Max Filter** | Umbral máximo de tamaño de operación; **0** significa que no hay filtro máximo. |

### Configuración de trazado (Plot Settings)

| Configuración | Qué hace |
|---|---|
| **Dev. std. for Coloring** | Controla con qué agresividad escalan los colores de las celdas con la desviación estándar, además del tamaño/color del texto, el formato de números (**Auto Text Format** compacta los números grandes) y el orden de las celdas. |
| **Settings-Header** | Visibilidad, colores y tamaño de la fila de encabezado. |
| **Threshold** | Resalta las celdas cuando las métricas elegidas superan los umbrales que usted define. |

### Subgráficos (Subgraphs)

| Configuración | Qué hace |
|---|---|
| **Series style** (por métrica) | **Text** muestra la fila de la métrica; **Ignore** la oculta. |
| **Colors** (por métrica) | Color de celda utilizado para la fila de esa métrica. |

## Consejos y errores comunes

- **Empiece con lo mínimo.** Habilitar todas las métricas entierra las útiles. Establezca en **Ignore** todo lo que no lea activamente y vuelva a añadir filas a medida que las necesite.
- **Use Auto Text Format** si los números largos quedan recortados: compacta los valores para que las columnas sigan siendo legibles.
- **No lea COT H/COT L de forma aislada.** Son indicios de absorción, no señales de entrada: confírmelos con la estructura y la cinta (consulte [[adv-time-and-sales]]).
- **Ajuste el Min Filter al instrumento.** Un filtro que aísla tamaño institucional en un contrato elimina casi todo en otro más fino.
- **El resaltado por Threshold es mejor que mirar fijamente.** Si solo le interesa, por ejemplo, un Delta % desmesurado, defina un Threshold para que la tabla se lo señale.

## Artículos relacionados

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[deep-print]]
- [[deep-trades]]
- [[on-candle-stats]]