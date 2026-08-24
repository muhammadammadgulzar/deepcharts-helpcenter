---
title: "Puntos pivote"
slug: "pivot-points"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Traza un nivel pivote más líneas de resistencia R1/R2 y de soporte S1/S2 calculadas a partir del máximo, el mínimo y el cierre del día, la semana o el mes anterior."
keywords: ["puntos pivote", "pivotes", "R1", "R2", "S1", "S2", "pivotes diarios", "niveles de soporte y resistencia", "indicador de puntos pivote", "líneas pivote"]
source_hash: "39c9c2f999554fa7"
ai_translated: true
source_hash: "39c9c2f999554fa7"
---
El indicador Puntos pivote (Pivot Points) traza posibles niveles de soporte y resistencia calculados a partir de los precios máximo, mínimo y de cierre de períodos anteriores: diarios, semanales o mensuales. Dibuja un nivel pivote central con niveles de resistencia (R1, R2) por encima y niveles de soporte (S1, S2) por debajo, ofreciéndole un mapa ya preparado de los precios donde el mercado reaccionó, incluso antes de que abra.

Como los niveles provienen de precios históricos fijos, son idénticos para todos los que utilizan el mismo cálculo, y esa es exactamente la razón por la que tantos operadores los vigilan y por la que el precio reacciona con tanta frecuencia a su alrededor.

## Qué es

Puntos pivote es un indicador clásico de niveles. Al inicio de cada período calcula un pivote y sus niveles de soporte/resistencia circundantes a partir del máximo, el mínimo y el cierre del período anterior, y luego los dibuja como líneas horizontales etiquetadas a lo largo del nuevo período. Responde a la pregunta "según la operativa de ayer (o de la semana pasada, o del mes pasado), ¿dónde están los precios de reacción probables de hoy?".

