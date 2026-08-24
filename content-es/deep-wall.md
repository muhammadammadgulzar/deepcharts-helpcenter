---
title: "Deep Wall"
slug: "deep-wall"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "3 min read"
description: "Detector exclusivo para ES de muros de órdenes pasivas que absorben órdenes agresivas y provocan rechazo del precio: la firma de las órdenes iceberg ocultas."
keywords: ["deep wall", "detector de iceberg", "muro de órdenes", "indicador ES", "muro de liquidez", "deep wall sin señales", "deep wall nunca se activa"]
source_hash: "fb98a32afa58fc99"
ai_translated: true
source_hash: "fb98a32afa58fc99"
---
Deep Wall es un indicador especializado desarrollado por el equipo de DeepCharts específicamente para gráficos de ES. Monitorea el comportamiento del precio en niveles clave y señala los momentos en que un muro de órdenes pasivas absorbe las órdenes agresivas entrantes y provoca un rechazo del precio: la firma clásica de una orden iceberg oculta.

Es deliberadamente una herramienta de baja frecuencia. Las señales aparecen solo unas pocas veces por semana o incluso por mes, sobre todo en entornos de baja liquidez como la sesión de Londres. Si lleva días en silencio, es un comportamiento normal, no un fallo.

Un muro es simplemente liquidez pasiva desproporcionada en reposo en el libro de órdenes. Pase el cursor por la escalera en vivo a continuación para ver cómo los límites de venta se apilan por encima del precio y los límites de compra por debajo: las órdenes en reposo de las que está hecho un muro.

[WIDGET: dom-ladder]

## Qué es

Deep Wall responde a una sola pregunta: "¿defendió este precio un gran participante pasivo?" Cuando las órdenes agresivas golpean repetidamente un nivel y la liquidez en reposo que hay allí sigue absorbiéndolas hasta que el precio rechaza, Deep Wall marca el evento. Como ese patrón suele provenir de órdenes iceberg (órdenes grandes mostradas al mercado en pequeñas porciones), la señal apunta a liquidez institucional oculta.

> **Advertencia:** Deep Wall está construido específicamente para gráficos de **ES**. Aplicarlo a otros instrumentos no dará señales significativas.

[SCREENSHOT: Gráfico de ES con una detección de Deep Wall visible: el nivel marcado donde el precio golpeó repetidamente la liquidez en reposo y rechazó, con la señal de Deep Wall resaltada | dc-es-deep-wall-01.png]

## Cuándo usarlo

- Opera ES y quiere alertas de actividad iceberg oculta sin vigilar el DOM toda la sesión.
- Busca puntos de rechazo/reversión de alta probabilidad respaldados por absorción pasiva real.
- Opera en ventanas de baja liquidez (por ejemplo, la sesión de Londres), donde el comportamiento de los muros es más visible.
- Quiere una capa de confirmación independiente sobre herramientas como [[deep-trades]] o el DOM.

## Inicio rápido

1. Abra un gráfico de **ES**.
2. Abra la **Indicator List** (lista de indicadores), localice **Deep Wall** y haga clic en **+** para añadirlo.
3. Haga clic en el icono de **Settings** (configuración) junto a Deep Wall.
4. Configure una alerta para no perderse las detecciones, que son raras: vaya a **Options → Settings → Add Alert** y configure el **Alert Sound** y el **Message Popup** para los eventos de Deep Wall.

[SCREENSHOT: Diálogo de configuración de Deep Wall junto con la pantalla Options → Settings → Add Alert mostrando una alerta configurada con Alert Sound y Message Popup habilitados para Deep Wall | dc-es-deep-wall-02.png]

## Cómo leerlo

Una detección de Deep Wall significa que el flujo agresivo se topó con liquidez pasiva que se negó a romperse: absorción seguida de rechazo. Trate el nivel marcado como defendido:

- **Operaciones de rechazo**: la propia detección aboga por un movimiento alejándose del muro; muchos traders la usan como punto de reversión o de operar en contra.
- **Memoria del nivel**: un nivel que un gran participante defendió una vez suele volver a importar en un retest.
- **El fallo también es información**: si el precio rompe después limpiamente un muro detectado, el defensor se ha ido, y esa ruptura lleva su propia señal.

Como las señales son raras, cada una tiene peso. No diluya la herramienta esperando varias por sesión.

## Referencia de configuración

La lógica de detección de Deep Wall está preconfigurada; la configuración visible para el usuario se centra en las notificaciones.

| Configuración | Qué hace |
|---|---|
| **Alert Sound** | Reproduce un sonido cuando se activa un evento de Deep Wall. Se configura mediante **Options → Settings → Add Alert**. |
| **Message Popup** | Muestra un mensaje emergente en la detección para que el evento no pase desapercibido. |

## Consejos y errores comunes

- **"Nunca se activa" suele ser normal.** Unas pocas señales por semana o por mes es el diseño. La paciencia forma parte de la herramienta.
- **Compruebe primero el símbolo.** Si no ve nada durante mucho tiempo, confirme que el indicador está aplicado a un gráfico de ES: es específico de ES.
- **Configure siempre la alerta.** Con señales tan infrecuentes, un gráfico sin vigilar significa detecciones perdidas.
- **Confirme con el contexto.** Combine una detección con el contexto del flujo de órdenes (la cinta, las lecturas de absorción de [[deep-stats]] o la estructura footprint de [[deep-print]]) antes de comprometerse con una operación.

## Artículos relacionados

- [[understanding-icebergs-absorption]]
- [[orderflow-101]]
- [[deep-trades]]
- [[big-trades]]
- [[different-types-of-input]]
- [[indicator-layout]]