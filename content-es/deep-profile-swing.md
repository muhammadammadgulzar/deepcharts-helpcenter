---
title: "Deep Profile Swing"
slug: "deep-profile-swing"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "5 min read"
description: "Referencia de Deep Profile Swing: perfiles de volumen automáticos en cada swing de precio, cuatro métodos de detección de swings, VWAP de swing y criterios de parada."
keywords: ["profile swing", "perfil de swing", "perfil de volumen de swing", "vwap de swing", "volumen oferta demanda", "volumen BOS", "detección de swings"]
source_hash: "9640f97a09f8ad52"
ai_translated: true
source_hash: "9640f97a09f8ad52"
---
Deep Profile Swing traza automáticamente un perfil de volumen en cada swing de precio, según los parámetros personalizados que usted establezca. En lugar de perfilar un período fijo como un día o una semana, perfila los propios movimientos: cada impulso y cada retroceso obtiene su propia distribución de volumen.

Eso lo convierte en una herramienta estructural: le muestra cómo se distribuyó el volumen dentro de un tramo del movimiento, dónde se sitúa el VWAP del swing, y qué niveles creados durante el swing pueden actuar más tarde como oferta o demanda, incluso alrededor de los puntos de ruptura de estructura (Break of Structure, BOS).

## Qué es

El indicador detecta swings usando uno de cuatro métodos (conteo de barras, nuevos extremos, reversión absoluta o reversión por ticks) y luego construye un perfil — volumen, ask/bid, delta, delta más volumen, o porcentaje de delta — sobre cada swing detectado. También puede calcular un VWAP por swing. Criterios de parada separados e independientes controlan cuándo se considera terminado un swing.

Si la anatomía de un perfil es nueva para usted, explore primero el histograma en vivo a continuación: pase el cursor sobre las filas y observe el POC y el área de valor, las mismas estructuras que lleva cada perfil de swing.

[WIDGET: volume-profile-lab]

## Cuándo usarlo

- Opera estructura de mercado y quiere ver el volumen que construyó cada tramo, no solo la forma del tramo.
- Busca zonas de oferta/demanda ancladas a la actividad real del swing en lugar de a ventanas de tiempo arbitrarias.
- Quiere un VWAP anclado al swing que empiece de cero con cada nuevo movimiento.
- Analiza si un tramo de ruptura estuvo respaldado por participación real (un perfil completo y bien distribuido) o fue delgado (un tramo hueco y de bajo volumen).

## Inicio rápido

1. Abra un gráfico y añada **Deep Profile Swing** desde el botón **Indicators** del gráfico.
2. En **Main Swing Settings**, elija un **Swing Type** — **Reversal Tick** es un inicio práctico para futuros intradía: un swing termina cuando el precio se mueve un número determinado de ticks en contra de la dirección actual.
3. Establezca el umbral de reversión (**Tick Rev.**) lo bastante grande como para que el ruido ordinario no termine un swing.
4. En **General settings**, establezca **VBP Type** en **Volume** y **Display Mode** en **Profile And Lines**.
5. Aplique: cada swing detectado lleva ahora su propio perfil.

[SCREENSHOT: Gráfico con Deep Profile Swing activo mostrando histogramas de volumen separados dibujados sobre tres swings de precio consecutivos, con las líneas de nivel de swing extendiéndose hacia la derecha | dc-es-deep-profile-swing-01.png]

Si el gráfico se satura, cambie **Display Mode** a **Lines Only**: conserva los niveles clave y pierde los histogramas.

## Cómo leerlo

- **Cada perfil = un swing.** El histograma muestra dónde se concentró el volumen dentro de ese tramo. Un nodo grueso a mitad del swing marca una zona de batalla; un volumen que se adelgaza hacia el final del swing sugiere que el movimiento se quedó sin participantes.
- **Los máximos/mínimos de swing con volumen pesado adyacente** suelen convertirse en referencias de oferta o demanda en la siguiente visita.
- **VWAP de swing** (Length Type = VWAP): el precio medio ponderado por volumen del propio movimiento. Un precio que se mantiene por encima de un VWAP de swing ascendente mantiene el tramo constructivo; una ruptura confirmada (consulte **VWAP Break Ticks**) termina el trazado por diseño.
- **Los tipos Delta y Delta Percentage** revelan si el swing fue impulsado por compradores o vendedores agresivos: un rally cuyo perfil de swing muestra un delta débil o negativo se elevó con poca agresión y merece desconfianza.

