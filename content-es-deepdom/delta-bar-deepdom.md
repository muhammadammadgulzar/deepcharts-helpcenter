---
title: "Delta Bar"
slug: "delta-bar-deepdom"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "3 min read"
description: "El indicador Delta Bar en DeepDom muestra el delta (la diferencia entre el volumen de compras a mercado y ventas a mercado) como barras trazadas debajo del gráfico, ayudándole a ver dónde dominaron los compradores o vendedores agresivos en cada período."
keywords: ["delta bar", "delta bar deepdom", "deepdom", "indicadores"]
source_hash: "f0a2fae2d9512fd5"
ai_translated: true
source_hash: "f0a2fae2d9512fd5"
---
El indicador Delta Bar en DeepDom muestra el delta (la diferencia entre el volumen de compras a mercado y ventas a mercado) como barras trazadas debajo del gráfico, ayudándole a ver dónde dominaron los compradores o vendedores agresivos en cada período.

[SCREENSHOT: Delta Bar — vista general (DeepDOM) | dd-es-delta-bar-deepdom-01.png]

## Configuración de uso

Haga clic con el botón derecho en el gráfico y seleccione **Indicators** (Indicadores).

Busque el indicador deseado y añádalo a su espacio de trabajo haciendo clic en el botón "+".

Abra el panel de configuración del indicador, personalice los parámetros según sus preferencias y confirme los cambios haciendo clic en **Save** (Guardar).

[SCREENSHOT: Delta Bar — Configuración de uso (DeepDOM) | dd-es-delta-bar-deepdom-02.png]

## Configuración general

[SCREENSHOT: Delta Bar — Configuración general (DeepDOM) | dd-es-delta-bar-deepdom-03.png]

#### Datos de entrada

[SCREENSHOT: Delta Bar — Datos de entrada (DeepDOM) | dd-es-delta-bar-deepdom-04.png]

Elija qué entrada usar para el cálculo del delta:

Volume – volumen total negociado en cada nivel de precio; útil para medir la intensidad de las operaciones y las zonas de precio clave.

Aggregate Trades – agrupa las operaciones ejecutadas al mismo precio dentro de una ventana de tiempo corta para mostrar el volumen agregado vinculado a órdenes más grandes.

Trades – cuenta el número de transacciones en cada nivel de precio.

Order – utiliza datos de órdenes (cantidades de compra y venta) para evaluar la presión del flujo de órdenes.

#### Agrupamiento de barras

[SCREENSHOT: Delta Bar — Agrupamiento de barras (DeepDOM) | dd-es-delta-bar-deepdom-05.png]

Define cuántas barras se agrupan en cada Delta Bar. Un valor más bajo proporciona datos más granulares, mientras que un valor más alto suaviza la serie.

#### Filtros

[SCREENSHOT: Delta Bar — Filtros (DeepDOM) | dd-es-delta-bar-deepdom-06.png]

Filter min – aplica un umbral mínimo a la base de datos elegida, ocultando las barras por debajo de ese valor.

Filter max – aplica un umbral máximo. Dejarlo en 0 desactiva el filtro máximo.

### Configuración de trazado (Plot Settings)

[SCREENSHOT: Delta Bar — Configuración de trazado (DeepDOM) | dd-es-delta-bar-deepdom-07.png]

Bid Color - Selecciona el color del Bid

Ask Color - Selecciona el color del Ask

## Lectura de patrones con Delta Bar

#### 1. Confirmación de tendencia

En una tendencia alcista saludable normalmente verá secuencias de Delta Bars positivas alineadas con un precio que marca máximos más altos. Los retrocesos dentro de la tendencia suelen mostrar un delta menor o incluso ligeramente negativo, pero deberían ser superficiales en comparación con las barras positivas dominantes.

Si el precio sigue empujando al alza mientras el delta positivo se debilita o se vuelve negativo, puede señalar ventas ocultas o una participación reducida, advirtiendo de una posible reversión.

#### 2. Absorción en niveles

Cuando el precio prueba un máximo anterior y las Delta Bars muestran fuertes picos positivos pero el precio no logra romper y en su lugar rota a la baja, esto suele significar que vendedores de límite están absorbiendo a los compradores agresivos en ese nivel. La misma lógica se aplica a los mínimos con un delta negativo fuerte que no logra extenderse.

#### 3. Agotamiento y clímax

Delta Bars aisladas y muy grandes tras un movimiento prolongado marcan con frecuencia una capitulación: todos los operadores tardíos entran justo cuando los profesionales toman el lado contrario. Observar lo que ocurre en las siguientes barras le ayuda a decidir si operar en contra de esos extremos o esperar confirmación.

## Buenas prácticas y errores comunes

No opere el delta de forma aislada: ánclelo siempre a la estructura (soporte/resistencia, máximo/mínimo del día, VWAP).

Evite el filtrado excesivo: valores muy altos de *Filter min* pueden ocultar señales tempranas de iniciativa que más tarde se convierten en movimientos importantes.

Vigile las particularidades del producto: los contratos Micro y los productos poco líquidos requieren umbrales más pequeños que los futuros de índices muy líquidos.