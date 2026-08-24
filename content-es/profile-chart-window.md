---
title: "Ventana de gráfico de perfil (perfiles TPO y de volumen)"
slug: "profile-chart-window"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "11 min read"
description: "La ventana dedicada Profile Chart en DeepCharts: letras TPO, perfiles diarios y semanales de volumen/delta, agrupamiento de ticks y el panel Indicators que lo controla todo."
keywords: ["gráfico de perfil", "gráfico TPO", "ventana de market profile", "ventana de perfil de volumen", "letras tpo", "agrupamiento de ticks", "D-VP", "W-VP", "perfil compuesto", "gráfico de perfil en blanco"]
source_hash: "90b30194bd62bc42"
ai_translated: true
source_hash: "90b30194bd62bc42"
---
El Profile Chart (gráfico de perfil) es una ventana dedicada al análisis de tipo perfil: perfiles de letras TPO (Market Profile), perfiles de volumen diarios y semanales, perfiles de delta y un perfil compuesto, apilables como superposiciones en un mismo eje temporal. Comparte la barra de herramientas del gráfico de precios, las herramientas de dibujo, el menú de clic derecho y el panel de trading, pero todo su motor de renderizado está construido en torno a perfiles en lugar de velas.

Este artículo cubre la ventana: cómo abrirla, los controles del encabezado, la fila de conmutadores de tipos de perfil, el panel Indicators que realmente la controla y qué hacer cuando el gráfico se queda en blanco. Para la teoría de los perfiles, empiece por [[understanding-volume-profile]]; para el indicador TPO que puede añadir a un gráfico de precios normal, consulte [[market-profile-tpo]].

## Qué es

En lugar de preguntar "adónde fue el precio a lo largo del tiempo" (un gráfico de velas), un gráfico de perfil pregunta "cuánto tiempo y volumen pasó el mercado en cada precio". Cada sesión se renderiza como una distribución: las letras TPO marcan qué períodos de tiempo tocaron cada precio, y las barras del perfil de volumen muestran cuántos contratos se negociaron allí. La ventana puede superponer varios tipos de perfil uno junto a otro por sesión (por ejemplo letras TPO más un perfil de volumen diario) y añade perfiles semanales y compuestos en sus propias áreas en el borde derecho.

Para familiarizarse con el lado del volumen, pruebe el perfil interactivo de abajo: arrastre el Value Area % y observe cómo responden las líneas VAH/VAL y el POC magenta, o pase el cursor sobre las filas para ver el volumen por nivel.

[WIDGET: volume-profile-lab]

## Cuándo usarla

- Leer la estructura de la sesión: áreas de valor, puntos de control, single prints y negocios inconclusos ([[understanding-auction-theory]]).
- Comparar de un vistazo el valor en desarrollo de hoy con el de sesiones anteriores.
- Separar la actividad RTH y ETH: la fila de conmutadores tiene variantes RTH/ETH dedicadas tanto de TPO como de los perfiles de volumen.
- Alejarse a perfiles semanales y compuestos para niveles de marcos temporales superiores.
- Operar directamente sobre los niveles del perfil: la ventana acopla el mismo panel de trading que un gráfico de precios.

## Inicio rápido

1. En la barra principal, abra **New → Profile Chart**.
2. Elija su instrumento en **Select Instrument** y confirme. Solo aparecen las bolsas suscritas en [[symbol-manage]].
3. Espere mientras la ventana muestra **Building chart** (o **Downloading data from connection**). La barra principal muestra una insignia **LDT:** cuando los datos se cargan desde el disco, o **DWT:** cuando se descargan del servidor de la fuente: ambos son estados de carga normales.
4. El gráfico se renderiza con perfiles TPO por sesión. Habilite más tipos de perfil desde la fila de conmutadores inferior según lo necesite.

[SCREENSHOT: Ventana Profile Chart recién abierta en NQ mostrando el indicador Building chart con barra de progreso, y la insignia LDT de la barra principal visible en la parte superior | dc-es-profile-chart-window-01.png]

## Anatomía de la ventana

[SCREENSHOT: Profile Chart completamente renderizado en NQ en modo TPO mostrando el encabezado con el menú desplegable de símbolo, el menú 30D - BT y el menú de agrupamiento de ticks, los iconos de la barra de herramientas superior, la barra de dibujo izquierda, perfiles de letras TPO por sesión con líneas POC magenta y líneas discontinuas de área de valor, y la fila inferior de conmutadores de tipos de perfil | dc-es-profile-chart-window-02.png]

