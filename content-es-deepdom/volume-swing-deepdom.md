---
title: "Volume Swing"
slug: "volume-swing-deepdom"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Volume Swing es una herramienta completa que combina el análisis de volumen con el análisis de swings y tendencias, ofreciéndole una comprensión más profunda de la estructura del mercado y de los puntos de giro críticos."
keywords: ["volume swing", "volume swing deepdom", "deepdom", "indicadores"]
source_hash: "456ea78969908d9d"
ai_translated: true
source_hash: "456ea78969908d9d"
---
Volume Swing es una herramienta completa que combina el análisis de volumen con el análisis de swings y tendencias, ofreciéndole una comprensión más profunda de la estructura del mercado y de los puntos de giro críticos. Al enriquecer el comportamiento de la acción del precio (Price Action) con datos volumétricos, es ideal para operadores que desean una visualización detallada y un control avanzado sobre las condiciones del mercado.

[SCREENSHOT: Volume Swing — vista general (DeepDOM) | dd-es-volume-swing-deepdom-01.png]

Nota: Volume Swing también está disponible en DeepCharts con funcionalidad adicional. Para más detalles, consulte el artículo de Volume Swing en DeepCharts.

### Cómo configurar Volume Swing

Haga clic con el botón derecho en el gráfico y seleccione **Indicators**.

Busque el indicador deseado y añádalo a su espacio de trabajo haciendo clic en el botón "+".

Abra el panel de configuración del indicador, personalice los parámetros según sus preferencias y confirme los cambios haciendo clic en **Save** (Guardar).

[SCREENSHOT: Volume Swing — Cómo configurar Volume Swing (DeepDOM) | dd-es-volume-swing-deepdom-02.png]

## Configuración de Zig Zag

¿Qué es el Zig Zag? El Zig Zag define la estructura de swings: la serie de movimientos de precio que trazan máximos y mínimos a lo largo del gráfico. Volume Swing utiliza esta estructura de swings como base de todos sus cálculos de volumen. En términos simples, determina qué se considera un movimiento de precio significativo antes de que se dibuje un nuevo swing.

1. Modo de Zig Zag (Zig Zag Mode) Selecciona el método utilizado para calcular los swings. Puede elegir entre:

Reversión absoluta (Absolute Reversal): un swing se define por un valor fijo de reversión del precio. El precio debe moverse una cantidad suficiente en la dirección opuesta a la tendencia actual para confirmar un nuevo swing

[SCREENSHOT: Volume Swing — Configuración de Zig Zag (DeepDOM) | dd-es-volume-swing-deepdom-03.png]

Reversión por ticks (Tick Reversal): un swing se define por un número mínimo de ticks moviéndose en la dirección opuesta

[SCREENSHOT: Volume Swing — Configuración de Zig Zag (DeepDOM) | dd-es-volume-swing-deepdom-04.png]

2. Zig Zag Rev. & Absolute Establece el cambio porcentual mínimo requerido para que el precio defina un nuevo swing. Esto controla la sensibilidad del indicador: un valor más alto significa que solo los movimientos más grandes generarán un nuevo swing, mientras que un valor más bajo dibujará swings con mayor frecuencia.

3. Zig Zag Tick Rev. Al utilizar el modo Reversal Tick, define el número exacto de ticks requerido para confirmar una reversión y dibujar un nuevo swing.

[SCREENSHOT: Volume Swing — Configuración de Zig Zag (DeepDOM) | dd-es-volume-swing-deepdom-05.png]

## Configuración de trazado (Plot Settings)

1. Valor del histograma (Histogram Value) Selecciona qué datos volumétricos se muestran en el histograma de barras debajo de cada swing. Las opciones incluyen:

Volumen: muestra el volumen total

Delta de volumen (Volume Delta): la diferencia entre el volumen de compra y el de venta

Delta Trade: la diferencia entre las operaciones de compra y de venta

Vol Per Tick: el volumen promedio por tick dentro del swing

Extensión (Extension): el tamaño del movimiento de precio expresado en número de ticks

2. Todo en uno (All-in-One) Combina múltiples datos volumétricos en un único elemento visual en el gráfico. Las opciones incluyen:

Ninguno (None): sin combinación, cada elemento se muestra por separado

Vol Delta Trade: combina los datos de volumen y de delta trade

Vol Delta: muestra el volumen y el delta juntos

Volumen: muestra únicamente los datos de volumen

3. Signo de visualización (Display Sign) Define cómo se interpreta el signo positivo o negativo para el coloreado del indicador. Las opciones incluyen:

Positivo: coloreado basado solo en valores positivos

Negativo: coloreado basado solo en valores negativos

Based Delta: coloreado determinado por el delta de volumen

Based Trend: coloreado determinado por la dirección del movimiento del precio

4. Modo de color (Color Mode) Selecciona cómo se aplican los colores en el histograma. Las opciones incluyen:

Fijo (Fixed): un único color uniforme utilizado en todo el histograma

Degradado (Fade): los colores se desvanecen gradualmente según la intensidad del valor

Delta Fade: el desvanecimiento está determinado por los valores del delta, haciendo visualmente más evidentes los cambios en la presión de compra o de venta

5. Desv. est. para el coloreado (Std. Dev. for Coloring) Establece el umbral de desviación estándar utilizado para colorear los datos. Un valor más alto reduce la sensibilidad del color a los cambios volumétricos, mientras que un valor más bajo hace que el coloreado reaccione con más facilidad a variaciones de volumen más pequeñas.

[SCREENSHOT: Volume Swing — Configuración de trazado (DeepDOM) | dd-es-volume-swing-deepdom-06.png]

## Configuración de color

Color de barra negativa (Bar Negative Color) El color utilizado para representar las barras con valores negativos en el histograma, que normalmente indican dominio de la presión vendedora.

Color de barra positiva (Bar Positive Color) El color utilizado para representar las barras con valores positivos en el histograma, que normalmente indican dominio de la presión compradora.

Color de la línea de volumen (Volume Line Color) El color utilizado para la superposición de la línea de volumen, que le permite distinguir visualmente las tendencias de volumen asociadas a cada movimiento de swing.

[SCREENSHOT: Volume Swing — Configuración de color (DeepDOM) | dd-es-volume-swing-deepdom-07.png]

## Conclusión

Volume Swing reúne la estructura de swings y los datos de volumen en un solo indicador, facilitando la lectura de la fuerza detrás de cada movimiento del mercado. Ya sea que esté identificando continuaciones de tendencia o posibles reversiones, la combinación de la detección de swings con Zig Zag y los histogramas volumétricos le brinda una imagen más completa que el precio por sí solo.

Para funcionalidad adicional y una explicación más detallada, visite el artículo de Volume Swing en DeepCharts.

### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre.

Al contactarnos, incluya:

Una captura de pantalla del problema

Una breve descripción de lo que intentaba hacer

Ticket de soporte (respuesta más rápida) Visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico Escríbanos a support@deepcharts.com; tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.