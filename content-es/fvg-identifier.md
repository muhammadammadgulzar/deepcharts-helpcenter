---
title: "Identificador de FVG (FVG Identifier)"
slug: "fvg-identifier"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Detecte y resalte automáticamente los Fair Value Gaps (FVG) en el gráfico, con filtros por tamaño en ticks, reglas de mitigación y controles de extensión."
keywords: ["identificador de fvg", "fair value gap", "fvg", "zona de desequilibrio", "mitigación", "smart money concepts", "indicador fvg", "fair value gaps"]
source_hash: "01bf1d90a35b0b3a"
ai_translated: true
source_hash: "01bf1d90a35b0b3a"
---
El Identificador de FVG (FVG Identifier) detecta y resalta automáticamente los Fair Value Gaps (FVG) en el gráfico. Un Fair Value Gap se forma cuando el precio se mueve con la agresividad suficiente para dejar un desequilibrio entre velas: un rango de precios que fue saltado en lugar de negociado en ambas direcciones. Estas zonas actúan con frecuencia como áreas futuras de reacción o mitigación, y por eso muchos traders las mantienen marcadas.

En lugar de buscar usted mismo secuencias de tres velas a ojo, el indicador encuentra los gaps que cumplen los criterios, los sombrea, los extiende hacia adelante y puede eliminarlos automáticamente una vez que el precio ha vuelto a negociar dentro de ellos.

## Qué es

El Identificador de FVG responde a la pregunta "¿dónde se movió el precio tan rápido que dejó un desequilibrio, y cuáles de esas zonas siguen abiertas?" Cuando un gap entre velas alcanza su tamaño mínimo (en ticks), el indicador dibuja una zona sombreada sobre ese rango de precios y la extiende hacia la derecha hasta que se cumple su regla de mitigación: por ejemplo, cuando el precio entra en la zona con una mecha o rellena un porcentaje determinado de ella.

Los FVG suelen leerse como huellas de un flujo de órdenes agresivo y unilateral: el mercado se movió tan rápido que en ese rango de precios nunca hubo negociación en ambos sentidos, y el precio a menudo regresa más tarde para "reequilibrarlo".

## Cuándo usarlo

- Para marcar zonas potenciales de reacción: los FVG abiertos son áreas populares para entradas en retroceso en la dirección del movimiento impulsivo original.
- Para hacer seguimiento de la mitigación: el indicador puede eliminar o actualizar las zonas a medida que el precio vuelve a negociar dentro de ellas, dejando en el gráfico solo los desequilibrios todavía relevantes.
- Para filtrar la relevancia: los límites de tamaño en ticks le permiten ignorar los microgaps y acotar los desmesurados, de modo que solo queden zonas operables.
- Para complementar el análisis de flujo de órdenes: los FVG derivados de la acción del precio suelen coincidir con señales de desequilibrio de herramientas basadas en volumen como [[imbalance-tracker]].

## Inicio rápido

1. Abra un gráfico y haga clic en el icono de gráfico de barras en la esquina superior izquierda para abrir el panel **Indicators**.
2. Haga clic en **Indicators** para abrir la **Indicator List** completa.
3. Busque "FVG Identifier" y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración. Ajuste **Min num ticks** lo bastante alto para excluir el ruido rutinario entre barras en su marco temporal: empiece con un valor pequeño y auméntelo hasta que solo queden zonas limpias.
5. Elija si las zonas deben desaparecer al ser tocadas por una mecha (**Remove Line On Shadow Triggered**) o solo tras un relleno porcentual (**% breakout**), según lo estricta que sea su definición de mitigación.

[SCREENSHOT: Un gráfico de precios con el Identificador de FVG activo: dos zonas FVG sombreadas que se extienden hacia la derecha desde movimientos impulsivos, una todavía abierta y otra a punto de ser tocada por un retroceso | dc-es-fvg-identifier-01.png]

## Cómo leerlo

