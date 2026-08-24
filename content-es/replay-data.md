---
title: "Reproducir datos de mercado"
slug: "replay-data"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Reproduzca datos de mercado grabados en un gráfico en cualquier fecha, hora y velocidad — practique y revise sesiones sin una fuente de datos en vivo."
keywords: ["reproducción", "reproducción de ticks", "reproducir datos de tick", "reproducción de mercado", "replay manage", "backtest", "practicar trading fin de semana", "la reproducción no arranca", "reproducir mis operaciones"]
source_hash: "ab08bc1dd5161e99"
ai_translated: true
source_hash: "ab08bc1dd5161e99"
---
Al final estará reproduciendo datos de mercado grabados en un gráfico — en la fecha, hora y velocidad de su elección — sin necesidad de una fuente de datos en vivo. La reproducción es la forma de practicar los fines de semana, revisar una sesión barra a barra o estudiar una operación pasada en condiciones reales de mercado.

La reproducción y una fuente de datos en vivo son mutuamente excluyentes: la plataforma reproduce datos de tick grabados en lugar de transmitir datos en vivo, así que debe desconectar la fuente de datos y cerrar sus gráficos antes de empezar.

## Antes de empezar

- DeepCharts instalado y activado: [[install-deepcharts]]
- Ninguna conexión de fuente de datos activa: el selector de fuente en la parte superior derecha no debe mostrar un punto verde de conexión; vea [[manage-feed-connections]]
- Todos los gráficos de precio abiertos cerrados
- Una idea aproximada de la bolsa y la fecha que quiere reproducir

## Pasos

1. Desconéctese de cualquier fuente de datos y cierre todos los gráficos de precio abiertos. La reproducción no arrancará mientras haya un gráfico abierto o una fuente conectada.

2. Abra **Options → Replay Tick Data**. Se abrirá la ventana **Replay Manage**.

[SCREENSHOT: Menú Options abierto en la barra principal con Replay Tick Data resaltado | dc-es-replay-data-01.png]

3. Pulse **Select Symbols** y elija la bolsa que quiere reproducir.

[SCREENSHOT: Ventana Replay Manage con la selección de bolsa/símbolo abierta y una bolsa elegida | dc-es-replay-data-02.png]

4. Haga clic en el icono de calendario, elija la fecha y la hora donde debe comenzar la reproducción y pulse **Set**.

[SCREENSHOT: Ventana Replay Manage con el selector de calendario abierto, una fecha y hora de inicio seleccionadas, y el botón Set visible | dc-es-replay-data-03.png]

5. Si quiere datos de profundidad de mercado durante la reproducción, habilite la opción de Level 2 en la ventana de reproducción mientras se cargan los datos: el Advanced DOM queda entonces utilizable durante la sesión. [CONFIRM: exact label and location of the Level 2 / DOM option in the Replay Manage window] Vea [[advanced-dom]].

6. Deje abierta la ventana **Replay Manage** y vuelva a la ventana principal. Abra un nuevo gráfico para esa bolsa mediante **New → Price Chart**: vea [[first-chart]].

7. Pulse **Play** en Replay Manage. El gráfico empieza a construir barras desde la fecha y hora seleccionadas.

[SCREENSHOT: Ventana Replay Manage durante la reproducción mostrando el control Play, la barra deslizante de velocidad y las opciones de velocidad predefinidas, con un gráfico reproduciéndose en segundo plano | dc-es-replay-data-04.png]

8. Ajuste el ritmo con la barra deslizante de velocidad o las opciones de velocidad predefinidas.

> **Advertencia:** Mantenga abierta la ventana Replay Manage durante toda la sesión. Cerrarla termina la reproducción.

> **Nota:** La reproducción no tiene configuración propia de indicadores ni de plantillas: Replay Manage controla únicamente la bolsa, la fecha/hora y la velocidad. Los gráficos abiertos durante la reproducción usan la misma plantilla de gráfico y lista de indicadores que sus gráficos en vivo. Si un indicador no deseado aparece en un gráfico de reproducción, proviene de la lista de indicadores del gráfico o de la plantilla guardada, no de la reproducción.

### Si quiere reproducir una de sus propias operaciones pasadas

No existe un botón de un solo clic para "reproducir mi operación", pero el flujo de trabajo es sencillo:

1. En un gráfico del instrumento que operó, haga clic derecho y habilite **Show Historical Orders** (Ctrl Alt H). Aparecerán flechas marcando sus entradas y salidas pasadas.
2. Anote las horas de entrada y salida a partir de las flechas.
3. Inicie una reproducción (pasos anteriores) en esa fecha y hora exactas y observe el mercado alrededor de su operación.

Para la parte estadística de la revisión de su trading, vea [[performance-analysis]].

### Si grafica un mini pero ejecuta en su micro

Reproducir el contrato mini es la opción recomendada y más precisa: los datos históricos de los micros en el servidor no son tan limpios como los de los minis, así que espere problemas de sincronización si los mezcla. Si aun así necesita un gráfico del mini con ejecución en el micro durante la reproducción, la solución alternativa es:

1. Conecte una fuente de datos en vivo.
2. Abra el gráfico del contrato micro desde la fecha del backtest: sus datos de tick se descargan de la fuente en vivo y se almacenan localmente. El progreso es visible en **Options → Show Log → Connection Logs**; los rangos grandes tardan un tiempo.
3. Una vez cargado, cierre el gráfico y desconecte la fuente de datos.
4. Abra Replay Manage, seleccione tanto el contrato mini como el micro, e inicie la reproducción.

## Verifique que funcionó

Tras pulsar **Play**, el gráfico dibuja nuevas barras a la velocidad elegida desde la hora de inicio seleccionada, y pausar o cambiar la velocidad en Replay Manage surte efecto de inmediato. Sus indicadores calculan sobre los datos reproducidos exactamente igual que lo harían en vivo.

## Si algo salió mal

- **Play no hace nada o la reproducción no arranca**: un gráfico de precio seguía abierto o una fuente de datos seguía conectada cuando abrió Replay Manage. Cierre todos los gráficos, desconecte la fuente y empiece de nuevo desde el paso 2.
- **El gráfico permanece vacío**: la fecha seleccionada no tiene datos grabados para esa bolsa. Elija otra fecha u otra bolsa en Replay Manage.
- **La reproducción se detuvo sola**: se cerró la ventana Replay Manage. Reabra **Options → Replay Tick Data** y configure la sesión de nuevo; mantenga la ventana abierta.
- **Un indicador que nunca añadió aparece en el gráfico de reproducción**: proviene de la plantilla guardada del gráfico o de su lista de indicadores (la reproducción no añade nada). Elimínelo mediante el administrador de indicadores del gráfico o cargue una plantilla limpia: vea [[templates-workspaces]].
- **Solo necesita revisión de fin de día, no reproducción de ticks**: la fuente Historical puede encajar mejor; vea [[end-of-day-data]].

## Artículos relacionados

- [[manage-feed-connections]]
- [[first-chart]]
- [[advanced-dom]]
- [[templates-workspaces]]
- [[performance-analysis]]
- [[simulation-accounts]]