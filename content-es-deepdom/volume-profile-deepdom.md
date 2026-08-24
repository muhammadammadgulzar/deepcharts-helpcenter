---
title: "Perfil de volumen"
slug: "volume-profile-deepdom"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "El Deep Profile muestra el volumen negociado en cada nivel de precio durante un período específico. Le ofrece un mapa visual claro de dónde ha tenido lugar la mayor parte de la actividad del mercado, ayudándole a identificar niveles estructurales clave, entre ellos:"
keywords: ["perfil de volumen", "perfil de volumen deepdom", "deepdom", "indicadores"]
source_hash: "b484e60e1b7ebbd5"
ai_translated: true
source_hash: "b484e60e1b7ebbd5"
---
El Deep Profile muestra el volumen negociado en cada nivel de precio durante un período específico. Le ofrece un mapa visual claro de dónde ha tenido lugar la mayor parte de la actividad del mercado, ayudándole a identificar niveles estructurales clave, entre ellos:

POC (Point of Control): el nivel de precio con el mayor volumen negociado

Área de valor (Value Area): el rango de precios donde se produjo un porcentaje definido del volumen total

Nodos de alto volumen (HVN): niveles de precio con actividad intensa, que a menudo actúan como soporte o resistencia

Nodos de bajo volumen (LVN): niveles de precio con poca actividad, que a menudo permiten que el precio los atraviese rápidamente

[SCREENSHOT: Perfil de volumen — vista general (DeepDOM) | dd-es-volume-profile-deepdom-01.png]

### Cómo añadir el perfil de volumen a su gráfico

Haga clic con el botón derecho en el gráfico y seleccione **Indicators**.

Busque el indicador deseado y añádalo a su espacio de trabajo haciendo clic en el botón "+".

Abra el panel de configuración del indicador, personalice los parámetros según sus preferencias y confirme los cambios haciendo clic en **Save** (Guardar).

[SCREENSHOT: Perfil de volumen — Cómo añadir el perfil de volumen a su gráfico (DeepDOM) | dd-es-volume-profile-deepdom-02.png]

## Configuración general

Tipo de Vbp (Vbp Type) Seleccione qué datos muestra el perfil:

Volumen: muestra el volumen total negociado en cada nivel de precio, resaltando las zonas más activas

Volumen Ask/Bid: divide el volumen en ask (venta) y bid (compra) por separado, mostrando el equilibrio entre compradores y vendedores

Delta: muestra la diferencia entre el volumen de compra y el de venta en cada nivel, útil para identificar la presión del mercado

Delta total y volumen: combina el delta y el volumen total para una vista completa de la actividad en cada nivel de precio

Agrupamiento (Grouping) Define cómo se agrupan los niveles de precio en el perfil:

Automático: DeepDom agrupa automáticamente los ticks según las características del mercado y la resolución del gráfico

Manual: le permite especificar un número personalizado de ticks para el agrupamiento

Factor de agrupamiento automático (Auto Group Factor) Al utilizar el agrupamiento automático, define con qué intensidad se agregan los ticks. Un valor más alto implica una mayor agregación y un perfil más amplio.

Ticks manuales (Manual Ticks) Al utilizar el agrupamiento manual, establece el número exacto de ticks que se agrupan, dándole un control preciso sobre la granularidad del perfil.

[SCREENSHOT: Perfil de volumen — Configuración general (DeepDOM) | dd-es-volume-profile-deepdom-03.png]

## Configuración de trazado (Plot Settings)

Método de color (Method Color): define cómo se colorean las barras del perfil:

Ninguno (None): no se aplica color, visualización simple de los datos

Fijo (Fixed): un único color uniforme aplicado a todos los niveles de precio

Degradado (Fading): la intensidad del color varía con el volumen; los niveles con mayor volumen aparecen más intensos y los de menor volumen más claros

Más colores (More Colors): utiliza una gama de colores para representar los distintos niveles de volumen, totalmente personalizable por el usuario

Cálculo de color (Color Calculation): define qué representa el color:

Volumen: colores basados en el volumen total

Delta: colores basados en la diferencia entre órdenes de compra y de venta

Desequilibrio (Imbalance): colores basados en el desequilibrio de órdenes

Color Le permite establecer colores fijos para el volumen, el bid, el ask y la línea del perfil.

Rango (Range) Define el rango utilizado para la escala de color:

Automático: utiliza los rangos predeterminados de la plataforma

Usuario (User): le permite definir rangos de valores personalizados

[SCREENSHOT: Perfil de volumen — Configuración de trazado (DeepDOM) | dd-es-volume-profile-deepdom-04.png]

Mostrar texto (Show Text) Cuando está habilitado, muestra el volumen total negociado en cada tick o nivel de precio directamente sobre las barras del perfil.

Configuración de texto (Text Settings) Le permite personalizar el color de las etiquetas de bid, ask y volumen total, así como el tamaño de la fuente.

[SCREENSHOT: Perfil de volumen — Configuración de trazado (DeepDOM) | dd-es-volume-profile-deepdom-05.png]

## POC (Point of Control)

El POC es el nivel de precio con el mayor volumen negociado dentro del perfil. Es uno de los niveles de referencia más importantes en el análisis de volumen.

Habilitar (Enable): mostrar u ocultar el POC en el gráfico

