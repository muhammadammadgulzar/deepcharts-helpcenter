---
title: "Deep Print (Footprint)"
slug: "deep-print"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "10 min read"
description: "Referencia completa de Deep Print, el indicador footprint de DeepCharts: división bid/ask, delta, desequilibrios, POC, área de valor, clústeres y diseños multicolumna."
keywords: ["footprint", "deep print", "footprint bid ask", "gráfico footprint", "velas de flujo de órdenes", "footprint de desequilibrio", "footprint de delta", "footprint multicolumna"]
source_hash: "5f231fe4338e78b0"
ai_translated: true
source_hash: "5f231fe4338e78b0"
---
Deep Print es la herramienta central de análisis volumétrico en DeepCharts: un indicador footprint (también conocido por el nombre registrado Footprint®). Fusiona precio, volumen y flujo de órdenes en velas únicas, mostrando las órdenes ejecutadas en cada tick de precio dentro de cada barra en lugar de solo la apertura, el máximo, el mínimo y el cierre de la barra.

Los traders lo utilizan para detectar aceleración de compradores y vendedores, absorción, agotamiento y dominancia bid/ask en cada nivel de precio. Es totalmente personalizable, desde lo que cuenta hasta cómo se colorea cada celda.

## Qué es

Una vela normal le dice adónde fue el precio. Deep Print le dice qué se negoció para que llegara allí: en cada tick de precio dentro de la vela ve el volumen ejecutado — total, dividido por bid y ask, o como delta (la diferencia entre compra y venta agresivas). Sobre esa visualización base puede resaltar desequilibrios, el punto de control de la vela, el área de valor, clústeres de volumen, single prints, niveles de ratio extremo y retrocesos.

## Cuándo usarlo

- Opera flujo de órdenes y necesita ver quién está agrediendo en cada precio, no solo dónde cerró el precio.
- Quiere identificar absorción (volumen pesado que no logra mover el precio) y agotamiento en los extremos de los swings.
- Quiere niveles de referencia por vela: POC de volumen, POC de delta y área de valor.
- Quiere monitorizar varias lecturas a la vez: Deep Print admite hasta 4 columnas contiguas por vela (por ejemplo Bid×Ask, Delta y Volumen simultáneamente).

## Inicio rápido

1. Abra un gráfico y añada **Deep Print** desde el botón **Indicators** del gráfico.
2. Abra la configuración del indicador.
3. En **General settings**, establezca **Type** en la visualización que desee (empiece con **Ask/Bid Split** o **Delta + Total Volume**) y **Mode** en **Profile**.
4. Aplique: cada vela muestra ahora su volumen ejecutado por tick.

### El Deep Print Studio

El estudio a continuación es el **diálogo completo de Deep Print, en vivo**: cada grupo de configuración de la tabla de referencia está conectado a velas en vivo. Cambie **Type** entre las cuatro visualizaciones y alterne el modo **Profile/Box**. Filtre la cinta con **Min/Max Filter** y cambie **Input Type** a Aggregate Volume o Num Trades para ver cómo se recalcula cada número. **Haga zoom en la escala de precios** (rueda del ratón sobre el gráfico, o − / +) para sentir cómo el agrupamiento de ticks Automatic fusiona y divide filas; luego establezca el agrupamiento en Manual y vuelva a hacer zoom: las filas se congelan. Explore los cuatro **Color Modes** de fondo y los cinco **Color Calculations**, los single prints, los ratios de extremos de barra, los clústeres de volumen y las barras de retroceso. Pulse **▶ Replay tape** para reproducir las operaciones una a una: las celdas crecen, los desequilibrios se encienden y se apagan, el POC migra y las alertas aparecen (y opcionalmente suenan) cuando una impresión cruza su umbral. Active **◇ 3D tiles** y pase el cursor sobre una vela concreta. Cuando el gráfico se parezca al suyo, pulse **⬇ Download my settings**: el archivo lista cada sección del diálogo con sus valores, listo para replicarse en DeepCharts.

[WIDGET: deep-print-studio]

### Configuración inicial recomendada

Son sugerencias, no valores predeterminados: ajústelas a su mercado y estilo:

