---
title: "Recarga Profunda (Deep Reload)"
slug: "deep-reload"
category: "Deep Indicators"
subcategory: ""
type: "reference"
difficulty: "advanced"
time: "6 min read"
description: "Recarga Profunda (Deep Reload), el detector de liquidez fresca, escanea el libro de órdenes en tiempo real para encontrar los momentos en que aparece de repente nueva liquidez pasiva cerca del precio actual."
keywords: ["recarga profunda", "recarga profunda deepdom", "deepdom", "indicadores deep"]
source_hash: "f21e2864b2944ef2"
ai_translated: true
source_hash: "f21e2864b2944ef2"
---
Recarga Profunda (Deep Reload), el detector de liquidez fresca, escanea el libro de órdenes en tiempo real para encontrar los momentos en que *liquidez pasiva fresca* aparece de repente cerca del precio actual. En lugar de vigilar cada actualización del Level 2, obtiene bandas horizontales claras que muestran dónde se acaba de añadir nuevo tamaño en el bid (posible soporte) o en el ask (posible techo), ayudándole a ver cuándo participantes más grandes intervienen para defender un nivel o favorecer una ruptura.

[SCREENSHOT: Recarga Profunda — vista general (DeepDOM) | dd-es-deep-reload-01.png]

## Cómo configurar Recarga Profunda

Siga estos pasos para añadir el indicador a su gráfico:

Clic derecho en el gráfico -> **Indicators** (Indicadores)

Busque **Deep Reload** en la lista y haga clic en + para añadirlo.

Haga clic en el icono de configuración del indicador para abrir su ventana de configuración.

[SCREENSHOT: Recarga Profunda — Cómo configurar Recarga Profunda (DeepDOM) | dd-es-deep-reload-02.png]

## 1. Concepto: liquidez pasiva fresca

La liquidez pasiva es el volumen visible que permanece en el libro de órdenes en cada nivel de precio. Cuando un gran operador o algoritmo decide involucrarse, a menudo *añade tamaño cerca del precio actual* en lugar de perseguir el movimiento. Recarga Profunda se centra en estas adiciones: detecta cuándo una cantidad significativa de volumen nuevo aparece de repente en una banda estrecha de precios alrededor del mercado interior.

Esta liquidez fresca puede actuar como un amortiguador (bids apilándose por debajo del precio para sostenerlo) o como un techo (asks apilándose por encima del precio para frenar o revertir un rally). En muchos casos, el comportamiento está relacionado con órdenes iceberg o fraccionadas, en las que solo se muestra parte del tamaño real cada vez, pero el operador sigue re-añadiendo liquidez en la misma zona.

El objetivo de Recarga Profunda no es mostrar todos los cambios del libro, sino resaltar *solo aquellas recargas que superan sus umbrales de tamaño*, de modo que las áreas importantes sigan siendo visibles incluso con el gráfico alejado.

## 2. Configuración general

[SCREENSHOT: Recarga Profunda — 2. Configuración general (DeepDOM) | dd-es-deep-reload-03.png]

### 2.1 Value Type

Value type (Tipo de valor) controla cómo Recarga Profunda elige los umbrales de tamaño que definen una señal:

Automatic – los umbrales se derivan de las condiciones actuales del libro de órdenes, adaptándose a la profundidad y volatilidad típicas de cada instrumento.

Manual – le permite especificar usted mismo valores numéricos para *Total value* y *Pull value*.

### 2.2 Total Value

Total value (Valor total) define cuánto volumen *nuevo* debe aparecer en un área de precios antes de que se dibuje una banda de Recarga Profunda. El indicador suma todas las adiciones que califican en esa área durante un período corto; solo cuando el total supera este umbral se traza la zona.

Utilice valores más altos en mercados muy líquidos (ES, NQ) y valores más bajos en productos menos líquidos, de modo que las señales representen liquidez fresca verdaderamente significativa para ese instrumento.

### 2.3 Pull Value

Pull value (Valor de retirada) es el tamaño mínimo que debe *eliminarse o cambiarse* en el libro en un solo evento para que Recarga Profunda trate la secuencia como una recarga intencional y no como ruido aleatorio. Las microcancelaciones pequeñas por debajo de este valor se ignoran.

En la práctica, muchos patrones de recarga implican una combinación de volumen que se retira y luego se vuelve a añadir rápidamente en los mismos niveles o en niveles vecinos. Pull value ayuda al algoritmo a distinguir estas secuencias de las fluctuaciones ordinarias del libro.

### 2.4 Number of Levels

