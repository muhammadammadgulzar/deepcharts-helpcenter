---
title: "Envolventes VWAP"
slug: "vwap-envelopes"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Referencia del indicador Envolventes VWAP en DeepCharts: VWAP continuo con bandas de desviación estándar o de porcentaje, configuración del Period Mode y cómo operar las envolventes."
keywords: ["envolventes vwap", "bandas vwap", "desviación estándar vwap", "precio promedio ponderado por volumen", "bandas de desviación vwap", "vwap continuo", "envolvente vwap"]
source_hash: "98cc1a74dcccc427"
ai_translated: true
source_hash: "98cc1a74dcccc427"
---
El indicador Envolventes VWAP (VWAP Envelopes) muestra el precio promedio ponderado por volumen (VWAP) de las operaciones realizadas durante un cierto período de tiempo, junto con bandas de desviación estándar a su alrededor. Las envolventes miden la distancia promedio de los precios respecto al valor medio, ayudándole a evaluar cuán estirado está el precio en relación con el promedio ponderado por volumen.

Una distinción clave respecto a un VWAP de sesión clásico: este indicador calcula en modo continuo, actualizándose progresivamente en lugar de reiniciarse a medianoche. Ese comportamiento rodante lo hace muy adecuado para el análisis intradía que atraviesa los límites de la sesión.

## Qué es

Las Envolventes VWAP responden a la pregunta: ¿dónde está el precio justo ponderado por volumen y a qué distancia de él está operando el mercado en este momento? El indicador traza la línea VWAP sobre el precio más hasta tres bandas envolventes a cada lado, construidas a partir de desviaciones estándar del precio alrededor del VWAP o a partir de porcentajes fijos de este.

Como el VWAP pondera cada precio por el volumen negociado en él, representa la posición promedio de los participantes del mercado durante el período, razón por la cual la distancia respecto al VWAP suele leerse como prima (por encima) o descuento (por debajo).

> **Nota:** El VWAP calculado por este indicador coincide con el VWAP del perfil de volumen diario solo al final de la sesión. Intradía, el cálculo continuo y un VWAP anclado a la sesión diferirán.

El modelo en vivo a continuación muestra la idea: ajuste las bandas sigma alrededor del VWAP y pase el cursor sobre el gráfico para obtener una lectura de z-score de cuán estirado está el precio.

[WIDGET: vwap-lab]

## Cuándo usarlo

- Identificación de soportes y resistencias: la línea VWAP y las bandas exteriores son niveles de reacción muy vigilados.
- Reconocimiento de prima/descuento: juzgar si el precio actual está caro o barato en relación con la media ponderada por volumen.
- Trading de reversión a la media: operar en contra de los empujes hacia las bandas exteriores de vuelta hacia el VWAP en condiciones equilibradas.
- Confirmación de rupturas: la aceptación sostenida más allá de una banda exterior señala iniciativa genuina, no ruido.
- Precisión intradía: el cálculo continuo mantiene la referencia válida a través del límite de medianoche.

## Inicio rápido

1. Abra un gráfico de precio: consulte [[first-chart]].
2. Haga clic en el botón verde **Indicators** (o presione **Ctrl I**) para abrir la **Indicator List**.
3. Busque **VWAP Envelopes** y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje para abrir su configuración.
5. Como configuración inicial, establezca **Period Mode** en **Daily** con un **Period Value** de 1 para una vista rodante de un día, mantenga **Envelope Mode** en **Standard Deviation** y habilite la 1.ª y la 2.ª banda. El comportamiento rodante exacto en relación con sus horarios de sesión puede variar: verifíquelo en su instrumento antes de confiar en los niveles.

[SCREENSHOT: Diálogo de configuración de Envolventes VWAP abierto mostrando Period Mode (Daily/Minutes), Period Value, Envelope Mode (Standard Deviation / Price Percentage) y los parámetros de las bandas 1st/2nd/3rd Standard | dc-es-vwap-envelopes-01.png]

