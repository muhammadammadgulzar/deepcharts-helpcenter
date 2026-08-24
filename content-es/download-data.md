---
title: "Volver a descargar datos históricos (herramienta Download Data)"
slug: "download-data"
category: "Data & Database"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Use la herramienta Download Data para traer de nuevo datos históricos de un símbolo a su base de datos local, tras eliminar datos corruptos o para precargar historial."
keywords: ["descargar datos", "volver a descargar datos", "datos históricos", "backfill", "descargar desde volserver", "historial faltante", "redescargar", "descarga de datos de tick"]
source_hash: "2cdff48346bfd3e5"
ai_translated: true
source_hash: "2cdff48346bfd3e5"
---
La herramienta **Download Data** trae datos históricos de un símbolo a su base de datos local bajo demanda. La usará más a menudo como la segunda mitad del ciclo de reparación de datos corruptos: primero elimine los datos dañados con [[delete-market-data]] y luego vuelva a descargar una copia limpia; pero es igual de útil para precargar historial antes de una sesión de reproducción o para completar barras de un símbolo que hace tiempo que no grafica. Al final de esta guía habrá descargado datos históricos nuevos de un símbolo y habrá confirmado que llegaron.

## Antes de empezar

- [[connect-data-feed|Su fuente de datos está configurada y funcionando]].
- [[symbol-manage|El símbolo está suscrito en Symbol Manage]].
- [[delete-market-data|Ha eliminado primero el rango corrupto]]: solo es necesario si está reparando datos dañados y no simplemente rellenando historial.

## Pasos

1. Vaya a **Options → Download data**.

[SCREENSHOT: El menú Options abierto en la barra principal de DeepCharts con la entrada Download data resaltada | dc-es-download-data-01.png]

2. Seleccione el símbolo o los símbolos que quiera descargar.
3. Establezca la **start date** (fecha de inicio): hasta dónde debe llegar la descarga hacia atrás. Para una reparación de corrupción, empiece al menos tan atrás como el rango que eliminó; para preparar una reproducción, cubra el rango completo de sesiones que planea reproducir.
4. Establezca el **Data Type** (tipo de datos). **Tick** es la opción más granular y es con la que se construyen las herramientas de flujo de órdenes como los footprints y los perfiles. [CONFIRM: full list of Data Type options in the Download data window and the default selection]
5. Decida si habilitar el interruptor **Download From VolServer**. [CONFIRM: exact behavior of the Download From VolServer toggle — what source is used when it is on versus off, and the recommended setting for a standard repair]

[SCREENSHOT: La ventana Download data con un símbolo seleccionado, una fecha de inicio establecida, Data Type en Tick y el interruptor Download From VolServer visible | dc-es-download-data-02.png]

6. Inicie la descarga y deje que la ventana trabaje. Los rangos grandes de datos de tick pueden tardar, así que evite descargar meses de historial de tick en plena sesión si solo necesita unos días. [CONFIRM: exact label of the button that starts the download]
7. Para ver el progreso, abra **Options → Show Logs** y consulte la pestaña **Connection Logs**: muestra el progreso de la descarga de datos del gráfico mientras se ejecuta.

[SCREENSHOT: La ventana Show Logs en la pestaña Connection Logs mostrando entradas de progreso de la descarga de datos históricos | dc-es-download-data-03.png]

### Si está reparando datos corruptos

Ejecute el ciclo de reparación completo en este orden:

1. Elimine el rango corrupto con [[delete-market-data]] (primero el método dentro de la aplicación).
2. Vuelva a descargar el mismo rango con esta herramienta.
3. Reabra el gráfico y confirme que las barras dañadas han desaparecido.

### Si está precargando datos para una reproducción

Descargue las sesiones que planea reproducir antes de empezar y luego siga [[replay-data]]. La pestaña **Connection Logs** es la forma más fácil de confirmar que los datos de reproducción han terminado de cargarse.

## Verifique que funcionó

1. Abra un gráfico del símbolo y desplácese hacia atrás por el rango descargado.
2. Las barras históricas deben estar presentes y ser continuas en todo el rango que solicitó.
3. La pestaña **Connection Logs** de **Options → Show Logs** debe mostrar la actividad de descarga completándose sin errores.

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| Error "Could not find a part of the path" | Reinicie DeepCharts por completo: vea [[fix-could-not-find-path]] |
| El historial descargado sigue mostrando huecos | Vea [[gaps-in-price]]: algunos huecos son comportamiento real del mercado, no datos faltantes |
| Los datos no se descargan o los gráficos siguen vacíos | Compruebe la suscripción del símbolo en [[symbol-manage]] y la fuente en [[manage-feed-connections]] |
| La corrupción vuelve tras la reparación | Trátelo como un problema a nivel de base de datos: vea [[database-problems]] |

## Artículos relacionados

- [[delete-market-data]]
- [[database-problems]]
- [[database-optimization]]
- [[replay-data]]
- [[gaps-in-price]]
- [[fix-could-not-find-path]]