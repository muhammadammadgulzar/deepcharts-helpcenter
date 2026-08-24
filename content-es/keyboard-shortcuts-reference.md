---
title: "Referencia de atajos de teclado"
slug: "keyboard-shortcuts-reference"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Atajos de teclado predeterminados en DeepCharts para espacios de trabajo, navegación de gráficos, herramientas de dibujo y trading, agrupados como en la pestaña de configuración Shortcuts."
keywords: ["lista de atajos de teclado", "hotkeys", "atajos predeterminados", "hoja de referencia de atajos", "combinaciones de teclas", "lista de hotkeys", "keybindings", "atajos"]
source_hash: "cf17b93b068ec12b"
ai_translated: true
source_hash: "cf17b93b068ec12b"
---
Esta página enumera los atajos de teclado predeterminados que vienen con DeepCharts, agrupados de la misma forma que la tabla **Shortcuts** de la aplicación. Manténgala abierta mientras aprende la plataforma: el puñado de combinaciones para modos de ratón, herramientas de dibujo y espacios de trabajo cubre la mayor parte del trabajo diario.

Todos los atajos son reasignables, así que si sus combinaciones difieren de esta página, alguien las cambió en **Options → Settings → Shortcuts**. Consulte [[keyboard-shortcuts]] para saber cómo cambiar o restaurar una asignación.

## Qué es

DeepCharts asigna combinaciones de teclas a acciones de plataforma (espacios de trabajo, capturas de pantalla) y acciones de gráfico (modos de ratón, herramientas de dibujo, interruptores de trading). La lista autorizada es la pestaña **Shortcuts** en **Options → Settings**: contiene aproximadamente 70 acciones asignables, organizadas por **Category** (**General** o **Chart**) y **Type** (**Action**, **Control**, **Drawing and Annotation**, **Scroll**, **Trading**). Esta página documenta las combinaciones predeterminadas de las entradas más usadas; las acciones no listadas aquí pueden consultarse (y asignarse) en la misma pestaña.

[SCREENSHOT: Ventana General Settings en la pestaña Shortcuts mostrando la tabla de atajos con las columnas Category, Type, Description y Combination, desplazada al inicio | dc-es-keyboard-shortcuts-reference-01.png]

## Cuándo utilizarla

- Quiere trabajar más rápido en los gráficos sin buscar en el menú de clic derecho
- Pulsó algo por accidente y necesita identificar qué desencadenó
- Está a punto de reasignar teclas y quiere saber cuáles eran los valores predeterminados
- Cambió desde otra plataforma y quiere comparar convenciones antes de reasignar

## Inicio rápido

1. Aprenda primero los cinco modos de ratón del gráfico (**Alt P / Alt C / Alt G / Alt H / Alt R**): sustituyen los clics de barra de herramientas más frecuentes.
2. Añada las herramientas de dibujo que use a diario (por ejemplo **Shift H** para una línea horizontal, **Shift R** para un rectángulo).
3. Guarde su disposición con **Ctrl Alt S** (**Workspace save**) al final de cada sesión: DeepCharts no guarda automáticamente las disposiciones.
4. Para cambiar cualquier asignación, abra **Options → Settings → Shortcuts**, haga clic en **Register** en la fila, pulse las nuevas teclas y haga clic en **Save Settings** ([[keyboard-shortcuts|guía completa]]).

## Referencia de configuración

Los atajos de gráfico actúan sobre la ventana de gráfico con el foco. Muchos de ellos también se muestran junto a sus comandos en el menú de clic derecho del gráfico, de modo que el menú sirve además como recordatorio dentro de la aplicación.

[SCREENSHOT: Menú contextual de clic derecho del gráfico abierto, con las teclas rápidas visibles junto a las entradas (Pointer Alt P, Crosshair Alt C, Trading Enabled Ctrl Alt T, Indicators Ctrl I, Properties Ctrl P) | dc-es-keyboard-shortcuts-reference-02.png]

### General (toda la plataforma)

