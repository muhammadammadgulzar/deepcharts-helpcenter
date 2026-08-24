---
title: "Flujo de órdenes 101: bid, ask, agresor y delta"
slug: "orderflow-101"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "beginner"
time: "6 min read"
description: "Los cuatro pilares del trading de flujo de órdenes (bid, ask, agresor y delta) explicados desde cero, con un ejemplo práctico de futuros."
keywords: ["flujo de órdenes", "fundamentos del flujo de órdenes", "qué es el delta", "bid vs ask", "agresor", "orden a mercado vs orden de límite", "delta acumulado", "divergencia de delta", "operado en el ask", "operado en el bid"]
source_hash: "1396b075f88fd1ac"
ai_translated: true
source_hash: "1396b075f88fd1ac"
---
Una vela le dice qué hizo el precio. El flujo de órdenes le dice quién lo hizo suceder y con cuánta fuerza empujó. Una vez que sepa leer el bid, el ask, el agresor y el delta, cada herramienta avanzada de DeepCharts (los footprints, los gráficos de delta, el DOM, la cinta) se convierte en una variación de las mismas cuatro ideas.

Este artículo es la base del resto de la sección de Conceptos. Léalo antes de [[reading-a-footprint]] o [[understanding-auction-theory]].

## La idea en un párrafo

Cada operación en un mercado de futuros es un emparejamiento entre alguien dispuesto a esperar y alguien que no lo está. Los traders pacientes colocan órdenes de límite ("compraré a este precio o mejor") y esas órdenes permanecen en el libro en el bid y el ask. Los traders impacientes envían órdenes a mercado que golpean lo que esté descansando allí. El lado impaciente se llama el agresor, y es quien decide dónde se imprime la operación: una compra a mercado se ejecuta contra el ask, una venta a mercado se ejecuta contra el bid. Piense en un mercado de pescado: los dueños de los puestos publican sus precios (órdenes de límite); un cliente que paga el precio pedido sin regatear es un comprador agresivo; un pescador que remata su captura al precio que los compradores estén dispuestos a pagar es un vendedor agresivo. Cuente las compras agresivas, reste las ventas agresivas, y tendrá el delta: un marcador continuo de qué lado tiene más urgencia.

## Por qué les importa a los traders

- **Separa la convicción de la deriva.** El precio puede subir con fuerte compra agresiva o sobre el vacío. El delta muestra cuál de las dos está viendo.
- **Expone la absorción.** Cuando las órdenes agresivas entran a raudales pero el precio no se mueve, alguien grande está tomando pasivamente el otro lado: a menudo la señal visible más temprana de una reversión (vea [[understanding-icebergs-absorption]]).
- **Confirma o desmiente rupturas.** Una ruptura con un delta fuerte en la misma dirección tiene combustible; una sin él es sospechosa.
- **Afina el timing.** Los patrones de gráfico le dicen dónde puede suceder algo; el flujo de órdenes le dice si realmente está sucediendo, operación por operación.

## Cómo funciona

### Bid, ask y el diferencial

En cualquier momento el libro de órdenes tiene dos precios frontales. El **bid** es el precio más alto al que los compradores en reposo están dispuestos a comprar. El **ask** (también llamado oferta de venta) es el precio más bajo al que los vendedores en reposo están dispuestos a vender. La brecha entre ambos es el diferencial: en futuros líquidos como el ES suele ser de un tick. Detrás de esos precios frontales hay colas de más órdenes de límite en cada nivel; esa pila de órdenes en reposo es la profundidad de mercado (vea [[depth-of-market]] y [[advanced-dom]]). Pase el cursor sobre la escalera en vivo de abajo para ver qué significa cada nivel en reposo: límites de venta apilados por encima del diferencial, límites de compra por debajo.

[WIDGET: dom-ladder]

### El agresor

Las órdenes en reposo no operan entre sí: alguien tiene que cruzar el diferencial. Una orden a mercado (o una orden de límite agresiva con precio a través del diferencial) hace exactamente eso:

- Una operación que se imprime **en el ask** fue iniciada por un **comprador** agresivo.
- Una operación que se imprime **en el bid** fue iniciada por un **vendedor** agresivo.

Un punto confunde a casi todos los principiantes: cada operación individual tiene exactamente un comprador y un vendedor, por lo que "más compradores que vendedores" no significa nada. Lo que mide el flujo de órdenes es qué lado fue agresivo: quién pagó el diferencial para ejecutarse ahora mismo.

### Delta

El delta condensa el recuento de agresores en un número por barra:

- El volumen operado en el ask cuenta como presión compradora.
- El volumen operado en el bid cuenta como presión vendedora.
- **Delta = volumen operado en el ask − volumen operado en el bid.**

