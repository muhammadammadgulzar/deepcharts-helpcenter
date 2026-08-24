---
title: "Vela Shift"
slug: "shift-candle"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "advanced"
time: "6 min read"
description: "Detecte velas de reversión 'Shift' usando la lógica Trinity con confirmación opcional por desequilibrios apilados, trazadas como marcadores y zonas frescas en el gráfico."
keywords: ["vela shift", "shift candle", "lógica trinity", "indicador de vela de reversión", "confirmación por desequilibrio", "detección de reversiones", "zona de desequilibrio fresca"]
source_hash: "937df42f4ae80fa5"
ai_translated: true
source_hash: "937df42f4ae80fa5"
---
Shift Candle identifica velas de reversión "Shift" usando la lógica Trinity y una confirmación opcional por desequilibrio, trazando marcadores y zonas de desequilibrio directamente en el gráfico. Es una herramienta avanzada de reversión por flujo de órdenes: en lugar de una simple coincidencia de patrones, valida una posible reversión contra la distancia de ruptura, el comportamiento del delta y la ubicación del punto de control antes de marcarla.

## Qué es

El indicador busca velas en las que el mercado cambia de dirección bajo condiciones estructurales y de flujo de órdenes específicas, los criterios Trinity, como una ruptura mínima en ticks más allá de la estructura previa, una diferencia mínima de delta entre las barras comparadas y una distancia máxima al punto de control de la barra. Cuando una vela cumple los requisitos, Shift Candle traza un marcador en ella. Un filtro de desequilibrio opcional exige desequilibrios bid/ask apilados para confirmar la señal, y las zonas de desequilibrio frescas confirmadas se pueden dibujar como áreas coloreadas que actúan como zonas de referencia en visitas posteriores.

Los desequilibrios diagonales apilados son aquí la capa de confirmación: para hacerse una idea de cómo se ve uno en los datos bid×ask, ajuste el ratio de desequilibrio y pase el cursor sobre las celdas resaltadas en el footprint de abajo.

[WIDGET: footprint-lab]

## Cuándo usarlo

- Opera reversiones y quiere candidatas filtradas por condiciones de flujo de órdenes en lugar de solo por la forma.
- Ya sabe leer footprints y desequilibrios y quiere que la plataforma señale automáticamente las velas que cumplen los criterios, con alertas.
- Quiere zonas de desequilibrio frescas marcadas en los puntos de reversión, para observar cómo se comporta el precio cuando vuelve a ellas.
- Quiere codificar una lista de comprobación de reversión (distancia de ruptura, cambio de delta, proximidad al POC, desequilibrios apilados) en una sola herramienta configurable.

## Inicio rápido

1. Abra el menú de indicadores en su gráfico y añada **Shift Candle**.
2. Abra la configuración del indicador.
3. Comience con el grupo Trinity: establezca **Minimum tick breakout** y los requisitos de delta (**Minimum delta % difference**, **Minimum delta value difference**) en niveles apropiados para el tamaño de tick y el volumen típico de su instrumento.
4. Opcionalmente active **Enable** en el grupo Imbalance para exigir la confirmación por desequilibrios apilados: menos señales, pero de mayor convicción.
5. Elija un **Buy color** y un **Sell color** distintos en el grupo Imbalance Fresh Zone para que las zonas sean fáciles de distinguir.
6. Habilite el sonido de alerta o la ventana emergente de mensaje si quiere ser notificado cuando se imprima una vela Shift, y luego aplique.

Como los umbrales son específicos de cada instrumento (una ruptura en ticks razonable en un contrato es ruido en otro), espere iterar sobre los valores Trinity mientras observa las señales en su mercado.

[SCREENSHOT: Un gráfico de futuros con Shift Candle activo — un marcador de reversión trazado bajo una barra de reversión alcista que cumple los criterios y una zona de desequilibrio fresca coloreada extendiéndose hacia la derecha desde la vela de señal | dc-es-shift-candle-01.png]

## Cómo leerlo