| Área | Inicio sugerido |
|---|---|
| **Type** | **Delta + Total Volume**: lectura de delta más actividad total en una sola vista |
| **Mode** | **Profile**: las celdas de estilo histograma son más fáciles de escanear que las cajas al principio |
| **Input Type** | **Volume**; cambie a **Aggregate Volume** cuando busque órdenes institucionales divididas (consulte [[different-types-of-input]]) |
| **Agrupamiento de ticks** | **Automatic** para empezar; establezca **Auto Grouping** en **Manual** con **Manual Ticks** = 1 si quiere filas que nunca cambien al hacer zoom |
| **POC** | Habilite el Volume POC para que destaque el precio de mayor volumen de cada vela |
| **Value Area** | Habilítela con **% Value Area** = 70% |
| **Text Format** | **K** en instrumentos de alto volumen para que 1.000 se muestre como 1K y las celdas sigan siendo legibles |

## Cómo leerlo

- **Celdas**: cada fila dentro de una vela es un tick de precio (o grupo de ticks) con su volumen ejecutado. En el modo Ask/Bid Split, el lado bid registra la venta agresiva y el lado ask la compra agresiva.
- **Delta**: volumen ask menos volumen bid en un nivel. Un delta positivo significa que los compradores agresivos dominaron ahí; uno negativo, que lo hicieron los vendedores agresivos.
- **Volume POC**: el precio de mayor volumen de la vela, donde se hizo más negocio. El **Delta POC** marca el nivel con el mayor delta neto.
- **Área de valor**: la banda de precios que contiene el porcentaje configurado (por ejemplo 70%) del volumen de la vela.
- **Desequilibrios**: cuando la diferencia de volumen entre bid y ask en un nivel supera su umbral, la celda se resalta: un lado superó claramente al otro.
- **Absorción y agotamiento**: volumen pesado en un nivel sin progreso del precio sugiere órdenes pasivas absorbiendo la agresión; volumen decreciente hacia un extremo sugiere que el movimiento se está quedando sin participantes. Para ejemplos trabajados sobre gráficos, consulte [[reading-a-footprint]].

[SCREENSHOT: Vista ampliada de dos o tres velas de Deep Print con el borde del Volume POC, el resaltado del área de valor y un desequilibrio apilado anotado | dc-es-deep-print-01.png]

## Referencia de configuración

Agrupada exactamente como en el diálogo del indicador.

### Configuración general (Tipología)

| Configuración | Qué hace |
|---|---|
| **Type** | Base de la visualización: **Volume** (volumen total operado), **Ask/Bid Split** (volumen de compra frente a venta comparados), **Delta** (diferencia entre ask y bid), **Delta + Total Volume** (vista combinada) |
| **Mode** | **Profile** (representación de estilo histograma) o **Box** (valores compactos en cajas) |

### Configuración de datos

| Configuración | Qué hace |
|---|---|
| **Input Type** | Fuente de datos: **Volume** (volumen total operado por precio), **Aggregate Volume** (operaciones agregadas), **Order** (volumen del libro de órdenes), **Num Trades** (número de ejecuciones por precio). Consulte [[different-types-of-input]] para saber cuándo conviene cada uno |
| **Min/Max Filter** | Excluye valores fuera del rango definido: reduce el ruido de operaciones muy pequeñas (o muy grandes que distorsionan) |

### Agrupamiento de ticks

| Configuración | Qué hace |
|---|---|
| **Auto Grouping** | **Automatic** (la plataforma optimiza el agrupamiento) o **Manual** (usted lo define) |
| **Auto Group Factor** | Controla el nivel de agregación de ticks cuando se usa Automatic |
| **Manual Ticks** | La cantidad de agrupamiento cuando se usa Manual |
| **Group Mode** | **Fixed** (agrupamiento constante) o **Based on Open/Close** (agrupamiento dinámico según el comportamiento de la vela) |

> **Nota:** El agrupamiento de ticks es una configuración compartida que aparece en muchos indicadores de DeepCharts (Deep Print, Deep Profile y otras herramientas basadas en perfiles) con los mismos campos. Con **Automatic**, los niveles de las filas pueden desplazarse al hacer zoom en la escala de precios; para congelarlos, establezca **Auto Grouping** en **Manual** y **Manual Ticks** en 1.

