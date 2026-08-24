---
title: "Cómo conectar una fuente de datos de Rithmic"
slug: "connect-rithmic"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Conecte una fuente de datos de Rithmic a DeepCharts: firme el acuerdo en R Trader Pro, introduzca sus credenciales con el valor de Server correcto y verifique los gráficos en vivo."
keywords: ["rithmic", "rithmic rapi", "conectar rithmic", "configuración rithmic", "rithmic paper trading", "rythmic", "ritmic", "rithmik", "falta feed source rithmic", "rithmic wss beta"]
source_hash: "4514d3418e8deedc"
ai_translated: true
source_hash: "4514d3418e8deedc"
---
Al final de esta guía tendrá una fuente de datos de Rithmic conectada a DeepCharts y un gráfico en vivo en pantalla. La guía principal cubre una suscripción de Rithmic comprada en el sitio web de DeepCharts; las secciones derivadas cubren cuentas de Rithmic emitidas por un bróker o traídas de otra plataforma de trading.

> **Nota:** Rithmic no vende fuentes de datos directamente desde rithmic.com. Sus credenciales de Rithmic siempre provienen de uno de cuatro lugares: el sitio web de DeepCharts, un bróker, una empresa prop u otra plataforma de trading. Si su cuenta provino de una empresa prop, siga [[connect-rithmic-prop-firm]] en su lugar (o [[connect-apex]] para Apex Trader Funding).

## Antes de empezar

Asegúrese de tener:

- [ ] DeepCharts instalado y activado; consulte [[install-deepcharts]]
- [ ] Una suscripción activa de Rithmic con su nombre de usuario y contraseña; consulte [[buy-data-feed]] si aún no ha comprado una
- [ ] El acuerdo de datos de mercado de Rithmic firmado a través de R Trader Pro; consulte [[sign-market-data-agreement]] (los pasos 2–3 a continuación resumen el proceso)
- [ ] Comprobado que el origen de su cuenta es compatible; consulte [[compatibility-guide]]

## Pasos

1. Obtenga sus credenciales de Rithmic. Para una fuente de datos comprada en el sitio web de DeepCharts: inicie sesión en my.deepcharts.com, abra la sección **Subscriptions** (suscripciones) y localice su nombre de usuario y contraseña de Rithmic. Téngalos a mano: los necesitará en todos los pasos siguientes.

[SCREENSHOT: Panel de DeepCharts en my.deepcharts.com con la sección Subscriptions abierta y la fila de la suscripción de Rithmic visible, con el área de credenciales resaltada (difumine el nombre de usuario y la contraseña reales) | dc-es-connect-rithmic-01.png]

2. Firme el acuerdo de datos de mercado de Rithmic en R Trader Pro. Rithmic exige que acepte sus acuerdos antes de que cualquier plataforma de terceros pueda conectarse: con ellos sin firmar, la conexión falla incluso con credenciales correctas. Descargue R Trader Pro desde https://www.rithmic.com/rtraderpro (haga clic en **Download R | Trader Pro**), instálelo y ábralo. Rellene **ambos** formularios de inicio de sesión con los mismos valores: su nombre de usuario y contraseña de Rithmic, **System** = **Rithmic Paper Trading**, y el **Gateway** más cercano a usted. Haga clic en **Login**, elija su estatus de datos de mercado cuando se le solicite (los traders minoristas normalmente seleccionan **Non-Professional**), y luego lea y acepte cada acuerdo hasta que no queden avisos. El proceso completo se cubre en [[sign-market-data-agreement]].

[SCREENSHOT: Pantalla de inicio de sesión de R Trader Pro mostrando los dos formularios de inicio de sesión uno junto al otro, ambos rellenados de forma idéntica, con System establecido en Rithmic Paper Trading y el menú desplegable Gateway visible | dc-es-connect-rithmic-02.png]