## Cómo leerlo

- **El VWAP como la gravedad de la sesión.** Precio por encima del VWAP con retrocesos que lo respetan = compradores en control; el espejo por debajo. Cruces repetidos a través del VWAP = equilibrio.
- **Las bandas estadísticas.** En el modo Standard Deviation, las bandas conservan la intuición habitual de la distribución normal: aproximadamente el 68% de la acción del precio suele caer dentro de 1 desviación estándar, aproximadamente el 95% dentro de 2 y aproximadamente el 99,7% dentro de 3. Un toque de la 2.ª o 3.ª banda es, por tanto, un precio estadísticamente estirado.
- **Reversión frente a aceptación.** Un rechazo rápido en una banda exterior de vuelta hacia el VWAP favorece la reversión a la media. Un precio que cierra y se mantiene más allá de una banda ("aceptación") cambia la lectura a fuerza de ruptura.
- **Zonas de prima y descuento.** Las compras tomadas muy por debajo del VWAP compran con descuento respecto al participante promedio; las ventas muy por encima venden con prima. Este encuadre importa sobre todo para los estilos de reversión a la media.

## Referencia de configuración

### General

| Configuración | Qué hace |
|---|---|
| **Period Mode** | Selecciona el tipo de ventana de cálculo: **Daily** para una perspectiva de más largo plazo a lo largo de n días, o **Minutes** para un análisis de período más corto que sigue el movimiento del precio y el volumen más de cerca. |
| **Period Value** | El parámetro numérico correspondiente al modo seleccionado (número de días o minutos). |

### Modo de envolvente (Envelope Mode)

| Configuración | Qué hace |
|---|---|
| **Standard Deviation** | Construye las bandas a partir de la desviación típica del precio alrededor del VWAP. |
| **Price Percentage** | Construye las bandas como desplazamientos porcentuales fijos por encima y por debajo del VWAP. |

### Parámetros de las envolventes

| Banda | Significado estadístico (modo Standard Deviation) |
|---|---|
| **1st Standard** | Aproximadamente el 68% de la acción del precio suele caer dentro de 1 desviación estándar. |
| **2nd Standard** | Aproximadamente el 95% de la acción del precio suele caer dentro de 2 desviaciones estándar. |
| **3rd Standard** | Aproximadamente el 99,7% de la acción del precio suele caer dentro de 3 desviaciones estándar. |

### Subgráficos

La línea VWAP y cada línea de envolvente admiten color ajustable, estilo de línea (sólida, punteada o discontinua), grosor y conmutadores de visibilidad: oculte las bandas que no opera para mantener el gráfico legible.

## Consejos y errores comunes

- **Sepa qué VWAP está mirando.** Este es un VWAP continuo y rodante: solo coincide con el VWAP del perfil de volumen diario al final de la sesión. Comparar los dos intradía y asumir que uno está "mal" es la confusión más común con esta herramienta.
- **Los porcentajes asumen condiciones más o menos normales.** En tendencias fuertes, el precio puede mantenerse más allá de la 2.ª banda mucho más tiempo de lo que sugiere la cifra del 95%: trate las estadísticas de las bandas como contexto, no como garantías.
- **Ajuste el Period Mode a su horizonte.** El modo Minutes con un valor corto reacciona rápidamente pero produce una referencia de movimiento rápido; el modo Daily proporciona el ancla estable de estilo institucional.
- **El modo de porcentaje es para instrumentos, no para estadísticas.** Las bandas Price Percentage no se adaptan a la volatilidad: úselas cuando quiera desplazamientos fijos, y el modo Standard Deviation cuando quiera unos ajustados a la volatilidad.

## Artículos relacionados

- [[understanding-vwap]]
- [[bollinger-bands]]
- [[standard-deviation]]
- [[deep-profile]]
- [[different-types-of-input]]
- [[indicator-layout]]