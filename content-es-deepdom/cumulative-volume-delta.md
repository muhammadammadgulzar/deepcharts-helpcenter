---
title: "CVD (delta de volumen acumulado)"
slug: "cumulative-volume-delta"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "2 min read"
description: "El CVD (delta de volumen acumulado) muestra el delta acumulado tick a tick durante un período definido por el usuario, midiendo la diferencia entre el volumen de compras a mercado y ventas a mercado para revelar una presión compradora o vendedora sostenida."
keywords: ["delta de volumen acumulado", "delta de volumen acumulado deepdom", "deepdom", "indicadores"]
source_hash: "d0e55a14305c06f5"
ai_translated: true
source_hash: "d0e55a14305c06f5"
---
El CVD (delta de volumen acumulado) muestra el delta acumulado tick a tick durante un período definido por el usuario, midiendo la diferencia entre el volumen de compras a mercado y ventas a mercado para revelar una presión compradora o vendedora sostenida.

[SCREENSHOT: CVD (delta de volumen acumulado) — vista general (DeepDOM) | dd-es-cumulative-volume-delta-01.png]

## Configuración de uso

Haga clic con el botón derecho en el gráfico y seleccione **Indicators** (Indicadores).

Busque el indicador deseado y añádalo a su espacio de trabajo haciendo clic en el botón "+".

Abra el panel de configuración del indicador, personalice los parámetros según sus preferencias y confirme los cambios haciendo clic en **Save** (Guardar).

[SCREENSHOT: CVD (delta de volumen acumulado) — Configuración de uso (DeepDOM) | dd-es-cumulative-volume-delta-02.png]

## Configuración general

[SCREENSHOT: CVD (delta de volumen acumulado) — Configuración general (DeepDOM) | dd-es-cumulative-volume-delta-03.png]

#### Modo de período y valor

El Modo de período (Period Mode) define el período de referencia para el cálculo del CVD. Puede elegir entre Days, Minutes, Seconds u Order.

El Valor del período (Period Value) establece el parámetro numérico para el modo elegido (por ejemplo, 1 día o 30 minutos).

#### Mostrar volúmenes Bid/Ask

Habilite esta opción para mostrar, además de la línea del CVD, líneas separadas para el volumen ejecutado en el Ask y en el Bid.

## Configuración de trazado (Plot Settings)

[SCREENSHOT: CVD (delta de volumen acumulado) — Configuración de trazado (DeepDOM) | dd-es-cumulative-volume-delta-04.png]

Personalice la apariencia de las líneas de CVD y de volumen:

Establezca los colores para el CVD negativo (color de delta Bid) y el CVD positivo (color de delta Ask).

Elija los colores para los volúmenes ejecutados en el Ask y en el Bid.

Ajuste el grosor de las líneas para mejorar la legibilidad.

## CVD filtrado

[SCREENSHOT: CVD (delta de volumen acumulado) — CVD filtrado (DeepDOM) | dd-es-cumulative-volume-delta-05.png]

#### Habilitar el CVD filtrado

Active el CVD filtrado (Filtered CVD) para aplicar filtros de volumen y, opcionalmente, trazarlo en un eje separado del CVD principal.

Use separate axes (Usar ejes separados) – si está habilitado, dibuja el CVD filtrado utilizando una escala vertical diferente.

Vol. <= filter – aplica un filtro de volumen mínimo.

Vol. >= filter – aplica un filtro de volumen máximo.

Filtered Bid color (Color de Bid filtrado) – color para el CVD filtrado negativo.

Filtered Ask color (Color de Ask filtrado) – color para el CVD filtrado positivo.

Line Zero (Línea cero) – establece el color y el grosor de la línea cero.

Los filtros son útiles para aislar la participación de los actores más grandes. Por ejemplo, aunque el CVD de la sesión sea positivo mientras el precio opera cerca de los mínimos de la sesión, un CVD filtrado con un umbral de volumen más alto puede revelar que los operadores más grandes son vendedores netos.

## Interpretación del CVD en el trading

Confirmación de tendencia: un CVD que marca máximos más altos junto con el precio respalda la idea de un interés comprador genuino; un CVD que diverge (máximos más bajos mientras el precio marca máximos más altos) advierte de un debilitamiento de la participación.

Absorción y reversión: un CVD que empuja con fuerza en una dirección mientras el precio no logra romper niveles clave suele señalar absorción y posibles zonas de reversión.

Combinación con Volumen y Deep Trades: utilice el Volumen para tener contexto de la intensidad de la participación y Deep Trades para ver si las grandes ejecuciones se alinean con la dirección del CVD o la contradicen.