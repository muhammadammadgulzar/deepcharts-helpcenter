---
title: "Barrido de stops (Stop Run)"
slug: "stop-run"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "9 min read"
description: "El indicador Stop Run le muestra en el gráfico cuándo se ha activado un gran número de órdenes stop en el mercado."
keywords: ["stop run", "deepdom stop run", "deepdom", "indicadores"]
source_hash: "36f7927344111b29"
ai_translated: true
source_hash: "36f7927344111b29"
---
El indicador Stop Run le muestra en el gráfico cuándo se ha activado un gran número de órdenes stop en el mercado. Esto le ayuda a entender por qué el precio se movió de repente tan rápido, y si ese movimiento fue compra o venta real, o simplemente una ola de órdenes stop barridas todas a la vez.

[SCREENSHOT: Stop Run — vista general (DeepDOM) | dd-es-stop-run-01.png]

### ¿Qué es un Stop Run?

Primero, entendamos qué es una orden stop.

Cuando un operador compra o vende en el mercado, normalmente establece un nivel de precio en el que su operación se cerrará automáticamente si las cosas van mal. Esto se llama una orden stop (STP). Por ejemplo, un operador compra NQ a 26.800 y coloca un stop en 26.750; es decir, si el precio cae a 26.750, la operación se cierra automáticamente para evitar una pérdida mayor.

Ahora viene la parte importante. La mayoría de los operadores colocan sus órdenes stop en los mismos niveles de precio obvios: justo por debajo de un soporte o justo por encima de una resistencia. Esto significa que cientos o miles de órdenes stop están situadas en el mismo precio al mismo tiempo.

Los grandes actores del mercado, como los grandes bancos y las instituciones, saben exactamente dónde están situadas esas órdenes stop. Empujan el precio hacia esas zonas a propósito. En el momento en que el precio toca ese nivel, todas esas órdenes stop se activan a la vez, creando una avalancha de órdenes que empuja el precio aún más en esa dirección. Eso es un Stop Run.

[SCREENSHOT: Stop Run — ¿Qué es un Stop Run? (DeepDOM) | dd-es-stop-run-02.png]

Una vez que el Stop Run ha terminado y todos los stops se han activado, el precio muy a menudo revierte en la dirección opuesta, porque el movimiento no fue impulsado por compradores o vendedores reales: fueron simplemente órdenes stop activándose.

### ¿Cuándo se produce un Stop Run?

Los Stop Runs ocurren con más frecuencia en niveles de precio muy obvios en el gráfico, como el máximo o el mínimo del día anterior, o un nivel en el que el precio ha rebotado varias veces antes. Estos son los puntos donde la mayoría de los operadores colocan sus stops, lo que los convierte en el objetivo perfecto para los grandes actores.

Por ejemplo: si NQ ha mantenido el soporte en 26.700 durante varios días, la mayoría de los operadores que están largos tendrán sus órdenes stop colocadas justo por debajo de 26.700. Un gran actor que empuje el precio justo por debajo de ese nivel activará todos esos stops a la vez, creando un movimiento rápido a la baja, antes de que el precio a menudo se recupere por encima del nivel poco después.

Los Stop Runs también ocurren mucho durante grandes eventos de noticias como los informes del CPI o los anuncios de la Reserva Federal. Durante estos momentos hay menos órdenes en el mercado, lo que facilita empujar el precio a través de los grupos de stops rápidamente.

### Qué buscar durante un Stop Run

Pico repentino de volumen: cuando muchas órdenes stop se activan al mismo tiempo, verá un gran salto de volumen en el gráfico. Si el volumen se dispara de repente muy por encima de lo normal sin una razón obvia de noticias, es probable que se trate de un Stop Run

[SCREENSHOT: Stop Run — Qué buscar durante un Stop Run (DeepDOM) | dd-es-stop-run-03.png]

Movimiento rápido del precio: el precio atraviesa un nivel muy rápidamente durante un Stop Run, mucho más rápido que en un movimiento normal. Un operador que observe el gráfico notará que casi parece que el precio saltó en lugar de moverse

[SCREENSHOT: Stop Run — Qué buscar durante un Stop Run (DeepDOM) | dd-es-stop-run-04.png]

Reversión rápida tras el movimiento: después de un Stop Run, el precio muy a menudo rebota en la dirección opuesta casi de inmediato. Un operador que vio el movimiento rápido y entró en esa dirección se encontrará de repente en el lado equivocado del mercado

