---
title: "Cómo instalar DeepCharts y activar su licencia"
slug: "install-deepcharts"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Descargue el instalador, instale DeepCharts, active su clave de licencia y complete el asistente de primer inicio."
keywords: ["instalar", "instalación", "configuración", "clave de licencia", "activación", "licencia inválida", "DeepchartsInstaller", "descargar deepcharts", "primera configuración"]
source_hash: "063b0288cd7a1b8f"
ai_translated: true
source_hash: "063b0288cd7a1b8f"
---
Al final tendrá DeepCharts instalado, su licencia activada y la plataforma lista para conectar una fuente de datos.

## Antes de empezar

- Confirme que su máquina cumple los [[system-requirements]].
- Tenga a mano el correo electrónico y la contraseña de su cuenta de my.deepcharts.com: tanto la descarga del instalador como su clave de licencia se encuentran en ese panel.
- Sepa de dónde procede su licencia: si la compró directamente, está en su cuenta de my.deepcharts.com; si la compró a través de una empresa prop, tanto el instalador como la licencia proceden del **panel de la empresa prop**.
- Opcional: credenciales de la fuente de datos si ya las tiene ([[buy-data-feed]]). Si no, la fuente gratuita con retraso funciona sin credenciales: consulte [[free-delayed-data-feed]].

## Pasos

1. Inicie sesión en su cuenta en my.deepcharts.com con su correo electrónico y contraseña.

[SCREENSHOT: Panel de my.deepcharts.com tras iniciar sesión con el área de descarga del instalador de DeepCharts visible | dc-es-install-deepcharts-01.png]

2. Descargue el archivo **DeepchartsInstaller.zip**.

3. Extraiga el archivo descargado (clic derecho → **Extract All** en el Explorador de Windows).

4. Deshabilite temporalmente su software antivirus.

> **Advertencia:** Este es el paso que más se omite y la causa número uno de instalaciones fallidas: los productos antivirus pueden poner en cuarentena componentes del instalador a mitad de la instalación. Vuelva a habilitar su antivirus en cuanto termine la instalación.

5. Ejecute **DeepchartsInstaller.exe**.

6. Acepte los términos y condiciones de instalación y haga clic en **Install**.

[SCREENSHOT: Ventana del instalador de DeepCharts en el paso de términos y condiciones con el botón Install visible | dc-es-install-deepcharts-02.png]

7. Reinicie su PC si el instalador se lo solicita.

8. Inicie DeepCharts desde el acceso directo del escritorio. Aparecerá una pantalla de bienvenida ("Starting Application", luego "Loading Indicators"); la versión de la aplicación se muestra en la esquina inferior derecha de la pantalla de bienvenida, algo útil de conocer al contactar con soporte.

[SCREENSHOT: Pantalla de bienvenida de DeepCharts mostrando el texto Starting Application y el número de versión en la esquina inferior derecha | dc-es-install-deepcharts-03.png]

9. En la ventana **License Key**, introduzca:
   - **E-mail** — el correo electrónico registrado en my.deepcharts.com
   - **License** — la clave de licencia alfanumérica que se muestra en su cuenta de my.deepcharts.com

   Luego haga clic en **Login**. El botón muestra una breve cuenta atrás mientras se verifica la clave.

[SCREENSHOT: Ventana de activación License Key con los campos E-mail y License rellenados, el botón Login y el pie Verifying License Key visible | dc-es-install-deepcharts-04.png]

> **Consejo:** Pegue el correo y la clave sin espacios al principio ni al final. Los espacios sobrantes del copiar y pegar son, con diferencia, la causa más común del error "Invalid License".

10. Complete el **Startup Wizard** (asistente de inicio) de tres pasos que se ejecuta en el primer inicio:
    - **Datafeed** — elija entre "I want to use 15 minutes delayed data powered by dxFeed for the moment" (usar datos con 15 minutos de retraso de dxFeed por ahora) y "I have a datafeed and I want to configure and connect it" (tengo una fuente de datos y quiero configurarla y conectarla).
    - **Symbol Manage** — revise la tabla de asignación de bolsas a fuentes (el asistente asigna previamente las bolsas principales por usted). Es la misma ventana que **Options → Symbol Manage**: consulte [[symbol-manage]].
    - **Customize experience** — elija un **Theme** (tema) y un **Alert sound profile** (perfil de sonido de alertas) y haga clic en **Done**.

[SCREENSHOT: Paso de fuente de datos del Startup Wizard mostrando las dos opciones de radio: 15 minutes delayed data powered by dxFeed, y I have a datafeed and I want to configure and connect it | dc-es-install-deepcharts-05.png]

### Si todavía no tiene credenciales de fuente de datos

Elija la opción de datos con retraso en el asistente: no necesita nombre de usuario, contraseña ni acuerdo de datos de mercado. Guía completa: [[free-delayed-data-feed]].

### Si ya tiene credenciales de fuente

Elija "I have a datafeed and I want to configure and connect it" e introduzca sus datos de conexión: un **Name** (nombre) para la conexión, el **Feed Source** (su proveedor) y su **Username** y **Password** del proveedor de datos. Guarde y espere a que el indicador de conexión se ponga verde. La ventana interactiva Feed Settings de abajo muestra esos mismos campos: cambie el menú desplegable Feed Source para ver qué pide cada proveedor. Detalles por proveedor: [[connect-data-feed]] y [[compatibility-guide]].

[WIDGET: feed-navigator]

### Si su licencia procede de una empresa prop

Descargue el archivo de instalación desde el panel de su empresa prop, no desde my.deepcharts.com, y active con los datos de licencia que la empresa prop le entregó.

### Si está actualizando una instalación existente

Descargue el instalador más reciente desde el panel y ejecútelo: no es necesario desinstalar antes. Actualiza la instalación existente en el mismo lugar y conserva su configuración.

> **Nota:** Las versiones BETA y STABLE no pueden instalarse juntas en un mismo PC: es una o la otra.

## Verifique que funcionó

- DeepCharts se abre en la barra principal sin volver a pedir la licencia.
- El selector **Feed** de la barra principal muestra el nombre de su conexión con un punto de estado **verde** (si configuró una fuente).
- **New → Price Chart** abre el selector de instrumentos y se construye un gráfico: consulte [[first-chart]].

[SCREENSHOT: Barra principal tras una configuración correcta con el selector Feed mostrando un nombre de conexión y un punto de estado verde | dc-es-install-deepcharts-06.png]

## Si algo salió mal

| Síntoma | Adónde ir |
|---|---|
| El instalador no se ejecuta, desaparece o la instalación falla | La interferencia del antivirus es la causa habitual: consulte [[installation-problems]] |
| Mensaje "Installation Setup Failed" | [[installation-setup-failed]] |
| Una política de la empresa impide que la aplicación se ejecute | [[application-control-policy]] |
| "Invalid License" al activar | Vuelva a pegar el correo y la clave sin espacios; si persiste, consulte [[license-issues]] |
| La conexión de la fuente nunca se pone verde | [[connect-data-feed]], luego [[fix-username-password]] |
| El gráfico se abre pero nada se mueve | [[feed-connected-chart-not-moving]] |

## Artículos relacionados

- [[system-requirements]]
- [[quick-start-first-trade]]
- [[free-delayed-data-feed]]
- [[connect-data-feed]]
- [[first-chart]]
- [[move-to-new-computer]]