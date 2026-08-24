---
title: "Iceberg Profundo (Deep Iceberg)"
slug: "deep-iceberg"
category: "Deep Indicators"
subcategory: ""
type: "reference"
difficulty: "advanced"
time: "6 min read"
description: "El indicador Iceberg Profundo (Deep Iceberg) resalta la liquidez institucional oculta detectando órdenes iceberg: grandes órdenes de límite en las que solo una pequeña porción es visible en el DOM en cada momento, mientras el resto permanece oculto."
keywords: ["iceberg profundo detector de iceberg", "iceberg profundo deepdom", "deepdom", "indicadores deep"]
source_hash: "91a7fce0f5a60a16"
ai_translated: true
source_hash: "91a7fce0f5a60a16"
---
El indicador Iceberg Profundo (Deep Iceberg) resalta la liquidez institucional oculta detectando órdenes iceberg: grandes órdenes de límite en las que solo una pequeña porción es visible en el DOM en cada momento, mientras el resto permanece oculto.

[SCREENSHOT: Iceberg Profundo (Deep Iceberg) — vista general (DeepDOM) | dd-es-deep-iceberg-01.png]

## 1. ¿Qué es una orden iceberg?

En bolsas de futuros como el CME, una orden iceberg es una orden de límite que especifica un tamaño total y un tamaño visible más pequeño (también llamado peak o display quantity).

Solo la porción visible aparece en el libro de órdenes como una orden de límite normal.

Cuando esa porción visible se ejecuta, el algoritmo de iceberg la renueva automáticamente a partir de la cantidad oculta, manteniendo el mismo ID de la orden pero con la prioridad de cola actualizada.

Este proceso se repite hasta que todo el tamaño total se ejecuta o la cantidad oculta restante se cancela.

El efecto en el DOM es que una pequeña orden pasiva parece *rellenarse una y otra vez* exactamente al mismo precio, aunque en realidad se estén negociando allí muchos más contratos de los que el tamaño mostrado sugeriría en una vela footprint.

## 2. Cómo Deep Iceberg detecta el tamaño oculto

Deep Iceberg utiliza datos MBO (Market By Order) para rastrear la reposición repetida de órdenes pasivas al mismo precio e identificar dónde se ha negociado mucho más volumen del que fue visible en el libro.

Monitorea el ID de la orden: todas esas pequeñas órdenes pasivas que siguen reapareciendo tienen algo idéntico, el ID pasivo, y Deep Iceberg rastrea ese ID.

Le muestra el total de contratos y la orden de límite visible más alta que estuvo visible en el libro durante la vida del iceberg.

Esto hace posible ver dónde un gran participante está acumulando o distribuyendo un tamaño significativo mientras mantiene la mayor parte de su interés oculto a la vista habitual del DOM.

## 3. Visualización en el gráfico

Cada iceberg detectado se dibuja como un marcador en el precio donde se negoció la liquidez oculta. La etiqueta junto al marcador muestra dos valores:

[SCREENSHOT: Iceberg Profundo (Deep Iceberg) — 3. Visualización en el gráfico (DeepDOM) | dd-es-deep-iceberg-02.png]

Volumen total ejecutado del iceberg – el total de contratos negociados como parte del iceberg en ese precio (por ejemplo, 1.000 contratos).

Tamaño visible máximo – la mayor porción mostrada que estuvo visible en el libro durante la vida de ese iceberg (por ejemplo, 10 contratos).

Cuando habilita las líneas de iceberg activo, se dibuja una línea horizontal a través del marcador mientras el iceberg siga descansando en el libro y no se haya ejecutado o cancelado por completo. Esto crea una banda visual de "soporte" o "resistencia" que muestra dónde un gran actor sigue presente.

## 4. Configuración de datos

[SCREENSHOT: Iceberg Profundo (Deep Iceberg) — 4. Configuración de datos (DeepDOM) | dd-es-deep-iceberg-03.png]

El grupo Configuración de datos (Data Settings) le permite controlar qué eventos de iceberg se muestran y cuán sensible es el detector:

Filter min / Filter max – filtros inferior y superior sobre el tamaño de los icebergs detectados. Utilícelos para ignorar icebergs muy pequeños o para centrarse solo en eventos excepcionalmente grandes.

Iceberg timeout seconds – cuánto tiempo Deep Iceberg sigue tratando la actividad continua al mismo precio como parte del mismo iceberg. Si no se produce una nueva reposición dentro de este período, el iceberg se considera terminado.

## 5. Configuración de trazado (Plot Settings)

[SCREENSHOT: Iceberg Profundo (Deep Iceberg) — 5. Configuración de trazado (DeepDOM) | dd-es-deep-iceberg-04.png]

La sección Configuración de trazado (Plot Settings) controla cómo aparecen los marcadores de iceberg en el gráfico:

