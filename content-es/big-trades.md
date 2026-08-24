---
title: "Big Trades"
slug: "big-trades"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Marca las grandes órdenes a mercado agresivas directamente en el gráfico y puede dibujar zonas a partir de ellas, para que vea dónde se negoció tamaño y qué niveles importan."
keywords: ["big trades", "indicador de operaciones grandes", "grandes impresiones", "órdenes grandes en el gráfico", "análisis de big trades", "filtro de tamaño de operación", "operaciones de ballenas", "operaciones en bloque"]
source_hash: "f4225a8a8dea556f"
ai_translated: true
source_hash: "f4225a8a8dea556f"
---
Big Trades visualiza grandes órdenes a mercado agresivas en tiempo real, resaltando la actividad significativa de compra y venta directamente en el gráfico. En lugar de escanear la cinta en busca de tamaño, usted ve aparecer marcadores en el precio y la barra exactos donde ejecutaron los grandes participantes y, opcionalmente, zonas horizontales que se extienden desde esos precios.

El indicador puede filtrar manualmente por tamaño de operación o usar el algoritmo integrado **Big Trades Analysis** para determinar automáticamente umbrales razonables para su símbolo.

Antes de ajustar cualquier filtro, observe la cinta en vivo de abajo: las impresiones sobredimensionadas que destacan del flujo son exactamente lo que Big Trades marca en su gráfico. Pase el cursor sobre una impresión para ver por qué importa.

[WIDGET: tape-lab]

## Qué es

Big Trades traza un marcador (círculo, cuadrado, rombo o texto) cada vez que una operación supera su filtro de tamaño. El color del marcador separa a los compradores agresivos (**Ask Color**) de los vendedores agresivos (**Bid Color**), y el tamaño del marcador escala con el tamaño de la operación. Como las órdenes grandes a menudo definen soportes y resistencias, el indicador también puede dibujar zonas a partir de esos precios y extenderlas hacia adelante un número determinado de barras.

[SCREENSHOT: Ventana de gráfico con el indicador Big Trades activo — marcadores circulares de tamaño variable en varias velas, marcadores de color ask en movimientos alcistas y de color bid en movimientos bajistas, con una zona horizontal extendiéndose a la derecha desde una operación grande | dc-es-big-trades-01.png]

## Cuándo usarlo

- Quiere detectar compradores o vendedores agresivos en el momento en que golpean el mercado con tamaño.
- Marca niveles de precio de alto impacto: los precios donde ejecutaron operaciones grandes suelen ser reprobados y defendidos.
- Estudia la dinámica del flujo de órdenes: si los grandes participantes operan a favor o en contra del movimiento actual.
- Quiere una alternativa basada en el gráfico a vigilar el tamaño en [[adv-time-and-sales]].

## Inicio rápido

1. Abra la lista **Indicator List** en su gráfico y añada **Big Trades**.
2. Abra la configuración (**Settings**) del indicador.
3. En **Data Settings**, establezca **Filter Mode** en **Manual** y elija un tamaño **Min** claramente por encima de la media para su símbolo (por ejemplo, **Min = 30** traza solo operaciones de 30 contratos o más).
4. En **Plot Settings**, mantenga **Marker Type** en **Circle** y deje el escalado de tamaño por **Standard Deviation** en su valor predeterminado (recomendado).
5. Confirme que **Ask Color** y **Bid Color** son fáciles de distinguir contra el fondo de su gráfico.
6. Cuando se sienta cómodo, cambie **Filter Mode** a **Automatic** y ejecute el análisis (vea abajo) para que los umbrales se adapten al símbolo.

[SCREENSHOT: Diálogo de configuración de Big Trades abierto en Data Settings — Days to Load, Input Type, Filter Mode en Manual, y los campos de filtro manual Min/Max visibles | dc-es-big-trades-02.png]

## Cómo leerlo

- **Marcador grande de color ask en un empuje alcista**: un comprador agresivo levantando la oferta; convicción en la dirección del movimiento.
- **Marcador grande de color bid contra un soporte que no logra romperlo**: se vendió tamaño y el nivel aguantó: posible absorción (consulte [[understanding-icebergs-absorption]]).
- **Grupos de operaciones grandes en un mismo precio**: un nivel que importa a las instituciones; las zonas opcionales hacen que estos niveles persistan visualmente.
- **Operaciones grandes contra la tendencia cerca de extremos**: posible toma de posiciones para una reversión; confirme con el delta y el contexto en lugar de actuar sobre una sola impresión.

## Referencia de configuración

### Data Settings

