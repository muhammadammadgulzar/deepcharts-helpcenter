---
title: "Administrar y cambiar entre conexiones de fuente de datos"
slug: "manage-feed-connections"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Guarde varias conexiones de fuente de datos, cambie entre ellas, ejecute varias a la vez, conéctese automáticamente al iniciar y elimine las antiguas."
keywords: ["cambiar fuente de datos", "múltiples fuentes", "selector de fuente", "conectar al iniciar", "conexión automática", "eliminar conexión", "dos fuentes de datos", "cambiar feed de datos"]
source_hash: "a14e53ecaf210621"
ai_translated: true
source_hash: "a14e53ecaf210621"
---
Al final podrá mantener varias conexiones de fuente de datos guardadas en DeepCharts, cambiar entre ellas, ejecutar más de una al mismo tiempo, conectar automáticamente su fuente principal al iniciar y eliminar las conexiones que ya no necesite.

DeepCharts almacena cada conexión que crea en **Feed Settings** (Configuración de fuentes) como un perfil guardado independiente. Todas aparecen en el selector de fuentes de la barra principal, y el punto de estado junto a cada una le indica de un vistazo su estado de conexión. Lo esencial que debe tener presente en todo momento: qué fuente utiliza realmente un gráfico lo decide el enrutamiento de **Symbol Manage**, no cuál fue la fuente que conectó más recientemente.

## Antes de empezar

- Al menos una conexión de fuente de datos que funcione — [[connect-data-feed]]
- Si planea combinar fuentes, compruebe para qué sirve cada una — [[compatibility-guide]]

## Pasos

### Leer el selector de fuentes

1. Observe el control **Select Connection** en la barra principal. Muestra sus conexiones y un punto de estado para cada una: verde significa conectada.

[SCREENSHOT: Barra principal de DeepCharts con el menú desplegable Select Connection abierto, listando varias conexiones guardadas, una con punto verde y las demás desconectadas | dc-es-manage-feed-connections-01.png]

> **Nota:** Un punto amarillo en una conexión Rithmic que usa el plugin R Trader significa que DeepCharts está esperando a R Trader: consulte [[rtrader-pro-plugin]].

### Añadir otra conexión

2. Haga clic en **Select Connection** → **Feed Settings**.

3. Haga clic en **Add Connection**, rellene el formulario de la nueva fuente y haga clic en **Save**. Cada fuente tiene sus propios campos obligatorios: pruébelo en la maqueta interactiva de Feed Settings a continuación: cambie el Feed Source y observe cómo cambian los campos, luego siga la guía correspondiente ([[connect-rithmic]], [[connect-dxfeed]], [[connect-cqg]], [[connect-interactive-brokers]], [[competition-connect]], [[end-of-day-data]]).

[WIDGET: feed-navigator]

Algunas fuentes exponen opciones de conveniencia adicionales en su formulario:

| Fuente | Opción | Qué hace |
|---|---|---|
| CQG | **Use demo credentials** | Inicia sesión con una cuenta demo de CQG en lugar de una real |
| CQG | **Connect on startup** | Conecta automáticamente esta fuente cuando DeepCharts se abre |
| Rithmic | **Include commissions** | Muestra las comisiones en el P/L (habilitado por defecto) |
| dxFeed | **DOM Type** | Datos de profundidad MBO o MBP: MBP es mucho más ligero en conexiones lentas |

### Cambiar a una fuente diferente

4. Haga clic en **Select Connection** y haga clic en la fuente que desee. Espere a que su punto se vuelva verde.

5. Abra **Options → Symbol Manage** y vuelva a apuntar sus bolsas a la fuente a la que cambió (icono de eslabón de cadena en cada fila de bolsa). Los gráficos siguen leyendo de la fuente a la que esté enrutada su bolsa: si esa fuente está ahora desconectada, no muestran datos. Haga clic en el icono de eslabón de cadena en la maqueta interactiva a continuación para ver el ciclo de fuentes. Consulte [[symbol-manage]].

[WIDGET: symbol-manage-mock]

6. Si un gráfico ya estaba abierto, puede actualizarse por sí solo en unos segundos. Si no, ciérrelo y vuelva a abrirlo para que cargue desde la fuente recién enrutada.

### Ejecutar varias fuentes a la vez

7. Conecte cada fuente desde **Select Connection**: puede mantener varias conexiones en verde simultáneamente.

8. En **Symbol Manage**, enrute cada bolsa a la fuente que deba servirla. Combinaciones típicas:
   - **Ejecución + datos**: IBKR o una cuenta de concurso V-Sim para las órdenes, Rithmic/dxFeed para los gráficos: enrute todas las bolsas a la fuente de datos ([[connect-interactive-brokers]], [[competition-connect]]).
   - **División por bolsa**: una fuente para CME, otra para COMEX: enrute cada bolsa a su propia fuente.

> **Advertencia:** En cualquier configuración multi-fuente, todas las fuentes implicadas deben estar conectadas (en verde) antes de abrir un gráfico. Si solo una está conectada, los gráficos de las bolsas enrutadas a la otra fuente no muestran datos aunque el enrutamiento sea correcto.

### Conexión automática al iniciar

9. En **Feed Settings**, abra su conexión principal y habilite **Connect on startup** si la opción está presente, luego haga clic en **Save**. DeepCharts conectará esa fuente automáticamente cada vez que se abra la aplicación. Esta opción se ha confirmado en el formulario de CQG; la disponibilidad exacta puede variar según la fuente. [CONFIRM: which feed sources besides CQG offer Connect on startup]

### Eliminar una conexión

10. En **Feed Settings**, seleccione la conexión y haga clic en **Remove**, luego en **Save**.

> **Advertencia:** Eliminar una conexión borra sus credenciales guardadas del formulario: tendrá que volver a introducirlas para recrearla. Revise también **Symbol Manage** después: las bolsas que estaban enrutadas a la fuente eliminada necesitan una nueva asignación de Data Feed o sus gráficos dejarán de cargar.

### Si también ejecuta DeepDom

DeepCharts y DeepDom comparten **un solo puente**: una única conexión de fuente de datos sirve a ambas aplicaciones al mismo tiempo, pero el puente no puede mantener dos configuraciones distintas. Introduzca la configuración de la fuente de forma **idéntica** en ambas aplicaciones. Si ejecuta ambas y una de ellas no se conecta, compruebe primero que la configuración de fuente de ambas aplicaciones coincide exactamente.

## Verifique que funcionó

- Cada fuente que pretende usar muestra un punto verde en **Select Connection**.
- Cada bolsa en **Symbol Manage** apunta a una fuente actualmente conectada.
- Los gráficos cargan y se mueven en todas las bolsas en las que opera.

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| La fuente no se conecta después de cambiar | Problema de credenciales o de servidor en ese perfil: consulte [[fix-username-password]] y [[fix-unable-to-establish-connection]] |
| Punto verde pero gráficos congelados tras un cambio | La bolsa sigue enrutada a la fuente antigua: consulte [[feed-connected-chart-not-moving]] |
| Una aplicación se conecta y la otra no (configuración con DeepDom) | La configuración de fuente difiere entre las aplicaciones: hágalas idénticas |
| La aplicación se bloquea al guardar una conexión | Consulte [[app-crashes-saving-feed]] |

## Artículos relacionados

- [[connect-data-feed]]
- [[symbol-manage]]
- [[compatibility-guide]]
- [[connect-cqg]]
- [[connect-interactive-brokers]]
- [[feed-connected-chart-not-moving]]