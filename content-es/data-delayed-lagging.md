---
title: "Solución: gráficos con retraso o datos demorados (lista de verificación)"
slug: "data-delayed-lagging"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "intermediate"
time: "15 min to complete"
description: "Una lista de verificación paso a paso para diagnosticar datos de gráfico demorados o con retraso: enrutamiento de la fuente demorada, velocidad de descarga regional, DOM Type, gateway de Rithmic y recursos del sistema."
keywords: ["gráficos con retraso", "datos demorados", "gráfico detrás del mercado", "etiqueta de retraso", "retraso de 900 segundos", "retraso durante la apertura del mercado", "fuente de datos lenta", "prueba de red"]
source_hash: "a16bfd62284a3e75"
ai_translated: true
source_hash: "a16bfd62284a3e75"
---
Sus gráficos se mueven, pero los precios llegan tarde: unos segundos por detrás del mercado, o peor durante la apertura y las publicaciones de noticias. El retraso tiene varias causas independientes, así que este artículo es una lista de verificación: recórrala de arriba abajo y deténgase en la primera comprobación que explique su caso.

## Síntoma

- El gráfico se actualiza, pero visiblemente por detrás del mercado en vivo.
- Aparece una etiqueta roja de retraso en la esquina superior izquierda del gráfico mostrando cuántos segundos van los datos por detrás.
- El retraso es peor durante los períodos de alto volumen (la apertura del mercado, noticias importantes).

[SCREENSHOT: Un gráfico con la etiqueta roja de retraso visible en la esquina superior izquierda mostrando un valor de retraso en segundos | dc-es-data-delayed-lagging-01.png]

No debe confundirse con [[feed-connected-chart-not-moving]]: allí nada se actualiza en absoluto. Compruebe primero el punto de conexión de la fuente de datos: si la fuente está desconectada, este artículo no aplica.

## Causa más probable

O bien el símbolo está enrutado a la fuente gratuita demorada de 15 minutos en Symbol Manage, o bien su velocidad de descarga desde la región del servidor de la fuente de datos no puede mantener el ritmo durante los períodos de alto volumen.

## Solución rápida

Lea la etiqueta roja de retraso: le dice qué problema tiene:

1. Si la etiqueta marca exactamente **900 segundos** (15 minutos), la bolsa está enrutada a la [[free-delayed-data-feed|fuente demorada gratuita]], no a su suscripción en vivo. Abra **Options → Symbol Manage**, reasigne esa bolsa a su conexión de fuente de datos en vivo (consulte [[symbol-manage]]) y luego reabra el gráfico.
2. Si la etiqueta fluctúa aleatoriamente (3 s, 15 s, 20 s...), es un problema de rendimiento de la fuente en vivo: continúe con la lista de verificación siguiente.

La maqueta interactiva de Symbol Manage a continuación muestra cómo funciona la reasignación: haga clic en el icono de eslabón de cadena de una bolsa para alternar a qué fuente de datos está asignada.

[WIDGET: symbol-manage-mock]

## Si eso no funcionó

### Causa: velocidad de descarga lenta desde la región del servidor de la fuente de datos

Lo que importa no es su velocidad general de internet sino la velocidad de descarga desde la región del servidor de la fuente de datos: puede tener 100 Mbps a nivel global y aun así experimentar retraso. Ejecute la prueba de red integrada:

1. Haga clic en el icono **?** de la barra principal.
2. Haga clic en **Contact Support** y luego en **I have a problem or delay with the platform**.
3. En la ventana Diagnostic Tools (herramientas de diagnóstico), confirme para ejecutar la prueba de red.
4. Cuando termine, use el botón de copiar al portapapeles para guardar los resultados.

[SCREENSHOT: Ventana Diagnostic Tools tras completarse la prueba de red, mostrando los resultados de ping y velocidad de descarga por región con el botón de copiar al portapapeles visible | dc-es-data-delayed-lagging-02.png]

