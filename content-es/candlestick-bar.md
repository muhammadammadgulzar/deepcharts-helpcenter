---
title: "Barra de velas (Candlestick Bar)"
slug: "candlestick-bar"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Superponga velas japonesas construidas a partir de otro tipo de barra (minutos, barras de volumen o rango) sobre su gráfico principal."
keywords: ["barra de velas", "superposición de velas", "velas japonesas", "superponer velas", "superposición de barras de volumen", "superposición de barras de rango", "indicador de velas"]
source_hash: "87e37759989acc28"
ai_translated: true
source_hash: "87e37759989acc28"
---
A veces quiere dos vistas del mismo mercado en un solo gráfico: su gráfico de trabajo en un tipo de barra, y velas japonesas clásicas construidas a partir de otra agregación dibujadas encima. El indicador Candlestick Bar (Barra de velas) hace exactamente eso: superpone velas japonesas sobre el gráfico principal, con la construcción de las velas (minutos, barras de volumen o rango) elegida de forma independiente del gráfico subyacente.

Eso hace posible, por ejemplo, mantener como base un gráfico rápido orientado al flujo de órdenes y aun así ver la estructura de velas más grandes, basadas en tiempo o en rango, en el mismo panel.

## Qué es

La Candlestick Bar es una superposición de gráfico que construye y dibuja sus propias velas a partir del tipo de parámetro que seleccione — **Minutes**, **Vol Bars** o **Range** — y las pinta sobre la visualización de precio existente. El color del cuerpo, el relleno, el borde, la opacidad y el ancho son configurables, de modo que la superposición puede ser tan prominente o tan sutil como necesite para el análisis de acción del precio.

Como la superposición es independiente del tipo de barra del gráfico base, pertenece a la misma familia de herramientas que [[overlay-timeframe-candlestick]] y [[overlay-chart]]: elija la que corresponda a la comparación que desea hacer.

## Cuándo usarla

- Para ver la estructura de velas basadas en tiempo en un gráfico cuyas barras base no se basan en el tiempo (impulsadas por tick, volumen o rango).
- Para superponer velas construidas por volumen o por rango sobre un gráfico de tiempo, revelando cómo las barras basadas en actividad enmarcan el mismo movimiento.
- Para leer patrones de velas clásicos en una segunda agregación sin abrir y vincular otra ventana de gráfico.
- Para mantener visible una lectura estructural de nivel superior mientras ejecuta desde un gráfico base más rápido.

## Inicio rápido

1. Abra un gráfico y haga clic en el icono de gráfico de barras en la esquina superior izquierda para abrir el panel **Indicators** (Indicadores).
2. Haga clic en **Indicators** para abrir la **Indicator List** (Lista de indicadores) completa.
3. Busque "Candlestick Bar" y haga clic en **+** para añadirla.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración. Elija un **Parameter Type** (Tipo de parámetro) y establezca **Parameter 1**; por ejemplo, Minutes con un valor mayor que el marco temporal de su gráfico base da la clásica superposición de un marco temporal superior.
5. Reduzca la **Opacity** (Opacidad) del cuerpo o deshabilite **Show Filled Bar** para que el gráfico subyacente siga siendo legible bajo la superposición.

[SCREENSHOT: Un gráfico intradía rápido con la superposición Candlestick Bar activa: velas semitransparentes más grandes dibujadas sobre las barras base, ambas claramente distinguibles | dc-es-candlestick-bar-01.png]

## Cómo leerla

¿Es nuevo leyendo velas japonesas o quiere un repaso rápido? Pase el cursor sobre la vela interactiva de abajo — cada zona (cuerpo, mechas, apertura, máximo, mínimo, cierre) se explica sola, y puede alternarla entre alcista y bajista — y aplique después la misma lectura a cada vela de la superposición.

[WIDGET: candle-anatomy]

- **Cada vela de la superposición resume varias barras base** (o un quantum de volumen/rango de operaciones) como una unidad apertura-máximo-mínimo-cierre: léala exactamente como leería cualquier vela japonesa: la dirección del cuerpo para el control, las mechas para el rechazo.
- **El desacuerdo entre la superposición y la base es información.** Cuando las barras base rápidas zigzaguean pero las velas de la superposición se mantienen en una sola dirección, el ruido está por debajo de la resolución de su superposición; cuando ambas se alinean, los movimientos tienden a ser más limpios.
- **Las velas construidas por volumen igualan la actividad.** Con **Vol Bars**, cada vela cierra tras una cantidad objetivo de volumen, de modo que los periodos tranquilos se comprimen y los periodos activos se expanden: las comparaciones entre velas quedan normalizadas por actividad.
- **Las velas de rango igualan el movimiento.** Con **Range**, cada vela abarca una distancia de precio fija, lo que elimina por completo el tiempo de la lectura de patrones.

## Referencia de configuración

### Parámetros generales (General Parameters)

| Configuración | Qué hace |
|---|---|
| **Parameter Type** | Cómo se construyen las velas de la superposición: **Minutes**, **Vol Bars** o **Range**. |
| **Parameter 1** | El valor principal de construcción: se aplica a las velas de Minutos y Rango, y establece el objetivo para Vol Bars. |
| **Parameter 2** | Controla el valor de reversa para Vol Bars. |

### Colores

| Configuración | Qué hace |
|---|---|
| **Positive Bar** | Color de las velas alcistas de la superposición. |
| **Negative Bar** | Color de las velas bajistas de la superposición. |
| **Show Filled Bar** | Activa o desactiva el relleno de fondo del cuerpo de la vela. |

### Configuración de trazado (Plot Settings)

| Configuración | Qué hace |
|---|---|
| **Candle Width** | Grosor de las velas de la superposición. |
| **Border Width** | Grosor de los bordes de las velas. |
| **Opacity** | Transparencia del fondo del cuerpo de la vela. |
| **Show Vertical Line on Close** | Cuando está habilitado, dibuja una línea vertical en las velas que cierran. |

[SCREENSHOT: El diálogo de configuración de Candlestick Bar mostrando Parameter Type en Minutes con los campos Parameter 1 y Parameter 2, además de los grupos Colors y Plot Settings | dc-es-candlestick-bar-02.png]

## Consejos y errores comunes

- **Mantenga la superposición visualmente subordinada.** Si las velas de la superposición son completamente opacas y anchas, entierran el gráfico base; baje la **Opacity**, adelgace el **Candle Width** o desactive **Show Filled Bar** y lea la superposición solo por los bordes.
- **Elija una agregación que sea significativamente diferente.** Superponer velas de 5 minutos sobre un gráfico de 3 minutos añade desorden sin aportar información; la superposición se gana su lugar cuando resume muchas barras base o una lógica de construcción de barras genuinamente distinta.
- **Recuerde de qué velas provienen sus patrones.** Un patrón de velas en la superposición se completa solo cuando la vela de la superposición cierra; actuar sobre él a mitad de vela, porque el gráfico base ya cerró varias barras, es un error común.
- **Considere las alternativas para vistas entre símbolos o entre marcos temporales.** Si desea superponer otro instrumento, use [[overlay-symbol]]; para una superposición dedicada de velas de un marco temporal superior, compare [[overlay-timeframe-candlestick]] antes de decidir.

## Artículos relacionados

- [[overlay-timeframe-candlestick]]
- [[overlay-chart]]
- [[overlay-symbol]]
- [[chart-display-options]]
- [[different-types-of-input]]
- [[indicator-layout]]