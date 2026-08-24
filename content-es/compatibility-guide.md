---
title: "Brókers, empresas prop y fuentes de datos compatibles"
slug: "compatibility-guide"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "reference"
difficulty: "beginner"
time: "7 min read"
description: "Todos los brókers, empresas prop y fuentes de datos que se conectan a DeepCharts, con los valores exactos de Feed Source y Server para cada uno."
keywords: ["compatibilidad", "brókers compatibles", "empresas prop compatibles", "es compatible mi empresa prop", "apex", "topstep", "tradovate", "rithmic paper trading", "dxfeed prop", "lista de servidores", "qué fuente", "ninjatrader"]
source_hash: "7d9f341a746fbbfa"
ai_translated: true
source_hash: "7d9f341a746fbbfa"
---
DeepCharts se conecta a los datos de mercado en vivo a través de un pequeño conjunto de tecnologías de fuente — Rithmic, dxFeed, CQG y la API TWS de Interactive Brokers — pero decenas de brókers y empresas prop emiten cuentas sobre esas tecnologías. Esta página es la lista maestra: quién es compatible, qué **Feed Source** elegir y qué valor de **Server** corresponde a cada proveedor.

Si su proveedor aparece aquí, la conexión toma unos minutos en [[connect-data-feed|Feed Settings]]. Si está en la tabla de no compatibles al final, DeepCharts no puede conectarse a él directamente, pero aún puede analizar gráficos con una fuente compatible y ejecutar operaciones en la plataforma propia del proveedor.

## Qué es

Una matriz de compatibilidad. Responde tres preguntas antes de tocar cualquier configuración: "¿Puede mi cuenta conectarse a DeepCharts?", "¿Qué Feed Source selecciono?" y "¿Qué va exactamente en el campo Server?". Las respuestas equivocadas a las dos últimas son las causas más comunes de una conexión que permanece en rojo, así que trate las tablas siguientes como la referencia oficial.

## Cuándo usarla

- Está eligiendo un bróker o una empresa prop y quiere saber si funcionará con DeepCharts antes de pagar.
- Ya tiene una cuenta y necesita los valores exactos de **Feed Source** y **Server** para [[connect-data-feed|Feed Settings]].
- Su punto de conexión permanece en rojo y sospecha de un valor de Server incorrecto; consulte [[fix-bad-server]].
- Alguien le dijo que una plataforma "funciona con todo" y quiere comprobarlo antes de comprar.

## Inicio rápido

1. Busque su proveedor en las tablas bajo la referencia de configuración de abajo.
2. Anote su valor de **Feed Source** y, donde exista, su valor de **Server**.
3. Firme el acuerdo de datos de mercado para ese tipo de cuenta; consulte [[sign-market-data-agreement]].
4. Introduzca los valores en **Select Connection → Feed Settings**; consulte [[connect-data-feed]].
5. Enrute sus bolsas a la nueva fuente en **Options → Symbol Manage**; consulte [[symbol-manage]].

Pruebe la maqueta interactiva de Feed Settings a continuación: abra el menú desplegable Feed Source y observe cómo cambian los campos para cada fuente.

[WIDGET: feed-navigator]

## Cómo leerla

- **Feed Source** es el valor del menú desplegable en Feed Settings. Tenga en cuenta que Rithmic aparece como **Rithmic RAPI** y **Rithmic Wss - beta**: no hay una entrada "Rithmic" a secas. Elija **Rithmic RAPI**; es la fuente recomendada.
- **Server** es un campo aparte que solo aparece para algunas fuentes. Debe coincidir con la tabla exactamente. Cuando Feed Source es **dxFeed Prop**, no aparece ningún campo Server: no lo busque.
- **Acuerdo** le indica dónde se firma el acuerdo de datos de mercado para ese tipo de cuenta. Toda fuente en vivo requiere uno antes de conectarse; consulte [[sign-market-data-agreement]].

## Referencia de configuración

### Empresas prop: cuentas Rithmic

Todas las cuentas Rithmic de empresas prop usan **Feed Source = Rithmic RAPI**. Las cuentas de evaluación y financiadas (Evaluation y Funded) se conectan de la misma manera. El acuerdo se firma dentro de R Trader Pro para toda cuenta Rithmic.

