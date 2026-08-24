---
title: "Cómo conectar Interactive Brokers (solo ejecución)"
slug: "connect-interactive-brokers"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "intermediate"
time: "15 min to complete"
description: "Conecte Interactive Brokers a través de la TWS API para la ejecución de operaciones, junto con una fuente de datos real para los gráficos."
keywords: ["Interactive Brokers", "IBKR", "IB", "TWS", "Trader Workstation", "TWS API", "datos agregados", "IBKR solo ejecución", "conectar interactive brokers"]
source_hash: "23e4244de06da50d"
ai_translated: true
source_hash: "23e4244de06da50d"
---
Al terminar, tendrá Interactive Brokers (IBKR) conectado a DeepCharts para colocar operaciones, con una fuente de datos real alimentando sus gráficos. DeepCharts se conecta a IBKR a través de la API de Trader Workstation (TWS), lo que significa que TWS debe estar en ejecución y con la sesión iniciada durante todo el tiempo que use la conexión.

Lo más importante que hay que entender: IBKR entrega datos de mercado **agregados**, no datos por tick. Los datos agregados no pueden construir herramientas de flujo de órdenes precisas: sin footprint, delta ni análisis de volumen. Por lo tanto, IBKR es de **solo ejecución** en DeepCharts. Lo empareja con una fuente de datos real (Rithmic o dxFeed) conectada al mismo tiempo, y sus gráficos leen de esa fuente mientras sus órdenes se enrutan a través de IBKR.

## Antes de empezar

- Una fuente de datos Rithmic o dxFeed ya conectada y funcionando — [[connect-rithmic]] o [[connect-dxfeed]] (o la opción gratuita, [[free-delayed-data-feed]])
- Trader Workstation (TWS) instalado desde el sitio web oficial de Interactive Brokers, con su inicio de sesión de IBKR
- DeepCharts instalado y activado — [[install-deepcharts]]

## Pasos

1. Abra **Trader Workstation (TWS)** e inicie sesión con sus credenciales de Interactive Brokers. Mantenga TWS abierto: DeepCharts no puede conectarse si TWS está cerrado.

2. En TWS, vaya a **Edit → Global Configuration → API → Settings**.

3. Habilite **Enable ActiveX and Socket Clients**. Anote el puerto de socket que se muestra en esta configuración: de forma predeterminada TWS usa 7496 para una sesión en vivo y 7497 para una sesión de papel.

[SCREENSHOT: Ventana Global Configuration de TWS, página API > Settings, con Enable ActiveX and Socket Clients marcado y el campo Socket port visible | dc-es-connect-interactive-brokers-01.png]

4. Configure la IP de confianza para que TWS acepte la conexión local:
   - Desmarque **Allow connections from localhost only**.
   - Haga clic en **Create** y añada la IP `127.0.0.1`.
   - Vuelva a marcar **Allow connections from localhost only**.
   - Haga clic en **Apply**, luego en **Yes** y luego en **OK**.

[SCREENSHOT: Sección Trusted IPs de la configuración API de TWS mostrando 127.0.0.1 añadida a la lista y la casilla Allow connections from localhost only marcada | dc-es-connect-interactive-brokers-02.png]

5. En DeepCharts, haga clic en **Select Connection** → **Feed Settings** y, a continuación, haga clic en **Add Connection**.

6. Complete el formulario de conexión:
   - **Name**: por ejemplo "IBKR Live" o "IBKR Paper".
   - **Feed Source**: seleccione **Interactive Brokers**. [CONFIRM: exact Feed Source label — sources show it as "Interactive Brokers" and as "IBKR (TWS API)"]
   - **Host**: `127.0.0.1` (TWS se ejecuta en la misma máquina).
   - **Port**: 7496 para una sesión de TWS en vivo, 7497 para una sesión de TWS de papel. Debe coincidir con el puerto de socket del paso 3.
   - **Client ID**: cualquier número entero único (por ejemplo 1). Ninguna otra aplicación conectada a TWS puede usar el mismo ID.

[SCREENSHOT: Diálogo Feed Settings de DeepCharts con Feed Source configurado en Interactive Brokers, Host 127.0.0.1, y los campos Port y Client ID rellenos | dc-es-connect-interactive-brokers-03.png]

7. Haga clic en **Save**.

8. En **Select Connection**, conecte la fuente de IBKR **y** su fuente de datos. Ambas deben mostrar un punto verde al mismo tiempo: IBKR para las órdenes, la fuente de datos para los gráficos.

[SCREENSHOT: Menú desplegable Select Connection mostrando la conexión de IBKR y una conexión Rithmic o dxFeed, cada una con un punto de estado verde | dc-es-connect-interactive-brokers-04.png]

9. Abra **Options → Symbol Manage** y configure el Data Feed de cada bolsa hacia su **fuente Rithmic o dxFeed, nunca hacia IBKR**. Si una bolsa está dirigida a IBKR, sus gráficos se construirán con datos agregados y se verán mal. Practique en la maqueta interactiva de abajo: el icono de cadena de una fila alterna su fuente asignada. Consulte [[symbol-manage]].

[WIDGET: symbol-manage-mock]

10. Abra un gráfico y luego abra el **Trading Panel** (parte inferior derecha del gráfico). En el campo **Broker** seleccione **Interactive Brokers** y luego seleccione su cuenta de trading de IBKR. Las órdenes que coloque ahora se enrutan a TWS para su ejecución mientras el gráfico sigue cargando desde su fuente de datos. Consulte [[trading-from-chart]].

[SCREENSHOT: Trading Panel en la parte inferior derecha de un gráfico con el campo Broker configurado en Interactive Brokers y una cuenta seleccionada | dc-es-connect-interactive-brokers-05.png]

### Si aún no tiene una fuente de datos real

Sin una, sus gráficos no serán fiables: los datos agregados de IBKR no sirven para graficar ni para el análisis de flujo de órdenes. Opciones: la fuente gratuita integrada con 15 minutos de retraso ([[free-delayed-data-feed]]), una suscripción de pago a dxFeed ([[buy-data-feed]]) o una fuente Rithmic directa ([[connect-rithmic]]). Conecte primero la fuente de datos y luego añada IBKR junto a ella.

## Verifique que funcionó

- El punto de conexión de IBKR se puso verde en unos 10 segundos, y el punto de su fuente de datos también está verde.
- Los gráficos muestran precios en vivo y en movimiento provenientes de la fuente de datos.
- El Trading Panel lista Interactive Brokers como bróker y muestra su cuenta.

## Si algo salió mal

| Síntoma | Causa probable |
|---|---|
| El punto de IBKR sigue rojo | TWS no está en ejecución o no tiene la sesión iniciada |
| El punto de IBKR sigue rojo y TWS está en ejecución | El socket de la API no está habilitado en la configuración de TWS (paso 3) |
| Punto rojo, la configuración parece correcta | Puerto incorrecto: desajuste entre papel y en vivo entre TWS y DeepCharts |
| Punto rojo, el puerto es correcto | Conflicto de Client ID: otra aplicación está usando el mismo ID; elija un entero diferente |
| Los gráficos se ven mal o poco detallados | Una bolsa está dirigida a IBKR en Symbol Manage: vuelva a dirigirla a su fuente de datos, consulte [[feed-connected-chart-not-moving]] |

¿Sigue atascado? Reúna un [[diagnostic-report]] y consulte [[get-help]].

## Artículos relacionados

- [[compatibility-guide]]
- [[connect-data-feed]]
- [[symbol-manage]]
- [[connect-rithmic]]
- [[connect-dxfeed]]
- [[trading-panel-reference]]