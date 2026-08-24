---
title: "Cartera (Wallet)"
slug: "portfolio-wallet"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Supervise cada bróker conectado, el saldo de cada cuenta y el P/L en una sola ventana, y pause o cierre cuentas desde las mismas tarjetas."
keywords: ["cartera", "wallet", "mostrar cartera", "saldo de cuenta", "p/l diario", "p/l abierto", "resumen de cuentas", "pausar cuenta", "cerrar cuenta", "cerrar todas las posiciones"]
source_hash: "59fd538368f1f1cf"
ai_translated: true
source_hash: "59fd538368f1f1cf"
---
La ventana Cartera (Portfolio, a veces llamada Wallet) es su panel de cuentas: cada bróker conectado, cada cuenta bajo él, y sus saldos y ganancias/pérdidas, todo actualizándose en tiempo real. Es también la superficie de control para acciones a nivel de cuenta: pausar el trading en una cuenta o cerrar todo con un clic, y es donde se configuran las reglas del [[risk-manager|Gestor de riesgos]].

Se abre desde la barra principal: **Trading → Show Portfolio**.

## Qué es

Una ventana que responde a "¿cómo van todas mis cuentas ahora mismo?". Cada conexión de fuente de datos (SIM, Rithmic, dxFeed, etc.) aparece como su propia tarjeta, con las cuentas individuales de esa conexión listadas dentro. Los saldos y el P/L se actualizan en vivo en todas las subcuentas, de modo que los operadores prop que gestionan varias cuentas pueden vigilarlas una junto a otra sin cambiar de ventana.

[SCREENSHOT: La ventana Cartera abierta mediante Trading → Show Portfolio, mostrando tarjetas de conexión para SIM y una fuente en vivo, cada una con cifras de Daily Profit y Open Profit y filas de cuentas debajo | dc-es-portfolio-wallet-01.png]

## Cuándo usarla

- **Al inicio del día**: confirme que todas las conexiones están activas y que los saldos son correctos antes de operar.
- **Mientras opera varias cuentas**: vigile el P/L diario y el P/L abierto de todas ellas de un vistazo.
- **Cierre de emergencia**: el botón **Close** a nivel de conexión cierra a la vez todas las posiciones de esa conexión.
- **Imponer disciplina**: el botón **Pause** bloquea las cuentas durante un tiempo determinado; las reglas automatizadas completas están en el [[risk-manager|Gestor de riesgos]].

## Inicio rápido

1. Haga clic en **Trading → Show Portfolio** en la barra principal.
2. Busque la tarjeta de la conexión que le interese: el nombre de la conexión está en la esquina superior izquierda de la tarjeta.
3. Lea los totales de la conexión: **Daily Profit** (PnL diario total de todas las cuentas de la conexión) y **Open Profit** (PnL no realizado actual).
4. Despliegue las cuentas individuales para ver por cuenta el **Balance**, el **Daily PnL** y el **Open PnL**.

## Cómo leerla

La ventana tiene dos niveles:

**Tarjetas de conexión**: una por conexión de fuente/bróker. El encabezado muestra el nombre de la conexión; los totales de la tarjeta agregan todas las cuentas bajo ella. Los controles del lado derecho de la tarjeta actúan sobre *todas* las cuentas de esa conexión.

**Tarjetas de cuenta**: una por cuenta dentro de una conexión. Cada una muestra **Balance**, **Daily PnL** y **Open PnL**, además de sus propios tres botones: **Eye** (ojo, abre la vista detallada con posiciones e información de riesgo de la cuenta), **Pause** (bloquea solo esa cuenta) y **Close** (cierra solo esa cuenta).

[SCREENSHOT: Una sola tarjeta de cuenta ampliada, con los botones Eye, Pause y Close visibles junto a las cifras de Balance, Daily PnL y Open PnL | dc-es-portfolio-wallet-02.png]

El resumen también lista **Connected Brokers**, **Sales**, **Daily P/L** y **Open P/L** por cuenta. [CONFIRM: what exactly the Sales field reports]

Cuando una cuenta está en pausa o se activa una regla del Gestor de riesgos, su estado muestra **Lockout** con un temporizador de cuenta atrás hasta que el trading se reanuda.

## Referencia de configuración

| Control | Nivel | Qué hace |
|---|---|---|
| **Pause** | Conexión | Bloquea todas las cuentas de la conexión durante **1**, **10**, **30** o **60 minutos**, o la **sesión completa**. Las cuentas bloqueadas muestran el estado **Lockout** con una cuenta atrás. |
| **Close** | Conexión | Cierra instantáneamente todas las posiciones abiertas de todas las cuentas de esa conexión. |
| **Eye** | Cuenta | Abre la vista detallada de riesgo de esa cuenta: posiciones e información de riesgo de la cuenta. |
| **Pause** | Cuenta | Bloquea solo esa cuenta (mismas opciones de duración). |
| **Close** | Cuenta | Cierra solo las posiciones abiertas de esa cuenta. |
| **Settings** | Conexión o cuenta | Abre las reglas del Gestor de riesgos (gestión monetaria) para ese nivel; consulte [[risk-manager]]. |

> **Advertencia:** **Close** envía órdenes de cierre reales de inmediato: todas las posiciones abiertas en el ámbito elegido se cierran a mercado. La documentación actual no describe ningún paso de confirmación adicional, así que trátelo como un interruptor de emergencia real, no como una vista previa.

## Consejos y errores comunes

- **Pause es un bloqueo, no un botón de pausa del mercado**: mientras está bloqueada, la cuenta no puede colocar operaciones hasta que termine la cuenta atrás. Si el bloqueo lo causó una regla del Gestor de riesgos, el desbloqueo anticipado solo es posible a través del soporte de DeepCharts; consulte [[risk-manager]].
- **Nivel de conexión frente a nivel de cuenta**: el mismo nombre de botón actúa sobre ámbitos muy diferentes según la tarjeta en la que esté. Compruebe en qué tarjeta se encuentra antes de hacer clic en **Close**.
- **El P/L parece congelado**: la Cartera se actualiza desde la conexión en vivo. Si nada se mueve, verifique que la fuente esté conectada en [[manage-feed-connections]].
- **Probar los botones con seguridad**: use primero una cuenta SIM; consulte [[simulation-accounts]].

## Artículos relacionados

- [[risk-manager]]
- [[orders-window]]
- [[trading-panel-reference]]
- [[performance-analysis]]
- [[simulation-accounts]]
- [[manage-feed-connections]]