Un delta positivo significa que los compradores fueron el lado más agresivo durante esa barra; un delta negativo significa que lo fueron los vendedores. El **delta acumulado** suma el delta de cada barra a un total continuo a lo largo de la sesión, de modo que puede comparar la tendencia de la agresión con la tendencia del precio. Cuando el precio marca un nuevo máximo pero el delta acumulado no (o lo inverso en los mínimos), ese desacuerdo se llama divergencia de delta y merece atención.

Véalo funcionar en el panel en vivo de abajo: pase el cursor sobre cada barra para ver cómo su delta alimenta la línea acumulada.

[WIDGET: delta-lab]

### Las matemáticas (opcional)

Para una sola barra:

```
delta        = volume_at_ask − volume_at_bid
total volume = volume_at_ask + volume_at_bid
```

El delta acumulado en la barra *n* es la suma de todos los deltas de barra desde el inicio de la sesión hasta la barra *n*. Tenga en cuenta que el delta puede ser pequeño mientras el volumen total es enorme: esa combinación (volumen intenso en ambos lados, poca agresión neta) es información en sí misma: una batalla, no un desfile.

> **Nota:** El delta depende de que su fuente de datos clasifique correctamente cada operación como del lado del bid o del lado del ask. Las fuentes con datos más granulares producen un delta más preciso; vea [[compatibility-guide]] para saber qué proporciona cada fuente.

## Véalo en DeepCharts

- [[adv-time-and-sales|Time And Sales avanzado]]: la cinta en bruto: cada operación individual con su precio, tamaño y lado.
- [[advanced-dom|DOM avanzado]] y el [[depth-of-market|indicador Profundidad de mercado]]: la liquidez en reposo del bid y el ask contra la que operan los agresores.
- [[deep-print|Deep Print (Footprint)]]: volumen operado en el bid frente al ask en cada precio dentro de cada barra.
- [[deep-delta]] y [[delta-bar]]: el delta por barra trazado como estudio propio.
- [[delta-cumulative-candlestick]] y [[delta-cumulative-histogram]]: delta acumulado para la lectura de divergencias.
- [[delta-highlight|Delta % Highlight]]: marca las barras donde el delta es una proporción inusualmente grande del volumen.
- [[big-trades]]: aísla impresiones agresivas inusualmente grandes.
- [[speed-of-tape]]: la velocidad a la que las operaciones golpean el mercado, un indicador de urgencia.

## Ejemplo práctico

Supongamos que el ES cotiza a 5.300,00 y una barra de 5 minutos imprime 12.400 contratos en el ask y 9.900 en el bid (los números son ilustrativos). El delta es +2.500 sobre un volumen total de 22.300: los compradores fueron claramente el lado agresivo, y la barra cierra cerca de su máximo: la agresión produjo progreso. Compra de iniciativa saludable.

La siguiente barra imprime otro delta de +3.000, pero cierra plana, de vuelta cerca del cierre anterior. Los compradores agresivos gastaron 3.000 contratos de esfuerzo neto y no obtuvieron nada a cambio. Alguien les estaba vendiendo pasivamente en los máximos: absorción. Si las barras siguientes muestran el delta volviéndose negativo mientras el precio empieza a resbalar, el esfuerzo comprador fallido se convierte en el inicio de una historia de reversión.

[SCREENSHOT: Dos barras footprint consecutivas anotadas lado a lado — la primera barra con delta fuertemente positivo cerrando en su máximo, la segunda barra con un delta positivo similar pero un cierre plano, texto de anotación "mismo esfuerzo comprador, sin resultado = absorción" | dc-es-orderflow-101-01.png]

## Malinterpretaciones comunes

- **"Un delta positivo significa que el precio debe subir."** No: el delta mide el esfuerzo, no el resultado. Un delta positivo sin progreso alcista es evidencia bajista, no alcista.
- **"El delta me dice cuántos compradores hay frente a vendedores."** Cada operación tiene ambos. El delta mide únicamente la agresión.
- **"Una gran barra de delta es una señal."** Una sola barra significa poco sin contexto: la ubicación importa (en un nivel clave, en los extremos de la sesión) y también lo que hizo el precio en respuesta.
- **"El delta es idéntico en todas las fuentes."** La calidad de la clasificación varía con la granularidad de la fuente, por lo que los números absolutos de delta pueden diferir entre fuentes de datos. Lea el patrón, no la cifra exacta.

## Profundice

Una vez que el bid, el ask, el agresor y el delta le resulten naturales, pase a [[reading-a-footprint]] para practicar barra a barra, a [[understanding-auction-theory]] para ver desequilibrio y absorción en contexto, y a [[understanding-icebergs-absorption]] para saber cómo los grandes participantes ocultan sus órdenes. Los términos desconocidos están recopilados en el [[glossary]].

## Artículos relacionados

- [[reading-a-footprint]]
- [[understanding-auction-theory]]
- [[understanding-icebergs-absorption]]
- [[deep-print]]
- [[deep-delta]]
- [[glossary]]