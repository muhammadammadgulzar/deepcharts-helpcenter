---
title: "Zig Zag"
slug: "zig-zag"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Use el indicador Zig Zag para filtrar los movimientos de precio menores, conectar máximos y mínimos de swing y mostrar niveles de retroceso de Fibonacci automáticamente."
keywords: ["zig zag", "zigzag", "máximos y mínimos de swing", "indicador de puntos pivote", "retroceso de fibonacci automático", "retroceso zig zag", "detección de swings"]
source_hash: "db4d1587790cd37c"
ai_translated: true
source_hash: "db4d1587790cd37c"
---
El indicador Zig Zag filtra los movimientos de precio menores y resalta los swings significativos dibujando líneas rectas entre los máximos y mínimos de swing. En lugar de observar cada vela, ve el mercado reducido a sus tramos principales.

Es uno de los indicadores más útiles para aprender a leer la estructura: las reversiones de tendencia, los soportes y resistencias y los patrones de precio más amplios se vuelven obvios una vez que se elimina el ruido entre pivotes. La versión de DeepCharts también puede etiquetar cada swing con niveles automáticos de retroceso de Fibonacci.

## Qué es

Zig Zag responde a la pregunta "¿qué movimientos de precio importaron realmente?" Conecta puntos pivote confirmados con líneas rectas, ignorando cada fluctuación menor que el umbral elegido. Tres modos de detección le permiten definir un swing "significativo" por precio extremo durante un período retrospectivo, por una reversión porcentual fija o por un número fijo de ticks.

Las etiquetas de retroceso opcionales miden después cada retroceso frente al tramo anterior, dibujando los clásicos niveles del 38,2%, 50%, 61,8% y 75% directamente en el gráfico.

## Cuándo usarlo

- Para identificar la estructura de la tendencia: una secuencia de máximos y mínimos crecientes (o lo contrario) es inmediatamente visible.
- Para localizar niveles de soporte y resistencia basados en swings para planificar entradas y salidas.
- Para medir retrocesos con los niveles de retroceso de Fibonacci integrados en lugar de dibujarlos a mano.
- Como ayuda de entrenamiento: reproducir una sesión con Zig Zag activado hace que la estructura del mercado sea mucho más fácil de interiorizar (consulte [[replay-data]]).

## Inicio rápido

1. Abra un gráfico y haga clic en el icono de gráfico de barras en la esquina superior izquierda para abrir el panel **Indicators**.
2. Haga clic en **Indicators** para abrir la **Indicator List** completa.
3. Busque "Zig Zag" y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración.

Empiece con la configuración predeterminada y ajuste solo la sensibilidad: en el modo **Absolute Reversal**, el valor predeterminado de **Zig Zag Abs. Rev** de 0,50% funciona como primera aproximación en la mayoría de los instrumentos. Si la línea captura demasiadas pequeñas oscilaciones, suba el umbral; si omite swings que le importan, bájelo.

[SCREENSHOT: Un gráfico de precio con el indicador Zig Zag conectando máximos y mínimos de swing con líneas de colores, con etiquetas de retroceso mostrando los niveles 38,2%/50%/61,8% en el retroceso más reciente | dc-es-zig-zag-01.png]

## Cómo leerlo

- **Tramos**: cada segmento recto es un swing significativo. Los swings alcistas y bajistas usan los colores **Color Up** y **Color Down**, de modo que la dirección se lee al instante.
- **Estructura**: compare pivotes consecutivos. Máximos y mínimos crecientes significan tendencia alcista; máximos y mínimos decrecientes, tendencia bajista; pivotes superpuestos, un rango.
- **Retrocesos**: las etiquetas de porcentaje muestran cuán profundo cortó cada retroceso en el tramo anterior. Los retrocesos poco profundos (cerca del 38,2%) sugieren una tendencia fuerte; los profundos (61,8%–75%) sugieren una tendencia debilitándose o una posible reversión.

