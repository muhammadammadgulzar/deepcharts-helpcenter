---
title: "Niveles de movimiento del precio"
slug: "price-movement-levels"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Traza niveles estructurados en porcentaje o pasos fijos por encima y por debajo de un precio de referencia, construyendo una cuadrícula automática de zonas de expansión, soporte y resistencia."
keywords: ["niveles de movimiento del precio", "niveles porcentuales", "niveles por pasos", "cuadrícula de precios", "niveles de expansión", "indicador de movimiento porcentual", "cuadrícula de niveles", "niveles de precio de referencia"]
source_hash: "a29ceb1d5cd914da"
ai_translated: true
source_hash: "a29ceb1d5cd914da"
---
El indicador Niveles de movimiento del precio (Price Movement Levels) traza niveles estructurados, porcentuales o por pasos, por encima y por debajo de un precio de referencia. Partiendo de una base como la apertura o el cierre de la sesión, construye una cuadrícula uniformemente espaciada (cada 0,5 %, cada 20 puntos, el espaciado que usted defina) para que siempre sepa cuánto se ha desplazado el precio desde su ancla y dónde se encuentra la siguiente zona estructurada de reacción.

Convierte "el mercado ha subido mucho hoy" en una afirmación medible: el precio está en el nivel del +1,5 %, con el nivel del +2 % por encima.

## Qué es

Niveles de movimiento del precio es un indicador de niveles basado en cuadrícula. Selecciona un precio de referencia y luego calcula niveles por encima y por debajo de él usando el espaciado que usted elija: porcentual (modo **Percentual**) o por pasos de valor fijo. Los niveles por encima de la base se trazan como resistencia, los niveles por debajo como soporte, y una línea cero marca la propia ancla de referencia. Responde a la pregunta "¿cuánto se ha movido el precio desde su referencia y dónde están los siguientes niveles estructurados?".

[SCREENSHOT: Gráfico intradía con Niveles de movimiento del precio aplicado: la línea cero en el precio de referencia de la sesión con niveles etiquetados en porcentaje apilados por encima (color de resistencia) y por debajo (color de soporte), con el precio operando entre el primer y el segundo nivel superior | dc-es-price-movement-levels-01.png]

## Cuándo usarlo

- Quiere identificar niveles de expansión intradía: cuánto se ha estirado el movimiento de hoy desde su base.
- Quiere zonas de soporte y resistencia dibujadas automáticamente a intervalos constantes en lugar de precios elegidos a mano.
- Sigue el movimiento del precio en términos porcentuales, por ejemplo en instrumentos cuyos movimientos diarios se discuten habitualmente en porcentaje.
- Quiere zonas de reacción estructuradas para objetivos de beneficio escalonados: salir por partes en cada nivel sucesivo.

## Inicio rápido

1. Abra la **Indicator List** (lista de indicadores) en su gráfico.
2. Busque **Price Movement Levels** y haga clic en **+** para añadirlo.
3. Haga clic en el icono de **Settings** (configuración) junto al indicador.
4. Establezca **Level based on** en su precio de referencia preferido, por ejemplo la apertura de la sesión (**Open**) como ancla para trading intradía.
5. Establezca **Step mode** en **Percentual** y elija un **Step value** que dé un espaciado utilizable en su instrumento; amplíe el paso si la cuadrícula satura su gráfico.
6. Asigne colores distintos a **Support Line**, **Resistance Line** y **Zero Line** para que los tres roles se lean al instante, y luego aplique.

[SCREENSHOT: Diálogo de configuración de Niveles de movimiento del precio mostrando las opciones de Chart Area, la configuración general (Days to load, Level based on, Step mode, Step value, Font size, Text color, Minimum levels) y los grupos Support Line, Resistance Line, Zero Line y Custom Time Session | dc-es-price-movement-levels-02.png]

## Cómo leerlo

El indicador funciona con una lógica de cinco pasos: selecciona el precio base, calcula los niveles usando su espaciado de paso, muestra los niveles positivos como resistencia y los negativos como soporte, y marca el ancla de referencia con la línea cero.

