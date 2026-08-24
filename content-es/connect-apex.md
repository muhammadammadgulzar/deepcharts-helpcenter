---
title: "Cómo conectar Apex Trader Funding"
slug: "connect-apex"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Conecte su cuenta Rithmic de Apex Trader Funding (Evaluation o Funded) a DeepCharts, desde la firma del acuerdo en R Trader Pro hasta los gráficos en vivo."
keywords: ["apex", "apex trader funding", "conectar apex", "apex rithmic", "apex eval", "apex funded", "servidor apex", "credenciales apex"]
source_hash: "f7578a5e85f9dfbb"
ai_translated: true
source_hash: "f7578a5e85f9dfbb"
---
Al final de esta guía, su cuenta de Apex Trader Funding estará conectada a DeepCharts con gráficos en vivo en pantalla. Las cuentas Evaluation y Funded usan el proceso idéntico: no existe un flujo separado solo para cuentas financiadas.

> **Nota:** DeepCharts admite únicamente las cuentas **Rithmic** de Apex. Cualquier variante de cuenta CQG, dxFeed o IBKR que Apex pueda ofrecer no se puede conectar.

## Antes de empezar

- [ ] Una cuenta Rithmic de Apex activa (Evaluation o Funded). Si aún no tiene una, cómprela primero en Apex Trader Funding y luego vuelva aquí
- [ ] Su nombre de usuario y contraseña **Rithmic** emitidos por Apex. Llegan en el correo de bienvenida de Apex y **no** son los mismos que su inicio de sesión del sitio web de Apex; consulte [[fix-username-password]] para saber por qué confundirlos es la causa número uno de conexiones fallidas
- [ ] DeepCharts instalado y activado — consulte [[install-deepcharts]]
- [ ] R Trader Pro, que instalará en el paso 1 para firmar el acuerdo de datos de mercado — consulte [[sign-market-data-agreement]] para el contexto

> **Consejo:** ¿No encuentra sus credenciales Rithmic? Busque "Rithmic" en su bandeja de entrada en los correos de Apex: el correo de bienvenida las contiene y tienen un aspecto distinto de su inicio de sesión del sitio web de Apex.

## Pasos

### Parte A — Firme el acuerdo en R Trader Pro

El acuerdo de datos de mercado de Rithmic debe firmarse antes de que DeepCharts pueda conectarse. Sin él, el punto de conexión permanece rojo aunque las credenciales sean correctas.

1. Vaya a https://www.rithmic.com/rtraderpro, haga clic en el botón **Download R | Trader Pro** y ejecute el instalador con las opciones predeterminadas.

2. Abra R Trader Pro. La pantalla de inicio de sesión muestra **dos formularios de inicio de sesión uno al lado del otro**: esto es normal. Complete **ambos** formularios con los mismos valores:
   - **System:** seleccione **Apex**
   - **Gateway:** seleccione la ubicación más cercana a usted (Chicago, Europa, Singapur, etcétera); un gateway lejano funciona pero añade latencia
   - **Username / Password:** sus credenciales Rithmic del correo de bienvenida de Apex

[SCREENSHOT: Pantalla de inicio de sesión de R Trader Pro con ambos formularios lado a lado completados de forma idéntica, el menú desplegable System configurado en Apex y el menú desplegable Gateway visible | dc-es-connect-apex-01.png]

> **Nota:** El campo System y el campo Server son campos diferentes: el campo Server también lista `Apex` junto a `Paper Trading`. Para firmar el acuerdo, lo que importa es **System = Apex**.

3. Haga clic en **Login**. Cuando se le pregunte por su estatus de datos de mercado, los traders minoristas normalmente seleccionan **Non-Professional**.

4. Lea y acepte el acuerdo de datos de mercado que aparece. Si cerró R Trader Pro antes de que apareciera el aviso, vuelva a iniciar sesión: el aviso reaparecerá.

[SCREENSHOT: Aviso del acuerdo de datos de mercado de R Trader Pro tras el inicio de sesión, con el botón de aceptar visible | dc-es-connect-apex-02.png]

5. Solo en la primera configuración: abra **Window → Preferences → Performance** y arrastre ambos deslizadores, **Quotes** y **Order Book**, al máximo; luego haga clic en **Apply** y **OK**. Esto elimina el límite de recepción de datos de Rithmic, que de lo contrario retrasa los gráficos durante períodos de mercado de alto volumen.

[SCREENSHOT: Ventana Preferences de R Trader Pro, pestaña Performance, deslizadores Quotes y Order Book ambos al máximo | dc-es-connect-apex-03.png]

6. Cierre R Trader Pro. El acuerdo queda ahora almacenado en el lado de Rithmic: no necesita tener R Trader Pro en ejecución mientras usa DeepCharts.

### Parte B — Conéctese en DeepCharts

