---
title: "Glosario de términos de flujo de órdenes y de la plataforma"
slug: "glossary"
category: "Concepts"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "7 min read"
description: "Definiciones breves de todos los términos de flujo de órdenes, subasta, estructura de mercado y de la plataforma DeepCharts usados en el Centro de ayuda, con enlaces a los artículos completos."
keywords: ["glosario", "definiciones", "qué es el delta", "qué es el POC", "términos de flujo de órdenes", "términos de footprint", "diccionario de trading", "qué significa desequilibrio", "MBO vs MBP", "significado de RTH ETH"]
source_hash: "1a0becd3424438ac"
ai_translated: true
source_hash: "1a0becd3424438ac"
---
Todo campo especializado comprime sus ideas en abreviaturas, y el trading de flujo de órdenes es peor que la mayoría. Esta página define los términos usados en el Centro de ayuda de DeepCharts en una o dos frases cada uno, agrupados por tema, con un enlace al artículo que explica cada idea como es debido.

Úselo como consulta, no como curso: los artículos enlazados contienen la sustancia. Si empieza desde cero, lea primero [[orderflow-101]] y regrese aquí cada vez que un término le detenga.

## Cómo usar este glosario

Los términos se agrupan en cinco secciones: fundamentos del flujo de órdenes, footprint y desequilibrio, perfiles y estructura de subasta, estructura de mercado y datos, y términos de la plataforma. Dentro de cada grupo, los términos relacionados aparecen contiguos, de modo que puede leer un grupo de arriba abajo como un miniresumen introductorio.

## Fundamentos del flujo de órdenes

- **Flujo de órdenes (orderflow)** — El estudio de las órdenes reales detrás del movimiento del precio: las operaciones ejecutadas, su lado agresor y la liquidez pasiva contra la que se ejecutan. Artículo de base: [[orderflow-101]].
- **Bid** — El precio más alto al que los compradores pasivos están dispuestos a comprar en ese momento. Una operación impresa en el bid fue iniciada por un vendedor agresivo.
- **Ask (oferta de venta)** — El precio más bajo al que los vendedores pasivos están dispuestos a vender en ese momento. Una operación impresa en el ask fue iniciada por un comprador agresivo.
- **Diferencial** — La distancia entre el mejor bid y el mejor ask; en futuros líquidos como el ES suele ser de un tick.
- **Orden de límite (LMT)** — Una orden pasiva para comprar o vender a un precio indicado o mejor; las órdenes de límite componen el libro contra el que operan los agresores.
- **Orden a mercado (MKT)** — Una orden que se ejecuta de inmediato contra lo que esté en reposo al mejor precio disponible, cruzando el diferencial para hacerlo.
- **Agresor** — El lado impaciente de una operación: el participante cuya orden a mercado cruzó el diferencial. Las herramientas de flujo de órdenes clasifican cada operación por su agresor; consulte [[orderflow-101]].
- **Delta** — El volumen negociado en el ask menos el volumen negociado en el bid de una barra: el balance neto de agresión. Se traza por barra con [[delta-bar]] y [[deep-delta]].
- **Delta acumulado** — El delta de cada barra sumado a un total acumulado de la sesión, usado para comparar la tendencia de la agresión con la tendencia del precio. Consulte [[delta-cumulative-candlestick]].
- **Divergencia de delta** — El precio marcando un nuevo extremo que el delta acumulado no confirma (o viceversa): un desacuerdo entre esfuerzo y resultado que merece atención.
- **Liquidez** — Las órdenes pasivas disponibles contra las que operar. Un precio líquido absorbe órdenes grandes con poco movimiento; uno ilíquido se mueve con órdenes pequeñas.
- **Cinta (Time and Sales)** — La lista cronológica en bruto de cada operación ejecutada con su precio, tamaño y lado. En DeepCharts es la ventana [[adv-time-and-sales|Advanced Time And Sales]].
- **Velocidad de la cinta** — La rapidez con la que se imprimen las operaciones: una aproximación a la urgencia y la participación. La mide el indicador [[speed-of-tape]].
- **Sweep (barrido)** — Una única orden agresiva lo bastante grande para consumir varios niveles de precio de liquidez pasiva de una sola vez. Las impresiones agresivas grandes se aíslan con [[big-trades]].
- **Iceberg** — Una orden de límite grande que muestra solo una pequeña parte cada vez, recargándose automáticamente a medida que se ejecuta para mantener oculto su tamaño real. Consulte [[understanding-icebergs-absorption]].
- **Absorción** — Volumen agresivo intenso que no logra mover el precio porque un gran participante pasivo toma el otro lado: a menudo la primera señal visible de un giro. Consulte [[understanding-icebergs-absorption]].
- **Agotamiento** — Un movimiento que se queda sin participantes: volumen y agresión decrecientes mientras el precio presiona hacia un nuevo extremo, dejándolo vulnerable a un giro.
- **Iniciativa vs. respuesta** — La actividad de iniciativa ataca alejándose del valor establecido (compras de ruptura por encima del valor); la actividad de respuesta defiende el valor (compras en un retroceso hacia él). Artículo marco: [[understanding-auction-theory]].

