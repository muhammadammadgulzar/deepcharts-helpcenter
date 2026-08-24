---
title: "Deep Pattern Builder"
slug: "deep-pattern-builder"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "7 min read"
description: "Construya lógica de trading personalizada a partir de condiciones relacionales sobre precio, volumen, delta y otros indicadores, y luego pruébela con el motor de simulación integrado."
keywords: ["deep pattern builder", "constructor de patrones", "condiciones personalizadas", "backtest", "ejecutar backtest", "backtest de autotrading", "indicator id subgraph id", "calculate on close"]
source_hash: "741da509b2b402bc"
ai_translated: true
source_hash: "741da509b2b402bc"
---
Deep Pattern Builder es el indicador más avanzado de la suite de DeepCharts. Le permite construir lógica de trading personalizada a partir de condiciones relacionales — comparaciones como A + B > C + D sobre valores de vela, volumen, delta, referencias de POC o salidas de otros indicadores — y luego ejecutar backtests automatizados sobre esa lógica con el motor de simulación integrado.

En la práctica son dos herramientas en una: un motor de señales que traza marcadores o resaltados de fondo allí donde sus condiciones son verdaderas, y un backtester que convierte esas señales en entradas simuladas con stops, objetivos y lógica de trailing.

## Qué es

Cada condición del constructor admite hasta cuatro entradas (**A**, **B**, **C**, **D**), une A con B y C con D mediante operadores matemáticos, y compara el bloque AB con el bloque CD mediante un operador lógico. Las condiciones pueden combinarse con lógica AND/OR, filtrarse con un filtro de desequilibrio integrado, visualizarse en el gráfico, conectarse a alertas y alimentar un modelo simulado de entrada/salida para backtesting.

[SCREENSHOT: Gráfico con Deep Pattern Builder aplicado: marcadores de señal trazados en las velas donde se activaron las condiciones personalizadas, con un par de barras con fondo resaltado visibles | dc-es-deep-pattern-builder-01.png]

## Cuándo usarlo

- Tiene una idea repetible ("cierre por encima del POC con delta positivo") y quiere que la plataforma la marque en cada barra, en vivo e históricamente.
- Quiere referenciar valores de otros indicadores (por ejemplo una media móvil) dentro de sus condiciones.
- Quiere evidencia estadística: el backtest integrado simula entradas, stops y objetivos sobre datos históricos.
- Quiere alertas sobre lógica de múltiples partes que ningún indicador estándar cubre por sí solo.

## Inicio rápido

1. Aplique primero el indicador **Deep Trades** al gráfico: el flujo de trabajo del constructor depende de él (consulte [[deep-trades]]).
2. Haga clic en el icono **Indicator**, busque **Deep Pattern Builder** y haga clic en **+** para añadirlo.
3. Haga clic en el icono **Settings** junto a Deep Pattern Builder.
4. Construya una primera condición. Ejemplo — "cierre con delta positivo por encima de la apertura": **Condition 1**: Input A = **Reference → Close**, operador lógico (Logical Operator) **>**, Input C = **Reference → Open**. **Condition 2**: Input A = **Reference → Delta Volume**, operador lógico **>**, Input C = **Constant → 0**. Combine con **AND (Simple)**.
5. Habilite **Calculate on Close** para que las señales se evalúen solo cuando la vela se completa, sin parpadeo intrabarra.
6. En **Plot Settings**, elija un **Plot Type** (empiece con **Marker**) y una ubicación de **Plot Price**.
7. Haga clic en **Apply and Save** y compruebe que aparecen marcadores en las barras históricas donde la lógica es verdadera.

[SCREENSHOT: Diálogo de configuración de Deep Pattern Builder mostrando una condición habilitada con Input A establecido en Reference Close, el menú desplegable Logical Operator, Input C establecido en Reference Open, y el selector Combine Mode debajo | dc-es-deep-pattern-builder-02.png]

## Cómo leerlo

Una señal (marcador o fondo resaltado) significa que cada parte de su lógica combinada se evaluó como verdadera en esa barra, nada más. La herramienta traza su idea; juzgar la idea es la función del backtest.

- **Los marcadores** se colocan en el **Plot Price** elegido (High = por encima de la vela, Low = por debajo, Current = en el cierre, Mid Price = centro de la mecha), coloreados por lado mediante los colores del subgraph.
- **Señales que parpadean durante una barra en vivo** significan que la condición oscila intrabarra: habilite **Calculate on Close** si solo quiere señales confirmadas.
- **Informe de backtest**: tras ejecutar un backtest, el informe muestra cómo rindieron las entradas simuladas bajo su modelo de stop/objetivo. Itere: ajuste las condiciones o la configuración de riesgo, vuelva a ejecutar y compare con informes guardados anteriores.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Condición

| Configuración | Qué hace |
|---|---|
| **Enable** | Activa la condición. |
| **Inputs A, B, C, D** | Hasta cuatro ranuras de entrada por condición; B y D son opcionales (establezca las ranuras no usadas en **Unused**). |
| **Math Operator 1** | +, −, ×, / entre las entradas A y B. |
| **Math Operator 2** | +, −, ×, / entre las entradas C y D. |
| **Logical Operator** | Compara el bloque AB con el bloque CD: >, >=, =, <> (distinto), <, <=. |

### Tipos de entrada

