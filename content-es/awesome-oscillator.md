---
title: "Oscilador Awesome"
slug: "awesome-oscillator"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Cómo el Oscilador Awesome compara una media móvil rápida y una lenta para mostrar cambios de impulso como un histograma, con cada configuración del AO en DeepCharts."
keywords: ["AO", "indicador oscilador awesome", "oscilador awesome de bill williams", "histograma ao", "oscilador awsome"]
source_hash: "8e43ddfe0701fafe"
ai_translated: true
source_hash: "8e43ddfe0701fafe"
---
El Oscilador Awesome (AO), popularizado por el trader Bill Williams, evalúa el impulso del mercado contrastando una media móvil de corto plazo con una de más largo plazo: 5 y 34 períodos de forma predeterminada. El resultado se dibuja como un histograma que fluctúa alrededor de una línea cero, haciendo visibles los cambios de impulso de un vistazo.

En DeepCharts, el AO se renderiza en su propia área de gráfico con coloreado automático basado en la pendiente y una línea de media (señal) opcional.

## Qué es

El AO responde: ¿hacia qué lado se inclina el impulso, y está acelerando o desvaneciéndose? Cuando la media corta se sitúa por encima de la larga, el histograma está por encima de cero: impulso alcista. Cuando cae por debajo, el histograma está por debajo de cero: impulso bajista. Los cambios de barra a barra muestran la aceleración: barras que crecen alejándose de cero significan que el movimiento gana velocidad, barras que se encogen hacia cero significan que la pierde. Los operadores lo usan para identificar cambios de impulso, la fuerza de la tendencia, posibles reversiones y aceleración alcista o bajista.

## Cuándo usarlo

- Quiere el impulso como un histograma que pueda leer con visión periférica mientras se concentra en el precio.
- Necesita un marcador objetivo del régimen de impulso: en qué lado de cero está el histograma.
- Quiere información de aceleración: si el empuje actual es más fuerte o más débil que el anterior.
- Sigue configuraciones al estilo de Bill Williams (cruce de línea cero, twin peaks, saucer) que están definidas sobre este indicador en concreto.

## Inicio rápido

1. Abra un gráfico y pulse **Ctrl I**, o haga clic en el icono de gráfico de barras en la barra de herramientas del gráfico y luego en **Indicators**, para abrir la lista **Indicator List**.
2. Busque "Awesome" y haga clic en **+** para añadir el oscilador. Se renderiza en su propia área de gráfico debajo de las barras de precio (consulte [[indicator-layout]]).
3. Haga clic en el icono de engranaje en la fila del indicador para abrir su configuración.
4. Mantenga los valores predeterminados para empezar: **Average Type** Simple, **AO Length 1** 5, **AO Length 2** 34. Deje activado el coloreado automático basado en la pendiente para que las barras ascendentes y descendentes se coloreen de forma diferente.

[SCREENSHOT: Un gráfico con el histograma del Oscilador Awesome en su propia área debajo del precio, barras coloreadas según la pendiente, cruzando de debajo a encima de la línea cero durante una subida | dc-es-awesome-oscillator-01.png]

## Cómo leerlo

- **Línea cero.** Histograma por encima de cero: la media rápida está por encima de la lenta y el impulso está en el lado alcista. Por debajo de cero: bajista. Un cruce de la línea cero marca un cambio de régimen de impulso.
- **Color de barra y pendiente.** Una barra ascendente (coloreada como tal por el coloreado automático de pendiente) significa que el impulso se está construyendo en esa dirección; una barra descendente significa que se está desvaneciendo, incluso mientras el histograma permanece en el mismo lado de cero.
- **Twin peaks.** Dos picos del histograma en el mismo lado de cero, el segundo menos profundo que el primero, advierten de que el empuje se está debilitando: un patrón clásico de divergencia del AO.
- **Saucer.** Una breve pausa de barras descendentes seguida de una reanudación de barras ascendentes, todo en un mismo lado de cero, es una señal de continuación en la dirección del impulso predominante.

[SCREENSHOT: Primer plano del área de gráfico del AO mostrando un patrón de twin peaks — dos picos por encima de cero con el segundo más bajo, seguido de un cruce por debajo de la línea cero | dc-es-awesome-oscillator-02.png]

## Referencia de configuración

Abra el diálogo desde el icono de engranaje en la fila del indicador en el panel **Indicators**.

### Parámetros de media

| Configuración | Qué hace |
|---|---|
| **Average Type** | El método de media móvil usado en el cálculo. Predeterminado: Simple. |
| **AO Length 1** | El período corto. Predeterminado: 5. |
| **AO Length 2** | El período largo. Predeterminado: 34. |
| **Average Length** | Longitud del suavizado de la línea de media (señal) opcional cuando está activada. |

### Niveles

| Configuración | Qué hace |
|---|---|
| **Middle Level** | Posición de la línea de referencia media. Predeterminado: 50. |
| **Lower Level** | Posición de la línea de referencia inferior. Predeterminado: 20. |
| **High Level** | Posición de la línea de referencia superior. Predeterminado: 80. |

Los colores y el grosor de las líneas de nivel son personalizables. Los valores del AO se miden en unidades de precio y varían según el instrumento, así que ajuste estas líneas de referencia a la escala del símbolo que opere.

### Subgráficos

| Configuración | Qué hace |
|---|---|
| **Awesome Oscillator** | La serie principal, dibujada en formato de histograma. Las opciones incluyen el color, un color secundario, el coloreado automático según la dirección de la pendiente y el estilo de línea. |
| **Average** | La línea de señal opcional, dibujada como una línea con sus propias opciones de apariencia. |

### Otras opciones de visualización

| Configuración | Qué hace |
|---|---|
| **Name and value labels** | Muestra u oculta el nombre del indicador y su valor actual en el área del gráfico. |
| **Background settings** | Estilo de fondo del área de gráfico del indicador. |
| **Auto-center** | Incluye el indicador en el centrado automático del área de gráfico. |

[SCREENSHOT: El diálogo de configuración del Oscilador Awesome mostrando Average Type Simple, AO Length 1 = 5, AO Length 2 = 34, y la sección de subgráficos con el estilo de histograma y la opción de coloreado automático por pendiente | dc-es-awesome-oscillator-03.png]

## Consejos y errores comunes

- **Lea la pendiente, no el tamaño.** Los valores del AO están en unidades de precio y difieren enormemente entre instrumentos. La dirección de barra a barra (que muestra el coloreado por pendiente) contiene la señal; la altura absoluta no se traslada entre símbolos.
- **El par 5/34 es la definición.** Los patrones clásicos del AO — twin peaks, saucer, cruce de línea cero — se definieron con los ajustes de media simple 5/34. Cambie las longitudes y cambiará lo que significa cada uno de esos patrones.
- **Los cruces de la línea cero generan señales falsas en mercados agitados.** En un mercado lateral el histograma ronda el cero y se invierte repetidamente. Use los cruces como marcadores de régimen en mercados en movimiento, no como entradas independientes en rangos.
- **Habilite la línea de media para obtener disparadores más limpios.** Si las inversiones del histograma bruto son demasiado rápidas para su estilo, la línea de media opcional ofrece una referencia más suave contra la que cruzar.

## Artículos relacionados

- [[macd]]
- [[momentum]]
- [[rsi|Índice de Fuerza Relativa (RSI)]]
- [[stochastic-oscillator]]
- [[different-types-of-input]]
- [[indicator-layout]]