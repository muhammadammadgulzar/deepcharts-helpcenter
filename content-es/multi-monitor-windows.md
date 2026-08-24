---
title: "Organizar ventanas en varios monitores (y recuperar ventanas fuera de pantalla)"
slug: "multi-monitor-windows"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Distribuya los gráficos, DOM y demás ventanas de DeepCharts entre varios monitores, guarde el diseño como espacio de trabajo y recupere ventanas atascadas fuera de pantalla."
keywords: ["varios monitores", "multimonitor", "segunda pantalla", "ventana fuera de pantalla", "ventana desaparecida", "recuperar ventana", "posicionar ventanas", "separar gráfico", "configuración de dos monitores"]
source_hash: "b188b53375c6a173"
ai_translated: true
source_hash: "b188b53375c6a173"
---
Al final de esta guía tendrá sus ventanas de DeepCharts organizadas en todos sus monitores, guardadas como espacio de trabajo para que el diseño sobreviva a un reinicio, y sabrá cómo recuperar una ventana que se abre fuera de pantalla después de desconectar un monitor o de un cambio de resolución.

Las ventanas de DeepCharts (gráficos, DOM, Time and Sales, escáner y el resto) son ventanas flotantes libres, así que un diseño multimonitor es en gran parte arrastrar y soltar. Las dos partes que la gente pasa por alto son separar las pestañas de gráfico en ventanas independientes y guardar el resultado como espacio de trabajo.

## Antes de empezar

- [[first-chart|Sabe abrir un gráfico]] y tiene al menos uno abierto
- [[templates-workspaces|Entiende la diferencia entre plantillas y espacios de trabajo]]: un espacio de trabajo es lo que guarda un diseño multiventana
- Todos los monitores están conectados y detectados por Windows (aparecen en la configuración de pantalla de Windows)

## Pasos

1. Abra todas las ventanas que necesite desde el menú **New** de la barra de menús principal: **Price Chart**, **Book** (para **Adv. Dom** y las variantes de DOM horizontal/vertical), **Adv. Time And Sales**, **Correlation Viewer**, **Profile Chart** o **Scanner**. Cada una se abre como su propia ventana.

   [SCREENSHOT: Barra de menús principal de DeepCharts con el menú New abierto, mostrando Adv. Time And Sales, el submenú Book, Correlation Viewer, Price Chart, Profile Chart y Scanner | new-menu-window-types.png]

2. Arrastre cada ventana por su barra de título hasta el monitor donde la quiera y cámbiele el tamaño allí. Las ventanas de DeepCharts se comportan como ventanas de aplicación normales, así que el atajo de Windows Win+Shift+flecha izquierda/derecha también mueve la ventana enfocada al siguiente monitor.

   [SCREENSHOT: Dos monitores uno junto al otro con un gráfico de DeepCharts siendo arrastrado del monitor principal al secundario | drag-window-between-monitors.png]

   ### Si sus gráficos son pestañas dentro de una sola ventana de gráfico

   Una ventana de gráfico puede contener varios gráficos como pestañas (el **+** verde de la barra de título añade una). Las pestañas no pueden situarse en monitores diferentes, así que separe las que quiera en otro lugar:

   1. Con una sola pestaña visible, haga clic en el icono de abrir en ventana nueva de la barra de título del gráfico (a la izquierda del **+** verde). Con varias pestañas, haga clic en la pestaña activa y elija **Detach** en el panel emergente que aparece.
   2. La pestaña se convierte en una ventana de gráfico independiente — con su propio símbolo, marco temporal, panel de trading y estado del DOM — que puede arrastrar a cualquier monitor.

   [SCREENSHOT: Panel emergente de pestaña de gráfico abierto en una pestaña activa mostrando los menús desplegables de símbolo, rango y marco temporal más los botones verde Detach y rojo Close | chart-tab-detach-popover.png]

   ### Si quiere que gráficos en distintos monitores sigan un mismo símbolo

   Use grupos de color de enlace: haga clic en el icono cuadrado de enlace en la parte superior derecha de cada gráfico (a la izquierda de minimizar) y asigne a los gráficos el mismo color de **Link** (1–8). Cambiar el símbolo en un gráfico lo cambia entonces en todos los gráficos del grupo: el enlace sincroniza solo el símbolo, no el marco temporal ni los dibujos. Pruébelo abajo: asigne a ambos minigráficos el mismo color y cambie el símbolo en uno. Vea [[link-windows]].

