---
title: "Problemas de caché"
slug: "cache-issues-deepdom"
category: "Common Issues"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "3 min read"
description: "Este artículo explica cómo resolver los errores de brecha de datos (Data Gap) en DeepDom borrando la base de datos de caché local."
keywords: ["problemas de caché", "problemas de caché deepdom", "deepdom", "problemas comunes"]
source_hash: "6893199321766511"
ai_translated: true
source_hash: "6893199321766511"
---
Este artículo explica cómo resolver los errores de brecha de datos (Data Gap) en DeepDom borrando la base de datos de caché local. Estos problemas suelen deberse a fallos de conexión, interrupciones de la plataforma o cierres abruptos que dejan datos incompletos en la caché. Seguir los pasos siguientes obliga a DeepDom a reconstruir su base de datos desde el proveedor de datos.

## Posibles causas de los errores de brecha de datos

Las razones más comunes son:

Pérdida de conexión con la fuente de datos mientras la plataforma está en funcionamiento.

Corte de energía, fallo del sistema operativo o reinicio forzado del ordenador.

Cierre repentino de DeepDom, como terminar el proceso o cerrar Windows antes de que la plataforma pueda terminar de escribir los datos.

En estos casos, algunos archivos en caché pueden quedar dañados o incompletos, y la solución más segura es eliminar la carpeta de caché para que DeepDom pueda recrearla desde cero en el siguiente inicio.

## Paso a paso: eliminar la carpeta de caché

[SCREENSHOT: Problemas de caché — Paso a paso: eliminar la carpeta de caché (DeepDOM) | dd-es-cache-issues-deepdom-01.png]

### 1. Abra la ruta de la carpeta de la base de datos

1. En DeepDom, vaya a Options > Settings > Various (Opciones > Configuración > Varios).
2. Localice el campo etiquetado como **Database Folder** (Carpeta de la base de datos).
3. Haga clic dentro del campo y copie la ruta completa que se muestra (por ejemplo, usando *Ctrl + C*).

### 2. Cierre de forma segura DeepDom y el flujo de datos

1. Desconecte el flujo de datos o la conexión de la fuente de datos dentro de DeepDom para que no se escriban datos nuevos.
2. Cierre todos los planes de trabajo (Work Plans) y gráficos abiertos.
3. Salga de DeepDom por completo, asegurándose de que la plataforma ya no se esté ejecutando en la barra de tareas ni en la bandeja del sistema.

### 3. Elimine la carpeta de la base de datos local

[SCREENSHOT: Problemas de caché — 3. Elimine la carpeta de la base de datos local (DeepDOM) | dd-es-cache-issues-deepdom-02.png]

1. Abra el Explorador de Windows (File Explorer).
2. Haga clic en la barra de direcciones y pegue la ruta de la **Database Folder** copiada previamente; luego pulse Enter.
3. Cuando se abra la carpeta, seleccione y elimine los archivos/símbolos dañados.
4. Confirme la eliminación en la papelera de reciclaje si Windows solicita permiso de administrador.

Eliminar estos archivos borra todos los datos en caché de DeepDom, lo que permite a la plataforma recrear una base de datos nueva la próxima vez que se inicie.

### 4. Reinicie DeepDom

1. Inicie DeepDom de nuevo.
2. Vuelva a conectar su flujo de datos o fuente de datos.
3. Abra sus planes de trabajo y gráficos habituales. DeepDom comenzará a descargar y reconstruir la base de datos desde el proveedor, completando el historial que faltaba y eliminando los errores de brecha de datos anteriores.

## Consejos adicionales

Para minimizar la posibilidad de futuros problemas de caché, desconecte siempre la fuente de datos y cierre DeepDom normalmente antes de apagar Windows. Evite terminar la aplicación desde el Administrador de tareas a menos que sea absolutamente necesario, y asegúrese de tener una conexión a Internet estable cuando ejecute sesiones largas o registre grandes cantidades de datos históricos.

## ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre. Cuando se ponga en contacto, incluya:

Una captura de pantalla del problema.

Una breve descripción de lo que intentaba hacer.

Ticket de soporte (respuesta más rápida): visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico: también puede escribirnos a support@deepcharts.com. Tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.