Marker (Marcador) – elija la forma utilizada para cada iceberg detectado: *Circle*, *Square*, *Diamond*, *Triangle* o *Text*.

Size unit (Unidad de tamaño) –

Automatic – el tamaño del marcador se escala automáticamente según el volumen del iceberg.

Tick – el tamaño del marcador se define en ticks de precio, de modo que se mantiene consistente en relación con la escala de precios.

Standard Dev. – controla cuánto debe alejarse un iceberg del tamaño promedio para resaltarse con mayor fuerza. Valores más altos hacen que el trazado sea más selectivo.

Opacity (Opacidad) – transparencia de los marcadores de iceberg.

Ask color / Bid color – colores utilizados para los icebergs del lado vendedor y del lado comprador.

## 6. Icebergs activos

[SCREENSHOT: Iceberg Profundo (Deep Iceberg) — 6. Icebergs activos (DeepDOM) | dd-es-deep-iceberg-05.png]

La sección Icebergs activos (Active Icebergs) gestiona las líneas horizontales para los icebergs que todavía descansan en el libro:

Enable line (Habilitar línea) – activa o desactiva el dibujo de la línea de iceberg activo.

Line width (Ancho de línea) – grosor de la línea horizontal.

Line style (Estilo de línea) – elija entre los estilos *Solid*, *Dash*, *Dot*, *Dash dot* o *Dash dot dot*.

Line remove mode (Modo de eliminación de línea) – determina qué ocurre cuando el iceberg ya no está activo:

Stop – la línea deja de extenderse pero permanece en el gráfico en su última posición.

Disappear – la línea se elimina una vez que el iceberg se ha ejecutado o cancelado por completo.

Una línea continua le indica que el gran participante sigue cotizando a ese precio. Cuando la línea se detiene o desaparece, esa liquidez se ha negociado por completo o se ha retirado.

## 7. Configuración de trazado (Plot Settings)

[SCREENSHOT: Iceberg Profundo (Deep Iceberg) — 7. Configuración de trazado (DeepDOM) | dd-es-deep-iceberg-06.png]

Minimum size / Maximum size – establecen el tamaño de marcador más pequeño y más grande que Deep Iceberg utilizará al dibujar eventos de iceberg. Use un rango estrecho si prefiere un aspecto más uniforme, o un rango más amplio para que los icebergs muy grandes destaquen con marcadores más grandes.

## 8. Configuración de texto

[SCREENSHOT: Iceberg Profundo (Deep Iceberg) — 8. Configuración de texto (DeepDOM) | dd-es-deep-iceberg-07.png]

Utilice el grupo Configuración de texto (Text Settings) para controlar las etiquetas adjuntas a los marcadores de iceberg:

Plot only if inside – cuando está habilitado, las etiquetas de texto solo se dibujan cuando caben dentro de la vista actual del gráfico, lo que ayuda a evitar etiquetas superpuestas.

Text size (Tamaño de texto) – tamaño de fuente de las etiquetas de iceberg.

Text color (Color de texto) – color utilizado para el texto, independiente del color del marcador.

El formato de la etiqueta está diseñado para que la estructura del iceberg sea fácil de leer de un vistazo, mostrando normalmente el tamaño total ejecutado y la porción visible máxima.

## 9. Alerta de Iceberg

[SCREENSHOT: Iceberg Profundo (Deep Iceberg) — 9. Alerta de Iceberg (DeepDOM) | dd-es-deep-iceberg-08.png]

La sección Alerta de Iceberg (Alert Iceberg) le permite activar alertas cuando se detectan icebergs especialmente grandes:

Enable (Habilitar) – activa o desactiva las alertas de iceberg.

Threshold (Umbral) – volumen mínimo de iceberg detectado necesario para disparar una alerta. Establezca este valor alto para ser notificado solo de las órdenes ocultas más significativas del mercado.

Las alertas pueden combinarse con los marcadores visuales para que no se pierda eventos clave de liquidez oculta incluso cuando esté concentrado en otra parte del gráfico.

## 10. Casos de uso prácticos

Iceberg Profundo es particularmente útil para detectar dónde un gran actor está absorbiendo órdenes a mercado o alimentando el mercado con una oferta oculta.

Se requiere una fuente de datos MBO para usar Iceberg en DeepDom

Icebergs repetidos del lado comprador cerca de los mínimos suelen señalar una acumulación sigilosa y una posible base.

Icebergs del lado vendedor apilados por encima del precio pueden indicar distribución o un vendedor oculto defendiendo un nivel.

Cuando una línea de iceberg importante finalmente desaparece y el precio la atraviesa, a menudo marca un cambio significativo en el control.

### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre.

Cuando se ponga en contacto, incluya:

Una captura de pantalla del problema

Una breve descripción de lo que intentaba hacer

Ticket de soporte (respuesta más rápida): visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico: escríbanos a support@deepcharts.com. Tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.