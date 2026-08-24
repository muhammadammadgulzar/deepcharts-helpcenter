---
title: "Resaltado de marco temporal (Overlay Timeframe Highlight)"
slug: "overlay-timeframe-highlight"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Resalte los rangos de velas de marco temporal superior en un gráfico de marco temporal inferior, con proyecciones opcionales de objetivos de máximo/mínimo y resúmenes de volumen."
keywords: ["resaltado de marco temporal", "resaltado de marco temporal superior", "rango HTF", "resaltado temporal", "máximo mínimo de marco temporal superior", "resaltado MTF"]
source_hash: "d4ae08b12844fde2"
ai_translated: true
source_hash: "d4ae08b12844fde2"
---
El indicador Overlay Timeframe Highlight resalta visualmente las velas de marco temporal superior en un gráfico de marco temporal inferior. En lugar de dibujar velas completas como [[overlay-timeframe-candlestick|Overlay Timeframe Candlestick]], sombrea cada segmento de marco temporal superior, puede proyectar su máximo/mínimo como líneas objetivo, y puede imprimir resúmenes de volumen u operaciones por segmento.

## Qué es

El indicador agrega las barras de marco temporal inferior de su gráfico en segmentos de marco temporal superior y resalta cada segmento visualmente. Opcionalmente, proyecta líneas objetivo de máximo/mínimo desde cada vela de marco temporal superior y muestra estadísticas resumidas, como el volumen total del rango resaltado.

Responde a "¿a qué vela más grande pertenece esta acción del precio, dónde están los extremos de esa vela y cuánta actividad se negoció dentro de ella?"

## Cuándo usarlo

- Quiere la estructura del marco temporal superior visible sin cambiar de gráfico.
- Sigue los rangos de máximo/mínimo de las velas mayores como niveles de referencia intradía.
- Quiere resúmenes de volumen u operaciones por segmento para ver qué velas de marco temporal superior tuvieron participación real.
- Marca objetivos de marco temporal superior: máximos y mínimos proyectados a los que el mercado puede volver.

## Inicio rápido

1. Abra el menú de indicadores en su gráfico y añada **Overlay Timeframe Highlight**.
2. Abra la configuración del indicador.
3. En el grupo General, establezca **Param type** en el tipo de marco temporal (por ejemplo Minute, Hour o Day) y **Param 1** en el valor, por ejemplo, un resaltado horario sobre un gráfico de 5 minutos.
4. En Chart Area, elija **Horizontal** para renderizar los resaltados sobre el gráfico de precios.
5. En Plot, confirme que **Enable** está activado y establezca **Body opacity** lo bastante bajo para que las barras de precio sigan siendo legibles.
6. Opcionalmente, active **Target enabled** en el grupo Range Target para proyectar el máximo/mínimo de cada vela como líneas, y **Enable Summary** para imprimir los datos de volumen por vela.
7. Aplique la configuración.

[SCREENSHOT: Un gráfico de 5 minutos con Overlay Timeframe Highlight sombreando segmentos horarios alternos, líneas objetivo de máximo/mínimo proyectadas hacia la derecha desde la última vela horaria completada, y un resumen de volumen impreso sobre cada segmento | dc-es-overlay-timeframe-highlight-01.png]

## Cómo leerlo

- **Límites de segmento**: cada bloque sombreado es una vela de marco temporal superior. El precio rotando dentro de un bloque es equilibrio en el marco temporal superior; bloques consecutivos escalonándose hacia arriba o hacia abajo es tendencia.
- **Color del resaltado**: el coloreado alcista/bajista muestra de un vistazo la dirección de la barra de marco temporal superior. Con **Color based on delta** habilitado, el color refleja en cambio el delta del flujo de órdenes dentro del segmento, de modo que un segmento con precio al alza pero delta a la baja señala una participación débil (vea [[orderflow-101]]).
- **Líneas objetivo**: los máximos y mínimos proyectados de las velas de marco temporal superior actúan como niveles de referencia; el mercado revisita y reacciona con frecuencia en los extremos previos del marco temporal superior.
- **Resúmenes**: compare el volumen entre segmentos: un segmento de ruptura con volumen escaso merece más sospecha que uno con volumen intenso.

## Referencia de configuración

