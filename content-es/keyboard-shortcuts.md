---
title: "Cómo configurar atajos de teclado"
slug: "keyboard-shortcuts"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Asigne, cambie o elimine atajos de teclado para acciones de la plataforma y del gráfico desde la pestaña Shortcuts en la configuración de DeepCharts."
keywords: ["atajos de teclado", "teclas rápidas", "combinaciones de teclas", "teclas de atajo", "reasignar teclas", "configurar atajos", "hotkeys", "atajos teclado"]
source_hash: "be9d87024052a03e"
ai_translated: true
source_hash: "be9d87024052a03e"
---
Al final de esta guía tendrá su propio atajo de teclado asignado a una acción de DeepCharts, y sabrá cómo cambiar o eliminar cualquiera de los existentes. Todos los atajos de DeepCharts son reasignables, así que si una combinación predeterminada choca con la memoria muscular de otra plataforma, puede corregirlo aquí en menos de un minuto.

## Antes de empezar

- [[install-deepcharts|DeepCharts está instalado y en ejecución]]
- Revise primero los [[keyboard-shortcuts-reference|atajos predeterminados]]: la acción que busca puede tener ya una combinación que puede simplemente aprender en lugar de reasignar

## Pasos

1. En la barra de menú principal, haga clic en **Options**, luego seleccione **Settings**. Se abrirá la ventana **General Settings** (Configuración general).

2. Cambie a la pestaña **Shortcuts** (Atajos).

   [SCREENSHOT: Ventana General Settings en la pestaña Shortcuts mostrando la tabla de atajos con las columnas Category, Type, Description y Combination y los botones Delete y Register por fila | shortcuts-tab-overview.png]

3. Busque la acción deseada en la tabla. Cada fila tiene cuatro columnas que le ayudan a localizarla:

   | Columna | Qué muestra |
   |---|---|
   | **Category** | **General** (funciones de toda la plataforma) o **Chart** (funciones del gráfico) |
   | **Type** | El tipo de acción: **Action**, **Control**, **Drawing and Annotation**, **Scroll** o **Trading** |
   | **Description** | Qué hace el atajo |
   | **Combination** | La combinación de teclas asignada actualmente |

4. Haga clic en **Register** en esa fila. La fila ahora está grabando.

   [SCREENSHOT: Una sola fila de la tabla de atajos con el botón Register resaltado, lista para grabar una nueva combinación de teclas | shortcuts-register-button.png]

5. Pulse la combinación de teclas que desea asignar (por ejemplo Ctrl Alt D). La combinación aparecerá en la columna **Combination** de la fila.

6. Haga clic en **Save Settings** en la parte inferior de la ventana. El nuevo atajo ya está activo: no es necesario reiniciar.

   [SCREENSHOT: Pestaña Shortcuts con una combinación recién grabada visible en la columna Combination y el botón Save Settings resaltado en la parte inferior | shortcuts-save-settings.png]

   ### Si desea eliminar un atajo

   1. Haga clic en **Delete** en la fila del atajo que desea eliminar. La combinación guardada se borrará.
   2. Haga clic en **Save Settings**.

   ### Si desea reemplazar un atajo existente

   1. Haga clic en **Register** en la fila y pulse la nueva combinación: no necesita eliminar la anterior primero.
   2. Haga clic en **Save Settings**.

## Verifique que funcionó

Pulse su nueva combinación en el contexto al que pertenece. Para un atajo de la categoría **Chart**, haga clic primero en una ventana de gráfico para que tenga el foco y luego pulse las teclas: por ejemplo, una combinación asignada a **Indicators** debería abrir el administrador de indicadores del gráfico. Un atajo de la categoría **General** debería funcionar en cualquier parte de la plataforma.

## Si algo salió mal

- **El atajo no hace nada**: la causa más común es omitir **Save Settings** después de registrar. Vuelva a abrir **Options → Settings → Shortcuts** y compruebe la columna **Combination**: si su combinación no aparece en la fila, regístrela de nuevo y guarde.
- **Un atajo de Chart no hace nada**: asegúrese de que una ventana de gráfico tenga el foco cuando pulse las teclas. Los atajos de la categoría Chart operan sobre gráficos, no sobre la plataforma en su conjunto.
- **Las teclas activan la acción equivocada**: revise la columna **Combination** en busca de la misma combinación asignada a más de una fila. Elimínela de la fila que no desea, elija una combinación diferente para una de ellas y guarde.
- **No recuerda qué cambió**: la referencia [[keyboard-shortcuts-reference]] lista las combinaciones predeterminadas, de modo que puede comparar su tabla con ella y volver a registrar lo que quiera recuperar.

## Artículos relacionados

- [[keyboard-shortcuts-reference]]
- [[customize-language-theme-sounds]]
- [[chart-window]]
- [[drawing-tools]]
- [[templates-workspaces]]