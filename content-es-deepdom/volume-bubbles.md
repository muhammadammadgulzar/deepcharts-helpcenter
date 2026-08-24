---
title: "Burbujas de volumen"
slug: "volume-bubbles"
category: "Features"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "10 min read"
description: "Las burbujas de volumen le brindan un registro visual tick a tick de cada ejecución de mercado, trazada directamente en el gráfico en el precio y el momento exactos en que ocurrió."
keywords: ["burbujas de volumen", "deepdom burbujas de volumen", "deepdom", "funciones"]
source_hash: "59a052992f7ef6b6"
ai_translated: true
source_hash: "59a052992f7ef6b6"
---
Las burbujas de volumen le brindan un registro visual tick a tick de cada ejecución de mercado, trazada directamente en el gráfico en el precio y el momento exactos en que ocurrió. Cada operación que llega al mercado aparece como una burbuja: azul para una compra de mercado (ejecutada en el Ask, lo que significa que un comprador agresivo tomó la oferta de venta) y rosa para una venta de mercado (ejecutada en el Bid, lo que significa que un vendedor agresivo golpeó el bid). El tamaño de cada burbuja es proporcional al tamaño de esa ejecución: una burbuja pequeña significa una operación pequeña, y una burbuja grande significa que se acaba de ejecutar una operación grande a ese precio.

[SCREENSHOT: Burbujas de volumen — vista general (DeepDOM) | dd-es-volume-bubbles-01.png]

## Por qué son importantes las burbujas de volumen

La mayoría de las herramientas de flujo de órdenes le muestran números. Las burbujas de volumen le muestran la misma información visualmente, haciendo inmediatamente evidente dónde se están produciendo grandes ejecuciones, en qué dirección y con qué agresividad. No necesita leer una columna de números para saber que algo significativo acaba de ocurrir en un nivel de precio. Un grupo de burbujas grandes se lo dice al instante.

El tamaño le dice quién está participando. Las burbujas pequeñas dispersas por el gráfico son ruido: actividad minorista, órdenes pequeñas, nada significativo. Pero cuando ve un grupo de burbujas grandes formándose en un nivel de precio específico, esa es una señal de que un participante relevante está ejecutando activamente en esa zona. Y el color le indica su dirección.

Cuando ve un grupo de burbujas azules grandes, los compradores agresivos están entrando al mercado con tamaño. Cuando ve un grupo de burbujas rosas grandes, los vendedores agresivos están golpeando el mercado con tamaño. Cuando ambos colores aparecen con gran tamaño en el mismo nivel, hay una batalla significativa entre compradores y vendedores en ese precio: un nivel donde el desenlace probablemente determinará el siguiente movimiento direccional.

El uso más potente de las burbujas de volumen es observar el agotamiento. Si el precio está subiendo pero las burbujas azules se están haciendo más pequeñas y las burbujas rosas comienzan a aparecer con tamaño, los compradores están perdiendo convicción y los vendedores están empezando a intervenir: a menudo una señal de que el movimiento se está quedando sin combustible incluso antes de que el precio haya girado en el gráfico.

Combinadas con el DOM y el mapa de calor, las burbujas de volumen le brindan la imagen completa del flujo de órdenes: el DOM le muestra dónde están esperando las órdenes, el mapa de calor le muestra dónde se ha ido acumulando la liquidez, y las burbujas le muestran exactamente dónde y con qué agresividad el mercado está operando realmente contra esa liquidez en tiempo real.

## Cómo añadir y configurar las burbujas de volumen en su gráfico

Habilite las burbujas de volumen desde la barra de herramientas inferior.

Haga clic en el botón del nombre para mostrar el menú de configuración.

[SCREENSHOT: Burbujas de volumen — Cómo añadir y configurar las burbujas de volumen en su gráfico (DeepDOM) | dd-es-volume-bubbles-02.png]

## Configuración general

Modo de burbuja (Bubble Mode) Define cómo se muestran y colorean las burbujas de volumen en el gráfico. Hay tres opciones:

[SCREENSHOT: Burbujas de volumen — Configuración general (DeepDOM) | dd-es-volume-bubbles-03.png]

