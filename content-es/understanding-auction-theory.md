---
title: "Entender la teoría de subastas: desequilibrio, subastas sin terminar, absorción"
slug: "understanding-auction-theory"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "intermediate"
time: "6 min read"
description: "Cómo el marco del mercado como subasta explica los desequilibrios, las subastas sin terminar y la absorción, y cómo leer cada uno en un gráfico footprint."
keywords: ["teoría de subastas", "teoría del mercado de subastas", "desequilibrio", "desequilibrios apilados", "subasta sin terminar", "absorción", "iniciativa vs respuesta", "desequilibrio diagonal", "desequilibrio comprador", "desequilibrio vendedor"]
source_hash: "79f8e9ad271553ad"
ai_translated: true
source_hash: "79f8e9ad271553ad"
---
La teoría de subastas es el marco que une todo el flujo de órdenes. En lugar de tratar el precio como una línea que sube y baja, trata el mercado como una subasta continua de doble sentido cuya función es encontrar el precio donde se hacen los negocios. Los desequilibrios, las subastas sin terminar y la absorción son las tres huellas más operables que deja esa subasta.

Este artículo asume que usted sabe qué son un agresor y el delta; si no es así, comience con [[orderflow-101]].

## La idea en un párrafo

Un mercado funciona como un subastador que no puede dejar de hablar: el precio sube hasta que los compradores se niegan a pagar más, luego baja hasta que los vendedores se niegan a aceptar menos, sondeando sin cesar ambas direcciones en busca de los límites del valor justo. Imagine una subasta de ganado: el subastador sube el precio mientras las manos siguen levantándose, y el lote no está cerrado hasta que las subidas se encuentran con el silencio. Todo movimiento del mercado es ese mismo proceso: un avance está "terminado" cuando el interés comprador se agota en la parte superior, y un descenso está "terminado" cuando el interés vendedor se agota en la parte inferior. El desequilibrio muestra dónde un lado está arrollando al otro, una subasta sin terminar es un movimiento que acabó antes de demostrarse el agotamiento, y la absorción es el momento en que una contraparte paciente silencia al lado agresivo sin que el precio se mueva en absoluto. Puede observar esa subasta de doble sentido en vivo en la escalera de abajo: pase el cursor por cada nivel para ver su función.

[WIDGET: dom-ladder]

## Por qué les importa a los traders

- **Los desequilibrios muestran quién tiene el control ahora mismo**, y los desequilibrios apilados marcan zonas de precio que a menudo actúan como soporte o resistencia en un retest.
- **Las subastas sin terminar dejan asuntos pendientes.** Muchos traders esperan que el mercado acabe revisitando un extremo donde la subasta no se completó correctamente, lo que convierte esos niveles en objetivos naturales.
- **La absorción es un sistema de alerta temprana.** A menudo aparece en los puntos de giro antes de que nada sea visible en un gráfico de velas convencional.
- **El marco evita las lecturas unilaterales.** La teoría de subastas le obliga a preguntarse no solo "¿quién está siendo agresivo?" sino "¿está funcionando la agresión?": la diferencia entre actividad de iniciativa que llega a alguna parte y actividad de respuesta que la desvanece.

## Cómo funciona

### Desequilibrio

En un gráfico footprint, cada precio muestra el volumen negociado en el bid y en el ask. Como las compras de mercado levantan el ask a un precio mientras que las ventas de mercado golpean el bid un tick más abajo, los desequilibrios del footprint se comparan en diagonal: el volumen del ask en un precio contra el volumen del bid un tick por debajo. Cuando un lado supera al otro por un múltiplo grande — una convención común es 3:1 (300 %), aunque el umbral es configurable en la mayoría de las herramientas — ese par de precios se marca como desequilibrio comprador o vendedor. Un desequilibrio aislado es ruido; tres o más desequilibrios consecutivos del mismo lado, llamados desequilibrios apilados, indican que un lado arrolló al otro a lo largo de toda una zona, y esa zona a menudo se defiende cuando el precio vuelve a ella.

Pruébelo abajo: ajuste la ratio de desequilibrio diagonal y pase el cursor por las celdas para ver qué pares diagonales cumplen la condición.

[WIDGET: footprint-lab]

### Subastas sin terminar

Una subasta está completa cuando el lado agresivo se agota en el extremo. En un footprint, un máximo limpio y terminado se estrecha: en el precio más alto queda poco o ningún volumen del lado ask, porque los últimos compradores se rindieron. Cuando, en cambio, el precio extremo de un movimiento sigue mostrando un comercio sólido a dos bandas — compra y venta activas en el tick superior sin estrechamiento — la subasta terminó sin prueba de agotamiento. Ese nivel se llama subasta sin terminar, y la expectativa habitual es que el mercado volverá a él más adelante para cerrar el asunto. Trátelo como una tendencia, no como una regla: las definiciones exactas varían entre herramientas, y no todos los niveles sin terminar se revisitan en un día concreto.

