---
title: "Firme su acuerdo de datos de mercado"
slug: "sign-market-data-agreement"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Dónde y cómo firmar el acuerdo de datos de mercado para cada tipo de cuenta: requerido antes de que cualquier fuente de datos en vivo pueda conectarse."
keywords: ["acuerdo de datos de mercado", "firmar acuerdo", "firmar contrato de datos de mercado", "r trader pro", "rtrader", "acuerdo no firmado", "credenciales ocultas", "conexión en rojo"]
source_hash: "b68777438df50abd"
ai_translated: true
source_hash: "b68777438df50abd"
---
Al terminar tendrá firmado el acuerdo de datos de mercado de su cuenta, que es la condición previa para cualquier conexión de fuente de datos en vivo. Las bolsas exigen que todo suscriptor de datos acepte un acuerdo de datos de mercado, y hasta que el suyo esté firmado el punto de conexión en DeepCharts permanece rojo, incluso con credenciales perfectamente correctas. Dónde se firma depende por completo de dónde proviene su cuenta, así que localice su caso a continuación.

## Antes de empezar

- Sepa de dónde proviene su cuenta de fuente de datos (sitio web de DeepCharts, empresa prop, bróker, dxfeed.com); si no está seguro, consulte [[compatibility-guide]].
- Tenga a mano sus credenciales de la fuente de datos para la ruta de Rithmic (el nombre de usuario y la contraseña de Rithmic del correo de bienvenida de su proveedor, no el inicio de sesión del sitio web del proveedor).

## Pasos

1. Encuentre la sección de abajo que corresponda al origen de su cuenta y sígala. Las reglas en una línea: dxFeed comprado en el sitio web de DeepCharts se firma en el panel de DeepCharts; toda cuenta Rithmic, sin importar quién la emitió, se firma dentro de R Trader Pro; dxFeed comprado en dxfeed.com se firma en el sitio de dxFeed; el dxFeed de una empresa prop se firma en el panel de la empresa prop.

### Si compró dxFeed en el sitio web de DeepCharts

1. Inicie sesión en su cuenta en el sitio web de DeepCharts y abra la página **Subscriptions**.
2. Localice su suscripción de dxFeed y haga clic en **Sign Market Data Contract** junto a ella.
3. Lea y acepte el acuerdo. Su nombre de usuario y contraseña de la fuente de datos permanecen ocultos en el panel hasta que el acuerdo esté firmado; una vez que firme, se vuelven visibles. Anótelos para [[connect-dxfeed|el paso de conexión]].

[SCREENSHOT: Página Subscriptions del panel de DeepCharts con una fila de suscripción de dxFeed y el botón Sign Market Data Contract resaltado | dc-es-sign-market-data-agreement-01.png]

### Si tiene cualquier cuenta Rithmic (empresa prop, bróker o compra en el sitio web)

Todos los acuerdos de Rithmic se firman dentro de R Trader Pro, la propia aplicación de Rithmic, porque así es como Rithmic gestiona su flujo de firma. Esto aplica por igual a las cuentas de empresas prop (Apex, TradeFundrr y las demás), las cuentas de bróker (AMP, EdgeClear...), las suscripciones de Rithmic compradas en el sitio web de DeepCharts y las credenciales de Rithmic emitidas a través de una plataforma de terceros.

1. Si aún no tiene R Trader Pro, descárguelo desde https://www.rithmic.com/rtraderpro haciendo clic en el botón **Download R | Trader Pro**, y luego instálelo con las opciones predeterminadas.
2. Abra **R Trader Pro**. La pantalla de inicio de sesión muestra dos formularios de inicio de sesión uno junto al otro: esto es normal. Rellene ambos formularios con las mismas credenciales y las mismas selecciones.
3. En cada formulario establezca:
   - **System**: el nombre del servidor de su proveedor: la entrada de la empresa prop (por ejemplo Apex), **Rithmic 01** para cuentas de bróker, o **Rithmic Paper Trading** para las fuentes de datos compradas en el sitio web, las credenciales emitidas por terceros y cualquier empresa prop cuyo nombre no esté en la lista. Los valores por proveedor están en [[compatibility-guide]].
   - **Gateway**: la ubicación más cercana a usted (Chicago, Europa, Singapur...). Un gateway lejano funciona pero añade latencia.
   - **Username / Password**: las credenciales de Rithmic del correo de bienvenida de su proveedor.

