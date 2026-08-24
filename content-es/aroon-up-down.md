---
title: "Aroon Up/Down"
slug: "aroon-up-down"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Lea el impulso de la tendencia con el indicador Aroon Up/Down: dos líneas de 0 a 100 que miden cuán recientemente el precio marcó un nuevo máximo o mínimo."
keywords: ["aroon", "aroon up down", "indicador aroon", "impulso de tendencia", "indicador de nuevo máximo nuevo mínimo", "indicador arun", "cruce aroon"]
source_hash: "0443703aa31cd60d"
ai_translated: true
source_hash: "0443703aa31cd60d"
---
El indicador Aroon Up/Down evalúa el impulso de la tendencia midiendo cuán recientemente el precio marcó un nuevo máximo o un nuevo mínimo dentro de un período seleccionado. En lugar de preguntar "¿cuánto se ha movido el precio?", Aroon pregunta "¿qué tan fresco es el último extremo?": una lectura sutilmente diferente, y a menudo más temprana, de la salud de la tendencia.

El indicador traza dos líneas en su propio panel, cada una con un rango de 0 a 100, de modo que siempre ve los lados alcista y bajista del mercado medidos por separado.

## Qué es

Aroon consta de dos componentes:

- **Aroon Up**: mide la fuerza del impulso alcista; es alto cuando se marcó un nuevo máximo del período recientemente y decae a medida que ese máximo envejece.
- **Aroon Down**: mide la fuerza del impulso bajista de la misma manera, basándose en el mínimo más reciente del período.

Una lectura cercana a 100 significa que el extremo correspondiente se marcó muy recientemente; una lectura cercana a 0 significa que ocurrió hace mucho tiempo dentro de la ventana de análisis. Como las dos líneas son independientes, Aroon distingue "tendencia alcista fuerte" (Up alto, Down bajo) de "agitación volátil" (ambas elevadas) de una forma que las herramientas de una sola línea no pueden.

## Cuándo usarlo

- Para detectar tendencias emergentes de forma temprana: una línea fijada cerca de 100 significa que el precio sigue imprimiendo extremos frescos en esa dirección.
- Para cronometrar cambios de tendencia con los **cruces de Aroon Up/Aroon Down**.
- Para confirmar la consolidación: ambas líneas derivando en niveles bajos significa que no se están marcando nuevos máximos ni mínimos: un rango.
- Como complemento de [[adx|ADX]]: ADX mide la fuerza de la tendencia sin dirección; Aroon muestra qué lado está produciendo los extremos frescos.

## Inicio rápido

1. Abra un gráfico y haga clic en el icono de gráfico de barras en la esquina superior izquierda para abrir el panel **Indicators**.
2. Haga clic en **Indicators** para abrir la lista completa **Indicator List**.
3. Busque "Aroon Up/Down" y haga clic en **+** para añadirlo: se traza en su propio panel debajo del gráfico de precio.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración.

La longitud (**Length**) predeterminada de 14 con los niveles estándar (75 / 50 / 25) es un punto de partida sólido. Asigne a Aroon Up y Aroon Down colores fuertemente contrastantes: los cruces son la señal, así que deben ser visibles de un vistazo.

[SCREENSHOT: Un gráfico de precio con el indicador Aroon Up/Down en un panel inferior — Aroon Up manteniéndose cerca de 100 durante una tendencia alcista mientras Aroon Down se sitúa cerca de 0, con las líneas de nivel 75/50/25 visibles | dc-es-aroon-up-down-01.png]

## Cómo leerlo

- **Aroon Up cerca de 100, Aroon Down cerca de 0**: tendencia alcista fuerte; siguen llegando nuevos máximos mientras el último mínimo envejece. Invierta la lectura para una tendencia bajista.
- **Cruces**: Aroon Up cruzando por encima de Aroon Down sugiere que el impulso alcista toma el control; el cruce opuesto sugiere control bajista. Los cruces que ocurren cerca del **Middle Level** (50) con ambas líneas moviéndose de forma decisiva son más limpios que los cruces en la zona baja.
- **Por encima del High Level (75)**: fuerte impulso de tendencia en ese lado.
- **Por debajo del Lower Level (25)**: impulso débil; ese lado del mercado no ha marcado un extremo en mucho tiempo.
- **Ambas líneas bajas**: consolidación. Ningún lado está progresando, por lo que las señales de tendencia no son fiables hasta que una línea rompa al alza.

## Referencia de configuración

### Parámetros

| Configuración | Qué hace |
|---|---|
| **Length** | Número de barras utilizadas en el cálculo. Predeterminado: 14. Valores más bajos producen señales de respuesta más rápida; valores más altos ofrecen un análisis de tendencia más suave. |

### Configuración de niveles

| Configuración | Qué hace |
|---|---|
| **Middle Level** | La línea de equilibrio entre las fuerzas alcistas y bajistas. Predeterminado: 50. |
| **Lower Level** | El umbral que señala un impulso de tendencia débil. Predeterminado: 25. |
| **High Level** | El umbral que señala un impulso de tendencia fuerte. Predeterminado: 75. |
| Colores de nivel / **Level Width** | El color de cada línea de nivel y el grosor de la línea son personalizables. |

### Subgráficos (Aroon Up y Aroon Down)

Ambas líneas ofrecen una configuración idéntica:

| Configuración | Qué hace |
|---|---|
| **Color** | Color de línea del subgráfico. |
| **Line Style** | Patrón visual. Predeterminado: **Solid**. |
| **Line Width** | Grosor de la línea. |
| **Short Name** | Etiqueta personalizada mostrada en la leyenda del gráfico. |
| **Name Label** / **Value Label** | Etiquetas opcionales que muestran el nombre de la línea y su valor actual, con colores de fondo configurables. |
| **Include on Auto Center** | Si esta línea se tiene en cuenta cuando el panel se escala automáticamente. |

[SCREENSHOT: El diálogo de configuración de Aroon Up/Down mostrando Length 14, los campos Middle/Lower/High Level en 50/25/75, y las dos secciones de subgráfico para Aroon Up y Aroon Down | dc-es-aroon-up-down-02.png]

## Consejos y errores comunes

- **No opere cada cruce.** En un rango las líneas se cruzan constantemente; exija que una línea empuje hacia el High Level tras el cruce antes de tratarlo como una señal de tendencia.
- **Aroon mide lo reciente, no la magnitud.** Un nuevo máximo por un solo tick restablece Aroon Up en la parte superior exactamente igual que lo hace una ruptura importante. Compruebe la estructura del precio o el volumen antes de asumir fuerza.
- **La longitud (Length) define qué cuenta como "reciente".** Un Aroon de 14 barras en un gráfico de 5 minutos describe aproximadamente la última hora de extremos; el mismo ajuste en un gráfico diario describe tres semanas. Ajústelo al horizonte que realmente opera.
- Si prefiere la misma información comprimida en una sola línea alrededor de cero, utilice en su lugar el [[aroon-oscillator|Oscilador Aroon]].

## Artículos relacionados

- [[aroon-oscillator]]
- [[adx]]
- [[donchian-channel]]
- [[different-types-of-input]]
- [[indicator-layout]]