7. En DeepCharts, haga clic en **Select Connection** en la barra de herramientas superior y, a continuación, haga clic en **Feed Settings** en la parte inferior del menú desplegable.

[SCREENSHOT: Barra de herramientas superior de DeepCharts con el menú desplegable Select Connection abierto y Feed Settings resaltado en la parte inferior | dc-es-connect-apex-04.png]

8. Haga clic en **Add Connection** y complete el formulario:

| Campo | Qué introducir |
|---|---|
| **Name** | Cualquier etiqueta que reconozca, por ejemplo "Apex Live" o "Apex Eval". |
| **Feed Source** | **Rithmic RAPI**: el menú desplegable también muestra una opción beta de Rithmic; elija RAPI. |
| **Username** | Su nombre de usuario Rithmic del correo de bienvenida de Apex, no su inicio de sesión del sitio web de Apex. |
| **Password** | Su contraseña Rithmic del mismo correo. |
| **Server** | **Apex**: no Paper Trading ni ninguna otra entrada. |
| **Gateway** | La ubicación más cercana a usted (por ejemplo Chicago Area, Europe, Singapore). |

Deje todos los demás campos del formulario como están. Use la maqueta interactiva de Feed Settings de abajo para ver cómo funciona el formulario: elija Rithmic como Feed Source y aparecerá el campo Server:

[WIDGET: feed-navigator]

> **Advertencia:** El menú desplegable Server contiene varias opciones, incluida `Paper Trading`. Para Apex debe ser exactamente **Apex**: seleccionar Paper Trading aquí es la segunda causa más común de un punto de conexión rojo, justo después de las credenciales incorrectas.

9. Haga clic en **Save**.

10. De vuelta en la barra de herramientas principal, haga clic de nuevo en **Select Connection**. Su nueva fuente de Apex aparece en el menú desplegable con el nombre que le dio: haga clic en ella para conectarse.

11. Dirija sus bolsas a la fuente: abra **Options → Symbol Manage** y asegúrese de que las bolsas en las que opera (por ejemplo CME para ES y NQ) estén suscritas y asignadas a la conexión de Apex; el icono de cadena de una fila cambia desde qué fuente se carga. Si se omite este paso, los gráficos no muestran datos o cargan datos antiguos de la caché y parecen congelados, lo que es la mayor causa de los reportes de "gráficos que no se mueven". Pruébelo en la maqueta interactiva de abajo: haga clic en el icono de cadena para alternar la fuente de una fila. Guía completa en [[symbol-manage]].

[WIDGET: symbol-manage-mock]

## Verifique que funcionó

- En unos 10 segundos tras conectarse, el punto de conexión se pone **verde**.
- Abra un gráfico (**New → Price Chart**, elija ES o NQ) y confirme que el precio se actualiza en vivo.

Si ya había un gráfico abierto mientras corregía Symbol Manage y todavía parece congelado, ciérrelo y vuelva a abrirlo mediante **New → Price Chart**: se recargará desde la fuente correctamente dirigida.

Una vez que los gráficos cargan, puede colocar órdenes a través del Trading Panel en la parte inferior derecha del gráfico seleccionando su cuenta Apex en los campos del panel; consulte [[trading-from-chart]].

## Si algo salió mal

Si el punto sigue rojo, compruebe estas causas en orden: cubren casi todos los casos:

1. **Credenciales incorrectas**: usó su inicio de sesión del sitio web de Apex en lugar de las credenciales Rithmic del correo de bienvenida de Apex. Es la causa más común. Consulte [[fix-username-password]].
2. **Acuerdo sin firmar**: el acuerdo de datos de mercado nunca se aceptó dentro de R Trader Pro. Consulte [[fix-log-in-using-rtrader]] y [[sign-market-data-agreement]].
3. **Server incorrecto**: el campo Server debe ser exactamente **Apex**, no Paper Trading. Consulte [[fix-bad-server]].
4. **Firewall o antivirus bloqueando Rithmic**: consulte [[fix-unable-to-establish-connection]].

Otros síntomas:

- El punto está verde pero los gráficos no se mueven o no muestran datos — [[feed-connected-chart-not-moving]] (vuelva a comprobar primero Symbol Manage)
- Los gráficos se retrasan durante mercados activos — [[data-delayed-lagging]] (verifique que el Feed Source sea Rithmic RAPI y que los deslizadores Performance de R Trader Pro estén al máximo)

¿Sigue rojo tras las cuatro comprobaciones? Abra **Options → Show Logs** en DeepCharts, copie los mensajes de error e inclúyalos cuando contacte a soporte; consulte [[diagnostic-report]] y [[get-help]].

## Artículos relacionados

- [[connect-rithmic-prop-firm]]
- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[feed-connected-chart-not-moving]]
- [[trading-from-chart]]
- [[compatibility-guide]]