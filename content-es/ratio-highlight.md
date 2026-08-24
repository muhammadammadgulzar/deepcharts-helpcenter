---
title: "Ratio Highlight"
slug: "ratio-highlight"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "advanced"
time: "5 min read"
description: "Marca las barras cuyo Ratio High o Ratio Low cae dentro de sus umbrales, señalando posible absorción de compradores o vendedores en los extremos de la barra."
keywords: ["ratio highlight", "ratio high", "ratio low", "absorción", "agotamiento de compradores", "agotamiento de vendedores", "absorción en el bid", "absorción en el ask", "ratio del footprint"]
source_hash: "03953f8096ba8da3"
ai_translated: true
source_hash: "03953f8096ba8da3"
---
El indicador Ratio Highlight coloca marcadores en las barras cuyos valores de **Ratio High** y **Ratio Low** cumplen los umbrales definidos por usted. Funciona analizando la proporción de actividad de trading entre ticks de precio consecutivos en los extremos de una barra, lo que lo convierte en una forma rápida de detectar posible absorción de compradores y vendedores sin leer a mano cada columna del footprint.

Un ratio extremo en la parte superior o inferior de una barra sugiere que un lado presionó con fuerza hacia el extremo y obtuvo poco movimiento de precio a cambio: la firma clásica del agotamiento o la absorción.

## Qué es

Ratio Highlight es un detector de agotamiento de flujo de órdenes. Para cada barra evalúa el Ratio High (proporción de actividad en la parte superior de la barra) y el Ratio Low (proporción de actividad en la parte inferior de la barra) y resalta la barra con un marcador de color cuando el valor cae entre sus umbrales **Min Ratio** y **Maximum Ratio**. Responde a la pregunta "¿la compra o la venta fue absorbida en el extremo de esta barra?"

[CONFIRM: the exact Ratio High / Ratio Low formula — which consecutive price levels of the bar are compared and in which direction the ratio is taken]

Los ratios que puntúa provienen directamente de celdas del footprint como las de abajo: pase el cursor sobre los pares bid×ask en la parte superior e inferior de cada barra para ver los números en bruto detrás de un Ratio High o un Ratio Low:

[WIDGET: footprint-lab]

[SCREENSHOT: Ventana de gráfico con Ratio Highlight aplicado — un máximo de swing donde una barra bajista lleva un marcador de Ask Absorption en su parte superior, y un mínimo de swing donde una barra alcista lleva un marcador de Bid Absorption, con ambos colores claramente distinguibles | dc-es-ratio-highlight-01.png]

## Cuándo utilizarlo

- Usted opera reversiones en puntos de agotamiento y quiere que las barras con ratios extremos en la parte superior o inferior se marquen automáticamente.
- Usted lee footprints y quiere un prefiltro que le indique qué barras merecen abrirse en [[deep-print]].
- Usted busca absorción, es decir, órdenes a mercado agresivas que son tragadas por órdenes de límite pasivas, en máximos y mínimos de swing.
- Usted quiere una superposición visualmente ligera: el indicador añade únicamente marcadores de color, no un panel de datos completo.

## Inicio rápido

1. Abra la **Indicator List** (lista de indicadores) en su gráfico.
2. Busque **Ratio Highlight** y haga clic en **+** para añadirlo.
3. Haga clic en el icono de **Settings** (configuración) junto al indicador para abrir su ventana de configuración.
4. Deje la selección de ratio en su modo predeterminado, que resalta **Ratio High** en barras bajistas y **Ratio Low** en barras alcistas: la combinación que muestra tanto las señales de agotamiento de compradores como las de vendedores.
5. Establezca **Min Ratio** lo suficientemente alto para que las barras corrientes dejen de calificar; súbalo aún más si su gráfico muestra marcadores en la mayoría de las barras.
6. Elija valores de **Bid Absorption Color** y **Ask Absorption Color** claramente contrastantes y aplique.

