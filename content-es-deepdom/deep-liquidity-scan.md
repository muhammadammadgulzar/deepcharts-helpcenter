---
title: "Análisis de Liquidez Profunda (Deep Liquidity Scan)"
slug: "deep-liquidity-scan"
category: "Deep Indicators"
subcategory: ""
type: "reference"
difficulty: "advanced"
time: "15 min read"
description: "El Análisis de Liquidez Profunda (Deep Liquidity Scan) monitorea y muestra en tiempo real el nivel de liquidez pasiva en los lados Bid (demanda) y Ask (oferta) del mercado."
keywords: ["análisis de liquidez profunda", "análisis de liquidez profunda deepdom", "deepdom", "indicadores deep"]
source_hash: "99efb62234e0497d"
ai_translated: true
source_hash: "99efb62234e0497d"
---
El Análisis de Liquidez Profunda (Deep Liquidity Scan) monitorea y muestra en tiempo real el nivel de liquidez pasiva en los lados Bid (demanda) y Ask (oferta) del mercado. Le muestra dónde se concentran las órdenes de límite en el DOM (Depth of Market) y cómo va cambiando con el tiempo el equilibrio entre compradores y vendedores.

Al usar colores distintos para Bid, Ask y delta, el indicador le ayuda a detectar rápidamente momentos de máximo interés y posibles reacciones del precio antes de que sean visibles solo en el precio.

[SCREENSHOT: Análisis de Liquidez Profunda — vista general (DeepDOM) | dd-es-deep-liquidity-scan-01.png]

¿Qué es la liquidez pasiva? La liquidez pasiva se refiere a las órdenes de límite que permanecen en el libro de órdenes esperando a ser ejecutadas. Por ejemplo, un operador coloca una orden de compra de límite en 26.750: esa orden permanece en el libro como liquidez pasiva en el lado Bid. No está golpeando activamente el mercado, está esperando a que el precio llegue a ella. El rastreador de liquidez mide cuánta de esta liquidez pasiva hay en cada lado del mercado en un momento dado, y cómo cambia ese equilibrio con el tiempo.

### Cómo leer el indicador de un vistazo

Entender lo que le dicen las líneas es el primer paso para usar esta herramienta eficazmente:

La liquidez del Bid aumenta: se están acumulando más órdenes de compra de límite por debajo del precio actual. Los compradores se están apilando y pueden sostener el precio o provocar un rebote.

La liquidez del Ask aumenta: se están apilando más órdenes de venta de límite por encima del precio. Los vendedores se están posicionando y pueden limitar o empujar el precio a la baja.

Delta positivo: la liquidez del Bid supera a la del Ask, los compradores son más agresivos en su posicionamiento pasivo.

Delta negativo: la liquidez del Ask supera a la del Bid, los vendedores llevan la ventaja en el posicionamiento pasivo.

El delta cruza el cero: se está produciendo un cambio de dominancia entre compradores y vendedores; preste mucha atención a la reacción del precio en ese momento.

### Uso del Análisis de Liquidez Profunda con el mapa de calor / DOM

El Análisis de Liquidez Profunda funciona mejor en combinación con el mapa de calor o el panel del DOM (Depth of Market). Este es un flujo de trabajo sencillo:

Observe el mapa de calor o el DOM en busca de grandes agrupaciones de órdenes de límite en niveles de precio específicos.

Monitoree el Análisis de Liquidez Profunda para confirmar si la liquidez global del Bid o del Ask está creciendo o disminuyendo.

Una línea de Bid ascendente en el indicador, combinada con una gran agrupación visible de compras de límite en el mapa de calor, refuerza la posibilidad de una reacción de soporte en ese nivel.

Un pico en el delta seguido de un movimiento del precio puede indicar que un lado absorbió al otro, útil para cronometrar entradas o salidas.

Consejo: utilice las opciones de suavizado del indicador para reducir el ruido y centrarse en cambios de liquidez sostenidos en lugar de picos momentáneos.

### Cómo configurar el Análisis de Liquidez Profunda

Siga estos pasos para añadir el indicador a su gráfico:

Haga clic con el botón derecho en el gráfico y seleccione **Indicators** (Indicadores).

Busque el indicador deseado y añádalo a su espacio de trabajo haciendo clic en el botón "+".

