---
title: "Índice direccional promedio (ADX)"
slug: "adx"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Mida la fuerza de la tendencia con el Índice direccional promedio (ADX) y sus líneas +DI/−DI para distinguir mercados en tendencia de mercados laterales."
keywords: ["adx", "índice direccional promedio", "indicador de fuerza de tendencia", "plus di", "minus di", "movimiento direccional", "dmi", "está el mercado en tendencia"]
source_hash: "82d8e4b25c3f49e1"
ai_translated: true
source_hash: "82d8e4b25c3f49e1"
---
El Índice direccional promedio (ADX) es un indicador de análisis técnico usado para medir la fuerza de una tendencia en el precio de un activo. Fundamentalmente, mide solo la fuerza: un ADX en ascenso le dice que el mercado está en tendencia, no en qué dirección.

Eso lo convierte en uno de los filtros más útiles del arsenal de un operador de tendencia: responde a la pregunta que toda estrategia de seguimiento de tendencia necesita responder primero: ¿existe realmente una tendencia que seguir, o el mercado se está moviendo lateralmente?

## Qué es

El ADX se traza en su propio panel debajo del gráfico de precio. Junto a la línea ADX principal, el indicador incluye las dos líneas direccionales de las que se deriva: el **Indicador direccional positivo (+DI)** y el **Indicador direccional negativo (−DI)**. La línea +DI sigue el movimiento direccional alcista, la línea −DI sigue el movimiento direccional bajista, y la línea ADX suaviza la diferencia entre ambas en una única lectura de fuerza de tendencia.

El resultado: la dirección viene de qué línea DI está encima, y la convicción viene de la altura de la línea ADX.

## Cuándo usarlo

- Como filtro de régimen: tome señales de seguimiento de tendencia solo cuando el ADX confirme un mercado en tendencia, y manténgase al margen (o cambie a tácticas de rango) cuando no lo haga.
- Para confirmar rupturas: una ruptura acompañada de un ADX en ascenso tiene fuerza direccional detrás; una con un ADX plano tiene más probabilidades de fallar.
- Para leer el sesgo direccional a partir de los cruces de **+DI/−DI**.
- Para detectar una tendencia madura: un ADX que gira a la baja desde una lectura alta advierte que la fuerza de la tendencia se está desvaneciendo.

## Inicio rápido

1. Abra un gráfico y haga clic en el icono de gráfico de barras en la esquina superior izquierda para abrir el panel **Indicators** (Indicadores).
2. Haga clic en **Indicators** para abrir la **Indicator List** (Lista de indicadores) completa.
3. Busque "Average Directional Index" y haga clic en **+** para añadirlo: se abre en su propia área de gráfico bajo el panel de precio.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración.

El **Period** (Período) por defecto de 14 es la configuración estándar y un punto de partida sensato en cualquier marco temporal. Dé a la línea ADX y a las dos líneas DI colores claramente distintos para que los cruces se lean al instante.

[SCREENSHOT: Un gráfico de precio con el indicador ADX en un panel inferior mostrando tres líneas: la línea ADX subiendo durante un movimiento en tendencia, con +DI por encima de −DI, mientras el panel de precio de arriba muestra la tendencia alcista correspondiente | dc-es-adx-01.png]

## Cómo interpretarlo

- **Altura de la línea ADX = fuerza de la tendencia.** Por convención común, las lecturas por encima de aproximadamente 25 indican un mercado en tendencia y las lecturas por debajo de aproximadamente 20 indican un mercado débil o lateral; la zona intermedia es ambigua. Estos umbrales son convenciones, no reglas: calíbrelos a su instrumento y marco temporal.
- **La dirección del ADX importa más que su nivel.** Un ADX en ascenso significa que la tendencia se está fortaleciendo; un ADX en descenso significa que se está debilitando, incluso si el precio sigue derivando en la dirección de la tendencia.
- **El ADX es agnóstico a la dirección.** Una tendencia bajista fuerte produce un ADX alto exactamente igual que una tendencia alcista fuerte. Lea la dirección en las líneas DI o en el propio precio.
- **Cruces de DI**: +DI cruzando por encima de −DI señala que el movimiento direccional alcista toma el control; −DI cruzando por encima de +DI señala el lado bajista. Los cruces son más significativos cuando el ADX está elevado o en ascenso.

## Referencia de configuración

### Parámetros

| Ajuste | Qué hace |
|---|---|
| **Period** | El período usado para el cálculo del ADX. Por defecto: 14. Períodos más cortos hacen que el indicador reaccione más rápido pero con más señales falsas; períodos más largos suavizan la lectura para el análisis de régimen en marcos temporales superiores. |

### Subgráficos

| Ajuste | Qué hace |
|---|---|
| **Line Color** | Color de la línea ADX principal. |
| **Line Style** | Estilo de la línea ADX (sólida, discontinua). |
| **Line Width** | Grosor de la línea ADX. |
| **Plus DI Color** | Color de la línea del Indicador direccional positivo (+DI). |
| **Minus DI Color** | Color de la línea del Indicador direccional negativo (−DI). |

[SCREENSHOT: El diálogo de configuración del ADX mostrando el parámetro Period en 14 y las opciones de subgráfico Line Color, Line Style, Line Width, Plus DI Color y Minus DI Color | dc-es-adx-02.png]

## Consejos y errores comunes

- **El error más común: leer el ADX como dirección.** Un ADX en descenso durante una tendencia alcista no significa "vender": significa que la tendencia está perdiendo fuerza. La dirección siempre viene de las líneas DI o de la estructura del precio.
- **El ADX se retrasa por diseño.** Es una derivada suavizada de entradas suavizadas, así que confirma tendencias en lugar de predecirlas. Úselo para cualificar señales de herramientas más rápidas, no para generar entradas por sí solo.
- **Un ADX bajo es información, no ausencia de información.** Un tramo prolongado de ADX bajo marca un rango: el entorno donde las herramientas de reversión a la media como el [[rsi|RSI]] funcionan mejor y las entradas de ruptura fallan más a menudo.
- Combínelo con el [[donchian-channel|Canal de Donchian]] o el [[super-trend|Super Trend]]: el canal o la línea de tendencia aporta la lógica de entrada, y el ADX aporta el filtro de "¿merece la pena tomarla?".

## Artículos relacionados

- [[aroon-up-down]]
- [[aroon-oscillator]]
- [[super-trend]]
- [[donchian-channel]]
- [[different-types-of-input]]
- [[indicator-layout]]