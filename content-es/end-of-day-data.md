---
title: "Conectar datos históricos (fin de día)"
slug: "end-of-day-data"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Configure la fuente de datos Historical para cargar datos de fin de día en sus gráficos."
keywords: ["fin de día", "EOD", "datos históricos", "fuente histórica", "datos de fin de día", "datos diarios", "sin fuente en vivo"]
source_hash: "cd7dd3cfe09311a7"
ai_translated: true
source_hash: "cd7dd3cfe09311a7"
---
Al terminar tendrá la fuente de datos **Historical** conectada y un gráfico mostrando datos de fin de día. Esta conexión carga datos históricos (de fin de día) en lugar de una transmisión en vivo, lo que la hace útil cuando quiere revisar la acción del precio pasada sin una suscripción de datos en vivo.

La configuración sigue el mismo patrón que cualquier otra fuente en DeepCharts: cree la conexión en **Feed Settings** y luego enrute una bolsa hacia ella en **Symbol Manage**.

## Antes de empezar

- DeepCharts instalado y activado — [[install-deepcharts]]
- Estar familiarizado con el flujo general de conexión ayuda, pero no es obligatorio — [[connect-data-feed]]

## Pasos

1. Inicie DeepCharts.

2. Haga clic en **Select Connection** → **Feed Settings**.

[SCREENSHOT: Barra principal de DeepCharts con el menú desplegable Select Connection abierto y Feed Settings resaltado | dc-es-end-of-day-data-01.png]

3. Haga clic en **Add Connection**.

4. En **Name**, introduzca el nombre de perfil que prefiera, por ejemplo "End of Day".

5. En **Feed Source**, seleccione **Historical**.

[SCREENSHOT: Diálogo de Feed Settings con el menú desplegable Feed Source abierto e Historical resaltado, con Name completado como "End of Day" | dc-es-end-of-day-data-02.png]

[CONFIRM: whether the Historical feed source requires any credentials or an active subscription, and which exchanges/symbols and how much history it provides]

6. Haga clic en **Save** y cierre la ventana de Feed Settings.

7. Abra **Options → Symbol Manage** y apunte una bolsa hacia su nuevo perfil — de una de estas dos formas:
   - busque la bolsa que quiere y cambie su **Data Feed** al nuevo perfil Historical (el icono de eslabón de cadena en la fila cambia la fuente), o
   - añada una nueva bolsa y establezca su fuente de datos en el perfil Historical.

   Consulte [[symbol-manage]] para el recorrido completo de cada estado de Symbol Manage, o pruebe la maqueta interactiva de abajo — haga clic en el icono de eslabón de cadena de una fila para alternar su fuente asignada.

[WIDGET: symbol-manage-mock]

8. Abra un nuevo gráfico en esa bolsa — cargará los datos históricos. Consulte [[first-chart]].

[SCREENSHOT: Un gráfico de precios mostrando datos históricos de fin de día cargados desde el perfil de fuente Historical | dc-es-end-of-day-data-03.png]

## Verifique que funcionó

Un gráfico recién abierto en la bolsa enrutada muestra datos de precios históricos. Como se trata de datos de fin de día, no espere actualizaciones intradía en vivo — el gráfico no se moverá en tiempo real.

> **Nota:** Si más adelante quiere datos en vivo en la misma bolsa, cambie su Data Feed de nuevo a una conexión en vivo en **Symbol Manage** — consulte [[manage-feed-connections]] para gestionar varios perfiles de fuente.

## Si algo salió mal

- **El gráfico no muestra datos** — la bolsa no está enrutada al perfil Historical. Vuelva a revisar la columna Data Feed en [[symbol-manage]].
- **El gráfico parece congelado** — comportamiento esperado para datos de fin de día; no se actualiza en vivo. Si necesita precios en vivo, conecte una fuente en vivo ([[connect-data-feed]]) o pruebe la opción gratuita en [[free-delayed-data-feed]].
- **Necesita más historial o le falta historial en una fuente en vivo** — consulte [[download-data]].

## Artículos relacionados

- [[connect-data-feed]]
- [[symbol-manage]]
- [[first-chart]]
- [[free-delayed-data-feed]]
- [[download-data]]
- [[manage-feed-connections]]