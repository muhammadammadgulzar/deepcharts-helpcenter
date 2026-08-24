---
title: "Competición de DeepCharts: únase y conéctese"
slug: "competition-connect"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Únase a una competición de trading de DeepCharts y conecte la cuenta de concurso V-Sim junto con su fuente de datos."
keywords: ["competición", "concurso", "campeonato", "V-Sim", "vsim", "unirse a la competición", "credenciales del concurso", "concurso de trading", "restablecer cuenta"]
source_hash: "0c0a82d9c4fe0416"
ai_translated: true
source_hash: "0c0a82d9c4fe0416"
---
Al terminar, se habrá unido a una competición de DeepCharts y estará operando en su cuenta de concurso con gráficos en vivo. DeepCharts organiza competiciones de trading periódicamente; las cuentas de concurso funcionan con la fuente **V-Sim**, que es de **solo ejecución**: coloca sus operaciones del concurso pero no transporta datos de mercado. Por eso conecta dos cosas a la vez: la cuenta de concurso para las operaciones y su propia fuente de datos para los gráficos.

Como V-Sim ejecuta las operaciones contra condiciones de mercado en tiempo real, la fuente gratuita con 15 minutos de retraso no es compatible con las competiciones: necesita una conexión en vivo de Rithmic o dxFeed.

## Antes de empezar

- Una licencia activa de la plataforma DeepCharts — [[install-deepcharts]]
- Una fuente de datos en vivo (Rithmic o dxFeed) conectada y funcionando — [[connect-data-feed]] (la fuente con retraso de [[free-delayed-data-feed]] no cumple el requisito)
- Una cuenta del sitio web de DeepCharts para registrarse en el concurso

## Pasos

1. Vaya a `my.deepcharts.com` e inicie sesión en su panel.

2. Seleccione **Contest** en la barra lateral.

[SCREENSHOT: Panel de DeepCharts con la entrada Contest resaltada en la barra lateral y una tarjeta de competición activa visible | dc-es-competition-connect-01.png]

3. Localice la competición activa y haga clic en **Join Competition**. Puede revisar primero las reglas de la competición mediante el enlace de reglas de la misma página.

4. Confirme el aviso y, a continuación, actualice la página del navegador.

5. Haga clic en **See Credentials**. Anote los cuatro valores mostrados: **Username**, **Password**, **Feed Source** (V-Sim) y su **Account ID** de la competición.

[SCREENSHOT: Página del concurso después de unirse, mostrando el botón See Credentials y el panel de credenciales con el nombre de usuario, la contraseña, la fuente V-Sim y el ID de cuenta visibles (valores ocultos) | dc-es-competition-connect-02.png]

> **Nota:** Las credenciales aparecen solo cuando la competición ha comenzado. Si se registró pero aún no ve credenciales, espere a la fecha de inicio.

6. En DeepCharts, haga clic en **Select Connection** → **Feed Settings** y, a continuación, haga clic en **Add Connection**.

7. Complete el formulario:
   - **Name**: cualquier etiqueta, por ejemplo "Concurso".
   - **Feed Source**: seleccione **V-Sim**. Este es el campo crítico; V-Sim aparece en el mismo menú desplegable que Rithmic y dxFeed.
   - **Username** y **Password**: del panel de credenciales del paso 5.

[SCREENSHOT: Diálogo Feed Settings con Feed Source configurado en V-Sim y el nombre de usuario del concurso introducido | dc-es-competition-connect-03.png]

8. Haga clic en **Save** y cierre la ventana Feed Settings.

9. En **Select Connection**, conecte la fuente del concurso y asegúrese de que su fuente de datos esté **también** conectada. Ambas deben mostrar puntos verdes al mismo tiempo; puede mantener varias conexiones simultáneamente (consulte [[manage-feed-connections]]).

[SCREENSHOT: Menú desplegable Select Connection con la conexión del concurso V-Sim y una conexión de fuente de datos en vivo mostrando puntos verdes | dc-es-competition-connect-04.png]

10. Abra **Options → Symbol Manage** y confirme que cada bolsa está dirigida a su **fuente de datos, no a la cuenta de concurso V-Sim**. Si Symbol Manage apunta a V-Sim, los gráficos no muestran datos porque la cuenta de concurso no transporta ninguno. Pruebe la maqueta interactiva de abajo: haga clic en el icono de cadena de una fila para alternar su fuente asignada. Consulte [[symbol-manage]].

[WIDGET: symbol-manage-mock]

11. Abra un gráfico de precios. En el **Trading Panel** (a la derecha del gráfico), configure el campo **Broker** en **V-Sim** y elija su cuenta de la competición en el menú desplegable. El saldo inicial muestra $50,000. Explore el panel en la maqueta interactiva de abajo: pase el cursor sobre cualquier botón para ver qué hace y haga clic en la posición SIM para ver el P/L en vivo:

[WIDGET: trading-panel-mock]

### Si quiere restablecer su cuenta

Desde la página Contest del panel, haga clic en **Reset Account** y confirme. Su saldo vuelve a $50,000. Se le permite **un restablecimiento**, y solo durante la **primera semana** de la competición; después de eso la opción desaparece, así que úselo de forma deliberada.

### Si no hay ninguna competición abierta

La página Contest muestra un botón **Join Competition** solo mientras las inscripciones están abiertas. Si no aparece nada, vuelva a comprobarlo más tarde: las competiciones se organizan periódicamente.

## Verifique que funcionó

- Tanto la conexión del concurso V-Sim como su fuente de datos muestran puntos verdes.
- Los gráficos se actualizan en vivo desde su fuente de datos.
- El Trading Panel muestra el bróker V-Sim, su cuenta de la competición y el saldo de $50,000.

## Reglas de la competición

Las reglas de cada competición se publican en la página Contest: revíselas antes de operar. Las competiciones recientes usaron estas reglas:

| Regla | Valor |
|---|---|
| Tipo de cuenta | Solo demo simulada (sin dinero real) |
| Elegibilidad para el ranking | Mínimo 3 días de trading activos |
| Límite de pérdida diaria | 3% del saldo de la cuenta |
| Límite de beneficio diario | 10% del saldo de la cuenta |
| Posición máxima | 5 contratos mini a la vez |
| Posiciones nocturnas | Prohibidas: se cierran automáticamente al cierre del mercado |
| Restablecimientos | 1 restablecimiento, solo la primera semana |

Se requieren una licencia de plataforma activa y una fuente de datos en vivo durante toda la competición. Los detalles de los premios de cada competición se indican en la página Contest.

## Si algo salió mal

- **Los gráficos no muestran datos**: Symbol Manage apunta a la cuenta V-Sim en lugar de a su fuente de datos, o la fuente de datos no está conectada. Vuelva a dirigirlas en [[symbol-manage]] y compruebe que ambos puntos estén verdes.
- **No aparece el botón See Credentials**: la competición aún no ha comenzado, o se registró sin completar la confirmación de unión. Compruebe que la página Contest le muestra como unido.
- **La conexión del concurso sigue en rojo**: vuelva a copiar el nombre de usuario y la contraseña exactamente desde el panel de credenciales; consulte [[fix-username-password]].
- Cualquier otra cosa: consulte [[get-help]].

## Artículos relacionados

- [[connect-data-feed]]
- [[connect-rithmic]]
- [[connect-dxfeed]]
- [[symbol-manage]]
- [[manage-feed-connections]]
- [[trading-panel-reference]]