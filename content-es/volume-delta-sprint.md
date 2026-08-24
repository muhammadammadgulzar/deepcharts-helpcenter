---
title: "Sprint de volumen/delta (Volume/Delta Sprint)"
slug: "volume-delta-sprint"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Traza el volumen acumulado y el delta sobre períodos de tiempo móviles como un panel de histograma, para que pueda ver las ráfagas de actividad y qué lado las impulsa."
keywords: ["volume delta sprint", "indicador sprint", "histograma de delta acumulado", "ráfaga de volumen", "sprint de delta", "delta móvil", "histograma de actividad"]
source_hash: "1c65ecc28b1a5b94"
ai_translated: true
source_hash: "1c65ecc28b1a5b94"
---
Volume/Delta Sprint muestra los valores acumulados de volumen y delta sobre períodos de tiempo especificados como un histograma en un panel separado debajo del gráfico. Donde un histograma de volumen normal le dice cuánto se negoció por barra, Sprint acumula la actividad a lo largo de una ventana móvil, haciendo que las ráfagas sostenidas de participación — y el lado que las impulsa — destaquen sobre el ruido ordinario de barra a barra.

Es una herramienta avanzada: recompensa a los traders que ya leen el delta y el volumen por separado y quieren un único panel que muestre cómo la presión se acumula y se desvanece a lo largo de un período de retroceso elegido.

## Qué es

El indicador suma el volumen o el delta a lo largo de una ventana de retroceso configurable (**Length**, por defecto **10** barras) y traza el resultado como barras de histograma. Las lecturas positivas muestran que la ventana estuvo dominada por presión compradora; las negativas, por presión vendedora. El **Delta Color Mode** puede sombrear cada barra según la magnitud de esa presión, de modo que un degradado que se desvanece le dice de un vistazo si la agresión se está intensificando o drenando.

[SCREENSHOT: Ventana de gráfico con el indicador Volume/Delta Sprint en un panel inferior separado — velas de precio arriba, histograma Sprint abajo mostrando un grupo de barras positivas altas (color comprador) durante una subida seguido de barras cada vez más pequeñas mientras el movimiento se estanca | dc-es-volume-delta-sprint-01.png]

## Cuándo usarlo

- Quiere ver si una ruptura está respaldada por un sprint sostenido de volumen y delta positivo, no por un pico de una sola barra.
- Sigue el decaimiento del impulso: las barras del histograma encogiéndose mientras el precio sigue subiendo lentamente advierte de que el lado agresivo se está retirando.
- Compara regímenes de actividad a lo largo de una sesión: ventanas tranquilas de acumulación frente a ventanas de impulso con alta participación.
- Quiere una vista suavizada y filtrable del delta en lugar de los valores brutos barra a barra de [[delta-bar]].

## Inicio rápido

1. Abra la **Indicator List** en su gráfico y añada **Volume/Delta Sprint**.
2. Abra la **Settings** (configuración) del indicador.
3. Mantenga **Input Data** en **Volume** para empezar; cambie a **Order** o **Trade** solo cuando tenga una razón específica (vea [[different-types-of-input]]).
4. Deje **Length** en su valor por defecto de **10** barras; acórtelo más adelante si opera movimientos intradía rápidos.
5. Ponga **Delta Color Mode** en **Fading** para que la intensidad del color de la barra refleje la magnitud del delta.
6. Deje **Filter Min** y **Filter Max** sin tocar al principio; añada filtros cuando conozca los tamaños de operación típicos de su símbolo.

[SCREENSHOT: Diálogo de configuración de Volume/Delta Sprint abierto en la sección General, mostrando Input Data, Filter Min, Filter Max, Length = 10 y Delta Color Mode visibles | dc-es-volume-delta-sprint-02.png]

## Cómo leerlo

- **Barras altas de un mismo color** — un sprint: un lado está comprometiendo tamaño a lo largo de toda la ventana. Los sprints sostenidos en la dirección de una ruptura confirman la participación.
- **Barras que encogen mientras el precio se extiende** — el esfuerzo se desvanece; el movimiento avanza con menos órdenes agresivas y se vuelve vulnerable a un retroceso.
- **Cambio de color tras un sprint** — el lado dominante cambió dentro de la ventana de retroceso; espere a que el precio lo siga.
- **Degradado que se desvanece (modo Fading)** — un color más profundo significa mayor magnitud de delta, así que el propio tono gradúa la convicción; el modo **Fixed** lo reduce a una lectura binaria positivo/negativo.

Como los valores son acumulativos a lo largo de la ventana, una impresión grande sigue influyendo en el histograma durante **Length** barras: espere que las lecturas decaigan gradualmente en lugar de reiniciarse cada barra.

## Referencia de configuración

### General

| Ajuste | Qué hace |
|---|---|
| **Input Data** | Fuente del cálculo: **Volume** (actividad total negociada), **Order** (datos de flujo de órdenes) o **Trade** (transacciones ejecutadas). Vea [[different-types-of-input]]. |
| **Filter Min** | Umbral mínimo para filtrar los datos: excluye valores bajos para reducir el ruido. |
| **Filter Max** | Umbral máximo para filtrar los datos: elimina valores atípicos que distorsionan el análisis. |
| **Length** | Período de retroceso de la ventana acumulativa. Por defecto **10** barras. Longitudes más cortas responden más rápido; longitudes más largas muestran patrones más amplios. |
| **Delta Color Mode** | **Fading** aplica coloreado en degradado según la magnitud del delta; **Fixed** usa colores binarios para valores positivos y negativos. |

### Suavizado

| Ajuste | Qué hace |
|---|---|
| **Enable** | Activa el suavizado para reducir el ruido y clarificar las tendencias de volumen. |
| **Average Type** | Método de media móvil: **Simple**, **Exponential**, **Triangular** o **Weighted**. |
| **Length** | Período del cálculo de la media móvil; valores más altos crean líneas más suaves. |

### Subgráficos

| Ajuste | Qué hace |
|---|---|
| **Color** | Color primario de las barras, usado para delta positivo / presión compradora. |
| **2° Color** | Color secundario, usado para delta negativo / presión vendedora. |
| **Subgraph Style** | Estilo de dibujo. Por defecto **Bars** (histograma). |
| **Auto Color** | Póngalo en **+/-** para el coloreado automático positivo/negativo. |
| **Line Style** | Por defecto **Solid** para barras rellenas. |
| **Line Width** | Grosor de barra/línea. Por defecto **3** píxeles. |
| **Short Name** | Etiqueta personalizada que se muestra en la leyenda del panel. |

## Consejos y errores comunes

- **Ajuste Length a su marco temporal.** Una ventana de 10 barras en un gráfico de 1 minuto cubre 10 minutos de flujo; el mismo ajuste en un gráfico de 15 minutos cubre media sesión. Reajústelo cuando cambie de marco temporal.
- **No apile filtros a ciegas.** Un **Filter Min** agresivo más un **Length** corto puede dejar el histograma casi vacío en símbolos tranquilos. Añada una restricción cada vez.
- **El modo Fading necesita contraste.** Elija colores primario y secundario que sigan distinguiéndose a baja opacidad, o la graduación por magnitud se vuelve ilegible.
- **El suavizado cambia velocidad por claridad.** Habilitar una media de suavizado larga hace que los giros sean más fáciles de ver pero los retrasa: los traders de impulso deberían mantener el suavizado corto o apagado.

## Artículos relacionados

- [[orderflow-101]]
- [[delta-bar]]
- [[speed-of-tape]]
- [[deep-delta]]
- [[different-types-of-input]]
- [[indicator-layout]]