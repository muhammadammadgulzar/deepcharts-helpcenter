---
title: "Deep-M IVB"
slug: "deep-m-ivb"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Indicador algorítmico de ruptura del rango de apertura (ORB) que traza niveles de proyección, protección y salida derivados estadísticamente, además de zonas de reacción y un sesgo diario."
keywords: ["deep m ivb", "deep-m ivb", "ivb", "ruptura del rango de apertura", "indicador ORB", "niveles del rango de apertura", "objetivos orb"]
source_hash: "c16bfdf30326c0e1"
ai_translated: true
source_hash: "c16bfdf30326c0e1"
---
Deep-M IVB es un indicador algorítmico desarrollado por el equipo de DeepCharts para simplificar la operativa de la estructura de ruptura del rango de apertura (Opening Range Breakout, ORB). En lugar de que usted mida el rango de apertura y adivine los objetivos, deriva sus niveles de años de estadísticas históricas y los traza automáticamente: el propio rango, los niveles de protección y salida tras una ruptura, las zonas de reacción y una lectura de sesgo diario.

El resultado es un marco ORB completo sobre el gráfico: dónde está el rango, hasta dónde tiende estadísticamente a viajar una ruptura, dónde tiende a estancarse y hacia qué dirección se inclina el día.

## Qué es

Deep-M IVB construye el rango de apertura RTH (High, Mid, Low) sobre una ventana que usted elige, y luego proyecta niveles derivados estadísticamente más allá de él. Tras una ruptura traza niveles de protección y salida (objetivos de alta probabilidad y zonas estructuradas) y resalta las zonas de reacción más fuertes donde el precio puede desacelerarse. Un panel de resumen en la esquina superior izquierda del gráfico muestra el sesgo diario.

[SCREENSHOT: Gráfico con Deep-M IVB aplicado tras la apertura: líneas High/Mid/Low del rango de apertura, niveles de proyección por encima del rango tras una ruptura, zonas de reacción sombreadas, y el Summary Panel visible en la esquina superior izquierda mostrando el sesgo diario | dc-es-deep-m-ivb-01.png]

## Cuándo usarlo

- Opera la ruptura del rango de apertura y quiere objetivos con base estadística en lugar de proyecciones de múltiplos fijos.
- Quiere áreas de salida parcial planificadas de antemano: las zonas de reacción marcan dónde tiende a ralentizarse el impulso de la ruptura.
- Quiere una lectura rápida del sesgo diario (Neutral / Positivo / Negativo) sin construir su propio modelo.
- Necesita niveles claros de invalidación y protección para gestionar una operación de ruptura.

## Inicio rápido

1. Abra la **Indicator List** en su gráfico, busque **Deep-M IVB** y haga clic en **+**.
2. Haga clic en el icono **Settings** para configurarlo.
3. Establezca **RTH Opening Range (Min)** en **30**: las opciones admitidas son 15, 30 y 60 minutos, y el equipo recomienda 30.
4. Active **Enable Protection** para que los niveles de protección y salida se tracen tras la ruptura del rango.
5. Active **Enable Zones** para resaltar las zonas de reacción más fuertes durante una ruptura.
6. Aplique y espere a que la ventana del rango de apertura se complete tras la apertura RTH.

[SCREENSHOT: Diálogo de configuración de Deep-M IVB mostrando RTH Opening Range (Min) establecido en 30, con Enable Protection y Enable Zones activados, y los controles de color/grosor/estilo del rango visibles | dc-es-deep-m-ivb-02.png]

## Cómo leerlo

- **Rango de apertura (High / Mid / Low):** la estructura de la que depende todo lo demás. Por encima del rango, el día se inclina al lado largo; por debajo, al corto; dentro de él, aún no hay ruptura.
- **Proyecciones (tres niveles, por probabilidad):** **Protection** es el objetivo diario de mayor probabilidad, **Average** (Ext. Avg) es el segundo objetivo y **Projection** (Ext. Std-1) es el tercero. Un enfoque común es salir escalonadamente conforme se alcanza cada uno.
- **Zonas de reacción:** áreas donde el precio puede reaccionar y el impulso puede ralentizarse durante una ruptura: lugares naturales para salidas parciales o reentradas si el nivel aguanta. Las zonas de **Support** colorean el lado alcista, las zonas de **Resistance** el lado bajista.
- **Summary Panel (esquina superior izquierda):** el sesgo diario — **Neutral**, **Positive** (alcista) o **Negative** (bajista) — para una lectura direccional de un vistazo.

Una ruptura que alcanza el nivel Protection ya ha logrado su objetivo estadísticamente más probable; esperar las proyecciones adicionales es una apuesta de menor probabilidad, y por eso están secuenciadas.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Rango

| Configuración | Qué hace |
|---|---|
| **RTH Opening Range (Min)** | Minutos utilizados para construir el rango de apertura: 15, 30 o 60. Recomendación del equipo: 30. Define el High, Mid y Low del rango. |
| **High / Mid / Low Colors** | Colores de línea de los tres niveles del rango. |
| **Line Width / Style** | Grosor y estilo de las líneas del rango. |

### Niveles de ruptura

| Configuración | Qué hace |
|---|---|
| **Enable Protection** | Traza los niveles de protección y salida tras la ruptura del rango: objetivos de alta probabilidad y zonas estructuradas. |
| **Projection Colors** | Colores de las tres proyecciones: **Protection** (mayor probabilidad), **Average** (Ext. Avg), **Projection** (Ext. Std-1). |

### Zonas

| Configuración | Qué hace |
|---|---|
| **Enable Zones** | Resalta las zonas de reacción más fuertes durante una ruptura, donde el precio puede desacelerarse. |
| **Support Color / Resistance Color** | Colores de las zonas alcistas (soporte) y bajistas (resistencia). |
| **Opacity** | Transparencia de las zonas. |
| **Bar Extension** | Cuántas velas hacia adelante se extienden las zonas (por ejemplo 10). |
| **Line Width** | Grosor del borde de las zonas. |

### Summary Panel

| Configuración | Qué hace |
|---|---|
| **Bias colors** | Colores de los estados de sesgo diario **Neutral**, **Positive** y **Negative** mostrados en el panel superior izquierdo. |

## Consejos y errores comunes

- **Elija una ventana de rango y manténgala.** Los niveles son estadísticos; cambiar entre 15/30/60 en pleno día invalida la comparación. El equipo recomienda 30 minutos.
- **No se traza nada antes de que el rango se complete.** El indicador necesita la ventana completa del rango de apertura tras la apertura RTH antes de que aparezcan los niveles.
- **Trate las proyecciones como objetivos secuenciados, no como garantías.** Primero Protection, luego Average, luego Projection: la probabilidad disminuye con cada extensión.
- **Use las zonas para la gestión, no como entradas por sí solas.** Marcan dónde puede ralentizarse el impulso; combínelas con confirmación de flujo de órdenes como [[deep-stats]] o [[deep-trades]] en la zona.
- **El contexto de sesión importa.** La lógica ORB asume una apertura RTH limpia; consulte [[understanding-market-structure-sessions]] para el comportamiento RTH frente a ETH.

## Artículos relacionados

- [[understanding-market-structure-sessions]]
- [[pivot-points]]
- [[important-levels]]
- [[deep-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]