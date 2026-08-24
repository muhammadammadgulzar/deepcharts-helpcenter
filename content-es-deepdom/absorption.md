---
title: "Absorción"
slug: "absorption"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "El indicador Absorción identifica áreas de precio donde el mercado muestra una fuerte capacidad para absorber órdenes de compra o de venta. Esto sugiere la presencia de liquidez significativa que está ralentizando o deteniendo temporalmente el movimiento del precio."
keywords: ["absorción", "absorción deepdom", "deepdom", "indicadores"]
source_hash: "7407259b45f61773"
ai_translated: true
source_hash: "7407259b45f61773"
---
El indicador Absorción (Absorption) identifica áreas de precio donde el mercado muestra una fuerte capacidad para absorber órdenes de compra o de venta. Esto sugiere la presencia de liquidez significativa que está ralentizando o deteniendo temporalmente el movimiento del precio. Aunque la absorción no siempre conduce a una reversión, proporciona información valiosa sobre dónde se concentra la liquidez y cómo puede reaccionar el mercado en esos niveles.

## ¿Qué es la absorción?

Imagine que en un nivel de precio determinado hay numerosas órdenes de venta. Si se ejecutan varias órdenes de compra grandes y el precio aun así permanece sin cambios en ese nivel, esto podría indicar absorción: los vendedores están absorbiendo la presión compradora sin permitir que el precio suba.

[SCREENSHOT: Absorción — ¿Qué es la absorción? (DeepDOM) | dd-es-absorption-01.png]

Piense en ello como una esponja. El lado vendedor está empapando toda la presión compradora entrante, impidiendo que el precio suba. Cuanta más compra se absorbe sin que el precio se mueva, más fuerte es la presencia de vendedores en ese nivel.

Es importante señalar que la absorción no siempre bloquea el precio en su sitio. En algunos casos, tras la absorción inicial, el precio puede continuar en su dirección original. Al combinar el indicador Absorción con el análisis del DOM y de Time & Sales, puede comprender mejor la participación de los traders y su influencia potencial sobre el precio en esos niveles.

El indicador Absorción de DeepDom resalta estas situaciones directamente en el gráfico, facilitando su detección en tiempo real.

### Cómo configurar el indicador Absorción

Haga clic con el botón derecho en el gráfico y seleccione **Indicators**.

Busque el indicador deseado y añádalo a su espacio de trabajo haciendo clic en el botón "+".

Abra el panel de configuración del indicador, personalice los parámetros según sus preferencias y confirme los cambios haciendo clic en **Save**.

[SCREENSHOT: Absorción — Cómo configurar el indicador Absorción (DeepDOM) | dd-es-absorption-02.png]

## Configuración general

1. **Max Tick** Establece el número máximo de ticks durante el cual un área de absorción se considera válida. Si el precio se mueve más allá de este número de ticks, el área ya no se tratará como una zona de absorción activa.

En términos simples: si el precio se aleja demasiado de donde se detectó la absorción, el evento ya no se considera relevante y el indicador deja de marcarlo.

[SCREENSHOT: Absorción — Configuración general (DeepDOM) | dd-es-absorption-03.png]

Ejemplos - Max Tick - 1

[SCREENSHOT: Absorción — Configuración general (DeepDOM) | dd-es-absorption-04.png]

Max Tick - 15

[SCREENSHOT: Absorción — Configuración general (DeepDOM) | dd-es-absorption-05.png]

2. **Max Orders Number** Establece el número máximo de órdenes utilizado en el cálculo de la absorción. Esto determina el peso del trader o traders involucrados en la respuesta del mercado en ese nivel.

Esto le ayuda a centrarse en eventos de absorción que involucran un número realista de órdenes, filtrando situaciones donde un número anormalmente alto de órdenes pequeñas podría provocar una lectura falsa.

[SCREENSHOT: Absorción — Configuración general (DeepDOM) | dd-es-absorption-06.png]

3. **Max MS** Establece la duración máxima en milisegundos para que se detecte un evento de absorción. Cuanto más rápido ocurre la absorción en el mercado, más probable es que represente una respuesta significativa en ese nivel de precio.

En términos simples: si la absorción ocurre muy rápidamente, es más probable que sea una acción deliberada y significativa de un participante grande que ruido de mercado aleatorio.

[SCREENSHOT: Absorción — Configuración general (DeepDOM) | dd-es-absorption-07.png]

Ejemplos - Max MS - 2050

