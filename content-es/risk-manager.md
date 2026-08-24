---
title: "Gestor de riesgos"
slug: "risk-manager"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "15 min to complete"
description: "Configure límites automáticos de pérdida/ganancia diaria, drawdown dinámico y reglas de horario de trading que bloquean la cuenta al incumplirse."
keywords: ["gestor de riesgos", "gestión monetaria", "límite de pérdida diaria", "límite de ganancia diaria", "trailing drawdown", "trailing stop", "bloqueo", "cuenta bloqueada", "desbloquear cuenta", "límite de horario de trading", "exclude not listed"]
source_hash: "369e7a3781da2d98"
ai_translated: true
source_hash: "369e7a3781da2d98"
---
Al final tendrá reglas de riesgo automatizadas en una cuenta — límites diarios de pérdida y ganancia, un drawdown dinámico opcional, horario de trading y una lista de símbolos permitidos — que pausan o cierran la cuenta en el momento en que se incumple una regla, de modo que la decisión de parar se toma antes del tilt, no durante él.

El gestor de riesgos vive dentro de la ventana Portfolio y funciona en cualquier cuenta conectada, incluida la SIM.

> **Advertencia:** El gestor de riesgos opera en el lado del cliente: se ejecuta dentro de DeepCharts en su PC. Si la plataforma está cerrada, las reglas no se aplican. Trátelo como una herramienta de disciplina, no como una garantía.

## Antes de empezar

- Una cuenta de fuente de datos/bróker conectada: [[connect-data-feed]]
- Saber moverse por la ventana Portfolio: [[portfolio-wallet]]
- Una cuenta SIM en la que probar las reglas antes de confiarlas en vivo: [[simulation-accounts]]

## Pasos

### Abra la configuración de riesgo

1. Haga clic en **Trading → Show Portfolio** en la barra principal.

2. Encuentre la tarjeta de la conexión o cuenta que quiere proteger. Las reglas pueden configurarse en cualquiera de los dos niveles: a nivel de conexión o por cuenta.

3. Haga clic en el botón **Settings** de esa tarjeta. Se abrirá la configuración de gestión monetaria.

[SCREENSHOT: La ventana Portfolio con una tarjeta de conexión visible y el botón Settings resaltado, a punto de abrir la configuración de gestión de riesgos | dc-es-risk-manager-01.png]

4. Active **Enable**: el interruptor maestro que activa el gestor monetario para este ámbito.

### Establezca sus límites diarios

5. Bajo **Daily Loss Limit** (límite de pérdida diaria), active **Enable**, introduzca el **Value** y elija la **Unit**: dinero (**$**) o porcentaje (**%**). Cuando la pérdida diaria supere este valor, se dispara la acción configurada.

6. Bajo **Daily Profit Limit** (límite de ganancia diaria), haga lo mismo. Opcionalmente active **Include Open Position**: con esta opción habilitada, las operaciones abiertas se cierran en el momento en que se alcanza el límite, contando la ganancia no realizada hacia el límite.

[SCREENSHOT: El diálogo de configuración de riesgo mostrando las secciones Daily Loss Limit y Daily Profit Limit, cada una con el interruptor Enable, el campo Value y el selector de unidad $/%, y la opción Include Open Position en el límite de ganancia | dc-es-risk-manager-02.png]

> **Nota:** ¿Por qué un límite de ganancia? Las reglas de las empresas prop a menudo limitan las ganancias diarias, y muchos traders devuelven por la tarde una mañana en verde. Un límite de ganancia asegura el día.

### Si quiere un drawdown dinámico

7. Bajo **Trailing Stop** (drawdown dinámico diario), active **Enable** y establezca el **Value** y la **Unit** ($ o %).

8. Elija la **Action** que se dispara al incumplirse:
   - **Daily Pause**: bloquea la cuenta durante el resto de la sesión.
   - **Time Pause**: bloquea la cuenta durante el número de minutos que usted seleccione.
   - **Flat**: cierra las posiciones sin bloquear la cuenta.

9. Opcionalmente habilite **Include Open Position** para que la regla dinámica también vigile el PnL no realizado: si las ganancias abiertas retroceden más allá del límite, la acción se dispara.

