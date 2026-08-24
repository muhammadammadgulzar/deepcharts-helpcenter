---
title: "Optimización de la base de datos"
slug: "database-optimization"
category: "Data & Database"
subcategory: ""
type: "howto"
difficulty: "advanced"
time: "15 min to complete"
description: "Ejecute la utilidad Migrate/Compress para reducir la base de datos local de DeepCharts hasta un 90% y acelerar el arranque y el rendimiento general."
keywords: ["optimización de la base de datos", "migrate compress", "comprimir base de datos", "reducir base de datos", "base de datos demasiado grande", "arranque lento", "espacio en disco", "optimizar base de datos", "rendimiento parallels mac"]
source_hash: "b25f8546c7f3d162"
ai_translated: true
source_hash: "b25f8546c7f3d162"
---
DeepCharts almacena el historial de ticks y barras en una base de datos local que crece con cada sesión. Con el tiempo, una base de datos grande ralentiza el arranque y consume espacio en disco. Al final de esta guía habrá ejecutado la utilidad **Migrate / Compress**, que puede reducir el tamaño de la base de datos hasta un 90% y acelerar notablemente la plataforma.

Las ganancias son mayores tras un uso prolongado y en máquinas donde el disco y la memoria escasean: las máquinas virtuales en particular (por ejemplo, Parallels en un Mac) son las que más se benefician. Junto con la reducción de tamaño obtiene tiempos de arranque más rápidos, menor uso de almacenamiento y un mejor rendimiento general de la plataforma.

## Antes de empezar

- [[manage-feed-connections|Sabe cómo desconectar sus fuentes de datos]]: todas las fuentes deben estar desconectadas antes de que la utilidad se ejecute.
- [[templates-workspaces|Su diseño de espacio de trabajo está guardado]]: cerrará el espacio de trabajo antes de empezar.
- Elija un momento tranquilo. El proceso puede tardar varios minutos (más para bases de datos muy grandes), así que ejecútelo después de su sesión de trading o en un fin de semana, nunca a mitad de sesión.
- En un portátil, conecte el adaptador de corriente antes de comenzar.

> **Advertencia:** No apague ni reinicie su computadora mientras Migrate / Compress se está ejecutando. Interrumpir el proceso puede corromper la base de datos. Los portátiles deben permanecer enchufados durante todo el proceso.

## Pasos

1. Cierre su espacio de trabajo usando el menú desplegable de espacios de trabajo en la parte superior de la barra principal (etiquetado con el nombre del espacio de trabajo actual, por ejemplo **Untitled**).

[SCREENSHOT: El menú desplegable de espacios de trabajo en la parte superior de la barra principal de DeepCharts expandido, mostrando la opción de cerrar el espacio de trabajo actual | dc-es-database-optimization-01.png]

2. Desconecte todas las fuentes de datos usando el menú desplegable **Feed** en la parte superior.

[SCREENSHOT: El menú desplegable Feed en la parte superior de la barra principal expandido con la opción de desconexión visible | dc-es-database-optimization-02.png]

3. Vaya a **Options → Database → Settings**.
4. Seleccione **Migrate / Compress**.

[SCREENSHOT: El diálogo Database Settings con la opción Migrate / Compress resaltada | dc-es-database-optimization-03.png]

5. Haga clic en **Yes** en el diálogo de confirmación. El propio diálogo advierte que la operación puede tardar un tiempo y sugiere ejecutarla después de la sesión o en un fin de semana.
6. Haga clic en **OK**.
7. Espere a que el proceso se complete. Cuente con varios minutos; una base de datos que ha crecido durante meses puede tardar más. No cierre la plataforma ni apague la máquina mientras se ejecuta.

[SCREENSHOT: El estado de progreso de Migrate / Compress mientras la utilidad se está ejecutando | dc-es-database-optimization-04.png]

## Verifique que funcionó

1. La utilidad termina sin errores y la plataforma vuelve a responder.
2. Para medir la ganancia, compare el tamaño de la carpeta de la base de datos antes y después: **Options → Settings → Various** muestra la ruta de **Database Folder** (carpeta de la base de datos); compruebe el tamaño de esa carpeta en el Explorador de archivos.
3. El arranque debería ser notablemente más rápido la próxima vez que inicie DeepCharts, especialmente en una máquina virtual.

> **Consejo:** Haga de Migrate / Compress parte de su mantenimiento rutinario, por ejemplo, los fines de semana tras semanas con muchos datos. La compresión regular mantiene la base de datos lo bastante pequeña como para que rara vez necesite soluciones más drásticas.

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| El proceso fue interrumpido (corte de energía, apagado forzado) y los gráficos ahora se comportan mal | Trate la base de datos como posiblemente corrupta; consulte [[database-problems]] |
| Un único símbolo muestra datos incorrectos tras la compresión | Elimine y vuelva a descargar los datos de ese símbolo; consulte [[delete-market-data]] y [[download-data]] |
| La plataforma sigue lenta tras comprimir | Recorra la lista de verificación de rendimiento en [[data-delayed-lagging]] |

## Artículos relacionados

- [[database-problems]]
- [[delete-market-data]]
- [[download-data]]
- [[data-delayed-lagging]]