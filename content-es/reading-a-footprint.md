---
title: "Cómo leer un footprint: ejemplos prácticos"
slug: "reading-a-footprint"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "intermediate"
time: "8 min read"
description: "Cómo leer una barra de footprint bid/ask — desequilibrios diagonales, desequilibrios apilados, subastas inacabadas y absorción — con tres ejemplos prácticos."
keywords: ["footprint", "gráfico footprint", "footprint bid ask", "desequilibrio diagonal", "desequilibrio apilado", "subasta inacabada", "impresión en cero", "absorción footprint", "cómo leer un footprint", "gráfico de flujo de órdenes"]
source_hash: "168d4f72eab8e480"
ai_translated: true
source_hash: "168d4f72eab8e480"
---
Un footprint toma la vela que usted ya conoce y la abre: en lugar de un cuerpo y dos mechas, ve cuánto se negoció en cada precio dentro de la barra, dividido según qué lado fue agresivo. Es la vista de mayor resolución de un mercado que todavía cabe en un gráfico, y recompensa la lectura estructurada mucho más que la simple contemplación.

Este artículo asume que usted sabe qué significan bid, ask, agresor y delta; si no es así, lea primero [[orderflow-101]]. Todo lo que hay aquí es concepto y convención: el indicador de DeepCharts que dibuja footprints se trata en [[deep-print]].

## La idea en un párrafo

Una vela es el marcador final de una batalla; un footprint es la jugada a jugada. Para cada precio dentro de una barra muestra dos números: cuántos contratos golpearon los vendedores contra el bid y cuántos levantaron los compradores del ask. Imagine una casa de subastas donde, en lugar de conocer solo el precio final del martillo, usted obtiene el libro completo: en cada nivel de puja, cuántos lotes soltaron los vendedores impacientes y cuántos agarraron los compradores impacientes. Leer un footprint es leer ese libro en busca de patrones: dónde un lado arrolló al otro, dónde un gran jugador pasivo absorbió en silencio todo lo que le lanzaron y dónde un movimiento se quedó sin participantes.

## Por qué les importa a los traders

- **Muestra la convicción en el precio exacto.** Que un nivel de soporte "aguante" significa poco; un nivel de soporte donde los vendedores agresivos descargaron con fuerza y el precio se negó a caer es un evento medible.
- **Expone al perdedor en tiempo real.** Los desequilibrios muestran qué lado está siendo arrollado en este momento, barra a barra, precio a precio.
- **Revela lo que la vela oculta.** Dos martillos idénticos pueden contener historias opuestas: uno absorbiendo vendedores en el mínimo, otro simplemente quedándose sin ellos. El footprint los distingue.
- **Califica sus niveles.** Si una ruptura, un retroceso o un nivel de perfil merece operarse lo responden los footprints impresos allí, no el nivel en sí.

## Cómo funciona

### Anatomía de una barra de footprint

Cada fila de precio en un footprint bid/ask muestra `volumen en el bid × volumen en el ask`: contratos negociados en el bid (venta agresiva) a la izquierda, contratos negociados en el ask (compra agresiva) a la derecha. Debajo o al lado de la barra suele encontrar los totales de la barra: volumen y delta (volumen negociado en el ask menos volumen negociado en el bid). La intensidad del color suele escalar con el tamaño, de modo que las filas pesadas destacan de un vistazo.

Explore una barra en vivo abajo: pase el cursor sobre cualquier celda bid × ask para descodificarla y observe la lectura del delta por barra mientras avanza.

[WIDGET: footprint-lab]

### Desequilibrios diagonales

Aquí está la parte en la que se equivocan los principiantes: el volumen del bid y del ask en el *mismo* precio no son directamente comparables, porque nunca compitieron entre sí. Cuando se está levantando el ask en 5.300,25, el bid que se está golpeando es 5.300,00: un tick más abajo. Por eso los desequilibrios del footprint se calculan **en diagonal**: el volumen del ask en un precio contra el volumen del bid un tick por debajo. Cuando el lado ganador supera al otro por una proporción configurada (300%, es decir 3:1, es una convención habitual; el umbral es configurable en el indicador), la celda se marca como un desequilibrio: compradores arrollando a vendedores en esa diagonal, o lo contrario.

