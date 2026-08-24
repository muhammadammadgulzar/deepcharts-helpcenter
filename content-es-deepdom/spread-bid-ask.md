---
title: "Diferencial de oferta/demanda"
slug: "spread-bid-ask"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "El indicador Diferencial de oferta/demanda (Spread Bid/Ask) mide y traza la distancia entre el mejor precio bid y el mejor precio ask (el diferencial bid–ask) en ticks."
keywords: ["diferencial de oferta demanda", "deepdom diferencial de oferta demanda", "deepdom", "indicadores"]
source_hash: "3186ff7babda6589"
ai_translated: true
source_hash: "3186ff7babda6589"
---
El indicador Diferencial de oferta/demanda (Spread Bid/Ask) mide y traza la distancia entre el mejor precio bid y el mejor precio ask (el diferencial bid–ask) en ticks. Le ayuda a ver cuándo cambian las condiciones de liquidez, por ejemplo, cuando los diferenciales se amplían repentinamente durante períodos de baja liquidez o alta volatilidad, y puede generar alertas cuando el diferencial supera un nivel que usted define.

[SCREENSHOT: Diferencial de oferta/demanda — vista general (DeepDOM) | dd-es-spread-bid-ask-01.png]

## 1. Concepto: diferencial bid–ask

En todos los mercados existe un bid (el precio más alto que los compradores están dispuestos a pagar en ese momento) y un ask u offer (el precio más bajo al que los vendedores están dispuestos a vender). El diferencial bid–ask es la diferencia entre estos dos precios y representa tanto un coste de transacción como una medida directa de la liquidez del mercado.

Los diferenciales estrechos suelen indicar un mercado líquido y competitivo en el que es fácil entrar y salir de posiciones, mientras que los diferenciales amplios suelen darse en condiciones poco profundas o muy volátiles e implican un mayor riesgo de ejecución para las órdenes a mercado.

En DeepDom ya puede ver el diferencial en la ventana Chart area 2; el indicador Diferencial de oferta/demanda resume esta información a lo largo del tiempo en un panel separado, haciendo evidentes los patrones incluso cuando el gráfico está alejado.

## 2. Qué muestra el indicador

Cuando se aplica, el Diferencial de oferta/demanda crea un trazado de línea en un panel separado bajo el gráfico. Cada punto de la línea muestra el diferencial actual en ticks para ese momento. Los picos repentinos de la línea corresponden a los momentos en que el diferencial se amplía, mientras que los valores planos y bajos indican condiciones estables y ajustadas.

Puede usar esta visualización para responder rápidamente a preguntas como: "¿Se dispararon los diferenciales alrededor de esta vela de noticias?", "¿Está el producto operando actualmente con un diferencial constantemente amplio?" o "¿Está mi estrategia a punto de operar en un entorno de baja liquidez?"

## 3. Configuración de alertas

[SCREENSHOT: Diferencial de oferta/demanda — 3. Configuración de alertas (DeepDOM) | dd-es-spread-bid-ask-02.png]

La ventana de configuración del Diferencial de oferta/demanda se centra en una lógica de alertas sencilla pero potente.

### 3.1 Habilitar alerta (Enable Alert)

Enable Alert activa o desactiva la alerta de diferencial. Cuando está habilitada, DeepDom supervisa continuamente el diferencial actual y dispara una alerta cada vez que cruza el umbral que usted configuró.

### 3.2 Nivel de alerta en ticks (Alert Level in Tick)

Alert Level in Tick define cuánto debe ampliarse el diferencial (en ticks) para que se dispare una alerta. Por ejemplo:

Establecer el nivel en 5-6 ticks resalta incluso ampliaciones moderadas, útil para el scalping o instrumentos con diferenciales muy ajustados.

Valores como 10-15 ticks o más se centran solo en condiciones extremas, como durante noticias importantes o cuando la liquidez desaparece repentinamente.

### 3.3 Tiempo de inhibición en segundos (Inhibition Time in Seconds)

Inhibition time in seconds actúa como un período de espera. Después de dispararse una alerta, DeepDom esperará ese tiempo antes de permitir una nueva alerta de diferencial. Esto evita notificaciones repetidas si el diferencial fluctúa alrededor de su umbral.

Por ejemplo, con un nivel de alerta de 5 ticks y una inhibición de 20 segundos, recibirá como máximo una alerta cada 20 segundos aunque el diferencial supere repetidamente los 5 ticks durante esa ventana.

## 4. Usos prácticos en el trading

### 4.1 Evitar malas ejecuciones

Los diferenciales amplios aumentan el deslizamiento y el coste de ejecución de las órdenes a mercado. Una alerta de diferencial puede advertirle de que no persiga un movimiento cuando la liquidez desaparece temporalmente, por ejemplo, alrededor de noticias macroeconómicas programadas o al inicio de sesiones poco líquidas.

### 4.2 Detección de regímenes

Observando la línea del diferencial a lo largo del tiempo puede distinguir entre regímenes "normales" y de "estrés" para cada producto. Las estrategias que dependen de diferenciales muy ajustados (scalping, reversión a la media de alta frecuencia) pueden deshabilitarse de forma automática o manual cuando los diferenciales permanecen por encima de su umbral durante períodos prolongados.

### 4.3 Combinación con herramientas de flujo de órdenes

El Diferencial de oferta/demanda se vuelve aún más potente cuando se combina con herramientas de DeepDom como Imbalance Tracker, Recarga Profunda (Deep Reload) o Deep Trades. Por ejemplo, un pico repentino del diferencial junto con desequilibrios agresivos y recargas suele acompañar a eventos de noticias o capturas de liquidez, que quizá quiera tratar de forma distinta a las rotaciones normales.

## 5. Buenas prácticas

Calibre por instrumento: determine los diferenciales típicos de cada símbolo y establezca el nivel de alerta ligeramente por encima de ese rango normal para ver solo ampliaciones realmente inusuales.

Tenga en cuenta los cambios de sesión: algunos productos operan de forma natural con diferenciales más amplios en la sesión nocturna; quizá necesite plantillas distintas por sesión.

Utilice la inhibición con criterio: una inhibición corta ofrece más detalle pero puede generar muchas alertas; una inhibición más larga es mejor para días de alta volatilidad o cuando supervisa varios mercados a la vez.

### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre.

Al ponerse en contacto, incluya:

Una captura de pantalla del problema

Una breve descripción de lo que intentaba hacer

Ticket de soporte (respuesta más rápida) Visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico Escríbanos a support@deepcharts.com; tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.