---
title: "Desequilibrio de sesión"
slug: "session-imbalance-deepdom"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "El indicador Desequilibrio de sesión (Session Imbalance) resalta los niveles de precio clave de la primera hora de trading, conocida como el Balance Inicial."
keywords: ["desequilibrio de sesión", "deepdom desequilibrio de sesión", "deepdom", "indicadores"]
source_hash: "7f3bbe969065488f"
ai_translated: true
source_hash: "7f3bbe969065488f"
---
El indicador Desequilibrio de sesión (Session Imbalance) resalta los niveles de precio clave de la primera hora de trading, conocida como el Balance Inicial (Initial Balance). Estos niveles se consideran significativos porque la mayor parte del volumen de trading de cualquier sesión entra durante esta hora de apertura.

[SCREENSHOT: Desequilibrio de sesión — vista general (DeepDOM) | dd-es-session-imbalance-deepdom-01.png]

Para los futuros de EE. UU., esto corresponde a las 9:30 – 10:30 a.m., hora del mercado. A lo largo de la sesión, estos niveles suelen actuar como zonas importantes de soporte, resistencia o reacción.

El indicador traza los siguientes niveles:

IBH (Imbalance High): el máximo del período de balance inicial

IBL (Imbalance Low): el mínimo del período de balance inicial

IBM (Mid Point): el punto medio entre IBH e IBL

IB50%: extensiones del 50 % por encima y por debajo del balance inicial

IB100%: extensiones del 100 % por encima y por debajo del balance inicial

## Cuándo utilizar este indicador

El indicador Desequilibrio de sesión es más útil durante las sesiones de trading regulares donde existe un período de apertura definido, particularmente en mercados de futuros como NQ, ES, CL e instrumentos similares que tienen una apertura de sesión clara con alta participación.

Estas son las situaciones más comunes en las que este indicador aporta un valor real:

Al inicio del día de trading En cuanto abre la sesión, el indicador comienza a construir el rango del Balance Inicial. Observar cómo se comporta el precio dentro de este rango durante la primera hora le brinda un contexto importante para el resto del día. Un rango estrecho sugiere indecisión. Un rango amplio sugiere una fuerte convicción direccional al principio de la sesión.

Cuando el precio regresa al Balance Inicial después de una ruptura Uno de los usos más fiables de este indicador es observar cómo el precio rompe por encima del IBH o por debajo del IBL y luego regresa a esos niveles. Cuando esto ocurre, el IBH y el IBL suelen invertir su función: una antigua resistencia se convierte en soporte y un antiguo soporte se convierte en resistencia. Estos retestes pueden ofrecer oportunidades de entrada de alta calidad.

Utilizar el punto medio como referencia intradía El IBM (punto medio) es uno de los niveles más observados por los operadores institucionales a lo largo de la sesión. Que el precio gravite hacia el punto medio suele indicar un movimiento de equilibrio o de reversión a la media. Un rechazo fuerte del punto medio, por el contrario, puede indicar continuación en la dirección de la ruptura.

Utilizar las extensiones del 50 % y 100 % como objetivos Una vez que el precio rompe el rango del Balance Inicial, los niveles de extensión del 50 % y 100 % se convierten en objetivos naturales del movimiento. Si el precio rompe por encima del IBH, la extensión IB50% superior se convierte en el primer objetivo, y la extensión IB100% en el segundo. Lo mismo aplica a la inversa para una ruptura por debajo del IBL.

Al combinarlo con herramientas de flujo de órdenes y volumen Los niveles del Desequilibrio de sesión se vuelven mucho más potentes cuando se combinan con herramientas como el mapa de calor o el DOM. Si un gran grupo de órdenes de límite se encuentra justo en el nivel IBH o IBL, esa confluencia hace que el nivel tenga muchas más probabilidades de actuar como una zona de reacción fuerte.

## Cómo añadir el Desequilibrio de sesión a su gráfico

Haga clic en el icono **Indicators** (Indicadores) del gráfico

Busque **Session Imbalance** en la lista y haga clic en + para añadirlo

Haga clic en el icono de configuración del indicador para abrir su ventana de configuración

[SCREENSHOT: Desequilibrio de sesión — Cómo añadir el Desequilibrio de sesión a su gráfico (DeepDOM) | dd-es-session-imbalance-deepdom-02.png]

## Configuración general

Número de minutos (Number of Minutes) Define cuántos minutos se utilizan para calcular el Balance Inicial. El valor predeterminado es 60 minutos para capturar la primera hora completa de trading. Sin embargo, puede ajustarlo: por ejemplo, establézcalo en 15 para usar solo los primeros 15 minutos. También puede aplicar varios indicadores de Desequilibrio de sesión con distintos intervalos de tiempo en el mismo gráfico.

Marco temporal personalizado (Custom Timeframe) Cuando está habilitado, le permite definir manualmente una hora de inicio de sesión personalizada en lugar de usar la predeterminada.

Inicio de sesión – Hora del mercado (Start Session – Market Time) Define la hora de inicio de la sesión. Importante: introduzca siempre la hora del mercado de referencia, no la de su zona horaria local.

Futuros de EE. UU. → 9:30 a.m.

Futuros europeos → 9:00 a.m.

[SCREENSHOT: Desequilibrio de sesión — Configuración general (DeepDOM) | dd-es-session-imbalance-deepdom-03.png]

## Configuración de trazado (Plot Settings)

