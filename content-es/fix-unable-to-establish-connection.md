---
title: "Solución: Connection Failed — Unable to Establish Connection"
slug: "fix-unable-to-establish-connection"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "Resuelva el error de fuente de datos 'Unable to establish connection' causado por VPN, componentes de Visual C++ faltantes o una configuración de Windows en un idioma distinto del inglés."
keywords: ["Unable to establish connection", "Connection Failed: Unable to Establish Connection", "please check your internet connection", "vpn bloquea la fuente de datos", "visual c++ redistributable", "vc_redist", "idioma de windows inglés", "la fuente no conecta"]
source_hash: "dab974b325d1ab1e"
ai_translated: true
source_hash: "dab974b325d1ab1e"
---
Este error significa que DeepCharts no puede establecer una conexión estable con la fuente de datos. Casi siempre lo causa algo del lado del sistema (restricciones de red, un componente de Windows faltante o una incompatibilidad de idioma/región de Windows) y no sus credenciales de la fuente. Aplique las soluciones siguientes en orden.

## Síntoma

Al conectar una fuente de datos, la conexión falla con:

**Connection Failed: Unable to establish connection. Please check your internet connection.**

[SCREENSHOT: El cuadro de diálogo de error de conexión mostrando el mensaje completo "Unable to establish connection" tras un intento fallido de conexión de la fuente | dc-es-fix-unable-to-establish-connection-01.png]

No debe confundirse con:

- [[fix-username-password]]: la fuente llega al servidor pero rechaza sus credenciales.
- [[fix-bad-server]]: un error de autorización de dxFeed, no un fallo de red.
- [[fix-dxfeed-dll]]: un error de carga de DLL que menciona explícitamente `DXFeed_64.dll`.

## Causa más probable

Una conexión a internet inestable, o un servicio VPN/proxy que bloquea o redirige el tráfico de la fuente de datos.

## Solución rápida

1. Verifique que su conexión a internet sea estable y rápida (cargue algunos sitios web o ejecute una prueba de velocidad).
2. Si usa una VPN o un proxy, desconéctelo. El uso de VPN es una causa común de este error.
3. Cierre DeepCharts por completo.
4. Vuelva a abrir DeepCharts e intente conectar la fuente de nuevo.

## Si eso no funcionó

### Causa: Microsoft Visual C++ Redistributable faltante o desactualizado

DeepCharts requiere el Microsoft Visual C++ Redistributable más reciente compatible: es una dependencia obligatoria del sistema, y una versión faltante o desactualizada impide que la fuente se conecte.

Descargue y ejecute el instalador que corresponda a su sistema:

| Arquitectura | Enlace de descarga | Notas |
|---|---|---|
| X64 (64 bits) | https://aka.ms/vc14/vc_redist.x64.exe | Estándar para la mayoría de los PC modernos |
| X86 (32 bits) | https://aka.ms/vc14/vc_redist.x86.exe | Necesario en algunos sistemas de 64 bits |
| ARM64 | https://aka.ms/vc14/vc_redist.arm64.exe | Para dispositivos Windows basados en ARM |

[SCREENSHOT: La ventana del instalador de Microsoft Visual C++ Redistributable en la pantalla de configuración, antes de hacer clic en Install | dc-es-fix-unable-to-establish-connection-02.png]

Después de la instalación:

1. Reinicie su computadora.
2. Inicie DeepCharts.
3. Intente conectar la fuente de nuevo.

### Causa: El idioma o la región de Windows no están configurados en inglés

Un idioma del sistema o un formato regional distinto del inglés puede causar problemas de conexión y de interpretación de datos, y es una causa conocida de fallos de inicialización de la fuente.

1. Abra **Windows Settings → Time & Language → Language** y establezca el idioma de visualización de Windows en **English**.

[SCREENSHOT: Página Windows Settings Time & Language > Language con el menú desplegable del idioma de visualización establecido en English | dc-es-fix-unable-to-establish-connection-03.png]

2. Abra **Windows Settings → Time & Language → Region** y establezca **Country or region** en **United States** (u otra región compatible con inglés).

[SCREENSHOT: Página Windows Settings Time & Language > Region con Country or region establecido en United States | dc-es-fix-unable-to-establish-connection-04.png]

3. Reinicie su PC, abra DeepCharts, conecte la fuente de datos y abra un gráfico.

> **Nota:** Reinicie siempre la computadora después de cambiar configuraciones a nivel de sistema: el cambio no tiene efecto para DeepCharts hasta que lo haga.

## Si sigue atascado

Genere un [[diagnostic-report]] para que soporte pueda ver los detalles del intento de conexión y, a continuación, contacte al equipo a través de [[get-help]].

## Cómo prevenirlo

- Evite ejecutar una VPN mientras DeepCharts esté conectado a una fuente.
- Mantenga actualizados los Visual C++ Redistributables.
- Mantenga el idioma y la región del sistema Windows compatibles con inglés (se recomienda English/US).
- Verifique su equipo contra [[system-requirements]] y siga [[connect-data-feed]] al configurar fuentes.

## Artículos relacionados

- [[connect-data-feed]]
- [[system-requirements]]
- [[fix-username-password]]
- [[fix-bad-server]]
- [[connection-lost-opening-chart]]
- [[fix-dxfeed-dll]]