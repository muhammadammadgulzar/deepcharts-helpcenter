---
title: "Solución: dxfeed.myfundedfutures.com Failed"
slug: "fix-myfundedfutures-failed"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Solucione el error 'dxfeed.myfundedfutures.com failed: You need to sign the datafeed' firmando el Acuerdo de Datos de Mercado con su empresa."
keywords: ["dxfeed.myfundedfutures.com failed", "You need to sign the datafeed", "error dxfeed myfundedfutures", "fuente de datos MFF fallida", "firmar el datafeed", "acuerdo de datos de mercado no firmado"]
source_hash: "e8ba5010e90d60ca"
ai_translated: true
source_hash: "e8ba5010e90d60ca"
---
Este error de conexión significa que la fuente de datos de mercado no está activada para su cuenta de trading. Antes de que dxFeed conceda acceso a los datos, debe firmar el Acuerdo de Datos de Mercado (Market Data Agreement) con su empresa de trading; hasta entonces, la conexión está bloqueada. No es un problema del software DeepCharts: la activación la gestionan el proveedor de datos y su empresa de trading.

## Síntoma

Al conectar su cuenta dxFeed de empresa prop, la conexión falla con:

**dxfeed.myfundedfutures.com failed: You need to sign the datafeed**

[SCREENSHOT: El cuadro de diálogo de error de conexión mostrando el mensaje completo "dxfeed.myfundedfutures.com failed: You need to sign the datafeed" | dc-es-fix-myfundedfutures-failed-01.png]

El nombre de host de este ejemplo pertenece a MyFundedFutures; si su cuenta es de otra empresa prop con dxFeed, el nombre de host del mensaje puede variar, pero el significado y la solución son los mismos.

No debe confundirse con:

- [[fix-data-access-suspended]]: ya firmó el acuerdo, pero dxFeed suspendió el acceso tras una revisión del estado Non-Professional.
- [[fix-username-password]]: la conexión se rechaza porque las credenciales son incorrectas.

## Causa más probable

El Acuerdo de Datos de Mercado no se ha firmado (o aún no se ha activado) para su cuenta de trading, por lo que el proveedor de datos está bloqueando el acceso a los datos de mercado.

Los desencadenantes habituales son una cuenta recién creada, datos de mercado que nunca se activaron y un estado Non-Professional no registrado.

## Solución rápida

1. Identifique la empresa de trading a la que pertenece su cuenta. Para el nombre de host anterior, es MyFundedFutures.
2. Contacte al soporte de la empresa y pregunte: **"How can I sign the Market Data Agreement (Non-Professional) for my DXFeed data?"** (¿Cómo puedo firmar el Acuerdo de Datos de Mercado (Non-Professional) para mis datos de DXFeed?)
3. Complete el acuerdo que le envíen, asegurándose de seleccionar el estado **Non-Professional** si cumple los requisitos. Consulte [[sign-market-data-agreement]] para saber qué cubre el acuerdo y cómo funciona la elección del estado.
4. Espere la confirmación de la activación. La activación puede tardar desde unos minutos hasta unas horas.
5. Reinicie DeepCharts y reconecte la fuente de datos.

Si necesita volver a introducir los detalles de la conexión al reconectar, pruebe la maqueta interactiva de Feed Settings a continuación: elija **dxFeed Prop** como origen y observe que no hay ningún campo de servidor que rellenar.

[WIDGET: feed-navigator]

[SCREENSHOT: La conexión de la fuente mostrando un estado correcto (verde) después de activarse el acuerdo y reiniciarse DeepCharts | dc-es-fix-myfundedfutures-failed-02.png]

## Si eso no funcionó

### Causa: La activación aún se está propagando

Si firmó el acuerdo recientemente, es posible que la activación simplemente no haya llegado todavía a los servidores de datos. Espere un poco más, luego reinicie DeepCharts e inténtelo de nuevo.

### Causa: El acuerdo está firmado pero los datos siguen inactivos

Confirme con su empresa de trading que los datos de mercado están realmente activos en su cuenta y que su estado Non-Professional quedó registrado. El acceso a los datos de mercado permanece bloqueado hasta que el proveedor marque el acuerdo como completado.

## Si sigue atascado

Genere un [[diagnostic-report]] y contacte al soporte de DeepCharts a través de [[get-help]]; incluya el texto exacto del error y el nombre de su empresa de trading.

## Cómo prevenirlo

Firme el Acuerdo de Datos de Mercado inmediatamente después de crear una cuenta nueva y verifique su estado Non-Professional antes de iniciar la plataforma. El proceso se describe en [[sign-market-data-agreement]], y la guía completa de conexión para empresas prop está en [[connect-dxfeed-prop-firm]].

## Artículos relacionados

- [[sign-market-data-agreement]]
- [[connect-dxfeed-prop-firm]]
- [[connect-dxfeed]]
- [[fix-data-access-suspended]]
- [[fix-unable-to-establish-connection]]