[SCREENSHOT: Diálogo de configuración de Overlay Timeframe Highlight mostrando todos los grupos — Chart Area, General, Color, Plot, Range Target y Summary — con Target enabled y Enable Summary activados | dc-es-overlay-timeframe-highlight-02.png]

### Área de gráfico

| Configuración | Qué hace |
|---|---|
| **Horizontal** | Renderiza los resaltados directamente sobre el gráfico de precios. |
| **Vertical** | Muestra el resaltado verticalmente, donde esté disponible. |
| **Panel selector** | Elige qué panel del gráfico muestra la superposición. |

### General

| Configuración | Qué hace |
|---|---|
| **Param type** | Define el tipo de marco temporal usado para el resaltado (por ejemplo Minute, Hour, Day). |
| **Param 1** | Especifica el valor principal del marco temporal (por ejemplo 5 para un resaltado de 5 minutos). |
| **Param 2** | Parámetro secundario opcional, usado según el tipo de marco temporal seleccionado. |

### Color

| Configuración | Qué hace |
|---|---|
| **Color based on delta** | Cambia dinámicamente el color del resaltado según el delta del flujo de órdenes en lugar de la dirección de la barra. |
| **Color mode** | Determina cómo se aplica el color: degradado según la intensidad o sólido. |
| **Std dev for coloring** | Controla la sensibilidad cuando el color se basa en la desviación estadística (modo degradado). |
| **Up bar** | Color de resaltado de las velas alcistas de marco temporal superior. |
| **Down bar** | Color de resaltado de las velas bajistas de marco temporal superior. |

### Trazado

| Configuración | Qué hace |
|---|---|
| **Enable** | Activa o desactiva la superposición de resaltado. |
| **Border width** | Controla el grosor del resaltado del borde de la vela. |
| **Body opacity** | Ajusta la transparencia del resaltado del cuerpo de la vela. |
| **Shadow opacity** | Ajusta la transparencia del resaltado de la mecha de la vela. |
| **Show background** | Rellena todo el fondo del rango de la vela de marco temporal superior. |

### Objetivo de rango

| Configuración | Qué hace |
|---|---|
| **Target enabled** | Habilita las líneas de proyección del rango máximo/mínimo desde la vela de marco temporal superior. |
| **High color / Low color** | Colores de las líneas proyectadas de máximo y mínimo. |
| **Line width** | Grosor de las líneas objetivo. |
| **Line style** | Apariencia de la línea (sólida, discontinua y similares). |
| **Extend line to left** | Extiende las líneas objetivo hacia atrás a través de las barras anteriores. |
| **Show text** | Muestra texto de etiqueta en las líneas objetivo. |
| **Text color** | Color del texto de la etiqueta. |
| **Text size** | Tamaño de fuente de la etiqueta. |

### Resumen

| Configuración | Qué hace |
|---|---|
| **Enable Summary** | Muestra información resumida del marco temporal superior en el gráfico. |
| **Volume Summary** | Muestra el volumen total de la vela resaltada. |
| **Trade Summary** | Muestra métricas relacionadas con las operaciones, donde estén disponibles. |
| **Text Color** | Color del texto del resumen. |
| **Ask Color / Bid Color** | Colores usados para los valores de ask y bid en el resumen. |
| **Summary text size** | Tamaño de fuente de los datos del resumen. |
| **Summary to view** | Cuántas velas de marco temporal superior se incluyen en la visualización del resumen. |

## Consejos y errores comunes

- **Mantenga la opacidad baja.** Un **Body opacity** alto con **Show background** habilitado puede difuminar las barras de precio; el resaltado debe enmarcar la acción, no ocultarla.
- **El segmento actual sigue formándose**: su color, rango y resumen siguen actualizándose hasta que la vela de marco temporal superior se completa.
- Limite **Summary to view** a unas pocas velas; imprimir resúmenes para cada segmento en pantalla satura el gráfico rápidamente.
- El coloreado basado en delta depende de que su fuente proporcione datos clasificados por bid/ask: vea [[different-types-of-input]] si el coloreado nunca varía.
- Use este indicador para rangos, objetivos y participación; use [[overlay-timeframe-candlestick|Overlay Timeframe Candlestick]] cuando quiera las formas reales de las velas de marco temporal superior. Muchos traders ejecutan ambos.

## Artículos relacionados

- [[overlay-timeframe-candlestick]]
- [[understanding-market-structure-sessions]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]