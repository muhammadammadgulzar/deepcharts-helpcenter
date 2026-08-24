---
title: "Tasa de cambio (ROC)"
slug: "rate-of-change"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Cómo el indicador Rate of Change mide el cambio porcentual del precio en un período retrospectivo, y todas las configuraciones de ROC en DeepCharts."
keywords: ["ROC", "indicador de tasa de cambio", "tasa de cambio del precio", "indicador de cambio porcentual", "oscilador roc"]
source_hash: "588a4bf32656c442"
ai_translated: true
source_hash: "588a4bf32656c442"
---
La tasa de cambio (Rate of Change, ROC) mide el cambio porcentual del precio de un activo a lo largo de un número determinado de barras. Es un pariente cercano del indicador de [[momentum]] con una ventaja práctica: como la salida puede expresarse en porcentaje, las lecturas son comparables entre símbolos y escalas de precio.

En DeepCharts, ROC dibuja una sola línea en su propia área de gráfico, oscilando en torno a una línea cero.

## Qué es

ROC responde a: ¿cuánto ha cambiado el precio, en términos porcentuales, en comparación con hace N barras? Una lectura por encima de cero significa que el precio es más alto que en la ventana retrospectiva; por debajo de cero, que es más bajo. Cuanto más empinada la línea, más rápido el cambio. Los operadores lo usan para evaluar la fuerza de la tendencia, identificar posibles giros del precio, detectar extremos de sobrecompra y sobreventa y confirmar la dirección de la tendencia.

## Cuándo usarlo

- Quiere una lectura de momentum comparable entre distintos instrumentos o marcos temporales.
- Quiere un marcador limpio y objetivo de la dirección de la tendencia: a qué lado del cero está la línea.
- Busca extremos de sobrecompra o sobreventa en relación con la propia historia del símbolo.
- Quiere señales de divergencia que adviertan de un movimiento que se debilita.

## Inicio rápido

1. Abra un gráfico y pulse **Ctrl I**, o haga clic en el icono de gráfico de barras de la barra de herramientas del gráfico y luego en **Indicators**, para abrir la **Indicator List**.
2. Busque "Rate of Change" y haga clic en **+** para añadirlo. ROC se renderiza en su propia área de gráfico bajo las barras de precio (consulte [[indicator-layout]]).
3. Haga clic en el icono de engranaje de la fila del indicador para abrir su configuración.
4. Mantenga el **Period** predeterminado de 10 para empezar, y use **Use Percent** para elegir entre lecturas porcentuales y cambio absoluto del precio. El porcentaje es la forma más común de leer ROC.

[SCREENSHOT: Un gráfico con el indicador Rate of Change en su propia área bajo el precio, con la línea ROC cruzando por encima de la línea cero mientras el precio rompe al alza | dc-es-rate-of-change-01.png]

## Cómo leerlo

- **Línea cero.** Por encima de cero, el precio es más alto que hace N barras: la ventana retrospectiva es alcista en términos netos. Por debajo de cero, bajista en términos netos. Un cruce de la línea cero marca el cambio de tendencia en esa ventana.
- **Pendiente y extremos.** Una línea empinada significa que el precio cambia con rapidez. Lecturas inusualmente altas o bajas, en relación con el rango reciente de valores de ROC del propio símbolo, señalan condiciones de sobrecompra y sobreventa.
- **Confirmación.** Una ruptura acompañada de un ROC ascendente tiene velocidad detrás; una ruptura con un ROC plano es sospechosa.
- **Divergencia.** El precio marca un nuevo máximo mientras ROC marca un máximo más bajo (o el espejo en los mínimos): el movimiento se está desacelerando.

## Referencia de configuración

Abra el diálogo desde el icono de engranaje en la fila del indicador en el panel **Indicators**.

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Period** | Número de períodos usados en el cálculo del ROC. Predeterminado: 10. Períodos más cortos crean una herramienta de sincronización rápida; períodos más largos describen el régimen más amplio. |
| **Use Percent** | Alterna la salida entre cambio porcentual y cambio absoluto del precio. |

### Subgráfico

| Configuración | Qué hace |
|---|---|
| **ROC Color** | Color de la línea ROC. |
| **Secondary Color** | Color adicional opcional para la visualización. |
| **Subgraph Style** | Cómo se dibuja la serie en el área de gráfico. |
| **Line Style** | Estilo de renderizado de la línea. |
| **Line Width** | Grosor de la línea. |
| **Use Secondary Axis** | Traza el indicador contra un eje de valores secundario. |

[SCREENSHOT: El diálogo de configuración de Rate of Change mostrando Period 10, el conmutador Use Percent y las opciones de apariencia del subgráfico | dc-es-rate-of-change-02.png]

## Consejos y errores comunes

- **Compruebe Use Percent antes de comparar símbolos.** Con salida porcentual las lecturas son comparables entre instrumentos; con salida absoluta están en puntos de precio y solo tienen sentido en ese gráfico.
- **No hay un número universal de sobrecompra.** ROC no está acotado: calibre los niveles extremos por símbolo y por marco temporal observando dónde ocurrieron los giros pasados.
- **ROC y Momentum se solapan.** Miden lo mismo en escalas distintas; ejecutar ambos en un gráfico no añade información. Elija uno: ROC si quiere normalización porcentual.
- **Cuidado con las distorsiones de una sola barra.** Una barra grande que sale por el final de la ventana retrospectiva puede mover la lectura incluso cuando el precio actual está tranquilo. Los períodos más largos suavizan este efecto.

## Artículos relacionados

- [[momentum]]
- [[rsi|Índice de fuerza relativa (RSI)]]
- [[macd]]
- [[different-types-of-input]]
- [[indicator-layout]]