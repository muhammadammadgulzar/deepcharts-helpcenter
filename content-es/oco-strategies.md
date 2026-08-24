---
title: "Estrategias OCO (One-Cancels-the-Other)"
slug: "oco-strategies"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "15 min to complete"
description: "Adjunte brackets automáticos de stop-loss y take-profit a sus entradas con los modos SL/TP y Multi OCO, y elija entre gestión del lado del servidor o del cliente."
keywords: ["oco", "one cancels the other", "orden cancela orden", "órdenes bracket", "stop loss take profit", "sl tp", "modo multi", "oco servidor cliente", "move be", "vincular órdenes pendientes", "exclamación roja"]
source_hash: "a6296f498e8414e4"
ai_translated: true
source_hash: "a6296f498e8414e4"
---
Al terminar tendrá brackets automáticos de stop-loss y take-profit adjuntos a cada entrada, y sabrá si viven en el servidor del bróker o dentro de su plataforma: una distinción que decide si su protección sobrevive a un fallo del sistema.

Una estrategia OCO (One-Cancels-the-Other, una cancela a la otra) adjunta dos órdenes de salida a una posición: una orden de límite que toma beneficios y una orden stop que limita la pérdida. Cuando una de las dos se ejecuta, la otra se cancela automáticamente: nunca puede quedarse con una salida huérfana trabajando contra una posición que ya no existe.

Los controles del bracket viven en el panel de trading del gráfico: familiarícese con él a continuación; pase el cursor sobre el control OCO y los botones de salida para ver cómo interactúan.

[WIDGET: trading-panel-mock]

## Antes de empezar

- El trading desde el gráfico armado y el panel de trading abierto: [[trading-from-chart]]
- Conoce los campos y botones del panel: [[trading-panel-reference]]
- Una cuenta SIM para probar el comportamiento de los brackets sin riesgo: [[simulation-accounts]]
- Si copia operaciones entre cuentas, lea primero la advertencia sobre Rithmic más abajo: [[trade-copier]]

## Pasos

1. Abra el **Trading Panel** en su gráfico.

2. Habilite la casilla **OCO Strategy**. El bloque OCO debajo se activa.

[SCREENSHOT: Panel de trading con la casilla OCO Strategy habilitada, mostrando el menú desplegable Mode, los campos de ticks SL y TP, los interruptores BE y Trail, y los botones de opción Server/Client | dc-es-oco-strategies-01.png]

3. Elija un modo en el menú desplegable **Mode**. **SL/TP** cubre salidas simples de un solo contrato; **MULTI** construye estrategias multibracket con nombre para salir escalonadamente. Los pasos siguientes cubren SL/TP; el flujo Multi está en la rama más abajo.

4. En modo **SL/TP**, establezca sus valores de **SL** (stop loss) y **TP** (precio objetivo): cada uno puede definirse en **ticks o dinero**, y cada uno se habilita individualmente. Opcionalmente habilite:
   - **BE**: mueve el stop a punto de equilibrio automáticamente (ticks o dinero).
   - **Trail**: hace que el stop siga al precio, con campos de cantidad de arrastre y desplazamiento debajo.

5. Elija dónde se gestiona el bracket con los botones de opción **Server / Client**:
   - **Server**: el bracket vive en la infraestructura del proveedor de la fuente de datos. Sigue funcionando si su PC, su red o su plataforma fallan. El OCO del lado del servidor es compatible con Rithmic y dxFeed.
   - **Client**: el bracket es gestionado localmente por DeepCharts. La plataforma debe permanecer abierta y conectada, o el OCO no es efectivo. El modo Client existe porque algunos proveedores de fuente no ofrecen OCO del lado del servidor.

> **Advertencia:** Rithmic no permite el OCO del lado del servidor junto con la copia de operaciones. Si ejecuta el [[trade-copier]] en Rithmic, seleccione **Client**, y mantenga DeepCharts abierto y en línea, o sus stops y objetivos no se dispararán. Una única cuenta de Rithmic sin el copiador puede usar **Server** con normalidad.

6. Coloque su orden de entrada como de costumbre (la cuadrícula de botones o la [[dom-trading-chart|escalera DOM en el gráfico]]). El stop y el objetivo se adjuntan automáticamente; cuando uno se ejecuta, el otro se cancela.

