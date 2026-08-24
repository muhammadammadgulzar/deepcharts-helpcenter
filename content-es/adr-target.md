---
title: "Objetivo de rango diario promedio (ADR Target)"
slug: "adr-target"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Proyecta objetivos de precio intradía a partir del rango diario promedio de sesiones recientes para que pueda fijar objetivos de beneficio con base estadística y detectar zonas de agotamiento."
keywords: ["ADR", "objetivo ADR", "rango diario promedio", "proyección de rango diario", "objetivo de rango", "objetivos intradía", "objetivo de expansión", "indicador de rango promedio"]
source_hash: "470e5baa1b0e0804"
ai_translated: true
source_hash: "470e5baa1b0e0804"
---
El Objetivo de rango diario promedio (ADR Target) calcula el movimiento de precio promedio, de máximo a mínimo, de un instrumento durante un número determinado de días y proyecta ese rango hacia adelante como posibles objetivos de precio intradía. En lugar de adivinar cuánto puede recorrer el movimiento de hoy, usted lo mide contra lo que el instrumento ha hecho realmente en los últimos días.

Eso lo convierte en una regla de volatilidad: cuando el precio ya ha cubierto su distancia diaria típica, las probabilidades de mayor expansión disminuyen, y sus objetivos de beneficio y decisiones de riesgo pueden reflejarlo.

## Qué es

ADR Target es un indicador de niveles estadísticos. Promedia el rango de máximo a mínimo de los últimos N períodos (barras diarias por defecto, con opciones semanal y mensual) y dibuja ese rango esperado en su gráfico como niveles objetivo etiquetados. Responde a las preguntas "¿cuánto suele moverse este mercado en un día?" y "¿cuánto de ese movimiento ya ha ocurrido?"

[SCREENSHOT: Ventana de gráfico con ADR Target aplicado: velas de precio intradía con los niveles objetivo ADR proyectados y sus etiquetas de texto visibles en el gráfico, con el precio operando aproximadamente a mitad de camino hacia el objetivo superior | dc-es-adr-target-01.png]

## Cuándo usarlo

- Quiere objetivos de expansión diaria realistas en lugar de metas arbitrarias en números redondos.
- Quiere estimar zonas de agotamiento intradía: áreas donde el día ya ha recorrido su distancia estadísticamente típica.
- Gestiona los objetivos de beneficio con estadística: tomando beneficios dentro del rango promedio en lugar de esperar un día atípico.
- Tiende a sobreoperar al final del día: el ADR muestra cuándo el mercado probablemente ya ha gastado su presupuesto de volatilidad típico.

## Inicio rápido

1. Abra la **Indicator List** (Lista de indicadores) en su gráfico.
2. Busque **ADR Target** y haga clic en **+** para añadirlo.
3. Haga clic en el icono de **Settings** (Configuración) junto al indicador.
4. Establezca **Length Type** (Tipo de longitud) en **Daily** (Diario): esto calcula el ADR a partir de barras diarias, la lectura estándar.
5. Establezca **Length** (Longitud) en **10** para que el promedio use los últimos 10 días de trading.
6. Ajuste **Font Size** (Tamaño de fuente), **Text Align** (Alineación de texto), **Background** (Fondo) y **Text Color** (Color de texto) en la configuración de trazado hasta que las etiquetas sean legibles con su esquema de color, y aplique.

[SCREENSHOT: Diálogo de configuración de ADR Target mostrando el menú desplegable Length Type abierto con las opciones Daily, Weekly y Monthly, el campo Length en 10, y la configuración de trazado (Font Size, Text Align, Background, Text Color) debajo | dc-es-adr-target-02.png]

## Cómo interpretarlo

Los niveles proyectados representan la distancia que el instrumento recorre en un día promedio. [CONFIRM: which price the ADR targets are projected from — session open, current day high/low, or previous close]

- **Precio bien dentro del ADR:** el día todavía tiene margen estadístico para expandirse. Los objetivos de continuación de tendencia dentro del rango restante son razonables.
- **Precio acercándose a una extensión completa del ADR:** el día ya ha recorrido su distancia típica. Es una zona natural de toma de beneficios y un mal lugar para iniciar nuevas operaciones de ruptura: la mayoría de los días no superan su rango promedio.
- **Precio superando el ADR:** está en una sesión atípica, normalmente impulsada por noticias o un cambio genuino de régimen. Trate los niveles como información, no como un techo rígido.

El Length Type cambia el horizonte: **Weekly** (Semanal) y **Monthly** (Mensual) promedian el rango de barras semanales y mensuales, produciendo objetivos más amplios adecuados para la planificación de swing en lugar de la ejecución intradía.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### Cálculo

| Ajuste | Qué hace |
|---|---|
| **Length Type** | Tamaño de barra usado para el promedio del rango: **Daily** (calcula el ADR usando barras diarias), **Weekly** o **Monthly**. |
| **Length** | Número de períodos anteriores usados para calcular el rango promedio. Ejemplo: **Length = 10** con Daily usa los últimos 10 días de trading. |

### Configuración de trazado (Plot Settings)

| Ajuste | Qué hace |
|---|---|
| **Font Size** | Ajusta el tamaño del texto de las etiquetas ADR en el gráfico. |
| **Text Align** | Alinea las etiquetas a la izquierda (**Left**) o a la derecha (**Right**) del nivel. |
| **Background** | Color de fondo de la etiqueta. |
| **Text Color** | Color del texto de la etiqueta. |

## Consejos y errores comunes

- **Ajuste Length al régimen actual.** Un Length corto (5–10 días) se adapta rápidamente tras un cambio de volatilidad; un Length más largo suaviza los días de noticias puntuales. Si el mercado cambió de carácter recientemente, un promedio largo se quedará rezagado respecto a la realidad.
- **El ADR es una probabilidad, no un muro.** El precio supera su rango promedio en días atípicos por definición. Nunca opere contra un movimiento fuerte solo porque el ADR esté "completo": combínelo con estructura y confirmación de flujo de órdenes.
- **No use los objetivos Weekly/Monthly para hacer scalping.** Describen rangos de varios días; en un gráfico intradía quedarán lejos del precio y le tentarán con objetivos sobredimensionados.
- **Compruebe el contexto de la sesión.** Las sesiones festivas y las medias jornadas comprimen los rangos y arrastran el promedio a la baja durante los días siguientes. Consulte [[understanding-market-structure-sessions]] para ver cómo las sesiones moldean los números.

## Artículos relacionados

- [[atr]]
- [[standard-deviation]]
- [[understanding-market-structure-sessions]]
- [[different-types-of-input]]
- [[indicator-layout]]