> **Nota:** Esta regla dinámica es el motor propio de DeepCharts. No lee ni replica la métrica oficial de trailing drawdown de su empresa prop: cada firma calcula sus propias reglas en su propio lado. Úsela como una aproximación independiente de autodisciplina, no como un monitor de la cifra de la firma.

### Si quiere límites de cartera y por posición

10. **Portfolio Loss Limit / Portfolio Profit Limit**: el mismo patrón de habilitación/acción/valor/unidad, aplicado al resultado combinado de todas las posiciones abiertas juntas (por ejemplo, ES + NQ como un solo número).

11. **Position Loss Limit / Position Profit Limit**: umbrales por operación. Una posición que supera su límite de pérdida se cierra automáticamente y a continuación se dispara la acción configurada.

### Si quiere restringir cuándo y qué opera

12. Bajo **Limit Trading Hours**, establezca la ventana de **Begin Time** y **End Time**. La hora se basa en la **zona horaria EST**, independientemente de la zona horaria de su PC o del gráfico.

13. Active **Symbol – Exclude Not Listed** para bloquear todos los símbolos que no haya permitido explícitamente, y luego use **Add Symbol** para construir la lista de permitidos. Uso típico: permitir solo contratos Micro para que un clic erróneo nunca pueda abrir una posición en un Mini.

[SCREENSHOT: El diálogo de configuración de riesgo desplazado hasta Limit Trading Hours con los campos de hora Begin/End y el interruptor Symbol – Exclude Not Listed con la lista Add Symbol debajo | dc-es-risk-manager-03.png]

### Si quiere proteger las reglas de usted mismo

14. Active **Inhibit Changes Until Next Session**. Cualquier edición de la configuración de riesgo solo surte efecto a partir del siguiente día de trading, de modo que no puede subir su propio límite de pérdida en pleno tilt.

## Verifique que funcionó

Pruebe en SIM antes de confiar en ello en vivo: establezca un **Daily Loss Limit** pequeño en una cuenta SIM, realice una operación perdedora que supere el límite y observe cómo la tarjeta de la cuenta en la ventana Portfolio cambia a **Lockout** con un temporizador de cuenta atrás. Ese estado es la prueba observable de que el motor de reglas está armado y aplicándose.

[SCREENSHOT: Una tarjeta de cuenta del Portfolio mostrando el estado Lockout con el temporizador de cuenta atrás tras dispararse una regla de riesgo | dc-es-risk-manager-04.png]

## Si algo salió mal

- **"Mi cuenta está bloqueada — desbloquéenme"**: una cuenta bloqueada se desbloquea automáticamente a las **18:00 EST** (el reinicio de sesión del CME). La única forma de desbloquearla antes es que el equipo de soporte de DeepCharts lo haga desde el backend, lo que lleva tiempo: vea [[get-help]].
- **"Cambié mis límites pero nada cambió"**: **Inhibit Changes Until Next Session** está activado; las ediciones se aplican el siguiente día de trading por diseño.
- **"No puedo operar en algún símbolo"**: **Symbol – Exclude Not Listed** está habilitado y el símbolo no está en la lista de permitidos, o usted está fuera del horario de trading configurado (recuerde: EST, no hora local).
- **"¿Por qué cerró mi operación ganadora?"**: un límite de ganancia con **Include Open Position** cuenta el PnL no realizado y cierra al dispararse.
- **"El gestor de riesgos no me detuvo ayer"**: ¿estaba DeepCharts en ejecución? Es del lado del cliente: plataforma cerrada significa ninguna aplicación de reglas. Confirme también que la regla estaba **habilitada** y configurada en el nivel correcto (conexión frente a cuenta).
- **Los reinicios parecen ocurrir a una hora extraña**: todos los reinicios y las reglas de horario de trading siguen EST (zona horaria del CME). Para los traders de Europa y Asia esa es la fuente de confusión más común.

## Artículos relacionados

- [[portfolio-wallet]]
- [[trading-panel-reference]]
- [[simulation-accounts]]
- [[oco-strategies]]
- [[get-help]]