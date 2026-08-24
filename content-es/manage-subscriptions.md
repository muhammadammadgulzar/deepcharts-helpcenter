---
title: "Administre sus suscripciones y facturación"
slug: "manage-subscriptions"
category: "Account & Billing"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Vea su licencia de la plataforma DeepCharts y sus suscripciones de fuente de datos en my.deepcharts.com, añada o cambie productos de datos de mercado, detenga la renovación automática y actualice los datos de facturación."
keywords: ["cancelar suscripción", "cancelar mi suscripción", "detener renovación automática", "renovación automática", "facturación", "fecha de renovación", "pending cancel", "añadir bolsa", "cambiar productos de datos de mercado", "reembolso", "cancelar fuente de datos", "suscripción vencida", "cobro repetido", "administrar suscripción"]
source_hash: "3447eabc428c0022"
ai_translated: true
source_hash: "3447eabc428c0022"
---
Al final sabrá exactamente a qué está suscrito, cuándo se renueva cada suscripción y cómo añadir productos de datos, detener una renovación o actualizar sus datos de facturación: todo desde el panel de my.deepcharts.com.

Bajo "suscripciones" conviven dos cosas distintas, y se comportan de forma diferente: su **licencia de plataforma** (DeepCharts en sí) y sus **suscripciones de fuente de datos** (los datos de mercado que alimentan sus gráficos). Las licencias de plataforma no se renuevan automáticamente: cuando el plazo termina, usted vuelve a comprar manualmente. Las suscripciones de fuente de datos compradas en el sitio web de DeepCharts sí se renuevan automáticamente hasta que las cancele. La mayor parte de la confusión de facturación viene de mezclar estas dos cosas.

## Antes de empezar

- Una cuenta de DeepCharts en my.deepcharts.com: la cuenta que usó al comprar (consulte [[install-deepcharts]])
- Si su licencia o fuente proviene de una **empresa prop**, se gestiona en el panel de la empresa prop, no aquí: consulte [[compatibility-guide]] para saber cómo funcionan las cuentas de empresas prop

## Pasos

1. Inicie sesión en my.deepcharts.com.

2. Abra la página **Subscriptions** (Suscripciones). Lista todo lo que posee su cuenta: su licencia de la plataforma DeepCharts, cualquier curso o bootcamp, y una sección **Data Feeds** con una tarjeta por cada proveedor de fuente (dxFeed y Rithmic).

[SCREENSHOT: Página Subscriptions de my.deepcharts.com tras iniciar sesión mostrando la entrada de la licencia de plataforma y la sección Data Feeds con las tarjetas de dxFeed y Rithmic | dc-es-manage-subscriptions-01.png]

3. Revise cada entrada. Cada tarjeta de fuente de datos muestra su **nombre de usuario y contraseña** de la fuente (las credenciales que introduce en DeepCharts: consulte [[connect-data-feed]]), un botón **Add Exchange** y los controles de estado de la suscripción.

[SCREENSHOT: Una tarjeta de fuente de datos en la página Subscriptions con los campos de usuario/contraseña (valores ocultos), el botón Add Exchange y el control de estado de la suscripción visibles | dc-es-manage-subscriptions-02.png]

> **Nota:** La interfaz del panel está disponible actualmente en inglés e italiano: el selector de idioma está en la parte inferior de la página.

### Si desea añadir o cambiar productos de datos de mercado

1. En la tarjeta de la fuente, haga clic en **Add Exchange**. Se abre una lista de productos de datos comprables: cada bolsa se ofrece como **Top of Book** o **Market Depth**, y hay disponible un paquete de CME. Los precios actuales se muestran en vivo en esa página, así que es siempre el lugar autoritativo para comprobar cuánto cuesta un producto.

[SCREENSHOT: La página Add Exchange abierta desde una tarjeta de fuente, mostrando la lista de bolsas con las opciones Top of Book y Market Depth y la entrada del paquete de CME | dc-es-manage-subscriptions-03.png]

2. Seleccione los productos que necesite y complete el pago: [[buy-data-feed]] explica cómo elegir entre Top of Book y Market Depth.

3. Firme de nuevo el contrato de datos de mercado cuando se le solicite. El acuerdo cubre el conjunto exacto de productos de datos a los que se suscribe, así que cambiar sus productos implica volver a firmarlo: consulte [[sign-market-data-agreement]]. Para dxFeed esto ocurre directamente en el panel; los acuerdos de Rithmic se firman siempre dentro de R Trader Pro.