Abra el panel de configuración del indicador, personalice los parámetros según sus preferencias y confirme los cambios haciendo clic en **Save** (Guardar).

[SCREENSHOT: Análisis de Liquidez Profunda — Cómo configurar el Análisis de Liquidez Profunda (DeepDOM) | dd-es-deep-liquidity-scan-02.png]

## Configuración general

1. Num Lev Depth - Este ajuste controla cuán profundo mira el indicador en el libro de órdenes al medir la liquidez. El libro de órdenes tiene muchos niveles de precio: algunos muy cercanos al precio actual y otros lejanos. Este ajuste indica al indicador cuántos de esos niveles incluir en su cálculo.

Un valor bajo (por ejemplo, 20) significa que el indicador solo mira los 20 niveles más cercanos al precio actual. Esto le da una vista ajustada y enfocada de la liquidez justo alrededor de donde se está negociando el precio.

Un valor alto (por ejemplo, 200) significa que el indicador mira mucho más profundo en el libro, capturando liquidez que está lejos del precio actual.

[SCREENSHOT: Análisis de Liquidez Profunda — Configuración general (DeepDOM) | dd-es-deep-liquidity-scan-03.png]

Cuándo usar un valor bajo: si quiere ver la presión de liquidez inmediata, las órdenes que podrían ejecutarse muy pronto.

Cuándo usar un valor alto: si quiere una imagen más amplia del interés general del mercado y de dónde se encuentran las grandes órdenes pasivas más alejadas del precio.

#### Ejemplos - Num Lev Depth - 20

#### Num Lev Depth - 200

[SCREENSHOT: Análisis de Liquidez Profunda — Num Lev Depth - 200 (DeepDOM) | dd-es-deep-liquidity-scan-04.png]

2. Calc Mode - Este ajuste controla el método utilizado para calcular la liquidez a través de todos los niveles de profundidad que seleccionó con Num Lev Depth.

Normal: cada nivel de profundidad se trata por igual. Ya sea que una orden esté a 1 nivel del precio o a 100 niveles de distancia, cuenta lo mismo. Esto le da un total directo y sin ponderar de toda la liquidez en el rango seleccionado.

Exponential: los niveles más cercanos al precio actual reciben más peso que los niveles lejanos. Esto significa que la liquidez situada justo al lado del precio influye más en la lectura del indicador que la liquidez situada en lo profundo del libro.

[SCREENSHOT: Análisis de Liquidez Profunda — Num Lev Depth - 200 (DeepDOM) | dd-es-deep-liquidity-scan-05.png]

Cuándo usar Normal: cuando quiere una vista simple e igualitaria de toda la liquidez disponible en la profundidad seleccionada.

Cuándo usar Exponential: cuando cree que la liquidez más cercana al precio actual es más relevante y debe tener un mayor impacto en la lectura. Esto es útil en mercados rápidos donde la liquidez cercana es lo más importante.

3. Value Reference - Este ajuste define la referencia que el indicador utiliza al comparar y mostrar los niveles de liquidez

Last: el indicador compara la liquidez actual con la lectura más reciente. Esto mantiene la visualización responsiva y en movimiento con los cambios en tiempo real del libro.

Peak: el indicador compara la liquidez actual con el nivel de liquidez más alto que ha visto. Esto significa que la visualización siempre es relativa a la mayor lectura registrada, facilitando ver cómo se compara la liquidez actual con el máximo.

[SCREENSHOT: Análisis de Liquidez Profunda — Num Lev Depth - 200 (DeepDOM) | dd-es-deep-liquidity-scan-06.png]

Cuándo usar Last: cuando quiere una vista en vivo, momento a momento, de cómo está cambiando la liquidez ahora mismo.

Cuándo usar Peak: cuando quiere ver si la liquidez actual se está acercando a un máximo histórico o alejándose de él.

4. Exp Half-Weight Lev - Este ajuste solo se aplica cuando Calc Mode está establecido en Exponential. Controla la rapidez con la que se desvanece la influencia de los niveles más profundos del libro en comparación con los niveles cercanos al precio actual.

Piense en ello como un dial que controla cuán rápido cae la ponderación a medida que se adentra en el libro:

Un valor bajo significa que el peso cae muy rápidamente. Solo los niveles muy cercanos al precio tienen una influencia significativa. Todo lo que esté más profundo en el libro se ignora en gran medida.

