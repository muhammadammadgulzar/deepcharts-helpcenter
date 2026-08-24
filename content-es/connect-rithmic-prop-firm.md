---
title: "Conecte cualquier cuenta de empresa prop de Rithmic (tabla de servidores)"
slug: "connect-rithmic-prop-firm"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Un único flujo de configuración para todas las empresas prop de Rithmic: busque el valor de Server de su empresa en la tabla, firme el acuerdo en R Trader Pro y conéctese a DeepCharts."
keywords: ["empresa prop rithmic", "lista de servidores rithmic", "servidor empresa prop", "rithmic paper trading", "bulenox", "bluenox", "takeprofittrader", "earn2trade", "oneuptrader", "tradeify", "the trading pit", "configuración cuenta fondeada"]
source_hash: "7a075c9c54643bc2"
ai_translated: true
source_hash: "7a075c9c54643bc2"
---
Todas las cuentas de empresas prop de Rithmic se conectan a DeepCharts de la misma manera: lo único que cambia entre empresas es el valor de **Server** (servidor) que seleccione. Al final de esta guía, su fuente de datos de la empresa prop estará conectada y los gráficos se transmitirán en vivo.

Las cuentas de evaluación (Evaluation) y fondeadas (Funded) utilizan el flujo idéntico: no existe una configuración separada solo para cuentas fondeadas.

> **Nota:** Apex Trader Funding tiene su propia guía dedicada: [[connect-apex]]. Si su empresa prop le emitió una cuenta dxFeed en lugar de Rithmic (MyFundedFutures, Aqua Futures, Goat Funded Futures y otras), siga [[connect-dxfeed-prop-firm]].

## Antes de empezar

- [ ] Una cuenta activa de empresa prop (de evaluación o fondeada: ambas se conectan de la misma manera). Cómprela primero a su empresa si aún no lo ha hecho
- [ ] El nombre de usuario y la contraseña de Rithmic que le emitió su empresa. Llegan en el correo de bienvenida de la empresa y **no** son los mismos que su inicio de sesión del sitio web de la empresa; consulte [[fix-username-password]] para saber por qué esto importa
- [ ] R Trader Pro instalado para firmar el acuerdo de datos de mercado; consulte [[sign-market-data-agreement]]
- [ ] DeepCharts instalado y activado; consulte [[install-deepcharts]]
- [ ] Confirmado que su empresa es compatible; consulte [[compatibility-guide]]

> **Advertencia:** No todas las empresas prop pueden conectarse. TopStep, FTMO y FundedNext Futures no emiten credenciales utilizables con DeepCharts. Las cuentas CQG de empresas prop solo funcionan cuando la empresa emite la cuenta CQG directamente desde CQG: una cuenta CQG que llega a través de Tradovate o NinjaTrader no puede conectarse (consulte [[connect-cqg]]).

## Pasos

1. Busque el valor de **Server** de su empresa en la tabla siguiente. Utilizará este mismo valor dos veces: como **System** en R Trader Pro al firmar el acuerdo, y como **Server** en Feed Settings (configuración de la fuente de datos) de DeepCharts.

| Empresa prop | Valor de Server |
|---|---|
| Apex Trader Funding (consulte [[connect-apex]]) | Apex |
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
| Tradeify | Tradeify [CONFIRM: exact spelling of the Tradeify entry in the Server dropdown] |
| tradesea | tradesea (en minúsculas en el menú desplegable) |
| BlueSky Trading (cuentas Rithmic) | Rithmic Paper Trading |
| OneUpTrader | Rithmic Paper Trading |
| TakeProfitTrader | Rithmic Paper Trading |
| Cualquier otra empresa prop de Rithmic | Rithmic Paper Trading |

> **Consejo:** Cuidado con la ortografía: el nombre correcto de la empresa es "Bulenox" (a menudo mal escrito como "Bluenox") y la entrada del servidor es "TradeFundrr" sin una segunda "e".

### Si su empresa no aparece en el menú desplegable Server

Seleccione **Rithmic Paper Trading**: es el servidor predeterminado de Rithmic para cuentas de solo fuente de datos y cuentas prop más pequeñas. Utilícelo tanto en R Trader Pro como en DeepCharts. A pesar del nombre, los datos son reales y en vivo.

2. Firme el acuerdo de datos de mercado de Rithmic en R Trader Pro. Sin él, la conexión permanece en rojo incluso con credenciales correctas. Descargue R Trader Pro desde https://www.rithmic.com/rtraderpro (haga clic en **Download R | Trader Pro**), ábralo y rellene **ambos** formularios de inicio de sesión, situados uno junto al otro, con los mismos valores: **System** = el valor de servidor de su empresa según la tabla, **Gateway** = la ubicación más cercana a usted, y el nombre de usuario y la contraseña de Rithmic del correo de bienvenida de su empresa. Haga clic en **Login**, seleccione su estatus de datos de mercado cuando se le solicite (los traders minoristas normalmente seleccionan **Non-Professional**), y luego lea y acepte los acuerdos. Detalles completos en [[sign-market-data-agreement]].