[SCREENSHOT: Absorción — Configuración general (DeepDOM) | dd-es-absorption-08.png]

Max MS - 10 Como puede ver, algunas de las órdenes se han filtrado cuando añadimos un filtro de Max MS - 10

[SCREENSHOT: Absorción — Configuración general (DeepDOM) | dd-es-absorption-09.png]

4. **Min. Absorption Vol.** Establece el volumen mínimo requerido para que un área se considere absorbida. Esto filtra las absorciones menores y se centra solo en las que cumplen un umbral de volumen significativo. Establecer un valor más bajo también puede ser útil para scalpers de alta frecuencia que buscan pequeñas señales de absorción basadas en apenas unos pocos ticks de respuesta.

[SCREENSHOT: Absorción — Configuración general (DeepDOM) | dd-es-absorption-10.png]

Ejemplos - Min. Absorption Vol. - 20

[SCREENSHOT: Absorción — Configuración general (DeepDOM) | dd-es-absorption-11.png]

Min. Absorption Vol. - 50 Como puede ver, algunas de las órdenes se han filtrado cuando añadimos un filtro de Min. Absorption Vol. - 50

[SCREENSHOT: Absorción — Configuración general (DeepDOM) | dd-es-absorption-12.png]

## Configuración de trazado (Plot Settings)

1. **Display Mode** Define cómo se representa la absorción en el gráfico. Puede elegir entre Square, Diamond y Text

[SCREENSHOT: Absorción — Configuración de trazado (DeepDOM) | dd-es-absorption-13.png]

Text: muestra la absorción como una etiqueta de texto en el nivel de precio correspondiente

[SCREENSHOT: Absorción — Configuración de trazado (DeepDOM) | dd-es-absorption-14.png]

Diamond: muestra la absorción como un marcador con forma de diamante

[SCREENSHOT: Absorción — Configuración de trazado (DeepDOM) | dd-es-absorption-15.png]

Square: muestra la absorción como un marcador con forma de cuadrado

[SCREENSHOT: Absorción — Configuración de trazado (DeepDOM) | dd-es-absorption-16.png]

2. **Ask Color** Establece el color utilizado para resaltar la absorción en el lado del Ask: donde la presión compradora está siendo absorbida por los vendedores.

[SCREENSHOT: Absorción — Configuración de trazado (DeepDOM) | dd-es-absorption-17.png]

3. **Bid Color** Establece el color utilizado para resaltar la absorción en el lado del Bid: donde la presión vendedora está siendo absorbida por los compradores.

[SCREENSHOT: Absorción — Configuración de trazado (DeepDOM) | dd-es-absorption-18.png]

4. **Marker Width** aumenta el tamaño del marcador que muestra la absorción; solo funciona cuando el Display Mode está establecido en Square o Diamond

[SCREENSHOT: Absorción — Configuración de trazado (DeepDOM) | dd-es-absorption-19.png]

Ejemplos - Marker Width - 3

[SCREENSHOT: Absorción — Configuración de trazado (DeepDOM) | dd-es-absorption-20.png]

Marker Width - 10 Como puede ver, cuando el valor de Marker Width se establece en 10, el tamaño del cuadrado aumenta

[SCREENSHOT: Absorción — Configuración de trazado (DeepDOM) | dd-es-absorption-21.png]

## Configuración de texto (Text Settings)

[SCREENSHOT: Absorción — Configuración de texto (DeepDOM) | dd-es-absorption-22.png]

1. **Enable Text** Habilita o deshabilita la etiqueta de texto asociada a cada evento de absorción en el gráfico.

2. **Text Color** Establece el color del texto mostrado.

3. **Text Size** Ajusta el tamaño de la etiqueta de texto para la legibilidad.

### Configuración de trazado (Plot Settings)

También tiene la posibilidad de establecer alertas para las señales de Absorción

[SCREENSHOT: Absorción — Configuración de trazado (DeepDOM) | dd-es-absorption-23.png]

## Conclusión

El indicador Absorción es una herramienta potente para identificar dónde hay liquidez significativa en el mercado. Utilizado junto con el DOM y Time & Sales, le ofrece una imagen más completa de la participación del mercado en niveles de precio clave, ayudándole a tomar decisiones más informadas sobre posibles entradas, salidas y áreas de interés.

### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre.

Cuando se ponga en contacto, incluya:

Una captura de pantalla del problema

Una breve descripción de lo que intentaba hacer

Ticket de soporte (respuesta más rápida) Visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico Escríbanos a support@deepcharts.com; tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.