---
title: "Deep V-Tracker"
slug: "deep-v-tracker"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "5 min read"
description: "Indicador de flujo de órdenes con dos módulos: anomalías de patrones de vela (aceleración, ralentización, agotamiento) y niveles horizontales de absorción y presión."
keywords: ["deep v-tracker", "v tracker", "vtracker", "niveles de absorción y presión", "patrón de aceleración", "patrón de agotamiento", "etiquetas PC PE AC AE", "qué significa P en deep v-tracker"]
source_hash: "86de14fa4b13a040"
ai_translated: true
source_hash: "86de14fa4b13a040"
---
Deep V-Tracker es un sofisticado indicador de flujo de órdenes que detecta desequilibrios volumétricos y patrones de precio específicos. Combina dos módulos independientes: **Patterns**, que señala anomalías en la velocidad de trading y el comportamiento de las velas, y **Absorption & Pressure**, que dibuja niveles horizontales donde compradores o vendedores están ejerciendo fuerza real.

Juntos responden a dos preguntas distintas: "¿está ocurriendo algo inusual dentro de esta vela?" y "¿a qué precios están presionando o absorbiendo los grandes participantes?"

## Qué es

El módulo Patterns observa cómo se forma cada vela y marca tres anomalías: aceleración repentina en el flujo de órdenes, desaceleración (ralentización) y agotamiento del lado agresivo. El módulo Absorption & Pressure cartografía niveles horizontales de fuerza, etiquetados por tipo (variantes de Pressure, Absorption, Control y Extreme) y coloreados según qué lado actúa. Ambos módulos persiguen el mismo objetivo: exponer la actividad institucional y los niveles de operación de alta probabilidad.

[SCREENSHOT: Gráfico con Deep V-Tracker activo mostrando una caja de aceleración cian sobre el cuerpo de una vela más varias líneas horizontales de Absorption & Pressure en morado y verde con sus etiquetas P/A/PC/AC visibles | dc-es-deep-v-tracker-01.png]

## Cuándo usarlo

- Quiere detección automática de "tirones" del flujo de órdenes (aceleración) en puntos de rechazo y zonas de continuación de tendencia.
- Busca agotamiento en los extremos: compradores que terminan en una tendencia alcista, vendedores que terminan en una bajista.
- Quiere un mapa en vivo de niveles de presión y absorción con etiquetas claras de nivel clave y de invalidación.
- Prefiere un filtrado de ruido configurable (Strong/Medium/Weak) en lugar de una herramienta de señales de todo o nada.

## Inicio rápido

1. Abra la **Indicator List** (lista de indicadores) en su gráfico, busque **Deep V-Tracker** y haga clic en **+**.
2. Haga clic en el icono de **Settings** (configuración) para configurar los módulos.
3. En el módulo Patterns, habilite únicamente **Acceleration** para empezar (el equipo recomienda deshabilitar los demás patrones al principio para reducir el desorden) y establezca **Pattern Mode** en **Strong**.
4. En el módulo Absorption & Pressure, empiece con **Intensity = Strong** y **Level Mode = Conservative** para que solo se dibujen los niveles más estructurales.
5. Opcionalmente, cree alertas en **Options → Settings → Add Alert**; la alerta aparecerá entonces en la lista de Deep V-Tracker.

[SCREENSHOT: Diálogo de configuración de Deep V-Tracker mostrando el módulo Patterns con solo Acceleration habilitado y Pattern Mode establecido en Strong, y la sección Absorption & Pressure con los menús desplegables Intensity y Level Mode visibles | dc-es-deep-v-tracker-02.png]

## Cómo leerlo

### Módulo Patterns

| Patrón | Significado |
|---|---|
| **Acceleration** | Un "tirón" repentino en el flujo de órdenes durante la formación de la vela, dibujado como una caja cian rellena sobre el cuerpo de la vela. Señala zonas de fuerte interés institucional: puntos de rechazo y áreas de continuación de tendencia. |
| **Slowdown** | El movimiento del precio se desacelera en la dirección actual: posible consolidación o tendencia que se debilita. |
| **Exhaustion** | El lado agresivo ha agotado sus órdenes. En una tendencia alcista: los compradores han terminado, riesgo de reversión. En una bajista: los vendedores han terminado, puede formarse un suelo. |

