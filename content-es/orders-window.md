---
title: "Ventana de órdenes"
slug: "orders-window"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "3 min read"
description: "Vea, filtre y audite cada orden de una conexión de bróker, y detecte órdenes activas olvidadas antes de que termine la sesión."
keywords: ["ventana de órdenes", "mostrar órdenes", "lista de órdenes", "órdenes pendientes", "órdenes activas", "órdenes enviadas", "órdenes sin ejecutar", "historial de órdenes", "estado de la orden"]
source_hash: "fc892badc5b861d2"
ai_translated: true
source_hash: "fc892badc5b861d2"
---
La Ventana de órdenes es la lista maestra de cada orden que DeepCharts conoce en una conexión de bróker: las que siguen activas en el mercado, las que se ejecutaron y las que usted canceló. Cuando necesite responder "¿todavía tengo una orden ahí fuera?", esta es la ventana que lo responde.

Se abre desde la barra principal: **Trading → Show Orders** (Mostrar órdenes).

## Qué es

Una tabla única de sus órdenes por bróker, con filtros por estado de la orden. Mientras que el panel de trading muestra lo que está ocurriendo en un símbolo ahora mismo, la Ventana de órdenes muestra todo lo que ha hecho la conexión, lo que la convierte en el lugar para auditar ejecuciones, revisar cancelaciones y, sobre todo, encontrar órdenes activas que pueda haber olvidado.

[SCREENSHOT: La Ventana de órdenes abierta mediante Trading → Show Orders, mostrando el menú desplegable Broker en la parte superior y una lista de órdenes poblada con una mezcla de órdenes ejecutadas y enviadas | dc-es-orders-window-01.png]

## Cuándo usarla

- **Al final de la sesión**: confirme que ninguna orden activa sigue descansando en el mercado antes de retirarse.
- **Tras una ejecución que no esperaba**: compruebe cuándo y en qué estado se ejecutó una orden.
- **Cuando una orden de límite o stop parece haber desaparecido**: puede que siga activa, o puede que haya sido cancelada; los filtros le dicen cuál de las dos.
- **Cuando las posiciones y las órdenes no coinciden con su imagen mental**: concilie contra la lista real en lugar de adivinar.

## Inicio rápido

1. Haga clic en **Trading → Show Orders** en la barra principal.
2. Seleccione la conexión que desea inspeccionar en el menú desplegable **Broker**.
3. Elija una vista de filtro: **Placed** (Colocadas), **Executed** (Ejecutadas), **Cancelled** (Canceladas) o **All** (Todas).
4. Para ver solo las órdenes que siguen activas y sin ejecutar, vaya a la sección **Status** (Estado) y elija **Submitted** (Enviada).

[SCREENSHOT: La Ventana de órdenes con el filtro Status establecido en Submitted, mostrando en la lista solo órdenes activas sin ejecutar | dc-es-orders-window-02.png]

## Cómo leerla

El estado es la columna clave:

| Estado | Significado |
|---|---|
| **Submitted** | La orden está activa y sin ejecutar: una orden de límite o stop que sigue descansando en el mercado. Puede ejecutarse en cualquier momento. |
| **Executed** | La orden se ejecutó. |
| **Cancelled** | La orden fue retirada (por usted, por un emparejamiento OCO o por la plataforma) y ya no puede ejecutarse. |

[CONFIRM: full column list of the Orders window table (time, symbol, side, quantity, price, etc.)]

> **Consejo:** Haga que la comprobación de **Submitted** forme parte de su rutina de cierre. Un stop o límite activo olvidado puede ejecutarse horas más tarde en un mercado sin liquidez: la Ventana de órdenes filtrada por Submitted es la forma más rápida de demostrar que está verdaderamente plano y sin órdenes.

## Referencia de configuración

La ventana no tiene diálogo de configuración; sus controles son los filtros de la parte superior.

| Control | Qué hace |
|---|---|
| **Broker** | Selecciona de qué conexión se listan las órdenes. Las órdenes de otras conexiones no se muestran: cambie aquí si las órdenes parecen "faltar". |
| **Placed** | Muestra las órdenes que fueron enviadas al mercado. |
| **Executed** | Muestra solo las órdenes ejecutadas. |
| **Cancelled** | Muestra solo las órdenes canceladas. |
| **All** | Muestra todas las órdenes independientemente de su estado. |
| **Status: Submitted** | Reduce la lista a las órdenes activas y sin ejecutar. |

## Consejos y errores comunes

- **"Mi orden no está en la lista"**: revise primero el menú desplegable **Broker**. La ventana muestra una conexión a la vez.
- **Cancelar desde aquí frente al panel**: el botón **Cancel** del panel de trading cancela todas las órdenes activas únicamente para el símbolo seleccionado en el panel. Use la Ventana de órdenes para ver qué está activo entre símbolos antes de confiar en él. Vea [[trading-panel-reference]] para el alcance exacto de cada botón.
- **Submitted no es un estado problemático**: una orden de límite en reposo lejos del precio está en Submitted por diseño. La cuestión es si usted *pretendía* que siguiera activa.
- **Pares OCO**: cuando un lado de una OCO se ejecuta, el otro se cancela automáticamente; verá una entrada Executed y una Cancelled. Vea [[oco-strategies]].

¿No está seguro de qué tocan realmente los botones de cancelación del panel? Pase el cursor sobre ellos en el panel en vivo de abajo y luego compruebe el resultado aquí con el filtro **Submitted**.

[WIDGET: trading-panel-mock]

## Artículos relacionados

- [[trading-panel-reference]]
- [[trading-from-chart]]
- [[oco-strategies]]
- [[portfolio-wallet]]
- [[performance-analysis]]