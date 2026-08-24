---
title: "Solución: Rithmic — Expert Not Attached"
slug: "fix-rithmic-expert-not-attached"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Resuelva el error 'Rithmic: Expert not attached' que mantiene la conexión de su fuente Rithmic en amarillo en lugar de verde."
keywords: ["Rithmic: Expert not attached", "expert not attached", "punto amarillo rithmic", "la conexión se queda en amarillo", "Use R|Trader", "plugin rtrader", "rithmic no se pone verde"]
source_hash: "be93c540cc29f16f"
ai_translated: true
source_hash: "be93c540cc29f16f"
---
El error **Rithmic: Expert not attached** aparece cuando DeepCharts está esperando un componente externo de Rithmic que no se está ejecutando en su computadora. La conexión no está rota: DeepCharts simplemente está configurado para esperar R Trader Pro en segundo plano y no lo encuentra.

## Síntoma

- Conecta una fuente de datos de Rithmic y el indicador de conexión se pone **amarillo**, y permanece amarillo en lugar de ponerse verde.
- Se muestra el mensaje de error **Rithmic: Expert not attached**.

[SCREENSHOT: Conexión de la fuente Rithmic mostrando el indicador de estado amarillo junto con el mensaje de error "Rithmic: Expert not attached" | dc-es-fix-rithmic-expert-not-attached-01.png]

Un indicador amarillo significa que la conexión está en espera o solo parcialmente establecida; el verde confirma una conexión de fuente de datos correcta.

No debe confundirse con:

- [[fix-log-in-using-rtrader]]: un mensaje diferente que le pide iniciar sesión con R Trader o R Trader Pro.
- [[fix-username-password]]: la conexión falla directamente con un error de credenciales.
- [[fix-bad-server]]: la conexión falla porque está seleccionado el servidor incorrecto.

## Causa más probable

La opción **Use R|Trader** está habilitada en la configuración de su fuente Rithmic, por lo que DeepCharts espera que R Trader Pro esté ejecutándose en segundo plano con los plugins necesarios habilitados, y no lo está.

## Solución rápida

Deshabilitar **Use R|Trader** es el enfoque más sencillo y resuelve el problema para la mayoría de los usuarios:

1. Abra DeepCharts.
2. Abra la ventana **Feed Settings** (configuración de la fuente) de su conexión Rithmic (consulte [[manage-feed-connections]] si no sabe dónde encontrarla).
3. Busque la opción **Use R|Trader**.
4. Desmarque (deshabilite) la opción.

[SCREENSHOT: Cuadro de diálogo Feed Settings de Rithmic con la casilla Use R|Trader visible y resaltada en su estado desmarcado | dc-es-fix-rithmic-expert-not-attached-02.png]

5. Haga clic en **Save**.
6. Reinicie DeepCharts.

Tras el reinicio, la conexión debería ponerse verde.

## Si eso no funcionó

### Causa: Usted usa R Trader Pro intencionadamente

Si necesita específicamente la vía de R Trader Pro (por ejemplo, porque su cuenta está configurada así), mantenga **Use R|Trader** habilitado y asegúrese de que el componente externo esté realmente en ejecución:

1. Abra R Trader Pro.
2. Inicie sesión con las **mismas credenciales de Rithmic** que introdujo en DeepCharts.
3. Habilite los plugins necesarios.
4. Mantenga R Trader Pro ejecutándose en segundo plano.
5. Inicie DeepCharts.

La configuración completa de los plugins se explica en [[rtrader-pro-plugin]].

> **Nota:** En la mayoría de los casos este método no es necesario. Habilite **Use R|Trader** solo si lo necesita específicamente.

### Causa: Un problema de conexión diferente

Si el indicador sigue sin ponerse verde tras deshabilitar **Use R|Trader**, el problema restante probablemente no esté relacionado con este error. Vuelva a comprobar sus credenciales y la selección del servidor contra la guía de configuración de [[connect-rithmic]], y consulte [[fix-username-password]] y [[fix-bad-server]] para los dos errores de seguimiento más comunes.

## Si sigue atascado

Genere un [[diagnostic-report]] para que soporte pueda ver el estado de su conexión y, a continuación, contacte a través de los canales indicados en [[get-help]].

## Cómo prevenirlo

Siga la guía de configuración de Rithmic en [[connect-rithmic]] y deje **Use R|Trader** deshabilitado a menos que use deliberadamente el flujo de trabajo con plugins descrito en [[rtrader-pro-plugin]].

## Artículos relacionados

- [[connect-rithmic]]
- [[rtrader-pro-plugin]]
- [[fix-log-in-using-rtrader]]
- [[fix-username-password]]
- [[fix-bad-server]]
- [[manage-feed-connections]]