| Configuración | Qué hace |
|---|---|
| **Days to Load** | Cuántos días históricos de datos de operaciones grandes aparecen en el gráfico. |
| **Input Type** | Qué tipo de datos de flujo de órdenes usa el indicador. Consulte [[different-types-of-input]]. |
| **Filter Mode** | **Manual** filtra según sus propios valores Min/Max; **Automatic** usa el algoritmo Big Trades Analysis para determinar umbrales óptimos. |
| **Manual Filter (Min & Max)** | Tamaños de operación mínimo y máximo mostrados. Ejemplo: con **Min = 30**, solo se trazan operaciones de 30 contratos o más; esto reduce el ruido y mantiene el foco en las operaciones significativas. |

### Plot Settings

| Configuración | Qué hace |
|---|---|
| **Marker Type** | **Circle**, **Square**, **Diamond** o **Text**. |
| **Hollow Fill** | Dibuja los contornos de los marcadores sin color de relleno. |
| **Standard Deviation** | Controla cómo escala el tamaño del marcador con el tamaño de la operación (se recomienda el valor predeterminado). |
| **Minimum Size** / **Maximum Size** | Tamaños de marcador más pequeño y más grande. |
| **Minimum Opacity** / **Maximum Opacity** | Rango de transparencia de los marcadores. |
| **Ask Color** | Color del marcador para compradores agresivos. |
| **Bid Color** | Color del marcador para vendedores agresivos. |
| **Plot Only Inside Bar** | (Tipo de marcador Text) Restringe el texto al cuerpo de la vela. |
| **Text Size** / **Text Color** | (Tipo de marcador Text) Tamaño de fuente y color. |

### Zones Settings

Cuando está habilitado, el indicador traza zonas horizontales basadas en operaciones grandes.

| Configuración | Qué hace |
|---|---|
| **Biggest Only** | Traza zonas solo para las operaciones más grandes. |
| **Shadow Mode** | Zonas para operaciones en la mecha de la vela: **All**, **Reverse Only** (vela bajista → compradores agresivos; vela alcista → vendedores agresivos), **Trend Only** (vela bajista → vendedores agresivos; vela alcista → compradores agresivos) o **None**. |
| **Body Mode** | Las mismas cuatro opciones que Shadow Mode, aplicadas a las operaciones dentro del cuerpo de la vela. |
| **Bid Color / Ask Color** | Colores de zona para cada lado de la operación. |
| **Opacity** | Transparencia de la zona. |
| **Number of Bars** | Hasta dónde se extienden las zonas hacia la derecha. |

### Big Trades Analysis (modo Automatic)

Big Trades Analysis es un algoritmo de DeepCharts que calcula dinámicamente los umbrales óptimos de operaciones grandes según el comportamiento del precio y la volatilidad del símbolo seleccionado. Los resultados se guardan automáticamente, por lo que solo necesita ejecutarlo aproximadamente una vez por semana o por mes, no antes de cada sesión.

Para usarlo:

1. Aplique el indicador Big Trades a su gráfico.
2. Abra la configuración (**Settings**) del indicador y establezca **Filter Mode** en **Automatic**.
3. Seleccione un **Intensity Level**: **Low**, **Medium** o **Strong**.
4. Guarde la configuración.
5. Vaya a **Options → Tools → Big Trades Analysis** y ejecute el análisis.
6. Recargue o reinicie el gráfico si los marcadores no se actualizan.

El indicador aplica entonces automáticamente los umbrales optimizados a sus gráficos.

[SCREENSHOT: Menú Options expandido mostrando Tools → Big Trades Analysis, con la ventana de la herramienta de análisis abierta y lista para ejecutarse | dc-es-big-trades-03.png]

## Consejos y errores comunes

- **No establezca Min demasiado bajo.** Un umbral cercano al tamaño medio de operación inunda el gráfico de marcadores y oculta los verdaderos valores atípicos: comience alto y bájelo gradualmente.
- **Vuelva a ejecutar el análisis tras cambios de régimen de volatilidad.** Los umbrales automáticos se guardan, pero un símbolo cuya volatilidad se ha duplicado desde la última ejecución merece un análisis nuevo.
- **La diferencia entre Reverse Only y Trend Only importa.** Estos modos de zona clasifican las mismas operaciones de mecha de forma distinta: elija el que corresponda a lo que quiere estudiar (presión en contra frente a tamaño a favor de la tendencia) en lugar de habilitar ambos.
- **Una sola impresión grande es contexto, no una señal.** Combínela con la reacción del nivel, el delta y la estructura antes de operarla.

## Artículos relacionados

- [[adv-time-and-sales]]
- [[deep-trades]]
- [[understanding-icebergs-absorption]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]