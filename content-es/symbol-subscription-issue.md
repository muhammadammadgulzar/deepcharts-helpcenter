---
title: "Solución: Problema de suscripción de símbolo"
slug: "symbol-subscription-issue"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Resuelva un problema de suscripción de símbolo comprobando la conexión de su fuente de datos y reasignando el mercado a la conexión correcta en Symbol Manage."
keywords: ["problema de suscripción de símbolo", "símbolo no suscrito", "sin datos para el símbolo", "administrar símbolos", "administrador de símbolos", "mercado no asignado", "nombre de conexión incorrecto"]
source_hash: "9cddc54b91f37b4d"
ai_translated: true
source_hash: "9cddc54b91f37b4d"
---
DeepCharts informa de un problema de suscripción de símbolo cuando no puede asociar el símbolo que está abriendo con una conexión de fuente de datos activa. La solución está casi siempre en **Symbol Manage** (Administrar símbolos): el mercado falta en la lista o está asignado a un nombre de conexión incorrecto.

## Síntoma

- DeepCharts muestra un problema de suscripción de símbolo cuando abre un gráfico o un espacio de trabajo.
- Un gráfico no puede cargar datos de un símbolo concreto aunque su fuente de datos parece estar conectada.

[SCREENSHOT: DeepCharts mostrando el mensaje de problema de suscripción de símbolo al abrir un gráfico, con el símbolo afectado visible | dc-es-symbol-subscription-issue-01.png]

No debe confundirse con:

- [[feed-connected-chart-not-moving]] — el gráfico se abre pero el precio nunca se actualiza (un problema de asignación estrechamente relacionado).
- [[fix-data-access-suspended]] — una suspensión a nivel de cuenta de dxFeed, no un problema de asignación.

## Causa más probable

El mercado (bolsa) no aparece en la lista de **Symbol Manage**, o está asignado a un nombre de conexión incorrecto, de modo que DeepCharts no sabe qué fuente de datos debe entregar los datos de ese símbolo.

## Solución rápida

1. Compruebe que su fuente de datos está correctamente conectada: busque el indicador verde en la barra de fuentes de DeepCharts.

[SCREENSHOT: Barra de fuentes de DeepCharts con el indicador de conexión verde visible junto al nombre de la fuente activa | dc-es-symbol-subscription-issue-02.png]

2. Confirme que realmente dispone de una fuente de datos que cubre el mercado que desea analizar. Consulte [[compatibility-guide]] para saber qué fuentes cubren qué mercados, y [[buy-data-feed]] si todavía necesita una suscripción.
3. Quite la marca de verificación junto a su fuente de datos en la lista de conexiones para desconectarla mientras edita la asignación. [CONFIRM: original article says "Connect the data feed and remove the check mark" — verify whether the feed must be connected or disconnected while remapping symbols]
4. Cierre todos los espacios de trabajo.
5. Vaya a **Options → Symbol Manage**.
6. Verifique que los mercados que opera aparecen en la lista y que cada uno muestra el nombre de conexión correcto junto a él: la maqueta interactiva de Symbol Manage que aparece a continuación muestra exactamente qué buscar; haga clic en el icono de eslabón de cadena para alternar la fuente asignada a un mercado.

[WIDGET: symbol-manage-mock]

7. Si un mercado muestra la conexión incorrecta (o ninguna), haga clic con el botón derecho sobre el mercado y elija la conexión correcta en el menú desplegable.

[SCREENSHOT: Ventana Symbol Manage con el menú desplegable de clic derecho abierto sobre una fila de mercado, mostrando la lista de conexiones disponibles para asignar | dc-es-symbol-subscription-issue-03.png]

8. Haga clic en **Select** para guardar el cambio.
9. Cierre la ventana **Symbol Manage**.
10. Vuelva a conectar su fuente de datos.
11. Abra de nuevo su gráfico o espacio de trabajo.

## Si eso no funcionó

### Causa: La bolsa nunca fue suscrita

Si la lista de Symbol Manage no contiene su mercado en absoluto, primero debe suscribir la bolsa y vincularla a su fuente de datos. Siga [[symbol-manage]] para el recorrido completo de suscripción y asignación.

### Causa: El acuerdo de datos de mercado no está firmado

Algunas fuentes rechazan las suscripciones de símbolos hasta que se completa el acuerdo con la bolsa. Consulte [[sign-market-data-agreement]].

### Causa: Su suscripción de fuente de datos no incluye esa bolsa

Una fuente solo entrega las bolsas incluidas en su suscripción de datos. Compruebe qué cubre su plan en [[compatibility-guide]], o compre la fuente que falta a través de [[buy-data-feed]].

## Si sigue atascado

Genere un [[diagnostic-report|informe de diagnóstico]]: registra a qué fuente está enrutada cada bolsa; después contacte con soporte a través de [[get-help]].

## Cómo prevenirlo

Configure sus bolsas y la asignación de fuentes una sola vez, correctamente, usando [[symbol-manage]]. Después de añadir una nueva fuente o cuenta, vuelva a comprobar la asignación antes de abrir gráficos.

## Artículos relacionados

- [[symbol-manage]]
- [[feed-connected-chart-not-moving]]
- [[connect-data-feed]]
- [[sign-market-data-agreement]]
- [[compatibility-guide]]