Resaltar (Highlight): destacar visualmente la barra del POC dentro del perfil para que sobresalga

Color de resaltado (Highlight Color): establecer el color utilizado para el resaltado del POC

Mostrar línea (Show Line): dibujar una línea horizontal que se extiende desde el POC a lo largo del gráfico

Color de línea (Line Color): establecer el color de la línea del POC

Grosor de línea (Line Width): establecer el grosor de la línea del POC

[SCREENSHOT: Perfil de volumen — POC (Point of Control) (DeepDOM) | dd-es-volume-profile-deepdom-06.png]

## Área de valor

El Área de valor es el rango de precios dentro del cual se produjo un porcentaje definido del volumen total. Representa la zona de mayor aceptación del mercado.

Habilitar (Enable): mostrar u ocultar el Área de valor en el gráfico

% del Área de valor (% Value Area): establecer el porcentaje del volumen total utilizado para definir el Área de valor. El valor predeterminado suele ser el 70 %, es decir, el rango dentro del cual se produjo el 70 % de todo el volumen

Resaltar (Highlight): resaltar visualmente el Área de valor sobre las velas

Color exterior (Outside Color): establecer el color aplicado a la zona fuera del Área de valor, ayudando a distinguirla con claridad

Mostrar línea (Show Line): dibujar líneas que marcan el máximo del Área de valor (VAH) y el mínimo del Área de valor (VAL)

Color de línea (Line Color): establecer el color de las líneas límite del Área de valor

Grosor de línea (Line Width): establecer el grosor de las líneas límite del Área de valor

[SCREENSHOT: Perfil de volumen — Área de valor (DeepDOM) | dd-es-volume-profile-deepdom-07.png]

## Picos y valles

Los picos y valles resaltan zonas de alta y baja concentración de volumen dentro del perfil:

Picos (Peaks): niveles de precio donde el volumen está fuertemente concentrado, lo que a menudo indica un fuerte interés del mercado y un posible soporte o resistencia

Valles (Valleys): niveles de precio donde el volumen es muy escaso, que a menudo actúan como zonas vacías por las que el precio puede moverse rápidamente

Sensibilidad (Sensitivity) Controla con qué rigor se identifican los picos y valles. Un valor más alto implica menos picos y valles, pero más significativos. Un valor más bajo muestra más niveles con un filtro más laxo.

Configuración de picos (Peak Settings)

Resaltar (Highlight): marcar visualmente los niveles de pico en el perfil

Volumen mínimo (Minimum Volume): establecer un umbral de volumen mínimo; los picos por debajo de este valor no se mostrarán

Color de resaltado (Highlight Color): establecer el color de los resaltados de pico

Mostrar línea (Show Line): dibujar una línea horizontal en cada nivel de pico

Grosor de línea (Line Width): establecer el grosor de la línea de pico

Color de línea (Line Color): establecer el color de la línea de pico

Configuración de valles (Valley Settings)

Resaltar (Highlight): marcar visualmente los niveles de valle en el perfil

Volumen mínimo (Minimum Volume): establecer un umbral de volumen mínimo; los valles por debajo de este valor no se mostrarán

Color de resaltado (Highlight Color): establecer el color de los resaltados de valle

Mostrar línea (Show Line): dibujar una línea horizontal en cada nivel de valle

Grosor de línea (Line Width): establecer el grosor de la línea de valle

Color de línea (Line Color): establecer el color de la línea de valle

[SCREENSHOT: Perfil de volumen — Picos y valles (DeepDOM) | dd-es-volume-profile-deepdom-08.png]

## Resumen

El Resumen (Summary) muestra un panel de datos detallado para cada perfil de volumen del gráfico, que incluye el volumen total, el delta, el número de operaciones, el número de ticks y otras estadísticas. Esto facilita comparar de un vistazo la actividad entre distintas sesiones o períodos de tiempo.

Habilitar resumen (Enable Summary): mostrar u ocultar el panel de resumen de cada perfil

Color de texto (Text Color): establecer el color del texto del resumen

Color de ask (Ask Color): establecer el color que representa el volumen de ask en el resumen

Color de bid (Bid Color): establecer el color que representa el volumen de bid en el resumen

[SCREENSHOT: Perfil de volumen — Resumen (DeepDOM) | dd-es-volume-profile-deepdom-09.png]

## Etiquetas en línea

Color de texto (Text Color): editar el color de las líneas

Texto en línea (Text on Line): habilita las etiquetas en las líneas derivadas del perfil de volumen, como las etiquetas del VPOC y del máximo/mínimo del Área de valor

[SCREENSHOT: Perfil de volumen — Etiquetas en línea (DeepDOM) | dd-es-volume-profile-deepdom-10.png]

## Conclusión

El indicador Deep Profile es una de las herramientas más completas disponibles en DeepDom para comprender la estructura del mercado. Al identificar dónde se ha concentrado el volumen y dónde está ausente, obtiene una ventaja significativa a la hora de localizar niveles de soporte y resistencia relevantes, planificar entradas y comprender el contexto general de la acción del precio.

### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre.

Al contactarnos, incluya:

Una captura de pantalla del problema

Una breve descripción de lo que intentaba hacer

Ticket de soporte (respuesta más rápida) Visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico Escríbanos a support@deepcharts.com; tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.