Number of levels (Número de niveles) indica a Recarga Profunda cuán ancha es la banda alrededor del precio que debe monitorear. Por ejemplo, con un valor de 10 el indicador rastrea la liquidez fresca en los 10 mejores bids y los 10 mejores asks, y agrega los eventos que califican en una única zona cuando ocurren dentro de esa ventana.

Los valores más pequeños enfocan el detector muy cerca del mercado interior; los valores más grandes capturan liquidez más profunda que aún puede ser relevante cuando opera con stops más amplios

## 3. Configuración de trazado (Plot Settings)

[SCREENSHOT: Recarga Profunda — 3. Configuración de trazado (DeepDOM) | dd-es-deep-reload-04.png]

La sección Configuración de trazado (Plot Settings) define cómo aparecen visualmente las zonas de liquidez fresca en el gráfico.

### 3.1 Ask / Bid Color

Elija colores separados para las zonas de recarga del Ask y del Bid. De forma predeterminada, DeepDom usa morado para la liquidez fresca del lado ask (posible resistencia) y verde para la liquidez fresca del lado bid (posible soporte).

### 3.2 Opacity

Opacity (Opacidad) establece la transparencia de las bandas horizontales. Una opacidad menor las hace sutiles cuando ya tiene muchas superposiciones; una opacidad mayor enfatiza las recargas como niveles de decisión principales.

### 3.3 Plot Min Bar Width

Plot min bar width impone un ancho horizontal mínimo para que cada banda siga siendo visible incluso al alejar el gráfico

### 3.4 Plot Max Ticks

Plot max ticks limita la altura vertical de cada zona en ticks de precio. Cuando se detecta liquidez fresca en varios niveles adyacentes, Recarga Profunda los agrupa en una sola banda hasta este rango máximo, de modo que pueda ver de un vistazo toda el área defendida.

## 4. Filtro de tendencia

[SCREENSHOT: Recarga Profunda — 4. Filtro de tendencia (DeepDOM) | dd-es-deep-reload-05.png]

El Filtro de tendencia (Trend Filter) opcional restringe las señales a aquellas que se alinean con una tendencia de corto plazo durante un período retrospectivo configurable.

Enable trend filter (Habilitar filtro de tendencia) – activa o desactiva este comportamiento.

Trend filter lookback (minutes) – establece cuántos minutos de acción de precio reciente se usan para estimar la dirección de la tendencia (p. ej., mediante una media móvil o una comparación con el VWAP).

Con el filtro habilitado, puede optar por centrarse solo en la liquidez fresca que *respalda* el sesgo actual (p. ej., recargas de bid en un movimiento alcista, recargas de ask en un movimiento bajista) e ignorar las bandas contra tendencia.

## 5. Alertas

[SCREENSHOT: Recarga Profunda — 5. Alertas (DeepDOM) | dd-es-deep-reload-06.png]

También tiene la posibilidad de configurar una alerta para las señales del indicador

## 6. Usos prácticos en el trading

### 6.1 Detección de niveles defendidos

Cuando Recarga Profunda dibuja bandas verdes repetidas justo por debajo del precio, sugiere que los compradores están interviniendo con nueva liquidez pasiva para defender esa área. Muchos operadores usan estas zonas como niveles de referencia para entradas largas con un riesgo ajustado justo más allá de la banda.

### 6.2 Detección de absorción cerca de máximos o mínimos

Las bandas moradas que se forman alrededor de los máximos recientes indican liquidez fresca en el ask absorbiendo a los compradores agresivos. Si el precio tiene dificultades para atravesar a pesar de un fuerte flujo comprador, puede señalar un posible agotamiento y una posible reversión.

### 6.3 Respaldo de rupturas

En las rupturas, las bandas que se forman *detrás* del movimiento (bids recargando justo por debajo de una ruptura alcista o asks recargando justo por encima de una ruptura bajista) muestran que los actores más grandes están ayudando a sostener el nuevo rango en lugar de operar en su contra. Estas zonas suelen convertirse en entradas útiles en los retrocesos.

## 7. Buenas prácticas

Ajuste por instrumento: comience con el tipo de valor Automatic, observe la frecuencia típica de las bandas y luego cambie a umbrales manuales si necesita más o menos señales.

Combine con otras herramientas de DeepDom: alinee las zonas de Recarga Profunda con el CVD y Deep Trades para construir una imagen completa de la participación pasiva frente a la agresiva.

Evite depender en exceso de bandas individuales: trate las zonas de liquidez fresca como contexto y confirmación, no como desencadenantes de operaciones por sí solas.

### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre.

Cuando se ponga en contacto, incluya:

Una captura de pantalla del problema

Una breve descripción de lo que intentaba hacer

Ticket de soporte (respuesta más rápida): visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico: escríbanos a support@deepcharts.com. Tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.