> **Nota:** Los acuerdos se almacenan en los servidores de Rithmic, por lo que no necesita mantener R Trader Pro abierto mientras usa DeepCharts. Solo repetirá esto si su cuenta se restablece o Rithmic introduce nuevos acuerdos obligatorios.

3. Mientras está en R Trader Pro (solo en la primera configuración), elimine el límite de recepción de datos de Rithmic: abra **Window → Preferences → Performance** y arrastre ambos deslizadores, **Quotes** y **Order Book**, al máximo; luego haga clic en **Apply** y **OK**. Con un límite establecido, los gráficos pueden quedarse atrás durante los períodos de mercado de alto volumen. Cierre R Trader Pro cuando termine.

[SCREENSHOT: Ventana de preferencias de R Trader Pro en la pestaña Performance con los deslizadores Quotes y Order Book arrastrados a la posición máxima | dc-es-connect-rithmic-03.png]

4. En DeepCharts, haga clic en **Select Connection** en la barra de herramientas superior y luego haga clic en **Feed Settings** en la parte inferior del menú desplegable. Se abrirá la ventana de Feed Settings.

[SCREENSHOT: Barra de herramientas principal de DeepCharts con el menú desplegable Select Connection abierto y la entrada Feed Settings resaltada en la parte inferior | dc-es-connect-rithmic-04.png]

5. Haga clic en **Add Connection** y rellene el formulario:

| Campo | Qué introducir |
|---|---|
| **Name** | Cualquier etiqueta que reconozca después, por ejemplo "Rithmic Live". |
| **Feed Source** | **Rithmic RAPI**: la opción recomendada. |
| **Username** | Su nombre de usuario de Rithmic (no su inicio de sesión del sitio web de DeepCharts). |
| **Password** | Su contraseña de Rithmic. |
| **Server** | **Rithmic Paper Trading** para una fuente de datos comprada en el sitio web de DeepCharts. |
| **Gateway** | **Automatic** (el predeterminado), o la región más cercana a usted. |

Deje todos los demás campos como están. La opción **Include commissions** (incluir comisiones) está activada de forma predeterminada: muestra las comisiones en su P/L.

Pruebe el formulario en vivo a continuación: establezca el Feed Source en Rithmic RAPI y observe cómo aparecen los campos Server y Gateway.

[WIDGET: feed-navigator]

> **Nota:** El menú desplegable Feed Source muestra **Rithmic RAPI** y **Rithmic Wss - beta**: ya no existe una opción simple "Rithmic", así que si una guía antigua menciona una, elija **Rithmic RAPI**. Si los gráficos alguna vez se sienten retrasados o inestables, verifique que está en RAPI y no en la beta Wss.

> **Nota:** "Paper Trading" es solo la etiqueta del servidor de Rithmic para cuentas de fuente de datos: los datos que entrega son reales y en vivo, idénticos a las fuentes de Rithmic de brókeres y empresas prop.

El menú desplegable Gateway ofrece: Automatic, Chicago Area, Seoul, Mumbai, Hong Kong, Sao Paolo, Singapore, Sydney, Tokyo, Frankfurt, Europe, Cape Town, NYC Area y US West. Un gateway lejano funciona igualmente pero añade latencia: si está lejos de Chicago y los datos se sienten lentos, elija la región más cercana a usted (por ejemplo Europe o Frankfurt para usuarios de la UE, Singapore o Mumbai para Asia) y vuelva a conectarse.

### Si su cuenta de Rithmic provino de un bróker

Para cuentas de Rithmic emitidas por AMP Futures, EdgeClear, Ironbeam, Phillips Capital u Optimus Futures, la configuración es idéntica excepto el campo **Server**: seleccione **Rithmic 01** en lugar de Rithmic Paper Trading. Use el mismo valor que el campo System al firmar el acuerdo en R Trader Pro.

### Si sus credenciales de Rithmic provinieron de otra plataforma de trading

