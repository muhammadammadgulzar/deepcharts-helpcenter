---
title: "Solución: la herramienta de dibujo Rectángulo no funciona"
slug: "rectangle-drawing-tool"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Repare la herramienta de dibujo Rectángulo (y otras herramientas de dibujo) eliminando el archivo tool_config dañado para que DeepCharts lo regenere."
keywords: ["herramienta rectángulo no funciona", "herramienta rectángulo rota", "herramienta de dibujo no funciona", "tool_config", "no puedo dibujar rectángulo", "las herramientas de dibujo dejaron de funcionar", "configuración dañada"]
source_hash: "318605c1c3587672"
ai_translated: true
source_hash: "318605c1c3587672"
---
La herramienta de dibujo **Rectangle** (Rectángulo) deja de funcionar en sus gráficos: usted la selecciona, pero no dibuja. Este problema suele estar causado por un archivo de configuración dañado relacionado con las herramientas de dibujo. Eliminar ese archivo permite que DeepCharts lo regenere automáticamente, lo que restaura la herramienta.

## Síntoma

- La herramienta de dibujo **Rectangle** no funciona cuando intenta usarla en un gráfico.
- Otras herramientas de dibujo pueden comportarse mal al mismo tiempo: el mismo archivo dañado también las afecta.

No debe confundirse con:

- [[chart-zoom]]: el acercamiento y alejamiento del gráfico no responde; un problema distinto con su propia solución.
- [[drawing-tools]]: la referencia general si no está seguro de cómo deberían funcionar las herramientas de dibujo.

## Causa más probable

Un archivo de configuración de herramientas de dibujo dañado llamado `tool_config` en la carpeta de configuración de DeepCharts. Eliminarlo obliga a DeepCharts a generar uno nuevo en el siguiente inicio.

## Solución rápida

Restablezca la configuración de las herramientas de dibujo:

1. **Cierre por completo la aplicación DeepCharts** antes de continuar.
2. Abra el **File Explorer** (Explorador de archivos) y vaya a su carpeta **Documents** (Documentos).
3. Navegue hasta la carpeta de configuración de DeepCharts:

```
Documents → DeepChart → Settings
```

[SCREENSHOT: El Explorador de archivos mostrando la carpeta Settings dentro de la carpeta DeepChart en Documentos, con la ruta de la carpeta visible en la barra de direcciones | dc-es-rectangle-drawing-tool-01.png]

4. Localice el archivo llamado `tool_config` y **elimínelo**.

[SCREENSHOT: El Explorador de archivos dentro de la carpeta Settings con el archivo tool_config seleccionado y el menú contextual del clic derecho abierto sobre Eliminar | dc-es-rectangle-drawing-tool-02.png]

> **Advertencia:** Este archivo almacena la configuración de sus herramientas de dibujo, así que eliminarlo restablece esa configuración a sus valores predeterminados. No afecta a sus datos de mercado, gráficos ni configuración de cuenta.

5. Inicie DeepCharts de nuevo: la aplicación genera automáticamente un nuevo archivo `tool_config`.
6. Pruebe la herramienta de dibujo **Rectangle** en un gráfico. Ahora debería funcionar correctamente.

[SCREENSHOT: Un gráfico de DeepCharts con la herramienta de dibujo Rectángulo seleccionada y un rectángulo dibujado con éxito sobre un área de precio | dc-es-rectangle-drawing-tool-03.png]

## Si eso no funcionó

### Causa: DeepCharts seguía ejecutándose cuando eliminó el archivo

Si la aplicación seguía ejecutándose en segundo plano, puede haber reescrito el archivo dañado al salir. Repita la solución, asegurándose primero de que DeepCharts esté completamente cerrado: revise el Administrador de tareas de Windows en busca de cualquier proceso restante de DeepCharts antes de eliminar `tool_config`.

### Causa: el problema también afecta a otras herramientas de dibujo

El mismo archivo de configuración cubre otras herramientas de dibujo, así que si varias herramientas se comportan mal, el restablecimiento anterior también las resuelve. Si una herramienta distinta sigue fallando tras el restablecimiento, anote cuál es antes de contactar con soporte.

## ¿Sigue atascado?

Genere un [[diagnostic-report]] y contacte con soporte a través de [[get-help]]: mencione que ya restableció el archivo `tool_config` y qué herramientas siguen afectadas.

## Cómo prevenirlo

No hay ninguna configuración de usuario que cause este daño: puede ocurrir en cualquier instalación. Dos hábitos reducen el riesgo de archivos de configuración dañados en general:

- Cierre DeepCharts de forma normal en lugar de matar el proceso, ya que los archivos de configuración se escriben al salir.
- Evite apagar el PC mientras DeepCharts todavía esté guardando o cerrándose.

Para el uso diario de las herramientas en sí, vea [[drawing-tools]].

## Artículos relacionados

- [[drawing-tools]]
- [[chart-zoom]]
- [[chart-window]]
- [[diagnostic-report]]
- [[get-help]]