---
title: "Informe de diagnóstico: antes de contactar con soporte"
slug: "diagnostic-report"
category: "Troubleshooting & Support"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Genere el informe de diagnóstico integrado de DeepCharts y envíelo a soporte, además de dónde encontrar los archivos de registro si soporte los solicita."
keywords: ["informe de diagnóstico", "contactar con soporte", "enviar diagnósticos", "archivos de registro", "plataforma lenta", "retraso", "uso de RAM", "informe de rendimiento"]
source_hash: "a82fa10e6b3e238e"
ai_translated: true
source_hash: "a82fa10e6b3e238e"
---
Al terminar habrá generado el informe de diagnóstico integrado de DeepCharts, una instantánea de su sistema, conectividad y estado de la plataforma, y lo habrá enviado a soporte. Adjuntar este informe a su primer mensaje es la mejor manera de acortar una conversación de soporte: responde a la mayoría de las preguntas que soporte tendría que hacerle una por una.

Úselo siempre que experimente problemas de rendimiento, retrasos o problemas de conectividad que los artículos de solución de problemas no hayan resuelto.

## Antes de empezar

- Tenga DeepCharts en ejecución, idealmente poco después de que ocurriera el problema, para que el informe refleje el estado del problema; vea [[install-deepcharts]] si la plataforma no arranca en absoluto.
- Sepa qué fuente de datos y qué bróker o empresa prop utiliza, vea [[compatibility-guide]], para poder mencionarlos en su mensaje.
- Si su problema es lag o datos retrasados, repase primero la lista de comprobación de [[data-delayed-lagging]]; resuelve muchos casos sin necesidad de un ticket.

## Pasos

1. Eche un vistazo al indicador **RAM** de la barra de herramientas antes de empezar. Muestra dos valores: el primero es el uso total de RAM del sistema, y el valor entre corchetes es el uso de memoria propio de DeepCharts. Si su uso total de RAM es constantemente alto, puede afectar al rendimiento de la plataforma; vale la pena mencionarlo en su mensaje a soporte.

[SCREENSHOT: Barra de herramientas principal de DeepCharts con el indicador RAM resaltado, mostrando el valor total de RAM del sistema y el valor de memoria de DeepCharts entre corchetes | dc-es-diagnostic-report-01.png]

2. Haga clic en el icono **?** (signo de interrogación) de la barra de herramientas.
3. Seleccione **Contact Support** (contactar con soporte).

[SCREENSHOT: El menú ? (signo de interrogación) abierto en la barra de herramientas de DeepCharts con la entrada Contact Support resaltada | dc-es-diagnostic-report-02.png]

4. Elija **I have a problem or delay with the platform** (tengo un problema o retraso con la plataforma).
5. Revise la ventana de diagnóstico. Recopila y muestra: versión de la plataforma, sistema operativo, detalles de la CPU, estadísticas de memoria, conectividad de red, tiempos de ping a los servidores y velocidades de descarga.

[SCREENSHOT: La ventana de diagnóstico mostrando los resultados de versión, sistema operativo, CPU, memoria, conectividad de red, tiempos de ping a los servidores y velocidad de descarga | dc-es-diagnostic-report-03.png]

6. Haga clic en **Click Here to Confirm** para permitir que la plataforma recopile datos adicionales.
7. Haga clic en **Contact Support and Send Information** para enviar los resultados al equipo de soporte, junto con una breve descripción de su problema.

> **Nota:** Durante este proceso no se recopilan nombres de usuario ni credenciales. El informe cubre únicamente datos del sistema y de conectividad.

### Si soporte solicita los archivos de registro

DeepCharts también escribe archivos de registro diarios que soporte puede solicitar para un análisis más profundo:

1. Abra **My PC → Documents → DeepCharts → Logs**.
2. Identifique el archivo que soporte le pidió. Hay cuatro tipos de registro, **General**, **Trade Copier**, **Trading** y **Various**, y cada archivo lleva su fecha en el nombre, por ejemplo `trading_2026-06-22`.

[SCREENSHOT: Explorador de archivos abierto en Documents > DeepCharts > Logs mostrando los archivos de registro General, Trade Copier, Trading y Various con nombres fechados | dc-es-diagnostic-report-04.png]

3. Adjunte el archivo del día en que ocurrió el problema a su conversación de soporte.

## Verifique que funcionó

La ventana de diagnóstico completa sus comprobaciones (los tiempos de ping y las velocidades de descarga muestran resultados en lugar de seguir ejecutándose), y el informe se envía después de hacer clic en **Contact Support and Send Information**. [CONFIRM: exact confirmation the app shows after the report is sent]

Cuando soporte responda, ya tendrá su versión de la plataforma, las especificaciones del sistema y los resultados de conectividad: espere menos preguntas de ida y vuelta.

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| No encuentra el icono **?** | Está en la barra de herramientas principal; si la plataforma no abre en absoluto, vea [[installation-problems]] y contacte con soporte a través del sitio web, vea [[get-help]] |
| Las comprobaciones de conectividad fallan o nunca terminan | Su equipo puede estar sin conexión o bloqueado por software de seguridad; anote el fallo (haga una captura de pantalla) e infórmelo a través del chat del sitio web, vea [[get-help]] |
| El problema es específicamente lag de datos | Incluya el informe y luego siga [[data-delayed-lagging]] |
| El problema son errores de base de datos | Vea [[database-problems]] antes de enviar: puede resolver el problema directamente |

## Artículos relacionados

- [[get-help]]
- [[data-delayed-lagging]]
- [[database-problems]]
- [[installation-problems]]
- [[license-issues]]