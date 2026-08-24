---
title: "VWAP + Envolventes"
slug: "vwap-envelopes-deepdom"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "El indicador VWAP (Volume Weighted Average Price) muestra el precio promedio de las operaciones ponderado por volumen durante un período de tiempo elegido, junto con bandas de desviación estándar por encima y por debajo."
keywords: ["vwap envolventes", "vwap envolventes deepdom", "deepdom", "indicadores"]
source_hash: "9886aaf17ac0b55c"
ai_translated: true
source_hash: "9886aaf17ac0b55c"
---
El indicador VWAP (Volume Weighted Average Price) muestra el precio promedio de las operaciones ponderado por volumen durante un período de tiempo elegido, junto con bandas de desviación estándar por encima y por debajo.

[SCREENSHOT: VWAP + Envolventes — vista general (DeepDOM) | dd-es-vwap-envelopes-deepdom-01.png]

¿Qué es el VWAP? Piense en el VWAP como el "verdadero precio promedio" del mercado, pero más inteligente que un promedio normal. En lugar de tratar cada operación por igual, otorga más peso a los niveles de precio donde se negoció más volumen. Esto lo convierte en una representación mucho más precisa de dónde ha realizado el mercado la mayor parte de su actividad. Los operadores lo utilizan como referencia de valor justo: si el precio está por encima del VWAP, cotiza con prima; si está por debajo, cotiza con descuento.

Las bandas de desviación estándar miden cuánto se aleja el precio del promedio. Ayudan a los operadores a identificar zonas de prima y de descuento, áreas donde el precio cotiza por encima o por debajo del valor justo, y pueden utilizarse para tomar decisiones de entrada y salida más informadas.

Esto es lo que representa cada banda:

Primera desviación estándar (+1 / -1): el rango principal de volatilidad; donde el precio pasa la mayor parte del tiempo. Se considera la zona "normal" alrededor del valor justo

Segunda desviación estándar (+2 / -2): señala mayor volatilidad y posibles movimientos de precio significativos. Que el precio llegue aquí es menos común y puede indicar un movimiento sobreextendido

Tercera desviación estándar (+3 / -3): representa movimientos de precio raros y extremos. Un precio en este nivel es estadísticamente inusual y puede señalar un fuerte potencial de retroceso hacia el VWAP

## Cómo añadir el VWAP a su gráfico

Hay dos formas de añadir el indicador VWAP:

Haga clic derecho en el gráfico -> **Indicators**

Busque el indicador VWAP Envelopes y haga clic en el símbolo "+"

Abra el panel de configuración para personalizar los ajustes -> **Save** (Guardar)

Una vez añadido, haga clic en el icono de configuración del indicador para abrir su ventana de configuración.

[SCREENSHOT: VWAP + Envolventes — Cómo añadir el VWAP a su gráfico (DeepDOM) | dd-es-vwap-envelopes-deepdom-02.png]

## Configuración general

Modo de período (Period Mode) Define el período de tiempo utilizado para calcular el VWAP. Puede elegir entre:

Día (Day): calcula el VWAP desde el inicio del día de trading actual, reiniciándose en la apertura de cada nueva sesión

Minutos (Minutes): calcula el VWAP sobre un número determinado de minutos, ofreciéndole una visión del valor justo a más corto plazo

Segundos (Seconds): calcula el VWAP sobre un número determinado de segundos, útil para análisis de muy corto plazo

Órdenes (Orders): calcula el VWAP a partir de un número determinado de órdenes en lugar de un período de tiempo

Valor del período (Period Value) Establece el valor numérico del período elegido arriba. Por ejemplo, si seleccionó Minutos, introduciría aquí 30 para un VWAP de 30 minutos.

Modo de envolvente (Envelope Mode) Define cómo se calculan las bandas. Puede elegir entre:

Desviación estándar (Standard Deviation): las bandas se basan en la desviación estadística respecto al VWAP, ajustándose automáticamente a la volatilidad del mercado

Porcentaje (Percentage): las bandas se basan en un cambio porcentual fijo respecto al precio del VWAP, manteniéndose constantes independientemente de la volatilidad

[SCREENSHOT: VWAP + Envolventes — Configuración general (DeepDOM) | dd-es-vwap-envelopes-deepdom-03.png]

## Configuración de visualización

Color de línea (Line Color) Establece el color de la línea del VWAP en el gráfico.

Grosor de línea (Line Width) Establece el grosor con que aparece la línea del VWAP.

Grosor de envolvente (Envelope Width) Establece el grosor de las bandas de desviación estándar.

Estilo de envolvente (Envelope Style) Establece el estilo de línea de las bandas: por ejemplo, sólida, discontinua o punteada.

[SCREENSHOT: VWAP + Envolventes — Configuración de visualización (DeepDOM) | dd-es-vwap-envelopes-deepdom-04.png]

## Configuración de bandas: primera, segunda y tercera banda

Cada una de las tres bandas puede configurarse individualmente:

Habilite o deshabilite cada banda de forma independiente

[SCREENSHOT: VWAP + Envolventes — Configuración de bandas: primera, segunda y tercera banda (DeepDOM) | dd-es-vwap-envelopes-deepdom-05.png]

Establezca el valor de desviación estándar de cada banda

[SCREENSHOT: VWAP + Envolventes — Configuración de bandas: primera, segunda y tercera banda (DeepDOM) | dd-es-vwap-envelopes-deepdom-06.png]

Elija un color personalizado para cada banda

[SCREENSHOT: VWAP + Envolventes — Configuración de bandas: primera, segunda y tercera banda (DeepDOM) | dd-es-vwap-envelopes-deepdom-07.png]

Esto le permite mostrar solo las bandas relevantes para su estilo de trading: por ejemplo, habilitar únicamente la primera y la segunda banda dejando la tercera desactivada. Mantener menos bandas activas puede hacer que el gráfico sea más fácil de leer, especialmente en mercados de movimiento rápido.

[SCREENSHOT: VWAP + Envolventes — Configuración de bandas: primera, segunda y tercera banda (DeepDOM) | dd-es-vwap-envelopes-deepdom-08.png]

[SCREENSHOT: VWAP + Envolventes — Configuración de bandas: primera, segunda y tercera banda (DeepDOM) | dd-es-vwap-envelopes-deepdom-09.png]

## Cómo utilizar múltiples VWAP

Puede aplicar más de un indicador VWAP al mismo gráfico al mismo tiempo. Un ejemplo común es combinar un VWAP diario con un VWAP de período más corto para obtener una visión tanto macro como micro del valor justo.

Por ejemplo: un VWAP diario en amarillo y un VWAP de 30 minutos en cian aplicados al mismo gráfico. El VWAP diario le muestra la imagen general de dónde está el valor justo para toda la sesión, mientras que el VWAP de 30 minutos le muestra dónde está el valor justo en este momento dentro de esa sesión.

[SCREENSHOT: VWAP + Envolventes — Cómo utilizar múltiples VWAP (DeepDOM) | dd-es-vwap-envelopes-deepdom-10.png]

## Conclusión

El indicador VWAP es una de las herramientas más utilizadas en el trading de flujo de órdenes. Al combinar la línea del VWAP con sus bandas de desviación estándar, puede identificar rápidamente si el precio cotiza a valor justo, con prima o con descuento, lo que le brinda un marco estructurado para sus entradas y salidas.

### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre.

Al contactarnos, incluya:

Una captura de pantalla del problema

Una breve descripción de lo que intentaba hacer

Ticket de soporte (respuesta más rápida) Visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico Escríbanos a support@deepcharts.com; tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.