---
title: "Swing de volumen (Volume Swing)"
slug: "volume-swing"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "Análisis de swings basado en ZigZag con etiquetas de volumen y delta por swing, marcadores automáticos No Effort / No Result, un detector de tendencia y líneas de nivel."
keywords: ["volume swing", "volumen de swing", "volumen zigzag", "NOE", "NOR", "sin esfuerzo", "sin resultado", "delta de swing", "esfuerzo vs resultado", "detector de tendencia"]
source_hash: "9b5b917ecaff71c4"
ai_translated: true
source_hash: "9b5b917ecaff71c4"
---
Volume Swing combina la estructura del mercado con el análisis de volumen: detecta los swings de precio con un motor ZigZag y luego etiqueta cada swing con el volumen, el delta y las métricas relacionadas que lo construyeron. Además, imprime marcadores automáticos de esfuerzo frente a resultado (NOE y NOR), puede colorear el fondo según la tendencia detectada y puede dibujar líneas de nivel con umbral.

La idea es el esfuerzo frente a resultado de Wyckoff hecho mecánico: cada tramo del mercado se mide, para que usted pueda ver qué swings tuvieron participación real detrás y cuáles avanzaron sin combustible.

## Qué es

Volume Swing es una herramienta integral de volumen y estructura. El ZigZag identifica los swings (por reversión de precio absoluta o por reversión en ticks), y hasta cuatro etiquetas configurables por swing muestran métricas como volumen, delta de volumen, delta de operaciones, volumen por tick y extensión. Dos marcadores se calculan automáticamente: **NOE** (No Effort, sin esfuerzo: un movimiento que carece del volumen que lo sustente) y **NOR** (No Result, sin resultado: volumen intenso que no logró mover el precio). Un detector de tendencia añade bandas de fondo coloreadas con la sensibilidad que usted elija.

[SCREENSHOT: Ventana de gráfico con Volume Swing aplicado — líneas ZigZag conectando máximos y mínimos de swing, etiquetas por swing mostrando valores de volumen y delta, un swing marcado como NOE y otro como NOR, con las bandas de fondo de tendencia visibles | dc-es-volume-swing-01.png]

## Cuándo usarlo

- Quiere cada swing cuantificado: cuánto volumen y delta impulsaron este tramo en comparación con el anterior.
- Opera esfuerzo frente a resultado: los tramos ascendentes con volumen decreciente (NOE) o el volumen intenso sin progreso de precio (NOR) son advertencias estructurales.
- Quiere una estructura de swings objetiva: el ZigZag sustituye el trazado subjetivo de tramos por reglas de reversión fijas.
- Quiere un filtro de tendencia: el detector de tendencia integrado sombrea el fondo para que las señales contra tendencia sean evidentes.

## Inicio rápido

1. Abra la **Indicator List** en su gráfico.
2. Busque **Volume Swing** y haga clic en **+** para añadirlo.
3. Haga clic en el icono de **Settings** junto al indicador.
4. En **Data Settings**, mantenga **Input Data** en **Volume** (vea [[different-types-of-input]]).
5. En **ZigZag Settings**, elija un **ZigZag Mode**: **Tick Reversal** con un recuento de ticks adecuado a su instrumento es un comienzo práctico para intradía; **Absolute Reversal** usa en su lugar un valor fijo de reversión de precio.
6. En **Label Settings**, habilite la **First Label** con **Volume** y la **Second Label** con **Delta volume**: dos métricas por swing son más que suficientes mientras aprende.
7. Opcionalmente habilite el **Trend Detector** en sensibilidad **Medium**, y luego aplique.

[SCREENSHOT: Diálogo de configuración de Volume Swing abierto en la sección ZigZag Settings — menú desplegable ZigZag Mode mostrando Absolute Reversal y Tick Reversal, con los campos Zig Zag Rev. & Absolute y Zig Zag Tick Rev. más Color Up/Down y Line Width debajo | dc-es-volume-swing-02.png]

## Cómo leerlo

- **Compare swings consecutivos en la misma dirección.** Máximos más altos con volumen de swing decreciente significan que el avance está perdiendo participación. Tramos ascendentes que llevan cada uno más volumen que el anterior son una tendencia sana.
- **NOE (No Effort)** marca un swing que carece del volumen que sustente su movimiento: un empuje que ha perdido impulso. Espere una continuación más superficial o una rotación de vuelta.
- **NOR (No Result)** marca un swing con volumen significativo pero poco progreso de precio: el esfuerzo se gastó contra una resistencia o un soporte fuertes. Con frecuencia marcan zonas de absorción y candidatos a reversión (vea [[understanding-icebergs-absorption]]).
- **Las etiquetas de delta desglosan el esfuerzo por lado.** Un swing ascendente con delta de volumen negativo subió mientras los vendedores eran más agresivos: lo impulsó la compra pasiva, un carácter muy distinto al de una subida de compradores agresivos.
- **Las bandas de tendencia establecen el contexto.** Tome las lecturas de NOE/NOR con la tendencia, no en su contra, hasta que tenga evidencia de que la propia tendencia está girando.

> **Nota:** Estas señales tienen más peso en movimientos medianos a grandes fuera de condiciones de alta volatilidad. Con poca liquidez el mercado produce lecturas menos significativas y poco fiables.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Data Settings