Ask Bid Split: muestra cada burbuja dividida entre el volumen del Ask y del Bid por separado, mostrándole la proporción de compra y venta dentro de cada ejecución.

[SCREENSHOT: Burbujas de volumen — Configuración general (DeepDOM) | dd-es-volume-bubbles-04.png]

Delta: colorea cada burbuja según la diferencia entre el volumen de compra y de venta de esa ejecución. Un delta fuertemente positivo significa que los compradores agresivos dominaron esa operación. Un delta fuertemente negativo significa que dominaron los vendedores agresivos.

[SCREENSHOT: Burbujas de volumen — Configuración general (DeepDOM) | dd-es-volume-bubbles-05.png]

Volume: colorea cada burbuja según el volumen total de la ejecución, independientemente de la dirección. Utilícelo cuando quiera centrarse únicamente en dónde se están produciendo las operaciones más grandes sin sesgo direccional.

[SCREENSHOT: Burbujas de volumen — Configuración general (DeepDOM) | dd-es-volume-bubbles-06.png]

Filtro de volumen (Filter Volume) Establece el umbral mínimo de volumen para que una burbuja aparezca en el gráfico. Ninguna ejecución por debajo de este valor se mostrará. Utilícelo para filtrar el pequeño ruido minorista y centrarse solo en las ejecuciones que cumplen un umbral mínimo de tamaño.

[SCREENSHOT: Burbujas de volumen — Configuración general (DeepDOM) | dd-es-volume-bubbles-07.png]

Filtro de burbuja (Filter Bubble) Establece el tamaño mínimo para que una burbuja individual aparezca visualmente en el gráfico. Este es un filtro de visualización: las burbujas por debajo de este tamaño visual quedarán ocultas, manteniendo el gráfico limpio y centrado únicamente en ejecuciones significativas.

[SCREENSHOT: Burbujas de volumen — Configuración general (DeepDOM) | dd-es-volume-bubbles-08.png]

Color en modo volumen (Volume Mode Color) Define cómo se colorean las burbujas cuando Bubble Mode está establecido en Volume. Las opciones incluyen:

Delta Absolute: colorea la burbuja según el valor absoluto del delta de esa ejecución. Cuanto más fuerte sea el desequilibrio direccional, más intenso será el color.

[SCREENSHOT: Burbujas de volumen — Configuración general (DeepDOM) | dd-es-volume-bubbles-09.png]

Delta Percentual: colorea la burbuja según el delta expresado como porcentaje del volumen total. Esto normaliza el color entre ejecuciones de distintos tamaños, facilitando la comparación de la convicción direccional entre burbujas de tamaños muy diferentes.

[SCREENSHOT: Burbujas de volumen — Configuración general (DeepDOM) | dd-es-volume-bubbles-10.png]

## Dimensionamiento

[SCREENSHOT: Burbujas de volumen — Dimensionamiento (DeepDOM) | dd-es-volume-bubbles-11.png]

Esta sección controla cómo se calcula y escala el tamaño de cada burbuja en el gráfico. Es una de las secciones más importantes de configurar correctamente, porque la forma en que se dimensionan las burbujas afecta directamente a lo legible y útil que resulta la información visual para su mercado específico.

El tamaño de cada burbuja se calcula en relación con el tamaño máximo de burbuja presente en el gráfico. Esto significa que la ejecución más grande visible establece el punto de referencia, y todas las demás burbujas se escalan en relación con ella.

Modo de escala de burbuja (Bubble Scale Mode) Define el método matemático usado para escalar los tamaños de las burbujas en el gráfico. Este ajuste tiene un impacto significativo en el aspecto de las burbujas y en su facilidad de lectura. Hay tres opciones:

Linear: los tamaños de las burbujas se escalan de forma directa y proporcional. Si una ejecución tiene el doble de volumen que otra, su burbuja tendrá el doble de tamaño. Este es el método de escalado más sencillo y funciona bien en mercados de futuros donde las diferencias de volumen entre ejecuciones no son extremas. Sin embargo, en algunos mercados, el escalado lineal puede hacer que una o dos burbujas muy grandes dominen el gráfico mientras todas las demás parecen diminutas e ilegibles.

