---
title: "Herramientas de dibujo y anotaciones"
slug: "drawing-tools"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Todas las herramientas de dibujo de DeepCharts con su atajo de teclado, además de la edición, el ajuste automático, la ocultación, la importación/exportación y la sincronización de anotaciones entre gráficos."
keywords: ["herramientas de dibujo", "anotaciones", "línea horizontal", "línea de tendencia", "retroceso de fibonacci", "calculadora de compra", "calculadora de venta", "exportar anotaciones", "importar anotaciones", "borrar todos los dibujos", "imán", "ajustar anotación", "los dibujos desaparecieron"]
source_hash: "7e1e4d040319257d"
ai_translated: true
source_hash: "7e1e4d040319257d"
---
Los dibujos (líneas, niveles, rectángulos, herramientas de Fibonacci, notas de texto) son la forma de anotar un gráfico de DeepCharts. Todas las herramientas están disponibles desde dos lugares: la barra de herramientas izquierda del gráfico y el menú de clic derecho bajo **Drawing Objects** (Objetos de dibujo), la mayoría con un atajo de teclado.

Este artículo enumera cada objeto de dibujo y su atajo de teclado, y luego cubre los flujos de trabajo relacionados con los dibujos: editar y reutilizar estilos, el ajuste automático, ocultar, borrar en masa, mover anotaciones entre gráficos y equipos, y mantener los dibujos sincronizados entre gráficos del mismo instrumento.

## Qué es

El sistema de anotaciones de la ventana del gráfico. Responde a "cómo dibujo X", "cómo cambio el color de un dibujo", "dónde fueron mis dibujos" y "cómo llevo mis dibujos a otro gráfico o a otro PC".

[SCREENSHOT: Un gráfico con varias anotaciones colocadas — una línea horizontal en un nivel, una línea de tendencia, una zona rectangular y una nota de texto — con la barra de herramientas de dibujo izquierda visible y el submenú Drawing Objects del clic derecho abierto | dc-es-drawing-tools-01.png]

## Cuándo usarlo

- Marcar niveles de soporte/resistencia, zonas y extremos de sesión.
- Medir movimientos y planificar operaciones (Regla, calculadora de compra/venta).
- Anotar gráficos para un diario o para compartir como capturas de pantalla.
- Mantener los mismos niveles visibles en varios gráficos de un instrumento.

## Inicio rápido

1. Haga clic con el botón derecho en el gráfico y abra **Drawing Objects**, o utilice la barra de herramientas izquierda (actívela o desactívela con el icono **≡** en la parte superior izquierda).
2. Elija una herramienta — por ejemplo **Horizontal Line** (Línea horizontal) (Shift H) — y haga clic en el gráfico para colocarla.
3. Para editar un dibujo, haga doble clic izquierdo sobre él (o clic izquierdo para seleccionarlo y luego clic derecho → **Settings**) y cambie los colores y estilos en la Configuración de anotaciones (Annotation Settings).
4. Para eliminar un solo dibujo, selecciónelo y bórrelo; para borrarlo todo, utilice clic derecho → **Drawing Utilities → Erase All Drawing** (vea la advertencia más abajo).

[SCREENSHOT: El diálogo de Configuración de anotaciones abierto para una línea horizontal, mostrando las opciones de color, estilo de línea y grosor | dc-es-drawing-tools-02.png]

## Referencia de configuración

### Objetos de dibujo (clic derecho → Drawing Objects)

| Herramienta (atajo) | Qué hace |
|---|---|
| **Horizontal Line** (Shift H) | Nivel de precio a lo ancho del gráfico. |
| **Vertical Line** | Marca un punto en el tiempo. |
| **Horizontal Ray** | Nivel de precio que comienza en un punto y se extiende hacia la derecha. |
| **Line** (Shift L) | Línea de tendencia libre entre dos puntos. |
| **Parallel Lines** (Shift P) | Canal paralelo. |
| **Ruler** | Mide entre dos puntos del gráfico. |
| **Rectangle** (Shift R) | Zona de precio/tiempo. Si deja de responder, consulte [[rectangle-drawing-tool]]. |
| **Ellipse** | Zona elíptica. |
| **Text** (Shift T) | Nota de texto en el gráfico. |
| **Pencil** | Dibujo a mano alzada. |
| **Price Retracement** (Shift F) | Retroceso de Fibonacci. |
| **Price Projection** | Proyección de Fibonacci. |
| **Price Fan** | Herramienta de abanico: corresponde al abanico de Fibonacci listado en **Options → Settings → Toolbar**. |
| **Volume Profile** (Shift V) | Dibuja un perfil de volumen sobre un rango seleccionado. Concepto: [[understanding-volume-profile]]. |
| **VWAP** | Herramienta de dibujo de VWAP. Concepto: [[understanding-vwap]]. |
| **Buy calculator** (Shift B) | Calculadora de posición para largos: colóquela y luego arrastre el área de stop-loss y el área de take-profit hacia arriba o hacia abajo; muestra la relación riesgo/beneficio, el precio de ambos niveles y la distancia en ticks de cada nivel respecto a la entrada. |
| **Sell calculator** (Shift S) | La misma calculadora de posición para cortos. |

