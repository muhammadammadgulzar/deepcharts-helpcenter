---
title: "Solución: el zoom del gráfico no funciona"
slug: "chart-zoom"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Recupere el zoom con rueda del ratón y teclado en los gráficos de DeepCharts: configuración de desplazamiento de Windows, opciones de la escala de precios y comprobaciones del hardware del ratón."
keywords: ["zoom no funciona", "no puedo hacer zoom en el gráfico", "zoom con rueda del ratón", "desplazar ventanas inactivas", "zoom con Ctrl +", "zoom del gráfico atascado", "zoom de la escala de precios", "zoom con trackpad"]
source_hash: "8d4f3cd5a084bed6"
ai_translated: true
source_hash: "8d4f3cd5a084bed6"
---
Desplaza la rueda del ratón sobre un gráfico y no ocurre nada, o los atajos de teclado de zoom no tienen efecto. Los problemas de zoom en DeepCharts casi siempre provienen de uno de tres lugares: una configuración del ratón de Windows, la configuración de la escala de precios o el propio hardware señalador. Este artículo los repasa del más al menos común.

Como referencia, DeepCharts hace zoom en dos ejes con dos métodos de entrada:

| Acción | Entrada |
|---|---|
| Acercar (eje X, escala de tiempo) | **Ctrl** + **+** |
| Alejar (eje X, escala de tiempo) | **Ctrl** + **-** |
| Zoom en el eje X (escala de tiempo) | Desplazamiento de la rueda del ratón sobre el gráfico |
| Zoom en el eje Y (escala de precios) | **Alt** + desplazamiento de la rueda del ratón |

## Síntoma

- Desplazar la rueda del ratón sobre un gráfico no hace zoom en la escala de tiempo.
- **Alt** + desplazamiento no cambia la escala de precios.
- **Ctrl** + **+** / **Ctrl** + **-** no acercan ni alejan.

No debe confundirse con un gráfico que hace zoom bien pero no muestra nuevas actualizaciones de precio: eso es un problema de la fuente de datos, tratado en [[feed-connected-chart-not-moving]].

## Causa más probable

Por defecto, Windows solo entrega los eventos de la rueda del ratón a la ventana que tiene el foco en ese momento. Si la ventana del gráfico no es la ventana activa cuando desplaza — muy común en diseños con varias ventanas — la entrada de la rueda nunca llega a DeepCharts. La configuración de Windows **Scroll inactive windows when hovering over them** (Desplazar ventanas inactivas al pasar sobre ellas) lo soluciona.

## Solución rápida

1. Abra **Windows Settings → Bluetooth & devices → Mouse**.
2. Active **Scroll inactive windows when hovering over them**.

[SCREENSHOT: Configuración de Windows, página Bluetooth & devices > Mouse con el conmutador "Scroll inactive windows when hovering over them" activado y resaltado | dc-es-chart-zoom-01.png]

3. Reinicie DeepCharts.
4. Pase el ratón sobre un gráfico y desplace: la escala de tiempo debería hacer zoom. Mantenga pulsado **Alt** y desplace para confirmar que la escala de precios también hace zoom.

[SCREENSHOT: Ventana de gráfico de DeepCharts en pleno zoom, con el cursor sobre las velas y el eje de tiempo visiblemente comprimido en comparación con un segundo estado: antes/después de un zoom con la rueda del ratón | dc-es-chart-zoom-02.png]

## Si eso no funcionó

### Causa: las opciones de la escala de precios están anulando el zoom

Si el eje de tiempo hace zoom pero el eje de precios no responde (o vuelve a su posición), las opciones de escala del eje Y pueden no estar configuradas como espera.

1. Haga clic derecho en la escala de precios (el eje Y en el borde derecho del gráfico).
2. Revise las opciones de escala del menú y confirme que el modo de escala es el correcto para el comportamiento que desea del gráfico. [CONFIRM: exact price-scale right-click option names that affect zoom behavior]

[SCREENSHOT: Menú contextual de clic derecho abierto en la escala de precios del eje Y del gráfico mostrando las opciones de escala disponibles | dc-es-chart-zoom-03.png]

Consulte [[price-chart-settings]] para la referencia completa de configuración del gráfico.

### Causa: el trackpad, el escritorio remoto o el software del ratón está interceptando la rueda

Los eventos de la rueda pueden ser absorbidos antes de llegar a DeepCharts:

- **Trackpads**: los gestos de desplazamiento del trackpad del portátil son menos fiables que una rueda física. Pruebe con un ratón externo.
- **Sesiones de escritorio remoto**: las herramientas de acceso remoto a menudo reenvían la entrada de desplazamiento de forma incompleta. Pruebe directamente en la máquina que ejecuta DeepCharts.
- **Software de ratón de terceros**: las utilidades del fabricante que remapean o "mejoran" el desplazamiento pueden interceptar la rueda. Ciérrelas o deshabilítelas y mantenga la configuración del ratón de Windows en sus valores predeterminados.

### Causa: se cambió un atajo de teclado

Los atajos de DeepCharts son configurables, por lo que **Ctrl** + **+** / **Ctrl** + **-** pueden haber sido reasignados a otra cosa en su instalación. Abra la configuración de atajos y compruebe a qué están asignadas actualmente las acciones de zoom; consulte [[keyboard-shortcuts]].

## Si sigue atascado

Si nada de lo anterior recupera el zoom, genere un [[diagnostic-report]] y contacte con soporte a través de [[get-help]], mencionando qué eje falla y qué método de entrada (rueda, Alt + rueda, teclado) probó.

## Cómo prevenirlo

- Mantenga habilitado **Scroll inactive windows when hovering over them** en Windows.
- Use un ratón externo en lugar de un trackpad para trabajar con gráficos.
- Evite ejecutar DeepCharts por escritorio remoto cuando pueda trabajar en local.
- Deje la configuración del ratón de Windows en sus valores predeterminados y evite utilidades de desplazamiento de terceros.

## Artículos relacionados

- [[chart-window]]
- [[price-chart-settings]]
- [[keyboard-shortcuts]]
- [[keyboard-shortcuts-reference]]
- [[feed-connected-chart-not-moving]]
- [[get-help]]