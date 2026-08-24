---
title: "Conectar Rithmic mediante el plugin de RTrader Pro"
slug: "rtrader-pro-plugin"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Ejecute R Trader Pro como pasarela de datos para que DeepCharts y otras plataformas compartan una cuenta Rithmic al mismo tiempo sin conflictos de sesión."
keywords: ["plugin rtrader pro", "r trader pro", "usar r trader", "compartir cuenta rithmic", "modo plugin rithmic", "ejecutar rtrader y deepcharts juntos", "punto amarillo rithmic"]
source_hash: "5ee0ebd67a97bbd4"
ai_translated: true
source_hash: "5ee0ebd67a97bbd4"
---
Al final de esta guía, DeepCharts recibirá sus datos de Rithmic a través de R Trader Pro ejecutándose en segundo plano, lo que permite que R Trader Pro, DeepCharts y otras aplicaciones conectadas a Rithmic compartan un mismo inicio de sesión de Rithmic al mismo tiempo sin conflictos de sesión.

En este modo, R Trader Pro funciona como una pasarela de datos: mantiene la conexión con Rithmic, extrae los datos en vivo y los alimenta a DeepCharts. Esta es también la única forma de compartir una única fuente de Rithmic con aplicaciones ajenas a DeepCharts (las fuentes de dxFeed no pueden compartirse en absoluto con aplicaciones de terceros).

> **Nota:** Si solo usa DeepCharts y no necesita R Trader Pro ejecutándose a la vez, use en su lugar la conexión directa estándar: vea [[connect-rithmic]]. La ruta del plugin añade una pieza móvil: R Trader Pro debe permanecer abierto durante toda la sesión.

## Antes de empezar

- [ ] Su nombre de usuario y contraseña de Rithmic a mano: vea [[connect-rithmic]] para saber de dónde provienen las credenciales
- [ ] El acuerdo de datos de mercado de Rithmic firmado: vea [[sign-market-data-agreement]]
- [ ] R Trader Pro instalado (descárguelo de https://www.rithmic.com/rtraderpro mediante el botón **Download R | Trader Pro**)
- [ ] Conocer el valor de Server de su cuenta: **Rithmic Paper Trading** para fuentes de datos directas, o la entrada de su empresa prop en la tabla de [[connect-rithmic-prop-firm]]

## Pasos

### Parte A: configurar R Trader Pro

1. Abra R Trader Pro. Verá dos formularios de inicio de sesión uno junto al otro: rellene **ambos** con los mismos valores: su nombre de usuario y contraseña de Rithmic, **System** = el valor de servidor de su cuenta (por ejemplo **Rithmic Paper Trading**) y el **Gateway** más cercano a usted.

2. Antes de iniciar sesión, habilite el interruptor **Allow Plugins** en el formulario de inicio de sesión. Este es el interruptor que permite a DeepCharts acoplarse a R Trader Pro: sin él, la conexión de DeepCharts permanece en amarillo y nunca pasa a verde.

[SCREENSHOT: Pantalla de inicio de sesión de R Trader Pro con ambos formularios rellenados de forma idéntica y el interruptor Allow Plugins habilitado y resaltado | dc-es-rtrader-pro-plugin-01.png]

3. Haga clic en **Login** y deje R Trader Pro ejecutándose en segundo plano.

4. Elimine los límites de recepción de datos de Rithmic: abra **Window → Preferences** y vaya a la pestaña **Performance**. Bajo **Max Market Data Updates/Second**, arrastre los deslizadores de **Quotes** y **Order Book** al máximo (**No Max**), confirme que la casilla **Adjust to keep up with market data inflow** está habilitada y luego haga clic en **Apply** y **OK**.

[SCREENSHOT: Ventana Preferences de R Trader Pro, pestaña Performance, con los deslizadores Quotes y Order Book en No Max y la casilla "Adjust to keep up with market data inflow" marcada | dc-es-rtrader-pro-plugin-02.png]

> **Advertencia:** Mantenga los deslizadores al máximo de forma permanente. Con un límite más bajo establecido, Rithmic restringe cuántos datos le llegan por segundo, y los gráficos se quedan atrás durante periodos de alta volatilidad cuando la entrada de datos se dispara.

### Parte B: configurar DeepCharts

5. En DeepCharts, haga clic en **Select Connection** en la barra de herramientas superior y luego en **Feed Settings** en la parte inferior del menú desplegable.

6. Haga clic en **Add Connection**.

7. Bajo **Feed Source**, seleccione **Rithmic RAPI**. La ruta del plugin solo funciona con esta fuente, no con **Rithmic Wss - beta**.

8. Introduzca el mismo nombre de usuario y contraseña de Rithmic y seleccione el **mismo Server y Gateway** que usó en R Trader Pro. Las dos aplicaciones deben coincidir exactamente: una discrepancia impide que el enlace del plugin se establezca.

9. Habilite la opción **Use R|Trader** en el formulario de conexión (algunas versiones la etiquetan como **Use RTrader Pro Plugin**, en la sección Advanced).

[SCREENSHOT: Diálogo Feed Settings de DeepCharts con Feed Source=Rithmic RAPI, Server y Gateway coincidiendo con R Trader Pro, y la opción Use R|Trader habilitada y resaltada | dc-es-rtrader-pro-plugin-03.png]

10. Haga clic en **Save** y luego conecte la fuente desde el menú desplegable **Select Connection**.

> **Advertencia:** Mantenga R Trader Pro abierto todo el tiempo que use DeepCharts en este modo. Cerrar R Trader Pro termina la conexión de datos al instante.

## Verifique que funcionó

- El indicador de conexión de DeepCharts se pone **verde** (un punto **amarillo** persistente significa que R Trader Pro no está en ejecución, que se inició sesión sin **Allow Plugins**, o que los valores de Server/Gateway no coinciden).
- Abra un gráfico mediante **New → Price Chart**: el precio se actualiza en vivo.
- R Trader Pro sigue ejecutándose en segundo plano.

[SCREENSHOT: DeepCharts con un punto de conexión verde y un gráfico en vivo, con R Trader Pro visible ejecutándose en segundo plano | dc-es-rtrader-pro-plugin-04.png]

## Si algo salió mal

| Síntoma | A dónde ir |
|---|---|
| El punto sigue amarillo, "Expert not attached" | [[fix-rithmic-expert-not-attached]]: R Trader Pro no está en ejecución o los plugins no están permitidos |
| Un mensaje le pide iniciar sesión usando R Trader o R Trader Pro | [[fix-log-in-using-rtrader]] |
| Conexión fallida: compruebe el nombre de usuario y la contraseña | [[fix-username-password]] |
| Conexión fallida: servidor incorrecto | [[fix-bad-server]]: recuerde que el Server debe coincidir exactamente con R Trader Pro |
| Los gráficos se retrasan en mercados movidos | [[data-delayed-lagging]]: vuelva a comprobar que los deslizadores de Performance están en No Max |
| El punto está verde pero los gráficos no se mueven | [[feed-connected-chart-not-moving]]: revise su enrutamiento en [[symbol-manage]] |

## Artículos relacionados

- [[connect-rithmic]]
- [[connect-rithmic-prop-firm]]
- [[sign-market-data-agreement]]
- [[fix-rithmic-expert-not-attached]]
- [[fix-log-in-using-rtrader]]
- [[data-delayed-lagging]]