| Ajuste | Qué hace |
|---|---|
| **Input Data** | Base del análisis: **Volume** (volumen total negociado), **Order** (número de órdenes) o **Aggregated volume** (volúmenes de órdenes agregados). Vea [[different-types-of-input]]. |
| **Filter Min** | Valor mínimo de filtro para los datos seleccionados: las entradas por debajo del umbral se excluyen. |
| **Filter Max** | Valor máximo de filtro: los datos que superan el límite se excluyen. |

### ZigZag Settings

| Ajuste | Qué hace |
|---|---|
| **ZigZag Mode** | **Absolute Reversal** usa un valor fijo de reversión de precio para determinar un swing; **Tick Reversal** define la reversión en ticks, permitiendo una cantidad mínima de movimiento en ticks. |
| **Zig Zag Rev. & Absolute** | Cambio mínimo requerido para que el precio defina un nuevo swing en modo Absolute Reversal. |
| **Zig Zag Tick Rev.** | Número de ticks requerido para una reversión en modo Tick Reversal. |
| **Color Up / Color Down** | Colores que diferencian los swings ascendentes de los descendentes. |
| **Line Width** | Grosor del trazado ZigZag. |

### Label Settings

| Ajuste | Qué hace |
|---|---|
| **Text Size** | Tamaño de las etiquetas de swing. |
| **Text Offset** | Posiciona las etiquetas respecto al punto de swing. |
| **Max Bars to View** | Limita hasta qué distancia hacia atrás se dibujan las etiquetas. |
| **First / Second / Third / Fourth Label** | Cada ranura de etiqueta tiene un interruptor **Enabled**, una métrica mostrada (**Volume**, **Delta volume**, **Delta trade**, **Vol per tick**, **Extension**) y selecciones de **Positive/Negative Color**. |

### Marker Labels

Se calculan automáticamente: no hay umbrales que configurar.

| Marcador | Significado |
|---|---|
| **NOE (No Effort)** | Falta de volumen que sustente el movimiento o el empuje: el movimiento ha perdido impulso. |
| **NOR (No Result)** | Falta de resultado en el movimiento del precio a pesar de un volumen significativo: sugiere una resistencia o un soporte fuertes. |

### Plot Settings

| Ajuste | Qué hace |
|---|---|
| **Display Mode** | **Lines only**, **Bars histogram** o **Lines and Bars** combinados. |
| **Histogram Value** | Métrica que representa el histograma: **Delta Volume**, **Delta trade**, **Vol per tick** o **Extension**. |
| **All-in-one** | Combina varias métricas en un solo trazado: **None**, **Vol delta trade**, **Vol delta** o **Volume**. |
| **Show Sign** | Cómo se firma el signo de los valores: **Positive**, **Negative** o **Based Delta**. |
| **Color Mode** | **Fixed**, **Fading colour** o **Delta fading**. |
| **Std. Dev. for Coloring** | Sensibilidad del coloreado a los cambios en los datos volumétricos. |

### All-in-one Color Settings

| Ajuste | Qué hace |
|---|---|
| **Volume Line** | Color de la línea de volumen combinada. |
| **Positive / Negative Delta Vol.** | Colores para el delta de volumen positivo y negativo. |
| **Positive / Negative Delta Trade** | Colores para el delta de operaciones positivo y negativo. |

### High/Low Line Settings

| Ajuste | Qué hace |
|---|---|
| **Enable** | Muestra u oculta las líneas de máximo/mínimo de swing. |
| **Show End Retracement** | Muestra la marca de fin de retroceso. |
| **Line Width / Color / Style** | Apariencia de las líneas de máximo/mínimo. |
| **End Retrace Color** | Color usado para la marca de fin de retroceso. |

### Trend Detector

| Ajuste | Qué hace |
|---|---|
| **Enable Trend** | Muestra bandas de fondo coloreadas para las tendencias detectadas. |
| **Mode** | Sensibilidad: **Weak** (incluye tendencias menores), **Medium** (intermedia) o **Strong** (solo tendencias mayores). |
| **Trend Up / Trend Down Color** | Colores de banda por dirección. |
| **Background Opacity** | Visibilidad de las bandas. |

### Level Settings

| Ajuste | Qué hace |
|---|---|
| **Level Enable** | Muestra líneas de referencia horizontales. |
| **Level Value** | Umbral numérico del nivel. |
| **Line Width / Color / Style** | Apariencia — estilos: **Solid**, **Dash**, **Dot**, **Dash Dot**, **Dash Dot Dot**. |

## Consejos y errores comunes

- **Ajuste el ZigZag antes de confiar en cualquier etiqueta.** Un valor de reversión demasiado pequeño convierte el ruido en "swings" e inunda el gráfico de etiquetas NOE/NOR sin sentido; uno demasiado grande oculta la estructura que usted opera.
- **Dos etiquetas superan a cuatro.** Empiece con Volume y Delta volume; añada Vol per tick o Extension solo cuando los use activamente.
- **Respete la advertencia de liquidez.** Las sesiones nocturnas y festivas producen señales de esfuerzo/resultado poco fiables: la base de volumen es demasiado escasa.
- **El último swing se redibuja por diseño.** Las herramientas basadas en ZigZag finalizan un swing solo cuando se cumple la condición de reversión, así que trate la etiqueta del tramo actual como provisional.
- **NOE y NOR son contexto, no entradas.** Combínelos con las bandas de tendencia y un argumento de ubicación (soporte, resistencia, borde del área de valor) antes de actuar.

## Artículos relacionados

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[swing-point]]
- [[zig-zag]]
- [[volume]]