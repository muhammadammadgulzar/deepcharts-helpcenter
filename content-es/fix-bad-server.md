---
title: "Solución: Connection Failed — Bad Server"
slug: "fix-bad-server"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Resuelva el error de conexión 'Bad Server' de dxFeed causado por inicios de sesión simultáneos en varias plataformas o por un acuerdo de datos de mercado sin firmar."
keywords: ["Bad Server", "Connection Failed: Bad Server", "dxfeed bad server", "dxfeed una sola conexión", "dxfeed sesión iniciada en otro lugar", "acuerdo de datos de mercado sin firmar dxfeed"]
source_hash: "3f86affbbbf60960"
ai_translated: true
source_hash: "3f86affbbbf60960"
---
El error "Bad Server" se origina en dxFeed, no en DeepCharts. Señala una restricción de autorización de datos de mercado o de uso de la cuenta del lado de dxFeed — en la práctica, o bien su cuenta de dxFeed ya está en uso en otra plataforma, o bien su Acuerdo de datos de mercado (Market Data Agreement) aún no ha sido firmado.

## Síntoma

Al conectar una fuente de datos dxFeed, la conexión falla con:

**Connection Failed: Bad Server**

[SCREENSHOT: El diálogo de error de conexión mostrando el mensaje "Bad Server" tras un intento fallido de conexión a dxFeed | dc-es-fix-bad-server-01.png]

No debe confundirse con:

- [[fix-username-password]] — un error de credenciales de Rithmic, sin relación con dxFeed.
- [[fix-unable-to-establish-connection]] — un fallo a nivel de red, típicamente relacionado con VPN o componentes del sistema.
- [[fix-data-access-suspended]] — un error de autorización de dxFeed distinto, con su propio mensaje.

## Causa más probable

La misma cuenta de dxFeed tiene una sesión iniciada en otra plataforma al mismo tiempo — dxFeed impone una sola conexión activa por cuenta, y un segundo inicio de sesión es rechazado.

## Solución rápida

1. Cierre cualquier otra plataforma de trading o de gráficos que tenga sesión iniciada con las mismas credenciales de dxFeed — incluida una sesión que haya quedado abierta en otro equipo, si la hubiera.
2. Asegúrese de que la cuenta ahora esté en uso en una sola plataforma.
3. Reinicie DeepCharts.
4. Intente conectar la fuente de nuevo.

> **Nota:** La limitación de una sola sesión activa se aplica universalmente — no puede ejecutar la misma cuenta de dxFeed en DeepCharts y en otra plataforma simultáneamente.

## Si eso no funcionó

### Causa: Acuerdo de datos de mercado sin firmar

dxFeed bloquea el acceso hasta que el Acuerdo de datos de mercado de la cuenta haya sido firmado. Cómo firmarlo depende de dónde proviene la cuenta:

**Si compró la fuente de datos directamente:**

1. Inicie sesión en el portal de su proveedor de datos.
2. Firme el Acuerdo de datos de mercado, seleccionando el estado **Non-Professional** cuando corresponda.

[SCREENSHOT: La página del portal del proveedor de datos mostrando el Acuerdo de datos de mercado con la opción de estado Non-Professional seleccionada | dc-es-fix-bad-server-02.png]

El recorrido completo está en [[sign-market-data-agreement]].

**Si la cuenta proviene de un bróker o una empresa prop:**

1. Contacte a su bróker o empresa prop.
2. Pregúnteles cómo activar o firmar el Acuerdo de datos de mercado de su cuenta — el procedimiento exacto varía según la firma.

Después de firmar el acuerdo, reinicie DeepCharts y vuelva a conectar la fuente de datos.

## Si sigue atascado

Genere un [[diagnostic-report]] para que soporte pueda ver el rechazo exacto, y luego contacte al equipo a través de [[get-help]] — mencione qué proveedor o firma emitió la cuenta de dxFeed y si el acuerdo está firmado.

## Cómo prevenirlo

- Complete el Acuerdo de datos de mercado inmediatamente después de configurar la cuenta — consulte [[sign-market-data-agreement]].
- Ejecute la cuenta de dxFeed en una sola plataforma a la vez.
- Ante la duda sobre el estado del acuerdo, verifíquelo con su bróker o proveedor antes de conectarse.
- Configure la fuente siguiendo [[connect-dxfeed]] (o [[connect-dxfeed-prop-firm]] para cuentas de empresas prop).

## Artículos relacionados

- [[connect-dxfeed]]
- [[sign-market-data-agreement]]
- [[connect-dxfeed-prop-firm]]
- [[fix-data-access-suspended]]
- [[fix-myfundedfutures-failed]]
- [[fix-dxfeed-dll]]