| Empresa prop | Valor de Server |
|---|---|
| Apex Trader Funding | Apex |
| 4PropTrader | 4PropTrader |
| 10X Futures | 10XFutures |
| Bulenox | Bulenox |
| DayTraders.com | DayTraders.com |
| Earn2Trade | Earn2Trade |
| FundedFuturesNetwork | FundedFuturesNetwork |
| Legends Trading | LegendsTrading |
| Lucid Trading | LucidTrading |
| MES Capital | MES Capital |
| PropShopTrader | PropShopTrader |
| The Trading Pit | TheTradingPit |
| Thrive Trading | ThriveTrading |
| TradeFundrr | TradeFundrr |
| Tradeify | Tradeify [CONFIRM: exact Tradeify server spelling in the dropdown] |
| tradesea | tradesea (en minúsculas en el menú desplegable) |
| TakeProfitTrader | Rithmic Paper Trading |
| OneUpTrader | Rithmic Paper Trading |

> **Nota:** Si su empresa prop de Rithmic no está en esta tabla y su nombre no aparece en el menú desplegable de Server, seleccione **Rithmic Paper Trading**: ese es el servidor predeterminado de Rithmic para cuentas de solo fuente de datos y cuentas prop más pequeñas. El mismo valor se usa en R Trader Pro. Consulte [[connect-rithmic-prop-firm]] para el recorrido completo, o [[connect-apex]] para la guía específica de Apex.

### Empresas prop: cuentas dxFeed

Estas empresas emiten credenciales de dxFeed. Use **Feed Source = dxFeed Prop**; esta fuente no tiene campo Server. El acuerdo se firma en el panel propio de la empresa prop (o mediante su enlace por correo), nunca en R Trader Pro. Recorrido completo: [[connect-dxfeed-prop-firm]].

| Empresa prop | Notas |
|---|---|
| Aqua Futures | Incluye una licencia de la plataforma DeepCharts |
| MyFundedFutures (MFF) | Incluye una licencia de la plataforma DeepCharts |
| Phidias | Emite dxFeed (no Rithmic, a pesar de alguna documentación antigua) |
| YRM Prop | Incluye una licencia de la plataforma DeepCharts |
| BlueSky Trading | Ofrece cuentas dxFeed y Rithmic: compruebe cuál compró; la variante Rithmic usa Server = Rithmic Paper Trading |
| SoloClashes | — |
| Goat Funded Futures | Ofrece CQG y dxFeed: solo la cuenta dxFeed funciona con DeepCharts |

> **Nota:** En el proceso de compra estas empresas le piden elegir una plataforma de trading. Elegir DeepCharts o DeepDom produce las mismas credenciales dxFeed funcionales: cualquiera de las dos opciones conecta. Solo una elección de plataforma no relacionada (Tradovate, NinjaTrader, Quantower y similares) rompe la compatibilidad; en ese caso, pida al soporte de la empresa que cambie su selección de plataforma para que puedan reemitir las credenciales.

### Brókers de futuros

| Bróker | Tipos de cuenta | Valor de Server de Rithmic |
|---|---|---|
| AMP Futures | CQG o Rithmic | Rithmic 01 |
| EdgeClear | CQG o Rithmic | Rithmic 01 |
| Ironbeam | CQG o Rithmic | Rithmic 01 |
| Phillips Capital | CQG o Rithmic | Rithmic 01 |
| Optimus Futures | CQG o Rithmic | Rithmic 01 |
| Interactive Brokers (IBKR) | API TWS: solo ejecución | — |

Las cuentas CQG de bróker usan **Feed Source = CQG**; consulte [[connect-cqg]]. Las cuentas CQG funcionan exactamente en dos casos: emitidas por uno de estos brókers, o emitidas por una empresa prop directamente desde CQG. Una cuenta CQG que llega a través de Tradovate o NinjaTrader no puede conectarse.

IBKR devuelve datos agregados, por lo que solo es útil para la ejecución de operaciones: debe combinarlo con una fuente de datos real (Rithmic o dxFeed) y enrutar sus gráficos a esa fuente en [[symbol-manage|Symbol Manage]]. Consulte [[connect-interactive-brokers]].

### Fuentes de datos directas (sin bróker ni empresa prop)

