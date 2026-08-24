---
title: "Cómo comprar una fuente de datos y obtener sus credenciales"
slug: "buy-data-feed"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Compre una suscripción a una fuente de datos en my.deepcharts.com, firme el contrato de datos de mercado y obtenga el nombre de usuario y la contraseña que DeepCharts utiliza para conectarse."
keywords: ["comprar fuente de datos", "compra de fuente de datos", "suscripción a fuente de datos", "obtener credenciales", "usuario y contraseña de la fuente de datos", "firmar contrato de datos de mercado", "comprar datos de mercado", "añadir suscripción a fuente de datos"]
source_hash: "b587af31ce06cb42"
ai_translated: true
source_hash: "b587af31ce06cb42"
---
Al terminar tendrá una suscripción activa a una fuente de datos y el nombre de usuario y la contraseña que DeepCharts necesita para conectarse a los datos de mercado en tiempo real.

DeepCharts construye sus gráficos a partir de una fuente de datos de mercado en tiempo real. Si aún no tiene credenciales de una fuente de datos de un bróker o de una empresa prop, puede comprar una suscripción directamente desde el panel de su cuenta en my.deepcharts.com: las credenciales se emiten allí mismo una vez firmado el contrato de datos de mercado. Aquí es donde terminan esas credenciales: la ventana **Feed Settings** (Configuración de la fuente) dentro de DeepCharts. Elija una fuente en la maqueta siguiente para ver qué campos solicita cada proveedor:

[WIDGET: feed-navigator]

## Antes de empezar

- Una cuenta de DeepCharts en my.deepcharts.com, la misma cuenta que contiene su licencia (consulte [[install-deepcharts]])
- Una decisión sobre qué fuente de datos desea: [[compatibility-guide]] compara las opciones compatibles
- Una tarjeta de pago
- Unos minutos para completar el contrato de datos de mercado (solicita datos personales y su estado de suscriptor)

> **Nota:** Si su cuenta proviene de una **empresa prop**, no compre aquí una fuente de datos: sus credenciales de la fuente provienen del panel propio de la empresa prop. Consulte en su lugar [[connect-rithmic-prop-firm]] o [[connect-dxfeed-prop-firm]].

> **Consejo:** ¿Solo está explorando la plataforma por ahora? No necesita comprar nada: la [[free-delayed-data-feed|fuente gratuita con retraso de 15 minutos]] integrada funciona sin credenciales ni contrato.

## Pasos

1. Inicie sesión en su panel en my.deepcharts.com.

2. Haga clic en **Data Feed** en el menú izquierdo.

[SCREENSHOT: Panel de my.deepcharts.com tras iniciar sesión con el menú izquierdo visible y la entrada Data Feed resaltada | dc-es-buy-data-feed-01.png]

3. Seleccione **Add data feed subscription**.

[SCREENSHOT: La sección Data Feed mostrando el botón Add data feed subscription resaltado | dc-es-buy-data-feed-02.png]

4. Elija la fuente de datos que desea y continúe con el pedido de compra. Durante la compra selecciona los productos de datos de mercado concretos: qué bolsas necesita (CME, COMEX, etc.) y el nivel de datos (top of book frente a profundidad de mercado). Elija profundidad de mercado si planea usar el DOM y las herramientas de flujo de órdenes; top of book es suficiente para gráficos de velas simples.

[SCREENSHOT: La página de compra de la fuente de datos con la fuente seleccionada y la lista de productos de datos de mercado (bolsas, opciones de top of book / profundidad de mercado) visible | dc-es-buy-data-feed-03.png]

5. Introduzca los datos de su tarjeta y complete el pago.

6. Cuando el pago se haya realizado correctamente, vuelva a la sección **Data Feed** del panel.

7. Firme el contrato de datos de mercado. El contrato le pide:
   - Seleccionar su estado de suscripción. La mayoría de los operadores individuales califican como **Non-Professional** (No profesional): las bolsas definen los criterios exactos, así que lea con atención las descripciones del formulario antes de elegir.
   - Introducir su información personal.

[SCREENSHOT: El flujo de firma del contrato de datos de mercado en el panel con la opción de estado de suscripción Non-Professional visible | dc-es-buy-data-feed-04.png]

8. Cuando el contrato esté completo, regrese a la sección **Data Feed**. Su **nombre de usuario y contraseña** de la fuente se muestran ahora allí: estas son las credenciales que introduce en Feed Settings de DeepCharts.

[SCREENSHOT: La sección Data Feed mostrando una suscripción activa con los campos de nombre de usuario y contraseña visibles (valores ocultos) | dc-es-buy-data-feed-05.png]

### Si compró una fuente de Rithmic

Rithmic entrega sus credenciales a través de su propio sistema, por lo que el acuerdo de datos de mercado para una suscripción de Rithmic se completa en **R Trader Pro** en lugar de en el panel. Siga primero [[sign-market-data-agreement]] y luego conéctese usando [[connect-rithmic]].

### Si compró su fuente en dxfeed.com

Comprar directamente en dxfeed.com también funciona, pero debe seleccionar **DeepChart** como plataforma durante el proceso de compra; de lo contrario, las credenciales no serán compatibles con DeepCharts. Consulte [[connect-dxfeed]] para los pasos de conexión.

## Verifique que funcionó

En la sección **Data Feed** de my.deepcharts.com su suscripción aparece como activa y se muestran un nombre de usuario y una contraseña. Eso es todo lo que DeepCharts necesita: el siguiente paso es introducirlos en Feed Settings, tal como se explica en [[connect-data-feed]].

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| No se muestra el usuario/contraseña tras el pago | El contrato de datos de mercado no está completamente firmado: vuelva a abrir la sección Data Feed y complete todos los pasos del contrato |
| Credenciales rechazadas al conectar | [[fix-username-password]] |
| No está seguro de si esta fuente cubre su mercado o bróker | [[compatibility-guide]] |
| Tiene una cuenta de empresa prop | Obtenga las credenciales en el panel de la empresa prop: [[connect-rithmic-prop-firm]] o [[connect-dxfeed-prop-firm]] |

## Artículos relacionados

- [[connect-data-feed]]
- [[connect-dxfeed]]
- [[connect-rithmic]]
- [[sign-market-data-agreement]]
- [[free-delayed-data-feed]]
- [[compatibility-guide]]