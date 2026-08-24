---
title: "Solución: problemas de la base de datos"
slug: "database-problems"
category: "Data & Database"
subcategory: ""
type: "troubleshooting"
difficulty: "intermediate"
time: "15 min to complete"
description: "Resuelva datos corruptos de la base de datos de DeepCharts: desde eliminar el historial dañado de un símbolo hasta borrar toda la carpeta de la base de datos, más comprobaciones de suscripción y del runtime."
keywords: ["problemas de la base de datos", "base de datos corrupta", "db corrupta", "datos corruptos", "precios incorrectos en el gráfico", "gráfico atascado cargando", "eliminar carpeta de la base de datos", "sin datos en tiempo real", "datos no disponibles", "visual c++"]
source_hash: "22cb96122a3a4e15"
ai_translated: true
source_hash: "22cb96122a3a4e15"
---
DeepCharts guarda todo el historial de mercado descargado en una base de datos local. Cuando parte de ella se corrompe, los gráficos empiezan a comportarse de formas que parecen problemas de la fuente de datos pero no lo son: precios incorrectos o ilegibles, huecos, gráficos que se cuelgan mientras cargan. Este artículo recorre las soluciones del lado de la base de datos, de la menos destructiva a la más destructiva.

## Síntoma

Uno o más de los siguientes, mientras su fuente de datos en sí se conecta con normalidad:

- Los gráficos muestran precios incorrectos, ilegibles u obsoletos.
- Los gráficos se cuelgan o tardan mucho mientras cargan el historial.
- Aparecen huecos en el historial de precios que el gráfico de su bróker no muestra.
- Aparecen errores que mencionan la base de datos o los archivos de datos al abrir gráficos.

No debe confundirse con:

- Una fuente de datos que no se conecta en absoluto; consulte [[fix-unable-to-establish-connection]].
- Una fuente conectada con un gráfico que simplemente no marca ticks; consulte primero [[feed-connected-chart-not-moving]].
- Un error "Could not find a part of the path"; consulte [[fix-could-not-find-path]].

## Causa más probable

Historial almacenado localmente corrupto para uno o más símbolos: la base de datos en sí está bien, pero un tramo de los datos de un símbolo está dañado y necesita eliminarse y volver a descargarse.

## Solución rápida

Elimine el rango corrupto desde la aplicación y deje que DeepCharts lo vuelva a descargar:

1. Desconecte la fuente de datos y cierre todos los espacios de trabajo.
2. Vaya a **Options → Delete Data**.
3. En el panel **Delete Data**, establezca la fecha en un punto anterior a la aparición del error: se recomiendan 15 días o más hacia atrás.
4. Seleccione los tipos de datos **Tick and Minute**.
5. Elija el símbolo (o símbolos) con el historial corrupto.

[SCREENSHOT: El panel Delete Data con la fecha establecida 15+ días atrás, Tick and Minute seleccionados y un símbolo afectado elegido | dc-es-database-problems-01.png]

6. Haga clic en **Delete** y espere a que termine.
7. Cierre la plataforma, espere 30 segundos y luego reinicie DeepCharts.
8. Vuelva a conectarse y abra el gráfico: los datos frescos se descargan automáticamente.

Para la guía completa de este procedimiento (incluida la alternativa manual), consulte [[delete-market-data]].

## Si eso no funcionó

### Causa: toda la base de datos está corrupta

Si los problemas afectan a muchos símbolos o persisten tras eliminaciones dirigidas, borre toda la carpeta de la base de datos para que DeepCharts la reconstruya desde cero:

1. Vaya a **Options → Settings → Various** y copie la ruta de **Database Folder**.

[SCREENSHOT: El diálogo Settings en la pestaña Various con la ruta de Database Folder resaltada | dc-es-database-problems-02.png]

2. Desconecte la fuente de datos, cierre todos los espacios de trabajo y salga de DeepCharts por completo.
3. Abra el Explorador de Windows y pegue la ruta copiada en la barra de direcciones.
4. Elimine la carpeta **Database**.
5. Reinicie DeepCharts.

> **Advertencia:** Esto elimina TODO el historial de mercado descargado de todos los símbolos. DeepCharts vuelve a descargar los datos a medida que abre gráficos, pero reconstruir un historial de tick profundo lleva tiempo. Use esto solo después de que la eliminación dirigida haya fallado. Sus credenciales de cuenta y suscripciones no se ven afectadas.

### Causa: falta la suscripción al mercado (sin datos en tiempo real o datos no disponibles)

Si el problema es la falta de datos en vivo y no un historial corrupto, compruebe la asignación de símbolo a fuente de datos:

1. Conecte la fuente de datos y cierre todos los espacios de trabajo.
2. Vaya a **Options → Symbol Manage**.
3. Verifique que los mercados correctos estén añadidos y asociados al perfil de conexión de fuente de datos correcto.
4. Si un mercado está asignado a la fuente equivocada, haga clic con el botón derecho en la columna de la fuente de datos para reasociarlo.
5. Haga clic en **Select** para guardar los cambios.
6. Vuelva a conectar la fuente de datos y abra un nuevo gráfico.

Puede ensayar la corrección de la asignación en la maqueta siguiente: haga clic en el icono de eslabón de cadena para alternar a qué fuente de datos está asignado un mercado.

[WIDGET: symbol-manage-mock]

Consulte [[symbol-manage]] para la referencia completa de la ventana, y [[symbol-subscription-issue]] si se muestra un error de suscripción.

### Causa: falta el runtime de Visual C++ (conexión de la fuente de datos fallida)

Si las comprobaciones de la base de datos pasan pero la propia conexión de la fuente de datos sigue fallando, un runtime del sistema ausente puede ser el culpable:

1. Cierre DeepCharts por completo.
2. Descargue e instale Visual C++ (el Microsoft Visual C++ Redistributable).
3. Reinicie DeepCharts y vuelva a conectar la fuente de datos.

## Sigue atascado

Genere un [[diagnostic-report]] para que el soporte pueda ver sus registros y configuración, y luego contáctenos a través de los canales de [[get-help]].

## Prevenga esto

- Ejecute [[database-optimization|Migrate / Compress]] con regularidad: una base de datos compacta es menos propensa a problemas y mucho más rápida.
- Use la herramienta [[delete-market-data|Delete Data]] de la aplicación en lugar de eliminar archivos manualmente, y reinicie siempre DeepCharts tras cualquier mantenimiento manual a nivel de archivos.
- Nunca apague la computadora mientras la plataforma está escribiendo datos o comprimiendo la base de datos.

## Artículos relacionados

- [[delete-market-data]]
- [[download-data]]
- [[database-optimization]]
- [[fix-could-not-find-path]]
- [[symbol-manage]]
- [[feed-connected-chart-not-moving]]