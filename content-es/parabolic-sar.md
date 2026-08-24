---
title: "SAR Parabólico"
slug: "parabolic-sar"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Referencia del indicador SAR Parabólico en DeepCharts: los puntos de stop y reversión, los parámetros de aceleración Step y Maximum, y las opciones de estilo."
keywords: ["PSAR", "parabolic stop and reverse", "puntos SAR", "puntos de stop dinámico", "parabólico de Wilder", "configuración del sar parabólico"]
source_hash: "83bc058d2f55a327"
ai_translated: true
source_hash: "83bc058d2f55a327"
---
El SAR Parabólico es un indicador de análisis técnico desarrollado por J. Welles Wilder que ayuda a identificar reversiones de tendencia y a establecer puntos de entrada y salida para operar. Aparece como una serie de puntos situados por encima o por debajo del precio, según la dirección de la tendencia: por debajo de los precios durante las tendencias alcistas, por encima durante las bajistas.

SAR significa "stop and reverse" (detener y revertir): los puntos siguen al precio a un ritmo acelerado, y cuando el precio los toca, el indicador salta al lado opuesto, marcando una posible reversión.

## Qué es

El SAR Parabólico responde a la pregunta: ¿dónde está mi stop dinámico y se ha revertido la tendencia? Este indicador es similar a la media móvil, con la única diferencia de que el SAR Parabólico se mueve a un ritmo más acelerado y puede cambiar su posición respecto al precio. Cuanto más dura una tendencia, más rápido se acercan los puntos al precio: eso es lo que da a la estela su forma parabólica y fuerza una salida eventual.

[SCREENSHOT: Un gráfico de velas con los puntos del SAR Parabólico debajo del precio durante una tendencia alcista, saltando por encima del precio tras una reversión; el punto de giro claramente visible | dc-es-parabolic-sar-01.png]

## Cuándo usarlo

- Para arrastrar un stop detrás de una posición en tendencia: los puntos dan un nivel de stop concreto, actualizado mecánicamente en cada barra.
- Para cronometrar salidas: cuando el precio toca los puntos, la tendencia que sostenía la posición se considera terminada.
- Para identificar puntos de reversión en mercados que tienden con limpieza.
- Para confirmar la dirección junto a herramientas más lentas: puntos debajo del precio coinciden con una lectura alcista, puntos encima con una bajista.

## Inicio rápido

1. Abra un gráfico: vea [[first-chart]].
2. Haga clic en el icono de gráfico de barras en la fila de iconos superior izquierda del gráfico para abrir el panel **Indicators**, y luego haga clic en **Indicators** para abrir la **Indicator List** completa.
3. Busque **Parabolic SAR** y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje para abrir su configuración.
5. Configuración inicial: mantenga **Step** en el valor predeterminado 0.02 y **Maximum** en el predeterminado 0.20, los valores originales de Wilder y el punto de partida estándar en cualquier marco temporal.

[SCREENSHOT: Diálogo de configuración del SAR Parabólico mostrando la sección Parameters con Step = 0.02 y Maximum = 0.20, y la sección de estilo Subgraph debajo | dc-es-parabolic-sar-02.png]

## Cómo leerlo

- **Puntos debajo del precio**: tendencia alcista. Con cada nueva barra los puntos suben, siguiendo el movimiento.
- **Puntos encima del precio**: tendencia bajista, con los puntos descendiendo hacia el precio.
- **Un giro** (los puntos saltan al otro lado) señala un stop y reversión: la tendencia anterior se considera terminada. Los traders agresivos revierten la posición en el giro; los conservadores lo tratan solo como una salida.
- **La separación entre puntos** muestra la aceleración: puntos que se alejan entre sí significan que el factor de aceleración está subiendo porque la tendencia sigue marcando nuevos extremos.
- En mercados laterales los puntos giran constantemente: el indicador está explícitamente diseñado para condiciones de tendencia y produce sus peores señales en rangos.

## Referencia de configuración

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Step** | El factor de aceleración que determina con qué rapidez el SAR alcanza al precio. Predeterminado: 0.02. Subirlo hace que la estela se ajuste más rápido (salidas más tempranas, más señales falsas); bajarlo da más margen a la tendencia. |
| **Maximum** | El valor máximo que puede alcanzar el factor de aceleración. Predeterminado: 0.20. Limita con cuánta agresividad pueden converger los puntos sobre el precio en tendencias prolongadas. |

### Subgráfico

| Configuración | Qué hace |
|---|---|
| **Parabolic SAR Color** | Color de los puntos trazados. |
| **Secondary Color** | Color secundario opcional. |
| **Subgraph Style** | Estilo de visualización de la serie. |
| **Line Style** | Definición de la apariencia de la línea. |
| **Line Width** | Tamaño/grosor del trazado. |
| **Use Secondary Axis** | Muestra el indicador en un eje alternativo. |

## Consejos y errores comunes

- **No opere cada giro.** En un rango el SAR gira repetidamente y cada giro falla; úselo solo cuando haya una tendencia establecida, o filtre primero con [[adx]] para confirmar la fuerza de la tendencia.
- **Ajuste Step al carácter del mercado.** Los valores predeterminados 0.02 / 0.20 son los originales de Wilder; un **Step** más pequeño conviene a instrumentos volátiles que necesitan espacio para respirar, uno mayor conviene a movimientos rápidos de momentum que quiere proteger con rapidez.
- **Trate el punto como un nivel de stop, no como una predicción.** El SAR le dice dónde se invalida la tendencia: no dice nada sobre a dónde va el precio después.
- Compárelo con [[super-trend]]: ambos siguen la tendencia, pero la base ATR de Super Trend se adapta a la volatilidad mientras que la aceleración del SAR se adapta a la duración de la tendencia.

## Artículos relacionados

- [[super-trend]]
- [[moving-average]]
- [[adx]]
- [[atr]]
- [[different-types-of-input]]
- [[indicator-layout]]