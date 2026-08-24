---
title: "Symbol Manage: suscribir bolsas y asignar su fuente de datos"
slug: "symbol-manage"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Suscriba las bolsas que opera y dirija cada una a la fuente de datos correcta para que los gráficos carguen."
keywords: ["symbol manage", "gestor de símbolos", "suscribir bolsa", "asignar fuente de datos", "columna fuente de datos", "sin datos", "falta la bolsa", "lista de instrumentos vacía"]
source_hash: "1ac4ff0d01707374"
ai_translated: true
source_hash: "1ac4ff0d01707374"
---
Al terminar tendrá todas las bolsas que opera suscritas en Symbol Manage y dirigidas a la fuente de datos correcta, de modo que los gráficos carguen datos en vivo. Una fuente conectada por sí sola no es suficiente: DeepCharts también necesita saber qué bolsas quiere y qué fuente debe entregar cada una de ellas. Cuando esta asignación falta o es incorrecta, los gráficos muestran "no data" o se quedan congelados en datos antiguos de la caché aunque el punto de conexión esté verde.

## Antes de empezar

- Una fuente de datos guardada y funcionando — vea [[connect-data-feed]].
- Sepa qué bolsas incluye realmente su suscripción de datos (por ejemplo CME, COMEX) — compruebe lo que compró, vea [[buy-data-feed]].

## Pasos

1. Desconecte primero su fuente de datos: haga clic en **Select Connection** en la barra de herramientas principal y haga clic en la fuente conectada para desconectarla. Hacer los cambios en Symbol Manage estando desconectado, y luego reconectar, garantiza que la nueva asignación surta efecto limpiamente.

2. Abra **Options → Symbol Manage**.

[SCREENSHOT: Menú Options abierto en la barra principal de DeepCharts con la entrada Symbol Manage resaltada | dc-es-symbol-manage-01.png]

3. Abra la pestaña **Subscribe List**. Enumera las bolsas a las que está suscrito, cada una con una columna **Data Feed** que muestra qué fuente la entrega.

Pruébelo en vivo a continuación: suscriba o cancele la suscripción de una bolsa, y haga clic en el icono de eslabón de cadena para cambiar qué fuente la entrega.

[WIDGET: symbol-manage-mock]

### Si su bolsa ya aparece en la lista

1. Compruebe su columna **Data Feed**. Debe mostrar la fuente desde la que quiere que carguen los gráficos.
2. Si muestra la fuente incorrecta (o está en blanco), haga clic en el icono de eslabón de cadena de esa fila y elija la fuente correcta entre sus conexiones guardadas.

[SCREENSHOT: Fila de Subscribe List con el icono de eslabón de cadena para cambiar de fuente pulsado y la lista de conexiones de fuentes guardadas abierta para su selección | dc-es-symbol-manage-02.png]

### Si su bolsa no aparece en la lista

1. Haga clic en **Subscribe**. Aparece una lista de bolsas disponibles.
2. Busque la bolsa que desea, seleccione su fuente de datos para ella y confirme. [CONFIRM: exact label of the confirm button in the Subscribe dialog — sources show both "Set" and "Select"]
3. Repita el proceso para cada bolsa que opere.

### Si ya no necesita una bolsa

Selecciónela en la Subscribe List y haga clic en **Unsubscribe**.

> **Advertencia:** Tras cancelar la suscripción, los instrumentos de esa bolsa desaparecen del selector de instrumentos y sus gráficos dejan de cargar datos. Cancele la suscripción solo de bolsas que realmente ya no vaya a graficar.

4. Opcionalmente, revise la pestaña **Symbol List**: muestra los instrumentos individuales disponibles bajo sus bolsas suscritas. Normalmente no necesita cambiar nada aquí.

> **Advertencia:** No edite los detalles internos de bolsas o símbolos (los detalles de Modify Exchange / Modify Symbol). Esas definiciones las gestiona el soporte de DeepCharts: cambiarlas puede romper la carga de datos de toda la bolsa. Si la definición de un símbolo parece incorrecta, contacte con soporte — vea [[get-help]].

5. Cierre Symbol Manage.

6. Reconecte su fuente de datos mediante **Select Connection**.

7. Si un gráfico ya estaba abierto mientras hacía los cambios, puede refrescarse solo tras unos segundos. Si permanece congelado o muestra "no data", ciérrelo y vuelva a abrirlo mediante **New → Price Chart**: cargará datos frescos a través de la asignación corregida.

## Verifique que funcionó

- Abra **New → Price Chart**. El selector de instrumentos muestra las bolsas que suscribió: solo enumera bolsas suscritas, así que si una bolsa falta aquí, todavía no está suscrita.
- Elija un símbolo de la bolsa de su fuente: el gráfico dibuja velas y el precio se mueve.

[SCREENSHOT: Selector de instrumentos de New Price Chart mostrando solo las bolsas suscritas, con un símbolo seleccionado | dc-es-symbol-manage-03.png]

## Si algo salió mal

| Síntoma | Vea |
|---|---|
| La fuente está en verde pero el gráfico no se mueve | [[feed-connected-chart-not-moving]] |
| Error que menciona un problema de suscripción de símbolo | [[symbol-subscription-issue]] |
| La bolsa que necesita nunca aparece en la lista de Subscribe | Puede que su suscripción de datos no la incluya — vea [[buy-data-feed]] |
| La conexión se cae al abrir un gráfico | [[connection-lost-opening-chart]] |

> **Consejo:** Puede ejecutar varias fuentes a la vez y dirigir cada bolsa a una diferente: por ejemplo, los gráficos de CME desde una fuente y los de COMEX desde otra. Conecte ambas fuentes y luego use el icono de eslabón de cadena para asignar cada bolsa individualmente. Vea [[manage-feed-connections]].

## Artículos relacionados

- [[connect-data-feed]]
- [[feed-connected-chart-not-moving]]
- [[manage-feed-connections]]
- [[first-chart]]
- [[buy-data-feed]]