- **Un FVG abierto por debajo del precio** (dejado por un movimiento alcista agresivo) es una zona potencial de demanda/reacción en un retroceso; **un FVG abierto por encima del precio** es el caso espejo para movimientos bajistas.
- **El primer toque es el que más importa.** El manual habitual vigila el primer regreso a una zona fresca; una zona en la que se ha entrado repetidamente ya ha completado la mayor parte de su reequilibrio.
- **La mitigación es su regla de limpieza.** Con una regla estricta (cualquier mecha elimina la zona) su gráfico se mantiene minimalista; con una regla de relleno porcentual, las zonas parcialmente rellenadas sobreviven y usted puede operar el resto sin rellenar.
- **El tamaño es información.** Los gaps muy pequeños son en su mayoría ruido, para eso existe **Min num ticks**, mientras que los gaps extremadamente grandes suelen provenir de eventos de noticias y se comportan de forma menos predecible, motivo por el cual existe el límite **Max num ticks**.

## Referencia de configuración

### Visualización

| Configuración | Qué hace |
|---|---|
| **Horizontal** | Dibuja los resaltados de FVG directamente sobre el gráfico de precios. |
| **Vertical** | Muestra el indicador en vertical, donde esté disponible. |
| **Panel** | Selecciona qué panel del gráfico recibe la superposición. |

### Parámetros generales

| Configuración | Qué hace |
|---|---|
| **Min num ticks** | El tamaño mínimo, en ticks, requerido para que un gap se considere un FVG válido. Valores más pequeños detectan más gaps; valores más grandes filtran los desequilibrios menores. |
| **Max num ticks** | El tamaño máximo de gap permitido para calificar como FVG. Filtra los movimientos excesivamente grandes. |

### Configuración de trazado (Plot Settings)

| Configuración | Qué hace |
|---|---|
| **Line Width** | Grosor de los bordes de las zonas FVG. |
| **Color** | Color del área FVG resaltada. |
| **Back Opacity** | Transparencia del fondo de la zona: cuanto más alto, más sólido; cuanto más bajo, más transparente. |

### Extensión

| Configuración | Qué hace |
|---|---|
| **Reset Start Day** | Reinicia el seguimiento de FVG al comienzo de cada día de trading. |
| **Remove Line On Shadow Triggered** | Elimina una zona FVG en cuanto el precio entra en ella con una mecha. |
| **Max bars extension** | Limita cuántas barras se extiende una zona hacia adelante. 0 = se extiende indefinidamente. |
| **% breakout** | El porcentaje del gap que debe rellenarse para que la zona cuente como mitigada. |

[SCREENSHOT: El diálogo de configuración del Identificador de FVG mostrando los Parámetros generales (Min num ticks, Max num ticks), la Configuración de trazado y el grupo Extensión con Reset Start Day, Remove Line On Shadow Triggered, Max bars extension y % breakout | dc-es-fvg-identifier-02.png]

## Consejos y errores comunes

- **No use un mínimo de 0 ticks en gráficos rápidos.** Los gráficos de futuros en marcos temporales bajos producen pequeños desequilibrios constantemente; sin un **Min num ticks** razonable, el gráfico se convierte en un empapelado.
- **Decida qué significa "mitigado" antes de operarlo.** Una regla de toque de mecha y una regla de relleno del 50% producen gráficos distintos y operaciones distintas: ajuste **Remove Line On Shadow Triggered** y **% breakout** según su propio manual, no según los valores por defecto del último tutorial que haya visto.
- **Use Reset Start Day de forma deliberada.** Habilitarlo mantiene el gráfico centrado en los desequilibrios de hoy; deshabilitarlo conserva zonas de varios días, que importan más en marcos temporales altos.
- **Los FVG son una aproximación al desequilibrio basada en la acción del precio, no una prueba de él.** Las herramientas basadas en volumen miden la agresión directamente; cuando un FVG y un desequilibrio de volumen coinciden, la zona merece más peso. Consulte [[understanding-auction-theory]] para la lógica subyacente.

## Artículos relacionados

- [[gap-detector]]
- [[imbalance-tracker]]
- [[understanding-auction-theory]]
- [[swing-point]]
- [[different-types-of-input]]
- [[indicator-layout]]