[SCREENSHOT: Diálogo de configuración de Ratio Highlight mostrando la sección Ratio con la selección de ratio, los campos Min Ratio y Maximum Ratio, y la sección Plot con Bid Absorption Color, Ask Absorption Color y Opacity | dc-es-ratio-highlight-02.png]

## Cómo interpretarlo

- **Marcador de Ratio High (Ask Absorption Color): agotamiento de compradores.** Los compradores empujaron hacia la parte superior de la barra, pero su agresión produjo una proporción de actividad extrema en el máximo: la compra fue absorbida y el nivel se mantuvo. Cerca de un nivel de resistencia o tras una subida prolongada, esto es una advertencia de que el empuje alcista se está quedando sin participantes.
- **Marcador de Ratio Low (Bid Absorption Color): agotamiento de vendedores.** La imagen especular en el mínimo de la barra: debilidad significativa del lado vendedor, con vendedores presionando hacia el mínimo y siendo absorbidos. En un soporte tras una caída, esto señala un posible rebote.
- **El contexto decide la operación.** Un marcador aislado dentro de un rango en rotación es ruido; un marcador impreso exactamente en un máximo previo, un extremo de sesión o un nivel de perfil con mucho volumen es información. Combínelo con una herramienta de niveles y con el panorama de delta circundante.
- **La confirmación sigue importando.** La absorción le dice que un intento falló; no garantiza la reversión. Espere a que el mercado realmente gire, con una barra opuesta fuerte o un cambio en el delta, antes de actuar.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Configuración de ratio (Ratio Settings)

| Configuración | Qué hace |
|---|---|
| **Ratio selection** | Controla qué ratios se resaltan. En el modo predeterminado resalta **Ratio High** en barras bajistas y **Ratio Low** en barras alcistas, mostrando tanto las señales de agotamiento de compradores como las de vendedores. |
| **Min Ratio** | Valor mínimo del umbral del ratio. Solo se resaltan las barras con valores de ratio iguales o superiores a este mínimo. |
| **Maximum Ratio** | Valor máximo del umbral del ratio. Solo se resaltan las barras con valores de ratio iguales o inferiores a este máximo. |

### Configuración de trazado (Plot Settings)

| Configuración | Qué hace |
|---|---|
| **Bid Absorption Color** | Color del marcador para **Ratio Low** (agotamiento de vendedores), mostrado en barras con debilidad significativa del lado vendedor. |
| **Ask Absorption Color** | Color del marcador para **Ratio High** (agotamiento de compradores), mostrado en barras con debilidad significativa del lado comprador. |
| **Opacity** | Transparencia de los marcadores. Los valores más bajos hacen los marcadores más transparentes; los valores más altos los hacen más opacos y visibles. |

## Consejos y errores comunes

- **Utilice ambos umbrales como una banda.** **Min Ratio** y **Maximum Ratio** definen juntos una ventana, lo que le permite excluir tanto los ratios sin interés como los valores atípicos patológicos (por ejemplo, niveles donde casi nada se negoció en un lado y el ratio se dispara sin significado).
- **Calibre por instrumento.** Las distribuciones de ratios difieren entre mercados densos y delgados; los umbrales que son selectivos en un contrato pueden marcar una barra sí y otra no en otro. Vuelva a ajustarlos cuando cambie de símbolo.
- **No opere en contra de cada marcador.** Las señales de agotamiento contra una tendencia fuerte fallan con frecuencia. Trate los marcadores como lugares donde empezar a observar y exija confirmación de la estructura o de la cinta.
- **Verifique en el footprint.** Cuando un marcador se imprima en un nivel que le importe, abra la barra en [[deep-print]] y revise los volúmenes reales de bid/ask en el extremo: el ratio resume el footprint, no lo sustituye.

## Artículos relacionados

- [[understanding-icebergs-absorption]]
- [[orderflow-101]]
- [[reading-a-footprint]]
- [[deep-print]]
- [[different-types-of-input]]
- [[indicator-layout]]