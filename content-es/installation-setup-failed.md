---
title: "Solución: Installation Setup Failed"
slug: "installation-setup-failed"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "Resuelva el error Installation Setup Failed al instalar DeepCharts en Windows: lea el registro del instalador, instale el Visual C++ Redistributable y corrija problemas de idioma y gráficos."
keywords: ["installation setup failed", "setup failed", "error del instalador", "visual c++ redistributable", "vc_redist", "slimdx", "faltan componentes del sistema", "error de instalación windows", "instalation setup failed"]
source_hash: "cd871fe42ca4c4dc"
ai_translated: true
source_hash: "cd871fe42ca4c4dc"
---
Al instalar DeepCharts en Windows, algunos usuarios se encuentran con un diálogo de error que dice **Installation Setup Failed**. Suele deberse a componentes del sistema requeridos que faltan o son incompatibles en su instalación de Windows, y el instalador le dice exactamente cuál, si sabe dónde mirar.

## Síntoma

- El instalador de DeepCharts se detiene con una ventana de error **Installation Setup Failed**.
- La ventana de error incluye un botón **Log File** que abre un registro detallado de lo que falló.

[SCREENSHOT: El diálogo de error Installation Setup Failed durante la instalación de DeepCharts con el botón Log File visible y resaltado | dc-es-installation-setup-failed-01.png]

No confundir con:

- [[installation-problems]] — el instalador falla o desaparece sin este diálogo de error específico.
- [[application-control-policy]] — Windows informa "An Application Control policy has blocked this file".

## Causa más probable

Falta un componente del sistema requerido o es incompatible: lo más común es el Microsoft Visual C++ Redistributable. El registro del instalador identifica el fallo exacto, así que léalo primero.

## Solución rápida

1. Haga clic en el botón **Log File** de la ventana de error de instalación y revise los detalles registrados: identifican la causa del fallo. Conserve este archivo; soporte se lo pedirá si necesita ayuda más adelante.

[SCREENSHOT: El archivo de registro del instalador abierto en Notepad con las líneas del fallo cerca del final del registro visibles | dc-es-installation-setup-failed-02.png]

2. Descargue e instale el **Microsoft Visual C++ Redistributable** más reciente para la arquitectura de su sistema: DeepCharts requiere la versión más reciente para funcionar correctamente:

| Arquitectura | Enlace de descarga | Notas |
|---|---|---|
| ARM64 | https://aka.ms/vc14/vc_redist.arm64.exe | Versión ARM64 más reciente compatible |
| X86 (32 bits) | https://aka.ms/vc14/vc_redist.x86.exe | Requerido incluso en algunos sistemas de 64 bits |
| X64 (64 bits) | https://aka.ms/vc14/vc_redist.x64.exe | Incluye binarios tanto ARM64 como X64 |

3. Reinicie su PC. Este paso no es opcional: Windows solo termina de registrar los componentes del sistema tras un reinicio.
4. Ejecute de nuevo el instalador de DeepCharts.

## Si eso no funcionó

### Causa: el idioma del sistema de Windows no es inglés

DeepCharts y sus dependencias requieren que el idioma del sistema de Windows esté establecido en **English**. En sistemas con un idioma distinto del inglés, el instalador puede fallar de formas inesperadas.

1. Abra **Windows Settings → Time & Language → Language** y establezca el idioma de visualización y del sistema de Windows en **English**.

[SCREENSHOT: Página Time & Language de la Configuración de Windows con el menú desplegable del idioma de visualización de Windows abierto y English seleccionado | dc-es-installation-setup-failed-03.png]

2. Reinicie su PC.
3. Ejecute de nuevo el instalador de DeepCharts.

### Causa: problema de renderizado gráfico (SlimDX)

DeepCharts utiliza SlimDX para el renderizado gráfico. En casos raros, un problema de gráficos o DirectX a nivel de sistema impide que la instalación se complete. No existe una solución dirigida para este caso; sus opciones son:

- **Opción 1:** Instalar DeepCharts en otra máquina Windows, si dispone de una.
- **Opción 2:** Realizar una instalación limpia de Windows, instalar todas las actualizaciones del sistema y los componentes requeridos anteriores, y luego reinstalar DeepCharts.

> **Advertencia:** Una instalación limpia de Windows borra los programas y la configuración de ese PC. Haga primero una copia de seguridad de sus archivos y trate esto como el último recurso después de descartar todas las demás causas.

## Sigue atascado

Recopile el archivo de registro del instalador (el botón **Log File** de la ventana de error), luego contacte con soporte a través de [[get-help]] y adjunte el registro para que el equipo pueda investigar el fallo exacto. Si DeepCharts se instaló parcialmente y se inicia, incluya también un [[diagnostic-report]].

## Prevenga esto

- Reinicie siempre su PC después de instalar dependencias del sistema, antes de ejecutar el instalador de DeepCharts.
- Evite ejecutar varios instaladores al mismo tiempo.
- Mantenga Windows y sus controladores gráficos actualizados.
- Siga [[install-deepcharts]] para el procedimiento de instalación completo y en el orden correcto, y compruebe primero los [[system-requirements]] en una máquina nueva.

## Artículos relacionados

- [[install-deepcharts]]
- [[installation-problems]]
- [[system-requirements]]
- [[application-control-policy]]
- [[get-help]]