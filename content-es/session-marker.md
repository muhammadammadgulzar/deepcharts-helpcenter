---
title: "Marcador de sesión"
slug: "session-marker"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "beginner"
time: "6 min read"
description: "Marque las sesiones de trading asiática, europea y estadounidense en su gráfico, con el máximo, mínimo, apertura, cierre y rango de desequilibrio de cada sesión dibujados como niveles."
keywords: ["marcador de sesión", "session marker", "sesiones de trading", "sesión asiática", "sesión europea", "sesión estadounidense", "máximo mínimo de sesión", "apertura de sesión", "initial balance", "horarios de sesión"]
source_hash: "8a08dfc4c62160b4"
ai_translated: true
source_hash: "8a08dfc4c62160b4"
---
Los mercados de futuros operan casi las veinticuatro horas, pero el mercado no se comporta igual a las 3 AM que después de la apertura de EE. UU. El Marcador de sesión (Session Marker) divide el día de trading en sus tres sesiones principales, la asiática, la europea y la estadounidense, y dibuja cada una directamente en su gráfico junto con sus niveles de referencia clave.

En lugar de memorizar horarios de sesión o forzar la vista en el eje de tiempo, usted ve de un vistazo qué sesión produjo cada parte de la acción del precio del día y dónde se sitúan los máximos y mínimos de cada sesión.

## Qué es

El Marcador de sesión muestra las diferentes sesiones de mercado (asiática, europea y estadounidense) en el gráfico y marca sus máximos y mínimos. Para cada sesión habilitada puede dibujar:

- Las líneas de **máximo y mínimo de la sesión**.
- Los niveles de **máximo y mínimo del desequilibrio**: el rango construido durante la ventana de desequilibrio de apertura de la sesión (60 minutos por defecto).
- Los niveles de **apertura y cierre** de la sesión.
- **Fondos sombreados** para la sesión completa y para la ventana de desequilibrio.
- Un **marcador de apertura** en la apertura de la sesión, con colores separados para las condiciones positivas (alcistas) y negativas (bajistas).

## Cuándo usarlo

- Para ver al instante qué sesión (asiática, europea o estadounidense) formó cada parte del rango nocturno y diurno.
- Para operar contra los niveles nocturnos: los máximos y mínimos de las sesiones asiática y europea actúan con frecuencia como niveles de reacción una vez que abre la sesión de EE. UU.
- Para seguir el rango de desequilibrio del inicio de la sesión y vigilar rupturas o rechazos en sus extremos.
- Para mantener visibles las aperturas y cierres de sesión como precios de referencia sin dibujarlos a mano cada día.

## Inicio rápido

1. Abra un gráfico y haga clic en el icono de gráfico de barras en la esquina superior izquierda para abrir el panel **Indicators**.
2. Haga clic en **Indicators** para abrir la lista completa **Indicator List**.
3. Busque "Session Marker" y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración, habilite las sesiones que opera y compruebe la hora de inicio de cada sesión contra su mercado. La sesión estadounidense tiene por defecto una hora de inicio de **15:30:00**. [CONFIRM: which time zone session start times are interpreted in]
5. Elija colores de fondo contrastados por sesión para que los tres bloques sean fáciles de distinguir.

[SCREENSHOT: Un gráfico de futuros de 5 minutos con el Session Marker activo — tres bloques de sesión sombreados con color (asiática, europea, estadounidense) visibles a lo largo del día, con las líneas de máximo/mínimo de sesión y el rango de desequilibrio resaltado dentro de la sesión estadounidense | dc-es-session-marker-01.png]

## Cómo leerlo