[SCREENSHOT: Stop Run — Qué buscar durante un Stop Run (DeepDOM) | dd-es-stop-run-05.png]

Señales en el libro de órdenes y en el footprint: un operador que observe el DOM notará que ciertos niveles de precio se vacían de repente a medida que se ejecutan las órdenes stop. En el gráfico footprint, la aparición de órdenes agresivas muy grandes de golpe en un corto período de tiempo es otra confirmación de que acaba de producirse un Stop Run

[SCREENSHOT: Stop Run — Qué buscar durante un Stop Run (DeepDOM) | dd-es-stop-run-06.png]

### Por qué es importante

Entender los Stop Runs le brinda dos ventajas importantes como operador.

La primera es la oportunidad. Imagine que un operador ve el precio romper por debajo del soporte en 26.700, el indicador Stop Run muestra 1.500 contratos activados, el volumen se dispara bruscamente y luego el precio comienza de inmediato a recuperarse por encima de 26.700. Esa es una señal fuerte de que la ruptura fue un Stop Run, no una ruptura real. El operador ahora puede buscar comprar a medida que el precio se recupera, con un nivel claro y lógico donde colocar su stop loss por debajo.

La segunda es la protección. Sin conocer los Stop Runs, un operador que vea una ruptura rápida y agresiva del soporte podría vender, esperando que el precio siga bajando, solo para ser expulsado segundos después cuando el precio revierta bruscamente al alza. Reconocer un Stop Run le indica que espere y no reaccione al movimiento. En el trading, evitar malas operaciones es tan valioso como encontrar buenas.

### Cómo configurar el indicador Stop Run

Haga clic en el icono **Indicators** (Indicadores) del gráfico

Busque **Stop Run** en la lista y haga clic en + para añadirlo

Haga clic en el icono de configuración del indicador para abrir su ventana de configuración

[SCREENSHOT: Stop Run — Cómo configurar el indicador Stop Run (DeepDOM) | dd-es-stop-run-07.png]

## Configuración general

Tick mínimo (Minimum Tick) Un tick es el movimiento de precio más pequeño posible en un mercado. Esta opción le indica al indicador el número mínimo de ticks que el precio debe moverse, como resultado de la activación de órdenes stop, antes de marcar el evento como un Stop Run.

[SCREENSHOT: Stop Run — Configuración general (DeepDOM) | dd-es-stop-run-08.png]

Si establece este valor demasiado bajo, el indicador marcará cada pequeño movimiento de precio como un Stop Run, haciendo que el gráfico sea muy ruidoso y difícil de leer. Establecerlo en el nivel correcto significa que solo se marcan los movimientos lo suficientemente grandes como para importar de verdad, manteniendo su gráfico limpio y útil. Ejemplos: Min Tick - 3

[SCREENSHOT: Stop Run — Configuración general (DeepDOM) | dd-es-stop-run-09.png]

Min Tick - 10 Como puede ver, en este caso todas las órdenes han sido filtradas al añadir un filtro de Min Tick - 10

[SCREENSHOT: Stop Run — Configuración general (DeepDOM) | dd-es-stop-run-10.png]

Número máximo de órdenes (Maximum Ord Num) Limita el número máximo de órdenes que el indicador examina durante un Stop Run. En momentos de mercado extremadamente activos, como justo después de una noticia importante, puede haber tantas órdenes circulando que casi todo parece un Stop Run. Esta opción evita que el indicador reaccione en exceso durante esos momentos inusuales y lo mantiene centrado en condiciones de mercado normales y realistas.

[SCREENSHOT: Stop Run — Configuración general (DeepDOM) | dd-es-stop-run-11.png]

Max MS MS significa milisegundos. Un milisegundo es una milésima de segundo. Esta opción define la velocidad a la que deben activarse las órdenes stop para contar como un único evento de Stop Run.

[SCREENSHOT: Stop Run — Configuración general (DeepDOM) | dd-es-stop-run-12.png]

Ejemplos: Max MS - 50

[SCREENSHOT: Stop Run — Configuración general (DeepDOM) | dd-es-stop-run-13.png]

Max MS - 5 Como puede ver, algunas de las órdenes han sido filtradas al añadir un filtro de Max MS - 5

[SCREENSHOT: Stop Run — Configuración general (DeepDOM) | dd-es-stop-run-14.png]