Un desequilibrio aislado es ruido. Los **desequilibrios apilados**, habitualmente tres o más en precios consecutivos, marcan una zona donde un lado fue arrollado, y esas zonas suelen actuar como soporte (pilas del lado comprador) o resistencia (pilas del lado vendedor) en una revisita.

### Finalización de la subasta en los extremos

La parte superior e inferior de una barra o swing llevan su propia señal. Por convención, un máximo *terminado* imprime `0 × n` en lo más alto: nadie quedaba pujando en el extremo, la compra se agotó de forma natural. Si el precio extremo muestra en cambio volumen en **ambos** lados (sin cero), los compradores seguían activos en el máximo cuando el precio se alejó: una **subasta inacabada**. La expectativa común es que el mercado revisite esos niveles para terminar el asunto pendiente: un imán, no una certeza. La misma lógica se refleja en los mínimos con la columna del ask.

### Esfuerzo frente a resultado

La pregunta más importante del footprint no es "¿quién fue agresivo?" sino "¿qué logró su agresión?". Un volumen pesado del lado del ask que no consigue elevar el precio significa que alguien grande está vendiendo pasivamente contra los compradores: **absorción** (vea [[understanding-icebergs-absorption]]). Un volumen que se encoge mientras el precio presiona hacia un nuevo extremo es **agotamiento**. Ambas son lecturas de esfuerzo frente a resultado, y ambas importan más en ubicaciones significativas — bordes del área de valor, niveles de la sesión anterior, VWAP — que en medio de la nada.

### Las matemáticas (opcional)

Para un desequilibrio diagonal con umbral *r* (p. ej. 3):

```
buy imbalance at price P:  ask_volume(P) ≥ r × bid_volume(P − 1 tick)
sell imbalance at price P: bid_volume(P) ≥ r × ask_volume(P + 1 tick)
```

Delta de la barra = Σ volumen en el ask − Σ volumen en el bid en todos los precios de la barra. Los umbrales exactos, los filtros de volumen mínimo y las definiciones de pila son configuración del indicador, no leyes: vea [[deep-print]].

## Véalo en DeepCharts

- [[deep-print|Deep Print]]: el indicador footprint de DeepCharts.
- [[quick-chart-templates]]: el preajuste **OF-VP** (cada vela como su propio perfil de volumen) y el preajuste **OF-B/A** (columnas bid/ask con impresiones de desequilibrio en negrita e intensidad de color) cargan un footprint listo en un clic.
- [[imbalance-tracker]] e [[imbalance-rejector]]: detección de desequilibrios como estudios independientes.
- [[unfinished-auction|Subasta inacabada]]: marca automáticamente los extremos con subasta inacabada.
- [[ratio-highlight]]: resalta ratios bid/ask destacables.
- [[deep-delta]] y [[delta-cumulative-candlestick]]: el contexto de delta contra el que leer los footprints.
- [[adv-time-and-sales|Time And Sales avanzado]]: la cinta en bruto a partir de la cual se agrega el footprint.

## Ejemplo práctico

Tres lecturas breves, todas con cifras ilustrativas del ES.

### Ejemplo 1: Ruptura con desequilibrios apilados

El precio rompe un máximo de la mañana en 5.310,00. La barra de ruptura imprime desequilibrios diagonales del lado comprador en cuatro precios consecutivos desde 5.310,25 hasta 5.311,00, delta +1.800, y cierra en su máximo. Lectura: los compradores agresivos arrollaron a los vendedores a través del nivel y no fueron absorbidos — compra de iniciativa con continuación. La zona apilada en 5.310,25–5.311,00 es ahora la zona de retroceso de interés; mantenerse por encima de ella conserva sana la ruptura.

