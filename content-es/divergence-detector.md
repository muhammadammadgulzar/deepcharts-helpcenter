---
title: "Detector de divergencias"
slug: "divergence-detector"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "advanced"
time: "6 min read"
description: "Detecte divergencias de volumen y delta en nuevos máximos y mínimos y márquelas en el gráfico como posibles rupturas falsas y avisos de reversión."
keywords: ["detector de divergencias", "divergencia de volumen", "divergencia de delta", "divergencia", "ruptura falsa", "etiqueta VD", "etiqueta DV", "VDD", "divergancia"]
source_hash: "83a4a57134999b9e"
ai_translated: true
source_hash: "83a4a57134999b9e"
---
Una ruptura en la que nadie participa es una ruptura de la que conviene dudar. El Detector de divergencias (Divergence Detector) vigila exactamente eso: resalta la divergencia de volumen o de delta con etiquetas directamente en el gráfico, señalando los momentos en que se forma un nuevo máximo o mínimo relativo sin un aumento correspondiente de volumen o delta.

Como los extremos con poca participación suelen preceder a rupturas falsas y reversiones, el indicador actúa como un escéptico automatizado: marca los máximos y mínimos donde el esfuerzo detrás del movimiento no estuvo a la altura del resultado.

## Qué es

El Detector de divergencias compara los extremos del precio con el volumen y el delta que los produjeron. Cuando el precio imprime un nuevo máximo o mínimo relativo (identificado mediante un motor de giros Zig Zag integrado) pero el volumen o el delta no se expande con él, el indicador imprime una etiqueta en ese extremo:

- **VD**: solo divergencia de volumen.
- **DV**: solo divergencia de delta.
- **VDD**: divergencia de volumen y de delta a la vez, priorizando la divergencia más significativa.

El delta aquí es la diferencia entre la compra agresiva y la venta agresiva; si ese concepto es nuevo para usted, lea primero [[orderflow-101]]. Puede construir una intuición a continuación: pase el cursor por las barras de este histograma de delta interactivo y observe cómo se comportan el delta por barra y la línea acumulada cuando el precio empuja hacia nuevos extremos.

[WIDGET: delta-lab]

## Cuándo usarlo

- Para operar en contra de rupturas sospechosas: un nuevo máximo con volumen menguante o delta débil es una configuración clásica de ruptura falsa.
- Para cronometrar salidas: una divergencia en un extremo a su favor es motivo para ajustar los stops o reducir la posición, incluso si no revierte.
- Para confirmar fallos de giro: combinada con una lectura de estructura de [[swing-point]] o [[zig-zag]], una divergencia etiquetada añade evidencia de que un giro no se sostendrá.
- Para vigilar la participación en tiempo real: el modo de cálculo Tick evalúa la divergencia en el momento en que se rompe un extremo previo, no solo al cierre de la barra.

## Inicio rápido

1. Abra un gráfico y haga clic en el icono de gráfico de barras de la esquina superior izquierda para abrir el panel **Indicators** (indicadores).
2. Haga clic en **Indicators** para abrir la **Indicator List** completa.
3. Busque "Divergence Detector" y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración. Establezca **Calculation Mode (1)** en **Volume and delta** para ver el cuadro completo (etiquetas VDD), y empiece con **Calculation Mode (2)** = **Close** para que las señales solo se impriman en velas completadas.
5. Ajuste la configuración del Zig Zag para que los giros coincidan con la estructura que realmente opera: si aparecen etiquetas en cada pequeña oscilación, el parámetro de reversión es demasiado pequeño.

[SCREENSHOT: Un gráfico de futuros con el Detector de divergencias activo: un nuevo máximo de giro etiquetado con VDD sobre la vela, mostrando el precio haciendo un máximo más alto mientras la participación se desvanecía | dc-es-divergence-detector-01.png]

## Cómo leerlo