- **Controles del encabezado**: el menú desplegable de símbolo (por ejemplo NQ-202609), un menú de historia que se lee como **30D - BT** (30 días de historia cargados; BT significa Based on Tick, basado en tick, la misma familia de etiquetas que en los gráficos de precios; la lista completa de opciones de este menú en el Profile Chart es [CONFIRM: options offered by the Profile Chart history dropdown]), el menú de agrupamiento de ticks (**N T**, véase más abajo), un icono de abrir en nueva ventana y un icono de más verde, y luego los controles estándar de enlazar/minimizar/maximizar/cerrar.
- **Barra de herramientas superior**: la misma familia que el gráfico de precios: hamburguesa, enlazar gráficos, el icono de indicadores, engranaje, **$** (trading) y cámara.
- **Barra de dibujo izquierda**: herramientas de puntero, mano, añadir, cruceta, zoom, ojo, borrador, línea horizontal/vertical, semirrecta, rectángulo, elipse, texto y calculadora de posición; consulte [[drawing-tools]].
- **Panel de lectura superior izquierdo**: O H L C más **%V** (cambio porcentual frente al día anterior), **ΣV** y **ΔV** para la sesión sobre la que pasa el cursor. ΣV y ΔV se leen como volumen total y delta de la sesión, pero sus definiciones exactas son [CONFIRM: precise ΣV and ΔV definitions in the readout].
- **Fila de conmutadores inferior**: los tipos de perfil (sección siguiente) con un conmutador de **Trading panel** en el extremo derecho.

### Agrupamiento de ticks (el menú N T)

El menú desplegable **N T** establece el agrupamiento de ticks, con valores predefinidos como **1 T**, **20 T** y **100 T**, además de un diálogo **Set Ticks Grouping** (campo numérico con botones **Cancel**, **Apply** y **Set**) para valores personalizados. Valores mayores agrupan más ticks por fila de perfil, lo que parece controlar la altura de la fila; la semántica exacta no está confirmada. Cambiar el valor reconstruye el gráfico; un indicador **Building chart** entre medias es normal.

[SCREENSHOT: El menú de agrupamiento de ticks abierto mostrando los valores predefinidos 1 T, 20 T y 100 T, con el diálogo Set Ticks Grouping abierto mostrando el campo numérico y los botones Cancel, Apply y Set | dc-es-profile-chart-window-03.png]

## Tipos de perfil: la fila de conmutadores inferior

La fila a lo largo de la parte inferior lista todos los tipos de perfil: **TPO | Dly Vol. Profile | Dly Vol. Profile (ETH) | TPO (ETH) | TPO (RTH) | Dly Vol. Profile (RTH) | Dly Delta Profile | Wkly Vol. Profile | Wkly Delta Profile | Comp. Vol. Profile**. Cuando la ventana es estrecha, las etiquetas se abrevian a **TPO | D-VP | D-VP (ETH) | TPO (ETH) | TPO (RTH) | D-VP (RTH) | D-DP | W-VP | W-DP | C-VP**: la misma familia de abreviaturas que las plantillas rápidas del gráfico ([[quick-chart-templates]]): D-VP = perfil de volumen diario, D-DP = perfil de delta diario, W-VP/W-DP = perfil de volumen/delta semanal, C-VP = perfil compuesto de todos los datos cargados.

> **Consejo:** La fila parece de botones de opción, pero es de selección múltiple. Cada tipo habilitado añade una superposición: letras TPO más un perfil de volumen diario más una variante RTH pueden dibujarse todos a la vez, uno junto a otro por sesión.

Dos reglas de colocación:

- **Los tipos diarios** (TPO y perfiles Dly, incluidas las variantes ETH/RTH) se dibujan por sesión dentro del área principal del gráfico.
- **Los tipos semanales y compuestos** reciben cada uno su propia área vertical de altura completa en el borde derecho del gráfico, etiquetada en el eje como **W-VP**, **W-DP** o **C-VP**, con un histograma cada una.

[SCREENSHOT: Profile Chart con varios conmutadores habilitados a la vez: letras TPO más barras de perfil de volumen diario por sesión en el área principal, y tres áreas verticales etiquetadas W-VP, W-DP y C-VP en el borde derecho, cada una con un histograma de altura completa | dc-es-profile-chart-window-04.png]

