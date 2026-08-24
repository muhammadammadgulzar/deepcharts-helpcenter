---
title: "Solución: problemas de instalación y requisitos básicos"
slug: "installation-problems"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "Qué comprobar cuando el instalador de DeepCharts falla, desaparece o no se completa: antivirus, .NET Framework, espacio en disco y versión del instalador."
keywords: ["problema de instalación", "instalación fallida", "el instalador no se ejecuta", "no puedo instalar deepcharts", "requisitos básicos", ".net framework 4.8", "antivirus bloquea la instalación", "espacio en disco insuficiente", "problema de instalacion"]
source_hash: "d89766648cf9ddb7"
ai_translated: true
source_hash: "d89766648cf9ddb7"
---
Descargó DeepCharts pero la instalación no se completa: el instalador falla, se cierra sin terminar o la plataforma nunca aparece después. Esta guía recorre los cuatro requisitos básicos que causan casi todas las instalaciones fallidas, empezando por el más común.

## Síntoma

- El instalador de DeepCharts falla, se detiene a mitad de camino o se cierra sin instalar nada.
- La instalación parece terminar, pero DeepCharts no aparece o no se inicia después.

No confundir con:

- [[installation-setup-failed]] — ve el diálogo de error específico **Installation Setup Failed** con un botón **Log File**.
- [[application-control-policy]] — Windows muestra "An Application Control policy has blocked this file".
- [[license-issues]] — la plataforma se instala bien, pero la activación o la licencia fallan.

## Causa más probable

Software antivirus de terceros que interfiere con el instalador: los productos antivirus pueden poner en cuarentena componentes del instalador a mitad de la instalación, lo que se manifiesta como una instalación fallida o a medio completar.

## Solución rápida

Ejecute una instalación limpia con solo Windows Defender activo:

1. Cierre cualquier instalador en ejecución y cierre DeepCharts si está abierto.
2. Deshabilite temporalmente **todos** los productos antivirus de terceros, dejando activo solo **Windows Defender**.

[SCREENSHOT: Un panel de antivirus de terceros con su interruptor de protección en tiempo real apagado, mostrando la protección deshabilitada temporalmente | dc-es-installation-problems-01.png]

3. Descargue una copia nueva del instalador desde su panel de my.deepcharts.com y ejecute la instalación de nuevo: consulte [[install-deepcharts]] para la guía completa.
4. Vuelva a habilitar su antivirus en cuanto termine la instalación.

> **Advertencia:** No deje su antivirus deshabilitado más tiempo del que dura la instalación. Vuelva a activarlo inmediatamente después.

Si la instalación sigue fallando con el antivirus deshabilitado, revise los requisitos restantes a continuación.

## Si eso no funcionó

### Causa: falta .NET Framework 4.8 o posterior

DeepCharts requiere el paquete **.NET Framework 4.8** o posterior. Las compilaciones recientes de Windows 10 y Windows 11 normalmente ya lo incluyen, pero las instalaciones de Windows más antiguas o muy recortadas pueden no tenerlo.

1. Descargue el runtime de .NET Framework 4.8 desde el sitio oficial de Microsoft: https://dotnet.microsoft.com/download/dotnet-framework
2. Ejecute el instalador: si el framework ya está presente, el programa de instalación se lo indicará y podrá descartar esta causa.
3. Reinicie su PC y ejecute de nuevo el instalador de DeepCharts.

### Causa: espacio libre insuficiente en Local Disk (C:)

La instalación necesita espacio disponible en **Local Disk (C:)**, y DeepCharts almacena después los datos de mercado descargados en la misma unidad de forma predeterminada, por lo que un disco casi lleno causa problemas más allá de la instalación.

1. Abra **File Explorer → This PC** y compruebe el espacio libre mostrado bajo **Local Disk (C:)**.

[SCREENSHOT: Vista This PC del Explorador de archivos con la barra de la unidad Local Disk C: visible mostrando el espacio libre restante | dc-es-installation-problems-02.png]

2. Libere espacio si la unidad está cerca de llenarse y ejecute el instalador de nuevo.
3. Si una instalación antigua de DeepCharts está ocupando espacio con datos de mercado, consulte [[delete-market-data]].

### Causa: está instalando una versión desactualizada

Instale siempre la versión más reciente de la plataforma. El número de versión actual se indica junto al botón de descarga en su panel de my.deepcharts.com.

[SCREENSHOT: Área de descarga del panel de my.deepcharts.com con el número de versión junto al botón de descarga resaltado | dc-es-installation-problems-03.png]

1. Inicie sesión en su panel de my.deepcharts.com.
2. Compare la versión junto al botón de descarga con el instalador que tiene: si difieren, descargue el instalador más reciente y ejecútelo en su lugar.

## Sigue atascado

Genere un [[diagnostic-report]] si la plataforma llega a iniciarse, tome una captura de pantalla de cualquier error que vea y contacte con soporte a través de [[get-help]], mencionando cuáles de las cuatro comprobaciones anteriores ya probó.

## Prevenga esto

- Revise los [[system-requirements]] antes de instalar en una máquina nueva.
- Siga [[install-deepcharts]] paso a paso: incluye el paso del antivirus en el momento adecuado.
- Mantenga suficiente espacio libre en Local Disk (C:); la base de datos local de datos de mercado crece con el tiempo.

## Artículos relacionados

- [[install-deepcharts]]
- [[system-requirements]]
- [[installation-setup-failed]]
- [[application-control-policy]]
- [[license-issues]]
- [[get-help]]