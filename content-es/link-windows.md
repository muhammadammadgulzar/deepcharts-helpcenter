---
title: "Vincular ventanas con grupos de color"
slug: "link-windows"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "5 min to complete"
description: "Una gráficos en un grupo de vínculo por color para que cambiar el símbolo en un gráfico lo cambie en todos los gráficos vinculados a la vez."
keywords: ["vincular gráficos", "grupos de color", "icono de vínculo", "sincronizar símbolo", "ventanas vinculadas", "cambiar símbolo en todos los gráficos", "vínculo de gráfico", "Link Trading Symbol"]
source_hash: "f5cd91ade79a4361"
ai_translated: true
source_hash: "f5cd91ade79a4361"
---
Al final tendrá dos o más gráficos unidos en un grupo de vínculo por color, de modo que cambiar el símbolo en un gráfico (por ejemplo NQ → ES) lo cambia en todos ellos con una sola acción.

Esta es la forma más rápida de manejar un espacio de trabajo multi-marco temporal: un gráfico de 1 minuto, uno de 5 minutos, uno de 15 minutos, todos siguiendo el mismo instrumento, cada uno conservando su propio marco temporal y su configuración.

## Antes de empezar

- Al menos dos gráficos de precios abiertos — [[first-chart]]
- Los instrumentos entre los que planea cambiar suscritos en Symbol Manage — [[symbol-manage]] (el selector de instrumentos solo muestra las bolsas a las que está suscrito)

## Pasos

1. En el primer gráfico, haga clic en el icono cuadrado de **vínculo** en la parte superior derecha de la barra de título de la ventana, a la izquierda del botón de minimizar.

[SCREENSHOT: Esquina superior derecha de una ventana de gráfico con el icono cuadrado de vínculo resaltado, a la izquierda de los botones minimizar/maximizar/cerrar | dc-es-link-windows-01.png]

2. El menú de vínculo se abre con estas opciones: **None link**, **Link 1** a **Link 8** (cada uno con su propio color: Link 1 rojo, Link 2 verde, Link 3 azul, Link 4 magenta, Link 5 morado, Link 6 amarillo, Link 7 cian, Link 8 rosa) y **$ Link Trading Symbol**. Seleccione **Link 1**.

[SCREENSHOT: Menú de vínculo del gráfico abierto mostrando None link, las ocho entradas Link de colores y la opción $ Link Trading Symbol, con Link 1 resaltado | dc-es-link-windows-02.png]

3. En el segundo gráfico, abra el mismo menú de vínculo y seleccione también **Link 1**. Ambos gráficos pertenecen ahora al mismo grupo de color.

4. Cambie el símbolo en cualquiera de los gráficos: haga clic en el menú desplegable de símbolo en la barra de título del gráfico y elija un nuevo instrumento en el diálogo **Select Instrument**. Puede ensayar todo el flujo en vivo a continuación: ponga ambos mini gráficos en el mismo color de vínculo, luego cambie el símbolo en uno y observe cómo el otro le sigue con un destello.

[WIDGET: link-groups-demo]

5. Confirme la selección: todos los gráficos que comparten ese color de vínculo cambian al nuevo símbolo.

> **Nota:** Los grupos de color sincronizan únicamente el símbolo. El marco temporal, los indicadores, los dibujos y cualquier otra configuración permanecen independientes por gráfico. Para reflejar dibujos entre gráficos, use clic derecho → **Drawing Tool From Other Chart** en su lugar: consulte [[drawing-tools]].

### Si desea desvincular un gráfico

Abra el menú de vínculo del gráfico y seleccione **None link**. El gráfico conserva su símbolo actual pero deja de seguir al grupo.

### Si desea varios grupos independientes

Use colores diferentes. Con ocho grupos de vínculo puede, por ejemplo, mantener tres gráficos siguiendo NQ en **Link 1** y dos gráficos siguiendo ES en **Link 2**: los grupos nunca se afectan entre sí.

### Si tiene curiosidad por "$ Link Trading Symbol"

La última entrada del menú de vínculo vincula un símbolo de trading en lugar de un grupo de color de gráfico. [CONFIRM: exact behavior of the "$ Link Trading Symbol" option — what it links and across which windows/panels]

[CONFIRM: whether non-chart windows (Advanced DOM, Advanced Time And Sales, Profile Chart) can join the same color link groups]

## Verifique que funcionó

Cambie el símbolo en cualquier gráfico del grupo. Todos los gráficos con el mismo color de vínculo se redibujan con el nuevo instrumento en unos instantes, mientras que el marco temporal y los indicadores de cada gráfico se mantienen exactamente como estaban.

## Si algo salió mal

- **El otro gráfico no cambió**: los dos gráficos no están en el mismo color. Abra el menú de vínculo en cada uno y confirme que está seleccionada la misma entrada **Link** (no **None link**).
- **El nuevo símbolo no aparece en el diálogo Select Instrument**: su bolsa no está suscrita. Corrija la suscripción en [[symbol-manage]] o consulte [[symbol-subscription-issue]].
- **Un gráfico vinculado no muestra datos con el nuevo símbolo**: el enrutamiento de la fuente para esa bolsa puede diferir. Compruebe la asignación de fuente de datos de la bolsa en [[symbol-manage]] y consulte [[feed-connected-chart-not-moving]].

## Artículos relacionados

- [[chart-window]]
- [[first-chart]]
- [[symbol-manage]]
- [[drawing-tools]]
- [[multi-monitor-windows]]
- [[templates-workspaces]]