## El panel Indicators

El icono de indicadores de la barra de herramientas abre el panel **Indicators**: el estado real detrás de la fila de conmutadores. Cada tipo de perfil es una instancia de indicador con un nombre sistemático: **DT:** = letras TPO, **DP: Vol** = perfil de volumen, **DP: Delta** = perfil de delta; **Multiple 1 D** = uno por día, **Multiple 1 W** = semanal, **Composite** = todo el rango cargado. Las instancias viven en **Chart Area 1** (el área principal) o en **Vertical Chart Area 1/2/3** (las columnas del borde derecho). Cada fila tiene un icono de papelera (eliminar), un icono de ojo (mostrar/ocultar, se aplica en vivo) y un icono de engranaje (configuración), además de un botón verde **Indicators**.

La fila de conmutadores y este panel pueden desincronizarse brevemente tras conmutaciones rápidas: en caso de duda, confíe en el panel Indicators; refleja lo que realmente se dibuja. Si se pueden añadir más instancias de perfil más allá de los conmutadores predefinidos mediante el botón verde es [CONFIRM: adding extra DT/DP instances through the Indicators button].

[SCREENSHOT: Panel Indicators abierto sobre el Profile Chart listando Chart Area 1 con Price y varias instancias DT y DP: Vol, más Vertical Chart Areas 1-3 con una instancia semanal o compuesta cada una, con los iconos de papelera, ojo y engranaje visibles por fila | dc-es-profile-chart-window-05.png]

## Cómo leerlo

En modo TPO cada sesión se dibuja como un perfil de letras: cada letra marca un período de tiempo de la sesión, de modo que una fila de precio con muchas letras mantuvo interés de negociación durante muchos períodos, mientras que letras solitarias en los extremos marcan excursiones breves. Una línea magenta marca el POC de cada sesión (el nivel más negociado/más visitado) y líneas discontinuas marcan los límites del área de valor, siguiendo las convenciones estándar del Market Profile; consulte [[market-profile-tpo]] para el conjunto completo de interpretación.

Varios detalles visuales de esta ventana aún no están documentados y su significado exacto puede variar: los grupos de colores de las letras, las filas subrayadas y las barras verticales verdes, moradas y amarillas que flanquean cada sesión. Lo mismo aplica a los colores de tipo mapa de calor (amarillo/naranja/rojo/verde/magenta) de las barras del perfil de volumen. Describa los niveles por su estructura (POC, área de valor, singles) en lugar de fiarse de estos colores hasta que se confirmen. [CONFIRM: legend for TPO letter colors, underlined rows, per-session vertical range bars, and volume-profile heat colors]

Pulse reproducir en el perfil interactivo de abajo para ver cómo las letras de una sesión se apilan período a período: pase el cursor sobre cualquier fila para ver qué períodos tocaron ese precio, y observe cómo se forman el POC y el área de valor.

[WIDGET: tpo-lab]

## Operar desde el Profile Chart

El conmutador **Trading panel** (extremo derecho de la fila inferior) acopla el mismo panel de trading lateral que el gráfico de precios: símbolo, cantidad abierta y lecturas de P/L, **Qty**, **Broker/Account**, la cuadrícula de botones **MKT | BID-ASK | LMT | STP | STP LMT**, **Cancel + Breakeven**, **Cancel and Flat**, el bloque de estrategia OCO con los botones de opción **Server/Client** y **Link pending orders**. El icono **$** de la barra de herramientas se pone verde cuando el trading está habilitado.

El menú de clic derecho es de la misma familia que el del gráfico de precios: modos puntero/cruceta/mano/zoom, **Drawing Objects** y **Drawing Utilities**, **Trading Enabled** (Ctrl Alt T), **Show Trading Panel** (Ctrl Alt P), **Show Historical Orders**, **Trading Settings**, **Rebuild Chart**, **Template**, **Indicators** (Ctrl I) y **Properties** (Ctrl P), más una entrada extra al final para el indicador bajo el cursor (por ejemplo "DT: Multiple 1 D (2)"), un atajo a la configuración de esa instancia.

Consulte [[trading-from-chart]] y [[trading-panel-reference]] para el flujo de trabajo de trading completo: todo lo que hay allí aplica aquí.

