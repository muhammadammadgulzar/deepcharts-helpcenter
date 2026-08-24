---
title: "Cómo conectar una cuenta dxFeed de empresa prop (MFF, Aqua, Goat...)"
slug: "connect-dxfeed-prop-firm"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Conecte una cuenta dxFeed emitida por una empresa prop como MyFundedFutures, Aqua Futures o Goat Funded Futures usando la fuente dxFeed Prop."
keywords: ["mff", "myfundedfutures", "my funded futures", "aqua futures", "goat funded futures", "dxfeed prop", "phidias", "yrm prop", "bluesky trading", "soloclashes", "dxfeed de empresa prop", "dom type mbo mbp"]
source_hash: "7ccc989bdc4c05de"
ai_translated: true
source_hash: "7ccc989bdc4c05de"
---
Al final de esta guía, la cuenta dxFeed que le emitió su empresa prop estará conectada a DeepCharts con gráficos en vivo en pantalla. Este flujo se aplica a las empresas prop basadas en dxFeed, incluidas Aqua Futures, MyFundedFutures (MFF), Phidias, YRM Prop, BlueSky Trading, SoloClashes y Goat Funded Futures.

La configuración difiere de una conexión dxFeed normal en dos aspectos: selecciona **dxFeed Prop** como Feed Source (no dxFeed a secas), y el acuerdo de datos de mercado se firma en el panel de su empresa prop, no en R Trader Pro ni en el sitio web de DeepCharts.

> **Nota:** En el momento de la compra, estas firmas preguntan qué plataforma de trading desea. Elegir DeepCharts o su plataforma hermana DeepDom produce las mismas credenciales dxFeed: cualquiera de las dos opciones se conecta sin problema. Solo elegir una plataforma no relacionada (Tradovate, NinjaTrader, Quantower y similares) hace que las credenciales sean incompatibles; en ese caso pida a soporte de la firma que cambie su selección de plataforma para que puedan reemitir credenciales compatibles.

## Antes de empezar

- [ ] DeepCharts instalado y activado — consulte [[install-deepcharts]]
- [ ] El nombre de usuario y la contraseña de dxFeed que le emitió su firma. Son distintos de su inicio de sesión del sitio web o panel de la firma — consulte [[fix-username-password]]
- [ ] El acuerdo de datos de mercado firmado en el panel de la firma (paso 1 abajo) — consulte [[sign-market-data-agreement]] para saber cómo funcionan los acuerdos según el origen de la cuenta
- [ ] Confirmado que su firma y tipo de cuenta son compatibles — consulte [[compatibility-guide]]

> **Advertencia:** Goat Funded Futures ofrece cuentas tanto CQG como dxFeed, pero solo su cuenta **dxFeed** funciona con DeepCharts. Si tiene una cuenta CQG de Goat, pida a Goat que le cambie a su cuenta dxFeed. BlueSky Trading ofrece tanto dxFeed como Rithmic: si la suya es Rithmic, siga en su lugar [[connect-rithmic-prop-firm]].

## Pasos

1. Firme el acuerdo de datos de mercado. Inicie sesión en el panel de su empresa prop y busque un botón o enlace para firmar el acuerdo de datos de mercado. Si no está en el panel, revise el correo que la firma envió cuando se emitió su cuenta. Si no lo encuentra en ninguno de los dos lugares, contacte a soporte de la firma: solo ellos pueden reenviar el enlace. Hasta que este acuerdo esté firmado, la conexión fallará aunque las credenciales sean correctas.

[SCREENSHOT: Un panel de empresa prop (diseño de ejemplo) con el botón de firma del acuerdo de datos de mercado resaltado | dc-es-connect-dxfeed-prop-firm-01.png]

2. Tenga listos su nombre de usuario y contraseña de dxFeed: del correo de bienvenida de la firma o de la sección de credenciales del panel, no su inicio de sesión del propio panel.

3. En DeepCharts, haga clic en **Select Connection** en la barra de herramientas superior y, a continuación, haga clic en **Feed Settings** en la parte inferior del menú desplegable.

[SCREENSHOT: Barra de herramientas superior de DeepCharts con el menú desplegable Select Connection abierto y Feed Settings resaltado | dc-es-connect-dxfeed-prop-firm-02.png]

4. Haga clic en **Add Connection** y complete el formulario:

| Campo | Qué introducir |
|---|---|
| **Name** | Cualquier etiqueta, por ejemplo "MFF dxFeed". |
| **Feed Source** | **dxFeed Prop**: específicamente esta entrada, no **dxFeed** a secas. |
| **Username** | El nombre de usuario dxFeed de su firma, no su inicio de sesión del panel. |
| **Password** | La contraseña dxFeed que lo acompaña. |
| **DOM Type** | **MBO** o **MBP** — vea la nota más abajo. |

