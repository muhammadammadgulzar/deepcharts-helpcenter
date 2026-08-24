---
title: "Deep Trades"
slug: "deep-trades"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Marca las grandes órdenes agresivas en el gráfico y revela la liquidez pasiva que las absorbió, mediante cuatro tipos de marcadores distintos."
keywords: ["deep trades", "órdenes grandes", "grandes órdenes en el gráfico", "MBO", "iceberg", "marcador de diamante", "deep trades sin marcadores", "falta historial de deep trades"]
source_hash: "9f816a44975578ed"
ai_translated: true
source_hash: "9f816a44975578ed"
---
Deep Trades visualiza en tiempo real las grandes órdenes a mercado agresivas y, a diferencia de una simple burbuja de operaciones grandes, también le muestra qué había al otro lado de la operación. Cuatro formas de marcador le indican si la orden barrió pequeñas cantidades en reposo, golpeó un muro pasivo significativo o chocó de frente con otro gran participante.

Es el sucesor de [[big-trades|Big Trades]]: Big Trades solo marca dónde se ejecutaron las operaciones grandes; Deep Trades revela el lado pasivo: si había liquidez en reposo, cómo se compuso la operación y cuándo dos órdenes grandes colisionaron directamente.

## Qué es

Deep Trades es un indicador de flujo de órdenes que traza marcadores codificados por forma en el gráfico allí donde se ejecuta una gran orden agresiva. Responde a la pregunta "¿qué había al otro lado de esa operación?" conectando las órdenes agresivas con la liquidez pasiva que las ejecutó. Requiere datos de mercado orden por orden (MBO), y por eso solo funciona con fuentes de datos específicas.

> **Advertencia:** La compatibilidad de la fuente de datos es un requisito estricto. Deep Trades funciona con **Rithmic Level 1**, **Rithmic Level 2** y **dxFeed Level 2** (con **DOM Type = MBO** para los símbolos del grupo CME). **No** funciona con dxFeed Level 1 ni CQG, porque esas fuentes no proporcionan datos MBO. En una fuente compatible con MBO, establezca también **Source Type = MBO** en **Source Settings**. Si su fuente de datos no es compatible, use [[big-trades]] en su lugar con entrada Aggregate.

[SCREENSHOT: Gráfico con Deep Trades activo mostrando varios tipos de marcador a la vez: al menos un cuadrado, un círculo hueco, un círculo relleno y un marcador de diamante en velas recientes, con marcadores de color ask y de color bid distinguibles | dc-es-deep-trades-01.png]

## Cuándo usarlo

- Opera con flujo de órdenes y quiere ver dónde se ejecutan órdenes de tamaño institucional en el momento en que ocurren.
- Quiere distinguir una orden grande que barrió liquidez fina de una que se topó con un muro real.
- Busca choques directos entre grandes órdenes agresivas y grandes órdenes pasivas (marcadores de diamante): los eventos más significativos que detecta la herramienta.
- Usa icebergs y absorción en su estrategia (consulte [[understanding-icebergs-absorption]]).

## Inicio rápido

1. Confirme su fuente de datos: Rithmic L1/L2 o dxFeed L2. En dxFeed L2, establezca **DOM Type = MBO** para los símbolos del grupo CME; en cualquier fuente compatible con MBO establezca **Source Type = MBO** en **Source Settings**.
2. Abra la **Indicator List** (lista de indicadores) en su gráfico, busque **Deep Trades** y haga clic en **+**.
3. Haga clic en el icono de **Settings** (configuración) junto a Deep Trades.
4. En **Data Settings**, establezca el **Filter Mode**. Configuración inicial: **Automatic** con **Intensity = Medium**, o **Manual** con un **Filter** de unos 30 contratos en un futuro de índice líquido; después ajústelo a su instrumento.
5. Deje **Standard Dev.** en su valor predeterminado (recomendado) para que los tamaños de los marcadores escalen de forma razonable.
6. Aplique y observe cómo aparecen los marcadores a medida que se ejecutan operaciones grandes.

[SCREENSHOT: Diálogo de configuración de Deep Trades abierto en Data Settings, mostrando Chart Area, Days to Load y Filter Mode establecido en Automatic con el menú desplegable Intensity expandido (Low/Medium/Strong) | dc-es-deep-trades-02.png]

> **Nota:** Los usuarios existentes deben ejecutar una migración de base de datos única antes de que el historial de Deep Trades pueda almacenarse: **Options → Database → Settings → Migrate/Compress**. Desconecte primero sus fuentes de datos y cierre el espacio de trabajo; la migración tarda aproximadamente entre 10 y 15 minutos.

