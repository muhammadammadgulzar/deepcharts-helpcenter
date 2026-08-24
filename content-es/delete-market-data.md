---
title: "Eliminar datos de mercado (métodos en la aplicación y manual)"
slug: "delete-market-data"
category: "Data & Database"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Borre los datos de mercado locales corruptos de un símbolo para que DeepCharts los vuelva a descargar limpios, usando la herramienta recomendada Delete Data de la aplicación o, si falla, eliminando manualmente la carpeta del símbolo en la base de datos."
keywords: ["eliminar datos de mercado", "eliminar datos", "borrar datos", "datos corruptos", "gráfico congelado", "precios incorrectos", "huecos en el gráfico", "carpeta de base de datos", "volver a descargar datos", "eliminar datos de símbolo"]
source_hash: "c27cdc853f40ccdd"
ai_translated: true
source_hash: "c27cdc853f40ccdd"
---
Cuando el historial almacenado localmente de un símbolo se corrompe, el gráfico se comporta mal aunque su fuente de datos esté sana: los precios dejan de actualizarse, aparecen huecos o los valores se ven claramente incorrectos. Al final de esta guía habrá eliminado los datos dañados de ese símbolo y dejado que DeepCharts vuelva a descargar automáticamente una copia limpia.

Hay dos métodos. El **Método 1 (en la aplicación)** es el primer paso recomendado y resuelve la mayoría de los casos. El **Método 2 (eliminación manual de la carpeta)** es el recurso para corrupciones más profundas que sobreviven a la eliminación desde la aplicación.

## Antes de empezar

- [[connect-data-feed|Su fuente de datos está configurada]]: DeepCharts la necesita para volver a descargar los datos después.
- [[symbol-manage|El símbolo está suscrito en Symbol Manage]] para que puedan entrar datos nuevos.
- [[feed-connected-chart-not-moving|Ha confirmado que la propia fuente de datos está bien]]: si la conexión está rota, eliminar los datos no servirá de nada.

Use esta guía cuando:

- Un gráfico de precios no se actualiza aunque la fuente de datos está conectada.
- Aparecen huecos o precios incorrectos en el gráfico.
- El gráfico está congelado o no responde.
- Sospecha de una corrupción de datos menor en un símbolo concreto.

## Pasos

### Método 1: eliminar los datos en la aplicación (recomendado)

1. Cierre todos los gráficos y espacios de trabajo.
2. Desconecte todas las fuentes de datos.
3. Vaya a **Options → Delete Data**.

[SCREENSHOT: El menú Options abierto en la barra principal de DeepCharts con la entrada Delete Data resaltada | dc-es-delete-market-data-01.png]

4. En el panel **Delete Data**, haga clic en **Select Symbol** y elija el símbolo afectado.
5. Establezca el rango de fechas para que empiece **2–3 días antes de hoy**. Si la corrupción lleva visible más tiempo, retroceda más; para corrupciones persistentes o antiguas se recomiendan 15 días o más.
6. Si el panel ofrece opciones de tipo de datos, seleccione **Tick and Minute** para que se borren ambos conjuntos de datos.

[SCREENSHOT: El panel Delete Data con un símbolo seleccionado, la fecha establecida unos días atrás y los tipos de datos Tick and Minute seleccionados, con el botón Delete visible | dc-es-delete-market-data-02.png]

7. Haga clic en **Delete** y espere a que la operación termine.
8. Vuelva a abrir el gráfico. DeepCharts descarga automáticamente datos nuevos y el gráfico debería actualizarse con normalidad.

> **Nota:** El Método 1 no elimina toda su base de datos: solo los datos del símbolo seleccionado en el rango elegido. Es seguro usarlo con regularidad y no tiene ningún efecto sobre su cuenta ni sus suscripciones.

### Método 2: eliminar manualmente la carpeta del símbolo en la base de datos

Use este método **solo si el Método 1 falla**: el gráfico sigue estático tras la eliminación en la aplicación, ve errores recurrentes de datos o de ruta de archivo, o faltan archivos de datos o están corruptos.

1. En DeepCharts, vaya a **Options → Settings → Various** y copie la ruta de la **Database Folder** (carpeta de la base de datos).

[SCREENSHOT: El diálogo Settings en la pestaña Various con el campo de la ruta Database Folder resaltado | dc-es-delete-market-data-03.png]

2. Cierre DeepCharts por completo. Asegúrese de que ningún proceso de DeepCharts siga ejecutándose en segundo plano (compruebe el Task Manager): eliminar carpetas mientras la plataforma está en ejecución provoca errores de ruta de archivo.
3. Abra el **File Explorer** (Explorador de archivos) y pegue la ruta copiada en la barra de direcciones.
4. Localice la carpeta del símbolo afectado.

[SCREENSHOT: El File Explorer mostrando el contenido de la carpeta de la base de datos de DeepCharts con la carpeta de un símbolo seleccionada | dc-es-delete-market-data-04.png]

5. Elimine **solo la carpeta de ese símbolo**.

> **Advertencia:** Eliminar la carpeta de un símbolo borra de forma permanente el historial almacenado localmente de ese símbolo. DeepCharts vuelve a descargar automáticamente los datos actuales, pero no elimine las carpetas de otros símbolos a menos que sea necesario, y nunca elimine nada fuera de la carpeta de la base de datos.

6. Reinicie DeepCharts y abra el gráfico. La plataforma regenera la carpeta y recupera los datos actuales sin que usted tenga que hacer nada más.

> **Advertencia:** El reinicio es obligatorio. Si lo omite, DeepCharts sigue haciendo referencia a carpetas que ya no existen y verá el error tratado en [[fix-could-not-find-path]].

## Verifique que funcionó

1. Vuelva a conectar su fuente de datos y abra un gráfico del símbolo.
2. Las barras históricas deberían rellenarse de nuevo y el gráfico debería seguir los precios en vivo con normalidad.
3. Los huecos, las velas congeladas o los precios incorrectos que veía antes deberían haber desaparecido.

Ninguno de los dos métodos afecta a sus credenciales de cuenta ni a sus suscripciones de datos.

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| Error "Could not find a part of the path" tras la eliminación manual | Reinicie DeepCharts por completo; consulte [[fix-could-not-find-path]] |
| El gráfico sigue congelado tras eliminar y volver a descargar | Consulte [[feed-connected-chart-not-moving]] |
| Quedan huecos en el historial vuelto a descargar | Consulte [[gaps-in-price]]: el hueco puede ser real (rollover, cierre de sesión) y no corrupción |
| El historial no se volvió a descargar automáticamente | Actívelo manualmente con la herramienta Download Data; consulte [[download-data]] |
| Los problemas afectan a muchos símbolos o reaparecen constantemente | Trátelo como un problema a nivel de base de datos; consulte [[database-problems]] y considere [[database-optimization]] |

## Artículos relacionados

- [[download-data]]
- [[database-problems]]
- [[database-optimization]]
- [[fix-could-not-find-path]]
- [[gaps-in-price]]
- [[feed-connected-chart-not-moving]]