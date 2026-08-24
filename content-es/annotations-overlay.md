---
title: "Superposición de anotaciones"
slug: "annotations-overlay"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Importe las anotaciones dibujadas por un indicador en otro gráfico, por ejemplo niveles de Bar POC de un gráfico de 30 minutos, al gráfico actual."
keywords: ["superposición de anotaciones", "anotaciones superpuestas", "importar indicador de otro gráfico", "chart id", "indicator id", "espejar indicador", "ventana finder"]
source_hash: "2d38bf14a2ce8ff5"
ai_translated: true
source_hash: "2d38bf14a2ce8ff5"
---
El indicador Superposición de anotaciones (listado como **Overlay Annotations** en el menú de indicadores) importa las anotaciones producidas por un indicador en *otro* gráfico al gráfico actual. El uso clásico: ejecutar [[bar-poc|Bar POC]] en un gráfico de 30 minutos y mostrar esos niveles de POC de 30 minutos en su gráfico de ejecución de 5 minutos.

## Qué es

Muchos indicadores de DeepCharts dibujan anotaciones —niveles, zonas, marcadores— que se calculan a partir del marco temporal de su propio gráfico. Superposición de anotaciones refleja esos dibujos en un gráfico distinto. Usted lo apunta a un gráfico fuente (por su **Chart ID**) y a un indicador específico de ese gráfico (por su **Indicator ID**), y las anotaciones aparecen en su gráfico de destino, calculadas exactamente como las calcula la fuente.

Esto le da verdaderos niveles multi-marco temporal: el indicador fuente sigue ejecutándose en su propia resolución mientras usted observa su salida donde realmente opera.

## Cuándo usarlo

- Quiere niveles de indicador de un marco temporal superior (por ejemplo Bar POC o un indicador de swing) mostrados en un gráfico de ejecución de marco temporal inferior.
- Mantiene un gráfico de "análisis" con indicadores cuidadosamente configurados y quiere sus anotaciones reflejadas en otros gráficos sin reconfigurarlo todo.
- Quiere comparar la salida de un indicador entre marcos temporales lado a lado en un único gráfico.

## Inicio rápido

1. Prepare primero la fuente: abra (o identifique) el gráfico que ejecuta el indicador cuyas anotaciones quiere importar, por ejemplo Bar POC en un gráfico de 30 minutos.
2. En su gráfico de destino, abra el menú de indicadores en la esquina superior izquierda y añada **Overlay Annotations**.
3. Encuentre el **Chart ID** de la fuente: haga clic derecho y seleccione **Finder Window**, luego habilite la función **Mirror**. Pase el cursor sobre el gráfico fuente: el ID del gráfico aparece en la primera fila de la ventana finder.

[SCREENSHOT: Finder Window con la función Mirror habilitada, posicionada sobre el gráfico fuente de 30 minutos, con la primera fila mostrando el valor del ID del gráfico resaltado | dc-es-annotations-overlay-01.png]

4. Introduzca ese valor en el campo **Chart ID** de la configuración de Superposición de anotaciones.
5. Encuentre el **Indicator ID**: abra la lista de indicadores en el gráfico fuente y localice el número pequeño entre paréntesis junto al indicador que quiere importar.

[SCREENSHOT: La lista de indicadores del gráfico fuente con el pequeño número de ID entre paréntesis junto a la entrada Bar POC rodeado/resaltado | dc-es-annotations-overlay-02.png]

6. Introduzca ese número en el campo **Indicator ID** de la configuración de Superposición de anotaciones.
7. Seleccione **Apply and Save** en la esquina inferior derecha. Las anotaciones del indicador fuente ahora se renderizan en su gráfico de destino.

[SCREENSHOT: Un gráfico de 5 minutos mostrando niveles de Bar POC importados calculados originalmente en un gráfico de 30 minutos mediante Superposición de anotaciones, con el diálogo de configuración de Overlay Annotations mostrando los campos Chart ID e Indicator ID rellenados | dc-es-annotations-overlay-03.png]

## Cómo interpretarlo

Las anotaciones importadas se ven y se comportan exactamente como los dibujos propios del indicador fuente: mismos niveles, mismas actualizaciones. Interprételas usando la documentación del indicador fuente (por ejemplo [[bar-poc]] para niveles de POC importados). La única diferencia es el contexto: las anotaciones se calculan en el marco temporal del gráfico fuente, por lo que un nivel de una fuente de 30 minutos representa estructura de 30 minutos aunque lo vea en un gráfico de 5 minutos.

## Referencia de configuración

El indicador tiene dos parámetros clave para configurar:

| Ajuste | Qué hace |
|---|---|
| **Chart ID** | Identifica el gráfico fuente que contiene las anotaciones a importar. Se encuentra mediante la **Finder Window** con **Mirror** habilitado: el valor de la primera fila mientras está posicionado sobre el gráfico fuente. |
| **Indicator ID** | Identifica qué indicador del gráfico fuente importar. Es el número pequeño entre paréntesis junto a ese indicador en la lista de indicadores del gráfico fuente. |

Confirme los cambios con **Apply and Save** en la esquina inferior derecha de la ventana de configuración.

## Consejos y errores comunes

- **El gráfico fuente debe existir y seguir ejecutándose**: la superposición refleja un indicador vivo en otro gráfico. Si el gráfico fuente se cierra, no hay nada que importar.
- **ID equivocado, salida equivocada.** Si aparecen anotaciones inesperadas, lo más probable es que haya introducido el ID de un indicador distinto del gráfico fuente: vuelva a comprobar el número entre paréntesis en la lista de indicadores del gráfico fuente.
- Configure completamente el indicador fuente *antes* de conectar la superposición: el estilo y los parámetros se eligen en la fuente, y la superposición los refleja.
- Funciona mejor con indicadores que dibujan anotaciones (niveles, zonas, marcadores) como Bar POC o herramientas basadas en swings; el ejemplo de la documentación original importa un Bar POC de un gráfico de 30 minutos a un gráfico de 5 minutos.
- Si solo necesita una etiqueta de texto simple en lugar de la salida reflejada de un indicador, use [[text-on-chart|Texto en el gráfico]].

## Artículos relacionados

- [[bar-poc]]
- [[swing-point]]
- [[text-on-chart]]
- [[link-windows]]
- [[different-types-of-input]]
- [[indicator-layout]]