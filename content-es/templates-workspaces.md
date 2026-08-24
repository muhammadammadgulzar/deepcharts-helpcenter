---
title: "Plantillas y espacios de trabajo"
slug: "templates-workspaces"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Guarde la configuración de un gráfico como plantilla o toda su disposición como espacio de trabajo, localmente o en la nube, para que su configuración sobreviva a cada reinicio."
keywords: ["guardar disposición del gráfico", "plantilla de gráfico", "espacio de trabajo", "guardar espacio de trabajo", "cargar plantilla", "configuración reiniciada tras reinicio", "perdí mi disposición", "configuración del gráfico desapareció", "plantillas en la nube", "plantillas compartidas"]
source_hash: "8737a82b96dc8153"
ai_translated: true
source_hash: "8737a82b96dc8153"
---
Al terminar tendrá la configuración de un gráfico guardada como **plantilla (Template)** y toda la disposición de su pantalla guardada como **espacio de trabajo (Workspace)**, y sabrá cómo volver a cargar cualquiera de las dos, en este PC o en cualquier otro PC donde use su licencia de DeepCharts.

La regla general: la configuración de un solo gráfico (indicadores, estilos, ajustes) → guarde una **plantilla**. La disposición completa — varios gráficos, indicadores, perfiles — → guarde un **espacio de trabajo**.

> **Advertencia:** DeepCharts no guarda automáticamente las disposiciones ni las configuraciones de los gráficos. Si cierra la aplicación (o apaga el PC) sin guardar una plantilla o un espacio de trabajo, el siguiente inicio comienza desde la disposición predeterminada. Nada está roto y nada se "reinició": la configuración nunca se guardó. Guarde un espacio de trabajo antes de cerrar la aplicación.

## Antes de empezar

- Un gráfico configurado a su gusto — [[first-chart]]
- Los indicadores que quiera conservar ya aplicados — [[indicator-layout]]

## Pasos

### Guardar una plantilla de gráfico

1. Configure el gráfico exactamente como lo quiere: indicadores, estilo de barras, colores, ajustes.

2. Haga clic con el botón derecho en cualquier parte del gráfico y elija **Template → Save As**.

[SCREENSHOT: Menú contextual de clic derecho del gráfico abierto con el submenú Template expandido mostrando Load y Save As, con Save As resaltado | dc-es-templates-workspaces-01.png]

3. Elija dónde almacenarla — **Local** (este PC) o **Cloud** (su cuenta de DeepCharts, disponible en cualquier PC donde active la misma licencia) — y dé a la plantilla un nombre claro, por ejemplo la estrategia o disposición a la que pertenece.

[SCREENSHOT: Diálogo de guardado de plantilla/selector de archivos mostrando las opciones de origen Local y Cloud con un nombre de plantilla siendo introducido | dc-es-templates-workspaces-02.png]

### Cargar una plantilla

1. Haga clic con el botón derecho en el gráfico y elija **Template → Load**. El botón **Templates** en la barra inferior del gráfico abre el mismo selector: es un atajo para este elemento del menú.

2. En el selector de archivos, elija una pestaña de origen:
   - **Local** — archivos almacenados en la carpeta **Documents → deepchart → Template** de este PC. El botón **Add folder** le permite añadir otra carpeta de búsqueda.
   - **Cloud** — plantillas guardadas en el servidor de DeepCharts, vinculadas a su cuenta y licencia. Use la misma licencia en otro PC (por ejemplo, durante un viaje) y sus plantillas en la nube aparecerán aquí también.
   - **Shared** — un área de solo lectura curada por el equipo de DeepCharts, que incluye las plantillas usadas en los vídeos educativos. Puede cargar desde Shared, pero nunca puede subir contenido a ella.

[SCREENSHOT: Selector de archivos de plantilla con las pestañas de origen Local, Cloud y Shared visibles, una plantilla seleccionada y el panel de vista previa mostrando su vista previa | dc-es-templates-workspaces-03.png]

3. Seleccione la plantilla y cárguela. El gráfico se redibuja con la configuración guardada.

> **Nota:** Los botones de opción de plantilla rápida junto al botón **Templates** (OF-VP, D-VP, C-VP, etcétera) son preajustes integrados, no sus plantillas guardadas — consulte [[quick-chart-templates]].

### Guardar un espacio de trabajo

1. Organice su pantalla de trading completa: cada gráfico, ventana y panel donde lo quiera.

2. En la barra principal, abra el selector **Workspace** — muestra el nombre del espacio de trabajo actual (por ejemplo **Untitled**) — y elija la opción de guardar. [CONFIRM: exact item labels in the Workspace menu (Save as / Load / New)]

[SCREENSHOT: Barra principal de DeepCharts con el desplegable Workspace abierto mostrando el nombre del espacio de trabajo actual y las opciones de guardar/cargar | dc-es-templates-workspaces-04.png]

3. Elija **Local** o **Cloud** y dé un nombre al espacio de trabajo. Los espacios de trabajo locales residen en **Documents → deepchart → Workspace** en este PC; los espacios de trabajo en la nube siguen a su licencia a cualquier máquina.

### Cargar un espacio de trabajo

1. Abra el selector **Workspace** en la barra principal y elija la opción de cargar.

2. Elija el origen (**Local**, **Cloud** o **Shared**) y seleccione el espacio de trabajo. Se restaura la disposición completa.

[SCREENSHOT: Selector de archivos de espacio de trabajo mostrando un espacio de trabajo guardado seleccionado en la pestaña Local con el panel de vista previa visible | dc-es-templates-workspaces-05.png]

### Si trabaja en más de un PC

Guarde sus plantillas y espacios de trabajo en **Cloud**. Están vinculados a su cuenta y licencia de DeepCharts, por lo que sobreviven a reinstalaciones y cambios de máquina — consulte [[move-to-new-computer]] para la lista completa de migración. Los archivos locales también pueden copiarse manualmente desde las carpetas **Documents → deepchart → Template** y **Workspace**.

## Verifique que funcionó

Guarde un espacio de trabajo, cierre DeepCharts por completo, vuelva a abrirlo y cargue el espacio de trabajo desde el selector **Workspace**. Cada gráfico, indicador y posición de ventana debería volver exactamente como lo dejó. Si guardó en la nube, el espacio de trabajo también aparece en la pestaña Cloud en cualquier otro PC que ejecute su licencia.

## Si algo salió mal

- **"Toda mi configuración se reinició tras el reinicio"** — este es el comportamiento sin autoguardado descrito arriba, no un fallo. Si la lista de espacios de trabajo está vacía, nunca se guardó nada; configure su disposición una vez más y guarde un espacio de trabajo antes de cerrar.
- **Falta una plantilla guardada en otro PC** — los archivos locales permanecen en el PC donde se guardaron. Guarde en **Cloud** en su lugar, o copie los archivos desde las carpetas **Documents → deepchart** de la otra máquina.
- **No puede subir contenido a la pestaña Shared** — es así por diseño. Shared es de solo lectura; solo el equipo de DeepCharts publica allí.
- **Un espacio de trabajo o plantilla guardado desapareció de verdad** — si antes aparecía en la lista y ahora no está, contacte con soporte con los detalles (Local o Cloud, un archivo o todos): [[get-help]].

## Artículos relacionados

- [[quick-chart-templates]]
- [[first-chart]]
- [[indicator-layout]]
- [[multi-monitor-windows]]
- [[move-to-new-computer]]
- [[chart-window]]