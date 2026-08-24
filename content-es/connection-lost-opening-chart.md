---
title: "Solución: conexión perdida al abrir un gráfico"
slug: "connection-lost-opening-chart"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Qué hacer cuando su fuente de datos se conecta bien pero la conexión se cae en el momento en que un gráfico empieza a cargar datos."
keywords: ["conexión perdida", "conexión perdida al abrir un gráfico", "la fuente de datos se desconecta al abrir el gráfico", "el gráfico pierde la conexión", "configuración regional de windows", "formato regional", "idioma no inglés"]
source_hash: "5c3b757ac1808109"
ai_translated: true
source_hash: "5c3b757ac1808109"
---
Su fuente de datos se conecta sin ningún problema, pero en el momento en que abre un gráfico, la conexión se cae y DeepCharts muestra advertencias o mensajes de error. Esta guía cubre las dos causas conocidas: una conexión a internet inestable y una configuración de idioma o región de Windows que rompe el análisis de los datos del gráfico.

## Síntoma

- La fuente de datos se conecta correctamente y el indicador de conexión se ve normal.
- En cuanto abre un gráfico, específicamente cuando los datos del gráfico empiezan a cargarse, la conexión se cae y aparecen una o más advertencias o mensajes de error.

[SCREENSHOT: Ventana principal de DeepCharts en el momento en que la conexión se cae tras abrir un gráfico, con la advertencia de desconexión o el mensaje de error visible en pantalla | dc-es-connection-lost-opening-chart-01.png]

No debe confundirse con:

- [[fix-unable-to-establish-connection]] — la fuente de datos nunca llega a conectarse.
- [[feed-connected-chart-not-moving]] — la fuente de datos permanece conectada pero el gráfico no se actualiza.

## Causa más probable

Una breve interrupción de la red mientras el gráfico descarga sus datos o, si ocurre absolutamente todas las veces, una configuración de idioma y región de Windows distinta de inglés (EE. UU.), que cambia el formato de fechas, números y decimales y provoca errores de análisis durante la carga de datos del gráfico.

## Solución rápida

Actualice primero su conexión a internet: es la causa más rápida de descartar:

1. Desconéctese de su red actual.
2. Vuelva a conectarse a internet. Una conexión por cable estable es preferible al Wi-Fi.
3. Reinicie DeepCharts.
4. Conecte su fuente de datos y abra el gráfico de nuevo.

Si la conexión sigue cayéndose cuando el gráfico carga, continúe a continuación.

## Si eso no funcionó

### Causa: el idioma o la región de Windows no es inglés (EE. UU.)

La fuente de datos y los componentes de graficación requieren un idioma de visualización en inglés y formatos de región de EE. UU. o basados en inglés. Otros formatos regionales pueden causar errores de análisis exactamente en el punto donde los datos del gráfico empiezan a cargarse, y por eso la fuente de datos se conecta bien pero se cae al abrir el gráfico.

1. Abra **Windows Settings → Time & Language → Language** y establezca el idioma de visualización de Windows en **English**.

[SCREENSHOT: Configuración de Windows, página Time & Language, Language, con el menú desplegable del idioma de visualización de Windows abierto y English seleccionado | dc-es-connection-lost-opening-chart-02.png]

2. Abra **Windows Settings → Time & Language → Region** y establezca **Country or region** (país o región) en **United States** (u otra región compatible con inglés).

[SCREENSHOT: Configuración de Windows, página Time & Language, Region, con Country or region establecido en United States | dc-es-connection-lost-opening-chart-03.png]

3. Reinicie su computadora.
4. Inicie DeepCharts, conecte la fuente de datos y abra el gráfico de nuevo.

> **Nota:** El reinicio del paso 3 es obligatorio: Windows solo aplica los cambios de formato regional a nivel de todo el sistema tras un reinicio. Cambiar la configuración sin reiniciar no solucionará el problema.

## Sigue atascado

Genere un [[diagnostic-report]] para que el soporte pueda ver los detalles de su sistema y conexión, y luego contáctenos a través de [[get-help]].

## Prevenga esto

- Mantenga Windows configurado en inglés con formatos regionales de EE. UU. o basados en inglés.
- Asegúrese de que su conexión a internet sea estable antes de abrir gráficos, idealmente por cable.
- Siga [[connect-data-feed]] al configurar una fuente de datos para que la conexión quede configurada correctamente desde el principio.

## Artículos relacionados

- [[connect-data-feed]]
- [[fix-unable-to-establish-connection]]
- [[feed-connected-chart-not-moving]]
- [[data-delayed-lagging]]
- [[get-help]]