> **Advertencia:** El último tramo de un Zig Zag es provisional por naturaleza: sigue redibujándose mientras el precio se extiende, y un pivote solo queda fijado una vez que se cumple el umbral de reversión. Nunca trate el último tramo, sin confirmar, como una señal; use Zig Zag para leer la estructura completada, no para cronometrar entradas por sí solo.

## Referencia de configuración

### Configuración principal

| Configuración | Qué hace |
|---|---|
| **Zig Zag Mode** | Cómo se identifican los swings: **Highest Lowest** (niveles de precio extremos durante un período determinado), **Absolute Reversal** (una reversión porcentual fija del precio confirma un nuevo swing) o **Tick Reversal** (un recuento fijo de ticks es el umbral de reversión). |
| **Zig Zag Abs. Rev** | Cambio porcentual mínimo requerido para registrar un nuevo swing en el modo Absolute Reversal. Predeterminado: 0,50%. Valores más altos reducen la sensibilidad; valores más bajos aumentan la capacidad de respuesta. |
| **Zig Zag Tick Rev./Highest Lowest** | Campo de doble propósito: en el modo **Tick Reversal**, el número de ticks requerido (predeterminado: 10); en el modo **Highest Lowest**, el período retrospectivo en barras. |
| **Color Up** | Color de línea para los swings alcistas. |
| **Color Down** | Color de línea para los swings bajistas. |
| **Line Width** | Grosor de las líneas de swing. Predeterminado: 2. |

### Configuración de retrocesos

| Configuración | Qué hace |
|---|---|
| **Background Color** | Fondo detrás de las etiquetas de retroceso, para legibilidad. |
| **Font Size** | Tamaño del texto de las etiquetas de retroceso. Predeterminado: 11.00. |
| **Font Color** | Color del texto de las etiquetas. |
| **Line Width** | Grosor de las líneas de los niveles de retroceso. Predeterminado: 1. |
| **Line Color** | Color de las líneas de los niveles de retroceso. |
| **Show 38.2%** | Muestra el nivel de retroceso de Fibonacci del 38,2%. |
| **Show 50%** | Muestra el nivel de retroceso del punto medio. |
| **Show 61.8%** | Muestra el nivel del 61,8% ("proporción áurea"). |
| **Show 75%** | Muestra el nivel de retroceso más profundo del 75%. |
| **Extend Right** | Proyecta los niveles de retroceso hacia adelante en las barras futuras. |

### Subgráficos

| Configuración | Qué hace |
|---|---|
| **Color** / **2° Color** | Colores primario y secundario para la línea zigzag. |
| **Subgraph Style** | Formato de visualización. Predeterminado: **Ignore**. |
| **Auto Color** | Lógica de coloreado: **+/-**, **Bars** o **Ignore**. |
| **Line Style** | Patrón visual. Predeterminado: **Solid**. |
| **Line Width** | Grosor de la línea principal. |
| **Short Name** | Etiqueta personalizada mostrada en la leyenda del gráfico. |

[SCREENSHOT: El diálogo de configuración de Zig Zag con el grupo de configuración principal visible, el menú desplegable Zig Zag Mode abierto mostrando Highest Lowest, Absolute Reversal y Tick Reversal, y el grupo de configuración de retrocesos debajo | dc-es-zig-zag-02.png]

## Consejos y errores comunes

- **Elija el modo que se ajuste a su instrumento.** La reversión porcentual (Absolute Reversal) escala entre instrumentos con precios diferentes; Tick Reversal es más natural en futuros donde usted piensa en ticks.
- **No haga backtesting de señales a partir de la línea Zig Zag.** Como el último tramo se redibuja hasta ser confirmado, los gráficos históricos se ven mucho más limpios que los reales. Úselo para la estructura, no como sistema de entrada.
- **Ajuste un umbral a la vez** y júzguelo con varias sesiones de datos, no con una sola tarde.
- Habilite **Extend Right** cuando quiera que los niveles de retroceso actúen como zonas de soporte/resistencia prospectivas en lugar de anotaciones históricas.

## Artículos relacionados

- [[swing-point]]
- [[drawing-tools]]
- [[replay-data]]
- [[different-types-of-input]]
- [[indicator-layout]]