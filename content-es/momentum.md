---
title: "Momentum"
slug: "momentum"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Cómo el indicador Momentum mide la velocidad del movimiento del precio, cómo leer la aceleración y la divergencia, y todas las opciones de configuración en DeepCharts."
keywords: ["indicador momentum", "MOM", "velocidad del precio", "rapidez del precio", "oscilador de momentum", "momentun"]
source_hash: "15b9b6b9af98049f"
ai_translated: true
source_hash: "15b9b6b9af98049f"
---
El indicador Momentum mide la velocidad — o el ritmo — de los movimientos de precio de un activo: con qué rapidez está cambiando el precio en relación con períodos anteriores. Es uno de los osciladores más simples que existen, y precisamente por eso es útil para detectar fases de aceleración y desaceleración que las velas por sí solas pueden ocultar.

En DeepCharts, Momentum dibuja una única línea en su propia área de gráfico, con una línea de media móvil opcional que puede habilitar como suavizador o línea de señal.

## Qué es

Momentum responde a la pregunta: ¿este movimiento se está acelerando o desacelerando? El indicador evalúa cuánto ha cambiado el precio en un período de referencia definido (**Length**, 14 períodos por defecto). Cuando el precio avanza a un ritmo creciente, la línea sube; cuando el avance se ralentiza — incluso mientras el precio sigue marcando nuevos máximos — la línea se aplana o gira a la baja. Esa pérdida temprana de velocidad es el principal valor del indicador: el momentum suele estancarse antes que el precio.

## Cuándo usarlo

- Quiere medir la fuerza de la tendencia actual, no solo su dirección.
- Quiere una advertencia temprana de una reversión: una línea de momentum que se desvanece mientras el precio sigue empujando.
- Necesita detectar fases de aceleración y desaceleración, por ejemplo alrededor de una ruptura.
- Quiere una lectura de momentum sin suavizar para combinarla con un indicador más lento como [[macd]].

## Inicio rápido

1. Abra un gráfico y pulse **Ctrl I** — o haga clic en el icono de gráfico de barras en la barra de herramientas del gráfico y luego en **Indicators** — para abrir la **Indicator List** (lista de indicadores).
2. Busque "Momentum" y haga clic en **+** para añadirlo. El indicador se representa en su propia área de gráfico debajo de las barras de precio (vea [[indicator-layout]]).
3. Haga clic en el icono de engranaje en la fila del indicador para abrir su configuración.
4. Mantenga los valores predeterminados para empezar: **Input Data** en Close, **Length** en 14. Si la línea es demasiado inestable para su marco temporal, pase a la sección **Average**, habilite la línea de media y déjela en Simple con 20 períodos.

[SCREENSHOT: Un gráfico con el indicador Momentum en su propia área debajo del precio, la línea de momentum subiendo con fuerza durante un avance del precio y su línea de media opcional habilitada | dc-es-momentum-01.png]

## Cómo leerlo

- **La pendiente primero.** Una línea ascendente significa que el precio está cambiando más rápido de lo que lo hacía en la ventana de referencia; una línea descendente significa que el ritmo se está desvaneciendo. La dirección y la pendiente llevan la información: el valor absoluto depende de la escala de precios del símbolo.
- **El momentum se adelanta al precio en los giros.** Los picos de momentum se forman con frecuencia antes que los picos de precio. Una línea que se aplana mientras el precio sube lentamente es una advertencia de desaceleración.
- **Cruces de la línea de media.** Con la media habilitada, el cruce de la línea de momentum sobre su media es un disparador más limpio que leer las oscilaciones en bruto.
- **Divergencia.** El precio marca un nuevo máximo mientras la línea de momentum marca un máximo más bajo (o el espejo en los mínimos): el movimiento avanza con menos velocidad y es más vulnerable a una reversión.

## Referencia de configuración

Abra el cuadro de diálogo desde el icono de engranaje en la fila del indicador en el panel **Indicators**.

### Parámetros — General

| Opción | Qué hace |
|---|---|
| **Input Data** | La serie de datos que alimenta el cálculo: Close, Open, High, Low o Volume. Close es lo estándar; seleccionar Volume aplica el mismo cálculo al volumen en lugar del precio. Vea [[different-types-of-input]]. |
| **Length** | Número de períodos para el cálculo del momentum. Valor predeterminado: 14. Longitudes más cortas reaccionan más rápido pero añaden ruido; longitudes más largas muestran la oscilación más amplia. |

### Parámetros — Average

| Opción | Qué hace |
|---|---|
| **Enable** | Activa o desactiva la línea de media (señal). |
| **Average Type** | Método de media móvil para la línea de señal: Simple, Exponential, Triangular o Weighted. |
| **Periods** | Número de períodos para el cálculo de la media. Valor predeterminado: 20. |

### Subgraph

| Opción | Qué hace |
|---|---|
| **Momentum line color** | Color de la línea principal de momentum. |
| **Average line color** | Color de la línea de media opcional. |
| **Secondary color** | Color adicional opcional para la visualización. |
| **Display style** | Cómo se dibujan las series en el área del gráfico. |
| **Line style / Line width** | Estilo de representación y grosor de las líneas. |
| **Use secondary axis** | Traza el indicador contra un eje de valores secundario. |

[SCREENSHOT: El cuadro de diálogo de configuración de Momentum mostrando Input Data en Close, Length 14 y la sección Average con Average Type y Periods 20 | dc-es-momentum-02.png]

## Consejos y errores comunes

- **El momentum no está acotado.** No existe un umbral fijo de sobrecompra o sobreventa: compare la lectura actual con los propios extremos recientes del símbolo, no con un número universal.
- **No compare valores entre símbolos.** La lectura escala con el precio del instrumento, así que las comparaciones entre símbolos carecen de sentido; si necesita una versión normalizada, use [[rate-of-change]] en su lugar.
- **Use la línea de media como disparador.** El momentum en bruto genera señales falsas en gráficos rápidos; el cruce del momentum a través de su media habilitada filtra la mayor parte del ruido.
- **Ajuste el Length a su período de mantenimiento.** Un momentum de 14 períodos en un gráfico de 1 minuto describe el último cuarto de hora: no lo lea como información de tendencia para una operación de swing.

## Artículos relacionados

- [[rate-of-change|Tasa de cambio (ROC)]]
- [[macd]]
- [[rsi|Índice de fuerza relativa (RSI)]]
- [[awesome-oscillator]]
- [[different-types-of-input]]
- [[indicator-layout]]