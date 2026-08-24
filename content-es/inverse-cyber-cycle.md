---
title: "Ciclo Cibernético Inverso (Inverse Cyber Cycle)"
slug: "inverse-cyber-cycle"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Referencia del oscilador Inverse Cyber Cycle en DeepCharts: líneas de ciclo duales, alfa de suavizado, longitudes de ciclo, umbrales de nivel y cómo interpretar los cruces."
keywords: ["inverse cyber cycle", "cyber cycle", "oscilador de ciclo", "indicador de ciclo", "puntos de giro", "cycle a", "cycle b", "smoothing alpha", "inverse cybercycle"]
source_hash: "973c470580a97a1c"
ai_translated: true
source_hash: "973c470580a97a1c"
---
El Ciclo Cibernético Inverso (Inverse Cyber Cycle) es un oscilador basado en ciclos diseñado para identificar puntos de giro y cambios de momentum cíclico. En lugar de una sola línea, traza dos líneas de ciclo de distintas velocidades que oscilan alrededor de una línea cero, de modo que usted puede comparar una lectura rápida del ritmo del mercado con una más lenta y amplia.

Como trabaja con ciclos en lugar de momentum bruto, resulta más útil para operadores que ya entienden los fundamentos de los osciladores y quieren una lectura más temprana de las reversiones de la que suelen dar herramientas clásicas como [[rsi]] o [[stochastic-oscillator]].

## Qué es

El indicador responde a la pregunta: ¿dónde está el precio dentro de su ciclo actual, y está girando ese ciclo? Dibuja dos líneas en un panel separado debajo del gráfico de precio:

- **Cycle A** — el ciclo más rápido. Reacciona con rapidez al movimiento reciente del precio.
- **Cycle B** — el ciclo más lento. Captura el ritmo más amplio del mercado.

Ambas líneas oscilan alrededor de un nivel medio configurable (normalmente cero), con niveles umbral superior e inferior que marcan condiciones de ciclo extremadamente positivas y extremadamente negativas.

[SCREENSHOT: Gráfico de precio con el Inverse Cyber Cycle en un panel inferior, mostrando Cycle A y Cycle B en colores contrastados cruzándose cerca de un mínimo de oscilación, con las líneas de nivel medio, alto y bajo visibles | dc-es-inverse-cyber-cycle-01.png]

## Cuándo utilizarlo

- Cronometrar entradas cerca de puntos de giro dentro de una tendencia establecida, en lugar de perseguir el movimiento.
- Detectar temprano cambios de momentum cíclico, antes de que aparezcan en osciladores de momentum más lentos.
- Identificar extremos de ciclo de sobrecompra o sobreventa mediante los niveles umbral alto y bajo.
- Comparar el comportamiento del ciclo rápido frente al lento: la coincidencia entre Cycle A y Cycle B refuerza una señal.

## Inicio rápido

1. Abra un gráfico de precio: consulte [[first-chart]].
2. Haga clic en el botón verde **Indicators** (o pulse **Ctrl I**) para abrir la **Indicator List**.
3. Busque **Inverse Cyber Cycle** y haga clic en **+** para añadirlo. Aparece en su propio panel debajo del precio.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración.
5. Como punto de partida, mantenga las longitudes de ciclo y el suavizado predeterminados, y establezca el **High Level** y el **Low Level** simétricamente respecto a la línea media para que los extremos se señalen en ambos lados.

[SCREENSHOT: Diálogo de configuración del Inverse Cyber Cycle abierto, mostrando el campo Smoothing Alpha, los parámetros Cycle A Length y Cycle B Length, y la configuración de niveles Middle/Low/High | dc-es-inverse-cyber-cycle-02.png]

## Cómo interpretarlo

- **Cruces entre los ciclos** — observe el cruce de Cycle A sobre Cycle B para obtener señales de momentum. Un cruce del rápido sobre el lento sugiere momentum cíclico alcista; el inverso sugiere momentum bajista.
- **Niveles umbral** — las lecturas por encima del **High Level** indican condiciones de ciclo de sobrecompra o extremadamente positivas; las lecturas por debajo del **Low Level** indican condiciones de sobreventa o extremadamente negativas. Los giros que comienzan desde estos extremos tienen más peso que los giros cerca de la línea media.
- **Puntos de giro dentro de tendencias** — el uso principal del indicador. En una tendencia alcista, busque que el ciclo baje a un mínimo extremo y vuelva a girar al alza como posible entrada de continuación; refleje la lógica en una tendencia bajista.

## Referencia de configuración

Agrupada como en la ventana de configuración del indicador.

### Área de visualización

| Configuración | Qué hace |
|---|---|
| **Horizontal** | Muestra el indicador en un panel horizontal separado. |
| **Vertical** | Muestra el indicador verticalmente. |
| Selector de panel | Elige qué panel aloja el indicador. |
| Eje secundario | Interruptor para escalar el indicador en un eje secundario. |

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Smoothing Alpha** | Gobierna con qué agresividad se suaviza el ciclo. Los valores más bajos producen respuestas más suaves pero retrasadas; los valores más altos aceleran las reacciones y aumentan la sensibilidad al ruido. |
| **Cycle A Length** | Establece el período del ciclo más rápido. Las longitudes más cortas reaccionan más rápido al movimiento del precio. |
| **Cycle B Length** | Define el período del ciclo más lento, capturando el ritmo más amplio del mercado. |

### Niveles

| Configuración | Qué hace |
|---|---|
| **Middle Level** | La línea de referencia neutral, normalmente cero. |
| **Low Level** | Establece el umbral inferior usado para identificar condiciones de ciclo de sobreventa o extremadamente negativas. |
| **High Level** | Establece el umbral superior usado para identificar condiciones de ciclo de sobrecompra o extremadamente positivas. |

Los colores de los niveles, el grosor de línea y el estilo visual son totalmente personalizables.

### Subgráficos

Tanto **Cycle A** como **Cycle B** admiten personalización de color de línea, estilo de línea, ancho de línea, comportamiento de color automático y visualización de etiquetas. Las opciones de visualización incluyen etiquetas de nombre y valor con personalización del fondo, y la inclusión en el autocentrado.

## Consejos y errores comunes

- **No opere todos los cruces.** Cycle A y Cycle B se cruzan con frecuencia en mercados tranquilos; las señales de mayor calidad ocurren cuando un cruce comienza más allá del nivel High o Low.
- **Ajuste las longitudes de ciclo a su marco temporal.** Si las líneas se sacuden de un lado a otro sin ritmo, las longitudes son demasiado cortas para el ciclo real del instrumento; alargue primero Cycle B.
- **Resista la tentación de apretar demasiado el Smoothing Alpha.** Un alfa más alto reacciona más rápido pero amplifica el ruido: auméntelo solo si las señales llegan sistemáticamente demasiado tarde.
- **Utilícelo dentro de un contexto de tendencia.** El indicador identifica puntos de giro dentro de tendencias; en un movimiento fuerte en una sola dirección, los extremos contra tendencia pueden permanecer fijados mucho más tiempo del esperado.

## Artículos relacionados

- [[know-sure-thing]]
- [[rsi]]
- [[stochastic-oscillator]]
- [[momentum]]
- [[different-types-of-input]]
- [[indicator-layout]]