- **La línea cero es su ancla de sesión.** Precio por encima de ella significa que el mercado está en positivo neto frente a la referencia; por debajo, en negativo neto. Cruces repetidos de la línea cero señalan un día rotacional en torno al ancla.
- **Cada nivel es un hito escalonado.** En una tendencia, el precio tiende a moverse de nivel en nivel; un estancamiento en un nivel es su primera señal de que la expansión se está pausando, y una ruptura limpia desplaza el foco al siguiente nivel de la cuadrícula.
- **La distancia desde el cero mide el estiramiento.** Cuanto más lejos de la referencia opera el precio, más extendido está el movimiento: los niveles más profundos de la cuadrícula son zonas naturales para ajustar el riesgo o tomar beneficios, más que para iniciar entradas nuevas.
- **Porcentaje frente a pasos fijos cambia el significado.** El espaciado porcentual mantiene la cuadrícula proporcional entre instrumentos y regímenes de precio; los pasos fijos se corresponden con distancias concretas en puntos/ticks que encajan con instrumentos con un comportamiento de números redondos bien conocido.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Área de gráfico (Chart Area)

| Configuración | Qué hace |
|---|---|
| **Horizontal** | Dibuja los niveles en el gráfico de precios principal. |
| **Vertical** | Muestra los niveles en vertical, donde esté disponible. |
| **Panel** | Selecciona dónde aparecen los niveles. |

### Configuración general

| Configuración | Qué hace |
|---|---|
| **Days to load** | Número de sesiones pasadas usadas para calcular y mostrar los niveles. |
| **Level based on** | Precio de referencia al que se ancla la cuadrícula (por ejemplo **Open** o **Close**). |
| **Step mode** | Método de espaciado: **Percentual** (porcentual) o pasos de valor fijo. |
| **Step value** | Espaciado entre cada nivel. |
| **Font size** | Tamaño de las etiquetas porcentuales. |
| **Text color** | Color de las etiquetas de los niveles. |
| **Minimum levels** | Número mínimo de niveles trazados por encima y por debajo de la base. |

### Línea de soporte (Support Line)

| Configuración | Qué hace |
|---|---|
| **Color / Style / Width** | Formato de los niveles inferiores (soporte). Las opciones de estilo incluyen sólido y discontinuo. |

### Línea de resistencia (Resistance Line)

| Configuración | Qué hace |
|---|---|
| **Color / Style / Width** | Formato de los niveles superiores (resistencia). |

### Línea cero (Zero Line)

| Configuración | Qué hace |
|---|---|
| **Color / Style / Width** | Formato del nivel de referencia base (0 %). |

### Sesión de tiempo personalizada (Custom Time Session)

| Configuración | Qué hace |
|---|---|
| **Enable** | Limita el cálculo a una ventana de sesión específica. |
| **Ini Time / End Time** | Inicio y fin de la ventana de sesión, en la zona horaria de la bolsa. |

## Consejos y errores comunes

- **Elija el ancla deliberadamente.** Una cuadrícula basada en la apertura (**Open**) responde a "cuánto hemos avanzado hoy"; una cuadrícula basada en el cierre (**Close**) enmarca el movimiento frente a la liquidación de ayer. Las dos cuadrículas pueden situarse en precios muy distintos: sepa qué pregunta está haciendo.
- **Ajuste el Step value a la volatilidad del instrumento.** Un paso que produce cinco niveles al día en un instrumento puede producir cincuenta en otro. Si el precio atraviesa varios niveles por barra, la cuadrícula es demasiado fina para ser útil.
- **Use Minimum levels para garantizar cobertura.** En días tranquilos una cuadrícula escasa puede dejar al precio sin ningún nivel visible por encima; la configuración **Minimum levels** asegura que el mapa se extienda lo suficiente en ambas direcciones.
- **Alinee la ventana de sesión.** En futuros, habilite la **Custom Time Session** y defina la ventana en la zona horaria de la bolsa para que el precio de referencia provenga de la sesión que usted opera: una ventana desajustada desplaza silenciosamente toda la cuadrícula. Consulte [[understanding-market-structure-sessions]].
- **Las cuadrículas marcan estructura, no señales.** Los niveles con espaciado fijo a veces coincidirán con precios de reacción reales y a veces no; combínelos con referencias basadas en volumen como [[important-levels]] antes de tratar un nivel de la cuadrícula como operable.

## Artículos relacionados

- [[adr-target]]
- [[absolute-levels]]
- [[important-levels]]
- [[pivot-points]]
- [[different-types-of-input]]
- [[indicator-layout]]