| Acción | Combinación predeterminada |
|---|---|
| Workspace open | Ctrl Alt O |
| Workspace save | Ctrl Alt S |
| Workspace close | Ctrl Alt C |
| Workspace next | Ctrl Alt + |
| Workspace previous | Ctrl Alt - |
| Reset open windows | Ctrl Alt R |
| Take screenshot | Ctrl Alt I |
| Replay Play/Pause | [CONFIRM: default combination — none captured] |

### Gráfico — modos de ratón (Control)

| Acción | Combinación predeterminada |
|---|---|
| Pointer | Alt P |
| Crosshair | Alt C |
| Global Crosshair | Alt G |
| Hand | Alt H |
| Zoom Range | Alt R |
| Crosshair Window | [CONFIRM: default combination — none captured] |

### Gráfico — acciones

| Acción | Combinación predeterminada |
|---|---|
| Indicators | Ctrl I |
| Properties | Ctrl P |
| Rebuild chart | Ctrl R |
| Change symbol | Ctrl C |
| Change timeframe | Space |
| Annotation snap | Ctrl S |
| Annotation import / export / hide-show / erase all | [CONFIRM: default combinations — none captured] |

### Gráfico — herramientas de dibujo (Drawing and Annotation)

| Herramienta de dibujo | Combinación predeterminada |
|---|---|
| Horizontal Line | Shift H |
| Line | Shift L |
| Parallel Lines | Shift P |
| Rectangle | Shift R |
| Text | Shift T |
| Price Retracement (retroceso de Fibonacci) | Shift F |
| Volume Profile | Shift V |
| Buy calculator | Shift B |
| Sell calculator | Shift S |

Vertical Line, Horizontal Ray, Ruler, Ellipse, Pencil, Price Projection, Price Fan y VWAP no muestran combinación en el menú **Drawing Objects** del gráfico y parecen venir sin asignar. [CONFIRM: whether these drawing tools have default bindings] Usted puede asignar cualquiera de ellas desde la pestaña **Shortcuts**.

### Gráfico — trading

| Acción | Combinación predeterminada |
|---|---|
| Trading Enabled | Ctrl Alt T |
| Show Trading Panel | Ctrl Alt P |
| Show Historical Orders | Ctrl Alt H |

> **Nota:** El tipo **Scroll** también existe en la pestaña Shortcuts para funciones de navegación y desplazamiento. [CONFIRM: default Scroll bindings — none captured]

## Consejos y errores comunes

- **Ctrl C en un gráfico cambia el símbolo, no copia.** Es el valor predeterminado más sorprendente para los usuarios nuevos. Si sigue abriendo el selector de instrumentos al intentar copiar, acostúmbrese o reasigne **Change symbol**.
- **Space cambia el marco temporal.** Pulsar la barra espaciadora con un gráfico enfocado abre la selección de marco temporal, lo que puede parecer accidental al principio.
- **Alt C frente a Ctrl Alt C.** Alt C cambia el cursor del gráfico a cruz; añadir Ctrl cierra el espacio de trabajo actual. Si su disposición "desapareció" tras un intento fallido de activar la cruz, esta es la razón: reábrala con Ctrl Alt O.
- **Convierta Ctrl Alt S en un hábito.** DeepCharts no guarda automáticamente las disposiciones de gráfico; **Workspace save** es la diferencia entre que su configuración sobreviva a un reinicio o no. Consulte [[templates-workspaces]].
- **Los atajos de gráfico necesitan que el gráfico tenga el foco.** Haga clic primero en el gráfico: una combinación de la categoría Chart pulsada con otra ventana enfocada no hace nada.
- **Esta página muestra los valores predeterminados.** Todas las combinaciones son reasignables, así que la plataforma de un compañero (o una plataforma configurada hace meses) puede diferir. La pestaña **Shortcuts** es siempre la fuente de verdad para la máquina que tiene delante.

## Artículos relacionados

- [[keyboard-shortcuts]]
- [[chart-window]]
- [[drawing-tools]]
- [[templates-workspaces]]
- [[trading-from-chart]]
- [[replay-data]]