### Configuración de trazado (Bar Style)

| Configuración | Qué hace |
|---|---|
| **Bar Marker Width** | Grosor del marcador de la vela |
| **Outside Bar Style** | Estilo de barra (con sombras) o solo cuerpo |
| **Marker Alignment** | Posiciona el marcador a la derecha o al centro |
| **Outer Edge Mode** | Dibuja un borde que delimita el cuerpo de la vela |

### Configuración de fondo

| Configuración | Qué hace |
|---|---|
| **Coloration** | Personaliza la visualización de volumen, delta y desequilibrios del mercado |
| **Border Width** | Grosor del borde del perfil de volumen, en píxeles |
| **Opacity** | Nivel de transparencia del fondo |

### Configuración de texto

| Configuración | Qué hace |
|---|---|
| **Font Size** | Tamaño del texto dentro de las celdas del footprint |
| **Text Format** | **Automatic** (adaptado al contexto), **Normal** (números completos, sin abreviación), **K** (miles: 1K = 1.000) |
| **Coloration** | Personaliza cómo se representan los números para facilitar su interpretación |
| **Dynamic Text Size** | Escala automáticamente el texto según las cantidades de volumen/delta/desequilibrio: las impresiones grandes reciben números grandes |
| **Increase Dynamic Text Size** | Refuerza el efecto de escalado dinámico |
| **Show Texts-by-Zeros** | Muestra las celdas con valor cero en lugar de dejarlas en blanco |

### Coloración de fondo

| Configuración | Qué hace |
|---|---|
| **Color Mode** | **None**, **Fixed** (colores predefinidos, sin gradientes), **Fading** (gradiente por intensidad), **More Colors** (múltiples colores definidos por el usuario: requiere **Range Definition** = USER) |
| **Color Calculation** | Qué determina el color: **Volume**, **Delta**, **Imbalance**, **Dominant Volume** (el lado mayor por precio), **Dominant Volume Delta** |
| **Min. Vol. Diff. For Imbalance** | Diferencia mínima entre bid y ask para que un nivel cuente como desequilibrado |
| **Include Zero on Imbalance** | Incluye en el análisis de desequilibrio los niveles sin volumen en un lado |
| **Color Only Dominant Side** | Colorea solo el lado de volumen dominante de cada nivel |
| **Background Inferior Side** | Color de fondo del lado no dominante |

### Colores

| Configuración | Qué hace |
|---|---|
| **Fixed-Volume Color** | Color único para el volumen total |
| **Fixed-Bid Color** | Color del volumen bid (venta) |
| **Fixed-Ask Color** | Color del volumen ask (compra) |

### Rango

| Configuración | Qué hace |
|---|---|
| **Range Definition** | **Automatic** (definido por la plataforma) o USER (rangos personalizados) |
| **Range (Show Settings)** | Abre la configuración de rangos de valores personalizados |

### POC

| Configuración | Qué hace |
|---|---|
| **Enable** (Volume POC) | Muestra el precio de mayor volumen de la vela |
| **Border Color / Border Width** (Volume POC) | Color de resaltado y grosor del borde del Volume POC |
| **Enable** (Delta POC) | Muestra el nivel con el mayor delta neto |
| **Minimum Delta** (Delta POC) | Valor mínimo de delta requerido para que se muestre el Delta POC |
| **Ask Border Color / Bid Border Color** (Delta POC) | Colores de borde de los POC de delta del lado ask y del lado bid |
| **Border Width** (Delta POC) | Grosor del borde del Delta POC |

### Área de valor

| Configuración | Qué hace |
|---|---|
| **Enable** | Activa o desactiva la visualización del área de valor |
| **% Value Area** | Porcentaje del volumen total usado para el cálculo (p. ej. 70%) |
| **Highlight** | Resalta visualmente el área de valor sobre las velas |
| **Outside Color** | Color de la zona fuera del área de valor |
| **Show Line / Line Color / Line Width** | Línea delimitadora del área de valor y su estilo |

### Alertas

