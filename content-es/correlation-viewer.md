---
title: "Visor de correlación"
slug: "correlation-viewer"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "Compare cómo se movieron varios instrumentos en un mismo eje porcentual compartido, configure la comparación en el diálogo Correlation Properties y lea las barras por símbolo."
keywords: ["visor de correlación", "correlación", "comparar símbolos", "comparar instrumentos", "fuerza relativa", "NQ vs ES", "comparación porcentual", "visor de corelación", "seleccionar instrumento base"]
source_hash: "7fca4bf718525b5f"
ai_translated: true
source_hash: "7fca4bf718525b5f"
---
El Visor de correlación (Correlation Viewer) coloca varios instrumentos en un mismo eje porcentual compartido para que pueda ver, de un vistazo, qué mercado se movió más en la misma ventana temporal, por ejemplo NQ frente a ES en los últimos 15 días. En lugar de comparar a ojo dos gráficos con escalas de precio diferentes, obtiene una única comparación normalizada.

Esta referencia cubre cómo abrir el visor, el diálogo Correlation Properties (propiedades de correlación), cómo añadir y eliminar símbolos de comparación, y cómo se lee la vista renderizada.

## Qué es

El Visor de correlación responde a la pregunta "¿cómo se movieron estos mercados en relación entre sí?" Usted elige un instrumento base, añade los símbolos que desea comparar, y el visor dibuja el cambio porcentual de cada símbolo en el mismo eje. Como todo se expresa en porcentaje en lugar de precio, los instrumentos con niveles de precio muy diferentes (un futuro de índice frente a un futuro de divisas, por ejemplo) se vuelven directamente comparables.

El visor carga sus propios datos desde su fuente de datos, como lo hace un gráfico, y su configuración puede editarse en cualquier momento después de la creación.

[SCREENSHOT: Ventana del Visor de correlación renderizada en el modo de visualización Bars con dos barras por símbolo (NQ y ES) en un eje porcentual compartido, con los nombres de los símbolos visibles bajo las barras y la escala porcentual en el eje y | dc-es-correlation-viewer-01.png]

## Cuándo usarlo

- Opera futuros de índices correlacionados (NQ, ES) y quiere ver cuál lidera o se rezaga.
- Quiere una lectura rápida de fuerza relativa entre un puñado de mercados sin construir un diseño de múltiples gráficos.
- Quiere comprobar si una correlación normalmente estrecha está divergiendo en su ventana de retrospección elegida.
- Quiere una comparación normalizada (basada en porcentajes) que ignore los niveles de precio absolutos.

## Inicio rápido

1. En la barra superior de la aplicación, elija **New → Correlation Viewer**.
2. Se abrirá la ventana **Select Base Instrument** (seleccionar instrumento base): el selector de instrumentos estándar con una barra lateral de bolsas, un cuadro de filtrado por escritura y una tabla **Symbol / Description / Exchange**. Elija su símbolo base y pulse **Select**.

[SCREENSHOT: Diálogo Select Base Instrument con la barra lateral de bolsas (All, CBOT, CME, COMEX, CRYPTO, EUREX, INDEX US y otras), el cuadro de filtrado por escritura y la tabla de símbolos visibles | dc-es-correlation-viewer-02.png]

3. Se abrirá el diálogo **Correlation Properties**. En la sección **GENERAL**, establezca **Days to load**, **TF type** y **TF** para la ventana de comparación.
4. En la sección **Symbols**, pulse el botón verde **Add symbol** por cada instrumento adicional que quiera comparar. Cada uno aparece como una ficha con su propia configuración de color.

[SCREENSHOT: Diálogo Correlation Properties con la sección Symbols mostrando las fichas NQ-CME y ES-CME, cada una con las muestras Price Down Color, Price Up Color y Retracement Color, y el botón verde Add symbol | dc-es-correlation-viewer-03.png]

5. Pulse **OK**. El visor muestra un indicador giratorio "Building chart" mientras descarga los datos, y luego renderiza una barra por símbolo en el eje porcentual compartido.

> **Nota:** Los selectores de instrumentos solo listan las bolsas que ha suscrito en Symbol Manage. Si el selector se ve vacío, configure primero sus suscripciones; consulte [[symbol-manage]].

