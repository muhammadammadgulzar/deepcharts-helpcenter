---
title: "Media móvil"
slug: "moving-average"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Referencia del indicador Media móvil en DeepCharts: datos de entrada, longitud, tipos de media (Simple, Exponencial, Triangular, Ponderada), alertas y estilo."
keywords: ["MA", "media móvil simple", "SMA", "EMA", "media móvil exponencial", "media móvil ponderada", "media móvil triangular", "moving avarage"]
source_hash: "b77623441f284f4a"
ai_translated: true
source_hash: "b77623441f284f4a"
---
La Media móvil (Moving Average) es una de las herramientas de análisis técnico más utilizadas. Dibuja en el gráfico una línea que representa el valor medio de los precios de un instrumento durante un número de períodos elegido, suavizando el ruido barra a barra para que la dirección subyacente sea más fácil de ver.

En DeepCharts puede elegir a partir de qué precio se construye la media, cuántos períodos cubre y qué fórmula de promediado se utiliza, y después dar estilo a la línea y adjuntarle alertas.

## Qué es

Una media móvil responde a la pregunta: ¿dónde ha estado operando el precio, en promedio, durante las últimas N barras? Como cada barra nueva expulsa a la más antigua del cálculo, la línea "se mueve" con el mercado. Los traders la usan para analizar tendencias, identificar posibles reversiones de precio y crear señales de compra o venta: por ejemplo, cuando el precio cruza la línea, o cuando una media rápida cruza a una lenta. Pruébelo en vivo a continuación: alterne entre Simple y Exponencial y arrastre el deslizador de longitud para ver cómo la línea intercambia capacidad de respuesta por suavidad.

[WIDGET: ma-lab]

## Cuándo usarlo

- Para leer de un vistazo la dirección y la fuerza de una tendencia: una media ascendente por debajo del precio es un contexto alcista; una descendente por encima del precio, un contexto bajista.
- Para filtrar la dirección de las operaciones: muchos traders solo abren largos mientras el precio se mantiene por encima de una media elegida.
- Para vigilar cruces: el precio cruzando la media, o dos medias de longitudes diferentes cruzándose entre sí.
- Para usar la línea como soporte o resistencia dinámica en mercados con tendencia.

## Inicio rápido

1. Abra un gráfico: vea [[first-chart]] si aún no lo ha hecho.
2. Haga clic en el icono de gráfico de barras en la fila de iconos superior izquierda del gráfico para abrir el panel **Indicators**, y luego haga clic en **Indicators** para abrir la **Indicator List** completa.
3. Busque **Moving Average** y haga clic en **+** para añadirla.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración.
5. Configuración inicial: deje **Input** en Close y **Length** en su valor predeterminado de 21, y elija **Simple** o **Exponential** como **Type Average**. Ajuste la longitud más adelante según su marco temporal: más corta para una reacción más rápida, más larga para un contexto de tendencia más suave.

[SCREENSHOT: Cuadro de diálogo de configuración de Moving Average abierto, mostrando la sección Parameters con Input, Length en 21 y el menú desplegable Type Average expandido listando Simple, Exponential, Triangular y Weighted | dc-es-moving-average-01.png]

## Cómo leerlo

- **Pendiente**: una línea ascendente significa que el precio medio está aumentando: el contexto de tendencia es alcista. Una línea plana significa un rango; las medias producen sus peores señales en los rangos.
- **Precio frente a línea**: el precio manteniéndose por encima de la media sugiere que los compradores tienen el control; cierres repetidos por debajo sugieren que la tendencia se debilita o se revierte.
- **Cruces**: una media más corta cruzando por encima de una más larga es una señal alcista clásica, y lo contrario, bajista. Los cruces se retrasan por diseño: confirman un movimiento que ya ha comenzado.
- **El tipo de media importa**: una media Exponencial pondera más los precios recientes y reacciona más rápido que una Simple de la misma longitud; la Triangular es la más suave, la Ponderada se sitúa en medio.

## Referencia de configuración

### Parámetros

| Opción | Qué hace |
|---|---|
| **Input** | Los datos de precio a partir de los cuales se calcula la media: Close, Open, High, Low o volumen. Close es la elección habitual; use High/Low para estudios de tipo envolvente. |
| **Length** | Número de períodos del cálculo. Valor predeterminado: 21. Redúzcalo para una reacción más rápida, auméntelo para un contexto de tendencia más suave y lento. |
| **Type Average** | La fórmula de promediado: **Simple**, **Exponential**, **Triangular** o **Weighted**. Exponential y Weighted enfatizan las barras recientes; Triangular aplica un doble suavizado. |

### Alertas

| Opción | Qué hace |
|---|---|
| **Enable Alert Sound** | Reproduce una notificación sonora cuando se dispara la alerta. |
| **Enable Alert Message** | Muestra un mensaje de alerta emergente al dispararse. |
| **Alert Name** | Una etiqueta personalizada para la notificación, útil cuando ejecuta varias alertas a la vez. |

### Subgraph

| Opción | Qué hace |
|---|---|
| **Moving Average Color** | Color de la línea trazada. |
| **Secondary Color** | Color complementario opcional. |
| **Subgraph Style** | Cómo se muestra la serie. |
| **Line Style** | Apariencia de la línea (sólida, discontinua, etc.). |
| **Line Width** | Grosor de la línea. |
| **Use Secondary Axis** | Traza el indicador en un eje alternativo, útil al superponer series con escalas diferentes. |

## Consejos y errores comunes

- **No trate una longitud como universal.** El 21 predeterminado es un punto de partida razonable, pero la longitud "correcta" depende de su marco temporal y de cuánto suavizado quiera: pruebe antes de confiar en ella.
- **Los rangos generan cruces falsos.** En mercados laterales el precio zigzaguea constantemente a través de la media; combine la MA con un filtro de tendencia como [[adx]] antes de actuar sobre los cruces.
- **Más rápido no siempre es mejor.** Una media Exponencial reacciona antes, pero también produce más señales provocadas por el ruido que una Simple de la misma longitud.
- Si la línea se representa en el lugar equivocado o la quiere en su propio panel, vea [[indicator-layout]] para organizar las áreas del gráfico.

## Artículos relacionados

- [[super-trend]]
- [[parabolic-sar]]
- [[linear-regression]]
- [[adx]]
- [[different-types-of-input]]
- [[indicator-layout]]