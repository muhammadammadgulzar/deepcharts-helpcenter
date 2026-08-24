---
title: "Cómo añadir una nueva conexión"
slug: "how-to-add-a-new-connection"
category: "How To"
subcategory: ""
type: "how-to"
difficulty: "beginner"
time: "2 min read"
description: "DeepDom admite múltiples conexiones simultáneas con diferentes brókers y proveedores de datos."
keywords: ["cómo añadir una nueva conexión", "deepdom cómo añadir una nueva conexión", "deepdom", "cómo hacer"]
source_hash: "5131eae6b0b2f0bd"
ai_translated: true
source_hash: "5131eae6b0b2f0bd"
---
DeepDom admite múltiples conexiones simultáneas con diferentes brókers y proveedores de datos. Esta guía explica cómo crear una nueva conexión de fuente de datos desde el menú **Select a Connection** y cómo está estructurada la ventana Data Feed Settings (Configuración de la fuente de datos).

## Visión general del menú Feed

Utilice el elemento **Select a Connection** de la barra de menú de DeepDom para elegir con qué fuente de datos desea trabajar. Las conexiones con proveedores externos suministran cotizaciones de mercado, datos históricos y, en muchos casos, el enrutamiento de órdenes para el trading en vivo.

## Cómo abrir Data Feed Settings

[SCREENSHOT: Cómo añadir una nueva conexión — Cómo abrir Data Feed Settings (DeepDOM) | dd-es-how-to-add-a-new-connection-01.png]

1. En la barra de herramientas principal, abra el menú **Feed**.
2. Haga clic en **Settings** para abrir la ventana **Data Feed Settings**.

La ventana está dividida en dos columnas principales:

Lista de conexiones (Connection List): muestra todas las conexiones existentes.

Información de conexión (Connection Information): muestra los detalles de la conexión seleccionada o un formulario de acceso cuando la conexión aún no está configurada.

## Cómo añadir una nueva conexión

[SCREENSHOT: Cómo añadir una nueva conexión — Cómo añadir una nueva conexión (DeepDOM) | dd-es-how-to-add-a-new-connection-02.png]

Haga clic en **Add Connection** en la parte inferior de la ventana **Data Feed Settings**.

En el formulario de conexión, rellene los siguientes campos:

Nombre (Name): elija un nombre descriptivo para la conexión (por ejemplo, *Rithmic – Futuros*).

Fuente de datos (Data Source): seleccione el proveedor de datos o el bróker en la lista desplegable.

Credenciales (Credentials): introduzca el nombre de usuario y la contraseña proporcionados por su proveedor.

Conectar al iniciar (Connect on startup): marque esta opción si desea que DeepDom se conecte automáticamente a este flujo de datos al iniciarse la plataforma.

Cuando todos los datos sean correctos, haga clic en **Save** para almacenar la nueva conexión. DeepDom podrá utilizar estas credenciales para la reconexión automática y para futuras sesiones.

Después de añadir una nueva conexión, recuerde asociar correctamente los mercados y los símbolos a través de Options > Manage Symbols, para que sus gráficos reciban datos de la fuente prevista.

## Formulario de acceso de la conexión

El diseño del formulario de acceso puede variar según la integración seleccionada. Algunas conexiones solo requieren nombre de usuario y contraseña, mientras que otras pueden incluir opciones de configuración adicionales, como sistema, servidor, puerta de enlace o entorno (en vivo o demo). En todos los casos, utilice el botón **Save Settings** o **Save** para autenticarse y almacenar su configuración.

## ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre. Cuando se ponga en contacto, incluya:

Una captura de pantalla del problema.

Una breve descripción de lo que intentaba hacer.

Ticket de soporte (respuesta más rápida): visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico: también puede escribirnos a support@deepcharts.com. Tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.