## Footprint y desequilibrio

- **Footprint** — Un estilo de gráfico que abre cada barra para mostrar el volumen negociado a cada precio, dividido entre lo negociado en el bid y en el ask. Concepto y práctica de lectura: [[reading-a-footprint]]; el indicador de DeepCharts es [[deep-print]].
- **Desequilibrio** — Una celda del footprint donde el volumen de un lado supera al del otro por una proporción determinada, comparado en diagonal (volumen en el ask a un precio frente al volumen en el bid un tick por debajo). Lo detecta [[imbalance-tracker]].
- **Desequilibrios apilados** — Varios desequilibrios en precios consecutivos y en la misma dirección: una zona donde uno de los lados fue arrollado, que a menudo actúa como soporte o resistencia al ser revisitada. Consulte [[reading-a-footprint]].
- **Subasta inacabada** — Un extremo de barra o de swing que negoció tanto en el bid como en el ask (sin impresión a cero), lo que sugiere que la subasta a ese precio nunca se completó; tales niveles son candidatos habituales a revisita. Los señala el indicador [[unfinished-auction]].

## Perfiles y estructura de subasta

- **TPO (Time Price Opportunity)** — El bloque básico del Market Profile: cada precio recibe una marca por cada tramo temporal en el que negoció, de modo que el perfil muestra dónde el mercado pasó *tiempo*. Consulte [[market-profile-tpo]] y la [[profile-chart-window]].
- **Impresión única (single print)** — En un perfil TPO, un precio visitado durante un solo tramo temporal: una marca de movimiento rápido y no aceptado que los traders vigilan para revisitas posteriores.
- **POC (Point of Control)** — El precio único con mayor volumen negociado (o más TPO) de un período: el precio justo de consenso del mercado. Concepto: [[understanding-volume-profile]]; seguido en vivo por [[dynamic-poc]].
- **POC virgen (naked POC)** — El POC de una sesión anterior que el precio no ha vuelto a atravesar desde entonces: un objetivo futuro muy vigilado.
- **Área de valor (VA), VAH, VAL** — La banda de precios alrededor del POC que contiene una proporción fija del volumen del período (alrededor del 70% por convención); sus bordes son el Value Area High y el Value Area Low. Consulte [[understanding-volume-profile]].
- **HVN / LVN (nodo de alto / bajo volumen)** — Picos de volumen secundarios (precios a los que el mercado siguió regresando) y los valles finos entre ellos (precios que rechazó rápidamente). Los LVN tienden a atravesarse rápido; los HVN frenan el precio.
- **VWAP** — El Volume Weighted Average Price de la sesión: el precio medio pagado, ponderado por tamaño, normalmente dibujado con bandas de desviación estándar. Consulte [[understanding-vwap]] y [[vwap-envelopes]].

