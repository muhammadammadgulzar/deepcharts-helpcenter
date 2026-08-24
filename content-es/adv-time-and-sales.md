---
title: "Advanced Time And Sales (la cinta)"
slug: "adv-time-and-sales"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "12 min read"
description: "Lea la cinta de DeepCharts: impresiones operación por operación con colores de agresor, filtros por lado y los paneles inferiores de Bid/Ask, Delta y desequilibrio del libro."
keywords: ["time and sales", "cinta", "adv time and sales", "T&S", "time & sales", "lectura de cinta", "filas verdes y rosas", "filas grises", "panel delta", "desequilibrio del libro", "time and sales vacío"]
source_hash: "e4dea516bfb6e6e6"
ai_translated: true
source_hash: "e4dea516bfb6e6e6"
---
Advanced Time And Sales es la cinta de DeepCharts: una lista en vivo donde cada operación ejecutada aparece como una fila en el momento en que se imprime. Donde un gráfico comprime la actividad en barras, la cinta le muestra cada transacción individual: su hora, su tamaño y qué lado del mercado fue el agresor.

Este artículo cubre la ventana en sí: cómo abrirla, qué significan los colores de las filas, los tres paneles inferiores opcionales (Bid/Ask, Delta, desequilibrio del libro) y todos los ajustes de los diálogos **Chart Settings** y **TS Settings**.

## Qué es

La ventana responde a una pregunta: quién está operando ahora mismo, cuánto y a qué precio. Cada fila es una única impresión de operación con tres columnas: **Time** (Hora), **Volume** (Volumen) y **Price** (Precio). La celda de precio está codificada por color según dónde se ejecutó la operación, de modo que de un vistazo puede ver si los compradores están levantando el ask o los vendedores están golpeando el bid. Los paneles opcionales en la parte inferior de la ventana agregan esas impresiones en totales acumulados por lado, una barra de delta o una vista en vivo del libro de órdenes en reposo.

Si la lógica del lado agresor es nueva para usted (por qué una operación "en el ask" significa un comprador agresivo), lea primero [[orderflow-101]]: la cinta tiene mucho más sentido con ese modelo en mente.

## Cuándo usarla

- Confirmar si un movimiento rápido está respaldado por volumen agresivo real o por impresiones escasas.
- Observar la velocidad de ejecución y los tamaños de las impresiones alrededor de un nivel que le interese: combina bien con [[speed-of-tape]] y [[big-trades]].
- Monitorizar un solo lado (todas las compras o todas las ventas) con el filtro de lado de operación.
- Mantener un delta acumulado compacto o un recuento de volumen bid/ask sin abrir un gráfico completo.
- Vigilar la presión del libro en reposo con el panel de desequilibrio del libro mientras gestiona una entrada en el [[advanced-dom]].

## Inicio rápido

1. En la barra principal, abra **New → Adv. Time And Sales**.
2. En la ventana **Select Instrument** (Seleccionar instrumento), elija su instrumento (por ejemplo NQ) y confirme. Aquí solo aparecen las bolsas a las que se suscribió en [[symbol-manage]]: un selector vacío significa que todavía no hay nada suscrito.
3. La ventana de la cinta se abre y comienza a llenarse con impresiones en vivo.

[SCREENSHOT: El menú New abierto en la barra principal de DeepCharts con Adv. Time And Sales resaltado, y el diálogo Select Instrument visible con NQ seleccionado | dc-es-adv-time-and-sales-01.png]

> **Nota:** Una cinta recién abierta comienza vacía y se llena solo a medida que se imprimen nuevas operaciones. En el comportamiento verificado en video, las ventanas de Time And Sales duplicadas y nuevas no mostraron relleno histórico: en un mercado tranquilo la ventana puede permanecer escasa durante un tiempo. Esto parece ser intencional, aunque el comportamiento exacto de relleno es [CONFIRM: does a new/duplicated Adv. TS window intentionally load no trade history?].

## Anatomía de la ventana

[SCREENSHOT: Ventana completa de Adv. Time And Sales en NQ mostrando los iconos de la barra de título (logo, engranaje, enlace, minimizar, cerrar), el menú desplegable de símbolo a ancho completo, y una cinta mixta de celdas de precio verdes y rosas con números de volumen en azul | dc-es-adv-time-and-sales-02.png]