### Módulo Absorption & Pressure

El color le indica qué lado actúa: **morado = actividad en el bid (presión vendedora)**, **verde = actividad en el ask (presión compradora)**.

| Etiqueta | Significado |
|---|---|
| **P** (discontinua) | Fuerte presión compradora. |
| **P** (continua) | Fuerte presión vendedora. |
| **A** | Absorción: órdenes agresivas bloqueadas por órdenes pasivas. |
| **PC** | Pressure Control: nivel clave de venta. |
| **PE** | Pressure Extreme: nivel de invalidación de la zona de presión. |
| **AC** | Absorption Control: nivel clave de compra. |
| **AE** | Absorption Extreme: nivel de invalidación de la zona de absorción. |

Lea los niveles de Control (**PC**, **AC**) como los precios clave alrededor de los cuales operar, y los niveles Extreme (**PE**, **AE**) como las líneas de "me equivoqué": si el precio atraviesa un Extreme, la zona correspondiente queda invalidada.

## Referencia de configuración

Agrupada por módulo como en el diálogo de configuración.

### Módulo Patterns

| Configuración | Qué hace |
|---|---|
| **Pattern toggles** | Habilita/deshabilita **Acceleration**, **Slowdown** y **Exhaustion** individualmente. |
| **Pattern Mode** | Filtro de ruido: **Strong** muestra solo niveles fuertes con ruido mínimo, **Medium** es equilibrado, **Weak** muestra más marcadores con mayor ruido. |
| **Color** (por patrón) | Color personalizado para cada tipo de patrón. |

### Módulo Absorption & Pressure

| Configuración | Qué hace |
|---|---|
| **Intensity** | **Strong** dibuja solo los niveles más fuertes (ruido mínimo), **Medium** equilibra visibilidad y ruido, **Weak** dibuja más niveles con más ruido. |
| **Level Mode** | **Conservative** favorece zonas estructurales sólidas, **Medium** es equilibrado, **Aggressive** dibuja niveles cercanos al precio que son más fáciles de violar. |
| **Control/Extreme Line Width** | Grosor de línea para los niveles Control y Extreme. |
| **Bid Color / Ask Color** | Colores para los niveles morados del lado bid y verdes del lado ask. |
| **Text Size** | Tamaño de las etiquetas P/A/PC/PE/AC/AE. |
| **Number of Bars** | Hasta dónde se extienden las líneas (longitud de línea en barras). |
| **Extend Far Right** | Extiende los niveles hasta la escala de precios. |

### Alertas

| Configuración | Qué hace |
|---|---|
| **Add Alert** | Cree alertas mediante **Options → Settings → Add Alert** para cualquier evento de patrón, presión o absorción; la alerta aparecerá entonces en la lista de Deep V-Tracker. |

## Consejos y errores comunes

- **¿Gráfico demasiado saturado?** Habilite solo el patrón Acceleration, suba **Pattern Mode** a **Strong** y establezca **Intensity = Strong** con **Level Mode = Conservative**. Vuelva a añadir detalle solo mientras el gráfico siga siendo legible.
- **No confunda el color de las etiquetas con el color del patrón.** El morado/verde codifica qué lado actúa en los niveles; la caja cian es específicamente el patrón Acceleration.
- **Respete los Extremes.** PE y AE son precios de invalidación: mantener una operación a través de ellos significa operar contra la propia lógica de la herramienta.
- **El Level Mode agresivo es para scalping.** Los niveles cercanos al precio se violan con más frecuencia; use el modo Conservative para estructura de estilo swing.
- **Contraste el agotamiento.** Una marca de Exhaustion combina bien con las columnas de ratio y COT de [[deep-stats]] antes de operar contra un movimiento.

## Artículos relacionados

- [[orderflow-101]]
- [[understanding-icebergs-absorption]]
- [[understanding-auction-theory]]
- [[deep-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]