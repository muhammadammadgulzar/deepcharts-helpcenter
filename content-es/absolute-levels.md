---
title: "Niveles absolutos"
slug: "absolute-levels"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Traza dos niveles de precio horizontales fijos que usted mismo define, cada uno con su propio color, estilo y grosor: una forma ligera de mantener precios clave en el gráfico."
keywords: ["niveles absolutos", "nivel de precio fijo", "nivel horizontal", "niveles personalizados", "línea de precio", "niveles estáticos", "línea de precio clave", "indicador de niveles manuales"]
source_hash: "0912f4fe445c8262"
ai_translated: true
source_hash: "0912f4fe445c8262"
---
El indicador Niveles absolutos (Absolute Levels) dibuja líneas horizontales en los valores de precio que usted introduce manualmente. Es una herramienta de análisis técnico para marcar niveles clave de soporte y resistencia en el gráfico de precio de un activo, pero a diferencia de los indicadores de niveles automáticos, usted elige los precios exactos y el indicador los mantiene trazados con el formato que usted haya elegido.

Eso lo convierte en la herramienta adecuada para niveles que provienen de su propio análisis o de fuera del gráfico por completo: un precio de liquidación, un número redondo, un nivel de un estudio en un marco temporal superior o un precio señalado en un plan de trading.

## Qué es

Niveles absolutos es un indicador de niveles manuales. Usted introduce hasta dos valores de precio fijos, **First Value** (Primer valor) y **Second Value** (Segundo valor), y el indicador traza cada uno como una línea horizontal con color, estilo y grosor configurables de forma independiente. Responde a la pregunta "¿dónde están mis precios predefinidos en relación con el mercado en este momento?"

[SCREENSHOT: Ventana de gráfico con Niveles absolutos aplicado: dos líneas horizontales en precios definidos por el usuario con distintos colores y estilos, una por encima y otra por debajo del precio actual, abarcando claramente todo el ancho del gráfico | dc-es-absolute-levels-01.png]

## Cuándo usarlo

- Tiene precios exactos de su plan de trading (entradas, niveles de invalidación, objetivos) y quiere mantenerlos fijos en el gráfico.
- Sigue precios que ningún indicador automático produce: números redondos, precios de liquidación, un nivel de un evento de noticias.
- Quiere niveles que nunca se muevan: a diferencia de los niveles calculados, los niveles absolutos permanecen exactamente donde usted los puso hasta que los cambie.
- Quiere un par de líneas de referencia con formato distinto: por ejemplo, una línea de objetivo verde y una línea de riesgo roja.

## Inicio rápido

1. Abra la **Indicator List** (Lista de indicadores) en su gráfico.
2. Busque **Absolute Levels** y haga clic en **+** para añadirlo.
3. Haga clic en el icono de **Settings** (Configuración) junto al indicador.
4. Introduzca el precio de su primer nivel en **First Value** y el precio de su segundo nivel en **Second Value**.
5. Dé a las dos líneas un formato contrastado, por ejemplo, una línea sólida para el nivel más importante y una línea discontinua para el secundario, usando los ajustes de **Color**, **Style** (Estilo) y **Thickness** (Grosor) de cada línea.
6. Aplique y confirme que ambas líneas se sitúan exactamente en los precios que introdujo.

[SCREENSHOT: Diálogo de configuración de Niveles absolutos mostrando la sección Parameters con los campos First Value y Second Value rellenados, y los grupos de formato First Line y Second Line con los controles Color, Style y Thickness | dc-es-absolute-levels-02.png]

## Cómo interpretarlo

Niveles absolutos no añade ningún cálculo propio: la interpretación es el significado que tengan sus precios:

- **El precio acercándose a un nivel** es su señal para prestar atención: observe cómo se comporta el mercado al llegar a su precio premarcado en lugar de decidir en el momento.
- **Un rechazo limpio en un nivel** valida el análisis que produjo ese precio; un cierre decisivo más allá de él invalida esa idea y convierte la línea en una posible referencia de retesteo desde el otro lado.
- **Dos niveles forman un rango.** Con un valor por encima y otro por debajo del precio, usted tiene un mapa de rango simple: fuera del rango, el mercado está haciendo algo que su plan debería contemplar.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Parámetros

| Ajuste | Qué hace |
|---|---|
| **First Value** | Precio del primer nivel absoluto mostrado en su gráfico. |
| **Second Value** | Precio del segundo nivel absoluto mostrado en su gráfico. |

### Primera línea

| Ajuste | Qué hace |
|---|---|
| **First Line Color** | Color de la primera línea trazada. |
| **First Line Style** | Estilo visual de la primera línea trazada. |
| **First Line Thickness** | Grosor de la primera línea trazada. |

### Segunda línea

| Ajuste | Qué hace |
|---|---|
| **Second Line Color** | Color de la segunda línea trazada. |
| **Second Line Style** | Estilo visual de la segunda línea trazada. |
| **Second Line Thickness** | Grosor de la segunda línea trazada. |

## Consejos y errores comunes

- **Actualice los valores cuando cambie su plan.** Los niveles absolutos no hacen rollover ni se recalculan; una línea obsoleta del plan de la semana pasada es peor que ninguna línea. Revise los valores como parte de su preparación de sesión.
- **Úselo junto a los niveles calculados, no en su lugar.** Herramientas automáticas como [[important-levels]] y [[pivot-points]] cubren los precios de referencia estándar; reserve Niveles absolutos para el puñado de precios que solo usted está siguiendo.
- **Diferencie visualmente las dos líneas.** Si ambas líneas comparten color y estilo, pierde la información de cuál nivel es cuál; codifique el significado en el formato.
- **Prefiéralo a una línea dibujada cuando importe la precisión.** Escribir el valor exacto en **First Value** evita los pequeños errores de colocación de arrastrar un dibujo a mano; consulte [[drawing-tools]] para saber cuándo una línea a mano alzada es la mejor opción.

## Artículos relacionados

- [[important-levels]]
- [[pivot-points]]
- [[price-movement-levels]]
- [[drawing-tools]]
- [[different-types-of-input]]
- [[indicator-layout]]