[SCREENSHOT: Pantalla de inicio de sesión de R Trader Pro mostrando los dos formularios de inicio de sesión uno junto al otro, ambos rellenados, con el menú desplegable System abierto en la lista de servidores de empresas prop | dc-es-sign-market-data-agreement-02.png]

4. Haga clic en **Login**. R Trader Pro le mostrará el acuerdo de datos de mercado: léalo y acéptelo.

[SCREENSHOT: Aviso del acuerdo de datos de mercado de R Trader Pro mostrado tras el inicio de sesión, con la acción de aceptar visible | dc-es-sign-market-data-agreement-03.png]

5. Cierre R Trader Pro. El acuerdo queda ahora registrado en el lado de Rithmic y ya puede conectarse en DeepCharts.

> **Consejo:** Mientras está en R Trader Pro por primera vez, abra **Window → Preferences → Performance** y arrastre ambos deslizadores, **Quotes** y **Order Book**, al máximo, y luego haga clic en **Apply** y **OK**. Esto elimina el límite de recepción de datos de Rithmic, que de otro modo puede retrasar sus gráficos durante los periodos de mercado de alto volumen.

> **Nota:** El campo **System** y el campo **Server** son campos distintos, y ambos pueden contener valores como "Apex" y "Paper Trading". Para firmar el acuerdo, el valor descrito arriba va en el campo System. Si cerró R Trader Pro antes de que apareciera el aviso del acuerdo, vuelva a iniciar sesión: el aviso reaparecerá.

### Si compró dxFeed en dxfeed.com

Inicie sesión en dxfeed.com, localice su suscripción y acepte allí el acuerdo de datos de mercado. Asegúrese de que DeepCharts sea su plataforma seleccionada: las credenciales emitidas para otra plataforma no se conectarán (consulte [[compatibility-guide]]).

### Si tiene una cuenta dxFeed de empresa prop (MFF, Aqua, Goat y similares)

1. Inicie sesión en el panel de su empresa prop y busque un botón o enlace para firmar el acuerdo de datos de mercado.
2. Si no está en el panel, revise el correo que la empresa envió cuando se emitió su cuenta.
3. Si aun así no lo encuentra, contacte con el soporte de la empresa prop: solo ellos pueden reenviar el enlace de firma.

### Si usa la fuente de datos retrasada gratuita o CQG

Aquí no se necesita ningún paso de firma. La [[free-delayed-data-feed|fuente de datos retrasada 15 minutos]] integrada no requiere acuerdo alguno, y las cuentas de CQG no tienen un paso de firma separado en este flujo: puede ir directamente a [[connect-cqg|la conexión]].

## Verifique que funcionó

- **Sitio web de DeepCharts (dxFeed):** su nombre de usuario y contraseña ahora son visibles en la página Subscriptions.
- **Rithmic:** iniciar sesión en R Trader Pro ya no le muestra el acuerdo, y su conexión en DeepCharts puede ponerse en verde.
- **Todos los casos:** la prueba real es [[connect-data-feed|conectar la fuente de datos]]: un acuerdo sin firmar es una de las razones principales por las que una conexión permanece en rojo.

## Si algo salió mal

| Síntoma | Consulte |
|---|---|
| La conexión permanece en rojo aunque las credenciales son correctas | El acuerdo probablemente no está firmado para su tipo de cuenta: repita la sección correspondiente de arriba |
| Error de Rithmic pidiéndole iniciar sesión con R Trader | [[fix-log-in-using-rtrader]] |
| Error de dxFeed DATA_ACCESS_SUSPENDED | [[fix-data-access-suspended]] |
| Credenciales rechazadas en R Trader Pro | Puede estar usando el inicio de sesión del sitio web del proveedor: consulte [[fix-username-password]] |

## Artículos relacionados

- [[connect-data-feed]]
- [[compatibility-guide]]
- [[connect-dxfeed]]
- [[connect-rithmic]]
- [[connect-rithmic-prop-firm]]
- [[buy-data-feed]]