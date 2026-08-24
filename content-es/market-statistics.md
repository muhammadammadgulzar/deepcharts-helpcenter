---
title: "Estadísticas de mercado"
slug: "market-statistics"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Analiza estadísticamente datos de operaciones o de barras — promedios, desviaciones y frecuencia por rango — para que pueda elegir umbrales basados en evidencia para sus otras herramientas."
keywords: ["estadísticas de mercado", "indicador market stats", "estadísticas de tamaño de operaciones", "estadísticas de volumen", "desviación estándar operaciones", "calibración de umbrales", "tamaño medio de operación"]
source_hash: "19f7054f23ac379a"
ai_translated: true
source_hash: "19f7054f23ac379a"
---
Estadísticas de mercado (Market Statistics) es una herramienta de calibración más que una señal de trading. Analiza los datos de operaciones o de barras de su símbolo e informa con qué frecuencia ocurren los distintos rangos de valores, con un promedio y una desviación para cada agrupación. Con esas cifras en la mano, deja de adivinar los umbrales de otras herramientas y empieza a establecerlos a partir de evidencia.

La documentación oficial describe su propósito directamente: obtener información estadística útil para configurar herramientas como Big Trades, Volume Clusters, Significant POCs, Delta Filter Bars y Time & Sales.

## Qué es

El indicador escanea un conjunto de datos que usted define — tamaños de operaciones, recuentos de órdenes o valores por barra como el volumen del POC o el delta — e identifica los valores más frecuentes y menos frecuentes en él. Los resultados se agrupan en rangos que usted controla (**Initial Range**, **End Range**, **Step Range**) y cada agrupación se informa con **AVG** (promedio) y **Dev** (desviación). Por ejemplo, un rango "300–350" que muestra **AVG: 9** y **Dev: 17** describe con qué frecuencia ocurren los valores de ese rango.

[SCREENSHOT: Gráfico con la salida del indicador Market Statistics: una tabla/gráfica de rangos de valores con cifras de AVG y Dev por rango, en un símbolo de futuros activo | dc-es-market-statistics-01.png]

## Cuándo usarlo

- Está configurando el filtro **Min** de [[big-trades]] y quiere saber qué tamaño de operación es realmente raro en su símbolo.
- Calibra filtros de tamaño para [[adv-time-and-sales]] o herramientas basadas en delta en lugar de copiar umbrales de otro instrumento.
- Está cambiando de símbolo o de contrato y necesita recalibrar rápidamente todas las configuraciones dependientes del tamaño.
- Quiere entender el comportamiento base de un mercado — tamaños de operación típicos, volumen de barra típico — antes de construir reglas sobre él.

## Inicio rápido

1. Abra la **Indicator List** (lista de indicadores) en su gráfico y añada **Market Statistics**.
2. Abra la **Settings** (configuración) del indicador.
3. Establezca **Stat Mode** en **Trades** para analizar estadísticas de operaciones/contratos.
4. En **Data Settings**, elija **Aggregate Trades** para que las ejecuciones divididas al mismo precio se combinen (vea [[different-types-of-input]]).
5. En **Range Trade Settings**, establezca un **Initial Range**, **End Range** y **Step Range** que cubran los tamaños que le interesan: por ejemplo, recorriendo por escalones los grupos de tamaño desde pequeñas impresiones minoristas hasta grandes bloques.
6. Lea el **AVG** y el **Dev** de cada rango, y utilice los rangos que ocurren raramente como umbrales candidatos para sus otras herramientas.

[SCREENSHOT: Cuadro de diálogo de configuración de Market Statistics: Stat Mode, Font Size y % Dev. Std. en General, con las secciones Data, Range Trade, Bar y Time visibles | dc-es-market-statistics-02.png]

## Cómo leerlo

- **Rangos de alta frecuencia**: el comportamiento normal del mercado. Todo lo que está dentro de estos rangos es ruido a efectos de la detección de operaciones grandes.
- **Rangos de baja frecuencia**: los valores atípicos. Los umbrales para herramientas como Big Trades deben situarse en el punto donde la frecuencia cae bruscamente, o más allá.
- **AVG por rango**: la ocurrencia media de esa agrupación; **Dev**: la desviación en torno a ella. Un Dev alto en relación al AVG significa que el comportamiento de ese rango es inconsistente, así que trate los umbrales cercanos con más margen.
- **Modo Bars**: la misma lógica aplicada a valores por barra (POC, Delta POC o Volume) en lugar de operaciones individuales, útil al calibrar herramientas basadas en barras.

## Referencia de configuración

### General

| Opción | Qué hace |
|---|---|
| **Stat Mode** | **Trades** muestra estadísticas basadas en el número de operaciones/contratos; **Bars** muestra estadísticas relacionadas con barras y velas. |
| **Font Size** | Ajusta el tamaño del texto para la legibilidad de la gráfica. |
| **% Dev. Std.** | Establece el porcentaje de desviación estándar utilizado en el análisis. Valores más altos (2–3) amplían la selección para incluir valores más alejados de la media; valores más bajos (0,5–1,5) la restringen. [CONFIRM: whether lower % Dev. Std. values keep only values nearest the mean or exclude them — the legacy article wording is ambiguous] |

### Data Settings

| Opción | Qué hace |
|---|---|
| **Data Type** | **Volume** (cantidad total operada en un período de tiempo determinado), **Order** (datos de órdenes e información de colocación) o **Aggregate Trades** (combina las operaciones al mismo nivel de precio para una vista agregada total). |
| **Filter Min / Filter Max** | Excluyen del análisis los valores fuera de los umbrales especificados. |

### Range Trade Settings

| Opción | Qué hace |
|---|---|
| **Initial Range** | Límite inferior del rango de valores analizado. |
| **End Range** | Límite superior del rango de valores analizado. |
| **Step Range** | Anchura del intervalo para las agrupaciones de frecuencia. |

### Bar Settings

| Opción | Qué hace |
|---|---|
| **Base Data Bar** | El valor por barra analizado en modo Bars: **POC** (punto de control), **Delta POC** (diferencia entre compras y ventas) o **Volume** (volumen operado por barra). |

### Time Settings

| Opción | Qué hace |
|---|---|
| **Initial Filter / End Filter** | Restringen el análisis a un intervalo específico del día de trading, útil para excluir sesiones nocturnas con un comportamiento de tamaño diferente. |

## Consejos y errores comunes

- **Analice la sesión en la que opera.** Las distribuciones de tamaño nocturnas y de horario regular difieren sustancialmente; use los filtros de **Time Settings** para que las estadísticas reflejen su ventana de trading.
- **Elija el Step Range con intención.** Escalones demasiado anchos difuminan el punto de caída donde los tamaños se vuelven raros; escalones demasiado estrechos fragmentan la imagen. Empiece grueso y luego refine alrededor de la región interesante.
- **Vuelva a ejecutar el análisis tras el rollover de contrato o cambios de régimen.** Las estadísticas de un mes de baja volatilidad calibrarán mal los umbrales en uno de alta volatilidad.
- **Prefiera Aggregate Trades para umbrales de tamaño.** Los datos de operaciones sin procesar cuentan una ejecución dividida como varias operaciones pequeñas, lo que subestima el tamaño real que golpea el libro.

## Artículos relacionados

- [[big-trades]]
- [[adv-time-and-sales]]
- [[deep-stats]]
- [[on-candle-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]