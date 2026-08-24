---
title: "Solución: No se puede cargar la DLL DXFeed_64.dll"
slug: "fix-dxfeed-dll"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Solucione el error de conexión 'Unable to load DLL DXFeed_64.dll' instalando el Microsoft Visual C++ Redistributable."
keywords: ["Unable to load DLL 'DXFeed_64.dll'", "DXFeed_64.dll", "HRESULT: 0x8007007E", "error dll dxfeed", "visual c++ redistributable", "falta dll dxfeed", "conexión fallida dll"]
source_hash: "7b8d5566ac0382e0"
ai_translated: true
source_hash: "7b8d5566ac0382e0"
---
Este error aparece cuando DeepCharts no puede cargar el archivo DLL de dxFeed que la fuente de datos necesita para funcionar. Es un problema de dependencias del sistema Windows, no un fallo del software DeepCharts, y se soluciona instalando el Microsoft Visual C++ Redistributable.

## Síntoma

Al conectar una fuente de datos dxFeed, la conexión falla con:

**Connection Failed: Unable to load DLL 'DXFeed_64.dll' (Exception from HRESULT: 0x8007007E)**

[SCREENSHOT: El cuadro de diálogo de error de conexión mostrando el mensaje completo "Unable to load DLL 'DXFeed_64.dll' (Exception from HRESULT: 0x8007007E)" | dc-es-fix-dxfeed-dll-01.png]

No debe confundirse con:

- [[fix-unable-to-establish-connection]]: un fallo de conexión a nivel de red sin ninguna mención a una DLL.
- [[fix-system-cannot-find-file]]: un error de "archivo" diferente causado por el componente Volumetrica Bridge.

## Causa más probable

Los paquetes Microsoft Visual C++ Redistributable de los que depende `DXFeed_64.dll` faltan, están desactualizados o están dañados en su sistema Windows, por lo que la DLL no puede cargar sus bibliotecas de ejecución.

## Solución rápida

Instale (o reinstale) el Visual C++ Redistributable:

1. Cierre DeepCharts por completo.
2. Descargue el Microsoft Visual C++ Redistributable que corresponda a su sistema: **X64**, **X86** o **ARM64**. [CONFIRM: official Microsoft download link to include here]

> **Consejo:** Instalar tanto la versión X86 como la X64 es seguro y recomendable: muchas plataformas de trading requieren estos entornos de ejecución, por lo que esto también soluciona problemas en otro software.

3. Ejecute el instalador (o los instaladores).

[SCREENSHOT: La ventana del instalador de Microsoft Visual C++ Redistributable en la pantalla de configuración, antes de hacer clic en Install | dc-es-fix-dxfeed-dll-02.png]

4. Reinicie su computadora.
5. Vuelva a abrir DeepCharts y reconecte su fuente de datos.

> **Nota:** No necesita reinstalar DeepCharts para aplicar esta solución.

## Si eso no funcionó

### Causa: El redistributable instalado está dañado

Si el redistributable ya estaba presente, la copia instalada puede estar dañada. Ejecute de nuevo el instalador descargado (si ofrece una opción **Repair**, utilícela), luego reinicie su computadora y pruebe la conexión de nuevo.

### Causa: Solo está instalada una arquitectura

Si instaló un único paquete, añada también el otro (tanto X86 como X64 en un PC con Windows de 64 bits estándar; ARM64 en dispositivos basados en ARM). Reinicie la computadora después.

## Si sigue atascado

Genere un [[diagnostic-report]] para que soporte pueda ver la excepción exacta y, a continuación, contacte al equipo a través de [[get-help]].

## Cómo prevenirlo

Mantenga actualizados los entornos de ejecución de Windows y configure la fuente siguiendo [[connect-dxfeed]]. Verificar su equipo contra [[system-requirements]] antes de instalar DeepCharts evita la mayoría de los errores por dependencias faltantes.

## Artículos relacionados

- [[connect-dxfeed]]
- [[system-requirements]]
- [[fix-unable-to-establish-connection]]
- [[fix-system-cannot-find-file]]
- [[fix-data-access-suspended]]