---
title: "Cómo cambiar la disposición de los indicadores"
slug: "indicator-layout"
category: "Indicators & Analysis"
subcategory: "Indicator Basics"
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Mueva un indicador a otra área del gráfico o fusione dos indicadores en el mismo panel."
keywords: ["disposición de indicadores", "área del gráfico", "fusionar indicadores", "panel de indicador", "mover indicador", "combinar indicadores", "indicador sobre el gráfico de precio"]
source_hash: "e902a187a56b3f8f"
ai_translated: true
source_hash: "e902a187a56b3f8f"
---
Al final de esta guía tendrá cada indicador exactamente donde lo quiere: en su propio panel debajo del gráfico de precio, o fusionado en la misma área que otro indicador.

La ventana de gráfico de DeepCharts se divide en secciones según el número de indicadores activos. Por ejemplo, con ADX y MACD añadidos, la ventana muestra tres áreas de gráfico distintas: una para el precio, una para ADX y una para MACD. Cada área tiene un número, y cada indicador está asignado a una de ellas.

## Antes de empezar

- Un gráfico abierto con datos cargados: consulte [[first-chart]]
- Al menos un indicador añadido al gráfico
- Contexto opcional sobre la propia ventana de gráfico: [[chart-window]]

## Pasos

1. Añada los indicadores que quiera organizar. El gráfico se divide automáticamente en un área para el precio más una por cada indicador de panel inferior.

   [SCREENSHOT: Ventana de gráfico con ADX y MACD activos, mostrando tres áreas de gráfico apiladas: el precio arriba, ADX en el medio y MACD abajo | indicator-layout-three-areas.png]

2. Haga clic en el botón **Indicators** del gráfico. Un menú desplegable enumera cada indicador activo junto con el área de gráfico que ocupa actualmente: utilícelo para ver la disposición actual de un vistazo.

   [SCREENSHOT: El menú desplegable del botón Indicators abierto, enumerando los indicadores activos con el número de área de gráfico mostrado junto a cada uno | indicators-dropdown-areas.png]

3. Abra la configuración del indicador que quiere mover.

4. Seleccione una asignación de área de gráfico distinta para él. [CONFIRM: exact label of the chart-area field in the indicator settings dialog]

   [SCREENSHOT: Un diálogo de configuración de indicador con el control de asignación de área de gráfico visible y un número de área distinto siendo seleccionado | indicator-settings-change-area.png]

5. Aplique el cambio. El gráfico se vuelve a dividir y el indicador se mueve a su nueva área.

### Si quiere dos indicadores en el mismo panel

Asigne a ambos indicadores el **mismo** número de área. Dos o más indicadores que compartan un número de área se dibujan juntos en ese panel. Un ejemplo común es mostrar el precio y una media móvil juntos en el área de gráfico 1, de modo que la media se dibuje directamente sobre las velas del precio.

[SCREENSHOT: Gráfico de precio con una media móvil fusionada en el área de gráfico 1, dibujada sobre las velas en lugar de en un panel separado | dc-es-indicator-layout-01.png]

### Si quiere devolver un indicador a su propio panel

Asígnele un número de área que ningún otro indicador esté usando. El gráfico añade una nueva sección para él.

## Verifique que funcionó

- El gráfico se reparticiona inmediatamente: el indicador ahora se dibuja en el área que usted le asignó.
- Haga clic de nuevo en el botón **Indicators**: el menú desplegable muestra el indicador con su nuevo número de área de gráfico.

## Si algo salió mal

- **Un indicador parece haber desaparecido después de fusionar.** Compruebe primero el menú desplegable **Indicators**: le dirá en qué área está realmente el indicador. Cuando dos indicadores con escalas de valores muy distintas comparten un panel, uno de ellos puede dibujarse como una línea casi plana; devolverlo a su propia área restaura su rango visible.
- **Su disposición desapareció tras reiniciar DeepCharts.** La plataforma no guarda automáticamente las disposiciones de gráfico. Guarde su organización como plantilla (un solo gráfico) o espacio de trabajo (pantalla completa): consulte [[templates-workspaces]].

> **Consejo:** Cuando su organización de indicadores esté lista, guárdela inmediatamente como plantilla o espacio de trabajo. Las disposiciones sin guardar se pierden al cerrar la aplicación.

## Artículos relacionados

- [[different-types-of-input]]
- [[chart-window]]
- [[templates-workspaces]]
- [[moving-average]]
- [[macd]]
- [[adx]]