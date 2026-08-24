---
title: "Delta Cumulative Histogram"
slug: "delta-cumulative-histogram"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Muestra el delta acumulado como barras o una línea en la base del gráfico: un total acumulado compacto de agresión compradora frente a vendedora."
keywords: ["delta cumulative histogram", "histograma de delta acumulado", "histograma CVD", "línea de delta acumulado", "barras de delta acumulado", "delta de volumen acumulado"]
source_hash: "c8216c9948966d33"
ai_translated: true
source_hash: "c8216c9948966d33"
---
Delta Cumulative Histogram muestra la suma acumulada del delta de cada vela (la diferencia entre las compras a mercado agresivas y las ventas a mercado) como barras o una línea situadas en la base del gráfico. Responde continuamente a una pregunta: ¿qué lado ha sido más agresivo hasta ahora, y esa ventaja crece o se reduce?

Es el hermano compacto de [[delta-cumulative-candlestick]]: el mismo total acumulado, representado como un histograma o una línea simple en lugar de velas completas.

## Qué es

El delta de cada barra se añade a un total acumulado. Un delta acumulado positivo (dibujado en verde) significa que lidera la agresión compradora; uno negativo (dibujado en rojo), que lidera la vendedora. Como vive en un panel estrecho en la base del gráfico, funciona bien como acompañante permanente de cualquier disposición de gráfico sin ocupar el espacio de un panel completo de velas CVD.

Pruébelo a continuación: pase el cursor a lo largo del histograma para seguir cómo el delta de cada barra alimenta el total acumulado, y esté atento al momento en que el total se aplana mientras el precio sigue empujando.

[WIDGET: delta-lab]

## Cuándo usarlo

- Quiere una lectura persistente y de bajo consumo de espacio de la agresión neta bajo cada gráfico.
- Confirma tendencias: un delta acumulado creciente junto con un precio al alza muestra a los compradores agresivos impulsando el movimiento.
- Detecta divergencias: el precio marca un nuevo extremo y el histograma no lo sigue.
- Compara sesiones: con el reinicio de sesión habilitado, cada día empieza en cero y el histograma se convierte en un marcador intradía.

## Inicio rápido

1. Abra la **Indicator List** (lista de indicadores) en su gráfico.
2. Busque **Delta Cumulative Histogram** y haga clic en **+** para añadirlo.
3. Haga clic en el icono de **Settings** (configuración) junto al indicador.
4. Establezca **Input Data** en **Volumes** para que el delta se calcule a partir de la cantidad de contratos o acciones negociadas (consulte [[different-types-of-input]]).
5. Habilite **Restore at Start Session** para que el total se reinicie al comienzo de cada sesión en lugar de acumular indefinidamente.
6. En **Subgraphs**, elija **Bars** o **Line**, establezca los colores y aplique.

[SCREENSHOT: Diálogo de configuración de Delta Cumulative Histogram mostrando las opciones de Input Data (Volumes, Trades), los campos Filter Min y Filter Max, el interruptor Restore at Start Session y las opciones de estilo Bars / Line en Subgraphs | dc-es-delta-cumulative-histogram-01.png]

## Cómo leerlo

- **Histograma verde (positivo):** la agresión compradora acumulada lidera el periodo. **Rojo (negativo):** lideran los vendedores.
- **La pendiente antes que el signo.** Un histograma positivo pero que se aplana significa que la ventaja de los compradores ha dejado de crecer: el impulso de la agresión se está desvaneciendo aunque el total siga en verde.
- **La divergencia con el precio** es la señal clásica: un precio que avanza hacia nuevos máximos mientras el histograma se aplana significa que el movimiento no está siendo impulsado por compra agresiva nueva. Trátela como una advertencia para ajustar el riesgo, no como una operación en contra automática.
- **La entrada Volumes frente a Trades cambia la historia.** Las operaciones muestran con qué frecuencia se negocia el instrumento; los volúmenes, cuánto. Más operaciones sin más volumen apunta a muchas órdenes pequeñas; más volumen sin más operaciones apunta a menos participantes ejecutando órdenes grandes. Leer ambas entre sí revela quién está activo: la masa o el tamaño.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Input Data** | Base de datos para el cálculo del delta: **Volumes** (cantidad de contratos o acciones negociadas) o **Trades** (número de operaciones ejecutadas, independientemente del tamaño). Consulte [[different-types-of-input]]. |
| **Filter Min** | Umbral mínimo: los valores por debajo de él se ignoran. |
| **Filter Max** | Umbral máximo. Establézcalo en **0** para deshabilitar este filtro. |
| **Restore at Start Session** | Cuando está habilitado, el indicador se reinicia al comienzo de cada sesión de trading en lugar de acumular indefinidamente. |

### Subgráficos (Subgraphs)

| Configuración | Qué hace |
|---|---|
| **Style** | Representación como **Bars** o **Line**. |
| **Line Style** | **Solid** o **Hatch**. |
| **Line Width** | Grosor del trazado. |
| **Colors** | Colores del trazado: verde para el delta acumulado positivo (agresión compradora), rojo para el negativo (agresión vendedora). |
| **Show Name / Value** | Activa o desactiva la visualización del nombre del indicador y su valor actual. |
| **Custom Name** | Renombra la etiqueta del indicador en el gráfico. |

## Consejos y errores comunes

- **Elija una convención de reinicio y manténgala.** Un histograma acumulativo y uno con reinicio de sesión en el mismo valor significan cosas completamente distintas.
- **El número absoluto depende de la fuente de datos y de los filtros.** Compare la forma y la pendiente del histograma frente al precio, no su valor bruto frente a otras plataformas o los gráficos de otros traders.
- **Los filtros cambian lo que significa "delta".** Con un **Filter Min** alto está siguiendo el delta acumulado de operaciones grandes: potente, pero documéntelo antes de compararlo con un gráfico sin filtrar.
- **Use la variante de velas cuando necesite detalle intrabarra.** El histograma solo muestra los totales de cierre por barra; [[delta-cumulative-candlestick]] muestra el camino que el delta tomó dentro de cada barra.

## Artículos relacionados

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-cumulative-candlestick]]
- [[delta-bar]]
- [[volume]]