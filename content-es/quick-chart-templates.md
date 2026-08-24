---
title: "Plantillas rápidas de gráfico (OF-VP, D-VP, W-VP...)"
slug: "quick-chart-templates"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Qué cargan los botones de opción OF-VP, OF-B/A, D-VP, D-DP, D-VL, W-VP, W-DP y C-VP de la barra inferior del gráfico, y cuándo usar cada preajuste."
keywords: ["OF-VP", "OF-B/A", "D-VP", "D-DP", "D-VL", "W-VP", "W-DP", "C-VP", "plantillas rápidas", "botones de la barra inferior", "preajustes de gráfico", "preajuste footprint", "preajuste de perfil de volumen"]
source_hash: "e35a08ca183c3161"
ai_translated: true
source_hash: "e35a08ca183c3161"
---
Cada gráfico de precios en DeepCharts tiene una fila de botones de opción en su barra inferior: **OF-VP**, **OF-B/A**, **D-VP**, **D-DP**, **D-VL**, **W-VP**, **W-DP** y **C-VP**. Un clic aplica al gráfico un diseño de flujo de órdenes completo y configurado profesionalmente, sin necesidad de configurar indicadores.

Este artículo explica qué carga cada preajuste y en qué se diferencia de las plantillas que usted guarda por su cuenta.

## Qué es

Los botones de plantilla rápida son preajustes integrados de un solo clic de los indicadores propios de DeepCharts, **Deep Print** y **Deep Profile**, con configuraciones predefinidas, para que no tenga que configurar lo básico usted mismo. Responden a la pregunta "¿cómo consigo un footprint o un perfil de volumen en mi gráfico ahora mismo?".

No son editables por el usuario. Si quiere una versión modificada de uno de estos diseños, añada usted mismo el indicador subyacente ([[deep-print]] o [[deep-profile]]), configúrelo y guarde su propia plantilla; consulte [[templates-workspaces]].

El botón **Templates** situado junto a los botones de opción es una función distinta: es un atajo de clic derecho → **Template → Load** y abre el selector de archivos **Local / Cloud / Shared** para sus propias plantillas guardadas.

[SCREENSHOT: Barra inferior de un gráfico de precios mostrando el botón Templates seguido de los botones de opción OF-VP, OF-B/A, D-VP, D-DP, D-VL, W-VP, W-DP y C-VP, con el botón DOM Trading y el conmutador Trading panel en el extremo derecho | dc-es-quick-chart-templates-01.png]

## Cuándo usarlo

- Quiere una vista footprint (de flujo de órdenes) de cada vela sin configurar Deep Print desde cero.
- Quiere el perfil de volumen o de delta del día o de la semana con un clic.
- Está evaluando qué diseño de flujo de órdenes se adapta a su trading antes de comprometerse con una plantilla personalizada.
- Está siguiendo un vídeo educativo que parte de uno de estos preajustes.

## Inicio rápido

1. Abra un gráfico de precios; consulte [[first-chart]].
2. Mire la barra inferior del gráfico y haga clic en **OF-VP**.
3. Espere a que el gráfico se redibuje: cada vela muestra ahora su propio perfil de volumen (Deep Print en estilo de perfil).

[SCREENSHOT: Gráfico de precios inmediatamente después de hacer clic en OF-VP, con el botón OF-VP seleccionado en la barra inferior y cada vela renderizada como un perfil de volumen por barra | dc-es-quick-chart-templates-02.png]

4. Recorra los demás botones para comparar diseños y quédese con el que encaje con su flujo de trabajo.