- **Una etiqueta en un nuevo máximo** significa que el precio superó el máximo relativo anterior sin un aumento equivalente de volumen (VD), delta (DV) o ambos (VDD). Al movimiento le faltó participación, una advertencia de que la ruptura puede fallar.
- **Una etiqueta en un nuevo mínimo** es el espejo: extensión a la baja sin expansión del esfuerzo vendedor.
- **VDD supera a una etiqueta de una sola fuente.** Cuando volumen y delta divergen a la vez en el mismo extremo, la evidencia es más fuerte; la etiqueta prioriza la divergencia más significativa.
- **El modo de cálculo cambia el significado.** En modo **Tick**, una etiqueta puede aparecer dentro de la barra en el momento en que se rompe el extremo anterior: la señal más temprana, con más ruido. El modo **Close** espera a que la vela termine: el más tardío, el más limpio. **Sec. to close** es el compromiso: evalúa un número determinado de segundos antes del cierre.
- **La divergencia es una advertencia, no una orden.** Los mercados pueden avanzar hacia nuevos extremos con participación débil durante más tiempo del que sobrevive una posición contraria; exija un detonante estructural antes de actuar.

## Referencia de configuración

### General

| Configuración | Qué hace |
|---|---|
| **Calculation Mode (1)** | Elige qué divergencias se muestran: **Volume** (solo etiquetas VD), **Delta** (solo etiquetas DV) o **Volume and delta** (etiqueta VDD, priorizando la divergencia más significativa). |
| **Calculation Mode (2)** | Establece cuándo se evalúa la divergencia: **Tick** (en la ruptura del tick del máximo/mínimo anterior), **Sec. to close** (a un número especificado de segundos antes del cierre de la vela) o **Close** (al cierre de la vela). |
| **Maximum Seconds To Close** | El parámetro de tiempo usado por el modo **Sec. to close**. |

### Configuración del Zig Zag (Zig Zag Settings)

Los máximos y mínimos de giro con los que compara el detector se encuentran mediante un Zig Zag interno.

| Configuración | Qué hace |
|---|---|
| **Zig Zag Mode** | Cómo se identifican las reversiones (puntos de giro): **Absolute Reversal** usa un valor de reversión de precio fijo, requiriendo suficiente movimiento del precio en la dirección opuesta; **Tick Reversal** se basa en ticks, permitiendo un movimiento mínimo de ticks para generar una reversión; **Highest Lowest** se basa en la diferencia de ticks entre el máximo y el mínimo del giro. |
| **Absolute reversal parameter** | El valor de reversión usado en el modo Absolute Reversal. |
| **Tick Reversal / Highest Lowest parameter** | El valor de ticks usado por los modos Tick Reversal y Highest Lowest. |

### Configuración de trazado (Plot Settings)

| Configuración | Qué hace |
|---|---|
| **Text size** | Tamaño de las etiquetas de divergencia. |
| **Distance ticks** | Distancia, en ticks, entre la etiqueta y el extremo de la vela que marca. |

### Alertas y Subgraphs

| Configuración | Qué hace |
|---|---|
| **Alert Sound** | Habilita una notificación sonora cuando se detecta una divergencia. |
| **Subgraphs** | Personaliza los colores de fondo y de texto de las etiquetas. |

[SCREENSHOT: El diálogo de configuración del Detector de divergencias mostrando los menús desplegables Calculation Mode (1) y Calculation Mode (2), Maximum Seconds To Close, y el grupo Zig Zag Settings con los tres modos de reversión | dc-es-divergence-detector-02.png]

## Consejos y errores comunes

- **Elija el modo de cálculo que encaje con su estilo.** Los scalpers que buscan un fallo inmediato quieren **Tick**; si usted revisa velas completadas, **Close** evita etiquetas que habrían desaparecido antes del final de la barra.
- **El Zig Zag lo define todo.** Si los giros se definen demasiado ajustados, cada microextremo se evalúa por divergencia y el número de etiquetas se dispara; demasiado holgados, y las reversiones reales pasan sin etiquetar. Ajuste el parámetro de reversión por instrumento y marco temporal.
- **La divergencia de volumen y la de delta no son intercambiables.** La divergencia de volumen dice que la actividad total se desvaneció; la divergencia de delta dice que el desequilibrio de agresores se desvaneció. Un máximo con volumen fuerte pero delta débil cuenta una historia distinta a uno con volumen débil; ejecutar el modo **Volume and delta** preserva esa distinción.
- **Espere que las divergencias fallen en tendencias fuertes.** Las tendencias persistentes imprimen habitualmente extremos con poca participación y siguen avanzando; use la divergencia como filtro contra perseguir el precio, no como un sistema de reversión independiente.

## Artículos relacionados

- [[orderflow-101]]
- [[zig-zag]]
- [[delta-bar]]
- [[volume]]
- [[different-types-of-input]]
- [[indicator-layout]]