## Anatomía de la ventana

La barra de título contiene, de izquierda a derecha:

| Elemento | Qué hace |
|---|---|
| Logotipo de DeepCharts | Marca de la ventana |
| **Icono de engranaje** | Reabre el diálogo Correlation Properties para que pueda editar la comparación después de la creación |
| **Icono de embudo** | [CONFIRM: what the funnel icon does in the Correlation Viewer — it is not necessarily the same rank filter as the Market Scanner's funnel] |
| Minimizar / maximizar / cerrar | Controles de ventana estándar |

[SCREENSHOT: Barra de título del Visor de correlación ampliada con los iconos de engranaje y embudo visibles y etiquetados | dc-es-correlation-viewer-04.png]

Mientras el visor carga, el cuerpo de la ventana muestra un indicador giratorio "Building chart" y una insignia **DWT:** con el nombre del símbolo aparece en la barra superior de la aplicación: DWT significa que los datos se están descargando desde su servidor de fuente de datos (LDT significaría que se están cargando datos ya presentes en el disco).

[SCREENSHOT: Visor de correlación mostrando el indicador giratorio Building chart con la insignia DWT: ES-CME visible en la barra superior de la aplicación | dc-es-correlation-viewer-05.png]

## Cómo leerlo

Con el **Display mode** (modo de visualización) establecido en **Bars** (el modo observado; otros modos de visualización no fueron verificados — [CONFIRM: the full Display mode option list and how each renders]), el visor dibuja una barra vertical por símbolo en un eje porcentual compartido, con el nombre del símbolo bajo cada barra.

Cada barra resume el movimiento porcentual de ese símbolo en la ventana cargada. En una sesión en la que NQ cayó mucho más que ES, la barra de NQ se extendió mucho más profundo en el eje porcentual negativo que la barra de ES: una lectura visual inmediata de debilidad relativa. Las barras tienen un cuerpo y una extensión más fina en forma de mecha. [CONFIRM: what the bar body versus the wick represents — for example net change versus the extremes of the loaded window]

Los colores de las barras parecen seguir los colores **Price Down Color** / **Price Up Color** configurados para cada símbolo en la sección Symbols, pero la asignación exacta de colores puede variar: si los colores importan para su lectura, establezca colores distintos por símbolo para que cada barra sea inequívoca.

[SCREENSHOT: Vista Bars renderizada, ampliada en la barra de un símbolo, mostrando el cuerpo y la extensión más fina en forma de mecha frente a las etiquetas del eje porcentual | dc-es-correlation-viewer-06.png]

## Añadir o eliminar símbolos

Puede cambiar la comparación en cualquier momento:

1. Haga clic en el **icono de engranaje** para reabrir **Correlation Properties**.
2. En la sección **Symbols**, pulse el botón verde **Add symbol**: el selector estándar **Select Instrument** se abre encima del diálogo. Elija un símbolo y confirme; aparecerá como una nueva ficha.
3. Para eliminar un símbolo, pase el cursor sobre su ficha y haga clic en el icono rojo de eliminación que aparece.
4. Pulse **OK**: el visor se reconstruirá con el conjunto de símbolos actualizado.

Cada ficha de símbolo lleva su propio **Price Down Color** (rojo por defecto), **Price Up Color** (verde por defecto) y **Retracement Color** (azul por defecto).

[SCREENSHOT: Selector Select Instrument abierto encima del diálogo Correlation Properties tras pulsar Add symbol | dc-es-correlation-viewer-07.png]

## Referencia de configuración

Toda la configuración vive en el diálogo **Correlation Properties**, mostrado al crearlo y reabrible mediante el **icono de engranaje**. **Apply** aplica los cambios en vivo; **OK** confirma y cierra.

### GENERAL

| Configuración | Predeterminado | Qué hace |
|---|---|---|
| **Days to load** | 15 | Cuántos días de historia cubre la comparación. Más días = una retrospección más larga y una descarga inicial más larga. |
| **TF type** | Minutes | La unidad de marco temporal de los datos subyacentes |
| **TF** | 15 | El valor del marco temporal (con TF type = Minutes, datos de 15 minutos) |
| **Display mode** | Bars | Cómo se renderiza la comparación. **Bars** dibuja una barra porcentual por símbolo. [CONFIRM: other Display mode options] |

[SCREENSHOT: Sección GENERAL de Correlation Properties mostrando Days to load, el menú desplegable TF type, el selector numérico TF y el menú desplegable Display mode | dc-es-correlation-viewer-08.png]

### CALCULATION

| Configuración | Predeterminado | Qué hace |
|---|---|---|
| **Mode** | Zig zag | El modo de cálculo de la correlación. Zig zag fue el único modo observado. [CONFIRM: other Mode options] |
| **Zig Zag Abs. Rev** | 0.50 | El umbral de reversión zig-zag utilizado por el cálculo. [CONFIRM: the exact unit and semantics of the 0.50 reversal value] |

### Symbols

| Configuración | Predeterminado | Qué hace |
|---|---|---|
| **Add symbol** | — | Botón verde; abre el selector Select Instrument para añadir un símbolo de comparación |
| **Price Down Color** (por símbolo) | Rojo | Color utilizado para ese símbolo cuando su precio bajó |
| **Price Up Color** (por símbolo) | Verde | Color utilizado para ese símbolo cuando su precio subió |
| **Retracement Color** (por símbolo) | Azul | Color utilizado para las líneas de superposición de retroceso de ese símbolo |

### RETRACEMENTS

| Configuración | Predeterminado | Qué hace |
|---|---|---|
| **Enable** | Off | Activa la superposición de retrocesos; las líneas de cada símbolo usan su Retracement Color (la colocación exacta de las líneas de retroceso puede variar: actívela y obsérvela en sus datos) |
| **Line width** | 1 | Ancho de las líneas de retroceso |

### REFERENCE LEVEL

| Configuración | Predeterminado | Qué hace |
|---|---|---|
| **Enable** | Off | Activa la línea de nivel de referencia. [CONFIRM: what level the reference line marks] |
| **Line width** | 1 | Ancho de la línea de referencia |
| **Line color** | Blanco | Color de la línea de referencia |

### Apariencia de la ventana

El mismo diálogo también contiene las secciones estándar de apariencia de ventana presentes en otras ventanas de DeepCharts:

| Sección | Configuración |
|---|---|
| **CHART AREA** | **Back Color**, **Border Color**, **Text Size** (12.00), **Text Color**, **Crosshair**, **Series Marker Margin (px)** (6) |
| **GRID** | Estilo de la cuadrícula |
| **USER ANNOTATIONS** | Estilo de las anotaciones |
| **EXTRA** | Opciones adicionales (contraídas por defecto) |

[SCREENSHOT: Diálogo Correlation Properties desplazado hasta las secciones CHART AREA, GRID, USER ANNOTATIONS y EXTRA con los botones Apply y OK visibles | dc-es-correlation-viewer-09.png]

## Consejos y errores comunes

- **¿Atascado en "Building chart"?** El visor descarga datos antes de renderizar: la insignia **DWT:** en la barra superior confirma que hay una descarga en curso. Compruebe que el punto de la insignia de la fuente de datos esté verde y dele tiempo; si los gráficos cargan bien pero el visor nunca renderiza, ciérrelo y vuelva a abrirlo, y consulte [[data-delayed-lagging]] si las descargas son lentas en general.
- **Un selector de instrumentos vacío significa que no hay suscripciones de bolsas.** Suscriba primero las bolsas que necesita en [[symbol-manage]].
- **Dé a cada símbolo colores distintos.** Con varios símbolos en un mismo eje, los colores **Price Down/Up** por símbolo son la única forma de distinguir las barras rápidamente.
- **Ajuste la retrospección a su pregunta.** **Days to load** y **TF** definen la ventana de comparación: una ventana de 15 días responde a una pregunta diferente que una ventana de 2 días.
- **La configuración es editable después de la creación.** Nunca necesita reconstruir el visor desde cero: el icono de engranaje reabre el diálogo completo de propiedades.

## Artículos relacionados

- [[scanner-window]]
- [[symbol-manage]]
- [[connect-data-feed]]
- [[chart-window]]
- [[profile-chart-window]]
- [[data-delayed-lagging]]