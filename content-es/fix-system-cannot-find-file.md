---
title: "Solución: The System Cannot Find the File Specified"
slug: "fix-system-cannot-find-file"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Solucione el error de conexión 'The system cannot find the file specified' causado por un Volumetrica Bridge ausente o bloqueado por el antivirus."
keywords: ["The system cannot find the file specified", "Connection Failed system cannot find", "Volumetrica Bridge", "VolumetricaBridge.exe", "McAfee cuarentena deepcharts", "falta el bridge", "el sistema no encuentra el archivo"]
source_hash: "99cdd4d6b4e4eb6e"
ai_translated: true
source_hash: "99cdd4d6b4e4eb6e"
---
Este error aparece cuando DeepCharts no puede localizar o iniciar el **Volumetrica Bridge**, un componente en segundo plano que la plataforma requiere para sus conexiones de fuentes de datos. Durante la instalación, DeepCharts crea automáticamente una carpeta `Volumetrica Bridge`, y cuando todo funciona correctamente verá el Volumetrica Bridge ejecutándose en segundo plano. Si este error aparece, el Bridge falta o está siendo bloqueado.

## Síntoma

Al conectar una fuente de datos, la conexión falla con:

**Connection Failed: The system cannot find the file specified**

[SCREENSHOT: El cuadro de diálogo de error de conexión mostrando el mensaje completo "Connection Failed: The system cannot find the file specified" | dc-es-fix-system-cannot-find-file-01.png]

No debe confundirse con:

- [[fix-could-not-find-path]]: un error de "ruta" diferente, relacionado con la base de datos local, no con el Bridge.
- [[fix-unable-to-establish-connection]]: un fallo a nivel de red en el que el Bridge se ejecuta pero no se puede alcanzar el servidor.

## Causa más probable

El Volumetrica Bridge falta o está bloqueado: o bien el instalador no logró crear la carpeta `Volumetrica Bridge`, o bien su antivirus (McAfee en particular) ha puesto en cuarentena `VolumetricaBridge.exe`.

> **Consejo:** Si usa McAfee u otro antivirus agresivo, revise primero su cuarentena (vea más abajo); de lo contrario, el antivirus puede volver a poner el Bridge en cuarentena justo después de reparar la instalación.

## Solución rápida

Repare la instalación para que el instalador vuelva a crear el Bridge faltante:

1. Cierre DeepCharts por completo.
2. Localice su instalador original de DeepCharts (`.exe`). Si ya no lo tiene, descárguelo de nuevo desde la fuente oficial; consulte [[install-deepcharts]].
3. Ejecute el instalador y elija la opción **Repair**.

[SCREENSHOT: La ventana del instalador de DeepCharts con la opción Repair visible y resaltada | dc-es-fix-system-cannot-find-file-02.png]

4. Deje que el proceso de reparación termine por completo.
5. Vuelva a abrir DeepCharts y reconecte la fuente de datos.

En la mayoría de los casos, el error se resuelve tras este paso.

## Si eso no funcionó

### Causa: McAfee puso en cuarentena VolumetricaBridge.exe

McAfee puede marcar incorrectamente `VolumetricaBridge.exe` y moverlo a cuarentena. Restáurelo y exclúyalo de futuros análisis:

1. Cierre DeepCharts por completo.
2. Abra McAfee Antivirus.
3. Vaya a **Menu → Quarantined Items** (elementos en cuarentena).
4. Busque `VolumetricaBridge.exe` en la lista y seleccione **Restore** (restaurar).

[SCREENSHOT: Pantalla de Quarantined Items de McAfee con VolumetricaBridge.exe en la lista y la acción Restore visible | dc-es-fix-system-cannot-find-file-03.png]

5. Añada el archivo a las exclusiones del análisis: vaya a **Menu → Real-Time Scanning → Add File**.
6. Navegue hasta `VolumetricaBridge.exe` y selecciónelo. [CONFIRM: default installation path of the Volumetrica Bridge folder]

[SCREENSHOT: Pantalla de exclusiones de Real-Time Scanning de McAfee después de añadir VolumetricaBridge.exe | dc-es-fix-system-cannot-find-file-04.png]

7. Cierre McAfee y vuelva a iniciar DeepCharts.

> **Nota:** Restaure y excluya únicamente archivos que reconozca. `VolumetricaBridge.exe` es un componente legítimo de DeepCharts.

### Causa: Otro antivirus o una política de seguridad está bloqueando el Bridge

Otros productos antivirus pueden poner en cuarentena el Bridge de la misma manera. Revise la cuarentena de su producto, restaure `VolumetricaBridge.exe` y añádalo a la lista de exclusiones. Si el bloqueo proviene de una política de control de aplicaciones de Windows, consulte [[application-control-policy]].

## Si sigue atascado

Genere un [[diagnostic-report]] para que soporte pueda ver si el Bridge está presente y en ejecución, y luego contacte al equipo mediante [[get-help]].

## Cómo prevenirlo

- Instale DeepCharts únicamente con el instalador oficial; consulte [[install-deepcharts]].
- No fuerce el cierre del instalador durante la configuración; una instalación interrumpida puede dejar la carpeta del Bridge sin crear.
- Añada el Volumetrica Bridge a la lista blanca de su software antivirus para que nunca vuelva a ponerse en cuarentena.

## Artículos relacionados

- [[install-deepcharts]]
- [[installation-problems]]
- [[installation-setup-failed]]
- [[application-control-policy]]
- [[fix-could-not-find-path]]
- [[fix-unable-to-establish-connection]]