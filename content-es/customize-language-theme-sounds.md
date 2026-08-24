---
title: "Personalice el idioma, el tema y los sonidos de notificación"
slug: "customize-language-theme-sounds"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Cambie el idioma de la interfaz de DeepCharts, la zona horaria, el tema de color y la voz de las notificaciones de alerta desde la configuración general."
keywords: ["cambiar idioma", "configuración de idioma", "modo oscuro", "tema claro", "apariencia de la plataforma", "zona horaria", "sonidos de notificación", "voz de alerta", "configuración deepchart", "configuración deepcharts"]
source_hash: "38f8f0c4c1c1d041"
ai_translated: true
source_hash: "38f8f0c4c1c1d041"
---
Al final de esta guía tendrá DeepCharts funcionando en su idioma, zona horaria, tema de color y voz de notificación de alertas preferidos. Las cuatro configuraciones viven en un solo lugar, la sección **General** de la ventana de configuración, así que se trata de un único recorrido corto por los menús.

Puede que ya haya elegido un tema y un perfil de sonido de alertas en el Startup Wizard (asistente de inicio) en el primer arranque. Todo lo que el asistente configuró puede cambiarse de nuevo en cualquier momento con los pasos siguientes.

## Antes de empezar

- [[install-deepcharts|DeepCharts está instalado y su licencia está activada]]
- No se requiere conexión a una fuente de datos: son configuraciones locales de la plataforma
- Prepárese para reiniciar DeepCharts: los cambios de idioma y zona horaria solo se aplican tras un reinicio

## Pasos

1. En la barra de menú principal, haga clic en **Options**.

   [SCREENSHOT: Barra de menú principal de DeepCharts con el menú Options abierto, mostrando el elemento Settings a punto de ser pulsado | options-menu-settings.png]

2. Seleccione **Settings**. Se abrirá la ventana **General Settings** (configuración general). Asegúrese de que la pestaña **General** esté seleccionada (las otras pestañas son **Toolbar**, **Alert**, **Sim Account**, **Trading Quantity** y **Shortcuts**).

   [SCREENSHOT: Ventana General Settings en la pestaña General, con las configuraciones Language, Time Zone, Theme y Notification Sounds visibles en la parte superior | general-settings-general-tab.png]

3. Cambie cualquiera de las configuraciones siguientes y luego continúe con el paso 4.

   ### Si quiere cambiar el idioma

   Abra el menú desplegable **Language** y elija uno de los cinco idiomas de interfaz disponibles: **English**, **Italian**, **Spanish**, **German** o **Chinese**.

   [SCREENSHOT: Ventana General Settings con el menú desplegable Language abierto, mostrando las cinco entradas: English, Italian, Spanish, German, Chinese | general-settings-language-dropdown.png]

   > **Nota:** La plataforma admite cinco idiomas, pero el panel de cuenta de my.deepcharts.com actualmente solo admite inglés e italiano. Cambiar el idioma de la plataforma no cambia el panel.

   ### Si quiere cambiar la zona horaria

   Abra el menú desplegable **Time Zone** y elija su zona horaria de la lista. Esto controla cómo se muestran las horas en los gráficos. Al igual que el idioma, el cambio necesita un reinicio para aplicarse: si el eje de tiempo de su gráfico se ve sin cambios justo después de guardar, es lo esperado.

   ### Si quiere cambiar el tema

   Abra el menú desplegable **Theme: Platform Appearance** y elija uno de los seis temas: **Dark**, **Dark (Standard)**, **Blue**, **Light**, **Light (Standard)** o **Purple**.

   [SCREENSHOT: Ventana General Settings con el menú desplegable Theme abierto listando Dark, Dark (Standard), Blue, Light, Light (Standard), Purple | general-settings-theme-dropdown.png]

   ### Si quiere cambiar la voz de notificación

   Bajo **Notification Sounds**, elija el perfil de voz utilizado para las notificaciones de alerta. Las opciones disponibles son **Female - Emily**, **Female - Daniela**, **Male** y **Warzone**.

   [SCREENSHOT: Ventana General Settings mostrando la configuración Notification Sounds con sus cuatro opciones: Female - Emily, Female - Daniela, Male, Warzone | general-settings-notification-sounds.png]

   > **Consejo:** Esta configuración elige la voz de las notificaciones. Los archivos de sonido personalizados para alertas de indicadores y herramientas de dibujo se gestionan por separado en la pestaña **Alert** de la misma ventana (añada archivos .wav o .mp3 allí), y el sonido de ejecución de órdenes se habilita en **Options → Alerts → Trading Sounds**.

4. Haga clic en **Save Settings** en la parte inferior de la ventana.

   [SCREENSHOT: Parte inferior de la ventana General Settings con los botones Cancel y Save Settings, con Save Settings resaltado | general-settings-save-button.png]

5. Cierre y vuelva a abrir DeepCharts si cambió el idioma o la zona horaria. Ambos requieren un reinicio para tener efecto.

## Verifique que funcionó

- **Idioma**: tras el reinicio, los menús (por ejemplo **Options** y sus entradas) se muestran en el idioma que seleccionó.
- **Zona horaria**: tras el reinicio, el eje de tiempo de un gráfico abierto muestra las horas en la zona que seleccionó.
- **Tema**: los colores de la plataforma coinciden con el tema que eligió.
- **Voz de notificación**: la siguiente alerta que se dispare usa el perfil de voz que seleccionó.

## Si algo salió mal

- **El idioma o la zona horaria del gráfico no cambió**: las dos causas más comunes son hacer clic en el botón de cierre de la ventana en lugar de **Save Settings**, y no reiniciar la aplicación. Repita los pasos, guarde y luego reinicie.
- **El panel de my.deepcharts.com sigue en inglés**: es lo esperado. El panel solo admite inglés e italiano y se configura de forma independiente de la plataforma.
- **Una alerta de indicador no reproduce ningún sonido**: la voz de notificación no es el problema. Las alertas de indicadores y herramientas de dibujo usan archivos de sonido de **Options → Settings → Alert**; si no se añadieron sonidos allí, la lista de sonidos dentro de la configuración de alertas del indicador está vacía.
- **No hay sonido cuando se ejecuta una orden**: habilite **Options → Alerts → Trading Sounds**.

## Artículos relacionados

- [[keyboard-shortcuts]]
- [[keyboard-shortcuts-reference]]
- [[templates-workspaces]]
- [[chart-display-options]]
- [[welcome-to-deepcharts]]