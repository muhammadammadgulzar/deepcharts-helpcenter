---
title: "Cómo gestionar el rollover de símbolos"
slug: "how-to-manage-symbol-rollover"
category: "How To"
subcategory: ""
type: "how-to"
difficulty: "beginner"
time: "2 min read"
description: "Este artículo explica qué es el rollover (cambio de contrato) de futuros y cómo gestionar el rollover de símbolos en DeepDom para que sus gráficos y herramientas siempre hagan referencia al vencimiento correcto."
keywords: ["cómo gestionar el rollover de símbolos", "deepdom cómo gestionar el rollover de símbolos", "deepdom", "cómo hacer"]
source_hash: "891cdba0b91d2342"
ai_translated: true
source_hash: "891cdba0b91d2342"
---
Este artículo explica qué es el rollover (cambio de contrato) de futuros y cómo gestionar el rollover de símbolos en DeepDom para que sus gráficos y herramientas siempre hagan referencia al vencimiento correcto.

## ¿Qué es el rollover?

En los mercados de futuros, el rollover es el proceso de transferir una posición abierta de un contrato próximo a vencer a un contrato con una fecha de vencimiento posterior. Los traders trasladan sus posiciones para evitar la liquidación automática o la entrega que se produce al vencimiento.

### Rollover técnico

El rollover técnico se produce en la fecha oficial de vencimiento definida por la bolsa, o muy cerca de ella. Está vinculado al último día de negociación del contrato.

### Rollover por volumen

El rollover por volumen ocurre antes, cuando el volumen de negociación del siguiente contrato supera el volumen del contrato próximo a vencer. Muchos traders cambian en ese momento para beneficiarse de una mejor liquidez y de diferenciales más ajustados.

## Procedimiento para realizar el rollover en DeepDom

[SCREENSHOT: Cómo gestionar el rollover de símbolos — Procedimiento para realizar el rollover en DeepDom (DeepDOM) | dd-es-how-to-manage-symbol-rollover-01.png]

Vaya a Options > Symbol Rollover.

Realice el rollover solo para los mercados resaltados en la ventana **Symbol Rollover**

[SCREENSHOT: Cómo gestionar el rollover de símbolos — Procedimiento para realizar el rollover en DeepDom (DeepDOM) | dd-es-how-to-manage-symbol-rollover-02.png]

Ejecute el rollover para todos los mercados relacionados, incluidos los contratos menores como **MINI** y **MICRO**.

Si un contrato MICRO no aparece automáticamente en la lista, abra un mapa de calor u otra ventana de DeepDom para ese instrumento y vuelva a comprobar la ventana **Symbol Rollover**.

Después de estos pasos, el vencimiento del contrato utilizado por DeepDom para los símbolos seleccionados se actualiza correctamente.

### Cómo restaurar un vencimiento anterior

[SCREENSHOT: Cómo gestionar el rollover de símbolos — Cómo restaurar un vencimiento anterior (DeepDOM) | dd-es-how-to-manage-symbol-rollover-03.png]

Desconecte su fuente de datos y cierre el espacio de trabajo

Vaya a Options > Symbol Management.

Haga clic en **Expert Mode**.

[SCREENSHOT: Cómo gestionar el rollover de símbolos — Cómo restaurar un vencimiento anterior (DeepDOM) | dd-es-how-to-manage-symbol-rollover-04.png]

En la lista de símbolos (Symbol List, columna central), localice los mercados con el vencimiento incorrecto (MAJOR, MINI, MICRO).

[SCREENSHOT: Cómo gestionar el rollover de símbolos — Cómo restaurar un vencimiento anterior (DeepDOM) | dd-es-how-to-manage-symbol-rollover-05.png]

Seleccione el instrumento con el vencimiento incorrecto y haga clic en **Modify**.

En la sección **Advanced**, vuelva a cambiar el mes de vencimiento al contrato anterior.

Cierre la ventana **Symbol Management**.

Reinicie DeepDom sin conectar ningún flujo de datos.

Cuando vuelva a conectar las fuentes de datos después del reinicio, DeepDom utilizará el mes de vencimiento restaurado para esos símbolos.

### ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre. Cuando se ponga en contacto, incluya:

Una captura de pantalla del problema.

Una breve descripción de lo que intentaba hacer.

Ticket de soporte (respuesta más rápida): visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico: también puede escribirnos a support@deepcharts.com. Tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.