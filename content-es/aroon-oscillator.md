---
title: "Oscilador Aroon"
slug: "aroon-oscillator"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Comprima Aroon Up y Aroon Down en una sola línea alrededor de cero con el Oscilador Aroon para leer la fuerza, la dirección y el agotamiento de la tendencia."
keywords: ["oscilador aroon", "aroon osc", "diferencia aroon", "oscilador de tendencia", "oscilador de línea cero", "oscilador arun"]
source_hash: "7531c3789c0e813a"
ai_translated: true
source_hash: "7531c3789c0e813a"
---
El Oscilador Aroon mide la fuerza y la dirección de la tendencia calculando la diferencia entre Aroon Up y Aroon Down. Mientras que [[aroon-up-down|Aroon Up/Down]] muestra dos líneas, el oscilador comprime la misma información en una sola línea que fluctúa alrededor de una línea cero: positiva cuando los alcistas están marcando los nuevos extremos, negativa cuando lo hacen los bajistas.

Si los cruces de dos líneas le resultan visualmente ruidosos, esta es la forma más limpia de consumir Aroon.

## Qué es

El oscilador responde a la pregunta "¿qué lado está ganando y por cuánto?" en un solo valor. Dado que Aroon Up y Aroon Down oscilan cada uno entre 0 y 100, su diferencia se mueve entre los extremos a ambos lados de cero: lecturas fuertemente positivas significan que dominan los nuevos máximos recientes, lecturas fuertemente negativas significan que dominan los nuevos mínimos recientes, y lecturas cercanas a cero significan que ningún lado tiene ventaja.

El indicador ayuda a los operadores a identificar tendencias emergentes, la fuerza de la tendencia, posibles reversiones y zonas de agotamiento de tipo sobrecompra/sobreventa.

## Cuándo usarlo

- Para leer la dirección y la fuerza de la tendencia en una sola línea en lugar de seguir dos.
- Para detectar transiciones de tendencia: el cruce de la línea cero es la versión del oscilador del cruce de Aroon Up/Down.
- Para identificar el agotamiento: lecturas extremas que se estancan y giran de vuelta hacia cero advierten de que el lado dominante está perdiendo el control.
- Para confirmar señales de herramientas basadas en el precio como el [[donchian-channel|Canal de Donchian]]: una ruptura respaldada por un oscilador fuertemente positivo tiene detrás el impulso de extremos recientes.

## Inicio rápido

1. Abra un gráfico y haga clic en el icono de gráfico de barras en la esquina superior izquierda para abrir el panel **Indicators**.
2. Haga clic en **Indicators** para abrir la lista completa **Indicator List**.
3. Busque "Aroon Oscillator" y haga clic en **+** para añadirlo: se traza en su propio panel debajo del gráfico de precio.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración.

La longitud (**Length**) predeterminada de 14 coincide con la configuración estándar de Aroon. El estilo de subgráfico (**Subgraph Style**) predeterminado es **Bars** con **Auto Color (+/-)**, por lo que las lecturas positivas y negativas se colorean de forma diferente desde el principio: una manera fácil de leer el régimen de un vistazo.

[SCREENSHOT: Un gráfico de precio con el Oscilador Aroon en un panel inferior renderizado como barras, barras positivas de un color durante la tendencia alcista y barras negativas de otro tras la reversión, con la línea cero visible en el medio | dc-es-aroon-oscillator-01.png]

## Cómo leerlo

- **Por encima de cero**: Aroon Up supera a Aroon Down; los extremos más recientes son máximos; régimen alcista. **Por debajo de cero** es el espejo bajista.
- **Distancia a cero = convicción.** Las lecturas empujadas hacia los extremos significan que un lado ha estado marcando extremos recientemente mientras que el último extremo del otro lado está desfasado: una tendencia fuerte.
- **Los cruces de la línea cero** marcan posibles cambios de tendencia. Como con cualquier oscilador, los cruces durante rangos tranquilos generan señales falsas; los cruces acompañados de un movimiento decisivo del precio son más fiables.
- **Extremos que se desvanecen**: cuando el oscilador alcanza una zona extrema y luego se contrae hacia cero mientras el precio se estanca, la tendencia está envejeciendo: ajuste el riesgo o busque una estructura de reversión.

## Referencia de configuración

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Length** | Número de barras utilizadas en el cálculo de Aroon. Predeterminado: 14. Valores más bajos producen señales más sensibles; valores más altos generan resultados más suaves. |

### Configuración de niveles

| Configuración | Qué hace |
|---|---|
| **Middle Level** | La línea de referencia de tendencia neutral. Predeterminado: 0. |
| **Lower Level** | Línea de nivel que marca una zona extrema. Predeterminado: 80. |
| **High Level** | Línea de nivel que marca la zona extrema opuesta. Predeterminado: -80. |
| **Middle/Lower/Higher Level Color** | Color de cada línea de nivel. |
| **Level Width** | Grosor de las líneas de nivel. |

Estos niveles ayudan a identificar condiciones de tendencia fuerte y posibles zonas de agotamiento.

[CONFIRM: the source article lists Lower Level default as 80 and High Level default as -80 — verify in the app whether these two defaults are intentionally assigned this way or swapped.]

### Subgráficos

| Configuración | Qué hace |
|---|---|
| **Color** / **2° Color** | Colores primario y secundario de las barras del oscilador. |
| **Subgraph Style** | Formato de visualización. Predeterminado: **Bars**. |
| **Auto Color (+/-)** | Cambia automáticamente el color según los valores positivos o negativos. |
| **Line Style** | Patrón visual cuando se dibuja como línea (Solid y otros estilos). |
| **Line Width** | Grosor de la línea o barra. |
| **Short Name** | Etiqueta personalizada mostrada en la leyenda del gráfico. |
| **Name Label** / **Value Label** | Etiquetas opcionales de nombre y valor, con opciones de color **Name Background** y **Value Background**. |
| **Chart color for marker** | Utiliza el color del gráfico para el marcador de valor. |
| **Include on Auto Center** | Si la serie se tiene en cuenta cuando el panel se escala automáticamente. |

[SCREENSHOT: El diálogo de configuración del Oscilador Aroon mostrando Length 14, el grupo de configuración de niveles con los campos Middle/Lower/High Level, y el grupo de subgráficos con Subgraph Style en Bars y Auto Color (+/-) habilitado | dc-es-aroon-oscillator-02.png]

## Consejos y errores comunes

- **Los cruces de la línea cero se retrasan ligeramente respecto a la vista de dos líneas** en condiciones agitadas y se repiten con frecuencia en los rangos. Exija continuación, un empuje hacia una zona extrema, antes de tratar un cruce como un cambio de tendencia.
- **Una lectura extrema es fuerza, no una reversión automática.** A diferencia de un verdadero oscilador de sobrecompra/sobreventa, un Oscilador Aroon fijado en el extremo a menudo solo significa una tendencia sana imprimiendo extremo tras extremo. Busque la contracción de vuelta hacia cero, no el extremo en sí.
- **Mantenga la longitud (Length) consistente** con cualquier panel de [[aroon-up-down|Aroon Up/Down]] que ejecute junto a él, o los dos discreparán y generarán confusión en lugar de confirmación.
- El estilo **Bars** con **Auto Color (+/-)** es más fácil de leer de un vistazo que una línea; manténgalo salvo que superponga varias series en el mismo panel (consulte [[indicator-layout]]).

## Artículos relacionados

- [[aroon-up-down]]
- [[adx]]
- [[macd]]
- [[different-types-of-input]]
- [[indicator-layout]]