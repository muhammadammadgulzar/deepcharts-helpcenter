---
title: "Niveles importantes"
slug: "important-levels"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Traza automáticamente los máximos, mínimos, aperturas, cierres, POC, áreas de valor y VWAP diarios, semanales y mensuales anteriores como niveles de referencia etiquetados en su gráfico intradía."
keywords: ["niveles importantes", "niveles clave", "máximo del día anterior", "mínimo del día anterior", "PDH", "PDL", "cierre anterior", "máximo mínimo semanal", "nivel POC", "área de valor", "nivel VWAP", "indicador de niveles"]
source_hash: "207a45bed4654139"
ai_translated: true
source_hash: "207a45bed4654139"
---
El indicador Niveles importantes (Important Levels) resalta los precios de referencia más significativos de períodos anteriores directamente en su gráfico intradía: máximos, mínimos, aperturas, cierres, POC, áreas de valor, VWAP y promedios, en marcos temporales diario, semanal y mensual. En lugar de dibujar y actualizar una docena de líneas horizontales cada mañana, usted habilita una sola vez los niveles que le interesan y el indicador los mantiene automáticamente.

Estos son los precios que la mayoría de los participantes observan (máximo y mínimo del día anterior, cierre de la semana pasada, POC mensual), lo que los convierte en ubicaciones recurrentes de reacciones, rupturas y retesteos.

## Qué es

Niveles importantes es un indicador automatizado de niveles multi-marco temporal diseñado para gráficos intradía. Para cada período habilitado (día, semana, mes) traza las estadísticas clave del período anterior como líneas etiquetadas y las mantiene actualizadas cuando comienzan nuevos períodos. Responde a la pregunta: "¿dónde están los precios de referencia de los marcos temporales superiores en relación con el precio en este momento?"

[SCREENSHOT: Gráfico intradía con Niveles importantes aplicado: líneas horizontales etiquetadas para el máximo, mínimo, cierre, POC y VWAP del día anterior en colores distintos, con el precio operando entre el POC y el máximo del día anterior | dc-es-important-levels-01.png]

## Cuándo utilizarlo

- Prepara un plan de sesión y quiere que los precios clave de ayer, de la semana pasada y del mes pasado queden marcados sin dibujarlos manualmente.
- Opera rupturas y retesteos de máximos/mínimos anteriores: las ubicaciones de liquidez más observadas.
- Combina niveles basados en precio (máximo, mínimo, apertura, cierre) con niveles basados en volumen (POC, área de valor, VWAP) para encontrar zonas de confluencia.
- Sigue varios instrumentos y no puede mantener niveles dibujados a mano en cada gráfico.

## Inicio rápido

1. Abra la **Indicator List** (lista de indicadores) en su gráfico.
2. Busque **Important Levels** y haga clic en **+** para añadirlo.
3. Haga clic en el icono de **Settings** (configuración) junto al indicador.
4. En la configuración de longitud, establezca **Days** en **1**, y **Weeks** y **Months** en **1** cada uno: un período anterior por marco temporal es más que suficiente para empezar.
5. En la sección de niveles habilitados, comience con **High**, **Low**, **Close** y **POC** solo para el período diario; añada niveles semanales y mensuales cuando el gráfico siga leyéndose con claridad.
6. Establezca **Plot Type** en **Label and Line** para que cada línea lleve un nombre, elija colores distintos por tipo de nivel y aplique.

[SCREENSHOT: Diálogo de configuración de Niveles importantes mostrando la sección Length (Days, Weeks, Months, Skip Last), la Configuración de trazado (Plot Settings) con el menú desplegable Plot Type abierto (Label, Line, Label and Line), los interruptores de nivel por período (Average Value, Low, High, Open, Close, POC, Value Area, VWAP), la configuración de color y el menú desplegable Filter Time | dc-es-important-levels-02.png]

## Cómo interpretarlo

