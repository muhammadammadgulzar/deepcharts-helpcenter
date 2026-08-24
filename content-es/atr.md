---
title: "Rango Verdadero Medio (ATR)"
slug: "atr"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Referencia del indicador Rango Verdadero Medio (ATR) en DeepCharts: qué mide, la configuración de Display Mode y Periods, y cómo dimensionar stops con la volatilidad."
keywords: ["ATR", "rango verdadero medio", "true range", "indicador de volatilidad", "stop atr", "atr de wilder", "avarage true range", "indicador atr"]
source_hash: "f76fd591fb4d7afe"
ai_translated: true
source_hash: "f76fd591fb4d7afe"
---
El ATR (Average True Range, rango verdadero medio) es un indicador de análisis técnico desarrollado por J. Welles Wilder en los años 70 para medir la volatilidad de un activo. Muestra la magnitud del cambio de precio durante un marco temporal especificado: en términos simples, cuánto se mueve normalmente el instrumento por barra.

El ATR no dice nada sobre la dirección. Un ATR ascendente significa barras más grandes (en cualquier dirección); un ATR descendente significa que el mercado se está calmando. Ese único número es la columna vertebral de la colocación de stops y el dimensionamiento de posiciones conscientes de la volatilidad.

## Qué es

El ATR responde a la pregunta: ¿cuánto se mueve realmente este mercado ahora mismo? Promedia el "rango verdadero" de cada barra, una medida de rango que también tiene en cuenta los huecos entre barras, no solo la amplitud de máximo a mínimo de la propia barra, durante un número elegido de períodos, y traza el resultado como una línea en un panel debajo del gráfico de precio.

[SCREENSHOT: Gráfico de precio con el indicador ATR en un panel inferior, la línea de ATR subiendo bruscamente durante una liquidación volátil y descendiendo durante una consolidación tranquila | dc-es-atr-01.png]

## Cuándo usarlo

- Dimensionar stops: colocar un stop a un múltiplo del ATR lo mantiene fuera del ruido normal para la volatilidad actual.
- Dimensionar posiciones: arriesgar una cantidad fija por unidad de ATR normaliza el riesgo entre mercados tranquilos y rápidos.
- Conciencia de régimen: un vistazo al ATR le dice si el mercado de hoy justifica sus objetivos habituales.
- Filtrar señales: muchas estrategias omiten entradas cuando el ATR es inusualmente bajo (sin continuación) o inusualmente alto (riesgo incontrolable).

## Inicio rápido

1. Abra un gráfico de precio: consulte [[first-chart]].
2. Haga clic en el botón verde **Indicators** (o pulse **Ctrl I**) para abrir la lista **Indicator List**.
3. Busque **Average True Range** y haga clic en **+** para añadirlo. Aparece en su propio panel debajo del precio.
4. Haga clic en el icono de engranaje para abrir su configuración.
5. El período de análisis clásico de Wilder de 14 períodos es el punto de partida convencional; acórtelo para una lectura más rápida de las condiciones actuales, alárguelo para una línea base más suave.

[SCREENSHOT: Diálogo de configuración del ATR abierto mostrando la selección de Display Mode (Tick o Periods), el campo de períodos y las opciones de estilo de Subgraph debajo | dc-es-atr-02.png]

## Cómo leerlo

- **Nivel absoluto.** El ATR se expresa en las unidades de precio del propio instrumento, por lo que un ATR de 12 en un instrumento y de 0.5 en otro no son comparables directamente: compare cada instrumento con su propia historia.
- **ATR ascendente**: barras en expansión, a menudo alrededor de noticias, rupturas o pánicos. Son apropiados stops más amplios y un tamaño menor.
- **ATR descendente**: rango en contracción. Los mercados más estrechos a menudo preceden a expansiones, pero un ATR bajo no es en sí una señal direccional.
- **Múltiplos de ATR como distancia.** "2 × ATR" es una distancia de stop común y "1 × ATR" una unidad de objetivo intradía común: el múltiplo importa menos que ser consistente con él.

## Referencia de configuración

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Display Mode** | Selecciona entre las opciones de visualización **Tick** y **Periods**. [CONFIRM: exact behavior of Tick vs Periods display mode] |
| Periods | El número de períodos utilizados en el cálculo del ATR. Menos períodos siguen de cerca la volatilidad actual; más períodos suavizan la línea. |
| **Indicator Model** | Configuración del modelo para el cálculo del indicador. [CONFIRM: available Indicator Model options and default] |

### Subgráficos

| Configuración | Qué hace |
|---|---|
| Color | Color primario de la línea del ATR. |
| Color secundario | Aplicación opcional de un color secundario. |
| **Subgraph Style** | Estilo de visualización de la serie. [CONFIRM: exact Subgraph Style option names in the dialog] |
| **Line Style** | Renderizado de la línea: Solid, Dashed, Dotted y variaciones similares. |
| **Line Width** | Grosor de la línea del indicador. |

## Consejos y errores comunes

- **Nunca lea el ATR como dirección.** El ATR sube tanto en desplomes como en subidas; mide solo el tamaño del movimiento.
- **Recalibre los stops cuando el ATR cambie.** Una distancia de stop elegida en un régimen tranquilo es carnada para el ruido después de que la volatilidad se duplique: derívela de nuevo del ATR actual, no de memoria.
- **No compare el ATR bruto entre instrumentos.** Normalice (por ejemplo, el ATR como porcentaje del precio) antes de comparar la volatilidad entre mercados.
- **El ATR alimenta otras herramientas.** Las bandas del [[keltner-channel]] y el [[super-trend]] se construyen directamente sobre el ATR: entender primero el ATR hace que esos indicadores sean mucho más fáciles de ajustar.

## Artículos relacionados

- [[keltner-channel]]
- [[bollinger-bands]]
- [[standard-deviation]]
- [[super-trend]]
- [[different-types-of-input]]
- [[indicator-layout]]