Lectura de los resultados: los valores de US corresponden al servidor de Virginia, los valores de EU a Frankfurt. Como regla general, si la velocidad de descarga de la región a la que se conecta está por debajo de aproximadamente 10 Mbps, espere retraso durante los períodos de alto volumen. Una VPN o proxy detectado también puede añadir latencia: pruebe sin él.

### Causa: el flujo MBO de dxFeed es demasiado pesado para su conexión

Los datos de nivel 2 de dxFeed para las bolsas de CME Group son MBO (Market By Order), mucho más pesados que MBP. dxFeed le enruta automáticamente a su servidor más cercano (Frankfurt o Virginia), no puede elegirlo, así que si su línea no puede mantener el ritmo, cambie el campo **DOM Type** en su configuración de la fuente dxFeed de **MBO** a **MBP**. MBP normalmente elimina el retraso en líneas más lentas; el sacrificio es perder el detalle a nivel de orden de MBO. Consulte [[connect-dxfeed]].

[SCREENSHOT: Configuración de la fuente dxFeed con el campo DOM Type abierto mostrando las opciones MBO y MBP, con MBP seleccionado | dc-es-data-delayed-lagging-03.png]

### Causa: gateway de Rithmic o configuración de limitación

Los usuarios de Rithmic pueden actuar sobre tres configuraciones:

1. El **Gateway** es seleccionable por el usuario: ejecute la prueba de red anterior y elija la ubicación de gateway más rápida en su configuración de la fuente de datos.
2. Verifique que la fuente sea **Rithmic RAPI**, no **Rithmic Beta**.
3. En R Trader Pro, abra **Window → Preferences → Performance** y ponga ambos deslizadores, **Quotes** y **Order Book**, al máximo; luego **Apply → OK**. Un límite aquí estrangula los datos de alto volumen y demora los gráficos.

[SCREENSHOT: Pestaña Performance de las preferencias de R Trader Pro con los deslizadores Quotes y Order Book arrastrados al máximo | dc-es-data-delayed-lagging-04.png]

Consulte [[connect-rithmic]] y [[rtrader-pro-plugin]].

### Causa: su computadora se ha quedado sin RAM o CPU

Los resultados del diagnóstico incluyen la RAM libre y el uso de CPU. Muy poca RAM libre o un uso general de CPU muy alto causa retraso independientemente de la red: cierre otras aplicaciones y vuelva a probar.

### Causa: los gráficos tardan en cargar al abrirse (no es retraso en vivo)

Si el problema es carga lenta en lugar de retraso en vivo, compruebe la insignia de estado en la barra principal mientras el gráfico se construye. **LDT** significa que los datos se están cargando desde su disco: quedarse atascado ahí apunta a un problema de datos locales, así que elimine los datos del símbolo ([[delete-market-data]]) y recargue. **DWT** significa que los datos se están descargando desde el servidor de la fuente: observe **Options → Show Log → Connection log** para ver llegar los ticks. DWT con un Connection log vacío significa que el servidor de la fuente no está enviando datos en absoluto.

## Sigue atascado

Si el enrutamiento, la velocidad regional, la configuración y los recursos del sistema están todos correctos y el retraso persiste, genere un [[diagnostic-report]], incluya los resultados copiados de la prueba de red y contacte al soporte a través de [[get-help]].

## Prevenga esto

- Asigne todas las bolsas a su fuente en vivo en [[symbol-manage]] tras cualquier cambio de fuente de datos.
- Configure los deslizadores de rendimiento de R Trader Pro durante la configuración inicial de Rithmic; consulte [[connect-rithmic]].
- Elija su gateway de Rithmic por prueba de velocidad, no por intuición, al seguir [[connect-data-feed]].

## Artículos relacionados

- [[free-delayed-data-feed]]
- [[feed-connected-chart-not-moving]]
- [[connect-dxfeed]]
- [[connect-rithmic]]
- [[symbol-manage]]
- [[gaps-in-price]]