### Absorción

La absorción es la agresión chocando contra un muro paciente. Las órdenes a mercado agresivas siguen golpeando un nivel — volumen intenso, delta fuertemente unilateral — y sin embargo el precio no se mueve, porque grandes órdenes de límite en reposo siguen tomando el otro lado. En el footprint se ve como un volumen inusualmente alto en un extremo sin progreso de precio; en un gráfico de delta aparece como una divergencia, esfuerzo sin resultado. Los vendedores absorbiendo en un máximo suelen preceder a un rechazo a la baja; los compradores absorbiendo en un mínimo suelen preceder a un rebote. La absorción se trata en profundidad, junto con las órdenes iceberg que normalmente la causan, en [[understanding-icebergs-absorption]].

### Las matemáticas (opcional)

Para un par diagonal, la ratio de desequilibrio es:

```
buy imbalance  if ask_volume(price) ≥ ratio × bid_volume(price − 1 tick)
sell imbalance if bid_volume(price) ≥ ratio × ask_volume(price + 1 tick)
```

con `ratio` comúnmente fijado en torno a 3.0. La mayoría de las herramientas también exigen un volumen mínimo para que las impresiones triviales (6 contratos frente a 2) no cuenten.

## Véalo en DeepCharts

- [[deep-print|Deep Print (Footprint)]] — el gráfico donde los desequilibrios, los extremos que se estrechan y la absorción se leen directamente.
- [[imbalance-tracker]] — detecta y marca automáticamente los desequilibrios de bid/ask.
- [[imbalance-rejector]] — herramienta complementaria para seguir cómo se comporta el precio en los niveles de desequilibrio.
- [[session-imbalance]] — niveles de referencia de desequilibrio a nivel de sesión.
- [[unfinished-auction]] — marca los extremos de subastas sin terminar para que pueda seguir si son revisitados.
- [[auction-gap-tracker]] — rastrea los huecos que dejó la subasta.
- [[ratio-highlight]] — resalta ratios extremas de bid/ask dentro de las barras.
- [[market-profile-tpo]] y [[deep-profile]] — las vistas de perfil de la misma subasta, que muestran dónde construyó valor.

## Ejemplo práctico

NQ sube hasta el máximo de ayer (digamos 18.600, ilustrativo). En el camino de subida, el footprint imprime desequilibrios compradores apilados en 18.560–18.570: compradores de iniciativa en control, y esa zona se convierte en el soporte de retroceso a vigilar. En 18.600 el carácter cambia: el volumen se expande bruscamente, el delta se mantiene fuertemente positivo, pero el precio se estanca durante varias barras. Esfuerzo sin resultado: los vendedores están absorbiendo la compra. El tick superior del movimiento sigue mostrando un intenso comercio a dos bandas, así que el máximo es además una posible subasta sin terminar. El precio entonces se da la vuelta. La lectura según la teoría de subastas: los compradores impulsaron el movimiento (desequilibrios), un vendedor paciente lo terminó (absorción), y el máximo sin estrechar queda en el mapa como asunto pendiente que el mercado puede revisitar otro día.

[SCREENSHOT: Una secuencia de footprint de NQ anotada en tres etapas — desequilibrios compradores apilados durante la subida, una barra de absorción en el máximo del día anterior con volumen alto y precio plano, y el tick superior sin estrechar rodeado como posible subasta sin terminar | dc-es-understanding-auction-theory-01.png]

## Malinterpretaciones comunes

- **"Todo desequilibrio es una señal."** Los desequilibrios aislados ocurren constantemente. La ubicación (en un nivel que importa) y el apilamiento son lo que les da peso.
- **"Las subastas sin terminar deben ser revisitadas."** Es una tendencia en torno a la cual los traders planifican, no una garantía; además, las definiciones difieren entre herramientas, así que dos plataformas pueden no marcar los mismos niveles.
- **"Volumen alto en un máximo es siempre absorción."** También puede ser una revalorización genuina a dos bandas. La absorción requiere el tercer ingrediente: que el precio no se mueva a pesar de la agresión.
- **"Absorción significa reversión inmediata."** Si el lado que absorbe acaba retirando sus órdenes, el nivel absorbido puede romperse con violencia: la absorción le dice dónde está la batalla, no quién la gana.

## Profundice

Practique la mecánica barra a barra en [[reading-a-footprint]], estudie el lado de las órdenes ocultas de la absorción en [[understanding-icebergs-absorption]], y vea cómo la construcción de valor de la subasta se manifiesta en [[understanding-volume-profile]]. Los términos están definidos en el [[glossary]].

## Artículos relacionados

- [[orderflow-101]]
- [[reading-a-footprint]]
- [[understanding-icebergs-absorption]]
- [[imbalance-tracker]]
- [[unfinished-auction]]
- [[deep-print]]