Un valor alto significa que el peso cae más gradualmente. Los niveles más profundos del libro todavía contribuyen bastante a la lectura global.

[SCREENSHOT: Análisis de Liquidez Profunda — Num Lev Depth - 200 (DeepDOM) | dd-es-deep-liquidity-scan-07.png]

Ejemplo simple: si esto se establece en 5, significa que al llegar al nivel 5 del libro, el peso de ese nivel ya es la mitad del que tiene el nivel 1. Cuanto más lejos vaya, menos cuenta.

5. Value Smooth - Los datos brutos del libro de órdenes pueden ser muy ruidosos: cambian de forma rápida y constante, lo que puede hacer que las líneas del indicador salten y sean difíciles de leer. Este ajuste aplica un suavizado a los datos para que las líneas se vean más limpias y sean más fáciles de seguir.

None — sin suavizado. Ve cada cambio bruto a medida que ocurre. Ideal para scalpers que necesitan la señal más rápida posible.

One Sec — suavizado de 1 segundo.

Three Secs — suavizado de 3 segundos.

Five Secs — suavizado de 5 segundos.

Ten Secs — suavizado de 10 segundos.

Thirty Secs — suavizado de 30 segundos.

One Min — suavizado de 1 minuto. Ideal para marcos temporales más lentos en los que solo quiere ver cambios sostenidos y significativos.

[SCREENSHOT: Análisis de Liquidez Profunda — Num Lev Depth - 200 (DeepDOM) | dd-es-deep-liquidity-scan-08.png]

Cuándo no usar suavizado: mercados rápidos, scalping, o cuando necesita reaccionar instantáneamente a los cambios en tiempo real.

Cuándo usar suavizado: swing trading, seguimiento de tendencia, o cuando los datos brutos son demasiado ruidosos para leerse con claridad.

6. Level Mode - Este ajuste filtra qué tipos de niveles del libro de órdenes se incluyen en el cálculo de liquidez. No todas las órdenes de límite del libro se comportan de la misma manera: algunas son completamente nuevas y otras llevan mucho tiempo allí. Este ajuste le permite elegir cuáles medir.

All: el indicador incluye todos los niveles dentro de la profundidad seleccionada, sin importar si la orden acaba de aparecer o lleva un tiempo allí. Esta es la vista más amplia y la configuración predeterminada.

Fresh Only: solo se incluyen los niveles que han aparecido recientemente en el libro. Son órdenes que se acaban de colocar. Esto es útil para detectar posicionamientos nuevos y agresivos: cuando los operadores colocan de repente órdenes grandes, lo verá aquí.

Persistent Only: solo se incluyen los niveles que llevan un tiempo en el libro. Son órdenes en reposo y comprometidas, liquidez que no se ha cancelado y que genuinamente espera ser ejecutada. Esto es útil para encontrar zonas fuertes de soporte o resistencia respaldadas por operadores pacientes y comprometidos.

[SCREENSHOT: Análisis de Liquidez Profunda — Num Lev Depth - 200 (DeepDOM) | dd-es-deep-liquidity-scan-09.png]

Cuándo usar Fresh Only: cuando quiere detectar nuevo flujo de órdenes y saber cuándo los participantes se están posicionando de repente.

Cuándo usar Persistent Only: cuando quiere identificar dónde se encuentra la liquidez pasiva fuerte y comprometida; estos niveles tienen más probabilidades de actuar como soporte o resistencia reales.

## Configuración de trazado (Plot Settings)

Estos ajustes controlan la apariencia visual de las líneas de Bid y Ask en el panel del indicador.

1. Bid Color - Establece el color de la línea que representa la liquidez del Bid (el lado de la demanda). Elija un color que destaque claramente en su gráfico. El verde es el predeterminado y se usa comúnmente para representar el interés comprador.

2. Ask Color - Establece el color de la línea que representa la liquidez del Ask (el lado de la oferta). Elija un color que contraste con el color del Bid para que las dos líneas sean fáciles de distinguir de un vistazo. El morado o el rojo se usan comúnmente para representar el interés vendedor.

3. Line Width - Establece el grosor de las líneas de Bid y Ask. Un número más alto hace las líneas más gruesas y fáciles de ver. Un número más bajo las mantiene finas y menos intrusivas en el gráfico. Ajústelo según el tamaño de su pantalla y su preferencia personal.

