---
title: "Entender la estructura del mercado y las sesiones (RTH/ETH, rollover)"
slug: "understanding-market-structure-sessions"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "beginner"
time: "8 min read"
description: "Sesiones RTH frente a ETH, el día de trading de futuros, los niveles de referencia nocturnos y el rollover de contratos: la estructura sobre la que se construye todo gráfico de futuros."
keywords: ["RTH", "ETH", "horario regular de negociación", "horario electrónico de negociación", "sesión nocturna", "globex", "rollover de contrato", "front month", "contrato continuo", "apertura de sesión", "por qué mi gráfico se ve diferente"]
source_hash: "15c83f73d8059712"
ai_translated: true
source_hash: "15c83f73d8059712"
---
Los mercados de futuros operan casi las veinticuatro horas, pero las horas no son iguales. Un puñado de hechos estructurales — cuándo transcurre la sesión "real", cuándo empieza realmente el día de la bolsa y qué mes de contrato está usted mirando — moldean silenciosamente cada gráfico que abre. Los traders que se saltan esta capa acaban confundidos por gráficos que no coinciden, indicadores que se reinician a horas extrañas y "huecos" de precio que nunca ocurrieron.

Este artículo cubre las dos ideas que más importan: las sesiones (RTH frente a ETH) y el rollover de contratos. Ambas son estructura general de los mercados de futuros; la configuración de DeepCharts que las controla está enlazada en Véalo en DeepCharts.

## La idea en un párrafo

Piense en un mercado de futuros como una tienda que nunca cierra del todo pero que tiene un período de mucha actividad al día. Las puertas están abiertas casi 23 horas (la sesión electrónica), pero los negocios serios ocurren en las pocas horas en que la multitud principal — fondos, instituciones, el mercado bursátil de contado de al lado — está presente (la sesión regular). Los precios impresos a las 3 de la madrugada con una plantilla mínima son reales, pero pesan menos que los precios impresos a las 10 de la mañana con todos en la sala. Además de ese ritmo diario, los propios contratos de futuros expiran cada pocos meses, así que el mercado traslada periódicamente su negocio del contrato que expira al siguiente: como la tienda que se muda a una nueva dirección a unas calles de distancia, donde la clientela es la misma pero las etiquetas de precio difieren ligeramente.

## Por qué les importa a los traders

- **El volumen y la convicción difieren según la sesión.** Una deriva nocturna de 40 puntos con volumen escaso y un movimiento de 40 puntos en RTH con volumen intenso no son la misma información. El contexto de sesión le dice cuánto confiar en un movimiento.
- **Los niveles de referencia clave son niveles de sesión.** El máximo y el mínimo nocturnos, el cierre RTH previo, la apertura RTH: son de los niveles intradía más observados precisamente porque los construyeron multitudes de participantes distintas.
- **Los límites de sesión gobiernan sus herramientas.** Los perfiles diarios, el VWAP de sesión, las estadísticas "del día": todos se reinician en un límite de sesión. Dos traders con configuraciones de sesión diferentes verán perfiles distintos, VWAP distintos y niveles diarios distintos sobre el mismo mercado ([[understanding-volume-profile]], [[understanding-vwap]]).
- **El rollover decide qué precios son reales.** Cerca del vencimiento, el contrato antiguo se apaga y el nuevo toma el relevo a un precio ligeramente distinto. Los gráficos que lo ignoran muestran huecos fantasma y datos muertos.

## Cómo funciona

### RTH frente a ETH

**ETH (Electronic Trading Hours)** es la sesión electrónica completa: casi todo el día. **RTH (Regular Trading Hours)** es la sesión diurna principal, y para los futuros de índices bursátiles de EE. UU. se define comúnmente para coincidir con la sesión de contado de renta variable de EE. UU., de 09:30 a 16:00 hora de Nueva York (las definiciones exactas varían según el instrumento y la plataforma). Todo lo que queda fuera de RTH se denomina vagamente sesión nocturna o solo-ETH.