Las credenciales de Rithmic emitidas a través de otra plataforma de flujo de órdenes o mapa de calor (Quantower, Sierra Chart, MotiveWave, ATAS, NinjaTrader y similares) funcionan con DeepCharts. Use **Server** = **Rithmic Paper Trading**, y asegúrese de que el acuerdo esté firmado en R Trader Pro con el mismo valor en el campo System.

> **Advertencia:** Solo las credenciales de Rithmic se transfieren de otras plataformas de esta manera. Las credenciales de dxFeed emitidas a través de otras plataformas no pueden usarse con DeepCharts: para dxFeed necesita comprar a través del sitio web de DeepCharts o directamente en dxfeed.com con DeepCharts seleccionada como plataforma (consulte [[connect-dxfeed]]).

### Si su cuenta de Rithmic provino de una empresa prop

Siga [[connect-rithmic-prop-firm]]: cada empresa usa su propio valor de Server con nombre, listado en la tabla de ese artículo. Apex Trader Funding tiene una guía dedicada: [[connect-apex]].

6. Haga clic en **Save**.

7. De vuelta en la barra de herramientas principal, haga clic en **Select Connection** de nuevo: su nueva fuente de datos de Rithmic aparece ahora en el menú desplegable con el nombre que le dio. Haga clic en ella para conectarse.

8. Enrute sus bolsas a la nueva fuente de datos: abra **Options → Symbol Manage** y asegúrese de que las bolsas en las que opera estén suscritas y asignadas a esta conexión de Rithmic (el icono de eslabón de cadena en una fila cambia desde qué fuente de datos carga esa bolsa). El selector de instrumentos solo muestra las bolsas que ha suscrito. Detalles completos en [[symbol-manage]].

Pruebe la asignación a continuación: haga clic en el icono de eslabón de cadena de una fila para alternar desde qué fuente de datos carga la bolsa.

[WIDGET: symbol-manage-mock]

9. Abra un gráfico: haga clic en **New** en el menú superior, luego en **Price Chart**, seleccione un instrumento (por ejemplo ES o NQ) y confirme.

## Verifique que funcionó

- En unos 10 segundos tras conectarse, el indicador de conexión se pone **verde**.
- El gráfico que abrió carga velas y el precio se actualiza en vivo.

[SCREENSHOT: Barra de herramientas principal de DeepCharts mostrando el indicador de conexión verde junto al nombre de la fuente de datos de Rithmic, con un gráfico de ES en vivo actualizándose al fondo | dc-es-connect-rithmic-05.png]

## Si algo salió mal

| Síntoma | Adónde ir |
|---|---|
| Conexión fallida: compruebe el nombre de usuario y la contraseña | [[fix-username-password]] — la causa más común es introducir un inicio de sesión del sitio web en lugar de las credenciales de Rithmic |
| Conexión fallida: servidor incorrecto | [[fix-bad-server]] — el valor de Server no coincide con el origen de su cuenta |
| Un mensaje le pide iniciar sesión usando R Trader o R Trader Pro | [[fix-log-in-using-rtrader]] — el paso del acuerdo se omitió o quedó incompleto |
| El indicador se pone amarillo con "Expert not attached" | [[fix-rithmic-expert-not-attached]] |
| Conexión fallida: no se pudo establecer la conexión | [[fix-unable-to-establish-connection]] |
| El punto está verde pero el gráfico no se mueve | [[feed-connected-chart-not-moving]] — casi siempre es un problema de enrutamiento en Symbol Manage |
| Los gráficos cargan pero se retrasan durante mercados con mucha actividad | [[data-delayed-lagging]] — verifique que el Feed Source sea Rithmic RAPI y que los deslizadores de Performance de R Trader Pro estén al máximo |

## Artículos relacionados

- [[buy-data-feed]]
- [[sign-market-data-agreement]]
- [[connect-rithmic-prop-firm]]
- [[rtrader-pro-plugin]]
- [[symbol-manage]]
- [[manage-feed-connections]]