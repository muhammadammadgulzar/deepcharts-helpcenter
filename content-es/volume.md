---
title: "Volumen"
slug: "volume"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "beginner"
time: "6 min read"
description: "Histograma del volumen total por barra con coloreado de fondo basado en delta, cálculo basado en segundos, marcadores de absorción, alertas y una línea de volumen promedio."
keywords: ["volumen", "indicador de volumen", "histograma de volumen", "barras de volumen", "fondo de delta", "absorción de volumen", "volumen promedio", "marcador de volumen", "alerta de volumen"]
source_hash: "f39d8b247202a62c"
ai_translated: true
source_hash: "f39d8b247202a62c"
---
El indicador Volumen muestra el volumen total negociado en cada barra como un histograma debajo de su gráfico. En DeepCharts va mucho más allá de un simple trazado de volumen: el fondo del histograma puede colorearse según el delta, los datos pueden filtrarse por tamaño de operación, los marcadores gráficos pueden señalar barras que cumplen las condiciones de volumen y delta que usted defina, y el cálculo puede basarse en segundos para revelar la aceleración dentro de la barra.

Si es nuevo en el flujo de órdenes, este es el primer indicador que debe aprender: casi todas las demás herramientas de volumen y delta se basan en los mismos conceptos.

## Qué es

El volumen es un medidor de actividad por barra. Cada barra del histograma responde a "¿cuánto se negoció aquí?", y el coloreado opcional por delta responde a "¿quién fue más agresivo: los compradores o los vendedores?" Con los marcadores habilitados también responde a "¿fue absorbido un esfuerzo inusualmente grande?"

[SCREENSHOT: Ventana de gráfico con el indicador Volumen en un panel debajo de las velas de precio: barras del histograma visibles con un coloreado de fondo basado en delta y una barra señalada con un marcador de absorción | dc-es-volume-01.png]

## Cuándo usarlo

- Quiere confirmación detrás de los movimientos de precio: un volumen alto en una ruptura señala convicción, un volumen bajo señala debilidad.
- Busca absorción: fuertes empujes de volumen y delta que no logran mover el precio, a menudo precediendo reversiones.
- Opera con gráficos de rango o de tick y quiere volumen basado en segundos para exponer aceleraciones y desaceleraciones en la velocidad de negociación.
- Quiere una lectura de un vistazo de la presión compradora frente a la vendedora mediante los modos de fondo de delta.
- Quiere contexto: la línea de volumen promedio muestra si la actividad actual está por encima o por debajo de lo habitual.

## Inicio rápido

1. Abra la **Indicator List** (lista de indicadores) en su gráfico.
2. Busque **Volume** y haga clic en **+** para añadirlo.
3. Haga clic en el icono **Settings** (configuración) junto al indicador.
4. En la configuración de datos, mantenga **Input data** en **Volume** (consulte [[different-types-of-input]] para saber qué cuentan **Order** y **Aggregate Trade** en su lugar).
5. Establezca **Background Mode** en **Delta Fading** para que el fondo de cada barra del histograma se degrade según la fuerza de la presión compradora o vendedora.
6. Habilite **Average Volume** y establezca un número de días para poder comparar las barras actuales con la norma reciente.
7. Aplique y confirme que el histograma se muestra debajo del gráfico.

[SCREENSHOT: Diálogo de configuración del indicador Volumen abierto en la sección de datos, mostrando el menú desplegable Input data expandido con las entradas Volume, Order y Aggregate Trade y los campos Filter Min / Filter Max debajo | dc-es-volume-02.png]

## Cómo leerlo

- **Barras altas en las rupturas** significan que la participación respalda el movimiento; una ruptura con volumen decreciente es sospechosa.
- **El coloreado por delta** muestra quién fue agresivo: con **Delta Fading**, un fondo alcista fuertemente coloreado significa que los compradores dominaron la barra, y viceversa. Una barra alta con un fondo casi neutro significa una intensa negociación por ambos lados: una batalla, no un consenso.
- **Los marcadores de absorción** (con **Total Delta Absorption** habilitado) señalan barras que alcanzaron un fuerte pico de delta y luego cerraron con delta de signo opuesto: una reversión completa de compra fuerte a venta o al revés, y una advertencia clásica de reversión.
- **El volumen basado en segundos** convierte el histograma en un medidor de velocidad: en gráficos de rango, un volumen por intervalo creciente muestra que el mercado se acelera hacia un nivel, un volumen decreciente muestra que el esfuerzo se agota.
- **La línea de volumen promedio** ancla todo: una barra "alta" solo importa en relación con lo que es normal para ese instrumento en ese momento.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Configuración de datos (Data Setting)

