---
title: "Superposición de gráfico (Overlay Chart)"
slug: "overlay-chart"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Muestre un segundo instrumento en su gráfico principal con su propio tipo de gráfico y marco temporal, incluido el coloreado de velas basado en delta."
keywords: ["superposición de gráfico", "comparar dos símbolos", "segundo símbolo en el gráfico", "gráfico multisímbolo", "eje secundario", "indicador de superposición", "overlaychart"]
source_hash: "99cfc7d1d0777c7f"
ai_translated: true
source_hash: "99cfc7d1d0777c7f"
---
El indicador Overlay Chart dibuja el gráfico de un segundo instrumento financiero encima de su gráfico principal, para que pueda monitorear dos mercados en una sola ventana. Es el hermano más configurable de [[overlay-symbol|Overlay Symbol]]: en lugar de replicar el marco temporal del gráfico principal, Overlay Chart le permite elegir un tipo de gráfico y unos parámetros completamente independientes para el instrumento superpuesto.

## Qué es

Overlay Chart responde a la pregunta "¿qué está haciendo ese otro mercado ahora mismo, en la resolución que yo elija?" sin abrir una segunda ventana de gráfico. Usted selecciona cualquier símbolo de su fuente, le asigna su propio tipo de gráfico (tiempo, rango, volumen, Renko y más), y DeepCharts lo renderiza en un panel separado o directamente encima de su serie de precios principal.

Como la serie superpuesta puede usar una escala diferente a la de su instrumento principal, el indicador incluye una opción de eje de precios secundario para que ambas series sigan siendo legibles.

## Cuándo usarlo

- Opera un instrumento pero toma señales de otro correlacionado, por ejemplo, observando un futuro de índice mientras opera un mercado relacionado.
- Quiere una vista de otro símbolo con mayor o menor resolución que la que usa su gráfico principal (Overlay Symbol no puede hacer esto: siempre se sincroniza con el marco temporal del gráfico principal).
- Está estudiando comportamientos de adelanto/retraso o divergencia entre dos mercados dentro de una sola ventana.
- Quiere velas coloreadas por delta en la serie superpuesta para comparar el flujo de órdenes entre instrumentos.

## Inicio rápido

1. Abra el menú de indicadores en su gráfico y añada **Overlay Chart**.
2. Abra la configuración del indicador.
3. Haga clic en **Select Symbol** y elija el instrumento que desea superponer.
4. Establezca **Parameter Type** en el tipo de gráfico que desea para la superposición (por ejemplo **Minutes**) e introduzca su valor en **Param 1** (por ejemplo 15 para una serie de 15 minutos).
5. Para dibujar la superposición encima de su serie de precios principal, seleccione **Chart Area 1** en la parte superior de la ventana del indicador. Dejarla en su propia área mantiene las dos series en paneles separados.
6. Si los dos instrumentos cotizan a niveles de precio diferentes, habilite **Use Secondary Axis** para que la superposición tenga su propia escala.
7. Aplique la configuración.

[SCREENSHOT: Gráfico principal de un instrumento de futuros con Overlay Chart activo mostrando las velas de un segundo instrumento renderizadas en Chart Area 1 sobre un eje secundario, ambas series claramente distinguibles por color | dc-es-overlay-chart-01.png]

## Cómo leerlo

Lea la superposición como contexto, no como una señal en sí misma. Los usos más comunes:

- **Correlación y divergencia**: cuando dos mercados normalmente correlacionados dejan de moverse juntos, el rezagado suele resolverse hacia el líder. La superposición hace visibles estos momentos barra a barra.
- **Fuerza relativa**: compare la forma de las dos series a lo largo de la misma sesión: cuál marcó primero un nuevo máximo, cuál sostuvo su mínimo.
- **Conciencia de escala**: con **Use Secondary Axis** habilitado, las dos series se dibujan en escalas independientes. Compare formas y timing, no la distancia vertical; un cruce visual entre las dos líneas no tiene significado entre ejes distintos.

Si habilita **Delta-based Color**, las velas superpuestas se colorean por su delta (agresión compradora frente a vendedora) en lugar de por la dirección apertura/cierre, lo que le permite comparar el flujo de órdenes entre los dos mercados. Vea [[orderflow-101]] para saber cómo se calcula el delta.