## Estructura de mercado, contratos y datos

- **RTH / ETH** — Regular Trading Hours (la sesión diurna principal) frente a Electronic Trading Hours (la sesión completa, de casi 24 horas). Concepto: [[understanding-market-structure-sessions]]; el conmutador del gráfico está en [[chart-display-options]].
- **Sesión** — Un período de negociación definido (RTH, nocturna, o una ventana personalizada) usado para anclar perfiles, el VWAP y estadísticas diarias; las ventanas personalizadas se configuran en [[price-chart-settings]].
- **Mes frontal (front month)** — El mes de contrato donde reside actualmente el volumen: el que usted debería graficar y operar.
- **Rollover** — El cambio del contrato de futuros a punto de vencer al siguiente, a medida que el volumen migra antes del vencimiento. En DeepCharts: [[symbol-rollover]].
- **Contrato continuo** — Un historial largo de gráfico cosido a través de los meses de contrato; los modos ajustados eliminan el escalón artificial de precio en cada rollover. Referencia de configuración: [[price-chart-settings]].
- **Datos EOD (end-of-day)** — Datos diarios históricos cargados sin una transmisión en vivo, útiles para revisar la acción del precio pasada. Consulte [[end-of-day-data]].
- **Barras de tick / volumen / rango** — Tipos de barra que cierran tras un número fijo de operaciones, un volumen negociado fijo o un rango de precio fijo, en lugar de tras un tiempo fijo. Se configuran en [[price-chart-settings]].
- **Level 1 vs. Level 2** — Los datos Level 1 incluyen solo las operaciones y el mejor bid/ask; Level 2 añade la escalera de profundidad de órdenes pasivas a precios más allá del mejor. El DOM y las funciones de profundidad requieren Level 2: consulte [[advanced-dom]].
- **MBO vs. MBP** — Dos formatos de Level 2: Market By Order entrega cada orden pasiva individual (más pesado, el mejor para herramientas de flujo de órdenes), Market By Price entrega solo los totales por nivel (más ligero en ancho de banda). La elección aparece como **DOM Type** en las conexiones de dxFeed: consulte [[connect-dxfeed]].
- **DOM (Depth of Market)** — La escalera de liquidez pasiva en el bid y el ask a cada precio. En DeepCharts: la ventana [[advanced-dom]] y el indicador [[depth-of-market]].

## Términos de la plataforma

- **Plantilla** — La configuración guardada de un gráfico (indicadores, estilos, configuración) recargable en cualquier gráfico. Consulte [[templates-workspaces]]; los ajustes preconfigurados de un clic se cubren en [[quick-chart-templates]].
- **Espacio de trabajo** — Todo su diseño de pantalla guardado: varias ventanas, gráficos y sus configuraciones. Consulte [[templates-workspaces]].
- **Cuenta SIM** — Una cuenta de simulación en el bróker integrado **SIM** que ejecuta órdenes contra los datos en vivo del gráfico sin dinero real. Consulte [[simulation-accounts]].
- **Empresa prop** — Una firma de trading propietario que financia a traders con su propio capital, normalmente mediante una evaluación; las cuentas de empresa prop se conectan a DeepCharts a través de fuentes como Rithmic o dxFeed. Consulte [[compatibility-guide]] y [[connect-rithmic-prop-firm]].
- **Fuente de datos** — La conexión de datos de mercado que transmite precios a la plataforma; todo gráfico necesita una. Resumen de configuración: [[connect-data-feed]].

## Artículos relacionados

- [[orderflow-101]]
- [[understanding-volume-profile]]
- [[understanding-auction-theory]]
- [[understanding-market-structure-sessions]]
- [[reading-a-footprint]]
- [[welcome-to-deepcharts]]