Deje los demás campos en sus valores predeterminados. Compruébelo usted mismo en la maqueta interactiva de Feed Settings de abajo: cambie el Feed Source a dxFeed Prop y observe que no hay campo Server:

[WIDGET: feed-navigator]

> **Nota:** No hay campo **Server** cuando el Feed Source es **dxFeed Prop**: no lo busque. (Un campo Server solo aparece con la fuente **dxFeed** a secas usada para las cuentas de fuente de datos directas.) El enrutamiento es automático: dxFeed le dirige al más cercano de sus dos servidores, Frankfurt (UE) o Virginia (EE. UU.), y no puede elegir.

**Elegir el DOM Type:** los datos de nivel 2 de dxFeed para las bolsas de CME Group son MBO (market-by-order). Elija **MBO** para la profundidad completa del libro de órdenes: la mejor opción para los indicadores Deep. **MBP** (market-by-price) consume mucho menos ancho de banda; elíjalo si su conexión es lenta o sus gráficos se quedan atrás durante períodos de alto volumen.

5. Haga clic en **Save**.

6. De vuelta en la barra de herramientas principal, haga clic de nuevo en **Select Connection** y haga clic en su nueva fuente para conectarse.

7. Dirija sus bolsas a la fuente: abra **Options → Symbol Manage** y confirme que las bolsas en las que opera están suscritas y asignadas a esta conexión (el icono de cadena de una fila cambia su fuente). El selector de instrumentos solo muestra las bolsas a las que se ha suscrito. Pruébelo en la maqueta de abajo: suscriba una bolsa y haga clic en el icono de cadena para alternar su fuente. Guía completa en [[symbol-manage]].

[WIDGET: symbol-manage-mock]

### Si eligió una plataforma no relacionada al comprar

Si seleccionó Tradovate, NinjaTrader, Quantower u otra plataforma distinta de DeepCharts al comprar la cuenta, las credenciales que la firma le dio pertenecen al ecosistema de esa plataforma y no se conectarán. Contacte a soporte de la firma y pídales que cambien su selección de plataforma: reemitirán credenciales dxFeed compatibles.

### Si su firma incluyó una licencia de DeepCharts

Algunas empresas prop de dxFeed (incluidas Aqua Futures, MyFundedFutures, Phidias y YRM Prop) incluyen con la cuenta una licencia limitada de la edición Prop de DeepCharts. La edición Prop no tiene indicadores Deep: solo gráficos básicos y flujo de órdenes. Sus credenciales dxFeed no están vinculadas a esa edición: funcionan en cualquier instalación de DeepCharts, así que si ya posee una licencia Full puede seguir usándola con la fuente prop, o ejecutar ambas en paralelo.

## Verifique que funcionó

- El indicador de conexión se pone **verde** poco después de conectarse.
- Abra un gráfico (**New → Price Chart**, elija un símbolo que cubra su cuenta) y confirme que el precio se actualiza en vivo.

Una vez que los gráficos cargan, coloque órdenes a través del Trading Panel en la parte inferior derecha del gráfico seleccionando su cuenta de la empresa prop; consulte [[trading-from-chart]].

## Si algo salió mal

Una conexión roja o fallida casi siempre se debe a una de estas causas:

1. **Credenciales incorrectas**: introdujo el inicio de sesión del panel de la firma en lugar de las credenciales dxFeed. Consulte [[fix-username-password]].
2. **Acuerdo sin firmar**: el acuerdo de datos de mercado del panel de la firma nunca se completó. Consulte [[sign-market-data-agreement]].
3. **Feed Source incorrecto**: seleccionó **dxFeed** a secas en lugar de **dxFeed Prop**.
4. **Plataforma no relacionada elegida al comprar**: la firma debe cambiar su selección de plataforma y reemitir las credenciales.

Errores específicos:

| Síntoma | A dónde ir |
|---|---|
| El error menciona que dxfeed.myfundedfutures.com falló | [[fix-myfundedfutures-failed]] |
| El error menciona DATA_ACCESS_SUSPENDED | [[fix-data-access-suspended]] |
| Conexión fallida — no se puede establecer la conexión | [[fix-unable-to-establish-connection]] |
| El punto está verde pero los gráficos no se mueven | [[feed-connected-chart-not-moving]] — vuelva a comprobar el enrutamiento en Symbol Manage |
| Los gráficos se retrasan durante mercados activos | [[data-delayed-lagging]] — cambiar el **DOM Type** a **MBP** reduce la carga de datos en conexiones lentas |

## Artículos relacionados

- [[connect-dxfeed]]
- [[connect-rithmic-prop-firm]]
- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[fix-myfundedfutures-failed]]
- [[compatibility-guide]]