---
title: "Solución: la aplicación se cierra al guardar la configuración de la fuente"
slug: "app-crashes-saving-feed"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "Solucione los cierres inesperados de DeepCharts al hacer clic en Save en Feed Settings: permisos, idioma de Windows o archivos de configuración dañados."
keywords: ["cierre al guardar", "la aplicación se cierra al guardar la configuración de la fuente", "fallo en feed settings", "config.settings", "connProp.settings", "DPC_Log", "DeepCharts se cierra al guardar"]
source_hash: "9272d8d542ee0829"
ai_translated: true
source_hash: "9272d8d542ee0829"
---
Usted rellena los datos de su fuente, hace clic en **Save** (Guardar) en **Feed Settings** (Configuración de fuente), y DeepCharts se cierra inesperadamente. Hay tres causas conocidas: falta de permisos de administrador, un idioma de sistema de Windows distinto del inglés y archivos de configuración dañados. Revíselas en ese orden; cada solución es más laboriosa que la anterior.

## Síntoma

- DeepCharts se cierra inesperadamente en el momento en que hace clic en **Save** en **Feed Settings**.
- El cierre puede ocurrir cada vez o solo al guardar una conexión específica.

La causa exacta suele ser visible en el archivo de registro más reciente de la aplicación: busque el archivo creado más recientemente que siga el patrón de nombre `DPC_Log_Date.txt`. [CONFIRM: exact folder where DPC_Log files are stored]

Esta es la ventana donde ocurre el cierre: la maqueta interactiva de abajo muestra los mismos campos de Feed Settings que estaba rellenando antes de hacer clic en **Save**.

[WIDGET: feed-navigator]

## Causa más probable

DeepCharts necesita permiso para leer y escribir sus archivos de configuración (como `config.settings`) al guardar una fuente. Sin privilegios de administrador, el guardado puede cerrar la aplicación.

## Solución rápida

Ejecute DeepCharts como administrador:

1. Cierre DeepCharts por completo.
2. Localice `DeepChart.exe` en su sistema.
3. Haga clic derecho sobre él y seleccione **Run as administrator** (Ejecutar como administrador).

[SCREENSHOT: Menú contextual del Explorador de Windows sobre DeepChart.exe con "Run as administrator" resaltado | dc-es-app-crashes-saving-feed-01.png]

4. Abra **Feed Settings** de nuevo y haga clic en **Save**.

> **Consejo:** Ejecutar DeepCharts como administrador es recomendable en general, especialmente durante la configuración inicial, para que la aplicación siempre pueda escribir sus archivos de configuración.

## Si eso no funcionó

### Causa: el idioma del sistema de Windows no es inglés

Un idioma de sistema de Windows distinto del inglés puede impedir que DeepCharts lea o escriba correctamente los valores de configuración durante el guardado.

1. Cambie el idioma de visualización y del sistema de Windows a **English** (Windows Settings → Time & Language → Language).
2. Reinicie su PC.
3. Inicie DeepCharts e intente guardar de nuevo la configuración de la fuente.

### Causa: archivos de configuración dañados

Si `config.settings` o `connProp.settings` están dañados, la aplicación se cierra cada vez que intenta guardarlos o actualizarlos. La solución es eliminar la configuración almacenada para que DeepCharts la recree.

> **Advertencia:** Eliminar la carpeta AppData restablece su configuración local. Después tendrá que volver a configurar su fuente de datos: tenga a mano sus credenciales y consulte [[connect-data-feed]].

1. Abra el Explorador de archivos y vaya a **Local Disk (C:) → Users → [su carpeta de usuario]**.
2. Habilite los archivos ocultos: **View → Show → Hidden items**.

[SCREENSHOT: Menú View del Explorador de archivos abierto con Show > Hidden items marcado, en la carpeta del perfil de usuario | dc-es-app-crashes-saving-feed-02.png]

3. Abra la ubicación **AppData** y elimine la carpeta de la aplicación DeepCharts. [CONFIRM: exact AppData subpath (Local or Roaming) and exact folder name]

[SCREENSHOT: Carpeta AppData en el Explorador de archivos con la carpeta de la aplicación DeepCharts seleccionada antes de eliminarla | dc-es-app-crashes-saving-feed-03.png]

4. Vuelva a iniciar DeepCharts como administrador y configure de nuevo la configuración de su fuente.

> **Nota:** Evite forzar el cierre de la aplicación mientras se está guardando la configuración: una escritura interrumpida es una de las formas en que estos archivos se dañan en primer lugar.

## Si sigue atascado

Revise el archivo `DPC_Log_Date.txt` más reciente para obtener información detallada del cierre; si no puede interpretarlo, genere un [[diagnostic-report]] y contacte con soporte a través de [[get-help]], adjuntando el registro.

## Cómo prevenirlo

- Ejecute DeepCharts como administrador, especialmente durante la configuración inicial.
- Nunca fuerce el cierre de la aplicación mientras está guardando la configuración.
- Siga [[connect-data-feed]] al configurar fuentes para que cada campo se guarde en una sola pasada.

## Artículos relacionados

- [[connect-data-feed]]
- [[manage-feed-connections]]
- [[fix-system-cannot-find-file]]
- [[installation-problems]]
- [[get-help]]