[SCREENSHOT: Burbujas de volumen — Dimensionamiento (DeepDOM) | dd-es-volume-bubbles-12.png]

SQRT (raíz cuadrada): los tamaños de las burbujas se escalan usando raíz cuadrada, lo que comprime la diferencia entre las burbujas grandes y pequeñas. Esto hace que la distribución general de burbujas sea más uniforme y visualmente equilibrada. Si observa que el escalado lineal crea un gráfico en el que la mayoría de las burbujas son demasiado pequeñas para leerse porque una o dos son extremadamente grandes, cambiar a SQRT hará que las burbujas más pequeñas sean más visibles sin perder la relación de tamaño relativa entre ellas. Este modo funciona especialmente bien en acciones, donde las diferencias de volumen entre ejecuciones pueden ser muy grandes.

[SCREENSHOT: Burbujas de volumen — Dimensionamiento (DeepDOM) | dd-es-volume-bubbles-13.png]

Logarithmic: los tamaños de las burbujas se escalan usando matemática logarítmica, que aplica la compresión más fuerte de las tres opciones. Esto crea la distribución de burbujas más uniforme, haciendo que incluso ejecuciones de tamaños muy diferentes aparezcan en un rango visual más equilibrado. Utilícelo en mercados donde el rango de tamaños de ejecución es extremadamente amplio y quiere la visualización más legible posible.

[SCREENSHOT: Burbujas de volumen — Dimensionamiento (DeepDOM) | dd-es-volume-bubbles-14.png]

Cuándo usar cada uno:

Futuros → Linear funciona bien en la mayoría de los casos, ya que los tamaños de ejecución tienden a ser más consistentes.

Acciones → SQRT o Logarithmic suele ser mejor porque el volumen de las acciones puede variar drásticamente entre ejecuciones, haciendo que el escalado lineal produzca un gráfico ilegible.

Out Std Dev Perc Define el porcentaje de desviación estándar externa usado para controlar el dimensionamiento de las burbujas. Establece el límite de cómo se manejan las ejecuciones atípicas (operaciones inusualmente grandes) en el cálculo del tamaño. Un valor más bajo hace que el dimensionamiento sea más sensible a los valores atípicos. Un valor más alto los absorbe de forma más suave en la escala general.

Std Dev Val Define el valor de desviación estándar usado como referencia para escalar los tamaños de las burbujas. Funciona junto con Out Std Dev Perc para determinar cómo se distribuye el rango de tamaños de burbuja a lo largo del gráfico.

[SCREENSHOT: Burbujas de volumen — Dimensionamiento (DeepDOM) | dd-es-volume-bubbles-15.png]

## Configuración de trazado (Plot Settings)

[SCREENSHOT: Burbujas de volumen — Configuración de trazado (DeepDOM) | dd-es-volume-bubbles-16.png]

Modo de visualización (Display Mode) Controla el estilo visual de las burbujas en el gráfico:

2D: las burbujas se muestran como círculos planos. Un aspecto más limpio y sencillo que funciona bien en gráficos cargados donde quiere que las burbujas sean visibles sin añadir demasiado peso visual.

[SCREENSHOT: Burbujas de volumen — Configuración de trazado (DeepDOM) | dd-es-volume-bubbles-17.png]

3D: las burbujas se muestran con un efecto de sombreado tridimensional, dándoles profundidad y haciéndolas más fáciles de distinguir de un vistazo, especialmente cuando burbujas de distintos tamaños se superponen.

[SCREENSHOT: Burbujas de volumen — Configuración de trazado (DeepDOM) | dd-es-volume-bubbles-18.png]

Color de Bid (Bid Color) Establece el color de las burbujas que representan ejecuciones del lado Bid (órdenes de venta a mercado golpeando el Bid).

Color de Ask (Ask Color) Establece el color de las burbujas que representan ejecuciones del lado Ask (órdenes de compra a mercado tomando el Ask).

Ancho de línea (Line Width) Establece el grosor del contorno de la burbuja. Un valor más alto hace que los bordes de las burbujas sean más visibles, lo que puede ayudar a distinguir burbujas individuales cuando se agrupan en un nivel de precio.

