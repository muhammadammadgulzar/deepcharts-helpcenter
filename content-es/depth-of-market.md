---
title: "Indicador de profundidad de mercado (DOM)"
slug: "depth-of-market"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Referencia de la escalera de precios DOM de DeepCharts: columnas, reglas de colocación de órdenes, columnas pull/stack y de operaciones, perfiles y configuración de profundidad."
keywords: ["profundidad de mercado", "DOM", "escalera de precios", "adv dom", "libro de órdenes", "level 2", "pull stack", "escalera bid ask", "columnas del dom"]
source_hash: "4ec9994f37a66f40"
ai_translated: true
source_hash: "4ec9994f37a66f40"
---
La profundidad de mercado (DOM) es la vista en escalera de precios del libro de órdenes: una columna vertical de precios con la liquidez de compra pasiva (bids) a un lado y la liquidez de venta pasiva (asks) al otro. En DeepCharts, el DOM con todas las funciones es la ventana **Advanced DOM**, y una versión compacta puede superponerse directamente en el gráfico.

Este artículo es la referencia de la interfaz del DOM: sus columnas, reglas de clic y configuración. Para el recorrido completo de la ventana, vea [[advanced-dom]]; para la escalera sobre el gráfico, vea [[dom-trading-chart]].

[CONFIRM: whether "Depth of Market" also exists as a standalone chart indicator in the Indicator List, separate from the Advanced DOM window and the on-chart DOM Trading mode — adjust the intro if so]

## Qué es

El DOM responde a la pregunta: ¿quién está esperando para comprar y vender en cada precio, y cómo opero contra eso? Cada fila es un nivel de precio. Las cantidades del bid se apilan por debajo del mercado, las del ask por encima, y la pantalla se actualiza en tiempo real a medida que las órdenes se añaden, se retiran y se ejecutan. Como las órdenes se colocan haciendo clic directamente en una fila de precio, el DOM es la herramienta preferida de los operadores que valoran los niveles de entrada exactos y la posición en la cola por encima de las entradas basadas en el gráfico.

Observe una escalera en vivo a continuación: la liquidez de compra se apila en verde por debajo del mercado, la liquidez de venta en violeta por encima; pase el cursor por cualquier fila para ver qué le está diciendo ese nivel.

[WIDGET: dom-ladder]

## Cuándo usarlo

- Scalping u operativa de corto plazo donde el tick exacto de entrada importa.
- Observar cómo la liquidez pasiva se acumula o desaparece alrededor de un nivel antes de comprometerse.
- Gestionar visualmente las órdenes activas: arrastrar para mover, clic derecho para eliminar.
- Leer el volumen ejecutado por nivel junto a un perfil de volumen en vivo.

## Inicio rápido

1. Abra DeepCharts y conecte su fuente de datos: [[connect-data-feed]].
2. Vaya a **New → Book → ADV DOM**.
3. Elija su instrumento de la lista de símbolos suscritos (por ejemplo **ES**) y haga clic en **Select**.
4. Establezca la cantidad de la orden en el campo de la parte inferior del DOM.
5. Ponga el menú de tipo de orden (el menú **A**) en **Automatic**: los tipos de orden se eligen entonces según dónde haga clic (vea la tabla más abajo).

[SCREENSHOT: Menú New abierto con el submenú Book y ADV DOM resaltado, con el diálogo Select Instrument visible detrás | dc-es-depth-of-market-01.png]

> **Nota:** El DOM necesita datos de Level 2 (profundidad) de su fuente para poblar las escaleras de bid y ask. Con datos de Level 1 solo está disponible el mejor bid/ask.

## Cómo leerlo

El diseño predeterminado muestra, de izquierda a derecha:

| Columna | Significado |
|---|---|
| **P&L** | Su ganancia o pérdida en cada tick: lo que valdría la posición si el precio operara ahí |
| **B** | Gestión de órdenes de compra |
| **Bid** | Liquidez de compra pasiva; haga clic aquí para colocar órdenes de compra |
| **Price** | La escalera de precios central |
| **Ask** | Liquidez de venta pasiva; haga clic aquí para colocar órdenes de venta |
| **S** | Gestión de órdenes de venta |
| **VP** | Perfil de volumen diario: volumen ejecutado por nivel de precio |

El encabezado muestra el instrumento seleccionado, el bróker conectado, la cuenta de trading activa, la cantidad de la posición abierta y el P&L diario. Debajo, la tabla de fundamentales da contexto de sesión: variación porcentual respecto al cierre anterior, variación respecto a la apertura de sesión, volumen total negociado, número de operaciones (acciones) y los precios de suspensión superior e inferior.

Con **Automatic** seleccionado en el menú **A**, la posición del clic decide el tipo de orden:

