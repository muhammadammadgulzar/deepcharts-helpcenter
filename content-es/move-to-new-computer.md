---
title: "Mover DeepCharts a un ordenador nuevo"
slug: "move-to-new-computer"
category: "Account & Billing"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "30 min to complete"
description: "Migre DeepCharts a un PC nuevo: haga copia de seguridad de espacios de trabajo y plantillas, reinstale y active la licencia, reconecte su fuente de datos y restaure su diseño."
keywords: ["ordenador nuevo", "pc nuevo", "transferir licencia", "mover licencia", "migrar deepcharts", "reinstalar en otra máquina", "cambiar de ordenador", "copiar espacios de trabajo a un pc nuevo", "transferir configuración", "segundo ordenador"]
source_hash: "6d058399e1fa2c4b"
ai_translated: true
source_hash: "6d058399e1fa2c4b"
---
Al terminar tendrá DeepCharts funcionando en su ordenador nuevo, con su licencia activada, su fuente de datos conectada y sus espacios de trabajo y plantillas guardados restaurados.

Una migración tiene dos mitades: lo que sigue a su cuenta automáticamente (su licencia, los espacios de trabajo y plantillas guardados en la nube, su suscripción de datos) y lo que vive solo en la máquina antigua (espacios de trabajo y plantillas guardados localmente, credenciales de la fuente de datos introducidas en la aplicación, el mapeo de Symbol Manage y la base de datos local de datos de mercado). Los pasos siguientes garantizan que nada del segundo grupo se quede atrás.

## Antes de empezar

- Tenga a mano su inicio de sesión de my.deepcharts.com y su clave de licencia: vea [[install-deepcharts]] para saber dónde está la clave
- Su nombre de usuario y contraseña de la fuente de datos: desde la página Subscriptions de my.deepcharts.com, o del correo de bienvenida de su bróker o empresa prop ([[buy-data-feed]])
- La máquina nueva cumple los [[system-requirements]]
- Ambas máquinas disponibles durante un rato, para poder copiar todo lo que la antigua aún conserve
- Opcional pero recomendado: lea en qué se diferencian el almacenamiento Local y en la nube en [[templates-workspaces]]

> **Nota:** Su licencia permite la instalación en hasta 5 dispositivos, pero la cuenta puede estar activa en un dispositivo a la vez. [CONFIRM: whether the old machine must be deactivated first, or whether activating the new machine is enough]

## Pasos

### Parte 1: Copia de seguridad en el ordenador antiguo

1. Abra DeepCharts en la máquina antigua y guarde su diseño actual como **Workspace** (espacio de trabajo), eligiendo **Cloud** como destino. Los guardados en la nube están vinculados a su cuenta y licencia, por lo que aparecen automáticamente en cualquier máquina que ejecute la misma licencia: la vía de migración más sencilla. Haga lo mismo con cualquier **Template** (plantilla) de gráfico que quiera conservar (clic derecho en el gráfico → **Template → Save As** → **Cloud**). Guía completa: [[templates-workspaces]].

[SCREENSHOT: Cuadro de diálogo de guardado de espacio de trabajo con el destino Cloud seleccionado y un nombre de espacio de trabajo introducido, ilustrando una copia de seguridad en la nube antes de la migración | dc-es-move-to-new-computer-01.png]

2. Si prefiere copias de archivos (o no tiene guardados en la nube), copie las carpetas **Template** y **Workspace** desde **Documents → deepchart** del PC antiguo a una unidad USB o a una unidad en la nube. Estas carpetas contienen todas las plantillas y espacios de trabajo guardados localmente.

[SCREENSHOT: Explorador de Windows mostrando la carpeta Documents\deepchart con las subcarpetas Template y Workspace resaltadas para copiar | dc-es-move-to-new-computer-02.png]

> **Advertencia:** DeepCharts no guarda automáticamente los diseños. Todo lo que configuró pero nunca guardó como Workspace o Template no existe en ningún sitio y no puede migrarse: guárdelo ahora, antes de tocar la instalación antigua.

3. Confirme que puede recuperar las credenciales de su fuente de datos. Los nombres de usuario y contraseñas de la fuente nunca se migran con la aplicación: tendrá que volver a introducirlos en la máquina nueva. Las fuentes compradas en el sitio web las muestran en la página **Subscriptions** de my.deepcharts.com ([[manage-subscriptions]]); las credenciales de brókeres y empresas prop provienen de ese proveedor.

4. Cierre DeepCharts en la máquina antigua y déjelo cerrado. Ejecutar la plataforma en ambas máquinas al mismo tiempo puede causar problemas de validación de licencia: vea [[license-issues]].

### Parte 2: Configurar el ordenador nuevo