| Input Type | Qué hace |
|---|---|
| **Unused** | Deshabilita la ranura de entrada. |
| **Reference** | Componentes de la vela: Open, Close, High, Low, Bid Volume, Bid NT, Ask Volume, Ask NT, Total Volume, Total NT, Delta Volume, Delta NT, Low–High Ticks, Open–Close Ticks, POC Price %, POC Total Volume, POC on Shadow, Cumulative Delta Volume. |
| **Indicator** | Valores en vivo de otro indicador aplicado: requiere el **Indicator ID** de ese indicador y el **Subgraph ID** (la línea de valor específica a leer). |
| **Constant** | Un valor numérico fijo que usted escribe. |

| Opción | Qué hace |
|---|---|
| **Previous Bar** | Toma el valor de la entrada de la vela anterior en lugar de la actual: habilita lógica barra a barra como "delta creciente" (A = Delta Volume > B = Delta Volume, Previous Bar). |

### Modos de combinación

| Modo | Qué hace |
|---|---|
| **OR (Simple)** | Basta con que una sola condición sea verdadera para activar la señal. |
| **AND (Simple)** | Todas las condiciones deben ser verdaderas. |
| **AND + OR (Advanced)** | Agrupaciones anidadas como (Condición 1 OR Condición 2) AND (Condición 3 OR Condición 4). |
| **Calculate on Close** | Evalúa las condiciones solo tras el cierre de la vela: sin parpadeo intrabarra. |

### Filtro de desequilibrio

| Configuración | Qué hace |
|---|---|
| **Imbalance filter** | Un filtro integrado cuya configuración refleja la del indicador [[imbalance-tracker]]: restringe las señales a las barras que también cumplen los criterios de desequilibrio. |

### Configuración de trazado (Plot Settings)

| Configuración | Qué hace |
|---|---|
| **Plot Type** | **Marker** (solo marcador de señal), **Background** (resaltado del fondo de la vela) o **Series & Background** (ambos). |
| **Days to Load** | Cuántos días históricos calcular para las señales. |
| **Plot Price** | Ubicación del marcador: **High** (encima de la vela), **Low** (debajo de la vela), **Current** (en el cierre), **Mid Price** (centro de la mecha). |
| **Color / Opacity** | Color del marcador o del fondo y transparencia del fondo. |

### Configuración de alertas

| Configuración | Qué hace |
|---|---|
| **Alert selection** | Las alertas deben crearse primero en **Options → Add Alert**; solo entonces aparecen en la lista de alertas del constructor para su selección. |

### Simulación (backtesting)

| Configuración | Qué hace |
|---|---|
| **Enable** | Activa el modo de simulación. |
| **Entry Type** | **Market** (entrada inmediata), **Half Bar**, o **Ticks from Close** (orden de límite a X ticks del cierre de la vela). |
| **Side** | **Buy** o **Sell**. |
| **Allow Multiple Entries** | Permite posiciones simultáneas. |
| **Entry Expiration (Bars)** | Cuántas barras permanece válida una entrada pendiente. |
| **Stop (Ticks)** | Distancia fija del stop-loss. |
| **Trailing Stop — Enable / Trigger (Ticks) / Offset (Ticks)** | Activa un trailing stop; Trigger es el umbral de beneficio antes de activarse, Offset la distancia que mantiene detrás del precio. |
| **Targets** | Múltiples objetivos de beneficio en ticks. |
| **Move to Break Even (B/E)** | Mueve el stop al precio de entrada cuando se alcanza un objetivo. |

### Subgraph

| Configuración | Qué hace |
|---|---|
| **Color / Color 2** | Colores de marcador del lado bid y del lado ask. |
| **Subgraph style** | Selección del estilo del marcador. |

## Cómo ejecutar un backtest

1. Configure las condiciones, el trazado y la simulación, y luego haga clic en **Apply and Save**.
2. Haga clic con el botón derecho en el gráfico.
3. Seleccione **Autotrading → Execute Backtest**.
4. Revise el informe. Mediante el clic derecho también puede borrar resultados, ver backtests anteriores y guardar informes.

[SCREENSHOT: Menú contextual de clic derecho en el gráfico con Autotrading expandido y Execute Backtest resaltado, con un informe de backtest completado visible | dc-es-deep-pattern-builder-03.png]

## Consejos y errores comunes

- **¿Falta la opción de backtest en el clic derecho?** Siga el flujo de trabajo completo en orden: Deep Trades aplicado, Deep Pattern Builder añadido y configurado, **Apply and Save** pulsado; luego clic derecho → **Autotrading → Execute Backtest**.
- **¿La alerta no aparece en la lista del constructor?** Las alertas deben existir antes de que el constructor pueda usarlas: créelas primero en **Options → Add Alert**.
- **¿Las señales parpadean intrabarra?** Habilite **Calculate on Close**.
- **¿Referenciar otro indicador no devuelve nada?** Compruebe tanto el **Indicator ID** como el **Subgraph ID**: el Subgraph ID selecciona qué línea de valor de ese indicador se lee.
- **Empiece con una sola condición.** Verifique que cada condición se traza con sentido por sí sola antes de combinarla con AND/OR: depurar lógica anidada con cuatro entradas por condición es mucho más difícil.
- **La lógica barra a barra necesita Previous Bar.** "Delta creciente" es Delta Volume actual > Delta Volume con **Previous Bar** habilitado en la segunda entrada, no dos condiciones separadas.

## Artículos relacionados

- [[deep-trades]]
- [[imbalance-tracker]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[dynamic-poc]]