[SCREENSHOT: Análisis de Liquidez Profunda — Configuración de trazado (DeepDOM) | dd-es-deep-liquidity-scan-10.png]

## Configuración de delta

El delta es una de las lecturas más importantes que proporciona el indicador. Le muestra la diferencia entre la liquidez del Bid y la liquidez del Ask en un momento dado; en otras palabras, qué lado del mercado tiene actualmente más órdenes pasivas en el libro, y por cuánto.

1. Delta Enable

Es un simple interruptor de activación/desactivación para la visualización del delta. Cuando está activado, el delta se muestra como una línea o un histograma junto a las líneas de Bid y Ask. Cuando está desactivado, solo se muestran las líneas de Bid y Ask.

Actívelo si quiere monitorear activamente el desequilibrio entre compradores y vendedores. Desactívelo si prefiere un gráfico más limpio que muestre solo la liquidez bruta de Bid y Ask.

[SCREENSHOT: Análisis de Liquidez Profunda — Configuración de delta (DeepDOM) | dd-es-deep-liquidity-scan-11.png]

2. Delta Value

Este ajuste define exactamente qué mide el delta y cómo se calcula. Hay tres opciones:

Delta: es la diferencia bruta y absoluta entre la liquidez del Bid y la del Ask. Si hay 500 unidades de liquidez en el Bid y 300 en el Ask, el delta marca +200. Es la forma más directa de ver el desequilibrio en números reales.

Percentual Delta: en lugar de mostrar la diferencia bruta, expresa el desequilibrio como porcentaje de la liquidez total. Con el mismo ejemplo, el total es de 800 unidades y el Bid tiene 200 más que el Ask, por lo que el Percentual Delta mostraría +25%. Es útil cuando quiere comparar el desequilibrio relativo en lugar del tamaño absoluto.

Percentual Value: muestra la liquidez del Bid o del Ask expresada como porcentaje de la liquidez total combinada. Por ejemplo, si el Bid es 500 de un total de 800, mostraría aproximadamente 62,5%. Le da una vista proporcional de cuánto representa cada lado.

[SCREENSHOT: Análisis de Liquidez Profunda — Configuración de delta (DeepDOM) | dd-es-deep-liquidity-scan-12.png]

Cuándo usar Delta: cuando quiere ver el tamaño bruto del desequilibrio en términos de mercado.

Cuándo usar Percentual Delta: cuando quiere normalizar el desequilibrio y compararlo entre distintas condiciones de mercado o instrumentos.

Cuándo usar Percentual Value: cuando quiere ver qué proporción de la liquidez total representa cada lado en cada momento. 3. Delta as Histogram

Este interruptor cambia cómo se muestra el delta en el gráfico.

Histograma (activado): el delta se muestra como un gráfico de barras. Cada barra crece hacia arriba (positivo) o hacia abajo (negativo) desde la línea cero según qué lado tenga más liquidez. Cuanto más alta la barra, más fuerte el desequilibrio. Esto hace muy fácil ver de un vistazo picos repentinos y reversiones en el equilibrio de la liquidez.

Línea (desactivado): el delta se muestra como una línea continua que sube y baja alrededor de la línea cero. Es mejor para seguir la tendencia suave y la dirección del desequilibrio a lo largo del tiempo, por ejemplo, si la dominancia del Bid está creciendo o desvaneciéndose gradualmente.

[SCREENSHOT: Análisis de Liquidez Profunda — Configuración de delta (DeepDOM) | dd-es-deep-liquidity-scan-13.png]

Cuándo usar el histograma: cuando está observando activamente cambios o picos repentinos en el desequilibrio de liquidez y quiere una señal visual clara e inmediata.

Cuándo usar la línea: cuando quiere seguir la tendencia general del desequilibrio y ver si está creciendo o disminuyendo de forma consistente en una dirección. 4. Delta Positive Color

Establece el color utilizado para el delta cuando es positivo, es decir, cuando la liquidez del Bid es mayor que la del Ask. Este color rellena las barras del histograma o colorea la línea cuando los compradores tienen más órdenes pasivas en el libro que los vendedores.

5. Delta Negative Color

Establece el color utilizado para el delta cuando es negativo, es decir, cuando la liquidez del Ask es mayor que la del Bid. Este color rellena las barras del histograma o colorea la línea cuando los vendedores tienen más órdenes pasivas en el libro que los compradores.