La sesión nocturna es más delgada: menos participantes, menos volumen en cada precio, así que los movimientos avanzan más con menos negocio. Muchos marcos intradía tratan por tanto el rango nocturno como *contexto* — un anuncio no resuelto de hacia dónde podría ir el valor — y la apertura RTH como el momento en que el mercado lo vota con asistencia plena. Por eso "¿aguantó el mínimo nocturno tras la apertura?" es una pregunta más significativa que la misma prueba a las 4 de la madrugada.

### El día de trading de futuros

Para los futuros de índices bursátiles de CME como ES y NQ, la semana electrónica abre el domingo por la tarde a las 18:00 hora de Nueva York y se extiende hasta el viernes a las 17:00, con una pausa de mantenimiento de una hora cada día de 17:00 a 18:00. Consulte el calendario publicado por la bolsa para su instrumento específico y para las sesiones festivas.

Una consecuencia sorprende a casi todo el mundo: el día de trading de la bolsa no empieza a medianoche, sino a las 18:00 de la tarde *anterior*. El "día" de trading del lunes comenzó el domingo por la noche. Por tanto, las barras diarias, las líneas de inicio de día y las estadísticas de sesión ancladas al día de la bolsa se reinician por la tarde, no a las 00:00.

[SCREENSHOT: Un gráfico de NQ que abarca dos días completos con la porción nocturna (solo ETH) visualmente distinguida de la porción RTH, anotado con el inicio de sesión de las 18:00 de Nueva York, la apertura RTH de las 09:30, el máximo y mínimo nocturnos y la pausa diaria de 17:00 a 18:00 | dc-es-understanding-market-structure-sessions-01.png]

### Rollover y meses de contrato

Un contrato de futuros es un acuerdo con una fecha de vencimiento, así que cada instrumento es en realidad una familia de contratos. Los futuros de índices bursátiles usan un ciclo trimestral — marzo, junio, septiembre y diciembre, con los códigos de mes H, M, U y Z. El contrato donde vive actualmente el volumen se llama **front month** (mes delantero), y es el que usted debería graficar y operar.

A medida que se acerca el vencimiento (los futuros de índices bursátiles suelen expirar el tercer viernes del mes del contrato), el volumen migra al siguiente contrato en unos pocos días — la mayor parte en torno a una fecha de rollover convencional aproximadamente una semana antes del vencimiento. De ello se derivan dos cosas:

1. **Debe cambiar de contrato.** Quedarse en el contrato que expira le deja observando un mercado que se está apagando; tras el vencimiento el gráfico simplemente se detiene. En DeepCharts el cambio se realiza con **Options → Symbols Rollover** — vea [[symbol-rollover]].
2. **Los dos contratos cotizan a precios diferentes.** La brecha entre el contrato antiguo y el nuevo es un artefacto de precios (costes de mantenimiento, dividendos, intereses), no un movimiento del mercado. Los gráficos de historial largo unen los contratos como un *contrato continuo*, y el método de unión decide si esa brecha artificial se deja visible o se ajusta.

### Las matemáticas (opcional)

Aquí no hay matemáticas pesadas, solo una idea de ajuste: al unir meses de contrato, las series continuas "ajustadas" desplazan los precios del contrato más antiguo por la diferencia de precio en la fecha de rollover para que la unión sea perfecta. Las series no ajustadas conservan cada precio tal como se negoció realmente, a costa de un escalón visible en cada rollover. Ninguna es incorrecta: las series ajustadas son mejores para niveles de largo plazo y para la continuidad de los indicadores; las no ajustadas preservan los precios verdaderamente impresos.

## Véalo en DeepCharts

