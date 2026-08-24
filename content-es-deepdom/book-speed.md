---
title: "Velocidad del libro"
slug: "book-speed"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "El indicador Book Speed muestra histogramas en la parte inferior del gráfico que indican cuántos niveles del libro se consumen cada n segundos."
keywords: ["velocidad del libro", "book speed deepdom", "deepdom", "indicadores"]
source_hash: "c4a9ba78ee7bad8e"
ai_translated: true
source_hash: "c4a9ba78ee7bad8e"
---
El indicador Velocidad del libro (Book Speed) muestra histogramas en la parte inferior del gráfico que indican cuántos niveles del libro se consumen cada n segundos. Esto le permite visualizar el ritmo al que se absorbe la liquidez tanto en el lado del Bid como del Ask, y compararlo con el movimiento del precio para identificar posibles divergencias entre el flujo de órdenes y la dirección del precio.

[SCREENSHOT: Velocidad del libro — visión general (DeepDOM) | dd-es-book-speed-01.png]

¿Qué es un nivel del libro? Piense en el libro de órdenes como una escalera de precios. Cada "peldaño" de esa escalera es un nivel del libro: representa un precio donde compradores o vendedores han colocado sus órdenes de límite. Cuando llegan órdenes a mercado y barren esas órdenes de límite, el nivel se "consume". Cuanto más rápido se consumen los niveles, más agresiva es la presión compradora o vendedora en el mercado.

### Cómo añadir Velocidad del libro a su gráfico

Haga clic con el botón derecho en el gráfico y seleccione **Indicators**.

Busque el indicador deseado y añádalo a su espacio de trabajo haciendo clic en el botón "+".

Abra el panel de configuración del indicador, personalice los parámetros según sus preferencias y confirme los cambios haciendo clic en **Save**.

[SCREENSHOT: Velocidad del libro — Cómo añadir Velocidad del libro a su gráfico (DeepDOM) | dd-es-book-speed-02.png]

## Configuración general

**Parameter Mode** Define cómo mide el indicador la actividad del libro. Puede elegir entre:

Seconds: mide cuántos niveles del libro se consumen dentro de un número determinado de segundos. Este es el modo más directo: simplemente define una ventana de tiempo y el indicador cuenta cuánta liquidez fue absorbida durante ese período

[SCREENSHOT: Velocidad del libro — Configuración general (DeepDOM) | dd-es-book-speed-03.png]

Tick Reversal: mide el consumo basándose en las reversiones de ticks del precio. En lugar de usar el tiempo, este modo inicia una nueva medición cada vez que el precio revierte un número definido de ticks. Es útil para traders que prefieren analizar el mercado según el movimiento del precio en lugar de intervalos de tiempo fijos

[SCREENSHOT: Velocidad del libro — Configuración general (DeepDOM) | dd-es-book-speed-04.png]

**Parameter Value** Establece el valor numérico para el parámetro elegido arriba. Por ejemplo, si seleccionó Seconds, introducir 10 aquí significa que el indicador calcula los niveles del libro consumidos cada 10 segundos. Si seleccionó Tick Reversal, este valor define cuántos ticks de reversión se necesitan para iniciar una nueva medición.

[SCREENSHOT: Velocidad del libro — Configuración general (DeepDOM) | dd-es-book-speed-05.png]

## Configuración de trazado (Plot Settings)

Le permite personalizar la apariencia de los histogramas:

Establezca el color del histograma del Bid

Establezca el color del histograma del Ask

Establezca el grosor de línea (Line Width) de ambos histogramas

[SCREENSHOT: Velocidad del libro — Configuración de trazado (DeepDOM) | dd-es-book-speed-06.png]

[SCREENSHOT: Velocidad del libro — Configuración de trazado (DeepDOM) | dd-es-book-speed-07.png]

## Promedio

Habilita una línea de media móvil sobre el histograma de Book Speed tanto para el Bid como para el Ask.

¿Qué es una media móvil aquí? Una media móvil suaviza las barras del histograma calculando un promedio rodante sobre un número definido de períodos. En lugar de ver cada pico y caída en el consumo del libro, obtiene una línea más suave que muestra la tendencia general, lo que facilita mucho detectar si la actividad del libro realmente se está acelerando o desacelerando con el tiempo.

Personalice el color de Avg Bid y Avg Ask

Avg length: una longitud más larga da una línea más suave, una longitud más corta reacciona más rápido a los cambios

[SCREENSHOT: Velocidad del libro — Promedio (DeepDOM) | dd-es-book-speed-08.png]

[SCREENSHOT: Velocidad del libro — Promedio (DeepDOM) | dd-es-book-speed-09.png]

## Marcador

Habilita una línea de marcador en el histograma para definir un nivel de umbral.

[SCREENSHOT: Velocidad del libro — Marcador (DeepDOM) | dd-es-book-speed-10.png]

¿Qué es un marcador? Un marcador es simplemente una línea de referencia horizontal que usted dibuja en un valor específico del histograma. Usted decide de antemano qué nivel de consumo del libro es significativo para usted, y el marcador lo hace visible al instante cada vez que el histograma cruza ese nivel. Piense en él como un cable trampa: cuando la actividad del libro lo supera, sabe que algo notable está ocurriendo.

Habilite o deshabilite el marcador

Establezca un color personalizado para el marcador del Bid y del Ask

Establezca el valor del marcador: el nivel en el que aparece la línea del marcador

[SCREENSHOT: Velocidad del libro — Marcador (DeepDOM) | dd-es-book-speed-11.png]

## Conclusión

El indicador Velocidad del libro es una herramienta potente para leer la agresividad de los participantes del mercado en tiempo real. Al comparar la velocidad de consumo del libro con el movimiento del precio, puede detectar divergencias que pueden señalar una posible reversión o continuación antes de que sea visible solo en el precio.

### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre.

Cuando se ponga en contacto, incluya:

Una captura de pantalla del problema

Una breve descripción de lo que intentaba hacer

Ticket de soporte (respuesta más rápida) Visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico Escríbanos a support@deepcharts.com; tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.