- **Un marcador es una candidata, no una entrada.** Significa que la vela cumplió las condiciones Trinity configuradas (y el filtro de desequilibrio, si está habilitado). Léalo en contexto: ubicación respecto a la estructura de la sesión, los niveles de marcos temporales superiores y la tendencia precedente.
- **Las zonas de desequilibrio frescas** marcan dónde se produjeron desequilibrios agresivos confirmados en la reversión. Muchos operadores de flujo de órdenes observan cómo se comporta el precio en un *retorno* a estas zonas: si se sostiene, sugiere que la parte responsable sigue defendiendo; si las atraviesa, sugiere que la reversión ha fallado. Consulte [[understanding-auction-theory]] para el razonamiento detrás de las lecturas de desequilibrio y absorción.
- **Las condiciones de delta** en la lógica Trinity existen para asegurar que la reversión esté respaldada por un cambio real en la agresión, no solo por una mecha de precio: consulte [[orderflow-101]] para ver cómo se calcula el delta.
- Umbrales más ajustados producen menos señales pero más fuertes; umbrales más laxos muestran más candidatas con más ruido. No existe una configuración universalmente correcta: calibre por instrumento y por marco temporal.

## Referencia de configuración

[SCREENSHOT: Diálogo de configuración de Shift Candle mostrando las secciones Trinity Settings, Marker Settings, Imbalance Settings, Imbalance Fresh Zone y Alert | dc-es-shift-candle-02.png]

### Trinity Settings

| Configuración | Qué hace |
|---|---|
| **Maximum number of bars after reversal** | Límite superior de barras permitidas para validar la reversión. |
| **Minimum tick breakout** | Movimiento en ticks requerido más allá de la estructura previa para que la vela cumpla los criterios. |
| **Minimum delta % difference** | Variación porcentual de delta requerida entre las barras comparadas. |
| **Minimum delta value difference** | Diferencia absoluta de delta requerida entre las barras comparadas. |
| **Maximum tick of POC distance** | Restringe a cuántos ticks puede estar la vela de su punto de control. |
| **Highest/Lowest reversal bar** | Periodo de retroceso usado para identificar el máximo o mínimo del swing que se está revirtiendo. |

### Marker Settings

| Configuración | Qué hace |
|---|---|
| **Tick offset** | Posición vertical, en ticks, del marcador trazado respecto a la vela. |
| **Plot price** | La referencia de precio a la que se ancla el marcador. |

### Imbalance Settings

| Configuración | Qué hace |
|---|---|
| **Enable** | Activa el filtro de confirmación por desequilibrio. |
| **Minimum Imbalance %** | Umbral de fuerza de desequilibrio requerido (por ejemplo, 150%). |
| **Minimum Volume Diff.** | Diferencia mínima de volumen para que un desequilibrio cuente. |
| **Include zero on imbalance** | Incluye las impresiones de valor cero en el cálculo del desequilibrio. |
| **Min. Num. of Consecutive Imb.** | Cuántos niveles de desequilibrio apilados (consecutivos) se requieren para la confirmación. |

### Imbalance Fresh Zone

| Configuración | Qué hace |
|---|---|
| **Buy color** | Color de las zonas frescas de desequilibrio del lado comprador. |
| **Sell color** | Color de las zonas frescas de desequilibrio del lado vendedor. |

### Sonido de alerta y ventana emergente de mensaje

Ambas secciones incluyen interruptores de habilitar/deshabilitar más opciones de personalización del sonido de alerta y de la notificación emergente que se muestra cuando se detecta una vela Shift.

## Consejos y errores comunes

- **No use umbrales de estilo predeterminado en instrumentos distintos.** Las configuraciones basadas en ticks (**Minimum tick breakout**, **Maximum tick of POC distance**) deben reflejar el tamaño de tick y la volatilidad de cada contrato; los umbrales de delta deben reflejar su volumen típico.
- **Empiece con el filtro de desequilibrio habilitado.** Las señales Trinity sin filtrar son más frecuentes; exigir desequilibrios apilados (mediante **Min. Num. of Consecutive Imb.**) reduce el ruido de forma sustancial.
- Las condiciones de delta y desequilibrio requieren datos clasificados por bid/ask de su fuente de datos: verifique lo que entrega su fuente de datos en [[different-types-of-input]].
- Un marcador contra una tendencia fuerte de marco temporal superior es un intento de operar contracorriente; trátelos con precaución extra y exija confluencia de niveles o de comportamiento de absorción.
- Los detalles internos exactos de la evaluación Trinity más allá de las configuraciones expuestas no están documentados; ajuste por observación y no por suposición.

## Artículos relacionados

- [[imbalance-tracker]]
- [[understanding-auction-theory]]
- [[orderflow-101]]
- [[bar-poc]]
- [[different-types-of-input]]
- [[indicator-layout]]