- **Barra de título**, de izquierda a derecha: el logo de DeepCharts, el icono de **engranaje** (el centro de configuración: todo vive aquí), el icono cuadrado de **enlace**, minimizar y cerrar. El icono de enlace no fue demostrado en nuestro material fuente; presumiblemente son los grupos de color estándar de enlace de ventanas (vea [[link-windows]]), pero el comportamiento exacto puede variar.
- **Menú desplegable de símbolo**: a ancho completo, directamente bajo la barra de título (por ejemplo NQ-202609). Cambiarlo pasa la cinta a otro instrumento.
- **La cinta**: columnas **Time | Volume | Price**. Las filas aparecen de arriba abajo a medida que se ejecutan operaciones. El volumen se imprime en texto azul.
- La ventana es libremente redimensionable; las columnas se estiran con ella.

## Cómo interpretarla

El fondo de la celda **Price** de cada fila codifica el lado agresor:

| Color | Significado |
|---|---|
| Verde | Operación ejecutada en el ask: agresor comprador |
| Rosa | Operación ejecutada en el bid: agresor vendedor |
| Gris | Sin confirmar: probablemente una operación ejecutada entre el bid y el ask (dentro del diferencial) |

La lectura del gris es una inferencia, no un hecho confirmado: los campos de color de **TS Settings** incluyen un fondo **Between Bid/Ask** que es gris por defecto, lo que sugiere firmemente que las filas grises son impresiones dentro del diferencial, pero está pendiente de confirmación, así que trátelo como probable en lugar de seguro. Los mismos conjuntos de color también incluyen fondos **Below Bid** y **Above Ask**, lo que significa que la cinta también puede distinguir impresiones fuera del diferencial cotizado; cuándo se activan esos coloreados es [CONFIRM: exact conditions for Below Bid / Above Ask row coloring].

Pruébelo en la cinta en vivo de abajo: pase el cursor sobre cualquier impresión para pausar la transmisión y ver por qué es verde o rosa, y cambie los filtros All/Ask/Bid para ver la cinta volverse de un solo color.

[WIDGET: tape-lab]

Una cinta que de repente es toda de un color normalmente no es el mercado: es el filtro de lado de operación (sección siguiente).

## El menú del engranaje

El icono de engranaje abre el menú completo: **All Trades / Ask Trades / Bid Trades** (un filtro de tres posiciones), **Enable Bid/Ask**, **Enable Delta**, **Chart Settings**, **Enable book imbalance**, **Book imbalance settings**, **Duplicate Adv. TS**, **Always on Top**, **Template** (Load / Save As), **Rebuild TS**, **Rename TS** y **Settings TS**.

[SCREENSHOT: Menú del engranaje de Adv. Time And Sales completamente abierto mostrando todos los elementos: el filtro All/Ask/Bid Trades con la marca en All Trades, y las entradas Enable Bid/Ask, Enable Delta, Chart Settings, Enable book imbalance, Book imbalance settings, Duplicate Adv. TS, Always on Top, Template, Rebuild TS, Rename TS y Settings TS | dc-es-adv-time-and-sales-03.png]

### Filtros de lado de operación

**All Trades** (por defecto) muestra la cinta mixta. **Ask Trades** muestra solo ejecuciones del lado ask: todas las filas visibles se vuelven verdes. **Bid Trades** muestra solo ejecuciones del lado bid: todas rosas. La misma elección también existe dentro de **Settings TS** como **TS Mode**; ambos se mantienen sincronizados.

[SCREENSHOT: Cinta con el filtro Ask Trades activo, todas las filas verdes, y el menú del engranaje abierto mostrando la marca movida a Ask Trades | dc-es-adv-time-and-sales-04.png]

### Panel Bid/Ask

**Enable Bid/Ask** (desactivado por defecto) añade un panel al tercio inferior de la ventana. Comienza vacío con un botón verde **Reset** a ancho completo, y luego crecen dos cajas: morada a la izquierda y verde a la derecha, cada una con un contador debajo. Las cajas crecen a medida que se imprimen operaciones, y **Reset** pone ambos contadores a cero.

Según la convención de color de la cinta, la caja morada parece rastrear el volumen operado del lado bid y la caja verde el volumen del lado ask desde el último reinicio: una lectura razonable, pero la semántica exacta es [CONFIRM: Bid/Ask panel — do the two counters equal cumulative contracts traded at bid vs at ask since last Reset?].

[SCREENSHOT: Adv. Time And Sales con el panel inferior Bid/Ask habilitado: caja morada a la izquierda, caja verde a la derecha, recuentos de contratos bajo cada caja y el botón verde Reset a ancho completo | dc-es-adv-time-and-sales-05.png]

### Panel Delta

**Enable Delta** (desactivado por defecto) muestra una única barra horizontal en el panel inferior: morada mientras el delta acumulado es negativo, verde cuando es positivo, con dos números apilados que crecen a medida que se imprimen operaciones (por ejemplo -5 / -3 creciendo a -14 / -12 durante la venta). **Reset** pone la barra a cero.

