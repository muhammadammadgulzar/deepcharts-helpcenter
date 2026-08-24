---
title: "Solución: una política de control de aplicaciones bloquea DeepCharts"
slug: "application-control-policy"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Solucione el error 'An Application Control policy has blocked this file' desactivando Smart App Control de Windows para que DeepCharts y sus fuentes de datos puedan ejecutarse."
keywords: ["política de control de aplicaciones", "an application control policy has blocked this file", "smart app control", "bloqueado por seguridad de windows", "aplicación bloqueada", "rithmic bloqueado", "dxfeed bloqueado", "control de aplicaciones y navegador"]
source_hash: "28e6df84871a7f29"
ai_translated: true
source_hash: "28e6df84871a7f29"
---
Windows detiene DeepCharts —o una de sus conexiones de fuente de datos— con el mensaje **"An Application Control policy has blocked this file."** Esto es casi siempre Smart App Control, una función de Seguridad de Windows que bloquea aplicaciones que el servicio de Microsoft no reconoce, y puede interferir con software de trading legítimo.

## Síntoma

- Windows muestra el error **"An Application Control policy has blocked this file"** cuando inicia DeepCharts o cuando la plataforma intenta conectar una fuente de datos como Rithmic o dxFeed.
- El archivo bloqueado puede ser la propia aplicación DeepCharts o un componente de fuente que carga en el momento de la conexión.

[SCREENSHOT: La notificación o diálogo de Windows con el texto "An Application Control policy has blocked this file", mostrado al iniciar DeepCharts | dc-es-application-control-policy-01.png]

No confundir con:

- [[installation-problems]]: el propio instalador falla sin este mensaje específico de Windows.
- [[fix-unable-to-establish-connection]]: la fuente no logra conectarse por motivos de red o de credenciales, sin mensaje de bloqueo de Windows.

## Causa más probable

**Smart App Control**, una función de Seguridad de Windows que bloquea aplicaciones que considera desconocidas, está en **On** (Activado) o **Evaluation** (Evaluación) y está bloqueando un archivo de DeepCharts.

## Solución rápida

Desactive Smart App Control:

1. Escriba **Smart App Control** en la barra de búsqueda de Windows y pulse **Enter**.

[SCREENSHOT: Barra de búsqueda de Windows con "Smart App Control" escrito y el resultado de configuración de Smart App Control resaltado | dc-es-application-control-policy-02.png]

2. Se abre la página de configuración de Smart App Control (vive dentro de Seguridad de Windows, en **App & browser control**). El estado actual se muestra como **On**, **Evaluation** u **Off**.

[SCREENSHOT: Página de configuración de Smart App Control de Seguridad de Windows mostrando los tres botones de radio de estado On, Evaluation y Off | dc-es-application-control-policy-03.png]

3. Seleccione la opción **Off** y confirme cualquier diálogo que muestre Windows.

> **Advertencia:** En las versiones actuales de Windows, una vez desactivado Smart App Control no se puede volver a activar sin restablecer o reinstalar Windows. Si esa contrapartida le importa, téngala presente antes de confirmar; pero con la función habilitada, DeepCharts y los componentes de las fuentes pueden seguir siendo bloqueados.

4. Cierre DeepCharts por completo, espere varios segundos y vuelva a iniciarlo. La aplicación y sus conexiones de fuente de datos deberían funcionar ahora.

[SCREENSHOT: Página de configuración de Smart App Control con la opción Off seleccionada y confirmada | dc-es-application-control-policy-04.png]

## Si eso no funcionó

### Causa: una política de control de aplicaciones gestionada o de terceros

Si Smart App Control ya estaba en **Off** —o la opción no aparece— y sigue viendo el mensaje de bloqueo, otra capa de control de aplicaciones puede ser la responsable:

- En un PC gestionado por una empresa, una política de control de aplicaciones a nivel de administrador puede bloquear software no reconocido. Pida a su administrador de TI que permita DeepCharts.
- Las suites de seguridad de terceros pueden aplicar su propio control de aplicaciones. Compruebe la lista de aplicaciones bloqueadas de su software de seguridad y añada una excepción para DeepCharts. Consulte también [[installation-problems]] para interferencias generales de antivirus.

## Si sigue atascado

Haga una captura de pantalla del mensaje de bloqueo exacto, genere un [[diagnostic-report]] si DeepCharts se inicia y contacte con soporte a través de [[get-help]].

## Cómo prevenirlo

- Compruebe el estado de Smart App Control antes de instalar DeepCharts en una máquina nueva: consulte [[install-deepcharts]] y [[system-requirements]].
- Tras desactivarlo, no se necesita ninguna acción adicional; el ajuste se mantiene.

## Artículos relacionados

- [[installation-problems]]
- [[install-deepcharts]]
- [[system-requirements]]
- [[fix-unable-to-establish-connection]]
- [[get-help]]