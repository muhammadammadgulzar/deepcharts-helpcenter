---
title: "Desequilibrio de sesión"
slug: "session-imbalance"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Referencia del indicador Desequilibrio de sesión (Session Imbalance): máximo, mínimo y punto medio del Initial Balance más los niveles de extensión del 50% y 100%, con cada configuración y alerta explicada."
keywords: ["desequilibrio de sesión", "session imbalance", "initial balance", "máximo IB", "mínimo IB", "extensiones del initial balance", "rango de la primera hora", "indicador de rango de apertura"]
source_hash: "007b39b16f489f57"
ai_translated: true
source_hash: "007b39b16f489f57"
---
El indicador Desequilibrio de sesión (Session Imbalance) resalta los niveles de precio clave creados en la primera hora de trading, o en cualquier periodo personalizado que usted defina. Traza el máximo del Initial Balance, el mínimo del Initial Balance y el punto medio entre ambos, y puede añadir niveles de extensión opcionales del 50% y 100% por encima y por debajo del rango.

El Initial Balance es una piedra angular del day trading basado en subastas: el rango construido durante el periodo de apertura enmarca cómo se lee el resto de la sesión. Para la teoría que hay detrás, consulte [[understanding-auction-theory]] y [[understanding-market-structure-sessions]].

## Qué es

Al comienzo de cada sesión, el indicador mide el máximo y el mínimo registrados durante el número de minutos configurado (60 por defecto) y proyecta esos niveles, más el punto medio, a lo largo del resto de la sesión. Los niveles de extensión al 50% y 100% del rango del Initial Balance se pueden proyectar más allá del máximo y el mínimo, dándole objetivos precalculados para los días de ruptura.

## Cuándo usarlo

- Para enmarcar el día de trading: rotación dentro del Initial Balance frente a extensión más allá de él.
- Para obtener objetivos de ruptura listos (extensiones del 50% y 100%) sin mediciones manuales.
- Para estudiar cuántas sesiones recientes respetaron o extendieron su rango de apertura, cargando varios días.
- Para recibir alertas cuando el precio supera los extremos del Initial Balance o alcanza un nivel de extensión.

## Inicio rápido

1. Añada **Session Imbalance** a su gráfico.
2. Mantenga **Number of Minutes** en su valor predeterminado de 60 para el clásico Initial Balance de la primera hora.
3. Establezca **Number of Days (0 - All)** en un número pequeño (por ejemplo 5) mientras aprende la herramienta: 0 dibuja todas las sesiones disponibles y puede saturar el gráfico.
4. Habilite los niveles de extensión **50%** y **100%** si quiere que los objetivos de ruptura se tracen automáticamente.
5. Active los grupos de alertas que le interesen (extremos del Initial Balance, niveles del 50%, niveles del 100%) y elija un sonido para cada uno.

[SCREENSHOT: Un gráfico intradía de futuros con el indicador Session Imbalance trazando las líneas de máximo, mínimo y punto medio del Initial Balance para los primeros 60 minutos, con los niveles de extensión del 50% y 100% visibles por encima y por debajo | dc-es-session-imbalance-01.png]

## Cómo leerlo

El Initial Balance es el rango de la subasta de apertura del mercado. Un precio que se mantiene dentro de él señala una sesión equilibrada y rotacional en la que la jugada clásica es operar contra los extremos. Una ruptura limpia que se mantiene más allá del máximo o el mínimo del IB señala extensión de rango, una sesión direccional, y las extensiones del 50% y 100% se convierten en objetivos naturales: la extensión del 100% es una proyección completa del rango de apertura más allá del lado roto.

La línea **Mid** también importa en el intradía: a menudo actúa como pivote entre la mitad de los compradores y la de los vendedores del rango de apertura, y las reacciones ahí le indican qué lado tiene el control.

## Referencia de configuración

### Configuración general

| Configuración | Qué hace |
|---|---|
| **Number of Minutes** | Duración del periodo usado para calcular el desequilibrio de sesión. Predeterminado: 60 minutos (el clásico Initial Balance). |
| **Custom Start Time** | Cuando está habilitado, le permite establecer su propia hora de inicio; cuando está deshabilitado, el cálculo comienza en la apertura de la sesión (para los futuros de EE. UU., a las 00:00, hora de Europa Central). |
| **Number of Days (0 - All)** | Cuántas sesiones se muestran. 0 muestra todas las sesiones disponibles. |

### Configuración de trazado (Plot Settings)

| Configuración | Qué hace |
|---|---|
| **High Color** / **Low Color** / **Mid Color** | Colores de las tres líneas principales. |
| **Line Width** | Grosor de las líneas trazadas. |
| **Line Style** | Sólida, discontinua, punteada y otros estilos. |
| **Text Size** / **Text Alignment** | Tamaño y ubicación de las etiquetas de los niveles. |

### Niveles de extensión

| Configuración | Qué hace |
|---|---|
| **50% Extensions** | Activa o desactiva los niveles de extensión del 50%, con una selección de color dedicada. |
| **100% Extensions** | Activa o desactiva los niveles de extensión del 100%, con una selección de color separada. |

### Alertas

Tres categorías de alertas, cada una con opciones de ventana emergente y sonido y un tipo de sonido seleccionable:

- **HH/LL Alerts**: se disparan cuando el precio supera los extremos del Initial Balance.
- **50% Level Alerts**: se disparan en los umbrales de extensión del 50%.
- **100% Level Alerts**: se disparan en los umbrales de extensión del 100%.

[SCREENSHOT: El diálogo de configuración de Session Imbalance mostrando el grupo General con Number of Minutes en 60, y los campos Custom Start Time y Number of Days | dc-es-session-imbalance-02.png]

## Consejos y errores comunes

- **Verifique la hora de inicio contra su instrumento.** Si la apertura de sesión de su mercado no coincide con el valor predeterminado, habilite **Custom Start Time** y establézcala explícitamente: un Initial Balance medido desde una apertura incorrecta es peor que ninguno.
- **No trate cada toque de una extensión como una reversión.** En días de tendencia fuerte, el precio puede atravesar el nivel del 50% y alcanzar la extensión del 100%; lea los niveles junto con la estructura del día.
- **Limite los días mostrados.** **Number of Days** en 0 carga todas las sesiones, lo cual es útil para estudios pero pesado para gráficos de trading en vivo.
- **Use las alertas en lugar de vigilar líneas.** Los tres grupos de alertas cubren los eventos significativos; deje que ellos hagan la vigilancia.

## Artículos relacionados

- [[understanding-auction-theory]]
- [[understanding-market-structure-sessions]]
- [[market-profile-tpo]]
- [[session-marker]]
- [[different-types-of-input]]
- [[indicator-layout]]