Los campos de texto de **Chart Settings** incluyen colores separados para "Delta Volume" y "Delta Trade", así que los dos números son muy probablemente el volumen delta (arriba) y el recuento de operaciones delta (abajo): la correspondencia exacta no está confirmada.

[SCREENSHOT: Panel inferior de Delta mostrando una barra de delta negativo morada con dos números negativos apilados, y luego el mismo panel en verde después de que el delta se volvió positivo | dc-es-adv-time-and-sales-06.png]

### Panel de desequilibrio del libro

**Enable book imbalance** (desactivado por defecto) cambia el panel inferior a una vista del libro en reposo: un número a la izquierda (lado bid) y otro a la derecha (lado ask). Cuando ambos lados son iguales, solo se muestran números simples. Cuando un lado domina, ese lado desarrolla una caja de color dimensionada según su proporción: una caja verde a la izquierda cuando domina el libro del bid, una caja roja a la derecha cuando domina el libro del ask. Los colores están confirmados por el diálogo **Imbalance settings** (Bid Volume = verde, Ask Volume = rojo).

A diferencia de los otros dos paneles, este modo no tiene botón **Reset**: refleja el libro actual en lugar de acumular. Qué suman exactamente los números (solo el mejor nivel bid/ask, o varios niveles del libro) no está confirmado, como tampoco si el panel necesita datos de profundidad de nivel 2 para poblarse.

[SCREENSHOT: Panel inferior de desequilibrio del libro en dos estados: valores iguales mostrados como números simples, y un lado bid dominante con una caja verde a la izquierda dimensionada proporcionalmente | dc-es-adv-time-and-sales-07.png]

### Utilidades de ventana

- **Duplicate Adv. TS**: abre una segunda ventana de cinta con el mismo símbolo preseleccionado. El duplicado comienza con una cinta vacía y contadores de panel nuevos, y cada ventana mantiene su propia configuración.
- **Always on Top**: mantiene la ventana por encima de las demás; el comportamiento exacto no fue demostrado en nuestro material fuente, pero el elemento del menú coincide con la opción de ventana estándar.
- **Template → Load / Save As**: guarde o cargue una configuración de Time And Sales con nombre, el mismo patrón que las plantillas de gráfico y DOM ([[templates-workspaces]]).
- **Rebuild TS**: limpia y reconstruye la cinta. Úselo como primer arreglo ligero cuando la cinta parezca con fallos o congelada. Los contadores de panel se ponen a cero tras una reconstrucción.
- **Rename TS**: renombra la ventana. [CONFIRM: Rename TS dialog contents — never opened in source material]

## Referencia de configuración

### Chart Settings (paneles Bid/Ask y Delta)

**Engranaje → Chart Settings** controla cómo miden y muestran los dos paneles acumulativos.

| Sección | Ajuste | Qué hace |
|---|---|---|
| GENERAL | **Period Mode** | Ventana de acumulación. Por defecto **Resettable**: acumular hasta que pulse Reset. Otras opciones: **Fixed count**, **Fixed seconds**: parecen reiniciarse automáticamente usando **Period Length** como ventana, pero el comportamiento exacto no está confirmado. |
| GENERAL | **Period Length** | Número usado por los modos Fixed. Por defecto 10. |
| GENERAL | **Visual Mode** | Por defecto **Pos and neg**. [CONFIRM: other Visual Mode options] |
| GENERAL | **Enable Shortcut Reset** | Desactivado por defecto. [CONFIRM: which shortcut this binds] |
| COLOR SETTINGS | **Bid Volume / Ask Volume / Bid Trades / Ask Trades** | Muestras de color para las cajas del panel y la barra delta (bid = morado, ask = verde por defecto). |
| COLOR SETTINGS | **Color only dominant delta** | Interruptor que afecta al coloreado de la barra delta. |
| TEXT SETTINGS | **Text Size / Text Color** | Estilo del texto del panel. Tamaño por defecto 14. |
| TEXT SETTINGS | **Pos./Neg. Delta Volume, Pos./Neg. Delta Trade** | Selectores de color separados para los dos números impresos en la barra delta, por signo. |

**Apply** aplica sin cerrar; **OK** cierra el diálogo.

[SCREENSHOT: Diálogo Chart Settings abierto mostrando la sección GENERAL con el menú desplegable Period Mode expandido listando Resettable, Fixed count y Fixed seconds | dc-es-adv-time-and-sales-08.png]

### Configuración de desequilibrio del libro

**Engranaje → Book imbalance settings** abre el diálogo **Imbalance settings**: COLOR SETTINGS (**Bid Volume** = verde, **Ask Volume** = rojo) y TEXT SETTINGS (**Text Size** por defecto 14, **Bid color**, **Ask color**).

