---
title: "Regresión lineal"
slug: "linear-regression"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Referencia del indicador de Regresión lineal en DeepCharts: la línea de tendencia de mejor ajuste, la configuración de datos de entrada y longitud, y las opciones de estilo de línea."
keywords: ["línea de regresión lineal", "mínimos cuadrados", "indicador de regresión", "línea de mejor ajuste", "LSMA", "configuración de regresión lineal"]
source_hash: "d8d0bfb3e9c0aa6f"
ai_translated: true
source_hash: "d8d0bfb3e9c0aa6f"
---
El indicador de Regresión lineal calcula y muestra una línea de tendencia basada en el método de regresión lineal: una línea que minimiza la distancia a los puntos de precio durante un periodo específico. En lugar de promediar precios pasados como una media móvil, ajusta la recta estadísticamente mejor a través de ellos y traza dónde se sitúa actualmente esa línea.

El resultado es una curva suave que se ciñe a la tendencia más de cerca que una media móvil de la misma longitud, ayudándole a identificar la dirección de la tendencia y a pronosticar el movimiento del precio mediante soportes y resistencias dinámicos.

## Qué es

La Regresión lineal responde a la pregunta: si las últimas N barras se resumieran en una recta, ¿dónde estaría esa recta ahora mismo? En cada barra, el indicador reajusta una recta de mínimos cuadrados a través de la ventana retrospectiva y traza su punto final. Como el ajuste reacciona a la pendiente de la tendencia en lugar de rezagarse tras un promedio, la línea gira más rápido en las reversiones sin dejar de suavizar el ruido barra a barra.

[SCREENSHOT: Un gráfico de velas con la línea de Regresión lineal trazada sobre el precio, siguiendo de cerca una tendencia alcista y curvándose en la reversión | dc-es-linear-regression-01.png]

## Cuándo usarlo

- Leer la dirección de la tendencia con menos retraso que una media móvil de longitud comparable.
- Identificar zonas dinámicas de soporte y resistencia mientras el precio oscila alrededor de su valor justo estadístico.
- Detectar sobreextensión: un precio muy por encima o por debajo de la línea de regresión tiende a revertir hacia ella.
- Construir reglas de cruce o de pendiente donde la capacidad de respuesta importa más que el suavizado máximo.

## Inicio rápido

1. Abra un gráfico: consulte [[first-chart]].
2. Haga clic en el icono de gráfico de barras en la fila de iconos superior izquierda del gráfico para abrir el panel **Indicators**, luego haga clic en **Indicators** para abrir la **Indicator List** completa.
3. Busque **Linear Regression** y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje para abrir su configuración.
5. Configuración inicial: deje **Input Data** en Close y **Length** en el valor predeterminado de 21. Aumente la longitud para un ajuste más suave y lento; redúzcala para seguir oscilaciones cortas.

[SCREENSHOT: Diálogo de configuración de Regresión lineal mostrando la sección Parameters con Input Data en Close y Length = 21, y la sección de estilo Subgraph debajo | dc-es-linear-regression-02.png]

## Cómo leerlo

- **La pendiente** es la señal principal: una línea con pendiente ascendente significa que la tendencia de mejor ajuste de la ventana es alcista. Una pendiente que se aplana suele ser el primer indicio de que una tendencia se está estancando.
- **Precio frente a línea**: cierres consistentemente a un lado de la línea confirman la tendencia; un precio que la cruza bruscamente señala un posible cambio de carácter.
- **La distancia respecto a la línea** mide el estiramiento. La línea de regresión es el centro estadístico de la ventana, así que brechas inusualmente grandes entre el precio y la línea suelen preceder a una reversión a la media.
- **Frente a una media móvil**: con la misma longitud, la línea de regresión gira antes en las reversiones pero puede sobrepasarse en condiciones erráticas: cambia suavidad por capacidad de respuesta.

## Referencia de configuración

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Input Data** | La fuente de precio para la regresión: Close, Open, High, Low o Volume. Close es lo estándar. |
| **Length** | Número de periodos en la ventana de regresión. Predeterminado: 21. Ventanas más cortas se ajustan estrechamente a oscilaciones recientes; ventanas más largas describen la tendencia más amplia. |

### Subgráfico

| Configuración | Qué hace |
|---|---|
| **Regression Line Color** | Color de la línea trazada. |
| **Secondary Color** | Asignación opcional de color secundario. |
| **Subgraph Style** | Estilo de visualización de la serie. |
| **Line Style** | Definición de la apariencia de la línea. |
| **Line Width** | Grosor de la línea. |
| **Use Secondary Axis** | Muestra el indicador en un eje alternativo. |

## Consejos y errores comunes

- **No lo confunda con una línea de tendencia de regresión dibujada.** Este indicador reajusta y traza un punto final móvil en cada barra; si quiere un canal completo con bandas de desviación sobre un tramo fijo, use [[regression-channel]] en su lugar.
- **Las longitudes cortas se sacuden en los rangos.** Un ajuste estrecho a través del ruido lateral invierte la pendiente constantemente; alargue la ventana o exija confirmación adicional antes de actuar sobre cambios de pendiente.
- **Extrapole con cuidado.** La línea resume la ventana pasada: proyectar su pendiente hacia adelante supone que la tendencia persiste, lo cual es una suposición, no un pronóstico.
- Volume como **Input Data** produce una regresión del volumen, no del precio: útil como estudio de tendencia de volumen en un panel separado, no como superposición sobre el precio.

## Artículos relacionados

- [[regression-channel]]
- [[moving-average]]
- [[tillson-t3]]
- [[standard-deviation]]
- [[different-types-of-input]]
- [[indicator-layout]]