## Referencia de configuración

[SCREENSHOT: Diálogo de configuración de Overlay Chart abierto, mostrando la sección de parámetros General con Select Symbol y el menú desplegable Parameter Type expandido listando Minutes, Days, Weekly, Monthly, Vol Bars, Range, Volume, Trade, Renko, Seconds, Point Figure y Delta | dc-es-overlay-chart-02.png]

### General

| Configuración | Qué hace |
|---|---|
| **Select Symbol** | Haga clic para elegir el símbolo que se superpondrá en el gráfico principal. |
| **Parameter Type** | El tipo de gráfico de la serie superpuesta: **Minutes**, **Days**, **Weekly**, **Monthly**, **Vol Bars**, **Range**, **Volume**, **Trade**, **Renko**, **Seconds**, **Point Figure** o **Delta**. |
| **Param 1** | El parámetro de referencia para los gráficos basados en tiempo y para los tipos Range, Volume, Trade, Renko y Delta; también el primer parámetro de los gráficos Vol Bars y Point Figure. |
| **Param 2** | El segundo parámetro, usado solo por los tipos de gráfico Vol Bars y Point Figure. |

### Volumen/Delta

| Configuración | Qué hace |
|---|---|
| **Delta-based Color** | Colorea las velas de la superposición por su delta en lugar de por la dirección apertura/cierre. |
| **Open/Close Based Border** | Colorea el borde de la vela según su estado alcista/bajista (apertura frente a cierre), útil junto al coloreado del cuerpo basado en delta. |
| **Delta Input** | De qué base de datos lee el cálculo del delta: **Volume** o **Trades**. Vea [[different-types-of-input]]. |
| **Color Mode** | **Fade** gradúa la intensidad del color según la magnitud del delta; **Fixed** usa un único color sólido por dirección. |
| **Std. Dev. for Coloring** | El valor de desviación estándar que escala la intensidad del degradado cuando **Color Mode** está establecido en Fade. |

### Subgráfico

| Configuración | Qué hace |
|---|---|
| **Border color** | Color del borde de las velas de la superposición. |
| **Fill color** | Color de relleno del cuerpo de las velas de la superposición. |
| **Chart Style** | Cómo se dibuja la serie superpuesta: **Line**, **Candlestick**, **OHLC**, **Hidden** o **Candlebody**. |
| **Border width** | Grosor de los bordes de las velas. |

### Ubicación

| Configuración | Qué hace |
|---|---|
| **Chart Area** | Seleccione **Chart Area 1** en la parte superior de la ventana del indicador para dibujar la superposición en el área del gráfico principal; de lo contrario, se renderiza en su propio panel. |
| **Use Secondary Axis** | Da a la serie superpuesta su propio eje de precios. Habilítelo siempre que los dos instrumentos coticen en escalas de precio diferentes. |

## Consejos y errores comunes

- **Olvidar el eje secundario** es el problema más común: con dos instrumentos en niveles de precio muy diferentes compartiendo un eje, una de las series se aplana hasta convertirse en una línea ilegible. Habilite **Use Secondary Axis**.
- Si solo quiere el mismo marco temporal que su gráfico principal, use [[overlay-symbol|Overlay Symbol]] en su lugar: se sincroniza automáticamente y necesita menos configuración.
- Mezclar tipos de gráfico muy diferentes (por ejemplo, una superposición Renko sobre un gráfico principal basado en tiempo) es potente pero puede inducir a error en el timing, ya que las barras Renko no cierran según un reloj. Interprete la alineación barra a barra con flexibilidad.
- El coloreado basado en delta depende de los datos de operaciones bid/ask de su fuente; si el delta se ve vacío o plano, revise el tipo de datos de su fuente en [[different-types-of-input]].
- Use los estilos de gráfico **Line** o **Candlebody** cuando la superposición sature la serie principal: una representación más fina mantiene legible el instrumento principal.

## Artículos relacionados

- [[overlay-symbol]]
- [[overlay-timeframe-candlestick]]
- [[correlation-viewer]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[orderflow-101]]