### TS Settings (la cinta en sí)

**Engranaje → Settings TS** abre el diálogo **TS Settings** con cinco secciones plegables:

| Sección | Ajustes |
|---|---|
| GENERAL | **Back color**, **Border color**, **Font color**, **Font size** (por defecto 12.00), **Bold font** (se aplica en vivo con Apply), **Input data** (por defecto **Volume**; cambiar a **Order** cambia el encabezado de la columna central: la cinta muestra entonces un recuento relacionado con órdenes por impresión en lugar del volumen de contratos; la semántica exacta y otras posibles opciones no están confirmadas), **Show milliseconds** (la columna Time pasa a ser p. ej. 02:03:42.382), **TS Mode** (**All trades / Ask trades / Bid trades**: igual que el filtro del engranaje). |
| FILTER SETTINGS | **Filter 1** (número, por defecto 0), **Enable Filter 2** (desactivado), **Filter 2** (número, por defecto 0). Parecen umbrales de tamaño mínimo que activan los conjuntos de color FILTER 1 / FILTER 2 para resaltar impresiones más grandes: sin confirmar. |
| FILTER 1 | Diez campos de color: fondos **Bid**, **Below Bid**, **Between Bid/Ask** (gris por defecto), **Ask**, **Above Ask** más los cinco colores de texto correspondientes. |
| FILTER 2 | Los mismos diez campos con un segundo conjunto de colores más saturado. |
| ALERT SOUND | **Enable Filter 1**, menús desplegables de sonido **Bid Filter 1** y **Ask Filter 1** con botones de vista previa, **Enable Filter 2**, **Bid/Ask Filter 2**. Presumiblemente reproduce el sonido elegido cuando una impresión pasa el filtro en ese lado: la semántica de activación no está confirmada. |

[SCREENSHOT: Diálogo TS Settings abierto en la sección GENERAL mostrando las muestras de color Back/Border/Font, Font size 12.00, el interruptor Bold font, el desplegable Input data en Volume, el interruptor Show milliseconds y el desplegable TS Mode | dc-es-adv-time-and-sales-09.png]

[SCREENSHOT: Diálogo TS Settings desplazado hasta FILTER SETTINGS y la sección FILTER 1 expandida mostrando los campos de color de fondo y texto Bid, Below Bid, Between Bid/Ask (gris), Ask y Above Ask | dc-es-adv-time-and-sales-10.png]

## Solución de problemas

- **La cinta está vacía o en blanco.** Las ventanas nuevas y duplicadas comienzan vacías y se llenan solo con impresiones en vivo: espere a que haya operaciones, confirme que la fuente de datos está conectada y el mercado abierto, y luego pruebe **Engranaje → Rebuild TS**. Si la cinta sigue muerta mientras los gráficos avanzan, consulte [[feed-connected-chart-not-moving]].
- **Solo filas verdes / solo filas rosas.** El filtro de lado de operación está en Ask Trades o Bid Trades. Vuelva a **All Trades** (compruebe también **Settings TS → TS Mode**).
- **La columna central dice Order en lugar de Volume.** Se cambió **Settings TS → GENERAL → Input data**: vuelva a ponerlo en **Volume**.
- **La cinta parece congelada o con fallos.** Primero **Engranaje → Rebuild TS**; si toda la fuente está caída, siga [[data-delayed-lagging]].
- **Los números del panel inferior no se reinician.** El modo de desequilibrio del libro no tiene Reset por diseño: refleja el libro actual. Solo los modos Bid/Ask y Delta tienen el control verde Reset.

## Consejos y errores comunes

- El panel inferior muestra un modo a la vez: Bid/Ask, Delta o desequilibrio del libro. Si el panel no se ve como espera, compruebe cuál de los tres interruptores del engranaje está activo.
- Use **Duplicate Adv. TS** más el menú desplegable de símbolo para ejecutar dos cintas lado a lado en distintos instrumentos; cada ventana mantiene filtros, paneles y configuración independientes.
- Guarde su cinta configurada como plantilla (**Engranaje → Template → Save As**) para poder reconstruir su disposición en segundos en un nuevo espacio de trabajo.
- No lea las filas grises como una señal definitiva: la interpretación de dentro del diferencial es probable pero no está confirmada. Si su estrategia depende de ello, verifíquelo primero con soporte ([[get-help]]).
- Vale la pena habilitar los milisegundos (**Show milliseconds**) cuando estudie actividad en ráfagas: las impresiones del mismo segundo se vuelven distinguibles.

## Artículos relacionados

- [[orderflow-101]]
- [[advanced-dom]]
- [[speed-of-tape]]
- [[big-trades]]
- [[deep-trades]]
- [[symbol-manage]]