[SCREENSHOT: Profile Chart con el panel de trading acoplado a la derecha mostrando el campo Qty, la cuadrícula MKT/BID-ASK/LMT/STP/STP LMT, los botones Breakeven y Cancel and Flat y el bloque OCO, con el icono $ de la barra de herramientas en verde | dc-es-profile-chart-window-06.png]

## Referencia de configuración

| Control | Dónde | Qué hace |
|---|---|---|
| Menú desplegable de símbolo | Encabezado | Cambia el instrumento o el mes de contrato; el gráfico vuelve a descargar los datos (insignia **DWT:**). |
| Menú de historia (p. ej. **30D - BT**) | Encabezado | Cuánta historia se carga (30D = 30 días) y su base (BT = Based on Tick). Lista completa de opciones sin confirmar. |
| Menú **N T** | Encabezado | Valores predefinidos de agrupamiento de ticks más **Set Ticks Grouping** para valores personalizados; reconstruye el gráfico. |
| Conmutadores de tipo de perfil | Fila inferior | Selección múltiple; cada uno añade/elimina una superposición de perfil. |
| Conmutador **Trading panel** | Fila inferior, extremo derecho | Muestra/oculta el panel de trading acoplado. |
| **Indicators** (Ctrl I) | Icono de la barra / clic derecho | El panel que gestiona todas las instancias de perfil (papelera/ojo/engranaje por fila). |
| **Properties** (Ctrl P) | Clic derecho | Diálogo de propiedades de la ventana, como en el gráfico de precios. |
| **Rebuild Chart** | Clic derecho | Limpia y redibuja el gráfico: primer arreglo ligero para fallos de renderizado. |
| **Template** | Clic derecho | Guarda o carga la configuración de la ventana ([[templates-workspaces]]). |
| Engranaje por indicador | Panel Indicators | Abre el diálogo de configuración propio de esa instancia de perfil. |

## Solución de problemas

- **El gráfico está en blanco (solo una línea de precio discontinua).** Todos los tipos de perfil están desactivados. Habilite uno en la fila inferior (empiece por **TPO**), o abra el panel Indicators y compruebe si las instancias DT/DP fueron ocultadas (ojo) o eliminadas (papelera). Si aun así no se dibuja, clic derecho → **Rebuild Chart**.
- **Atascado en Building chart / Downloading data.** La ventana descarga la historia antes de renderizar. **LDT:** en la barra principal significa que está cargando datos del disco; **DWT:** significa que está descargando del servidor de la fuente. Las ventanas de historia grandes y los datos de tick llevan tiempo. Si nunca termina mientras otros gráficos cargan bien, consulte [[data-delayed-lagging]] y considere volver a descargar los datos ([[download-data]]).
- **Las filas son demasiado finas, las letras ilegibles.** Aumente el agrupamiento de ticks (menú **N T**: pruebe 20 T o 100 T, o un valor personalizado mediante **Set Ticks Grouping**). El gráfico se reconstruye con filas más altas.
- **Los conmutadores parecen apagados pero las superposiciones siguen dibujándose.** Una breve desincronización entre la fila de conmutadores y el panel Indicators: abra el panel Indicators y gestione allí las instancias directamente.
- **Selector de instrumentos vacío.** No hay nada suscrito en [[symbol-manage]].

## Consejos y errores comunes

- No trate la fila de conmutadores como excluyente: superponer TPO con un perfil de volumen diario por sesión es uno de los puntos fuertes de la ventana.
- Mantenga razonable el número de superposiciones habilitadas; cinco o más por sesión se vuelve visualmente denso muy rápido. Use los iconos de ojo del panel Indicators para aparcar superposiciones en lugar de eliminarlas.
- Las variantes RTH/ETH son superposiciones separadas, no filtros sobre el TPO principal: habilitar **TPO (RTH)** añade un perfil solo de RTH junto al de sesión completa.
- Los meses de contrato importan: el menú de símbolo también carga contratos antiguos, y cada cambio vuelve a descargar datos. Consulte [[symbol-rollover]] si su símbolo parece atascado en un contrato antiguo.
- La ventana admite la barra de dibujo completa: los niveles de perfil que marque con líneas horizontales pueden gestionarse como cualquier dibujo del gráfico ([[drawing-tools]]).

## Artículos relacionados

- [[market-profile-tpo]]
- [[understanding-volume-profile]]
- [[understanding-auction-theory]]
- [[deep-profile]]
- [[quick-chart-templates]]
- [[trading-panel-reference]]