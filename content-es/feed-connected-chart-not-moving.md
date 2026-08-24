---
title: "Solución: fuente en vivo conectada pero el gráfico no se mueve"
slug: "feed-connected-chart-not-moving"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Qué revisar cuando su fuente de datos aparece como conectada pero el gráfico de precios está congelado, muestra datos antiguos o no muestra datos."
keywords: ["gráfico no se mueve", "gráfico congelado", "precio no se actualiza", "sin datos en el gráfico", "punto verde pero el gráfico no carga", "gráfico atascado", "datos de gráfico obsoletos", "el gráfico muestra datos de ayer"]
source_hash: "b74681eea9e52a9e"
ai_translated: true
source_hash: "b74681eea9e52a9e"
---
Su punto de conexión está verde, así que la fuente de datos en sí funciona — pero el gráfico no se actualiza. En la mayoría de los casos esto no es en absoluto un problema de la fuente. Recorra las comprobaciones de abajo en orden, de la menos a la más invasiva.

## Síntoma

- El punto de conexión está verde (la fuente aparece como conectada).
- Un gráfico se abre pero el precio no se actualiza, **o** el gráfico muestra "no data", **o** el gráfico muestra datos antiguos de una sesión anterior y parece congelado.

[SCREENSHOT: Barra de herramientas principal de DeepCharts con el punto de conexión en verde, junto a un gráfico de precios abierto visiblemente obsoleto (resaltada la marca de tiempo de la última vela, de una sesión anterior) | dc-es-feed-connected-chart-not-moving-01.png]

No debe confundirse con:

- [[fix-unable-to-establish-connection]] — la fuente no llega a conectarse (el punto nunca se pone verde).
- [[connection-lost-opening-chart]] — la conexión se cae en el momento de abrir un gráfico.
- [[data-delayed-lagging]] — el gráfico se mueve, pero notablemente por detrás del mercado.

## Causa más probable

La bolsa de su símbolo no está enrutada a la fuente conectada en Symbol Manage, por lo que DeepCharts carga silenciosamente los datos en caché de su disco local — lo cual se ve exactamente igual que un gráfico en vivo congelado.

## Solución rápida

1. Primero, confirme que el mercado está realmente abierto — que no es fin de semana ni festivo de mercado. Los precios no se actualizan cuando el mercado está cerrado.
2. En DeepCharts, abra **Options → Symbol Manage**.
3. Busque la fila de la bolsa de su símbolo (por ejemplo CME para NQ/ES/MNQ/MES, COMEX para GC/SI, NYMEX para CL/NG).
4. Revise la columna **Data Feed** de esa fila. Debe mostrar la fuente a la que está conectado actualmente. Pruébelo en la maqueta interactiva de abajo — haga clic en el icono de eslabón de cadena de una fila para cambiar la fuente asignada.

[WIDGET: symbol-manage-mock]

5. Si el valor es incorrecto o está en blanco, haga clic en el **icono de enlace** de esa fila (junto al icono de eliminar) y elija la fuente correcta entre sus fuentes conectadas.

[SCREENSHOT: El diálogo de selección de fuente que se abre desde el icono de enlace en Symbol Manage, con la fuente conectada resaltada antes de confirmar | dc-es-feed-connected-chart-not-moving-02.png]

6. Espere unos segundos — un gráfico ya abierto a veces se actualiza por sí solo una vez corregido el enrutamiento. Si no lo hace, cierre el gráfico y vuelva a abrirlo mediante **New → Price Chart** y elija el símbolo de nuevo.

> **Consejo:** Si ejecuta varias fuentes a la vez (por ejemplo CME de un proveedor y COMEX de otro), utilice el icono de enlace para enrutar cada bolsa a su propia fuente.

## Si eso no funcionó

### Causa: la bolsa nunca fue suscrita

Si la tabla de Symbol Manage está vacía, haga clic en el botón **Export Mode** — se abrirá una nueva ventana que debería contener las bolsas en una tabla. Establezca el **Data Feed** por bolsa con el icono de enlace, como arriba. Si la ventana de Export Mode también está vacía, haga clic en el botón **Subscribe**, seleccione su **Data Feed** y la(s) bolsa(s) en las que quiere operar, y luego haga clic en **Select**.

[SCREENSHOT: El diálogo Subscribe al que se llega desde Export Mode, con una fuente de datos elegida y una bolsa seleccionada, con el botón Select visible | dc-es-feed-connected-chart-not-moving-03.png]

El recorrido completo de los tres escenarios está en [[symbol-manage]].

### Causa: fallo puntual en la primera conexión de la fuente

Si es la primera vez que conecta esta fuente, cierre DeepCharts por completo, reinicie la aplicación y vuelva a conectar la fuente de datos.

### Causa: datos locales corruptos para el símbolo

DeepCharts almacena en caché los datos de gráficos en disco, y una caché corrupta puede congelar un gráfico. Elimine los datos recientes para que la plataforma los vuelva a descargar:

1. Cierre todos los gráficos y espacios de trabajo, y desconéctese de todas las fuentes de datos.
2. Haga clic en **Select Symbol** y elija el símbolo afectado.
3. Seleccione un rango de 2–3 días hacia atrás desde hoy y haga clic en **Delete**.
4. Vuelva a abrir el gráfico — DeepCharts descarga datos nuevos automáticamente.

Si el problema sobrevive a la eliminación desde la aplicación, elimine manualmente la carpeta de datos del símbolo como último recurso: copie la ruta de la carpeta de la base de datos desde DeepCharts, péguela en la barra de direcciones del Explorador de archivos y elimine únicamente la carpeta del símbolo afectado. Luego reinicie DeepCharts. Ambos métodos están cubiertos paso a paso en [[delete-market-data]].

> **Advertencia:** Elimine únicamente la carpeta del símbolo afectado — no elimine otras carpetas de símbolos a menos que tengan el mismo problema. Eliminar datos de mercado no afecta su cuenta ni sus suscripciones; la plataforma recrea las carpetas y descarga datos nuevos.

> **Nota:** Si el gráfico sigue sin moverse, es posible que la bolsa no esté incluida en su suscripción de datos de mercado — algunos acuerdos solo cubren ciertas bolsas. Consulte con su proveedor de datos, bróker o empresa prop.

## Si sigue atascado

Anote el símbolo y el nombre de la fuente, y tome una captura de pantalla de la fila de Symbol Manage de esa bolsa. Luego genere un [[diagnostic-report]] y contacte al equipo a través de [[get-help]].

## Cómo prevenirlo

Configure el enrutamiento de bolsas inmediatamente después de conectar cualquier fuente — [[symbol-manage]] cubre la suscripción de bolsas y su asignación a fuentes, y [[connect-data-feed]] cubre la conexión en sí.

## Artículos relacionados

- [[symbol-manage]]
- [[connect-data-feed]]
- [[delete-market-data]]
- [[data-delayed-lagging]]
- [[connection-lost-opening-chart]]
- [[gaps-in-price]]