[SCREENSHOT: Un dibujo de calculadora de compra colocado en un gráfico con el área de SL debajo de la entrada y el área de TP encima, mostrando la relación riesgo/beneficio y las distancias en ticks | dc-es-drawing-tools-03.png]

> **Consejo:** Vale la pena memorizar las entradas de modo de cursor del mismo menú de clic derecho: **Pointer** (Alt P), **Crosshair** (Alt C), **Global Crosshair** (Alt G — cursor en cruz en todos los gráficos del mismo instrumento), **Hand** (Alt H). Los atajos son configurables — consulte [[keyboard-shortcuts]].

### Extras de la barra de herramientas izquierda

La barra izquierda refleja las herramientas de dibujo (qué herramientas aparecen allí es configurable en **Options → Settings → Toolbar**), además de:

| Icono | Qué hace |
|---|---|
| **Ojo** | Oculta/muestra TODOS los dibujos del gráfico. |
| **Imán** | Cuando está habilitado, los nuevos dibujos se adhieren al nivel principal más cercano: el máximo/mínimo de la mecha de la vela más próxima o su apertura/cierre. Deshabilitado = colocación totalmente libre. |
| **Borrador** | Elimina dibujos. |

### Editar y reutilizar estilos

- **Editar:** haga doble clic izquierdo sobre un dibujo, o selecciónelo y haga clic derecho → **Settings**.
- **Guardar una configuración:** almacene la configuración de estilo de un dibujo para reutilizarla en el futuro desde su diálogo de configuración.
- **Recuperar una configuración:** haga clic derecho sobre el dibujo y abra **Tool Config**.

### Utilidades de dibujo (clic derecho → Drawing Utilities)

| Elemento | Qué hace |
|---|---|
| **Import Annotations** | Carga dibujos desde un archivo. |
| **Export Annotations** | Guarda los dibujos en un archivo — formato seleccionable: CSV o el formato Volumetrica (específico de las aplicaciones DeepCharts). Así es como mueve dibujos entre equipos o los comparte. [CONFIRM: whether export covers all drawings or only selected ones] |
| **Snap annotation** (Ctrl S) | Interruptor de ajuste automático para anotaciones [CONFIRM: whether this is the same toggle as the magnet icon]. |
| **Hide/Show annotations** | Alterna la visibilidad de las anotaciones en el gráfico. |
| **Erase All Drawing** | Elimina todos los dibujos del gráfico. |

> **Advertencia:** **Erase All Drawing** elimina todos los dibujos del gráfico en una sola acción. Exporte primero sus anotaciones si existe alguna posibilidad de que quiera recuperarlas.

### Dibujos entre gráficos

- **Drawing Tool From Other Chart** (menú de clic derecho) sincroniza los dibujos entre gráficos: configúrelo entre, por ejemplo, un gráfico de 1 minuto y uno de 5 minutos del mismo símbolo, y un dibujo hecho en uno aparecerá en el otro.
- Para trasladar una configuración de gráfico completa (dibujos incluidos) a otro gráfico o PC, utilice plantillas y espacios de trabajo — consulte [[templates-workspaces]].

## Consejos y errores comunes

- **"Mis dibujos desaparecieron."** Antes de asumir que se perdieron, revise el icono del **ojo** en la barra de herramientas izquierda y clic derecho → **Drawing Utilities → Hide/Show annotations** — uno de los dos interruptores de visibilidad suele ser la causa.
- **Los dibujos no caen exactamente en los máximos/mínimos de las velas** — habilite el icono del **imán** para que los nuevos dibujos se ajusten a la mecha o apertura/cierre más cercanos.
- **¿Se cambia a un PC nuevo?** Clic derecho → **Drawing Utilities → Export Annotations**, copie el archivo y luego use **Import Annotations** en el otro equipo.
- **Planifique la operación antes de colocarla:** la **calculadora de compra/venta** muestra la relación riesgo/beneficio y las distancias en ticks mientras arrastra los niveles — más rápido que calcularlas a mano.
- Opciones relacionadas a nivel de gráfico: **Options → Settings → General → Chart** incluye comportamientos de anotaciones como **Editable copied annotation** y **Annotations stop on last bar**.

## Artículos relacionados

- [[chart-window]]
- [[rectangle-drawing-tool]]
- [[keyboard-shortcuts-reference]]
- [[templates-workspaces]]
- [[understanding-volume-profile]]
- [[understanding-vwap]]