Un Stop Run real ocurre casi al instante: todas esas órdenes stop se disparan en una fracción diminuta de segundo. Si las órdenes llegan lentamente durante un período más largo, se trata simplemente de actividad de mercado normal. Esta opción garantiza que el indicador solo marque eventos en los que todo ocurrió lo suficientemente rápido como para ser un Stop Run genuino.

Volumen mínimo de Stop Run (Min. Stop Run Vol) Establece el volumen mínimo necesario para que algo califique como un Stop Run. Un número pequeño de stops activándose no va a mover el mercado de forma significativa. Esta opción filtra esos eventos pequeños y sin importancia y le muestra solo los que son lo suficientemente grandes como para impactar realmente en el precio: los que merecen su atención.

[SCREENSHOT: Stop Run — Configuración general (DeepDOM) | dd-es-stop-run-15.png]

Ejemplos: Min. Stop Run Vol. - 20

[SCREENSHOT: Stop Run — Configuración general (DeepDOM) | dd-es-stop-run-16.png]

Min. Stop Run Vol. - 80 Como puede ver, algunas de las órdenes han sido filtradas al añadir un filtro de Min. Stop Run Vol. - 80

[SCREENSHOT: Stop Run — Configuración general (DeepDOM) | dd-es-stop-run-17.png]

## Configuración de trazado (Plot Settings)

Modo de visualización (Display Mode) Controla el aspecto del marcador de Stop Run en su gráfico. Tiene tres opciones:

[SCREENSHOT: Stop Run — Configuración de trazado (DeepDOM) | dd-es-stop-run-18.png]

Text: muestra un recuadro de color con el número de órdenes stop activadas

[SCREENSHOT: Stop Run — Configuración de trazado (DeepDOM) | dd-es-stop-run-19.png]

Diamond: marca el Stop Run con un icono en forma de rombo, con el número de contratos mostrado encima o debajo

[SCREENSHOT: Stop Run — Configuración de trazado (DeepDOM) | dd-es-stop-run-20.png]

Square: marca el Stop Run con un icono en forma de cuadrado, con el número de contratos mostrado encima o debajo

[SCREENSHOT: Stop Run — Configuración de trazado (DeepDOM) | dd-es-stop-run-21.png]

Color de Ask / Color de Bid (Ask Color / Bid Color) Establece el color usado para mostrar los Stop Runs en el lado Ask / Bid del mercado.

[SCREENSHOT: Stop Run — Configuración de trazado (DeepDOM) | dd-es-stop-run-22.png]

Ancho del marcador (Marker Width) Establece el grosor de la línea usada para marcar el Stop Run en el gráfico.

[SCREENSHOT: Stop Run — Configuración de trazado (DeepDOM) | dd-es-stop-run-23.png]

[SCREENSHOT: Stop Run — Configuración de trazado (DeepDOM) | dd-es-stop-run-24.png]

## Configuración de texto

Habilitar texto (Enable Text) Activa o desactiva las etiquetas de texto en el gráfico.

[SCREENSHOT: Stop Run — Configuración de texto (DeepDOM) | dd-es-stop-run-25.png]

Color del texto (Text Color) Establece el color del texto mostrado en las etiquetas.

[SCREENSHOT: Stop Run — Configuración de texto (DeepDOM) | dd-es-stop-run-26.png]

Tamaño del texto (Text Size) Establece el tamaño del texto mostrado en las etiquetas.

[SCREENSHOT: Stop Run — Configuración de texto (DeepDOM) | dd-es-stop-run-27.png]

[SCREENSHOT: Stop Run — Configuración de texto (DeepDOM) | dd-es-stop-run-28.png]

## Alertas

También hay una sección dedicada a las alertas de sonido para las señales generadas por el indicador

[SCREENSHOT: Stop Run — Alertas (DeepDOM) | dd-es-stop-run-29.png]

## Conclusión

El indicador Stop Run le ayuda a entender una de las cosas más comunes que ocurren en el mercado todos los días. Los grandes actores activan órdenes stop para crear movimientos rápidos y capturar liquidez, y el precio muy a menudo revierte justo después. Al aprender a detectar estos eventos y combinarlos con el volumen, el DOM y otras herramientas de DeepDom, obtiene una imagen mucho más clara de qué está impulsando realmente el precio y hacia dónde es probable que se dirija el mercado a continuación.

### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre.

Al ponerse en contacto, incluya:

Una captura de pantalla del problema

Una breve descripción de lo que intentaba hacer

Ticket de soporte (respuesta más rápida) Visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico Escríbanos a support@deepcharts.com; tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.