[SCREENSHOT: Pantalla de inicio de sesión de R Trader Pro con ambos formularios rellenados, el menú desplegable System abierto mostrando las entradas de servidores de empresas prop, y el campo Gateway visible | dc-es-connect-rithmic-prop-firm-01.png]

3. Solo en la primera configuración: mientras está en R Trader Pro, abra **Window → Preferences → Performance** y arrastre ambos deslizadores, **Quotes** y **Order Book**, al máximo; luego haga clic en **Apply** y **OK**. Esto elimina el límite de recepción de datos de Rithmic; con un límite establecido, los gráficos pueden retrasarse durante los períodos de mercado de alto volumen. Cierre R Trader Pro cuando termine.

[SCREENSHOT: Pestaña Performance de las preferencias de R Trader Pro con los deslizadores Quotes y Order Book al máximo | dc-es-connect-rithmic-prop-firm-02.png]

4. En DeepCharts, haga clic en **Select Connection** en la barra de herramientas superior y luego en **Feed Settings** en la parte inferior del menú desplegable.

5. Haga clic en **Add Connection** y rellene el formulario:

| Campo | Qué introducir |
|---|---|
| **Name** | Cualquier etiqueta, por ejemplo "MyFirm Eval" o "MyFirm Live". |
| **Feed Source** | **Rithmic RAPI** (el menú desplegable también muestra **Rithmic Wss - beta**; elija RAPI). |
| **Username** | El nombre de usuario de Rithmic del correo de bienvenida de su empresa, no el inicio de sesión del sitio web de la empresa. |
| **Password** | La contraseña de Rithmic del mismo correo. |
| **Server** | El valor de su empresa según la tabla del paso 1, exactamente como está escrito. |
| **Gateway** | **Automatic** (predeterminado), o la región más cercana a usted para menor latencia. |

Deje todos los demás campos como están. Pruebe la maqueta interactiva de Feed Settings a continuación: cambie el Feed Source a Rithmic y observe cómo aparece el campo Server.

[WIDGET: feed-navigator]

> **Consejo:** Si cuentas prop antiguas o vencidas saturan su lista de cuentas, habilite el interruptor **Show only active accounts** (mostrar solo cuentas activas) en la sección LOGIN INFO de Feed Settings.

6. Haga clic en **Save**.

7. Haga clic en **Select Connection** de nuevo y haga clic en su nueva fuente de datos para conectarse.

8. Enrute sus bolsas a la fuente de datos: abra **Options → Symbol Manage** y confirme que las bolsas en las que opera están suscritas y asignadas a esta conexión (el icono de eslabón de cadena en una fila cambia su fuente de datos). Pruébelo en la maqueta siguiente: haga clic en el icono de eslabón de cadena de una fila para alternar su fuente de datos asignada. Guía completa en [[symbol-manage]].

[WIDGET: symbol-manage-mock]

## Verifique que funcionó

- El indicador de conexión se pone **verde** en unos 10 segundos tras conectarse.
- Abra **New → Price Chart**, elija un símbolo que cubra su cuenta (por ejemplo ES o NQ) y confirme que el precio se actualiza en vivo.

Una vez que los gráficos se cargan, puede colocar órdenes a través del Trading Panel (panel de trading) en la parte inferior derecha del gráfico seleccionando su cuenta de empresa prop; consulte [[trading-from-chart]].

## Si algo salió mal

Las tres causas siguientes explican casi todas las conexiones fallidas de empresas prop, en este orden:

1. **Credenciales incorrectas**: introdujo el inicio de sesión del sitio web de la empresa en lugar de las credenciales de Rithmic del correo de bienvenida. Consulte [[fix-username-password]].
2. **Acuerdo sin firmar**: el acuerdo de datos de mercado nunca fue aceptado dentro de R Trader Pro. Consulte [[fix-log-in-using-rtrader]] y [[sign-market-data-agreement]].
3. **Valor de Server incorrecto**: el campo Server no coincide exactamente con la entrada de su empresa en la tabla. Consulte [[fix-bad-server]].

Otros síntomas:

- El punto está verde pero los gráficos no se mueven — [[feed-connected-chart-not-moving]]
- Conexión fallida: no se pudo establecer la conexión — [[fix-unable-to-establish-connection]]
- Los gráficos se retrasan durante mercados con mucha actividad — [[data-delayed-lagging]] (verifique que el Feed Source sea Rithmic RAPI y que los deslizadores de R Trader Pro estén al máximo)

Si ninguno de estos coincide, recopile los detalles que necesita el soporte; consulte [[diagnostic-report]].

## Artículos relacionados

- [[connect-apex]]
- [[connect-rithmic]]
- [[connect-dxfeed-prop-firm]]
- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[compatibility-guide]]