- [[chart-display-options]] — el interruptor **ETH Session** en el menú desplegable de las dos velas (habilitado por defecto) alterna un gráfico entre la sesión completa y solo RTH.
- [[price-chart-settings]] — el mismo interruptor como **RTH - only**, además de **CUSTOM TIME SESSION** para su propia ventana de sesión (p. ej., solo las dos primeras horas tras la apertura), **LINE START DAY** para una línea vertical en cada inicio de día de la bolsa, y **Continuous Contract** (None, Date, Volume, Adjusted Date, Adjusted Volume) para decidir cómo se une el historial entre meses de contrato.
- [[symbol-rollover]] — cómo pasar sus símbolos al nuevo mes de contrato.
- [[session-marker]] — un indicador que marca los límites de sesión en el gráfico.
- [[session-imbalance]] — análisis de flujo de órdenes acotado por sesión; vea su referencia de indicador.
- [[gaps-in-price]] — cómo distinguir un artefacto de contrato vencido de un problema real de datos.

## Ejemplo práctico

Supongamos que NQ cierra su sesión regular en 18.500,00 y luego sube lentamente durante la noche hasta 18.590,00 con volumen ligero (cifras ilustrativas). A las 09:30 hora de Nueva York la apertura RTH imprime 18.575,00 y llega un volumen intenso a dos bandas. En la primera hora, el precio rompe por debajo del mínimo nocturno de 18.540,00 y no puede recuperarlo. La lectura según la estructura de sesiones: el avance nocturno fue un anuncio hecho por una multitud escasa, y la multitud RTH completa lo rechazó: un hecho sustancialmente más bajista que la misma ruptura ocurriendo a las 3 de la madrugada. Un trader que usa la estructura de sesiones vigila ahora el cierre RTH previo en 18.500,00 como el siguiente nivel de decisión, y pondera cada prueba de nivel según *qué sesión construyó el nivel y qué sesión lo está probando*.

[SCREENSHOT: Gráfico intradía de NQ del ejemplo práctico con el rango nocturno sombreado, anotaciones en la apertura RTH, la extensión fallida del máximo nocturno, la ruptura del mínimo nocturno con un aumento de volumen, y el cierre RTH previo marcado como la siguiente referencia | dc-es-understanding-market-structure-sessions-02.png]

## Malinterpretaciones comunes

- **"Un movimiento es un movimiento, ocurra cuando ocurra."** Los movimientos nocturnos y los de RTH los construyen multitudes distintas con volúmenes distintos. Pondérelos en consecuencia.
- **"El día de trading empieza a medianoche."** Para los futuros de CME, el día de la bolsa comienza a las 18:00 hora de Nueva York de la tarde anterior. Las barras diarias y las herramientas ancladas al día se reinician ahí, no a las 00:00.
- **"Mi gráfico está roto: muestra velas diferentes a las de mi colega."** Compruebe primero la configuración **ETH Session** / **RTH - only**. Un gráfico solo RTH y un gráfico de sesión completa del mismo mercado discrepan legítimamente: barras distintas, máximos y mínimos distintos, perfiles distintos.
- **"Hay un hueco enorme: algo se ha desplomado."** Si el hueco se sitúa exactamente en un rollover trimestral, probablemente sea la diferencia de precio entre meses de contrato, no un evento de mercado. Un modo de contrato continuo Adjusted lo elimina; vea [[price-chart-settings]].
- **"Mi fuente de datos murió a las 17:30."** Para los instrumentos de CME esa es la pausa diaria de mantenimiento, no una avería. Los datos se reanudan a las 18:00 hora de Nueva York.

## Profundice

La estructura de sesiones es el escenario; la teoría de subastas es la obra. Lea [[understanding-auction-theory]] para ver cómo funcionan el equilibrio, el desequilibrio y la aceptación dentro de las sesiones y entre ellas, y [[understanding-volume-profile]] para las herramientas de perfil ancladas a la sesión que hacen visible la estructura. Cuando esté listo para mantener sus contratos al día en la práctica, [[symbol-rollover]] es la guía práctica. Los términos desconocidos están recogidos en el [[glossary]].

## Artículos relacionados

- [[chart-display-options]]
- [[price-chart-settings]]
- [[symbol-rollover]]
- [[understanding-auction-theory]]
- [[understanding-volume-profile]]
- [[glossary]]