| Dónde la compró | Feed Source | Server | Acuerdo firmado |
|---|---|---|---|
| dxFeed en el sitio web de DeepCharts | dxFeed | Website Account | Panel de DeepCharts — Sign Market Data Contract |
| Rithmic en el sitio web de DeepCharts | Rithmic RAPI | Rithmic Paper Trading | Dentro de R Trader Pro |
| dxFeed en dxfeed.com | dxFeed | dxFeed Account | En el sitio de dxFeed |
| Rithmic emitida a través de otra plataforma (Quantower, Sierra Chart, MotiveWave, ATAS, NinjaTrader...) | Rithmic RAPI | Rithmic Paper Trading | Dentro de R Trader Pro |
| Fuente gratuita con retraso de 15 minutos (integrada) | 15 min delayed | — | No se requiere |
| Cuenta de competición de DeepCharts | V-Sim | — | Consulte [[competition-connect]] |

> **Advertencia:** Las credenciales de dxFeed emitidas a través de otras plataformas de gráficos no pueden usarse con DeepCharts: solo las credenciales de Rithmic se transfieren de esa manera. Y al comprar en dxfeed.com debe seleccionar DeepCharts como su plataforma en el momento de la compra, o las credenciales no serán compatibles.

> **Nota:** Rithmic no vende fuentes de datos en rithmic.com. Si cree que compró "Rithmic de Rithmic", la cuenta en realidad provino de un bróker, una empresa prop, una plataforma de terceros o el sitio web de DeepCharts: busque esa fila arriba.

### Profundidad de mercado por fuente

La capacidad de profundidad importa si opera con el DOM o los indicadores de flujo de órdenes.

| Fuente | Profundidad de nivel 2 |
|---|---|
| dxFeed (bolsas del CME Group) | MBO: un campo DOM Type le permite elegir MBO o el más ligero MBP |
| Rithmic (bolsas del CME Group) | Siempre MBO: sin elección MBO/MBP |
| dxFeed (acciones y bolsas fuera del CME como Eurex) | No MBO |
| CQG | No MBO; profundidad completa para ES pero no profundidad completa para NQ |

### No compatibles

Estos proveedores no emiten credenciales que DeepCharts pueda usar. La solución alternativa es la misma para todos: conecte cualquier fuente compatible (la fuente gratuita con retraso de 15 minutos sirve para empezar; consulte [[free-delayed-data-feed]]), analice en DeepCharts y coloque sus operaciones manualmente en la plataforma propia del proveedor.

| Proveedor | Tipo |
|---|---|
| TopStep | Empresa prop |
| Tradovate | Bróker |
| TradeStation | Bróker |
| Charles Schwab | Bróker |
| Tastytrade | Bróker |
| FundedNext Futures | Empresa prop |
| FTMO | Empresa prop de CFD |
| FP Markets | Bróker de CFD |
| IC Markets | Bróker de CFD |
| HankoTrade | Bróker de CFD |
| Vantage Markets | Bróker de CFD |

## Consejos y errores comunes

- **El valor de Server es exacto.** "Apex" no es "Paper Trading", y la entrada dedicada de una empresa no es intercambiable con el valor de reserva. Un Server incorrecto es la segunda causa más común de un punto de conexión rojo después de credenciales incorrectas; consulte [[fix-bad-server]].
- **CQG debe venir directamente de CQG.** El CQG emitido por brókers (AMP, EdgeClear, Ironbeam, Phillips Capital, Optimus) y el CQG de empresas prop emitido directamente por CQG funcionan. El CQG a través de Tradovate o NinjaTrader nunca funciona. La misma división se aplica a las cuentas de NinjaTrader: las credenciales Rithmic de NinjaTrader conectan (Server = Rithmic Paper Trading); las credenciales CQG de NinjaTrader no.
- **Las credenciales de la fuente no son los inicios de sesión del sitio web.** Las empresas prop y los brókers emiten credenciales separadas de Rithmic o dxFeed, normalmente en un correo de bienvenida. Introducir el inicio de sesión del panel de su empresa es la causa número uno de fallos de conexión; consulte [[fix-username-password]].
- **Bulenox se escribe Bulenox**: los usuarios suelen teclear "Bluenox" y luego no encuentran la entrada del servidor.
- **Puede guardar varias conexiones** y cambiar entre ellas desde el selector de fuente de la barra principal; consulte [[manage-feed-connections]].

## Artículos relacionados

- [[connect-data-feed]]
- [[sign-market-data-agreement]]
- [[connect-rithmic-prop-firm]]
- [[connect-dxfeed-prop-firm]]
- [[connect-cqg]]
- [[symbol-manage]]