[SCREENSHOT: Análisis de Liquidez Profunda — Configuración de delta (DeepDOM) | dd-es-deep-liquidity-scan-14.png]

## Línea cero

La línea cero es la línea horizontal en el centro de la visualización del delta. Marca el punto exacto donde la liquidez del Bid y la del Ask son iguales: ningún lado tiene más que el otro. Cuando el delta está por encima de la línea cero, domina la liquidez del Bid. Cuando está por debajo, domina la del Ask. Cuando la cruza, el equilibrio acaba de cambiar.

#### 1. Zero Line Color

Establece el color de la línea cero. Elija un color que sea visible pero que no distraiga de las líneas de Bid, Ask y delta. Un color neutro como el blanco o el gris funciona bien con la mayoría de los temas de gráfico.

[SCREENSHOT: Análisis de Liquidez Profunda — 1. Zero Line Color (DeepDOM) | dd-es-deep-liquidity-scan-15.png]

#### Zero Line Style

Define el estilo visual de la línea cero. Las opciones incluyen:

Solid — una línea continua sin interrupciones.

Dash — una línea discontinua.

Dot — una línea de puntos.

Dash Dot — alterna entre un guion y un punto.

Dash Dot Dot — alterna entre un guion y dos puntos.

3. Zero Line Width

Establece el grosor de la línea cero. Manténgala lo suficientemente fina como para que no compita visualmente con la línea o el histograma del delta. Un grosor de 1 suele ser suficiente.

[SCREENSHOT: Análisis de Liquidez Profunda — Zero Line Style (DeepDOM) | dd-es-deep-liquidity-scan-16.png]

#### Zero Line View -

[SCREENSHOT: Análisis de Liquidez Profunda — Zero Line View - (DeepDOM) | dd-es-deep-liquidity-scan-17.png]

## Ejes

Estos ajustes controlan contra qué escala se mide cada parte del indicador. Esto es importante porque los valores de Bid y Ask pueden ser números muy grandes, mientras que el delta es una diferencia más pequeña entre ellos. Ponerlos en la misma escala puede hacer que uno parezca plano o ilegible.

#### 1. Bid Ask Axis

Define contra qué eje se escalan las líneas de Bid y Ask:

Primary: las líneas de Bid y Ask se trazan contra el eje derecho, usando su propia escala independiente.

Secondary: las líneas de Bid y Ask se trazan contra el eje izquierdo.

#### 2. Delta Axis

Define contra qué eje se escala la línea o el histograma del delta:

Primary: el delta se traza contra el eje derecho con su propia escala.

Secondary: el delta se traza contra el eje izquierdo.

Consejo: como se muestra en el ejemplo anterior, la configuración recomendada es colocar el **Bid Ask Axis** en Secondary (eje izquierdo) y el **Delta Axis** en Primary (eje derecho). Esto mantiene el delta claramente legible en el lado derecho, mientras que las líneas de Bid y Ask se escalan de forma independiente a la izquierda. Esto evita que los grandes valores de Bid y Ask compriman el delta en una línea plana e ilegible.

[SCREENSHOT: Análisis de Liquidez Profunda — 2. Delta Axis (DeepDOM) | dd-es-deep-liquidity-scan-18.png]

#### Axis View -

Bid Ask Axis - Secondary

Delta Axis - Primary

[SCREENSHOT: Análisis de Liquidez Profunda — Axis View - (DeepDOM) | dd-es-deep-liquidity-scan-19.png]

## Conclusión

El Análisis de Liquidez Profunda le ofrece una vista en tiempo real de dónde se está acumulando y desplazando la liquidez pasiva en el DOM. Al monitorear el equilibrio entre la liquidez del Bid y del Ask y observar los cambios significativos en el delta, especialmente cuando cruza la línea cero, puede obtener una visión temprana de posibles reacciones del precio antes de que sean visibles únicamente en la acción del precio.

Combinado con el mapa de calor o el panel del DOM, este indicador se convierte en una herramienta poderosa para comprender la imagen completa del flujo de órdenes y la intención del mercado.

### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre.

Cuando se ponga en contacto, incluya:

Una captura de pantalla del problema

Una breve descripción de lo que intentaba hacer

Ticket de soporte (respuesta más rápida): visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico: escríbanos a support@deepcharts.com. Tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.