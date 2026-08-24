---
title: "Deep Delta"
slug: "deep-delta"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Referencia de Deep Delta: delta filtrado con hasta cuatro rangos de tamaño para separar participantes pequeños, medianos y grandes, además de líneas de umbral y marcadores de absorción."
keywords: ["deep delta", "filtro de delta", "barras de delta", "delta filtrado", "delta multirango", "delta de grandes jugadores", "marcador de absorción", "rangos de delta"]
source_hash: "d143e9434af2a2b0"
ai_translated: true
source_hash: "d143e9434af2a2b0"
---
Deep Delta es una evolución avanzada del clásico indicador Delta Bars. En lugar de un solo número de delta por vela, le permite aplicar filtros de tamaño al delta y dividirlo en hasta cuatro rangos separados: así puede observar de forma independiente el delta de los participantes pequeños, medianos y grandes dentro de la misma vela.

Esa separación es el objetivo principal: el flujo de tamaño minorista y el flujo de tamaño institucional a menudo discrepan, y Deep Delta hace visible esa discrepancia.

## Qué es

El delta es el volumen de compra agresiva menos el volumen de venta agresiva. El delta clásico agrupa todos los tamaños de operación; el modo Multi-Range de Deep Delta filtra las operaciones por tamaño en hasta cuatro rangos (cada uno con su propio mínimo y máximo) y traza el delta de cada rango como su propia serie. Las líneas de umbral y los marcadores verticales señalan los momentos en que los extremos del delta alcanzan los niveles que usted define.

## Cuándo usarlo

- Quiere ver si los grandes jugadores están de acuerdo con el movimiento actual, o están operando en su contra.
- Quiere eliminar el ruido de lotes pequeños y leer solo el tamaño por encima de un umbral.
- Busca absorción: fuertes empujes de delta en una dirección que el precio no llega a seguir.
- Ya utiliza Delta Bars y quiere la misma lectura con contexto de tamaño añadido ([[delta-bar]] cubre la versión clásica).

## Inicio rápido

1. Abra un gráfico y añada **Deep Delta** desde el botón **Indicators** del gráfico.
2. Establezca **Delta Mode** en **Multi-Range**.
3. Habilite dos rangos para empezar: uno con un mínimo bajo para el flujo pequeño, y otro con un filtro **Min** alto (y **Max** = 0, que deshabilita el máximo) solo para el flujo grande.
4. Establezca **Input Data** en **Aggregate Trades** para que las ejecuciones divididas se recombinen antes del filtrado; de lo contrario, una orden grande contada como muchas ejecuciones pequeñas caerá en el rango equivocado.
5. Aplique y asigne a cada rango un color distinto en la sección **Subgraph**.

La demostración en vivo a continuación muestra la lectura subyacente: el delta por barra con la línea de delta acumulado. Pase el cursor sobre cualquier barra para ver su historia.

[WIDGET: delta-lab]

## Cómo leerlo

- **Los rangos coinciden** (todos positivos o todos negativos): la participación está alineada en todos los tamaños; la presión es amplia.
- **Los rangos divergen**: el caso interesante. Por ejemplo, un delta de tamaño grande (un rango con Min = 50) positivo mientras el delta de tamaño pequeño es negativo sugiere que los grandes jugadores están comprando contra la venta minorista.
- **Marcadores que se activan mientras el precio no sigue el empuje del delta**: la agresión está siendo absorbida por órdenes pasivas, una advertencia clásica de que el movimiento puede estancarse o revertirse. Consulte [[understanding-icebergs-absorption]].
- **Líneas de umbral**: sus propios niveles de significancia; un delta más allá de la línea significa que la agresión de la barra es inusual según su definición.

Para la mecánica subyacente de bid/ask y agresores, consulte [[orderflow-101]].

## Referencia de configuración

Agrupada como en el diálogo del indicador.

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Delta Mode** | **Classic** (Delta Bars estándar, sin filtros) o **Multi-Range** (activa los rangos de delta filtrado) |
| **Input Data** | Base de cálculo: **Volume** (volumen total operado en cada nivel de precio: zonas de alta intensidad), **Aggregate Trades** (operaciones combinadas en el mismo nivel de precio: reduce el ruido de fragmentación de ejecuciones), **Trades** (número de transacciones por nivel: frecuencia de operaciones), **Order** (datos de órdenes, como cantidades de órdenes de compra/venta: presión de órdenes). Consulte [[different-types-of-input]] |
| **Range 1–4** | Cada rango tiene un filtro **Min**, un filtro **Max** y un interruptor de habilitación. Establecer Max en 0 deshabilita el filtro máximo |

### Umbral

| Configuración | Qué hace |
|---|---|
| **Level-settings** | Hasta dos líneas horizontales personalizables en niveles de delta positivos/negativos definidos |
| **Marker** | Marcadores verticales cuando tanto el delta mínimo como el máximo alcanzan un umbral establecido; resalta empujes de delta opuestos dentro de una misma barra y situaciones de absorción |

### Subgraph

| Configuración | Qué hace |
|---|---|
| **Range colors** | Un color por cada rango habilitado |
| **Maximum Positive/Negative Delta shadows** | Colores de sombra que marcan los extremos de delta de cada barra |
| **Line Thickness** | Ajusta la apariencia del cuerpo y las sombras del rango de delta |

[SCREENSHOT: Diálogo de configuración de Deep Delta abierto en la sección Parameters mostrando Delta Mode establecido en Multi-Range y las cuatro filas de rangos con filtros Min/Max | dc-es-deep-delta-01.png]

## Consejos y errores comunes

- **¿No se traza nada en modo Multi-Range?** Los rangos deben habilitarse individualmente, y los filtros Min/Max no deben excluirlo todo. Recuerde que Max = 0 deshabilita el máximo, así que compruebe si su Min está por encima de los tamaños de delta que realmente se operan. Confirme también la elección de Input Data.
- **¿Quiere solo el delta de los grandes jugadores?** Un solo rango habilitado con un filtro Min alto, e **Input Data** = **Aggregate Trades** para que las ejecuciones divididas se recombinen primero en su tamaño original.
- **¿Los rangos se ven idénticos?** Sus límites de Min/Max pueden solaparse en exceso; haga que las bandas de tamaño sean distintas (por ejemplo 1–9, 10–49, 50+).
- **¿Marcadores por todas partes?** El umbral es demasiado bajo para el delta típico del instrumento. Auméntelo hasta que los marcadores señalen barras genuinamente inusuales.
- El delta mide la agresión, no el resultado: léalo siempre en relación con el precio. Un delta positivo fuerte sin progreso alcista es una observación bajista, no alcista.

## Artículos relacionados

- [[delta-bar]]
- [[orderflow-101]]
- [[deep-print]]
- [[understanding-icebergs-absorption]]
- [[different-types-of-input]]
- [[indicator-layout]]