---
title: "Solución: Could Not Find a Part of the Path"
slug: "fix-could-not-find-path"
category: "Data & Database"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Resuelva el error 'Could not find a part of the path' que aparece después de eliminar carpetas de base de datos o de símbolos mientras DeepCharts estaba en ejecución."
keywords: ["could not find a part of the path", "no se encuentra la ruta", "error de ruta", "AppData Local Deepchart Database", "error de ruta de archivo", "error de carpeta faltante", "error could not find"]
source_hash: "8defb060ecbcb430"
ai_translated: true
source_hash: "8defb060ecbcb430"
---
El error **"Could not find a part of the path"** — seguido de una ubicación como `C:\Users\...\AppData\Local\Deepchart\Database\...` — aparece cuando DeepCharts no puede localizar carpetas de datos necesarias dentro de su directorio de base de datos local. Casi siempre sigue a una eliminación manual de carpetas de base de datos o de símbolos, y la solución no suele ser más que un reinicio completo.

## Síntoma

- Aparece un diálogo de error al abrir un gráfico o cargar datos, con el texto "Could not find a part of the path" y una ruta de archivo que apunta al directorio de la base de datos local (por ejemplo bajo `AppData\Local\Deepchart\Database`).
- Normalmente aparece justo después de que usted (o una herramienta de limpieza) eliminara carpetas de base de datos o de símbolos mientras la plataforma seguía en ejecución, o tras eliminar carpetas sin reiniciar.

Es un problema del sistema de archivos local, no un error de la fuente de datos ni del servidor. No debe confundirse con [[fix-system-cannot-find-file|"The System Cannot Find the File Specified"]], que es un error distinto con causas distintas.

## Causa más probable

Se eliminaron manualmente carpetas de datos dentro del directorio de base de datos de DeepCharts, DeepCharts sigue haciendo referencia a rutas que ya no existen, y las carpetas nunca se regeneraron porque la plataforma no fue reiniciada.

## Solución rápida

Reinicie DeepCharts por completo para que regenere los directorios faltantes:

1. Cierre DeepCharts.
2. Verifique que ningún proceso de DeepCharts siga ejecutándose en segundo plano: abra el **Task Manager** (Administrador de tareas), busque DeepCharts en la lista de procesos y, si está allí, haga clic derecho sobre él y elija **End Task** (Finalizar tarea).

[SCREENSHOT: Lista de procesos del Administrador de tareas de Windows con el proceso de DeepCharts seleccionado y la opción End Task del clic derecho visible | dc-es-fix-could-not-find-path-01.png]

3. Vuelva a abrir DeepCharts — regenera automáticamente los directorios necesarios al iniciarse.
4. Cargue de nuevo el gráfico afectado. El error debería estar resuelto.

## Si eso no funcionó

### Causa: los datos del símbolo faltan o están corruptos más allá de la estructura de carpetas

El reinicio reconstruyó las carpetas, pero los datos en su interior están incompletos o dañados. Elimine los datos del símbolo correctamente con la herramienta de la aplicación y vuelva a descargarlos:

1. Siga [[delete-market-data]] (Método 1, la herramienta Delete Data de la aplicación).
2. Si el historial no se rellena por sí solo, descárguelo manualmente con [[download-data]].

### Causa: corrupción más amplia de la base de datos

Si los errores de ruta siguen repitiéndose en varios símbolos, trátelo como un problema a nivel de base de datos y siga [[database-problems]] — hasta llegar, si es necesario, a reconstruir la carpeta de la base de datos.

## Si sigue atascado

Genere un [[diagnostic-report]] para que soporte pueda ver exactamente qué ruta está fallando, y luego contacte al equipo mediante [[get-help]].

## Cómo prevenirlo

- Cierre DeepCharts antes de hacer cualquier cambio manual en las carpetas de la base de datos.
- Prefiera la herramienta [[delete-market-data|Delete Data de la aplicación]] en lugar de la eliminación manual de carpetas.
- Reinicie siempre DeepCharts después de cualquier mantenimiento a nivel de archivos.
- Nunca elimine carpetas de datos mientras un gráfico se está cargando activamente.

## Artículos relacionados

- [[delete-market-data]]
- [[download-data]]
- [[database-problems]]
- [[fix-system-cannot-find-file]]
- [[get-help]]