---
title: "Know Sure Thing (KST)"
slug: "know-sure-thing"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "advanced"
time: "5 min read"
description: "Referencia del oscilador Know Sure Thing (KST) en DeepCharts: cuatro componentes ROC suavizados, cruces con la línea de señal y cada configuración del diálogo."
keywords: ["know sure thing", "KST", "indicador kst", "kst de pring", "oscilador rate of change", "línea de señal kst", "cruce kst", "roc suavizado"]
source_hash: "c46feb17bce2cc38"
ai_translated: true
source_hash: "c46feb17bce2cc38"
---
El Know Sure Thing (KST) es un oscilador de momentum basado en múltiples cálculos suavizados de tasa de cambio (Rate of Change, ROC). Combina el momentum a corto, medio y largo plazo en un solo indicador e incluye una línea de señal para el análisis de cruces.

Mientras que una sola lectura de [[rate-of-change]] solo le informa sobre una ventana retrospectiva, el KST combina cuatro de ellas, cada una suavizada y ponderada individualmente, de modo que un cambio genuino de momentum tiene que manifestarse en varios horizontes antes de que la línea gire. Eso lo hace más lento que un ROC en bruto, pero considerablemente más difícil de engañar con vaivenes.

## Qué es

El KST responde a la pregunta: ¿está girando el momentum en varios marcos temporales a la vez, o solo en uno? Traza dos líneas en un panel separado:

- **KST**: la línea de momentum compuesta construida a partir de cuatro componentes ROC suavizados.
- **Signal**: una copia suavizada del KST utilizada para señales de cruce.

La línea de cero separa el sesgo de momentum alcista del bajista. El indicador se atribuye ampliamente a Martin Pring.

[SCREENSHOT: Gráfico de precios con el indicador KST en un panel inferior, líneas KST y Signal en colores contrastantes, con un cruce alcista de KST sobre Signal por debajo de la línea de cero resaltado | dc-es-know-sure-thing-01.png]

## Cuándo usarlo

- Identificar cambios de momentum confirmados simultáneamente en ventanas retrospectivas cortas, medias y largas.
- Confirmar una tendencia: un KST que se mantiene por encima de cero respalda un sesgo alcista; por debajo de cero, uno bajista.
- Detectar divergencias entre el KST y el precio en máximos y mínimos de swing.
- Señalar condiciones sobreextendidas cuando el KST se aleja mucho de la línea de cero.

## Inicio rápido

1. Abra un gráfico de precios: consulte [[first-chart]].
2. Haga clic en el botón verde **Indicators** (o pulse **Ctrl I**) para abrir la **Indicator List** (Lista de indicadores).
3. Busque **Know Sure Thing** y haga clic en **+** para añadirlo. Aparecerá en su propio panel debajo del precio.
4. Haga clic en el icono de engranaje para abrir su configuración.
5. Una configuración inicial muy utilizada es la clásica de Martin Pring: longitudes ROC de 10, 15, 20 y 30, longitudes de promedio de 10, 10, 10 y 15, y un periodo de señal de 9. Ajuste a partir de ahí según su marco temporal.

[SCREENSHOT: Diálogo de configuración del KST abierto mostrando el grupo General con Use percent, el grupo Average con Average Type, Avg Length 1-4 y Signal Period, y el grupo ROC con ROC Length 1-4 | dc-es-know-sure-thing-02.png]

## Cómo leerlo

Las lecturas básicas, según la propia lógica del indicador:

| Observación | Interpretación |
|---|---|
| KST por encima de cero | Sesgo de momentum alcista |
| KST por debajo de cero | Sesgo de momentum bajista |
| KST cruzando por encima de Signal | Posible giro alcista |
| KST cruzando por debajo de Signal | Posible giro bajista |

Las señales más fuertes combinan ambas: un cruce KST/Signal que también cruza la línea de cero, o un cruce en la dirección del lado de cero en el que ya se encuentra (un cruce alcista por encima de cero es una señal de continuación, no un aviso de reversión). La divergencia, cuando el precio marca un nuevo extremo mientras el KST no lo hace, advierte de que el momentum multi-marco temporal detrás del movimiento se está desvaneciendo.

## Referencia de configuración

Agrupada como en la ventana de configuración del indicador.

### Área del gráfico

| Configuración | Qué hace |
|---|---|
| **Horizontal** | Muestra el KST en un panel separado. |
| **Vertical** | Muestra el indicador en vertical (si es compatible). |
| Selector de panel | Elige en qué panel aparece el indicador. |
| **Use sec. axis** | Habilita el escalado secundario. |

### Parámetros — General

| Configuración | Qué hace |
|---|---|
| **Use percent** | Cambia el cálculo del ROC entre valores brutos y momentum basado en porcentaje. El modo porcentual hace que las lecturas sean comparables entre instrumentos con distintas escalas de precio. |

### Parámetros — Average

| Configuración | Qué hace |
|---|---|
| **Average Type** | Define el método de suavizado aplicado a cada componente ROC. |
| **Avg Length 1–4** | Controla el suavizado de cada cálculo ROC individual. Valores más altos producen una respuesta más suave pero más lenta. |
| **Signal Period** | Define la longitud de suavizado de la línea de señal utilizada para señales de cruce. |

### Parámetros — ROC

| Configuración | Qué hace |
|---|---|
| **ROC Length 1–4** | Define el periodo retrospectivo de cada componente Rate of Change. Longitudes más cortas reaccionan más rápido; longitudes más largas capturan tendencias de momentum más amplias. |

### Niveles

| Configuración | Qué hace |
|---|---|
| **Middle Level** | Define la línea de referencia neutral (cero). |
| **Middle Level Color** | Personaliza el color de la línea de cero. |
| **Level Width** | Ajusta el grosor de la línea de referencia. |

### Subgráficos

- **KST**: controla la apariencia de la línea principal de momentum: color, estilo de línea, grosor, comportamiento de color automático y visualización de etiquetas.
- **Signal**: controla la apariencia de la línea de señal: color, estilo de línea, grosor y visualización de etiquetas.

Opciones de visualización disponibles para ambas líneas: **Name Label**, **Value Label**, **Name Background**, **Value Background**, **Include on Auto Center** y **Chart color for marker**.

## Consejos y errores comunes

- **Mantenga las cuatro longitudes ROC escalonadas.** El valor del indicador proviene de combinar horizontes distintos; fijar las longitudes muy próximas entre sí lo convierte en un simple ROC caro.
- **Los cruces de señal se retrasan por diseño.** El KST se construye con componentes suavizados, así que los cruces confirman los giros en lugar de predecirlos: combínelo con análisis de estructura o niveles para afinar las entradas.
- **Primero el contexto de la línea de cero, luego el cruce.** Un cruce bajista muy por encima de cero a menudo marca solo una pausa en una tendencia alcista, no una reversión.
- **Escale las longitudes a su gráfico.** Los valores clásicos de Pring se diseñaron para análisis de más largo plazo; los operadores intradía suelen acortar proporcionalmente las cuatro longitudes de ROC y de promedio.

## Artículos relacionados

- [[rate-of-change]]
- [[macd]]
- [[momentum]]
- [[inverse-cyber-cycle]]
- [[different-types-of-input]]
- [[indicator-layout]]