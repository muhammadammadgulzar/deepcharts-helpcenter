---
title: "Entender los icebergs y la absorción"
slug: "understanding-icebergs-absorption"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "advanced"
time: "6 min read"
description: "Cómo las órdenes iceberg ocultan el tamaño institucional, cómo se ve la absorción en la cinta, el DOM y el footprint, y cómo evitar las falsas lecturas clásicas."
keywords: ["orden iceberg", "liquidez oculta", "absorción", "recarga de órdenes", "bid que se recarga", "tamaño oculto", "batalla pasivo agresor", "absorción por divergencia de delta", "spoofing vs iceberg"]
source_hash: "0820f76a299b2d01"
ai_translated: true
source_hash: "0820f76a299b2d01"
---
Los grandes traders tienen un problema: mostrar todo su tamaño movería el mercado en su contra antes de terminar de ejecutarse. La orden iceberg es su solución estándar, y la absorción es la sombra que proyecta sobre la cinta. Aprender a detectar ambas es una de las habilidades de mayor valor en el trading de flujo de órdenes, porque revela dónde el dinero serio está dispuesto a luchar.

Este es un tema avanzado. Asume que usted domina el agresor, el delta y el libro de órdenes de [[orderflow-101]], y el marco de subastas de [[understanding-auction-theory]].

## La idea en un párrafo

Una orden iceberg es una gran orden de límite que muestra solo una pequeña porción visible — la punta — mientras el resto permanece oculto y se recarga automáticamente a medida que la punta se ejecuta. Imagine a un comprador mayorista en una lonja de pescado que quiere 5.000 kilos pero solo pide 50 cada vez, de modo que nadie se da cuenta de la magnitud de su demanda ni le sube los precios; cada vez que su caja se llena, pide discretamente otros 50. La absorción es lo que el resto del mercado experimenta mientras él trabaja: los vendedores siguen descargando contra lo que parece un bid pequeño, y sin embargo el precio se niega a caer, porque la orden oculta se traga — absorbe — todo lo que le lanzan.

## Por qué les importa a los traders

- **Los icebergs marcan compromiso real.** El tamaño visible del libro puede retirarse en un milisegundo; un iceberg que ya ha ejecutado miles de contratos es prueba de intención genuina en ese precio.
- **La absorción suele preceder a las reversiones.** Cuando los vendedores agresivos se agotan contra un comprador oculto, el camino de menor resistencia se invierte al alza, y viceversa.
- **Redefinen el soporte y la resistencia.** Un nivel defendido por un iceberg es estructuralmente más fuerte que uno trazado a partir de un patrón gráfico, y su fallo es proporcionalmente más significativo.
- **Le protegen de las trampas.** Reconocer la absorción evita que usted se una a un movimiento agresivo exactamente en el punto donde un jugador más grande está tomando el otro lado.

## Cómo funciona

### La mecánica de un iceberg

Un trader envía una orden de límite de, digamos, 500 contratos con un tamaño mostrado de 10. El libro muestra 10. Cuando esos 10 se ejecutan, la orden vuelve a mostrar automáticamente otros 10 de la reserva oculta, al mismo precio, hasta que los 500 completos se ejecutan o la orden se cancela. Algunos icebergs son nativos (gestionados por la bolsa); otros son sintéticos (un algoritmo de ejecución que reenvía órdenes pequeñas): en la cinta se ven parecidos. La firma observable es siempre la misma: **el volumen ejecutado en un precio excede con creces el tamaño que alguna vez fue visible allí.**

### Cómo se ve la absorción

La absorción es el efecto a nivel de mercado: volumen agresivo intenso contra un precio, delta fuertemente unilateral y ningún progreso del precio. Las tres vistas coinciden entre sí:

- **En la cinta:** un flujo rápido de impresiones en un precio, del mismo lado, muy por encima de lo que el libro mostraba.
- **En el DOM:** el tamaño visible del nivel recibe golpe tras golpe pero sigue recargándose hasta una cifra similar en lugar de reducirse a cero.
- **En el footprint:** una celda de volumen desmesurada en el extremo del movimiento sin continuación más allá, y un delta empujando con fuerza en una dirección a la que el precio se niega a ir.

[SCREENSHOT: Una vista compuesta anotada del mismo momento en tres paneles — la cinta mostrando impresiones de venta repetidas en un precio, el DOM mostrando el bid en ese precio recargándose a un tamaño similar tras cada golpe, y una barra de footprint con una enorme celda de volumen en el bid en el mínimo y sin precios inferiores impresos, con el pie "un iceberg, tres vistas" | dc-es-understanding-icebergs-absorption-01.png]

### Detección en la práctica

Rara vez se ve un iceberg directamente; se infiere. Las señales más fuertes, en orden aproximado de fiabilidad:

1. **Recarga:** el mismo precio vuelve a mostrar un tamaño similar repetidamente mientras las operaciones siguen imprimiéndose contra él.
2. **Desajuste entre ejecutado y mostrado:** el volumen acumulado negociado en el nivel es un múltiplo grande de cualquier cosa que el libro haya mostrado.
3. **Divergencia de delta:** el delta acumulado cae con fuerza mientras el precio aguanta (comprador oculto), o sube con fuerza mientras el precio se estanca (vendedor oculto) — vea [[delta-cumulative-candlestick]].
4. **Tiempo:** la absorción genuina requiere golpes repetidos a lo largo del tiempo; una sola impresión grande no demuestra nada.

