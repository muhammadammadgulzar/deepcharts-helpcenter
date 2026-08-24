---
title: "Acumulación/Distribución de Chaikin"
slug: "chaikin-ad"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Indicador acumulativo clásico que combina la posición del precio y el volumen para mostrar si un mercado está siendo acumulado o distribuido."
keywords: ["chaikin ad", "acumulación distribución", "acumulación distribución de chaikin", "línea A/D", "línea AD", "línea de acumulación distribución", "indicador chaikin"]
source_hash: "893be0d63c5aad5b"
ai_translated: true
source_hash: "893be0d63c5aad5b"
---
La Acumulación/Distribución de Chaikin (AD) mide la presión compradora y vendedora combinando precio y volumen en una sola línea acumulativa. Responde a una pregunta que el volumen bruto no puede responder: ¿se negoció ese volumen mientras el precio cerraba fuerte o mientras el precio cerraba débil?

A diferencia de las herramientas de delta de flujo de órdenes de DeepCharts, que clasifican las operaciones por agresor en el bid o el ask, la AD de Chaikin es una estimación clásica basada en el precio: infiere la presión a partir de dónde cierra cada vela dentro de su rango, ponderada por el volumen. Eso la hace utilizable con cualquier dato y un buen puente entre el análisis técnico tradicional y el flujo de órdenes.

## Qué es

La línea AD calcula la presión compradora y vendedora acumulada usando la posición del precio dentro de la vela y su volumen. Un cierre cerca del máximo de la barra contribuye positivamente (acumulación); un cierre cerca del mínimo contribuye negativamente (distribución). Estas contribuciones se suman a lo largo del tiempo, por lo que la dirección de la línea importa más que su valor absoluto: una línea AD ascendente indica acumulación, una línea AD descendente indica distribución.

[SCREENSHOT: Ventana de gráfico con el indicador Acumulación/Distribución de Chaikin en un panel inferior: la línea AD subiendo al compás de una tendencia alcista, con la línea de media opcional superpuesta | dc-es-chaikin-ad-01.png]

## Cuándo usarla

- Quiere confirmar una tendencia: un precio que sube junto con una línea AD ascendente significa que el volumen respalda el movimiento.
- Busca divergencias: el precio marca un nuevo máximo mientras la línea AD no lo hace; la presión ponderada por volumen no está confirmando, una señal de advertencia clásica.
- Quiere una lectura de acumulación/distribución en mercados o datos donde el verdadero delta bid/ask no está disponible.
- Prefiere un indicador de presión suave y acumulativo frente a lecturas barra a barra como [[delta-bar]].

## Inicio rápido

1. Abra la **Indicator List** (Lista de indicadores) en su gráfico y añada **Chaikin Accumulation/Distribution**.
2. Abra la **Settings** (Configuración) del indicador.
3. En la sección **Average**, active **Enable** para trazar una media de señal sobre la línea AD.
4. Elija un **Average Type** (empiece con **Exponential** para mayor capacidad de respuesta) y establezca **Avg Length** en un periodo acorde a su horizonte de trading.
5. Deje el subgráfico **AD** en su estilo predeterminado **Line** con estilo de línea **Solid**.

[SCREENSHOT: Diálogo de configuración de la Acumulación/Distribución de Chaikin mostrando la sección Average (Enable, Average Type, Avg Length) y la configuración del subgráfico AD debajo | dc-es-chaikin-ad-02.png]

## Cómo leerla

- **Línea AD ascendente**: acumulación: los cierres están cayendo en la parte superior de sus rangos con volumen significativo.
- **Línea AD descendente**: distribución: se negocia volumen mientras el precio cierra débil.
- **Cruce de la AD con su línea de media**: un cambio de impulso en la presión acumulada; muchos operadores usan el cruce como disparador de confirmación de tendencia, no como señal independiente.
- **Divergencia**: la tendencia del precio y la tendencia de la AD apuntan en direcciones opuestas. Una divergencia bajista (máximos de precio más altos, máximos de AD más bajos) sugiere que el rally carece de respaldo de volumen; la divergencia alcista es la imagen especular.

Como la línea es acumulativa, su nivel absoluto es arbitrario: compare la pendiente y la estructura de los giros, nunca el número bruto.

## Referencia de configuración

### Media

| Configuración | Qué hace |
|---|---|
| **Enable** | Activa o desactiva la línea de media de señal dibujada sobre los valores AD. |
| **Average Type** | Método de media móvil para la línea de señal: **Simple**, **Exponential**, **Triangular** o **Weighted**. |
| **Avg Length** | Número de periodos usados para suavizar la línea de media. |

### AD (subgráfico)

| Configuración | Qué hace |
|---|---|
| **Color** / **2° Color** | Colores primario y secundario de la línea AD. |
| **Subgraph Style** | **Line** o **Hidden** (ocultar la línea AD bruta y mostrar solo la media). |
| **Auto Color** | **None**, **Slope** (color según la dirección de la línea) o **+/-** (color según el signo). |
| **Line Style** | Dibujo de la línea. Predeterminado **Solid**. |
| **Line Width** | Grosor de la línea AD. |
| **Short Name** | Etiqueta personalizada mostrada en la leyenda del panel. |

### AVG (subgráfico)

| Configuración | Qué hace |
|---|---|
| **Color / Style / Width** | Configuración visual de la línea de media, independiente de la línea AD, lo que le permite separar visualmente la señal suavizada de los valores brutos. |

### Visualización

| Configuración | Qué hace |
|---|---|
| **Name Label** | Muestra el nombre del indicador en el panel. |
| **Value Label** | Muestra el valor actual junto a la línea. |
| **Name/Value Background** | Dibuja un fondo detrás de las etiquetas para mejorar la legibilidad. |
| **Include on Auto Center** | Incluye este indicador cuando el panel centra automáticamente su escala. |

## Consejos y errores comunes

- **Pendiente, no nivel.** Los operadores nuevos en los indicadores acumulativos intentan leer el propio valor de la AD. No tiene escala fija: solo la dirección y la divergencia aportan información.
- **Cuidado con la distorsión de los gaps.** El cálculo usa la posición del cierre dentro del rango de cada barra, por lo que no tiene en cuenta los gaps de apertura; en instrumentos con muchos gaps, trate las lecturas de una sola barra con precaución.
- **Use Auto Color: Slope** para una lectura visual rápida: la línea cambia de color en el momento en que la presión acumulada gira.
- **Combínela con el delta real.** En futuros con datos completos de flujo de órdenes, confirme las divergencias de la AD contra el delta real de agresores ([[delta-cumulative-histogram]]) antes de actuar; la estimación y la cinta de operaciones a veces discrepan.

## Artículos relacionados

- [[volume]]
- [[delta-cumulative-histogram]]
- [[divergence-detector]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]