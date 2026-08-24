---
title: "Problemas de instalación"
slug: "installation-issues"
category: "Common Issues"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "3 min read"
description: "Este artículo ofrece pasos de solución de problemas si encuentra errores al instalar la versión de escritorio de DeepDom."
keywords: ["problemas de instalación", "problemas de instalación deepdom", "deepdom", "problemas comunes"]
source_hash: "9cc661490a5fa06b"
ai_translated: true
source_hash: "9cc661490a5fa06b"
---
Este artículo ofrece pasos de solución de problemas si encuentra errores al instalar la versión de escritorio de DeepDom. La mayoría de los problemas de instalación están relacionados con requisitos del sistema no cumplidos, software de seguridad que bloquea el instalador o el uso de un paquete de instalación desactualizado. Siga la lista de comprobación siguiente antes de abrir un ticket de soporte.

## Compruebe los requisitos mínimos del sistema

Antes de instalar DeepDom, asegúrese de que su PC cumple los requisitos mínimos de hardware y software especificados en la página de descarga. Si el equipo no satisface estos requisitos, la plataforma puede fallar durante la instalación o no funcionar correctamente después de instalarse.

## Solución de problemas paso a paso

### Deshabilite temporalmente el antivirus de terceros

Algunos productos antivirus pueden bloquear el instalador de DeepDom o poner en cuarentena archivos esenciales durante la instalación. Para evitarlo, puede:

Deshabilitar temporalmente todos los antivirus y suites de seguridad de terceros mientras instala DeepDom, dejando activo solo Windows Defender, o

Añadir una excepción para la carpeta de instalación de DeepDom en la configuración de su antivirus.

La ruta de instalación predeterminada suele ser:

C:\Program Files\Volumetric Trading

Asegúrese de que esta carpeta (y cualquier subcarpeta utilizada por DeepDom) sea plenamente de confianza para su software de seguridad.

### 2. Confirme .NET Framework 4.8 o posterior

DeepDom requiere .NET Framework 4.8 o posterior para funcionar. En la mayoría de las versiones modernas de Windows este componente viene preinstalado o está disponible como característica opcional de Windows. Si el framework requerido falta o está dañado, el instalador puede detenerse con un error genérico.

Abra Apps > Optional features (Aplicaciones > Características opcionales) o Turn Windows features on or off (Activar o desactivar las características de Windows) y verifique que .NET 4.8 (o una versión posterior) esté habilitado. Si no lo está, instale o repare el framework y luego ejecute de nuevo el instalador de DeepDom.

### 3. Verifique el espacio libre en el disco local (C:)

Asegúrese de que hay suficiente espacio libre en su disco local (C:) para almacenar los archivos de la aplicación DeepDom, los registros y la caché. Un espacio en disco insuficiente puede provocar instalaciones incompletas o errores inesperados al escribir archivos.

Como pauta, mantenga varios gigabytes de espacio libre disponibles en la unidad C: antes de iniciar la instalación, especialmente si planea grabar grandes cantidades de datos de mercado.

### 4. Utilice el instalador de DeepDom más reciente

Descargue siempre la versión más reciente de DeepDom desde el sitio oficial. El número de versión actual se muestra junto al botón de descarga. Si intenta instalar un paquete desactualizado, puede fallar en versiones más recientes de Windows o carecer de correcciones críticas.

Si todavía tiene un instalador antiguo en su equipo, elimínelo y descargue el archivo de instalación más reciente antes de volver a intentarlo.

### 5. Realice una reinstalación limpia

Si DeepDom estaba instalado previamente y ahora falla al actualizarse o reinstalarse, pruebe una instalación limpia:

Desinstale DeepDom desde Apps > Installed apps (Aplicaciones > Aplicaciones instaladas) (o Programs and Features en versiones antiguas de Windows).

Compruebe manualmente que la carpeta de instalación principal en C:\Program Files\Volumetric Trading se ha eliminado. Si no es así, borre cualquier archivo restante de DeepDom.

Reinicie Windows para liberar cualquier archivo bloqueado.

Ejecute de nuevo el instalador de DeepDom más reciente con el antivirus deshabilitado o con las excepciones adecuadas configuradas.

## ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre. Cuando se ponga en contacto, incluya:

Una captura de pantalla del problema.

Una breve descripción de lo que intentaba hacer.

Ticket de soporte (respuesta más rápida): visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico: también puede escribirnos a support@deepcharts.com. Tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.