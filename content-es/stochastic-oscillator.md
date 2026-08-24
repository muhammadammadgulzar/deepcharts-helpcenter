---
title: "Oscilador estocástico"
slug: "stochastic-oscillator"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Cómo las líneas K y D del Oscilador estocástico ubican el cierre dentro del rango reciente, con cada parámetro, nivel y opción de visualización en DeepCharts."
keywords: ["estocástico", "indicador estocástico", "%K", "%D", "línea K", "línea D", "sobrecompra sobreventa", "estocastico"]
source_hash: "9710b1b798ce0220"
ai_translated: true
source_hash: "9710b1b798ce0220"
---
El Oscilador estocástico (Stochastic Oscillator) mide dónde se sitúa el precio de cierre más reciente dentro del rango máximo–mínimo de las últimas barras. Creado por George Lane, es una de las herramientas clásicas para detectar condiciones de sobrecompra y sobreventa y posibles cambios de tendencia.

En DeepCharts el indicador dibuja dos líneas en su propia área de gráfico: la línea **K** (el cálculo principal) y la línea **D** (una media móvil de K), entre niveles configurables de sobrecompra y sobreventa.

## Qué es

El oscilador responde: ¿está el precio cerrando cerca del máximo o del mínimo de su rango reciente? Un cierre cerca del techo del rango empuja la lectura hacia el extremo superior (territorio de sobrecompra); un cierre cerca del suelo la empuja hacia el extremo inferior (territorio de sobreventa). La línea D suaviza la línea K, y la interacción entre ambas — cruces y visitas a las zonas extremas — es lo que se opera.

## Cuándo usarlo

- Usted opera mercados en rango y quiere una forma repetible de cronometrar entradas en los bordes del rango.
- Quiere un disparador temprano de momentum: el cruce de K sobre D reacciona más rápido que la mayoría de los indicadores de tendencia.
- Está buscando divergencias entre los extremos del precio y los extremos del momentum.
- Quiere confirmar señales de otro oscilador como [[rsi]] antes de actuar.

## Inicio rápido

1. Abra un gráfico y presione **Ctrl I** — o haga clic en el icono de gráfico de barras en la barra de herramientas del gráfico y luego en **Indicators** — para abrir la **Indicator List** (lista de indicadores).
2. Busque "Stochastic" y haga clic en **+** para añadirlo. El oscilador se dibuja en su propia área de gráfico debajo de las barras de precio (vea [[indicator-layout]]).
3. Haga clic en el icono de engranaje en la fila del indicador para abrir su configuración.
4. Mantenga los valores predeterminados para empezar: **K Period** 14, **D Period** 3, **Smoothing Length** 3, con el **Overbought Level** (nivel de sobrecompra) en 80 y el **Oversold Level** (nivel de sobreventa) en 20.

[SCREENSHOT: Un gráfico con el Oscilador estocástico en su propia área debajo del precio, mostrando las líneas K y D cruzándose dentro de la zona de sobreventa bajo la línea de nivel 20 | dc-es-stochastic-oscillator-01.png]

## Cómo leerlo

- **Zonas extremas.** Las lecturas por encima del nivel de sobrecompra (80 por defecto) significan que el precio está cerrando cerca del techo de su rango reciente; las lecturas por debajo del nivel de sobreventa (20) significan que está cerrando cerca del suelo. En un rango, estas zonas señalan posibles áreas de reversión.
- **Cruces K/D.** K cruzando por encima de D es un disparador alcista de momentum; K cruzando por debajo de D es bajista. Los cruces que ocurren dentro de una zona extrema — o al salir de ella — tienen el mayor peso.
- **Las tendencias fijan el oscilador.** En una tendencia fuerte la lectura puede permanecer en la zona de sobrecompra o sobreventa durante mucho tiempo. Una lectura extrema por sí sola no es una señal de reversión.
- **Divergencia.** El precio marca un nuevo máximo mientras el oscilador marca un máximo más bajo (o el reflejo en los mínimos): el momentum no está confirmando el movimiento.

## Referencia de configuración

Abra el diálogo desde el icono de engranaje en la fila del indicador en el panel **Indicators**.

### Parámetros

| Configuración | Qué hace |
|---|---|
| **K Period** | Número de barras utilizadas para calcular el rango máximo–mínimo de la línea K. Predeterminado: 14. Períodos más cortos reaccionan más rápido pero producen más señales falsas. |
| **D Period** | Número de períodos para la línea D: la media móvil de K. Predeterminado: 3. |
| **Smoothing Length** | Suavizado adicional aplicado a la línea K. Predeterminado: 3. Aumentarlo convierte la línea K rápida y dentada en una línea más lenta y limpia. |

### Niveles

| Configuración | Qué hace |
|---|---|
| **Overbought Level** | Línea de umbral superior. Predeterminado: 80. El color y el ancho son personalizables. |
| **Oversold Level** | Línea de umbral inferior. Predeterminado: 20. El color y el ancho son personalizables. |

### Subgráfico

| Configuración | Qué hace |
|---|---|
| **K line color** | Color de la línea K. |
| **D line color** | Color de la línea D. |
| **Line style / Line width** | Estilo de trazado y grosor de cada línea. |
| **Display options** | Cómo se dibujan las series en el área del gráfico. |
| **Use secondary axis** | Traza el oscilador contra un eje de valores secundario. |

[SCREENSHOT: El diálogo de configuración del Oscilador estocástico mostrando K Period 14, D Period 3, Smoothing Length 3 y la configuración de niveles con Overbought 80 y Oversold 20 | dc-es-stochastic-oscillator-02.png]

## Consejos y errores comunes

- **Sobrecompra no significa vender.** En una tendencia alcista el oscilador vive por encima de 80. Establezca primero el estado del mercado y luego use los extremos como zonas de reversión solo dentro de rangos.
- **Espere la salida, no la entrada.** Una lectura que abandona la zona extrema (cruzando de vuelta por debajo de 80 o por encima de 20) es una señal de sincronización más fuerte que la lectura entrando por primera vez en la zona.
- **Ajuste el suavizado antes que el período.** Si la línea K es demasiado ruidosa en gráficos rápidos de futuros, aumente **Smoothing Length** antes de acortar **K Period**: mantiene el período de análisis mientras reduce las señales falsas.
- **Ajuste los niveles en símbolos volátiles.** 80/20 son convenciones; en instrumentos que tocan los extremos constantemente, umbrales más amplios como 90/10 filtran las señales débiles.

## Artículos relacionados

- [[rsi|Índice de fuerza relativa (RSI)]]
- [[williams-r|Williams %R]]
- [[macd]]
- [[cci|Índice de canal de materias primas (CCI)]]
- [[different-types-of-input]]
- [[indicator-layout]]