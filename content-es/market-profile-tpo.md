---
title: "Perfil de mercado (TPO)"
slug: "market-profile-tpo"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Cómo añadir, leer y configurar el indicador Perfil de mercado (TPO), incluidos el POC, el área de valor, los picos y valles, la división por sesiones y la fusión de perfiles."
keywords: ["perfil de mercado", "TPO", "time price opportunity", "gráfico TPO", "gráfico de letras", "punto de control", "área de valor", "market profile", "bloques tpo"]
source_hash: "997af6aec9083266"
ai_translated: true
source_hash: "997af6aec9083266"
---
El indicador Perfil de mercado (Market Profile), a menudo llamado TPO, por Time Price Opportunity, reorganiza la actividad del mercado para que pueda ver dónde pasó su tiempo el precio, no solo hacia dónde fue. El precio se dispone verticalmente y el tiempo horizontalmente, de modo que una consolidación tranquila forma un abultamiento ancho, mientras que un rechazo rápido deja una cola delgada.

Si es nuevo en el análisis basado en perfiles, lea primero [[understanding-volume-profile]] y [[understanding-auction-theory]]. Este artículo cubre el indicador en sí: cómo añadirlo, cómo leerlo y todas las opciones de su cuadro de diálogo.

## Qué es

El Perfil de mercado muestra la relación entre precio, tiempo y volumen. Cada período de trading se divide en intervalos, normalmente de 30 minutos, y cada intervalo se marca con una letra (A–Z). Cada nivel de precio que operó durante un intervalo recibe la letra de ese intervalo, y las letras se apilan formando una distribución que revela zonas de consolidación, niveles de valor justo y cómo se distribuyó el precio a lo largo de la sesión.

DeepCharts puede dibujar el resultado como los clásicos **Blocks** (bloques) con letras o como una forma condensada de **Profile** (perfil), y puede construir un único perfil compuesto sobre todo el período cargado, perfiles repetidos de una longitud fija o una ventana totalmente personalizada.

## Cuándo usarlo

- Para localizar de un vistazo áreas de equilibrio (valor justo) y áreas de desequilibrio (movimientos de tendencia).
- Para incorporar niveles de referencia clave — POC, límites del área de valor, impresiones únicas — a su planificación de operaciones.
- Para comparar la estructura de hoy con la de días anteriores fusionando perfiles en compuestos.
- Para separar la actividad nocturna de la del horario regular con el filtro de sesión.

## Inicio rápido

1. Añada **Market Profile** a su gráfico.
2. En la sección **General**, elija el **TPO Type** (tipo de TPO): **Profile** para una forma de distribución compacta, o **Blocks** para las letras TPO clásicas.
3. Configure el **Period** (período). Los perfiles diarios repetidos (**Multiples** con una longitud de 1 en **Days**) son el punto de partida estándar para el análisis intradía.
4. Habilite las funciones **POC** y **Value Area** para que el nivel de mayor actividad y la zona de valor justo queden marcados en cada perfil.
5. Deje el **Tick Grouping** (agrupamiento de ticks) en automático hasta que conozca el instrumento: podrá ajustarlo más adelante.

Observe cómo se construye un perfil TPO a continuación: pulse reproducir para ver cómo las letras se apilan en una distribución, y pase el cursor sobre las filas para inspeccionar qué períodos operaron en cada precio:

[WIDGET: tpo-lab]

## Cómo leerlo

Las secciones anchas del perfil son aceptación: el precio rotó allí el tiempo suficiente para que se imprimieran muchos intervalos de tiempo, lo que marca la idea actual del mercado sobre el valor justo. Las secciones delgadas — letras únicas en un extremo — son rechazo: el precio pasó brevemente y fue expulsado.

Tres elementos estructurales son los más importantes:

- **POC (Point of Control, punto de control)**: el nivel de precio con el volumen máximo del perfil. Actúa como centro gravitacional de la distribución y es un imán y nivel de reacción habitual.
- **Área de valor (Value Area)**: el rango de precios que contiene un porcentaje del volumen total definido por el usuario (el 70 % es la convención clásica del Perfil de mercado). Volver a operar dentro del valor tras una excursión es una señal de reversión a la media; la aceptación fuera del valor sugiere un movimiento direccional.
- **Picos y valles**: concentraciones y vacíos locales de actividad dentro del perfil. Los picos se comportan como soporte/resistencia de alto volumen; los valles son áreas de bajo volumen que el precio tiende a cruzar rápidamente.

## Referencia de configuración

### General