| Configuración | Qué hace |
|---|---|
| **Input data** | Base de datos utilizada para calcular el indicador: **Volume** (cantidad total de contratos o acciones negociados), **Order** (número de órdenes colocadas, útil para medir la participación) o **Aggregate Trade** (número de operaciones ejecutadas, mostrando la frecuencia independientemente del tamaño). Consulte [[different-types-of-input]]. |
| **Filter Min** | Filtro mínimo sobre la base de datos elegida: solo se cuentan los datos por encima de este umbral. |
| **Filter Max** | Filtro máximo sobre la base de datos elegida. Dejado en **0**, no se aplica ningún filtro máximo. |

### Configuración de cálculo (Calculation Settings)

| Configuración | Qué hace |
|---|---|
| **Calculation Based on Seconds** | Cuando está habilitado, el volumen se calcula por intervalo de tiempo en lugar de por barra. Particularmente útil en gráficos de rango para resaltar aceleraciones o desaceleraciones en la velocidad de negociación. |
| **Number of Seconds** | La duración del intervalo para el cálculo basado en segundos: por ejemplo, 5 segundos muestra la aceleración o desaceleración del volumen dentro de ventanas de 5 segundos. |

### Configuración de trazado (Plot Settings)

| Configuración | Qué hace |
|---|---|
| **Minimum Tot Volume** | Volumen total mínimo requerido para que una barra se muestre; las barras más pequeñas se ocultan para que la actividad significativa destaque. |
| **Background Mode** | Cómo se colorea el fondo del histograma: **None** (colores fijos de Series Bull Border/Bull Fill), **Fade** (gradiente a partir de los colores de la serie), **Delta Fading** (se degrada según la fuerza del delta), **Delta Range** (colores de un rango de delta definido por el usuario; el borde toma el color del pico de delta alcanzado), **Volume Slope** (color Bull Border cuando el volumen sube frente a la barra anterior, Bear Border cuando baja), **Price Slope** (coloreado según la dirección del precio). |
| **Delta Input Data** | Base de datos utilizada para el cálculo del delta: **Volume** o **Trade**. |
| **Delta Range** | Abre un subdiálogo para personalizar la colorimetría del delta en rangos de valores definidos por el usuario. |
| **Neutral Color** | Color de fondo utilizado cuando el delta está cerca de cero o es neutro. |
| **Text Settings** | Tamaño y color del texto mostrado en el histograma de volumen. |

### Marcador (configuración, color y alerta)

Habilita marcadores gráficos cuando se cumplen las condiciones de volumen y delta.

| Configuración | Qué hace |
|---|---|
| **Volume Max** | Umbral de pico de volumen: marca las barras que lo superan. |
| **Diff. Vol** | Diferencia de volumen respecto al pico máximo alcanzado. Útil con el cálculo basado en segundos para detectar retrocesos o correcciones de volumen. |
| **Max. Delta** | Delta absoluto máximo que alcanzó la barra: marca las barras con un desequilibrio significativo de compra/venta. |
| **Diff. Delta** | Diferencia de delta respecto al pico máximo alcanzado: útil para identificar absorción de delta o reversiones. |
| **Total Delta Absorption** | Cuando está habilitado, resalta solo las barras que alcanzan el pico especificado y luego cierran con delta de signo opuesto: una reversión completa en la agresión que señala posibles giros. |
| **Calculation on Close** | Cuando está habilitado, el marcador solo se activa al cierre de la barra. Deshabilitado, puede aparecer dentro de la barra y desaparecer de nuevo si las condiciones dejan de cumplirse. |
| **Marker Color** | Colores y opacidad del marcador, diferenciando la absorción en el Bid (los vendedores fueron superados) de la absorción en el Ask (los compradores fueron superados). |
| **Marker Alert** | Notificación sonora y mensaje emergente cuando se cumplen las condiciones del marcador. |

### Volumen promedio (Average Volume)

| Configuración | Qué hace |
|---|---|
| **Average Volume** | Habilita una línea promedio para el volumen y establece el número de días utilizado para calcularla: contexto sobre si el volumen actual está por encima o por debajo de lo habitual. |

## Consejos y errores comunes

- **Interprete el volumen en relación con el promedio, no de forma aislada.** Habilite la línea promedio antes de juzgar cualquier barra como "grande".
- **Mantenga Calculation on Close habilitado mientras aprende.** Los marcadores intrabar que aparecen y desaparecen enseñan malos hábitos; las señales de barra cerrada son estables.
- **Los marcadores de absorción son advertencias, no entradas.** Confirme contra la estructura y la cinta antes de operar en contra de un movimiento: consulte [[orderflow-101]] para conocer la mecánica subyacente.
- **El volumen basado en segundos pertenece a los gráficos de rango y de tick.** En los gráficos de tiempo simples, cada barra ya cubre la misma duración, por lo que la opción aporta poco.
- **Un histograma filtrado es un indicador diferente.** Si establece **Filter Min** alto para aislar operaciones grandes, recuerde que las barras ya no muestran la actividad total: compare con un gráfico sin filtrar antes de sacar conclusiones.

## Artículos relacionados

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-bar]]
- [[big-trades]]
- [[speed-of-tape]]