---
title: "Problemas de suscripción de símbolos"
slug: "symbol-subscription-issues"
category: "Common Issues"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "2 min read"
description: "Esta guía le ayuda a resolver la falta de datos en tiempo real o la indisponibilidad de instrumentos en DeepDom cuando el problema está causado por la suscripción de símbolos o por la configuración de conexión de la fuente de datos."
keywords: ["problemas de suscripción de símbolos", "deepdom problemas de suscripción de símbolos", "deepdom", "problemas comunes"]
source_hash: "846e846c8c7c33a2"
ai_translated: true
source_hash: "846e846c8c7c33a2"
---
Esta guía le ayuda a resolver la falta de datos en tiempo real o la indisponibilidad de instrumentos en DeepDom cuando el problema está causado por la suscripción de símbolos o por la configuración de conexión de la fuente de datos.

### Paso 1 – Confirmar la conexión de la fuente de datos

[SCREENSHOT: Problemas de suscripción de símbolos — Paso 1 – Confirmar la conexión de la fuente de datos (DeepDOM) | dd-es-symbol-subscription-issues-01.png]

Asegúrese de que su flujo de datos esté correctamente conectado (el indicador de conexión en la barra de herramientas de DeepDom debe estar en verde). Verifique también que ha adquirido el paquete de datos correcto para los mercados que desea analizar, incluida la profundidad de mercado / Level 2 si es necesaria.

### Paso 2 – Comprobar la suscripción de símbolos

[SCREENSHOT: Problemas de suscripción de símbolos — Paso 2 – Comprobar la suscripción de símbolos (DeepDOM) | dd-es-symbol-subscription-issues-02.png]

Si la fuente está conectada pero algunos instrumentos siguen sin mostrar datos, compruebe que los mercados correspondientes estén correctamente suscritos con su proveedor de datos y vinculados a la conexión adecuada dentro de DeepDom.

#### Actualizar las suscripciones de símbolos

Desconecte la fuente de datos (quite la marca junto al nombre de la conexión en el menú **Feed**).

Cierre todos los espacios de trabajo y gráficos abiertos.

Vaya a **Options > Symbols Manage** (Opciones > Administrar símbolos).

Verifique que todos los mercados necesarios estén añadidos y que, junto al nombre de cada mercado, esté asociado el nombre de conexión correcto.

Si un mercado está vinculado a la conexión incorrecta, selecciónelo, haga clic con el botón derecho y elija la conexión correcta en el menú contextual.

Haga clic en **Select** (o en el botón de confirmación equivalente) para guardar los cambios.

Cierre la ventana Symbol Management (Administración de símbolos).

### Paso 3 – Reconectar y probar

Después de actualizar las suscripciones:

Reconecte la fuente de datos desde el menú **Feed**.

Abra un gráfico o un Work Plan que utilice los símbolos afectados.

DeepDom ahora debería mostrar datos en tiempo real y profundidad para todos los instrumentos contenidos en los mercados suscritos que estén asociados a la conexión.

## ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre. Al ponerse en contacto, incluya:

Una captura de pantalla del problema.

Una breve descripción de lo que intentaba hacer.

Ticket de soporte (respuesta más rápida): visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico: también puede escribirnos a support@deepcharts.com. Tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.