[CONFIRM: which pivot calculation variant DeepCharts uses to derive the pivot, R1/R2 and S1/S2 from the previous period's high, low and close]

[SCREENSHOT: Gráfico intradía con Puntos pivote aplicado: la línea pivote central con R1 y R2 por encima y S1 y S2 por debajo, cada línea etiquetada y en un color distinto, con el precio reaccionando cerca de R1 | dc-es-pivot-points-01.png]

## Cuándo usarlo

- Es nuevo en soportes y resistencias y quiere niveles objetivos, dibujados automáticamente, en lugar de líneas de tendencia subjetivas.
- Opera intradía y quiere el mapa de pivotes diarios en su gráfico antes de que abra la sesión.
- Necesita precios de referencia comunes: los pivotes son ampliamente vigilados, por lo que las reacciones a su alrededor tienden a autorreforzarse.
- Hace swing trading y quiere la cuadrícula de pivotes semanal o mensual, más amplia, para objetivos y colocación del riesgo.

## Inicio rápido

1. Abra la **Indicator List** (lista de indicadores) en su gráfico.
2. Busque **Pivot Points** y haga clic en **+** para añadirlo.
3. Haga clic en el icono de **Settings** (configuración) junto al indicador.
4. Mantenga **Period to Show** en su valor predeterminado de **1** para que solo se dibuje el conjunto actual de niveles: un gráfico limpio mientras aprende la herramienta.
5. Asigne colores distintos a las líneas de pivote, resistencia y soporte en la configuración de color, para distinguir de un vistazo los niveles R de los niveles S.
6. Ajuste **Font Size** (tamaño de fuente, predeterminado 12.00) y **Line Width** (grosor de línea, predeterminado 1.00) a su gusto y aplique.

[SCREENSHOT: Diálogo de configuración de Puntos pivote mostrando la Configuración de trazado (Plot Settings) (Font Size 12.00, Line Width 1.00, Line Style, Label Align, Period to Show 1), la sección Custom Reference - Timeframe, la configuración de color para Pivot Point, R1, R2, S1, S2 y la sección Custom Time - Market Timezone | dc-es-pivot-points-02.png]

## Cómo leerlo

- **La línea pivote es el punto de equilibrio de la sesión.** Operar por encima del pivote se interpreta generalmente como un sesgo alcista para el período; por debajo, como bajista. Cruces repetidos en ambas direcciones señalan una sesión rotacional, en rango.
- **R1 y R2 son resistencias escalonadas.** En un movimiento alcista, R1 es la primera zona natural de reacción y un primer objetivo de beneficios habitual; R2 marca un movimiento estirado para el período.
- **S1 y S2 son soportes escalonados.** La imagen especular por debajo del pivote: S1 es la primera zona donde esperar compradores; S2, una caída más profunda.
- **Los niveles funcionan como zonas de inversión de rol.** Un nivel de resistencia roto suele actuar como soporte en el retesteo (y viceversa). El primer retesteo de un nivel pivote recién roto es una de las configuraciones más comunes construidas sobre este indicador.
- **Ajuste el período a su horizonte.** Los pivotes diarios se adaptan al trading intradía; los pivotes semanales y mensuales producen cuadrículas más amplias, relevantes para entradas de swing y objetivos mayores.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Configuración de trazado (Plot Settings)

| Configuración | Predeterminado | Qué hace |
|---|---|---|
| **Font Size** | 12.00 | Tamaño del texto de las etiquetas de los niveles. |
| **Line Width** | 1.00 | Grosor de las líneas pivote. |
| **Line Style** | — | Estilo visual de las líneas. |
| **Label Align** | — | Posición/alineación de las etiquetas de los niveles. |
| **Period to Show** | 1 | Cuántos períodos de niveles se muestran. Auméntelo para conservar en el gráfico los niveles de períodos anteriores como contexto. |

### Referencia personalizada (Custom Reference — Timeframe)

| Configuración | Qué hace |
|---|---|
| **Enable** | Activa la referencia personalizada, lo que le permite basar los niveles en un período de referencia distinto del estándar. |
| **Param Type** | Selecciona el tipo de referencia temporal utilizada. |
| **Param Value** | Valor para el tipo de parámetro elegido. |

### Configuración de color

| Configuración | Qué hace |
|---|---|
| **Pivot Point Color** | Color de la línea pivote central. |
| **R1 Color / R2 Color** | Colores del primer y segundo nivel de resistencia. |
| **S1 Color / S2 Color** | Colores del primer y segundo nivel de soporte. |

### Tiempo personalizado (Custom Time — Market Timezone)

| Configuración | Predeterminado | Qué hace |
|---|---|---|
| **Enable** | — | Activa o desactiva la ventana de tiempo personalizada. |
| **Ini Time** | 00:00:00 | Hora de inicio del período utilizado para el cálculo. |
| **End Time** | 00:00:00 | Hora de fin del período utilizado para el cálculo. |

> **Consejo:** La ventana de tiempo personalizada es importante en futuros, donde el día de la bolsa y su día natural local difieren. Definir el período explícitamente garantiza que el máximo, el mínimo y el cierre que alimentan los pivotes provengan de la sesión que usted realmente opera.

## Consejos y errores comunes

- **No trate los pivotes como puntos de giro garantizados.** Son precios de referencia, no predicciones. Opere la reacción que vea en el nivel (rechazo, absorción o ruptura limpia) en lugar del nivel en sí.
- **Cuide la definición de la sesión.** Si los niveles parecen "desajustados" en comparación con otras plataformas, el límite del período es el culpable habitual; utilice la sección **Custom Time — Market Timezone** para alinear la ventana de cálculo con la sesión de su mercado.
- **Menos períodos, gráfico más limpio.** Un **Period to Show** alto entierra los niveles actuales bajo los antiguos. Manténgalo bajo en intradía y auméntelo solo cuando estudie cómo trató el precio las cuadrículas pasadas.
- **Combínelos con niveles basados en volumen.** Los pivotes son niveles de fórmula de precio; emparejarlos con referencias derivadas del volumen como [[important-levels]] (POC, áreas de valor, VWAP) le muestra dónde coinciden los niveles de fórmula y el interés realmente negociado: esas confluencias son las zonas más fuertes.

## Artículos relacionados

- [[important-levels]]
- [[absolute-levels]]
- [[price-movement-levels]]
- [[understanding-market-structure-sessions]]
- [[different-types-of-input]]
- [[indicator-layout]]