Color del máximo (High Color) Establece el color de la línea IBH (Imbalance High).

[SCREENSHOT: Desequilibrio de sesión — Configuración de trazado (DeepDOM) | dd-es-session-imbalance-deepdom-04.png]

Color del punto medio (Mid Color) Establece el color de la línea IBM (Mid Point).

[SCREENSHOT: Desequilibrio de sesión — Configuración de trazado (DeepDOM) | dd-es-session-imbalance-deepdom-05.png]

Color del mínimo (Low Color) Establece el color de la línea IBL (Imbalance Low).

[SCREENSHOT: Desequilibrio de sesión — Configuración de trazado (DeepDOM) | dd-es-session-imbalance-deepdom-06.png]

Ancho de línea (Line Width) Establece el grosor de todas las líneas del Desequilibrio de sesión.

[SCREENSHOT: Desequilibrio de sesión — Configuración de trazado (DeepDOM) | dd-es-session-imbalance-deepdom-07.png]

Estilo de línea (Line Style) Establece el estilo de las líneas: por ejemplo, sólida, discontinua o punteada.

[SCREENSHOT: Desequilibrio de sesión — Configuración de trazado (DeepDOM) | dd-es-session-imbalance-deepdom-08.png]

Tamaño de texto (Text Size) Establece el tamaño de fuente de las etiquetas mostradas junto a cada nivel.

[SCREENSHOT: Desequilibrio de sesión — Configuración de trazado (DeepDOM) | dd-es-session-imbalance-deepdom-09.png]

Extender (Extend) Controla hasta dónde se dibujan las líneas del Desequilibrio de sesión a lo largo del gráfico. Hay tres opciones:

None: las líneas se dibujan solo dentro del propio período de balance inicial. Una vez que termina el período, las líneas se detienen y no se extienden más hacia la derecha.

Till Interaction: las líneas se extienden hacia la derecha hasta que el precio interactúa con ellas; es decir, en cuanto el precio toca o cruza un nivel, la línea deja de extenderse en ese punto. Esto es útil si solo quiere ver los niveles que el precio aún no ha probado.

Till End: las líneas se extienden hasta el borde derecho del gráfico, independientemente de si el precio ha interactuado con ellas o no. Esta es la opción predeterminada y le brinda una referencia visual completa de todos los niveles a lo largo de toda la sesión.

[SCREENSHOT: Desequilibrio de sesión — Configuración de trazado (DeepDOM) | dd-es-session-imbalance-deepdom-10.png]

Alineación de texto (Text Align) Establece dónde aparecen las etiquetas con respecto a las líneas. Puede elegir entre:

Left (izquierda)

Center (centro)

Right (derecha)

[SCREENSHOT: Desequilibrio de sesión — Configuración de trazado (DeepDOM) | dd-es-session-imbalance-deepdom-11.png]

[SCREENSHOT: Desequilibrio de sesión — Configuración de trazado (DeepDOM) | dd-es-session-imbalance-deepdom-12.png]

Trazar al finalizar (Plot Once Ended) Cuando esta opción está habilitada, los niveles del Desequilibrio de sesión solo se dibujan en el gráfico una vez que el período de balance inicial se ha cerrado y completado por completo. Esto significa que no verá las líneas formarse ni actualizarse en tiempo real mientras el período de apertura aún esté activo: solo aparecerán cuando el período haya terminado.

Cuando esta opción está deshabilitada, los niveles se dibujan y se actualizan en vivo mientras se forma el período de balance inicial, de modo que puede observar cómo se desarrollan el IBH, el IBL y el punto medio en tiempo real desde el mismo inicio de la sesión.

Utilice Plot Once Ended activado si solo quiere operar con los niveles confirmados y finalizados y prefiere un gráfico limpio durante el período de apertura.

Utilice Plot Once Ended desactivado si quiere supervisar los niveles a medida que se desarrollan y reaccionar a la acción del precio durante el propio período de apertura.

[SCREENSHOT: Desequilibrio de sesión — Configuración de trazado (DeepDOM) | dd-es-session-imbalance-deepdom-13.png]

## Niveles de extensión del 50 % / 100 %

Habilite las líneas de extensión del 50 % y 100 % para trazar niveles proyectados por encima y por debajo del rango del Balance Inicial. Una vez habilitadas, puede establecer un color personalizado para cada extensión.

Estas extensiones se utilizan habitualmente para identificar posibles objetivos o zonas de reacción si el precio rompe más allá del máximo o el mínimo del balance inicial.

[SCREENSHOT: Desequilibrio de sesión — Niveles de extensión del 50 % / 100 % (DeepDOM) | dd-es-session-imbalance-deepdom-14.png]

[SCREENSHOT: Desequilibrio de sesión — Niveles de extensión del 50 % / 100 % (DeepDOM) | dd-es-session-imbalance-deepdom-15.png]

## Conclusión

El indicador Desequilibrio de sesión le brinda una referencia visual instantánea de los niveles de precio más importantes establecidos en la hora de apertura del trading. Combinados con el análisis de volumen y de flujo de órdenes, estos niveles pueden mejorar significativamente la precisión de sus entradas y salidas a lo largo de la sesión.

### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre.

Al ponerse en contacto, incluya:

Una captura de pantalla del problema

Una breve descripción de lo que intentaba hacer

Ticket de soporte (respuesta más rápida) Visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico Escríbanos a support@deepcharts.com; tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.