| Opción | Qué hace |
|---|---|
| **TPO Base Minute** | Cuántos minutos representa cada letra TPO. 30 minutos es la convención clásica del Perfil de mercado. |
| **TPO Type** | **Blocks** dibuja bloques TPO con letras; **Profile** dibuja la forma de distribución condensada. |
| **Period** | **Composite** construye un perfil sobre los datos cargados; **Multiples** construye perfiles repetidos de una longitud fija; **Custom** utiliza una ventana exacta. |
| **Length** | El tamaño de cada perfil cuando se usa **Multiples**, expresado en **Minutes**, **Days**, **Weeks** o **Months**. |
| **Custom date/time** | Inicio y fin de la ventana de análisis cuando **Period** es **Custom**. |

### Tick Grouping

- **Method** (método): **Automatic** deja que el indicador decida cuántos ticks de precio se fusionan en una fila del perfil; el modo manual le da control exacto.
- **Grouping factor** (factor de agrupamiento): escala el agrupamiento automático.
- **Manual ticks** (ticks manuales): el número exacto de ticks por fila en modo manual. Auméntelo en instrumentos con un tamaño de tick pequeño para mantener el perfil legible.

### Plot

- **Background / text coloring** (coloreado de fondo/texto): **None**, **Fixed**, **Fading** o **Multi Colors**.
- **Width** (anchura): cómo se calcula la anchura del perfil: **Automatic**, **% Period**, **Window Width** o **Fixed Bars**.
- **Opacity** y **Border width**: transparencia y contorno del perfil.
- **Style** (estilo): **Solid**, **Hollow**, **Line** o **Combined**.

### POC

- Resalta el nivel de precio con el volumen máximo.
- El modo de visualización dinámico (en desarrollo) muestra el POC a medida que se forma durante el período.
- **Line extension** (extensión de línea): **None**, **Till Interaction** (la línea se extiende hasta que el precio la toca) o **Till End Window**.
- El color, el grosor y el estilo son personalizables.

### Value Area

- **Percentage** (porcentaje): la proporción del volumen total que debe contener el área de valor.
- El modo en desarrollo traza el área de valor a medida que se forma.
- La extensión de línea proyecta los límites del área de valor hacia adelante en el tiempo.

### Peaks and Valleys

- **Sensitivity** (sensibilidad): cuán estricta es la detección de picos y valles.
- **Minimum volume threshold** (umbral mínimo de volumen): ignora los agrupamientos insignificantes.
- El resaltado con líneas opcionales marca los niveles detectados en el gráfico.

### Summary

Muestra estadísticas agregadas de cada perfil: volumen total, delta, recuentos de operaciones e información de ticks.

### Filter/Split Time

Análisis por sesiones utilizando referencias de zonas horarias de EE. UU. Modos: **None**, **Filter** (restringir el perfil a una sesión), **Splitted** (perfiles separados por sesión) o **Triple**.

### Clic derecho: fusionar y dividir

Haga clic con el botón derecho sobre un perfil en el gráfico para remodelarlo sin tocar el cuadro de diálogo de configuración: **Merge+** (fusionar hacia adelante), **Merge-** (fusionar hacia atrás), **Split+** (dividir hacia adelante), **Split-** (dividir hacia atrás) y **Reset All**.

[SCREENSHOT: El cuadro de diálogo de configuración de Market Profile abierto en la sección General, mostrando las opciones TPO Base Minute, TPO Type y Period | dc-es-market-profile-tpo-01.png]

## Consejos y errores comunes

- **La fusión es para compuestos.** Use **Merge+** / **Merge-** para construir perfiles compuestos de varios días alrededor de un área de equilibrio, y recuerde que **Reset All** existe para cuando la estructura cambie.
- **No confunda la forma del TPO con el volumen.** El recuento de letras mide tiempo en el precio; habilite la función **Summary** cuando también quiera las cifras de volumen, delta y recuento de operaciones.
- **Ajuste el agrupamiento de ticks al instrumento.** Un agrupamiento demasiado fino produce un perfil dentado e ilegible; uno demasiado grueso oculta los picos y valles que está buscando.
- **Compruebe el filtro de sesión frente al horario de su instrumento.** La función Filter/Split Time utiliza referencias de zonas horarias de EE. UU., así que verifique que la división cae donde espera antes de operar en base a ella.

## Artículos relacionados

- [[understanding-volume-profile]]
- [[understanding-auction-theory]]
- [[profile-chart-window]]
- [[deep-profile]]
- [[different-types-of-input]]
- [[indicator-layout]]