5. Inicie sesión en my.deepcharts.com en la máquina nueva y descargue el instalador más reciente. Si su licencia proviene de una **empresa prop**, descargue el instalador y los detalles de la licencia desde el panel de la empresa prop en su lugar.

6. Instale y active, siguiendo [[install-deepcharts]]: deshabilite temporalmente el antivirus durante la instalación, ejecute el instalador y luego active con su correo electrónico registrado y su clave de licencia (pegue ambos sin espacios al principio ni al final).

[SCREENSHOT: Ventana de activación License Key en el PC nuevo con los campos E-mail y License rellenados y el botón Login visible | dc-es-move-to-new-computer-03.png]

7. Reconecte su fuente de datos. Abra **Feed Settings**, cree la conexión para su proveedor e introduzca el nombre de usuario y la contraseña que recopiló en el paso 3: las credenciales siempre deben reintroducirse en una instalación nueva. Pruébelo en la ventana Feed Settings de abajo: elija su fuente y observe cómo los campos cambian según el proveedor. Pasos específicos por proveedor: [[connect-data-feed]].

[WIDGET: feed-navigator]

> **Nota:** Su acuerdo de datos de mercado está vinculado a su cuenta de la fuente, no al ordenador: no necesita firmarlo de nuevo por un cambio de máquina. Si aun así la conexión es rechazada, vea [[fix-username-password]].

8. Mapee sus bolsas a la nueva conexión en **Options → Symbol Manage**, del mismo modo que lo hizo el asistente de primer arranque en la máquina antigua: vea [[symbol-manage]]. Practique el mapeo en la simulación de abajo: haga clic en el eslabón de cadena para alternar a qué fuente está mapeada una bolsa. Si carga un espacio de trabajo de la nube en el paso siguiente, compruebe el mapeo de todos modos: la conexión de la fuente forma parte de la instalación nueva, no del espacio de trabajo.

[WIDGET: symbol-manage-mock]

9. Restaure su diseño: abra el selector de **Workspace**, elija la opción de carga y seleccione su espacio de trabajo en la pestaña **Cloud**. Si en cambio hizo copia de archivos, cópielos primero en **Documents → deepchart → Workspace** y **Template** en el PC nuevo, y luego cargue desde la pestaña **Local**.

[SCREENSHOT: Selector de archivos de espacio de trabajo en el PC nuevo con la pestaña Cloud seleccionada y el espacio de trabajo migrado visible en la lista | dc-es-move-to-new-computer-04.png]

### Si quiere mover su base de datos de datos de mercado (opcional)

Los datos históricos de los gráficos se almacenan en una base de datos local y se vuelven a descargar automáticamente en la máquina nueva a medida que abre gráficos, así que la mayoría de los usuarios omite este paso. Si tiene una base de datos grande que prefiere no volver a descargar, la ubicación de la base de datos es configurable en **Options → Settings → General**, en la sección **Various** (**Database folder**). Puede copiar la carpeta de la base de datos de la máquina antigua a la nueva y apuntar esta opción hacia ella. El comportamiento exacto al intercambiar carpetas de base de datos entre instalaciones puede variar: si la base de datos copiada se comporta mal, límpiela y deje que la plataforma vuelva a descargar ([[download-data]]).

[SCREENSHOT: Options → Settings → General con la sección Various visible y la opción de ubicación Database folder resaltada | dc-es-move-to-new-computer-05.png]

## Verifique que funcionó

- DeepCharts arranca en la máquina nueva sin volver a pedir la licencia.
- El selector **Feed** muestra su conexión con un punto verde.
- Al cargar su espacio de trabajo se restauran todos los gráficos y ventanas, y los gráficos se llenan de datos (el historial nuevo puede tardar un momento en descargarse: el progreso es visible en **Options → Show Log → Connection Logs**).

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| "Invalid License" en la máquina nueva | Vuelva a pegar el correo y la clave sin espacios; cierre DeepCharts en el PC antiguo; vea [[license-issues]] |
| La conexión de la fuente sigue en rojo | [[fix-username-password]], luego [[fix-unable-to-establish-connection]] |
| La pestaña Cloud no muestra espacios de trabajo | Se guardaron localmente en el PC antiguo: copie las carpetas de **Documents → deepchart**, vea [[templates-workspaces]] |
| Los gráficos se abren pero permanecen vacíos | Compruebe el mapeo de Symbol Manage ([[symbol-manage]]), luego [[feed-connected-chart-not-moving]] |
| Datos históricos ausentes o incompletos | Deje que se vuelvan a descargar, o fuércelo con [[download-data]] |

## Artículos relacionados

- [[install-deepcharts]]
- [[templates-workspaces]]
- [[connect-data-feed]]
- [[symbol-manage]]
- [[manage-subscriptions]]
- [[license-issues]]