### Si desea cancelar una fuente de datos

1. En la tarjeta de la fuente, establezca el estado de la suscripción en **Pending Cancel**.

[SCREENSHOT: Una tarjeta de fuente de datos con el control de estado abierto y Pending Cancel seleccionado | dc-es-manage-subscriptions-04.png]

2. Entienda qué significan los dos estados:

| Estado | Significado |
|---|---|
| **Active** | La suscripción se renueva y vuelve a cobrarse en el siguiente ciclo de facturación |
| **Pending Cancel** | La cancelación queda registrada; la fuente sigue siendo utilizable hasta el final del periodo ya pagado y luego termina sin más cargos |

3. Sepa cuándo llega el próximo cargo, para que las fechas tengan sentido:
   - **dxFeed** cobra el mismo día del mes siguiente, contado desde su fecha de compra.
   - **Rithmic** factura por mes natural: el cargo llega al final de cada mes natural independientemente de su fecha de compra. Comprar el día 20 significa que el próximo cargo llega a fin de mes, antes de que hayan pasado 30 días. Este es el calendario de Rithmic, no algo que DeepCharts controle.

### Si desea cancelar su suscripción de plataforma

Las licencias de plataforma no se renuevan automáticamente, así que no hay ningún interruptor de cancelación que accionar. Cuando el plazo de la licencia termina, no se cobra nada más: simplemente vuelva a comprar si desea continuar. El plazo de su licencia comienza en la fecha de compra, con independencia de cuándo instaló la plataforma por primera vez.

> **Advertencia:** Las suscripciones de fuente de datos se renuevan con independencia de la licencia de plataforma. Si va a dejarlo por completo, ponga también sus fuentes de datos en **Pending Cancel**: de lo contrario la fuente sigue cobrando aunque la licencia de plataforma haya caducado.

### Si desea actualizar sus datos de facturación

1. En la página Subscriptions, haga clic en **Edit data**. Este formulario contiene la información de facturación que se envía al proveedor de la fuente de datos para gestionar su cuenta de fuente: nombre, teléfono, dirección, país, código postal, fecha de nacimiento, y las casillas **Company** y **Professional user**.

[SCREENSHOT: El formulario Edit data en la página Subscriptions mostrando los campos personales/de facturación y la casilla Professional user | dc-es-manage-subscriptions-05.png]

> **Advertencia:** Deje **Professional user** sin marcar a menos que realmente califique como profesional (opera con fondos de terceros, trabaja como trader para una institución o representa a una firma de inversión). La clasificación profesional hace que los mismos datos de mercado sean sustancialmente más caros, y volver atrás solo surte efecto cuando expira el periodo de fuente en curso.

### Si desea solicitar un reembolso

- **Fuentes de datos:** dxFeed y Rithmic son proveedores externos y los cargos de fuente no pueden reembolsarse. Lo que sí puede hacer es detener todos los cargos futuros poniendo la fuente en **Pending Cancel**.
- **Licencia de plataforma y todo lo demás:** revise la política de reembolsos [CONFIRM: refund policy link] y contacte con soporte a través de [[get-help]] indicando el motivo de su solicitud.

## Verifique que funcionó

La página Subscriptions refleja cada cambio inmediatamente: una fuente cancelada muestra **Pending Cancel** en su tarjeta (y no llega ningún cargo tras finalizar el periodo pagado), los productos de datos recién añadidos aparecen en la tarjeta de la fuente una vez firmado de nuevo el contrato, y los datos de facturación actualizados se muestran en el formulario **Edit data**.

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| El usuario/contraseña de la fuente no aparece tras añadir productos | El contrato de datos de mercado no está totalmente firmado: complételo, consulte [[sign-market-data-agreement]] |
| La plataforma dejó de activarse al terminar el plazo | La licencia expiró: vuelva a comprar y active de nuevo; consulte [[license-issues]] |
| Cargo de Rithmic antes de que pasaran 30 días | Normal: Rithmic factura al final de cada mes natural, no de fecha a fecha |
| Fuente cancelada pero quiere seguir viendo gráficos | La [[free-delayed-data-feed]] integrada funciona sin suscripción |
| Un cargo que no reconoce o una disputa de facturación | Contacte con soporte con los detalles de la factura — [[get-help]] |

## Artículos relacionados

- [[buy-data-feed]]
- [[sign-market-data-agreement]]
- [[license-issues]]
- [[move-to-new-computer]]
- [[free-delayed-data-feed]]
- [[get-help]]