| Configuración | Qué hace |
|---|---|
| **Enable Sound / Alert Sound** | Interruptor de notificación sonora y selección del sonido |
| **Enable Message / Alert Message** | Interruptor del mensaje emergente y el texto personalizado mostrado |
| **Alert Minimum Volume** | Umbral mínimo de volumen antes de que se dispare una alerta |

### Single Print

| Configuración | Qué hace |
|---|---|
| **Enable** | Resalta los niveles de precio impresos por una sola orden que cumple los criterios |
| **Single Print Min Value** | Volumen mínimo para que un single print sea relevante |
| **Enable Only On High Or Low** | Restringe el resaltado a los precios extremos de la vela |
| **Border Width / Border Color** | Estilo del resaltado de single print |

### Ratio

| Configuración | Qué hace |
|---|---|
| **Enabled** | Muestra el ratio bid/ask en los extremos de la barra |
| **Tick Offset** | Posición del texto del ratio respecto al máximo/mínimo de la barra |
| **Text Color / Text Size** | Estilo del texto del ratio |
| **Min Ratio / Maximum Ratio** | Valor mínimo para la visualización y límite de valor máximo |

### Vol Cluster

| Configuración | Qué hace |
|---|---|
| **Enable** | Resalta los clústeres de volumen |
| **Min. Volume** | Volumen mínimo para que un clúster cuente |
| **Increase Volume Based on Tick Grouped** | Suma el volumen entre ticks agrupados vecinos |
| **Line Width / Back Color / Opacity** | Grosor del borde del clúster, color de fondo y su opacidad |

### Pull Back

| Configuración | Qué hace |
|---|---|
| **Enable** | Resalta las barras de retroceso: una ayuda para el scalping |
| **Pullback Min Source Bar Ticks** | Ticks mínimos en la barra de origen |
| **Pullback Min Pullback Ticks** | Distancia mínima de retroceso en ticks |
| **Bar Color** | Color de resaltado de las barras de retroceso |

### Diseños multicolumna

Deep Print admite hasta 4 columnas simultáneas por vela, cada una mostrando una lectura diferente, una junto a otra: por ejemplo Bid×Ask, Delta y Volumen a la vez. Para configurarlo: añada varios indicadores Deep Print al gráfico, abra la configuración de cada uno, vaya a **Sizing → Multi Column**, establezca la cantidad de columnas, asigne a cada indicador una posición única y personalice cada uno de forma independiente.

[SCREENSHOT: Diálogo de configuración de Deep Print abierto en la sección Sizing con Multi Column configurado, junto a un gráfico que muestra una vela representada como tres columnas contiguas (Bid×Ask, Delta, Volumen) | dc-es-deep-print-02.png]

## Consejos y errores comunes

- **¿Números ilegibles o celdas demasiado pequeñas?** Aumente **Font Size** o habilite **Dynamic Text Size**; establezca **Text Format** en **K** para compactar los números grandes; ensanche **Bar Marker Width**; o utilice un agrupamiento de ticks más grueso para que haya menos celdas y más altas.
- **¿Demasiados resaltados de desequilibrio?** Aumente **Min. Vol. Diff. For Imbalance**, aplique un **Min Filter** en los datos de entrada o habilite **Color Only Dominant Side**. Un agrupamiento de ticks muy fino también multiplica el ruido.
- **¿Sus filas no coinciden con el gráfico de otro trader?** Compare **Input Type**, el agrupamiento de ticks (Automatic frente a Manual, factor de agrupamiento) y **Group Mode**: cualquiera de ellos cambia las celdas.
- **¿Quiere los números bid×ask y el delta al mismo tiempo?** Establezca **Type** en **Delta + Total Volume**, o construya un diseño multicolumna.
- **¿POC o área de valor no visibles?** Cada uno tiene su propio interruptor **Enable**; el Delta POC requiere además que se cumpla su umbral **Minimum Delta**.
- **¿La alerta no se dispara?** Compruebe primero **Alert Minimum Volume**, y tenga en cuenta que los interruptores de sonido y mensaje son independientes.

## Artículos relacionados

- [[reading-a-footprint]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[deep-profile]]
- [[deep-delta]]
- [[indicator-layout]]