- **Bloques de sesión**: cada bloque sombreado es una sesión. Comparar sus tamaños le dice de dónde vino la volatilidad del día: un bloque europeo ancho y un bloque asiático estrecho es un patrón común en futuros.
- **Máximos y mínimos de sesión**: son referencias naturales de soporte y resistencia. Un empuje de la sesión de EE. UU. a través del máximo europeo es una operación distinta de un rechazo en él.
- **Rango de desequilibrio**: el máximo y el mínimo formados durante los primeros minutos de la sesión (la ventana **Imbalance Minutes**). Un precio que se acepta fuera de este rango inicial sugiere convicción direccional; la rotación repetida de vuelta a su interior sugiere equilibrio.
- **Niveles de apertura y cierre**: la apertura de la sesión en particular es una referencia muy vigilada: operar por encima de la apertura es en general constructivo para esa sesión, por debajo es en general débil.
- **Marcador de apertura**: señala la apertura de la sesión, coloreado como positivo (alcista) o negativo (bajista). La regla exacta de coloreado puede variar: trátelo como una pista direccional rápida y no como una señal.

## Referencia de configuración

### Configuración general

| Configuración | Qué hace |
|---|---|
| **Imbalance Minutes** | Duración de la ventana de desequilibrio de cada sesión, medida desde la apertura de la sesión. El rango construido en esta ventana se dibuja como los niveles de desequilibrio. Predeterminado: 60. |
| **Line Width** | Grosor de las líneas del marcador. Predeterminado: 20. |
| **Line Style** | Apariencia de las líneas de nivel de sesión. |
| **Extended** | Extiende las marcas de sesión más allá del horario de trading estándar. |
| **Text Size** | Tamaño de fuente de las etiquetas de sesión. Predeterminado: 11.00. |
| **Text Color** | Color de las etiquetas de sesión. |

### Sesiones asiática, europea y estadounidense

Cada una de las tres sesiones tiene un bloque de configuración idéntico:

| Configuración | Qué hace |
|---|---|
| **Enable** | Activa o desactiva las marcas de la sesión. |
| **Start time** | Cuándo comienza la sesión. La sesión estadounidense tiene por defecto 15:30:00. |
| **High/low line colors** | Colores de las líneas de máximo y mínimo de la sesión. |
| **Imbalance high/low colors** | Colores de los niveles de máximo y mínimo de la ventana de desequilibrio. |
| **Open and close colors** | Colores de los niveles de apertura y cierre de la sesión. |
| **Range background colors** | Sombreado de fondo para el rango completo de la sesión y para el rango de desequilibrio. |

### Marcador de apertura

| Configuración | Qué hace |
|---|---|
| **Enable** | Muestra u oculta el marcador en la apertura de la sesión. |
| **Positive marker color** | Color usado para el caso alcista. |
| **Negative marker color** | Color usado para el caso bajista. |

[SCREENSHOT: El diálogo de configuración de Session Marker mostrando el grupo General (Imbalance Minutes, Line Width, Line Style, Extended, Text Size, Text Color) con los grupos de las sesiones asiática, europea y estadounidense contraídos debajo | dc-es-session-marker-02.png]

## Consejos y errores comunes

- **Verifique las horas de inicio antes de confiar en los niveles.** Si un bloque de sesión comienza con una hora de desfase, cada máximo, mínimo y nivel de desequilibrio hereda el error: compruebe los valores predeterminados contra el horario de sesión real de su instrumento, incluidos los cambios de horario de verano.
- **Deshabilite las sesiones que no usa.** Si solo opera la mañana de EE. UU., ejecutar las tres sesiones con fondos y niveles completos satura el gráfico; conserve las sesiones nocturnas pero redúzcalas a solo líneas de máximo/mínimo mediante su configuración de color.
- **El rango de desequilibrio solo es tan significativo como su ventana.** Los 60 minutos predeterminados son una elección habitual, pero un producto rápido puede construir su rango de apertura en mucho menos tiempo: ajuste **Imbalance Minutes** a cómo abre realmente su mercado.
- **Combínelo con un plan consciente de las sesiones.** Los niveles de sesión son contexto, no entradas; combínelos con los conceptos de [[understanding-market-structure-sessions]] para decidir qué niveles importan hoy.

## Artículos relacionados

- [[understanding-market-structure-sessions]]
- [[session-imbalance]]
- [[important-levels]]
- [[pivot-points]]
- [[different-types-of-input]]
- [[indicator-layout]]