- **Los máximos y mínimos anteriores son imanes de liquidez.** Los stops y las órdenes de ruptura se agrupan más allá de ellos, así que espere aceleración en la ruptura y reacciones frecuentes en la primera prueba. Estos son los niveles que conviene tener marcados antes de la apertura.
- **El cierre y la apertura anteriores definen el gap.** Un precio que opera lejos del cierre anterior significa un gap abierto; muchas estrategias de sesión giran en torno a si ese gap se rellena o se extiende.
- **El POC y el área de valor describen el valor aceptado.** El Point of Control del período anterior es donde se negoció el mayor volumen; el área de valor encierra el grueso de esa actividad. Un precio que vuelve a entrar en un área de valor antigua tiende a rotar a través de ella, mientras que el rechazo en su borde señala que el mercado trata el valor antiguo como soporte o resistencia. Consulte [[understanding-volume-profile]] para el concepto subyacente.
- **Los niveles VWAP tienen peso institucional.** El VWAP de un período anterior es un precio promedio de referencia; las reacciones allí a menudo reflejan a participantes defendiendo o deshaciendo posiciones en torno a su promedio. Consulte [[understanding-vwap]].
- **La confluencia es la verdadera señal.** Un mínimo semanal anterior asentado sobre el borde del área de valor mensual es una zona mucho más fuerte que cualquiera de los dos niveles por separado.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Configuración de longitud (Length Settings)

| Configuración | Qué hace |
|---|---|
| **Days** | Cuántos días anteriores de niveles se muestran. |
| **Weeks** | Cuántas semanas anteriores de niveles se muestran. |
| **Months** | Cuántos meses anteriores de niveles se muestran. |
| **Skip Last** | Cuando está habilitado, excluye los valores del período actual (todavía en formación), de modo que solo se trazan períodos completados. |

### Configuración de trazado (Plot Settings)

| Configuración | Qué hace |
|---|---|
| **Font Size** | Tamaño del texto de la etiqueta del nivel. |
| **Plot Type** | **Label** (solo texto), **Line** (solo líneas horizontales) o **Label and Line** (ambos). |
| **Text Align** | Posición de la etiqueta: **Left**, **Right**, **Current to Right** o **Current to Last**. |

### Niveles habilitados (por período)

Para cada marco temporal (diario, semanal, mensual) puede activar individualmente:

| Nivel | Qué marca |
|---|---|
| **Average Value** | El nivel de valor promedio del período. |
| **Low / High** | El mínimo y el máximo del período. |
| **Open / Close** | Los precios de apertura y cierre del período. |
| **POC** | El Point of Control del período: el precio con el mayor volumen negociado. |
| **Value Area** | Los límites del área de valor del período. |
| **VWAP** | El precio promedio ponderado por volumen del período. |

### Configuración de color

Colores personalizables para **Low**, **High**, **Open**, **Close**, **Mid Point**, **POC**, **Value Area** y **VWAP**.

### Filter Time

| Configuración | Qué hace |
|---|---|
| **Filter Time** | Sesión de trading utilizada para construir los niveles: **None**, **ETH**, **RTH** o **Custom**. Con **Custom**, usted establece las horas de inicio y fin según la zona horaria de la bolsa. |

> **Nota:** El filtro de sesión cambia los niveles en sí, no solo su visualización: un máximo del día anterior calculado solo con RTH puede diferir sustancialmente del máximo de la sesión completa (ETH). Elija la sesión que su estrategia realmente utiliza como referencia.

## Consejos y errores comunes

- **Habilite los niveles de forma progresiva.** Activar todos los niveles para todos los períodos crea un muro de líneas. Comience con los niveles diarios que realmente opera y añada niveles de marcos temporales superiores solo donde se ganen su lugar.
- **Utilice el color para codificar el marco temporal.** Asigne a los niveles diarios, semanales y mensuales familias de color distintas para saber al instante el peso de un nivel cuando el precio se aproxime a él.
- **Decida deliberadamente entre ETH y RTH.** Los operadores de futuros suelen planificar con niveles RTH mientras el mercado opera en ETH durante la noche; una configuración de sesión desajustada es la razón habitual de que "el máximo anterior se vea mal". Consulte [[understanding-market-structure-sessions]].
- **Utilice Skip Last para evitar objetivos móviles.** Con el período actual incluido, los niveles se desplazan a medida que el período se desarrolla; habilitar **Skip Last** mantiene el mapa fijo en los períodos completados.

## Artículos relacionados

- [[understanding-volume-profile]]
- [[understanding-vwap]]
- [[understanding-market-structure-sessions]]
- [[pivot-points]]
- [[different-types-of-input]]
- [[indicator-layout]]