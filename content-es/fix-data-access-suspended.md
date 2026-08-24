---
title: "Solución: dxFeed DATA_ACCESS_SUSPENDED"
slug: "fix-data-access-suspended"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Restaure el acceso a datos de mercado de dxFeed tras un error DATA_ACCESS_SUSPENDED causado por una revisión del estado Non-Professional."
keywords: ["DATA_ACCESS_SUSPENDED", "Dxfeed: DATA_ACCESS_SUSPENDED", "acceso a datos suspendido", "dxfeed suspendido", "estado non-professional", "datos de mercado suspendidos"]
source_hash: "60a407687aebb43a"
ai_translated: true
source_hash: "60a407687aebb43a"
---
El error **Dxfeed: DATA_ACCESS_SUSPENDED** significa que dxFeed ha suspendido su acceso a datos de mercado debido a una discrepancia en su estado **Non-Professional**. Es posible que haya firmado el Acuerdo de datos de mercado (Market Data Agreement) como Non-Professional, pero la revisión de cumplimiento de dxFeed determinó que la información que envió no cumple los criterios de Non-Professional.

Es un asunto de cumplimiento normativo, no un fallo del software — la decisión de suspensión la toma dxFeed, no DeepCharts.

## Síntoma

- Su fuente de datos dxFeed deja de conectarse, o los datos de mercado dejan de llegar.
- Se muestra el error **Dxfeed: DATA_ACCESS_SUSPENDED**.

[SCREENSHOT: El error de conexión de la fuente mostrando el texto exacto del mensaje "Dxfeed: DATA_ACCESS_SUSPENDED" | dc-es-fix-data-access-suspended-01.png]

No debe confundirse con:

- [[fix-myfundedfutures-failed]] — el acuerdo nunca llegó a firmarse ("You need to sign the datafeed").
- [[fix-username-password]] — un simple fallo de credenciales, sin relación con el estado de cumplimiento.

## Causa más probable

Usted firmó el Acuerdo de datos de mercado como Non-Professional, y la revisión de cumplimiento de dxFeed concluyó que la información enviada no califica como Non-Professional, por lo que el acceso a datos de mercado fue suspendido.

## Solución rápida

Verifique su estado Non-Professional con dxFeed a través del soporte de DeepCharts:

1. Contacte al soporte de DeepCharts (consulte [[get-help]]) e informe el error exacto: **DATA_ACCESS_SUSPENDED**.
2. Solicite el **Non-Professional Verification Form** (formulario de verificación Non-Professional). Soporte le proporcionará un formulario usado para confirmar su estado Non-Professional.
3. Complete el formulario con precisión. La información debe confirmar claramente que usted es un trader Non-Professional.

> **Advertencia:** Proporcionar información precisa y veraz es esencial. Respuestas incoherentes o incorrectas pueden llevar a que la suspensión se mantenga.

4. Envíe el formulario completado de vuelta al soporte de DeepCharts. Soporte lo remite a dxFeed para su revisión como prueba de su estado Non-Professional.
5. Una vez que dxFeed aprueba el formulario, el acceso a datos de mercado se rehabilita. Reinicie DeepCharts y vuelva a conectar la fuente de datos.

## Si eso no funcionó

### Causa: la revisión sigue en curso

El tiempo de aprobación depende del proceso de revisión de dxFeed. Si la fuente sigue mostrando el error poco después de enviar el formulario, lo más probable es que la revisión aún no haya terminado — contacte al soporte de DeepCharts para pedir una actualización del estado en lugar de reenviar el formulario.

### Causa: dxFeed determinó que usted no califica como Non-Professional

Si dxFeed mantiene la decisión tras revisar el formulario, su cuenta no puede usar las condiciones de datos Non-Professional. Contacte al soporte de DeepCharts para hablar de las opciones disponibles para su situación — el tratamiento exacto depende de la determinación de dxFeed.

## Si sigue atascado

Adjunte un [[diagnostic-report]] cuando escriba — ayuda a soporte a confirmar el estado exacto del error — y utilice las opciones de contacto en [[get-help]].

## Cómo prevenirlo

Cuando complete el acuerdo descrito en [[sign-market-data-agreement]]:

- Rellene con cuidado cada campo del Acuerdo de datos de mercado.
- Asegúrese de que sus datos coincidan con los requisitos de elegibilidad Non-Professional.
- Evite incoherencias en la información sobre su empleo o su actividad de trading.

## Artículos relacionados

- [[sign-market-data-agreement]]
- [[connect-dxfeed]]
- [[fix-myfundedfutures-failed]]
- [[connect-dxfeed-prop-firm]]
- [[get-help]]