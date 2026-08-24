---
title: "Iceberg/Stop acumulado"
slug: "cumulative-iceberg-stop"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "El indicador Iceberg/Stop acumulado (Cumulative Iceberg/Stop) monitorea e identifica dos tipos específicos de actividad de mercado, las órdenes iceberg y las órdenes stop, utilizando tecnología MBO (Market By Order)."
keywords: ["iceberg stop acumulado", "iceberg stop acumulado deepdom", "deepdom", "indicadores"]
source_hash: "31e666dfa1aec40f"
ai_translated: true
source_hash: "31e666dfa1aec40f"
---
El indicador Iceberg/Stop acumulado (Cumulative Iceberg/Stop) monitorea e identifica dos tipos específicos de actividad de mercado, las órdenes iceberg y las órdenes stop, utilizando tecnología MBO (Market By Order). Rastrea la presencia y ejecución de estas órdenes en tiempo real, mostrando cómo influyen en el movimiento del precio y ayudándole a entender dónde puede estar teniendo lugar una actividad oculta significativa.

[SCREENSHOT: Iceberg/Stop acumulado — vista general (DeepDOM) | dd-es-cumulative-iceberg-stop-01.png]

### ¿Qué es una orden iceberg?

Una orden iceberg es una orden grande de compra o venta que se divide deliberadamente en porciones visibles más pequeñas para ocultar su tamaño real al mercado. Solo una pequeña parte, la "punta", es visible en el libro de órdenes en cada momento. Una vez que la porción visible se ejecuta, el resto oculto entra gradualmente en el mercado.

Piénselo así: imagine que una gran institución quiere comprar 10.000 contratos de NQ. Si colocara toda la orden de una vez, cada operador que observe el libro de órdenes la vería de inmediato, los precios se moverían en su contra y su precio medio de entrada empeoraría. En su lugar, la divide en piezas más pequeñas, mostrando solo 50 contratos a la vez en el libro. Cada vez que esos 50 contratos se compran, aparecen otros 50, haciendo que parezca actividad normal de mercado mientras completa silenciosamente su gran posición.

Hay dos tipos de órdenes iceberg:

Orden iceberg nativa: soportada directamente por el motor de emparejamiento de la bolsa. La propia bolsa gestiona las porciones visible y oculta, revelando gradualmente el volumen a medida que se consume la punta visible. Estas pueden identificarse mediante datos MBO.

Orden iceberg sintética: creada por software de trading externo que divide una orden grande en varias órdenes más pequeñas y las introduce progresivamente en el libro. Estas no son gestionadas por la bolsa y no pueden identificarse mediante MBO: parecen indistinguibles de las órdenes normales.

¿Qué es MBO (Market By Order)? MBO es una tecnología que le proporciona datos detallados a nivel de orden del libro, incluidos el identificador de cada orden, la cantidad inicial, el volumen restante y el estado de ejecución. Este nivel de detalle permite detectar el comportamiento característico de "recarga" de las órdenes iceberg, en el que una nueva porción visible sigue apareciendo cada vez que la anterior se ejecuta por completo. MBO puede identificar órdenes iceberg nativas, pero no las sintéticas.

### ¿Qué es una orden stop?

Una orden stop (STP) es una instrucción que activa automáticamente una orden a mercado cuando el precio alcanza un nivel específico. Los operadores las utilizan de dos maneras principales: para proteger una posición abierta de una gran pérdida, o para entrar en el mercado cuando el precio rompe un nivel clave.

Por ejemplo, un operador está largo en NQ desde 26.800 y coloca una orden stop en 26.750. Si el precio cae a 26.750, su posición se cierra automáticamente, limitando su pérdida sin necesidad de vigilar la pantalla constantemente.

Con fuentes de datos como Rithmic (Market Depth), DeepDom puede reconstruir y cuantificar las órdenes stop mediante algoritmos propietarios. Cuando el precio alcanza un nivel donde se han acumulado muchas órdenes stop, todas pueden activarse simultáneamente, generando un pico significativo de volumen y provocando potencialmente una continuación rápida o una reversión del movimiento.

### Cómo configurar el indicador Iceberg/Stop acumulado

Haga clic en el icono **Indicators** (Indicadores) en el gráfico

Busque **Cumulative Iceberg/Stop** en la lista y haga clic en + para añadirlo

Haga clic en el icono de configuración del indicador para abrir su ventana de configuración

[SCREENSHOT: Iceberg/Stop acumulado — Cómo configurar el indicador Iceberg/Stop acumulado (DeepDOM) | dd-es-cumulative-iceberg-stop-02.png]

## Configuración general

Datos de entrada (Input Data): seleccione el tipo de datos que el indicador utiliza para sus cálculos:

Volume — basado en el volumen de las órdenes

Order — basado en el número de órdenes individuales

[SCREENSHOT: Iceberg/Stop acumulado — Configuración general (DeepDOM) | dd-es-cumulative-iceberg-stop-03.png]

Filtro mínimo (Filter Minimum): establece el volumen o número de órdenes mínimo necesario para que un evento se considere relevante. Esto filtra la actividad insignificante y centra el indicador en el flujo de órdenes significativo.

[SCREENSHOT: Iceberg/Stop acumulado — Configuración general (DeepDOM) | dd-es-cumulative-iceberg-stop-04.png]

Ejemplos - Filtro mínimo - En 1

[SCREENSHOT: Iceberg/Stop acumulado — Configuración general (DeepDOM) | dd-es-cumulative-iceberg-stop-05.png]