| Clic | Orden |
|---|---|
| Clic izquierdo en **Bid** por debajo del precio actual | Buy Limit (compra límite) |
| Clic izquierdo en **Bid** por encima del precio actual | Buy Stop (compra stop) |
| Clic izquierdo en **Ask** por encima del precio actual | Sell Limit (venta límite) |
| Clic izquierdo en **Ask** por debajo del precio actual | Sell Stop (venta stop) |
| Clic derecho en **Bid** | Buy Market (compra a mercado) |
| Clic derecho en **Ask** | Sell Market (venta a mercado) |

Las órdenes activas se gestionan en la propia escalera: **clic izquierdo y arrastrar** para mover una orden, **clic derecho** para eliminarla, **doble clic izquierdo** para modificar su cantidad.

[SCREENSHOT: Escalera del DOM con una orden de compra límite activa en la columna B siendo arrastrada a una fila de precio inferior, con el cursor visible a mitad del arrastre | dc-es-depth-of-market-02.png]

### Columnas de análisis opcionales

Haga clic con el botón derecho en la fila de encabezados de columna para habilitar más columnas (o ajustar automáticamente el tamaño de las existentes):

- **Pull/Stack** (**B.PS** / **A.PS**): el cambio en la liquidez pasiva por nivel. En el lado del bid, verde significa que se añadió cantidad (stacked), rojo significa que se retiró cantidad (pulled); el lado del ask invierte la lógica de color.
- **Trades** (**BT** / **AT**): volumen ejecutado por nivel: BT es el volumen vendido a mercado (golpeando el bid), AT es el volumen comprado a mercado (levantando el ask).
- **Offers**: el recuento de órdenes individuales pasivas en cada nivel de bid y ask.

[SCREENSHOT: Menú de clic derecho del encabezado de columnas abierto sobre el Advanced DOM mostrando la lista de columnas adicionales, incluidas Pull/Stack, Trades y Offers con marcas de verificación | dc-es-depth-of-market-03.png]

### Perfiles

El DOM puede dibujar perfiles junto a la escalera usando datos de **Volume**, **Delta** o **Bid/Ask**. Existen dos modos de registro: el **Resettable Profile** (perfil restablecible) empieza a registrar en el momento en que lo habilita y se borra con el icono del borrador; el **Daily Profile** (perfil diario) muestra los datos desde el inicio de la sesión de trading. Los conceptos de lectura de perfiles se tratan en [[understanding-volume-profile]].

## Referencia de configuración

Abra la configuración del DOM con el **icono de engranaje** (arriba a la izquierda).

| Grupo de configuración | Qué hace |
|---|---|
| Interruptores de sección | Habilite o deshabilite secciones completas del DOM para simplificar el diseño |
| **Order Column Settings** | Reordenar las columnas |
| **Chart DOM Settings** | Personalizar texto, colores y fondo |
| Marcadores | Habilite marcadores de nivel para los precios **High**, **Low**, **Open** y **Suspension** |
| **DOM Settings → Number of Levels Show** | Limita cuántos niveles de profundidad se muestran: establezca 20 para mostrar 20 niveles; déjelo sin restricción para toda la profundidad que envíe su proveedor |
| Sección **Model** | Guarde su diseño personalizado como plantilla y cargue plantillas guardadas más adelante |

En la parte inferior de la ventana están el campo de cantidad de la orden, los botones clásicos de trading y el habilitador de **OCO**; el icono de engranaje de la parte inferior derecha crea, guarda y recupera estrategias OCO desde un menú desplegable, el mismo sistema de brackets descrito en [[oco-strategies]].

Escala vertical: en la columna **Price**, hacer clic cerca del precio actual desplaza la vista, mientras que hacer clic cerca de la parte superior o inferior expande o comprime la escala de precios (la columna usa un modo de reconocimiento automático, así que el comportamiento exacto depende de dónde la agarre).

## Consejos y errores comunes

- **Las escaleras de bid/ask están vacías pero la fila de precio se actualiza**: su fuente es solo Level 1. Compruebe qué profundidad incluye su plan de datos ([[compatibility-guide]]).
- **Sorpresas con el tipo de orden**: en modo **Automatic** el tipo proviene de la posición del clic respecto al precio actual. Si quiere forzar un tipo, cambie el menú **A** a **Limit**, **Market** o **Conditional**.
- **Demasiado parpadeo en mercados rápidos**: limite **Number of Levels Show** y deshabilite las columnas que no lee; menos profundidad significa una pantalla más tranquila y rápida.
- **Diseño perdido después de reconstruirlo**: guárdelo en la sección **Model** para poder recargarlo en cualquier DOM.
- **Observar la liquidez sin querer operar**: recuerde que cada clic izquierdo en Bid/Ask coloca una orden real cuando hay una cuenta activa. Practique primero la lectura de la escalera en una cuenta SIM ([[simulation-accounts]]).

## Artículos relacionados

- [[advanced-dom]]
- [[dom-trading-chart]]
- [[trading-panel-reference]]
- [[oco-strategies]]
- [[orderflow-101]]
- [[understanding-volume-profile]]