## Referencia de configuración

Agrupada como en el diálogo del indicador.

### Configuración general

| Configuración | Qué hace |
|---|---|
| **VBP Type** | Método de análisis del perfil: **Volume** (volumen total por nivel: los precios más activos del swing), **Ask Bid Volume** (volumen ask y bid separados para evaluar el equilibrio comprador/vendedor), **Delta** (volumen de compra menos venta: dirección de la presión), **Delta and Total Volumes** (ambos combinados), **Delta Percentage** (delta como porcentaje del volumen total: fuerza relativa de la presión) |
| **Length Type** | Base de cálculo: **Swing** (un perfil de volumen por movimiento de swing) o **VWAP** (precio medio ponderado por volumen dentro del swing) |
| **Include Reversal Bar** | Incluye o excluye del perfil la barra de reversión que marca el inicio de un nuevo swing |
| **Display Mode** | **Profile And Lines** (histograma más líneas de niveles clave) o **Lines Only** (solo líneas de niveles clave: gráficos limpios) |

### Main Swing Settings

| Configuración | Qué hace |
|---|---|
| **Swing Type** | Método de detección: **Left Right Bar** (un swing es un extremo con un número definido de barras a cada lado), **Highest Lowest** (nuevos máximos/mínimos respecto al movimiento previo), **Reversal Absolute** (un movimiento de precio fijo en contra de la tendencia activa la reversión), **Reversal Tick** (un número definido de ticks en contra de la tendencia: adecuado para trading a corto plazo) |
| **Abs. Rev.** | Movimiento de precio mínimo requerido para una reversión cuando se usa **Reversal Absolute** |
| **Tick Rev./Highest Lowest** | Cantidad de ticks necesaria para la detección de reversión o para la identificación de nuevos máximos/mínimos |
| **Right Bar** | Con **Left Right Bar**: cuántas barras a la derecha deben formarse antes de validar un swing |

### Swing Stop Settings

Estos parámetros reflejan los Main Swing Settings pero operan de forma independiente, de modo que los criterios que terminan un swing pueden diferir de los que lo detectan.

| Configuración | Qué hace |
|---|---|
| **Enable Stop Swing** | Activa o desactiva los criterios independientes de terminación de swing |

### VWAP Swing Settings

Se aplican cuando **Length Type** = **VWAP**:

| Configuración | Qué hace |
|---|---|
| **Swing Min Ticks** | Ticks mínimos requeridos para iniciar un swing: filtra los movimientos pequeños |
| **Swing Max Ticks** | Ticks máximos antes de que el swing actual se cierre y comience uno nuevo: evita que un movimiento enorme se trate como un solo swing |
| **VWAP Break Ticks** | Ticks necesarios para confirmar una ruptura del VWAP dentro del swing; una vez superados, el VWAP del swing actual deja de trazarse |

[SCREENSHOT: Diálogo de configuración de Deep Profile Swing abierto en Main Swing Settings con el menú desplegable Swing Type expandido mostrando los cuatro métodos de detección | dc-es-deep-profile-swing-02.png]

## Consejos y errores comunes

- **¿Aparecen perfiles en cada pequeña oscilación?** La detección es demasiado sensible. Aumente **Abs. Rev.**, **Tick Rev.** o **Right Bar** (según el que use su Swing Type), y considere habilitar las reglas de Stop Swing.
- **Quiere niveles, no histogramas:** **Display Mode** = **Lines Only**.
- **La línea del VWAP de swing se detiene a mitad del movimiento:** o bien se alcanzó **VWAP Break Ticks** (una ruptura confirmada detiene el trazado) o se alcanzó **Swing Max Ticks** (el swing se cerró y comenzó uno nuevo). Ambos son por diseño, no un error.
- **La elección del método de detección importa más que el estilo.** Left Right Bar confirma tarde pero es estable; la reversión por ticks/absoluta reacciona más rápido pero cambia más a menudo en mercados laterales. Ajústelo a su marco temporal antes de afinar cualquier otra cosa.
- Las distintas elecciones de tipo **Input Data** en la familia de perfiles cambian las formas: si este perfil de swing discrepa de su [[deep-profile]], compare primero las configuraciones.

## Artículos relacionados

- [[deep-profile]]
- [[understanding-volume-profile]]
- [[understanding-vwap]]
- [[swing-point]]
- [[different-types-of-input]]
- [[indicator-layout]]