[SCREENSHOT: Gráfico mostrando una entrada ejecutada con su bracket OCO adjunto: orden stop debajo y límite objetivo por encima del precio de la posición | dc-es-oco-strategies-02.png]

### Si sale escalonadamente con varios contratos (modo Multi)

1. Ponga **Mode** en **MULTI** y haga clic en el **icono de engranaje**. Se abre el editor **Oco Strategy**.
2. Haga clic en **New Strategy** y asigne un nombre a la estrategia.
3. Añada los brackets uno a uno: elija **Stop** o **Target**, establezca la cantidad y el valor en **Ticks** o **Money**, y luego haga clic en **Add bracket**. Repita hasta que cada contrato tenga una salida.
4. Habilite **Move BE** en un objetivo si quiere que el stop restante se mueva a punto de equilibrio una vez que ese objetivo se ejecute.
5. Haga clic en **Save**. Las estrategias guardadas aparecen en el menú desplegable del panel siempre que el modo MULTI esté activo.

Ejemplo resuelto — tres contratos: un Stop a 12 ticks cubriendo la posición completa, tres Targets a 8, 12 y 20 ticks (un contrato cada uno), con el stop moviéndose a punto de equilibrio después de que se ejecute el Target 2.

[SCREENSHOT: El editor Oco Strategy mostrando una estrategia con nombre de tres contratos con un bracket Stop a 12 ticks y tres brackets Target a 8, 12 y 20 ticks, la opción Move BE activada en el segundo objetivo, y los botones Add bracket y Save | dc-es-oco-strategies-03.png]

> **Nota:** Una **marca de verificación verde** junto a la estrategia seleccionada significa que su cantidad total coincide con el campo **Qty** del panel. Un **(!) rojo** significa que difieren: la ejecución queda bloqueada hasta que cambie el Qty del panel o edite la estrategia para que coincidan.

### Si su posición ya está abierta sin bracket (Quick OCO)

Las posiciones abiertas muestran cuadrados interactivos de **Stop Loss (SL)** y **Target Price (TP)**. Haga clic izquierdo en cualquiera de los cuadrados para crear esa orden de salida para la posición; las dos salidas pueden entonces vincularse en un par OCO.

### Si colocó un TP y un SL por separado y quiere vincularlos

Haga clic en **Link pending orders** en la parte inferior del bloque OCO. Se abre una ventana donde selecciona las dos órdenes pendientes — su take-profit y su stop — y las vincula retroactivamente en un par OCO, de modo que una cancela a la otra.

[SCREENSHOT: La ventana Link pending orders listando las órdenes pendientes de la cuenta con un límite de take-profit y una orden stop seleccionados para vincular | dc-es-oco-strategies-04.png]

## Verifique que funcionó

Entre en una operación SIM de un contrato con el modo SL/TP activo. Aparecen inmediatamente dos órdenes en curso — un stop y un límite — visibles en el gráfico y en la [[orders-window]]. Haga la prueba de cancelación: cierre la posición con **Flat** o deje que una salida se ejecute, y confirme que la otra orden desaparece por sí sola. Para el modo Multi, confirme que la marca de verificación verde aparece antes de entrar.

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| (!) rojo junto a Mode, las órdenes no se ejecutan | La cantidad total de la estrategia MULTI no es igual al **Qty** del panel: iguálelas (cambie el Qty o edite la estrategia) |
| El stop/objetivo desapareció tras cerrar la plataforma | El bracket era del lado del **Client**: solo el OCO del lado del servidor sobrevive con la plataforma cerrada; cambie a **Server** si su proveedor lo admite |
| Los brackets no aparecen en las cuentas copiadas (hijas) | Su bróker no admite OCO del lado del servidor con el copiador: cambie al modo **Client** y mantenga la plataforma abierta; vea [[trade-copier]] |
| Ninguna entrada nueva tiene bracket adjunto | La casilla **OCO Strategy** no estaba habilitada antes de la entrada: use los cuadrados Quick OCO o **Link pending orders** para proteger la posición abierta ahora |
| Una salida se ejecutó pero la otra siguió en curso | Las dos órdenes se colocaron de forma independiente y nunca se vincularon: use **Link pending orders** para los pares colocados manualmente |

## Artículos relacionados

- [[trading-panel-reference]]
- [[trading-from-chart]]
- [[dom-trading-chart]]
- [[orders-window]]
- [[trade-copier]]
- [[risk-manager]]