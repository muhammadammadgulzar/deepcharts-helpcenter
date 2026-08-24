---
title: "Cómo configurar el Trade Copier"
slug: "trade-copier"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "advanced"
time: "25 min to complete"
description: "Replique operaciones de una cuenta principal a múltiples cuentas secundarias en tiempo real: modos de copia, resincronización, tiempos y la regla del modo cliente para OCO."
keywords: ["trade copier", "copy trading", "trade copier beta", "cuentas principal e hijas", "replicar operaciones", "OrdersToOrders", "OrdersToMarket", "resincronización", "desincronizado", "multiplicador de contratos", "empresa prop múltiples cuentas"]
source_hash: "067fda07311bbbaf"
ai_translated: true
source_hash: "067fda07311bbbaf"
---
Al terminar tendrá un grupo del Trade Copier replicando cada operación de una cuenta principal (Parent) a una o más cuentas secundarias (Child) en tiempo real: la configuración estándar para traders de empresas prop que ejecutan la misma estrategia en múltiples cuentas financiadas.

El copiador es una función beta con modos de fallo reales (órdenes secundarias sin ejecutar, órdenes a mercado de resincronización, brackets OCO que requieren el modo cliente); esta guía recorre cada una de esas decisiones en orden.

> **Advertencia:** Pruebe siempre un grupo nuevo en una cuenta SIM antes de operar en real. Un copiador mal configurado puede enviar órdenes reales a todas las cuentas secundarias a la vez.

## Antes de empezar

- Todas las cuentas (principal y secundarias) conectadas en DeepCharts — [[connect-data-feed]] y [[manage-feed-connections]]
- Familiaridad con el panel de trading y los tipos de órdenes — [[trading-panel-reference]]
- Una cuenta SIM para la prueba en seco — [[simulation-accounts]]
- Si opera con brackets de stop-loss/take-profit, lea primero la sección de OCO más abajo — [[oco-strategies]]

## Pasos

### Crear el grupo

1. Haga clic en **Trading → Trade Copier - Beta** en la barra principal.

[SCREENSHOT: El menú Trading abierto con la entrada Trade Copier - Beta resaltada | dc-es-trade-copier-01.png]

2. Haga clic en **Add New Group**.

3. Dé al grupo un **Name** (nombre) que reconozca: puede ejecutar varios grupos con configuraciones diferentes al mismo tiempo.

[SCREENSHOT: La ventana del Trade Copier con la configuración Add New Group abierta, el campo Name rellenado y la lista de ajustes visible | dc-es-trade-copier-02.png]

### Elegir el modo de copia

4. Establezca **Copy Mode**, el ajuste más determinante del grupo:

| Modo | Cómo funciona | Compromiso |
|---|---|---|
| **OrdersToOrders** (predeterminado) | Replica sus órdenes de límite a las cuentas secundarias como órdenes de límite | Sin slippage, pero el límite de una cuenta secundaria puede quedar **sin ejecutar** mientras la principal se ejecuta |
| **OrdersToMarket** | Espera a que la orden de la principal se **ejecute** y luego envía órdenes a mercado a las secundarias | Ejecuciones y sincronización garantizadas, pero es posible el slippage |

Elija según lo que más perjudique a su estrategia: una ejecución perdida en la secundaria (OrdersToOrders) o un peor precio en la secundaria (OrdersToMarket).

### Configurar las cuentas secundarias

5. Asigne la cuenta **Parent** (principal) y añada las cuentas **Child** (secundarias) al grupo.

6. Establezca el **Contracts Multiplier** de cada cuenta secundaria: la proporción entre el tamaño de la secundaria y el de la principal (por ejemplo, una secundaria en una cuenta financiada mayor puede operar un múltiplo de la cantidad de la principal).

7. Añada los símbolos concretos que el grupo debe copiar: los símbolos se configuran por grupo.

[SCREENSHOT: La configuración del grupo mostrando la cuenta principal, las filas de cuentas secundarias con sus valores de Contracts Multiplier y la lista de símbolos del grupo | dc-es-trade-copier-03.png]

### Establecer los tiempos y el comportamiento de recuperación

8. Revise los ajustes de tiempo:

| Ajuste | Predeterminado | Qué hace |
|---|---|---|
| **Copy Delay** | 5 ms | Pausa antes de replicar a las secundarias |
| **Synchronization Timeout** | 15 s | Cuánto tiempo pueden diferir las posiciones antes de que el grupo se considere fuera de sincronización. Un valor demasiado bajo provoca **falsas alertas de desincronización** por retrasos normales de ejecución |
| **Resynchronization Attempt Delay** | 20 s | Espera entre intentos automáticos de resincronización |

9. Establezca **Resync Mode**: lo que hace el copiador cuando la principal y las secundarias se desvían:

| Modo | Comportamiento |
|---|---|
| **None** | Sin acción automática: usted corrige los desequilibrios manualmente |
| **FullMarketAtBestPrice** (predeterminado) | Envía automáticamente las órdenes que sean necesarias para corregir el desequilibrio |
| **CloseOnlyAtBestPrice** | Solo cierra posiciones secundarias excedentes; nunca fuerza la apertura de nuevas |

> **Advertencia:** La resincronización automática puede enviar órdenes a mercado no deseadas a las cuentas secundarias. Supervise el grupo manualmente siempre que se ejecute una resincronización, especialmente en las primeras sesiones.

10. Establezca **Expiration Logic**: lo que ocurre con una orden secundaria aún pendiente cuando la principal ya se ha ejecutado:
    - **None** (predeterminado) — la orden secundaria sigue activa.
    - **ToMarketAfterMs** — convierte la orden secundaria pendiente en una orden a mercado tras los milisegundos establecidos.
    - **CancelAfterMs** — cancela la orden secundaria pendiente tras los milisegundos establecidos.

11. Deje los ajustes de respaldo de OCO en sus valores predeterminados salvo que soporte le indique lo contrario: **Child Brackets Tick Margin** (25), **OCO Bracket Fallback Insert** (15 s), **OCO Order Cancel Fallback** (60 s), **OCO Trailing Stop Fallback** (3 s).

### Si usa brackets OCO (stop loss / take profit)

Algunos brókeres no admiten OCO del lado del servidor junto con el Trade Copier. En el bloque OCO del panel de trading, cambie el botón de opción de **Server** a **Client** para que los brackets se repliquen a las cuentas secundarias.

> **Advertencia:** Rithmic no permite OCO del lado del servidor junto con el copy trading: Rithmic + Trade Copier siempre significa OCO del lado **Client** (cliente). El OCO del lado del cliente solo se aplica mientras DeepCharts permanece **abierto y conectado**: cierre la plataforma o pierda la red y sus stops y objetivos pendientes no se ejecutarán. (Una única cuenta de Rithmic sin el copiador puede usar OCO del lado del servidor con normalidad.) Consulte [[oco-strategies]] para la explicación completa de Server frente a Client.

### Iniciar el grupo

12. Haga clic en **Start** y acepte el aviso legal.

13. Compruebe el estado de la principal: muestra **Ready** cuando su fuente está conectada, o **Waiting Connection** si no lo está.

[SCREENSHOT: La ventana del Trade Copier con un grupo en ejecución, el estado de la principal mostrando Ready y las cuentas secundarias listadas con su estado de sincronización | dc-es-trade-copier-04.png]

> **Consejo:** La configuración inicial sugerida por la documentación oficial es: Copy Mode **OrdersToOrders**, Copy Delay **0 ms**, Resync Mode **None**, Expiration Logic **None**, Synchronization Timeout **15 s**, Resynchronization Attempt Delay **20 s** — ajustes conservadores sin órdenes automáticas de resincronización mientras aprende a usar la herramienta.

## Verifique que funcionó

Con el grupo iniciado y la principal mostrando **Ready**, coloque una pequeña operación de prueba en la principal (en SIM). En instantes la misma orden aparece en cada secundaria, dimensionada por su Contracts Multiplier, y cerrar la posición de la principal cierra las de las secundarias. Compruebe la [[orders-window|Ventana de órdenes]] en una conexión secundaria para confirmar las órdenes replicadas, y confirme que no aparece ninguna alerta de desincronización.

## Si algo salió mal

- **Una secundaria perdió una operación / las posiciones no coinciden** — modo OrdersToOrders: el límite de la secundaria quedó sin ejecutar. Considere **OrdersToMarket** (aceptando el slippage) o una **Expiration Logic** de **ToMarketAfterMs**. Un Resync Mode de **FullMarketAtBestPrice** corrige los desequilibrios automáticamente.
- **El copiador sigue marcando desincronización pero las operaciones parecen correctas** — el **Synchronization Timeout** es demasiado agresivo; auméntelo. Los retrasos normales de ejecución disparan falsas alertas con valores bajos.
- **Los brackets/OCO no aparecen en las cuentas secundarias** — el bróker no admite OCO del lado del servidor con el copiador; cambie el panel de trading al modo **Client** (y mantenga la plataforma abierta y en línea).
- **Órdenes a mercado inesperadas en las secundarias** — se activó una resincronización automática. Revise el **Resync Mode**; use **CloseOnlyAtBestPrice** o **None** si desea menos intervención automática.
- **La principal se queda en Waiting Connection** — la fuente de la principal no está conectada; consulte [[manage-feed-connections]].

Gestión del día a día: cada grupo puede **detenerse (Stopped)**, reabrirse mediante **Settings** o **eliminarse (Removed)**; las cuentas secundarias individuales pueden excluirse de la sincronización sin detener todo el grupo.

## Artículos relacionados

- [[oco-strategies]]
- [[trading-panel-reference]]
- [[orders-window]]
- [[simulation-accounts]]
- [[manage-feed-connections]]
- [[risk-manager]]