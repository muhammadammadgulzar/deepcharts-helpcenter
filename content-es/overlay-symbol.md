---
title: "Superposición de símbolo (Overlay Symbol)"
slug: "overlay-symbol"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Añada a su gráfico un segundo instrumento que sigue automáticamente el marco temporal del gráfico principal, con estilos opcionales de volumen y delta."
keywords: ["superposición de símbolo", "comparar símbolos", "añadir segundo símbolo", "superposición de símbolos", "dos instrumentos en un gráfico", "overlaysymbol"]
source_hash: "2861a6da2611b5f2"
ai_translated: true
source_hash: "2861a6da2611b5f2"
---
El indicador Overlay Symbol muestra otro instrumento financiero en su gráfico principal para que pueda monitorear varios mercados a la vez. Su comportamiento definitorio: la serie superpuesta sincroniza automáticamente su marco temporal con el gráfico principal; cambie la resolución del gráfico principal y la superposición le sigue.

## Qué es

Overlay Symbol responde a la pregunta "¿cómo se está moviendo ese otro mercado junto al mío?" sin ninguna gestión de marcos temporales. Usted elige un símbolo, y DeepCharts renderiza sus velas junto a (o encima de) su serie principal en la misma resolución, actualizándose cada vez que cambia el gráfico principal.

Si necesita el instrumento superpuesto en un marco temporal o tipo de gráfico *diferente* al del gráfico principal, use [[overlay-chart|Overlay Chart]] en su lugar: esa es la diferencia clave entre los dos indicadores.

## Cuándo usarlo

- Quiere una comparación siempre sincronizada de dos mercados correlacionados mientras cambia libremente de marco temporal.
- Sigue la fuerza relativa entre un instrumento y su contraparte sectorial o de índice durante una sesión.
- Quiere contexto de flujo de órdenes en el segundo instrumento: la superposición admite coloreado basado en delta y anchos de vela basados en volumen.
- Está atento a divergencias (un mercado marca un nuevo máximo, el otro no) sin gestionar una segunda ventana de gráfico.

## Inicio rápido

1. Abra el menú de indicadores en su gráfico y añada **Overlay Symbol**.
2. Haga clic en el icono de configuración del indicador para abrir la ventana de configuración.
3. En General, use **Select** para elegir el símbolo a superponer.
4. Para dibujar la superposición encima de su serie de precios principal, seleccione **chart area 1**; de lo contrario, se renderiza en su propio panel.
5. Si los dos instrumentos cotizan a niveles de precio diferentes, habilite **Use sec. axis** para que la superposición tenga su propia escala de precios.
6. Aplique la configuración. Cambiar el marco temporal del gráfico principal ahora actualiza la superposición automáticamente.

[SCREENSHOT: Gráfico principal con Overlay Symbol activo — las velas de un segundo instrumento renderizadas en chart area 1 sobre un eje secundario, con el marco temporal coincidiendo con el gráfico principal | dc-es-overlay-symbol-01.png]

## Cómo leerlo

Trate la superposición como contexto para su mercado principal:

- **Confirmación**: ambos mercados empujando en la misma dirección respalda las lecturas de continuación de tendencia.
- **Divergencia**: que el mercado superpuesto no confirme un nuevo máximo o mínimo de su mercado principal es una advertencia temprana de que el movimiento puede carecer de participación.
- **Escalas independientes**: con **Use sec. axis** habilitado, las dos series están en ejes separados: compare forma y timing, no la distancia vertical ni los cruces.

Con **Color based on Delta** habilitado, las velas de la superposición se colorean por la compra agresiva neta frente a la venta, en lugar de por la dirección apertura/cierre, y **Width based on volume** hace que las velas con más negociación se rendericen físicamente más anchas: juntas muestran dónde se concentra la actividad en el segundo mercado. Vea [[orderflow-101]] para los conceptos subyacentes.

## Referencia de configuración

[SCREENSHOT: Ventana de configuración de Overlay Symbol mostrando la sección General con el campo Select y la sección Volume/Delta con Width based on volume, Color based on Delta, % Max Width Based on Volume, Border based on Open/close, Delta input, Color mode y Std. dev. for coloring | dc-es-overlay-symbol-02.png]

### General

| Configuración | Qué hace |
|---|---|
| **Select** | Elija qué símbolo superponer en el gráfico principal. |

### Volumen/Delta

| Configuración | Qué hace |
|---|---|
| **Width based on volume** | Varía el ancho de la vela con el volumen negociado: las velas con más actividad se renderizan más anchas. |
| **Color based on Delta** | Colorea las velas de la superposición por su valor de delta en lugar de por la dirección apertura/cierre. |
| **% Max Width Based on Volume** | El ancho máximo, como porcentaje, que puede alcanzar una vela ajustada por volumen. |
| **Border based on Open/close** | Colorea el borde de la vela según su estado alcista/bajista (apertura frente a cierre): útil cuando el cuerpo está coloreado por delta. |
| **Delta input** | Fuente de datos para el cálculo del delta: **Volume** o **Trades**. Vea [[different-types-of-input]]. |
| **Color mode** | **Fade** gradúa la intensidad del color según la magnitud del delta; **Fixed** usa un color sólido por dirección. |
| **Std. dev. for coloring** | El valor de desviación estándar que escala la intensidad del degradado cuando **Color mode** está establecido en fade. |

### Subgráfico

| Configuración | Qué hace |
|---|---|
| **Border color** | Color del borde de las velas de la superposición. |
| **Fill color** | Color de relleno del cuerpo de las velas de la superposición. |
| **Chart style** | Cómo se dibuja la serie: **Line**, **Candlestick**, **OHLC**, **Hidden** o **Candlebody**. |
| **Border width** | Grosor de los bordes de las velas. |

### Ubicación

| Configuración | Qué hace |
|---|---|
| **Chart area** | Seleccione **chart area 1** para superponer directamente en el área del gráfico principal; de lo contrario, la serie se renderiza en su propio panel. |
| **Use sec. axis** | Da a la superposición su propio eje de precios. Habilítelo cuando las escalas de precio de los instrumentos difieran. |

## Consejos y errores comunes

- **Habilite "Use sec. axis" para instrumentos en escalas de precio diferentes**: de lo contrario, la serie de menor precio se comprime en una línea plana y la superposición resulta ilegible.
- Recuerde que el marco temporal está bloqueado al del gráfico principal. Si la superposición parece "cambiar sola", está siguiendo la resolución de su gráfico principal: es así por diseño. Use [[overlay-chart|Overlay Chart]] para un marco temporal independiente.
- El estilo de gráfico **Line** suele ser la opción más limpia cuando solo le interesa la comparación direccional; velas completas en ambas series pueden saturar la ventana.
- El coloreado por delta requiere datos de operaciones clasificados por bid/ask de su fuente. Si los colores nunca varían, revise los tipos de datos que proporciona su fuente en [[different-types-of-input]].

## Artículos relacionados

- [[overlay-chart]]
- [[overlay-timeframe-candlestick]]
- [[correlation-viewer]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[orderflow-101]]