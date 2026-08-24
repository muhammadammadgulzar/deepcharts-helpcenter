---
title: "Solución: problemas de licencia y activación"
slug: "license-issues"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Solucione errores de Invalid License y de validación de licencia en DeepCharts: credenciales, suscripciones vencidas, varios dispositivos y bloqueos del archivo hosts."
keywords: ["licencia inválida", "clave de licencia no funciona", "validación de licencia", "activación fallida", "código de licencia", "no puedo activar", "error de licencia", "suscripción vencida"]
source_hash: "4fb67f80075dd42e"
ai_translated: true
source_hash: "4fb67f80075dd42e"
---
DeepCharts se activa con dos valores: el correo electrónico registrado en my.deepcharts.com y la clave de licencia alfanumérica que se muestra en esa cuenta. Cuando la activación falla, con un mensaje "Invalid License", un inicio de sesión rechazado o errores de validación durante una sesión, la causa es casi siempre una de estas cuatro: un error de escritura en las credenciales, una suscripción vencida, la plataforma ejecutándose en más de un dispositivo o (raramente) un bloqueo a nivel de sistema de la conexión con el servidor de licencias. Revíselas en ese orden.

> **Nota:** Si compró su licencia a través de una empresa prop, tanto el instalador como los datos de la licencia provienen del panel de la empresa prop, no de my.deepcharts.com. Asegúrese de usar las credenciales del lugar correcto.

## Síntoma

- La ventana **License Key** rechaza su correo electrónico y su clave de licencia al iniciar, normalmente con un error "Invalid License".
- DeepCharts vuelve a pedir la licencia después de haber funcionado antes.
- Aparecen errores de validación de licencia mientras la plataforma está en ejecución.

[SCREENSHOT: Ventana de activación License Key de DeepCharts con los campos E-mail y License visibles y un estado de error Invalid License mostrado | dc-es-license-issues-01.png]

## Causa más probable

Espacios sobrantes en las credenciales pegadas. Al copiar y pegar el correo electrónico o la clave de licencia a menudo se arrastra un espacio al principio o al final, y la comprobación de licencia lo rechaza.

## Solución rápida

1. Inicie sesión en su cuenta de my.deepcharts.com (o en el panel de su empresa prop) y localice su correo electrónico registrado exacto y su clave de licencia.

[SCREENSHOT: Panel de cuenta de my.deepcharts.com con la sección de clave de licencia visible, clave parcialmente difuminada | dc-es-license-issues-02.png]

2. Copie cada valor y péguelo en la ventana **License Key**. Copie y pegue en lugar de escribir a mano, pero compruebe que no se haya arrastrado ningún espacio al principio o al final de ninguno de los campos.
3. Haga clic en **Login** y espere mientras se verifica la clave.

> **Consejo:** Si al pegar sigue fallando, pegue primero el valor en un editor de texto sin formato, elimine los espacios circundantes y vuelva a copiarlo.

## Si eso no funcionó

### Causa: su suscripción ha vencido

La validación de la licencia falla cuando la suscripción que la respalda ya no está activa.

1. Inicie sesión en my.deepcharts.com y compruebe que su suscripción a DeepCharts sigue siendo válida.
2. Si ha vencido, renuévela y luego active de nuevo. Consulte [[manage-subscriptions]].

### Causa: DeepCharts se está ejecutando en más de un dispositivo

La plataforma solo debe ejecutarse en un dispositivo a la vez. Ejecutarla en varias máquinas simultáneamente con la misma licencia puede causar problemas de validación de licencia.

1. Cierre DeepCharts en cualquier otro ordenador donde aún pueda estar en ejecución (incluidas máquinas encendidas en otra ubicación).
2. Active de nuevo en la máquina que desea usar.

¿Se muda permanentemente a una máquina nueva? Siga [[move-to-new-computer]].

### Causa: el archivo hosts está bloqueando el servidor de licencias

El archivo hosts de Windows (`C:\Windows\System32\drivers\etc\hosts`) asocia nombres de dominio con direcciones IP. Una entrada añadida por software de seguridad, un bloqueador de anuncios o una edición manual anterior puede impedir que DeepCharts alcance el servidor de licencias, de modo que la activación falla incluso con credenciales correctas.

> **Advertencia:** El archivo hosts es un archivo del sistema: una edición incorrecta puede romper la conectividad de otras aplicaciones. Revise la documentación sobre cómo editar el archivo hosts en su versión de Windows antes de modificarlo, o pida a soporte que le guíe.

1. Abra el archivo hosts y busque cualquier entrada que haga referencia a un dominio de DeepCharts.
2. Elimine o comente esas entradas, guarde el archivo e intente activar de nuevo.

## Sigue atascado

Genere un [[diagnostic-report]] (captura información de conectividad de red que ayuda a soporte a ver si el servidor de licencias es accesible desde su máquina) y luego contacte con soporte a través de [[get-help]] con el texto exacto del error y una captura de pantalla de la ventana License Key.

## Cómo prevenirlo

- Active siguiendo [[install-deepcharts]], que le guía paso a paso por la ventana de licencia.
- Mantenga DeepCharts instalado y en ejecución en una sola máquina a la vez; use [[move-to-new-computer]] cuando cambie de hardware.
- Tenga presente la fecha de renovación de su suscripción: consulte [[manage-subscriptions]].

## Artículos relacionados

- [[install-deepcharts]]
- [[manage-subscriptions]]
- [[move-to-new-computer]]
- [[diagnostic-report]]
- [[get-help]]