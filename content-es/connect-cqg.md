---
title: "Cómo conectar CQG (AMP, Optimus, EdgeClear, Ironbeam...)"
slug: "connect-cqg"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Conecte una cuenta CQG de AMP Futures, Optimus, EdgeClear, Ironbeam o Phillips Capital a DeepCharts."
keywords: ["CQG", "AMP Futures", "Optimus Futures", "EdgeClear", "Ironbeam", "Phillips Capital", "demo CQG", "conectar CQG a DeepCharts", "CQG no se conecta", "fuente cqg"]
source_hash: "950e637d393f50a7"
ai_translated: true
source_hash: "950e637d393f50a7"
---
Al terminar, tendrá su cuenta CQG conectada a DeepCharts y los gráficos cargando datos en vivo. Las cuentas CQG las emiten brókeres de futuros — AMP Futures, EdgeClear, Ironbeam, Phillips Capital y Optimus Futures funcionan todos — y CQG es una de las fuentes más rápidas de configurar porque no hay que firmar primero un acuerdo de datos de mercado por separado.

Una regla de compatibilidad importa antes de empezar: DeepCharts solo puede conectar cuentas CQG emitidas **directamente por CQG**, ya sea a través de uno de los brókeres anteriores o de una empresa prop que emita sus cuentas CQG directamente desde CQG. Una cuenta CQG que llega a través de Tradovate o NinjaTrader no se puede conectar en absoluto. Si no está seguro de qué tipo tiene, consulte [[compatibility-guide]] o pregunte a su bróker.

## Antes de empezar

- Confirme que su bróker o tipo de cuenta es compatible — [[compatibility-guide]]
- Tenga listos su nombre de usuario y contraseña de CQG (del correo de bienvenida de su bróker, no su inicio de sesión del sitio web del bróker)
- DeepCharts instalado y activado — [[install-deepcharts]]

## Pasos

1. En la barra principal de DeepCharts, haga clic en **Select Connection** → **Feed Settings**.

[SCREENSHOT: Barra principal de DeepCharts con el menú desplegable Select Connection abierto y la entrada Feed Settings resaltada | dc-es-connect-cqg-01.png]

2. Haga clic en **Add Connection**. Aparece un formulario de conexión en blanco.

3. En **Name**, escriba una etiqueta que reconozca después, por ejemplo "AMP CQG".

4. En **Feed Source**, seleccione **CQG**. Puede explorar cómo se comporta el formulario Feed Settings en la maqueta interactiva de abajo: cambiar el Feed Source cambia qué campos aparecen:

[WIDGET: feed-navigator]

5. Introduzca su **Username** y **Password** de CQG. Estas son las credenciales de CQG de su bróker, no su inicio de sesión del sitio web del bróker.

6. Marque **Use demo credentials** solo si está conectando una cuenta demo de CQG. Para una cuenta en vivo, déjelo deshabilitado. Un desajuste aquí (una cuenta en vivo con la casilla marcada, o una cuenta demo sin marcarla) es una razón común por la que la conexión falla aunque las credenciales sean correctas.

7. Opcionalmente, habilite **Connect on startup** si quiere que DeepCharts conecte esta fuente automáticamente cada vez que se abre la aplicación.

8. Deje todos los demás campos en sus valores predeterminados y haga clic en **Save**.

[SCREENSHOT: Formulario de conexión CQG completado mostrando Name, Feed Source=CQG, Username relleno, Use demo credentials sin marcar, Connect on startup visible, con el botón Save resaltado | dc-es-connect-cqg-02.png]

9. De vuelta en la barra principal, haga clic en **Select Connection** y haga clic en su nueva fuente CQG. El punto de conexión debería ponerse verde en unos 10 segundos.

[SCREENSHOT: Menú desplegable Select Connection mostrando la nueva fuente CQG con un punto de estado verde | dc-es-connect-cqg-03.png]

10. Abra **Options → Symbol Manage** y dirija las bolsas en las que opera a esta fuente CQG. Este paso es obligatorio: sin él, los gráficos no muestran datos. Pruebe la maqueta interactiva de abajo: haga clic en el icono de cadena de una fila para cambiar su fuente. Consulte [[symbol-manage]] para la guía completa.

[WIDGET: symbol-manage-mock]

11. Abra un gráfico para confirmar que los datos fluyen — consulte [[first-chart]].

### Si tiene una cuenta CQG de una empresa prop

Las cuentas CQG de empresas prop funcionan solo cuando la firma emite la cuenta directamente desde CQG. Si su empresa prop entrega CQG a través de Tradovate o NinjaTrader, esa cuenta no puede conectarse a DeepCharts: necesitaría la cuenta Rithmic o dxFeed de la firma. Por ejemplo, Goat Funded Futures ofrece CQG a través de otra plataforma, por lo que solo su cuenta dxFeed funciona con DeepCharts.

### Si planea usar intensamente indicadores de flujo de órdenes

CQG no proporciona datos MBO (market-by-order) y, aunque proporciona profundidad de mercado completa para ES, no proporciona profundidad completa para NQ. Si la calidad de los datos por orden importa para su flujo de trabajo (los indicadores Deep de flujo de órdenes, por ejemplo), considere en su lugar una fuente Rithmic o dxFeed; consulte [[connect-rithmic]] y [[connect-dxfeed]].

## Verifique que funcionó

- El punto de estado junto a su conexión CQG está verde.
- Un gráfico de una bolsa que dirigió en **Symbol Manage** muestra precios en vivo y en movimiento.

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| Punto rojo, error de nombre de usuario/contraseña | Vuelva a comprobar las credenciales y verifique que la casilla **Use demo credentials** coincida con su tipo de cuenta — consulte [[fix-username-password]] |
| Punto rojo, no se puede establecer la conexión | El firewall o la red está bloqueando CQG — consulte [[fix-unable-to-establish-connection]] |
| Punto verde pero el gráfico está congelado o vacío | La bolsa no está dirigida a esta fuente — consulte [[feed-connected-chart-not-moving]] y [[symbol-manage]] |

## Artículos relacionados

- [[compatibility-guide]]
- [[connect-data-feed]]
- [[symbol-manage]]
- [[connect-rithmic]]
- [[manage-feed-connections]]
- [[feed-connected-chart-not-moving]]