[WIDGET: link-groups-demo]

   ### Si quiere que una ventana permanezca visible sobre otras aplicaciones

   En un gráfico, haga clic en el icono de engranaje de la fila de iconos superior izquierda y habilite **Always on top**; la ventana permanecerá entonces por encima de todas las demás ventanas del sistema hasta que lo deshabilite. Para la barra de control principal existe un interruptor separado, **Control bar always on top**, en **Options → Settings → General**, en la sección **VARIOUS**.

3. Opcionalmente, use el organizador integrado: **Window → Position windows**. El cuadro de diálogo muestra interruptores por tipo de ventana (**Adv Dom**, **Adv Time And Sales**, **Correlation Viewer**, **Chart**, **Scanner**, **Compact Dom**), una lista de sus monitores con sus resoluciones y un interruptor **Position only windows inside selected monitors**. Seleccione los tipos de ventana y los monitores de destino, y luego haga clic en **Position**. [CONFIRM: exact placement behavior of the Position windows dialog — how positioned windows are arranged on the selected monitors]

   [SCREENSHOT: Menú Window abierto con Position windows seleccionado, y el cuadro de diálogo Position windows mostrando los interruptores por tipo de ventana, la lista de monitores con resoluciones, el interruptor Position only windows inside selected monitors y los botones Close y Position | position-windows-dialog.png]

4. Guarde el diseño como espacio de trabajo: pulse Ctrl Alt S (**Workspace save**) o use la opción de guardado del panel de espacios de trabajo, y elija almacenamiento **Local** o **Cloud**. Los espacios de trabajo en la nube están vinculados a su licencia y le siguen a otros PC.

   > **Advertencia:** DeepCharts no guarda automáticamente los diseños. Si cierra la aplicación sin guardar un espacio de trabajo, el siguiente arranque empieza desde el estado predeterminado y su organización desaparece: nada está roto, simplemente nunca se guardó.

## Verifique que funcionó

- Cada monitor muestra las ventanas que colocó allí, y cada gráfico separado conserva su propio símbolo, marco temporal y panel de trading.
- Reinicie DeepCharts y cargue su espacio de trabajo (Ctrl Alt O, o el panel de espacios de trabajo). El diseño completo vuelve. Si su configuración de monitores cambió entre sesiones (una pantalla retirada o una resolución cambiada), las posiciones de las ventanas pueden no restaurarse exactamente: reorganice una vez y guarde de nuevo.

## Si algo salió mal

- **Una ventana se abre fuera de pantalla** (típico tras desconectar el monitor en el que vivía). Pruebe estas opciones en orden, de la menos invasiva a la más:
  1. Movimiento nativo de Windows: enfoque la ventana con Alt+Tab, pulse Alt+Espacio, elija **Mover** (o pulse M), pulse las teclas de flecha hasta que la ventana aparezca y haga clic para soltarla. Win+Shift+flecha izquierda/derecha también trae la ventana enfocada al siguiente monitor.
  2. **Window → Position windows**: habilite **Position only windows inside selected monitors**, seleccione solo los monitores que aún tiene y el tipo de ventana afectado, y luego haga clic en **Position**. El comportamiento exacto puede variar: vea la nota de confirmación del paso 3.
  3. El atajo predeterminado Ctrl Alt R (**Reset open windows**) está diseñado para restablecer sus ventanas abiertas; el comportamiento exacto puede variar. Vea [[keyboard-shortcuts-reference]].
- **Le pregunta "Are you sure to close the window?"**: cerrar una ventana de gráfico separada muestra esta confirmación. Elija **No** si hizo clic en la X por error; el gráfico se conserva.
- **Todo su diseño desapareció tras un reinicio**: el espacio de trabajo nunca se guardó (no hay guardado automático). Reconstruya el diseño una vez y guárdelo: [[templates-workspaces]].
- **Cambiar un símbolo cambió varios gráficos a la vez**: esos gráficos comparten un grupo de color de enlace. Ponga el menú de enlace en **None link** en los gráficos que quiera independientes: [[link-windows]].

## Artículos relacionados

- [[templates-workspaces]]
- [[link-windows]]
- [[chart-window]]
- [[keyboard-shortcuts-reference]]
- [[advanced-dom]]
- [[adv-time-and-sales]]