[SCREENSHOT: Barras de footprint alrededor de una ruptura con cuatro desequilibrios de compra apilados resaltados en celdas diagonales consecutivas, lectura de delta positivo bajo la barra, y la zona apilada marcada como soporte futuro | dc-es-reading-a-footprint-01.png]

### Ejemplo 2: Absorción en el máximo

Más tarde, el precio empuja hasta 5.318,00. La barra imprime su volumen del lado del ask más pesado del día en 5.317,75–5.318,00 — compradores levantando con fuerza — y sin embargo un delta de +2.400 produce un cierre en la *mitad* de la barra, y la barra siguiente no consigue negociar por encima de 5.318,00. Lectura: máximo esfuerzo comprador, ningún resultado. Un vendedor pasivo absorbió a los compradores en los máximos. Cuando la barra siguiente cambia a desequilibrios del lado vendedor, la absorción se confirma y comienza la historia de la reversión: la misma secuencia descrita en [[orderflow-101]], ahora visible celda a celda.

### Ejemplo 3: Subasta inacabada en el mínimo

Durante la liquidación de la tarde, el mínimo de swing en 5.296,50 imprime `41 × 17`: volumen tanto en el bid como en el ask en el precio extremo, sin impresión en cero. Lectura: la subasta en el mínimo no terminó; los compradores seguían activos cuando el precio rebotó. Muchos traders de footprint mantendrán 5.296,50 en el gráfico como candidato a revisita y tratarán cualquier aproximación posterior como un evento planificado en lugar de una sorpresa. Si el mínimo hubiera impreso `0 × 22` en su lugar, la venta terminó de forma natural y el nivel no arrastra asuntos pendientes.

[SCREENSHOT: Un footprint de mínimo de swing con la fila del precio extremo mostrando volumen tanto en el bid como en el ask, anotado "subasta inacabada — sin impresión en cero", más una revisita posterior del mismo precio marcada con una flecha | dc-es-reading-a-footprint-02.png]

## Malinterpretaciones comunes

- **Comparar bid y ask en el mismo precio.** Los desequilibrios son diagonales. La comparación en la misma fila invierte silenciosamente la mitad de sus lecturas.
- **Operar cada desequilibrio.** Los desequilibrios se imprimen constantemente. Significan algo en ubicaciones que importan — niveles de sesión, bordes del área de valor, VWAP — y poco en medio de una rotación.
- **"Número grande = señal grande."** El volumen pesado es solo la mitad de la frase; la otra mitad es lo que hizo el precio a continuación. Esfuerzo sin resultado es una pista de *reversión*, no de continuación.
- **Leer footprints en la resolución equivocada.** Los footprints agregan por barra, de modo que el tipo y el tamaño de la barra cambian lo que usted ve. Un patrón en un footprint de 5 minutos puede no existir en uno de 30 minutos.
- **Ignorar la calidad de los datos.** La clasificación bid/ask depende de la granularidad de su fuente de datos: vea [[orderflow-101]] y [[compatibility-guide]]. Lea patrones, no cifras precisas.

## Profundice

Los footprints son el microscopio; la teoría de subastas es el mapa. [[understanding-auction-theory]] sitúa el desequilibrio, la absorción y los asuntos pendientes dentro del marco de equilibrio/desequilibrio, y [[understanding-icebergs-absorption]] cubre cómo los grandes jugadores pasivos ocultan las órdenes que usted está leyendo. Cuando esté listo para configurar la herramienta en sí, empiece por [[deep-print]] o cargue los preajustes OF desde [[quick-chart-templates]]. Los términos desconocidos están recopilados en el [[glossary]].

## Artículos relacionados

- [[orderflow-101]]
- [[deep-print]]
- [[quick-chart-templates]]
- [[understanding-auction-theory]]
- [[understanding-icebergs-absorption]]
- [[glossary]]