Opacidad (Opacity) Controla la transparencia de las burbujas. Un valor de 90 significa que las burbujas son mayormente sólidas con una ligera transparencia. Reducir la opacidad hace que las burbujas sean más transparentes, lo que puede ayudar cuando se superponen, para poder ver a través de ellas el mapa de calor o la acción del precio subyacente.

## Agrupamiento (Grouping)

Esta sección controla cómo las ejecuciones individuales se agrupan en burbujas únicas en el gráfico. Dado que el mercado produce miles de operaciones individuales cada minuto, agruparlas en grupos significativos hace que la información visual sea mucho más legible y procesable.

[SCREENSHOT: Burbujas de volumen — Agrupamiento (DeepDOM) | dd-es-volume-bubbles-19.png]

Modo de agrupamiento (Grouping Mode) Define el método general usado para agrupar las ejecuciones:

Automatic: la plataforma determina automáticamente el mejor agrupamiento según las condiciones de mercado actuales y el nivel de zoom del gráfico. Es la opción recomendada para la mayoría de los usuarios.

Time: las ejecuciones se agrupan según intervalos de tiempo. Todas las operaciones que ocurren dentro de una ventana de tiempo definida se combinan en una sola burbuja.

Price: las ejecuciones se agrupan según niveles de precio. Todas las operaciones que ocurren en el mismo nivel de precio o en niveles cercanos se combinan en una sola burbuja.

Modo de agregación de precio (Price Aggr Mode) Define cómo se agrega el precio al agrupar las burbujas:

Extension: agrupa las burbujas basándose únicamente en la extensión del precio, moviéndose en una sola dirección. Esto significa que una burbuja representa una secuencia de operaciones que movió el precio en una única dirección.

Extension and Retracement: agrupa las burbujas basándose tanto en extensiones como en retrocesos del precio, capturando movimientos en ambas direcciones dentro de un mismo grupo de burbujas.

Modo de agrupamiento de ticks (Tick Grouping Mode) Define cómo se agrupan los ticks dentro de cada burbuja:

Automatic: la plataforma determina automáticamente el agrupamiento de ticks según el instrumento y las condiciones del mercado.

Fixed: usted define manualmente un número fijo de ticks para el agrupamiento, lo que le da un control preciso sobre lo granular o amplio que es cada agrupamiento de burbujas.

Ticks manuales de agrupamiento (Tick Grouping Manual Ticks) Solo está activo cuando Tick Grouping Mode está establecido en Fixed. Establece el número exacto de ticks usado para cada grupo de burbujas. Un número más bajo crea grupos más granulares y pequeños. Un número más alto crea grupos más amplios que capturan más ejecuciones en cada burbuja.

NOTA - Acceso rápido: también puede ajustar rápidamente el tamaño de burbuja (Bubble Size) y el agrupamiento de burbujas (Bubble Grouping) directamente desde el panel de deslizadores de la barra de herramientas en la parte superior del gráfico, sin abrir la ventana de configuración completa.

[SCREENSHOT: Burbujas de volumen — Agrupamiento (DeepDOM) | dd-es-volume-bubbles-20.png]

## Conclusión

Las burbujas de volumen son una de las herramientas visualmente más potentes de DeepDom para leer el flujo de órdenes en tiempo real. Al mostrarle exactamente dónde se están produciendo las grandes ejecuciones, en qué dirección y con qué nivel de convicción, le brindan una lectura inmediata de la agresión del mercado que los números por sí solos no pueden ofrecer con la misma rapidez. Configure correctamente el Modo de escala de burbuja (Bubble Scale Mode) para su mercado, utilice la configuración de agrupamiento para controlar el nivel de detalle y combine las burbujas con el mapa de calor y el DOM para obtener la imagen completa de lo que el mercado está haciendo en cada nivel de precio.

### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre.

Al ponerse en contacto, incluya:

Una captura de pantalla del problema

Una breve descripción de lo que intentaba hacer

Ticket de soporte (respuesta más rápida) Visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico Escríbanos a support@deepcharts.com; tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.