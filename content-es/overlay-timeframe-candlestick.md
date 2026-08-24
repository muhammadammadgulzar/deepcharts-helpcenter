---
title: "Superposición de velas de marco temporal (Overlay Timeframe Candlestick)"
slug: "overlay-timeframe-candlestick"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Dibuje velas de marco temporal superior directamente sobre un gráfico de marco temporal inferior para el análisis multitemporal en una sola ventana."
keywords: ["superposición de velas de marco temporal", "velas de marco temporal superior", "velas HTF", "superposición multitemporal", "velas MTF", "superposición de marco temporal"]
source_hash: "f5e3700cca9de030"
ai_translated: true
source_hash: "f5e3700cca9de030"
---
El indicador Overlay Timeframe Candlestick muestra velas de marco temporal superior directamente sobre un gráfico de marco temporal inferior. En lugar de alternar entre un gráfico de 5 minutos y uno de 30 minutos, verá las velas de 30 minutos formándose en tiempo real detrás de sus barras de 5 minutos: estructura y detalle en una sola vista.

## Qué es

El indicador agrega los datos de marco temporal inferior de su gráfico en velas de marco temporal superior y las dibuja sobre el gráfico actual. Cada vela de la superposición se actualiza en tiempo real hasta que su barra de marco temporal superior concluye, de modo que siempre ve la barra de marco temporal superior en desarrollo, no solo las completadas.

Responde a la pregunta que todo trader multitemporal se hace constantemente: "¿dónde estamos dentro de la vela más grande?"

## Cuándo usarlo

- Quiere observar la estructura del marco temporal superior sin cambiar de gráfico.
- Necesita ver cuándo el precio está consolidando *dentro* del rango de una vela mayor frente a cuándo está rompiéndolo.
- Quiere contexto de ruptura: un impulso en marco temporal inferior significa más cuando además rompe el extremo de la vela de marco temporal superior en desarrollo.
- Alinea sus entradas de marco temporal inferior con la dirección general del mercado mostrada por las barras de marco temporal superior.

## Inicio rápido

1. Abra el menú de indicadores en su gráfico y añada **Overlay Timeframe Candlestick**.
2. Abra la configuración del indicador.
3. En el grupo General, establezca **Param type** en el tipo de marco temporal para la superposición y **Param 1** en su valor, por ejemplo, una superposición de 30 minutos sobre un gráfico de 5 minutos.
4. En Chart Area, elija **Horizontal** para renderizar las velas de la superposición sobre el gráfico de precios, y use el **Panel selector** si las quiere en un panel diferente.
5. Opcionalmente, habilite **Show vertical line on close** en el grupo Plot para marcar en su gráfico cada cierre de vela de marco temporal superior.
6. Ajuste **Opacity** para que la superposición quede visible detrás de sus velas principales sin ocultarlas, y aplique.

[SCREENSHOT: Un gráfico de 5 minutos con Overlay Timeframe Candlestick dibujando velas de 30 minutos semitransparentes detrás de las barras de precio, con una vela de marco temporal superior aún formándose en el borde derecho | dc-es-overlay-timeframe-candlestick-01.png]

## Cómo leerlo

- **Posición dentro de la barra**: dónde se sitúa el precio actual dentro de la vela de marco temporal superior en desarrollo le dice quién está ganando esa barra. Un precio clavado en el máximo de la vela en desarrollo se lee de forma muy diferente a un precio a mitad de rango.
- **Consolidación frente a expansión**: varias barras de marco temporal inferior atrapadas dentro del rango de una vela de la superposición es consolidación; un cierre más allá del extremo de la vela anterior de la superposición es expansión de marco temporal superior.
- **Los cierres de vela importan**: la línea vertical de cierre (si está habilitada) marca los momentos en los que el marco temporal superior se compromete. Una mecha más allá de un nivel que vuelve a cerrar dentro es un rechazo que pasaría por alto mirando solo el marco temporal inferior.
- **Filtro de dirección**: muchos traders solo toman entradas de marco temporal inferior en la dirección de la vela de marco temporal superior actual y la anterior.

El indicador funciona mejor combinado con el análisis de estructura y niveles de liquidez: aporta contexto, no entradas.

## Referencia de configuración

[SCREENSHOT: Diálogo de configuración de Overlay Timeframe Candlestick mostrando los grupos Chart Area, General, Color y Plot con Param type, Param 1, Param 2, Up bar, Down bar, Show filled bar, Candle width, Border width, Opacity y Show vertical line on close visibles | dc-es-overlay-timeframe-candlestick-02.png]

### Área de gráfico

| Configuración | Qué hace |
|---|---|
| **Horizontal** | Renderiza las velas de la superposición sobre el gráfico de precios. |
| **Vertical** | Muestra la superposición verticalmente, donde esté disponible. |
| **Panel selector** | Elige qué panel muestra la superposición. |

### General

| Configuración | Qué hace |
|---|---|
| **Param type** | Define el tipo de marco temporal usado para la superposición. |
| **Param 1** | Especifica el valor principal del marco temporal. |
| **Param 2** | Parámetro secundario opcional, usado solo cuando el tipo de marco temporal seleccionado lo requiere. |

### Color

| Configuración | Qué hace |
|---|---|
| **Up bar** | Color de las velas alcistas de marco temporal superior. |
| **Down bar** | Color de las velas bajistas de marco temporal superior. |
| **Show filled bar** | Si las velas de la superposición se dibujan rellenas o huecas. |

### Trazado

| Configuración | Qué hace |
|---|---|
| **Candle width** | Controla el ancho de las velas de la superposición. |
| **Border width** | Ajusta el grosor de los bordes de las velas. |
| **Opacity** | Controla la transparencia de las velas de la superposición: redúzcala para que la serie principal siga siendo legible. |
| **Show vertical line on close** | Dibuja una línea vertical en el gráfico cuando cierra una vela de marco temporal superior. |

## Consejos y errores comunes

- **Mantenga una proporción sensata.** Superponer una vela diaria sobre un gráfico de 1 minuto produce un rectángulo enorme que abarca toda la ventana. Proporciones como 5 minutos → 30 minutos o 15 minutos → 1 hora se mantienen legibles.
- **La vela de la superposición más a la derecha está sin terminar.** Su color y rango siguen cambiando hasta que la barra de marco temporal superior concluye: no la trate como una señal completada.
- Baje la **Opacity** y desactive **Show filled bar** (velas huecas) si la superposición compite visualmente con sus barras de precio.
- **Show vertical line on close** es fácil de pasar por alto pero valiosa: los cierres del marco temporal superior son puntos de decisión naturales para aumentos, salidas e invalidaciones.
- Si quiere rangos resaltados, objetivos y resúmenes de volumen en lugar de velas dibujadas, use [[overlay-timeframe-highlight|Overlay Timeframe Highlight]]: los dos indicadores son complementarios.

## Artículos relacionados

- [[overlay-timeframe-highlight]]
- [[overlay-chart]]
- [[understanding-market-structure-sessions]]
- [[different-types-of-input]]
- [[indicator-layout]]