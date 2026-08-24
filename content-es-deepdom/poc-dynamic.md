---
title: "POC Dinámico"
slug: "poc-dynamic"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "El indicador POC Dinámico (POC Dynamic) muestra el Punto de Control (POC), el nivel de precio donde se ha negociado el mayor volumen, calculado de forma continua sobre los últimos n minutos."
keywords: ["poc dinámico", "poc dinámico deepdom", "deepdom", "indicadores"]
source_hash: "d67edf6385dd5f84"
ai_translated: true
source_hash: "d67edf6385dd5f84"
---
El indicador POC Dinámico (POC Dynamic) muestra el Punto de Control (POC), el nivel de precio donde se ha negociado el mayor volumen, calculado de forma continua sobre los últimos n minutos. Además de la propia línea del POC, le permite trazar bandas de desviación estándar por encima y por debajo de ella, ayudándole a contextualizar cuánto se está alejando el precio del nivel de volumen más activo en tiempo real.

[SCREENSHOT: POC Dinámico — vista general (DeepDOM) | dd-es-poc-dynamic-01.png]

¿Qué es el Punto de Control (POC)? Imagine toda la actividad de trading ocurrida durante un período de tiempo distribuida a lo largo de distintos niveles de precio. El POC es simplemente el nivel de precio donde tuvo lugar la mayor cantidad de compras y ventas. Actúa como un imán: el precio tiende a gravitar de vuelta hacia él porque representa la zona donde el mercado encontró el mayor acuerdo entre compradores y vendedores. Los traders observan de cerca el POC como punto de referencia clave del valor justo.

### Cómo añadir POC Dinámico a su gráfico

Haga clic en el icono **Indicators** en el gráfico

Busque POC Dynamic en la lista y haga clic en + para añadirlo

Haga clic en el icono de configuración del indicador para abrir su ventana de configuración

[SCREENSHOT: POC Dinámico — Cómo añadir POC Dinámico a su gráfico (DeepDOM) | dd-es-poc-dynamic-02.png]

## Configuración general

Valor de período (Period Value): define el número de minutos utilizados para calcular el POC. Por ejemplo, establecerlo en 5 significa que DeepDom calculará continuamente el POC basándose en los últimos 5 minutos de datos de volumen, actualizándolo en tiempo real a medida que llegan nuevos datos. Un período más corto hace que el POC sea más reactivo a la actividad reciente, mientras que un período más largo ofrece una visión más amplia y estable de dónde se ha concentrado el volumen.

[SCREENSHOT: POC Dinámico — Configuración general (DeepDOM) | dd-es-poc-dynamic-03.png]

## Configuración de trazado (Plot Settings)

Define la apariencia visual de la línea del POC:

Establezca el color de la línea del POC

Establezca el grosor de la línea del POC

[SCREENSHOT: POC Dinámico — Configuración de trazado (DeepDOM) | dd-es-poc-dynamic-04.png]

[SCREENSHOT: POC Dinámico — Configuración de trazado (DeepDOM) | dd-es-poc-dynamic-05.png]

## Configuración de envolventes (Envelope Settings)

Define la apariencia de las bandas de desviación estándar trazadas alrededor del POC:

Establezca el grosor de las bandas

Establezca el estilo de línea de las bandas: por ejemplo, sólida, discontinua o punteada

¿Qué son las bandas de desviación estándar? Las bandas de desviación estándar son líneas trazadas por encima y por debajo del POC que muestran cuánto se está alejando el precio del nivel de volumen más activo. Piense en ellas como zonas de distancia respecto al valor justo. Cuando el precio está dentro de la primera banda, se encuentra relativamente cerca del valor justo. Cuando el precio alcanza la segunda o la tercera banda, se está adentrando en territorio estadísticamente menos común, lo que puede señalar que el precio está sobreextendido y podría estar próximo a un retroceso hacia el POC.

[SCREENSHOT: POC Dinámico — Configuración de envolventes (DeepDOM) | dd-es-poc-dynamic-06.png]

[SCREENSHOT: POC Dinámico — Configuración de envolventes (DeepDOM) | dd-es-poc-dynamic-07.png]

## Primera, segunda y tercera banda

Cada una de las tres bandas de desviación estándar puede configurarse individualmente:

Habilite o deshabilite cada banda de forma independiente

Establezca el valor de desviación estándar de cada banda

Establezca un color personalizado para cada banda

Puede optar por mostrar solo las bandas relevantes para su análisis: por ejemplo, habilitando solo la primera banda y dejando desactivadas la segunda y la tercera. Esto mantiene el gráfico limpio y centrado en lo que más importa para su estilo de trading.

[SCREENSHOT: POC Dinámico — Primera, segunda y tercera banda (DeepDOM) | dd-es-poc-dynamic-08.png]

[SCREENSHOT: POC Dinámico — Primera, segunda y tercera banda (DeepDOM) | dd-es-poc-dynamic-09.png]

## Conclusión

El indicador POC Dinámico le ofrece una visión continuamente actualizada de dónde ha concentrado el mercado el mayor volumen durante una ventana temporal móvil. Combinado con las bandas de desviación estándar, proporciona un marco dinámico para identificar el valor justo y detectar cuándo el precio se está adentrando en territorio extendido en relación con la actividad de volumen reciente.

### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre.

Cuando se ponga en contacto, incluya:

Una captura de pantalla del problema

Una breve descripción de lo que intentaba hacer

Ticket de soporte (respuesta más rápida): visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico: escríbanos a support@deepcharts.com. Tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.