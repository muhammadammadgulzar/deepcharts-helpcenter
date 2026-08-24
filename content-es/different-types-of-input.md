---
title: "Diferentes tipos de datos de entrada para indicadores"
slug: "different-types-of-input"
category: "Indicators & Analysis"
subcategory: "Indicator Basics"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Qué significan los tipos de datos de entrada Volume, Order y Aggregate y cómo cambian lo que cuentan sus indicadores de flujo de órdenes."
keywords: ["datos de entrada", "configuración de datos", "volume vs aggregate", "operaciones agregadas", "MBO", "market by order", "big trades no detectó una orden", "tipo de entrada"]
source_hash: "ae79b4c0f77e8c25"
ai_translated: true
source_hash: "ae79b4c0f77e8c25"
---
Casi todos los indicadores de flujo de órdenes de DeepCharts, Deep Print, la familia Deep Profile, Big Trades, las herramientas de delta y más, tienen una opción **Input Data** (datos de entrada) en su sección **Data Settings** (configuración de datos). Este único menú desplegable decide qué cuenta realmente el indicador, y es la razón más común por la que dos operadores que miran "el mismo" indicador ven números diferentes.

Entender los tipos de entrada lleva cinco minutos y le ahorrará horas de confusión más adelante.

## Qué es

**Input Data** selecciona los datos de origen a partir de los cuales se construye un indicador. La misma vela puede medirse como transacciones brutas de la bolsa (**Volume**), como eventos del libro de órdenes (**Order**) o como operaciones reconstruidas por DeepCharts a su tamaño original (**Aggregate**). Muchos indicadores también ofrecen **Number of Trades**, que cuenta ejecuciones en lugar de contratos.

La elección importa porque las bolsas no reportan las operaciones como la mayoría imagina. Cuando un comprador toma 30 contratos ofrecidos por tres vendedores separados de 10 contratos cada uno, el flujo bruto registra tres transacciones separadas de 10, no una operación de 30.

Puede ver este flujo bruto de ejecuciones en vivo a continuación: cada impresión es una transacción registrada, exactamente lo que cuenta el tipo de entrada **Volume**.

[WIDGET: tape-lab]

## Cuándo usarlo

- Un indicador "no detectó" una operación obviamente grande: la orden probablemente se dividió en varias ejecuciones y cada parte quedó por debajo de su umbral.
- Sus números difieren del gráfico de otro operador: compare siempre primero los tipos de **Input Data**.
- Quiere detalle a nivel de orden (qué órdenes pasivas fueron consumidas): eso requiere el tipo **Order** y una fuente con capacidad MBO.
- Quiere detectar instituciones que dividen deliberadamente órdenes grandes en muchas pequeñas: exactamente para eso se creó **Aggregate**.

## Inicio rápido

1. Abra la configuración de cualquier indicador de flujo de órdenes (Deep Print, Deep Profile, Big Trades, etc.).
2. Vaya a la sección **Data Settings**.
3. Abra el menú desplegable **Input Data** y elija un tipo usando la tabla siguiente.
4. Aplique y compare: distintos tipos de entrada pueden producir resultados visiblemente diferentes en las mismas velas.

[SCREENSHOT: Un diálogo de configuración de indicador (p. ej. Deep Print) abierto en la sección Data Settings con el menú desplegable Input Data expandido, mostrando las entradas Volume, Order y Aggregate | dc-es-different-types-of-input-01.png]

## Cómo leerlo

**Volume** es el registro bruto por transacción de la bolsa. Cada ejecución individual se almacena por separado, cubriendo tanto la participación pasiva como la agresiva. El ejemplo anterior de 30 contratos se convierte en tres transacciones de 10, de modo que un indicador Big Trades con un tamaño mínimo de 30 lo omite por completo, porque ninguna transacción individual alcanza el umbral.

**Order** funciona solo con fuentes de datos MBO (Market by Order) y expone la granularidad a nivel de orden. En la ventana [[adv-time-and-sales|Advanced Time And Sales]], la columna **List** muestra las dos órdenes pasivas más grandes que fueron consumidas por un agresor. Sin embargo, incluso los datos de tipo Order tienen un punto ciego: las grandes instituciones a menudo dividen sus órdenes intencionadamente, por ejemplo enviando 100 órdenes separadas de 5 contratos en lugar de una orden de 500, precisamente para mantenerse invisibles ante herramientas como esta.

**Aggregate** no lo entrega ninguna fuente de datos; lo calcula DeepCharts por sí mismo. La plataforma analiza el flujo de transacciones y reconstruye órdenes grandes ocultas vinculando ejecuciones que comparten el mismo ID de agresor a lo largo del tiempo y el precio. Como se calcula localmente, funciona con cualquier fuente de datos y no requiere MBO.

[SCREENSHOT: Dos gráficos footprint idénticos lado a lado, uno con Input Data = Volume y otro con Input Data = Aggregate, mostrando valores de celda visiblemente distintos en las mismas velas | dc-es-different-types-of-input-02.png]

## Referencia de configuración

| Tipo de entrada | Qué cuenta | Requisito de fuente | Mejor para |
|---|---|---|---|
| **Volume** | Transacciones brutas de la bolsa; cada ejecución registrada por separado | Cualquier fuente | Actividad total por precio; la lectura "clásica" |
| **Order** | Datos a nivel del libro de órdenes, p. ej. las órdenes pasivas más grandes consumidas por un agresor | Solo fuentes con capacidad MBO | Ver qué órdenes pasivas fueron golpeadas |
| **Aggregate** | Ejecuciones revinculadas por ID de agresor compartido a su tamaño de orden original | Cualquier fuente (calculado por DeepCharts) | Detectar órdenes institucionales divididas deliberadamente |
| **Number of Trades** | El recuento de ejecuciones por precio, no el volumen en contratos (ofrecido por muchos indicadores) | Cualquier fuente | Análisis de frecuencia de operaciones |

## Consejos y errores comunes

- **"Big Trades no marcó una orden enorme."** Con Input Data = Volume, una orden dividida se cuenta como sus ejecuciones componentes, cada una por debajo de su mínimo. Cambie a **Aggregate** para que DeepCharts reconstruya el tamaño original.
- **"La entrada Order no muestra nada."** Su fuente no está entregando datos MBO. Las fuentes CQG no proporcionan MBO; dxFeed requiere que el tipo de DOM esté configurado en MBO; las fuentes Rithmic sí lo proporcionan. Vea [[connect-data-feed]] para la configuración de la fuente.
- **¿Compara gráficos con otro operador?** Pregunte por el Input Data antes que nada; después por los filtros, y después por el agrupamiento de ticks.
- Distintos tipos de entrada producen formas genuinamente diferentes en los indicadores de perfil. Ninguna es "incorrecta"; miden cosas distintas.

## Artículos relacionados

- [[indicator-layout]]
- [[orderflow-101]]
- [[deep-print]]
- [[big-trades]]
- [[adv-time-and-sales]]
- [[deep-profile]]