> **Nota:** [CONFIRM: whether selecting a quick-template radio replaces the chart's existing indicators or layers on top of them, and how to return the chart to its previous state afterwards]

## Cómo leerlo

Cada preajuste es una vista de los mismos datos de flujo de órdenes subyacentes con una agregación distinta:

| Preajuste | Qué carga | Basado en |
|---|---|---|
| **OF-VP** | Deep Print en estilo de perfil: cada vela muestra su propio perfil de volumen | [[deep-print]] |
| **OF-B/A** | Deep Print en estilo de columnas Bid/Ask, con impresiones de desequilibrio en negrita e intensidad de color | [[deep-print]] |
| **D-VP** | Perfil de volumen diario | [[deep-profile]] |
| **D-DP** | Perfil de delta diario | [[deep-profile]] |
| **D-VL** | VWAP diario con 3 bandas de desviación estándar por encima y por debajo | [[deep-profile]] |
| **W-VP** | Perfil de volumen semanal | [[deep-profile]] |
| **W-DP** | Perfil de delta semanal | [[deep-profile]] |
| **C-VP** | Perfil compuesto de todos los datos cargados en el gráfico | [[deep-profile]] |

Los preajustes **OF-** convierten cada vela en una vista de flujo de órdenes por barra: pruebe el footprint de abajo: pase el cursor sobre las celdas bid×ask y ajuste el ratio de desequilibrio para ver qué resalta en negrita OF-B/A.

[WIDGET: footprint-lab]

Indicaciones de lectura:

- Los preajustes **OF-** son vistas de flujo de órdenes por barra. Empiece por [[reading-a-footprint]] para interpretar las columnas bid/ask y las impresiones de desequilibrio, y por [[orderflow-101]] para los conceptos subyacentes.
- Los preajustes **D-** y **W-** agregan un día o una semana por perfil. El POC, el área de valor y los nodos de alto/bajo volumen se explican en [[understanding-volume-profile]].
- **D-VL** es la excepción: en lugar de un perfil, traza el VWAP diario con tres bandas de desviación estándar a cada lado; consulte [[understanding-vwap]] para saber cómo usan los operadores esas bandas.
- **C-VP** construye un único perfil con todo lo cargado actualmente en el gráfico, así que su forma cambia si cambia cuánta historia carga el gráfico.

Practique la lectura de los preajustes de perfil con el perfil en vivo de abajo: arrastre el Value Area % y pase el cursor sobre las filas para ver cómo funcionan el POC, el VAH y el VAL en D-VP, W-VP y C-VP.

[WIDGET: volume-profile-lab]

## Referencia de configuración

Los preajustes en sí no exponen configuraciones: son configuraciones fijas. La barra inferior contiene:

| Control | Qué hace |
|---|---|
| Botón **Templates** | Abre el selector de archivos de plantillas (Local / Cloud / Shared): atajo de clic derecho → **Template → Load**. Consulte [[templates-workspaces]]. |
| Botones **OF-VP** ... **C-VP** | Aplican el preajuste integrado correspondiente (tabla anterior). No editables por el usuario. |
| Botón **DOM Trading** | Cambia el gráfico a la escalera de trading con clics sobre el gráfico; consulte [[dom-trading-chart]]. |
| Conmutador **Trading panel** | Muestra u oculta el panel de trading del gráfico; consulte [[trading-panel-reference]]. |

Para ajustar cualquier cosa que muestre un preajuste (agrupamiento de ticks, umbrales de desequilibrio, colores), abra la configuración propia del indicador desde el gestor de indicadores del gráfico y configure directamente [[deep-print]] o [[deep-profile]].

## Consejos y errores comunes

- **Intentar editar un preajuste.** Los botones son fijos. Recree el diseño con su propia configuración de Deep Print / Deep Profile y guárdelo como plantilla; luego cárguelo desde el botón **Templates**.
- **Confundir los preajustes con las plantillas guardadas.** Botones de opción = integrados y fijos; botón **Templates** = sus propios archivos más la biblioteca **Shared** de solo lectura del equipo.
- **Esperar que C-VP coincida con el compuesto de otro operador.** C-VP perfila todos los datos cargados en *su* gráfico; dos gráficos que cargan cantidades distintas de historia producen compuestos distintos.
- **Juzgar un preajuste con una fuente retrasada.** Las impresiones de desequilibrio y el coloreado por delta son más significativos con una fuente en vivo; en la fuente gratuita retrasada los datos van 15 minutos por detrás; consulte [[free-delayed-data-feed]].

## Artículos relacionados

- [[templates-workspaces]]
- [[deep-print]]
- [[deep-profile]]
- [[understanding-volume-profile]]
- [[understanding-vwap]]
- [[reading-a-footprint]]