Las dos primeras señales viven en la cinta: practique la lectura de impresiones en bruto en el Time & Sales en vivo de abajo; pase el cursor por cualquier impresión para pausar el flujo y descifrarla.

[WIDGET: tape-lab]

> **Nota:** La calidad de la detección depende de sus datos de mercado. Los datos de profundidad orden por orden (MBO) permiten a las herramientas rastrear las recargas de órdenes individuales; la profundidad agregada hace que la inferencia de icebergs sea menos precisa, y los datos de primer nivel del libro (Level 1) solo admiten la lectura al estilo de divergencia de delta. Vea [[compatibility-guide]] para saber qué suministra cada fuente de datos.

### Las matemáticas (opcional)

Una ratio mental útil para un nivel sospechoso de iceberg:

```
absorption ratio = volume executed at the level ÷ maximum size ever displayed there
```

No hay un umbral mágico, pero cuanto mayor sea el múltiplo (y más corto el tiempo en que se acumula), más difícil resulta explicar la actividad como tráfico de cola ordinario de muchas pequeñas órdenes en reposo.

## Véalo en DeepCharts

- [[adv-time-and-sales|Advanced Time And Sales]] — la cinta, donde las impresiones repetidas contra un precio se ven primero.
- [[advanced-dom|Advanced DOM]] — observe un nivel recargarse en tiempo real mientras absorbe.
- [[deep-print|Deep Print (Footprint)]] — celdas de volumen desmesuradas en los extremos sin continuación.
- [[deep-wall]] — rastrea grandes liquideces en reposo en el libro.
- [[deep-trades]] y [[big-trades]] — sacan a la luz operaciones ejecutadas inusualmente grandes y sus agrupaciones.
- [[delta-cumulative-candlestick]] y [[delta-cumulative-histogram]] — la vista de divergencia de la absorción.
- [[speed-of-tape]] — picos de urgencia que suelen acompañar una batalla en un nivel iceberg.

## Ejemplo práctico

ES cae hasta 5.270,00 (ilustrativo), un nivel sin significado gráfico evidente. El DOM muestra allí un bid de unos 60 contratos. Durante los siguientes cuatro minutos la cinta imprime aproximadamente 2.400 contratos vendidos en 5.270,00 — cuarenta veces el tamaño mostrado — y tras cada ráfaga el bid vuelve a mostrarse cerca de 60. El delta acumulado cae bruscamente; el precio no hace ni un solo mínimo nuevo. Es un comprador oculto de manual: los vendedores están volcando esfuerzo contra un nivel y no obtienen nada. Cuando las oleadas de venta se acortan visiblemente y aparece la primera compra agresiva, los cortos absorbidos quedan atrapados por debajo de un comprador demostrado: combustible para el rebote. Si en cambio 5.270,00 hubiera roto después de toda esa defensa, la misma lógica se invertiría: el gran jugador ha terminado o ha sido superado, y el movimiento a través del nivel tiende a ser rápido.

[SCREENSHOT: Gráfico de ES del ejemplo práctico anotado con la línea del nivel 5.270,00, un panel de delta acumulado debajo cayendo bruscamente mientras el precio se mantiene plano en el nivel, y un rótulo que dice "2.400 vendidos contra un bid de 60 lotes: comprador oculto" | dc-es-understanding-icebergs-absorption-02.png]

## Malinterpretaciones comunes

- **"Un gran tamaño visible en el DOM es un iceberg."** Al contrario: los icebergs ocultan el tamaño. Un gran tamaño mostrado que desaparece al acercarse el precio está más cerca del spoofing que de la absorción. Juzgue por lo que se ejecuta, no por lo que se muestra.
- **"Todo nivel que se recarga es un iceberg."** Los precios concurridos atraen nuevas órdenes de límite de muchos traders independientes. Sospeche de un iceberg solo cuando el desajuste entre lo ejecutado y lo mostrado sea extremo y concentrado.
- **"La absorción garantiza una reversión."** Marca una batalla, no al ganador. Si la orden oculta se completa o se cancela, el nivel puede ceder con violencia: una absorción que falla es en sí misma una señal de ruptura.
- **"Puedo detectar icebergs con cualquier fuente de datos."** Sin datos de profundidad granulares, la firma de recarga se difumina; sea más conservador con sus lecturas en fuentes agregadas o de primer nivel del libro.

## Profundice

La absorción es uno de los tres eventos centrales de la subasta — vea [[understanding-auction-theory]] para el marco completo, y [[reading-a-footprint]] para practicar la detección de esfuerzo frente a resultado barra a barra. [[orderflow-101]] cubre la mecánica del delta sobre la que se apoya todo esto, y el [[glossary]] define cada término utilizado aquí.

## Artículos relacionados

- [[understanding-auction-theory]]
- [[orderflow-101]]
- [[reading-a-footprint]]
- [[advanced-dom]]
- [[deep-wall]]
- [[adv-time-and-sales]]