---
title: "Resaltado de delta %"
slug: "delta-highlight"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Marca las velas cuyo porcentaje de delta alcanza su umbral para que la agresión unilateral extrema destaque en el gráfico al instante."
keywords: ["resaltado de delta %", "resaltado de porcentaje de delta", "porcentaje de delta", "resaltar velas delta", "marcador de delta", "velas desequilibradas", "delta extremo"]
source_hash: "bdb1b8c03bce9a93"
ai_translated: true
source_hash: "bdb1b8c03bce9a93"
---
Resaltado de delta % (Delta % Highlight) marca las velas de su gráfico cuyo porcentaje de delta, la presión de compra frente a la de venta en relación con el volumen de la vela, alcanza un umbral que usted define. En lugar de revisar manualmente el delta de cada barra, deja que el gráfico señale las velas con una agresión unilateral significativa.

Es una herramienta de filtrado: no calcula nada nuevo, hace que las velas con flujo de órdenes extremo sean imposibles de pasar por alto.

## Qué es

El indicador resalta las velas donde el porcentaje de delta cumple sus criterios. Una vela en la que casi todo el volumen fue compra agresiva se marca con el color **Ask Color** (color del ask); una vela dominada por la venta agresiva se marca con el color **Bid Color** (color del bid). Todo lo intermedio queda sin marcar, manteniendo su gráfico limpio.

[SCREENSHOT: Ventana de gráfico con Resaltado de delta % aplicado: una serie de velas normales con dos o tres velas visiblemente teñidas con el color del ask y una con el color del bid, mostrando cómo destacan las velas de delta extremo | dc-es-delta-highlight-01.png]

## Cuándo usarlo

- Quiere que las velas con desequilibrio extremo se señalen automáticamente mientras usted se centra en la estructura.
- Revisa las sesiones tras el cierre y necesita encontrar rápido las velas unilaterales.
- Opera movimientos de iniciativa: una vela resaltada que rompe un nivel clave muestra participación agresiva genuina.
- Busca agotamiento: una vela de delta extremo que no logra continuidad es una señal clásica de que el agresor está atrapado.

## Inicio rápido

1. Abra la **Indicator List** (lista de indicadores) en su gráfico.
2. Busque **Delta % Highlight** y haga clic en **+** para añadirlo.
3. Haga clic en el icono **Settings** (configuración) junto al indicador.
4. Establezca **Min Value** (valor mínimo) en un umbral significativo: es el porcentaje de delta mínimo que una vela debe alcanzar para ser marcada. Empiece con un valor lo bastante alto para que solo unas pocas velas por sesión califiquen y luego ajústelo a la baja.
5. Deje **Max Value** (valor máximo) en **0** para deshabilitar el filtro máximo, de modo que se marque toda vela por encima del mínimo.
6. Elija un **Bid Color** y un **Ask Color** que contrasten con sus velas normales, y ajuste la **Opacity** (opacidad) para que el resaltado sea visible sin ocultar la vela que hay debajo.

[SCREENSHOT: Diálogo de configuración de Resaltado de delta % mostrando los campos Min Value y Max Value, los selectores Bid Color y Ask Color, y el control Opacity | dc-es-delta-highlight-02.png]

## Cómo leerlo

- **Vela con el color del ask (delta % positivo):** los compradores agresivos dominaron el volumen de la vela. Dentro de una tendencia, eso es confirmación; contra una resistencia tras un recorrido extenso, puede ser el clímax de compra.
- **Vela con el color del bid (delta % negativo):** los vendedores agresivos dominaron, la imagen especular.
- **Lo que ocurre después es lo más importante.** Una vela resaltada seguida de continuación valida la agresión. Una vela resaltada rechazada de inmediato, con el precio cerrando de vuelta a través de ella, sugiere que el lado agresivo fue absorbido, una de las señales de reversión más fuertes en el flujo de órdenes (vea [[understanding-icebergs-absorption]]).
- **La frecuencia es una pista del régimen.** Las sesiones que imprimen muchos resaltados son unilaterales y tendenciales; las sesiones sin ninguno son equilibradas y rotacionales.

## Referencia de configuración

| Configuración | Qué hace |
|---|---|
| **Min Value** | Umbral mínimo de porcentaje de delta: solo se marcan las velas que igualan o superan este nivel. |
| **Max Value** | Filtro máximo de porcentaje de delta. Establézcalo en **0** para deshabilitar el filtrado máximo, de modo que se marquen todas las velas por encima del mínimo. |
| **Bid Color** | Color del marcador para porcentajes de delta negativos: dominancia de la presión vendedora. |
| **Ask Color** | Color del marcador para porcentajes de delta positivos: dominancia de la presión compradora. |
| **Opacity** | Transparencia del marcador: valores más bajos hacen el resaltado más transparente; valores más altos lo hacen más opaco y visible. |

## Consejos y errores comunes

- **Calibre por instrumento.** Un porcentaje de delta que es raro en un contrato puede ser habitual en uno más fino. Ajuste **Min Value** hasta que los resaltados sean genuinamente excepcionales para el mercado que opera.
- **El porcentaje oculta el tamaño.** Una vela diminuta con tres contratos puede imprimir un porcentaje de delta extremo. Verifique el volumen real: combine el resaltado con [[volume]] o [[deep-stats]] antes de tratarlo como significativo.
- **No opere el color, opere la reacción.** El resaltado identifica la vela candidata; la lógica de entrada proviene de lo que hace el precio en ella y después de ella.
- **Use ambos límites para un filtrado de banda.** Establecer un **Max Value** por encima del mínimo marca solo los desequilibrios de rango medio y omite los extremos de agotamiento, algo que algunos estilos de reversión a la media prefieren.

## Artículos relacionados

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-bar]]
- [[deep-stats]]
- [[ratio-highlight]]