## Cómo leerlo

| Marcador | Significado |
|---|---|
| **Cuadrado** | Una orden grande golpeó liquidez pasiva en reposo significativa. |
| **Círculo hueco** | Una operación grande compuesta por muchas cantidades pequeñas combinadas entre sí. |
| **Círculo relleno** | Una operación grande ejecutada por grandes cantidades individuales en una o pocas ejecuciones. |
| **Diamante** | Una gran orden agresiva chocó directamente con una gran orden pasiva en reposo: el marcador más significativo. |

Los marcadores se colorean según el lado (**Ask Color** para la agresión compradora, **Bid Color** para la agresión vendedora), con colores "Battle" separados para los choques de diamante. El tamaño del marcador escala con el tamaño de la operación.

Prioridad de lectura: primero los diamantes (dos grandes participantes en desacuerdo sobre el precio), después los cuadrados (agresión que se topa con un muro: posible absorción) y luego los círculos (detalle de composición del lado agresivo). Un grupo de cuadrados o diamantes que no consigue mover el precio es absorción clásica; el mismo grupo seguido de continuación le dice que el muro se rompió.

Cada marcador nace como impresiones en la cinta. Observe el Time & Sales en vivo a continuación y filtre por Ask o Bid para familiarizarse con las ejecuciones agresivas que Deep Trades está midiendo.

[WIDGET: tape-lab]

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Configuración de datos (Data Settings)

| Configuración | Qué hace |
|---|---|
| **Chart Area** | Dónde se dibujan los marcadores: panel Horizontal o Vertical, además del número de panel. |
| **Days to Load** | Cuántos días de historial almacenado de operaciones grandes se muestran. |
| **Filter Mode** | **Manual**: usted establece **Filter** = contratos mínimos por operación (por ejemplo 30). **Automatic**: la plataforma elige los umbrales; usted elige la **Intensity** (**Low / Medium / Strong**). |

### Configuración de trazado (Plot Settings)

| Configuración | Qué hace |
|---|---|
| **Standard Dev.** | Controla el escalado del tamaño de los marcadores. Se recomienda mantener el valor predeterminado. |
| **Minimum / Maximum Opacity** | Rango de opacidad entre los distintos tamaños de marcador. |
| **Ask Color / Ask Color Battle** | Colores para los marcadores del lado comprador y los choques de diamante del lado comprador. |
| **Bid Color / Bid Color Battle** | Colores para los marcadores del lado vendedor y los choques de diamante del lado vendedor. |

### Configuración de marcadores (Marker Settings)

| Configuración | Qué hace |
|---|---|
| **Minimum / Maximum Size** | El rango de tamaños entre los que escalan los marcadores. |

### Configuración de alertas (Alert Settings)

| Configuración | Qué hace |
|---|---|
| **Enable Alert Sound** | Activa las alertas de audio. |
| **Bid Alert / Ask Alert** | Sonidos separados para las detecciones del lado bid y del lado ask. |

## Consejos y errores comunes

- **¿No aparece ningún marcador?** Casi siempre está relacionado con la fuente de datos: dxFeed L1 y CQG no funcionan, DOM Type no es MBO, o **Source Type** no está establecido en MBO en Source Settings. Después de eso, compruebe que el Filter manual no esté demasiado alto para el instrumento.
- **¿No hay historial de días pasados?** Es por diseño. Los datos MBO no pueden descargarse retroactivamente del proveedor: los marcadores históricos solo existen para los periodos en los que su plataforma estuvo en ejecución y conectada. Una semana con el PC apagado no tiene historial de Deep Trades.
- **Demasiados o muy pocos marcadores:** en modo Manual ajuste los contratos mínimos; en modo Automatic cambie la Intensity.
- **Deje que la plataforma calibre los umbrales.** Ejecute **Options → Tools → Big Trades Analysis**: calcula los umbrales óptimos por instrumento (utilizados con el modo de filtro Automatic) y los guarda automáticamente. Vuelva a ejecutarlo semanal o mensualmente a medida que cambien las condiciones de liquidez.
- **Combínelo con la tabla.** Empareje los marcadores con [[deep-stats]] para confirmar la absorción numéricamente (lecturas COT y Effort) en lugar de fiarse de un único marcador.

## Artículos relacionados

- [[orderflow-101]]
- [[understanding-icebergs-absorption]]
- [[big-trades]]
- [[deep-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]