Filtro mínimo - En 10

[SCREENSHOT: Iceberg/Stop acumulado — Configuración general (DeepDOM) | dd-es-cumulative-iceberg-stop-06.png]

Filtro máximo (Filter Maximum): establece el volumen o número de órdenes máximo que se incluye en el cálculo. Útil para excluir eventos atípicos de la visualización.

[SCREENSHOT: Iceberg/Stop acumulado — Configuración general (DeepDOM) | dd-es-cumulative-iceberg-stop-07.png]

Ejemplos - Filtro máximo - En 0

[SCREENSHOT: Iceberg/Stop acumulado — Configuración general (DeepDOM) | dd-es-cumulative-iceberg-stop-08.png]

Filtro máximo - En 10

[SCREENSHOT: Iceberg/Stop acumulado — Configuración general (DeepDOM) | dd-es-cumulative-iceberg-stop-09.png]

## Configuración de iceberg

Color de iceberg Ask (Iceberg Ask Color): establece el color utilizado para identificar las órdenes iceberg en el lado Ask (venta) del mercado.

Color de iceberg Bid (Iceberg Bid Color): establece el color utilizado para identificar las órdenes iceberg en el lado Bid (compra) del mercado.

[SCREENSHOT: Iceberg/Stop acumulado — Configuración de iceberg (DeepDOM) | dd-es-cumulative-iceberg-stop-10.png]

[SCREENSHOT: Iceberg/Stop acumulado — Configuración de iceberg (DeepDOM) | dd-es-cumulative-iceberg-stop-11.png]

## Configuración de stop

Color de stop Bid (Stop Bid Color): establece el color utilizado para mostrar las órdenes stop activadas en el lado de compra. Color de stop Ask (Stop Ask Color): establece el color utilizado para mostrar las órdenes stop activadas en el lado de venta.

[SCREENSHOT: Iceberg/Stop acumulado — Configuración de stop (DeepDOM) | dd-es-cumulative-iceberg-stop-12.png]

[SCREENSHOT: Iceberg/Stop acumulado — Configuración de stop (DeepDOM) | dd-es-cumulative-iceberg-stop-13.png]

## Configuración de trazado (Plot Settings)

De forma predeterminada, el indicador Stop Iceberg muestra los datos de iceberg y de stop dentro de la misma área del gráfico, utilizando dos ejes:

Eje de Stop (Stop Axis) — muestra la cantidad de órdenes stop identificadas

Eje de Iceberg (Iceberg Axis) — muestra la cantidad de órdenes iceberg identificadas

También puede añadir varios indicadores Stop Iceberg al mismo gráfico y configurarlos de forma independiente, por ejemplo, dedicando un indicador a los icebergs y otro a los stops, lo que permite una vista más personalizada y detallada.

[SCREENSHOT: Iceberg/Stop acumulado — Configuración de trazado (DeepDOM) | dd-es-cumulative-iceberg-stop-14.png]

Modo de visualización (Display Mode): define cómo se agregan y muestran los datos de las órdenes. Las opciones incluyen:

Sum — muestra el total acumulado de órdenes durante un movimiento del mercado. No requiere ajuste basado en tiempo

Last Minutes — muestra las órdenes ejecutadas en los últimos minutos definidos por el usuario

Last Seconds — muestra las órdenes ejecutadas en los últimos segundos definidos por el usuario

Parámetros de visualización (Display Parameters): al usar el modo Last Minutes o Last Seconds, esto establece el número exacto de minutos o segundos utilizado para el cálculo.

Ancho de línea (Line Width): establece el grosor de las líneas utilizadas para representar la actividad de las órdenes en el gráfico.

Usar ejes separados (Use Separate Axes): cuando está habilitado, los datos de iceberg y de stop se muestran en ejes separados para distinguir más fácilmente entre ambos.

## Alerta de Stop

Enable (Habilitar) — activa las notificaciones para la actividad de órdenes stop

Threshold (Umbral) — establece el número mínimo de órdenes stop que el indicador debe identificar antes de activar una notificación

Enable Popup (Habilitar ventana emergente) — cuando está habilitado, aparece una alerta emergente en pantalla al alcanzarse el umbral

[SCREENSHOT: Iceberg/Stop acumulado — Alerta de Stop (DeepDOM) | dd-es-cumulative-iceberg-stop-15.png]

## Alerta de Iceberg

Enable (Habilitar) — activa las notificaciones para la actividad de órdenes iceberg

Threshold (Umbral) — establece el número mínimo de órdenes iceberg que el indicador debe identificar antes de activar una notificación

Enable Popup (Habilitar ventana emergente) — cuando está habilitado, aparece una alerta emergente en pantalla al superarse el umbral

[SCREENSHOT: Iceberg/Stop acumulado — Alerta de Iceberg (DeepDOM) | dd-es-cumulative-iceberg-stop-16.png]

## Conclusión

El indicador Iceberg/Stop acumulado le ofrece una ventana única a dos de los tipos de órdenes ocultas con mayor impacto en el mercado. Al comprender dónde las órdenes iceberg están absorbiendo presión y dónde se están agrupando las órdenes stop, puede obtener una ventaja significativa para anticipar posibles reacciones del precio y entender el comportamiento de los actores institucionales en niveles clave.

#### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre.

Cuando se ponga en contacto, incluya:

Una captura de pantalla del problema

Una breve descripción de lo que intentaba hacer

Ticket de soporte (respuesta más rápida): visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico: escríbanos a support@deepcharts.com. Tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.