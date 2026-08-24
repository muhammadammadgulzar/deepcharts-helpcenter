---
title: "Mapa de calor"
slug: "heatmap"
category: "Features"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "10 min read"
description: "El mapa de calor es el núcleo de DeepDom y la razón por la que existe la plataforma. Todas las demás herramientas, el DOM, las burbujas, el CVD, el VWAP, añaden contexto y confirmación."
keywords: ["mapa de calor", "mapa de calor de deepdom", "deepdom", "funciones"]
source_hash: "4f9f33c81d8c5b61"
ai_translated: true
source_hash: "4f9f33c81d8c5b61"
---
El mapa de calor es el núcleo de DeepDom y la razón por la que existe la plataforma. Todas las demás herramientas, el DOM, las burbujas, el CVD, el VWAP, añaden contexto y confirmación. Pero el mapa de calor es donde ve el panorama completo de la intención del mercado presentado visualmente en precio y tiempo de forma simultánea.

La mayoría de los traders miran un gráfico de precios y ven lo que ya ocurrió. El mapa de calor le permite ver lo que el mercado está planeando antes de que ocurra: cada banda horizontal de color es una concentración de órdenes de límite situadas en el libro de órdenes a ese nivel de precio. Dinero real. Posiciones reales. Intenciones reales. Cuanto más gruesa e intensa sea el color, más comprometida está la liquidez en esa zona.

Lo que lo hace excepcionalmente potente es que combina dos flujos de datos completamente diferentes en una sola vista: los datos de órdenes a mercado ejecutadas de Time & Sales y los datos en vivo de órdenes de límite del DOM. Esto significa que no solo ve dónde ha estado el precio o dónde esperan las órdenes. Ve ambas cosas al mismo tiempo, lo que le permite entender cómo interactúa el precio con la liquidez a medida que sucede.

[SCREENSHOT: Mapa de calor — visión general (DeepDOM) | dd-es-heatmap-01.png]

La intensidad del color es una medida directa de la concentración de órdenes. El rojo indica la liquidez más pesada, el naranja la segunda más alta, y a medida que los colores avanzan hacia el amarillo, el blanco, el azul y el negro, la liquidez se vuelve progresivamente más fina. Cuando se forma una banda roja o naranja gruesa en un nivel, el precio casi siempre reaccionará cuando llegue allí. El mapa de calor le permite ver estas zonas formándose con antelación, a menudo minutos antes de que el precio siquiera se acerque.

Como DeepDom guarda y registra estos datos a lo largo del tiempo, también puede ver exactamente cómo se desarrolló una zona. La liquidez que se acumula gradualmente durante 30 o 40 minutos cuenta una historia muy diferente de una orden grande que apareció de repente justo cuando el precio se acercaba. La primera es una posición deliberada y planificada de antemano. La segunda es una posición reactiva. Entender cómo se formó la liquidez, no solo dónde está, es lo que separa a un trader que lee el mapa de calor a nivel superficial de uno que realmente entiende el flujo de órdenes.

## Cómo abrir un mapa de calor

Después de conectar su fuente de datos, siga estos pasos para abrir un nuevo gráfico:

Conecte primero la fuente de datos y asegúrese de que esté en verde (conectada). Si la conexión está en amarillo, todavía está buscando la conexión, y en rojo, la conexión está desconectada.

[SCREENSHOT: Mapa de calor — Cómo abrir un mapa de calor (DeepDOM) | dd-es-heatmap-02.png]

Haga clic en **New** en DeepDom

Seleccione el instrumento financiero que desea mostrar de su lista de símbolos suscritos (asegúrese de haber configurado correctamente su ventana Symbol Manager)

Haga clic en **Select** en la parte inferior derecha para confirmar

[SCREENSHOT: Mapa de calor — Cómo abrir un mapa de calor (DeepDOM) | dd-es-heatmap-03.png]

## Cómo configurar la fuente de datos MBO / MBP

La configuración de fuente (Source Settings) le permite configurar la fuente de datos de cada gráfico individual. Aquí es donde define si el gráfico utiliza datos MBP o MBO, lo que afecta directamente a qué funciones de DeepDom están disponibles para usted.

Para acceder a **Source Settings**, haga clic con el botón derecho en cualquier parte del gráfico y seleccione **Source Settings** en el menú.

[SCREENSHOT: Mapa de calor — Cómo configurar la fuente de datos MBO / MBP (DeepDOM) | dd-es-heatmap-04.png]

#### ¿Qué son MBP y MBO?

MBP (Market By Price) MBP le muestra el volumen total disponible en cada nivel de precio del libro de órdenes, combinando todas las órdenes individuales a ese precio en un solo número. Esta es la vista estándar de profundidad de mercado con la que la mayoría de los traders están familiarizados. Le muestra qué hay en cada nivel de precio, pero no le dice nada sobre las órdenes individuales detrás de ese número.

MBO (Market By Order) MBO va un nivel más profundo. En lugar de mostrar totales combinados en cada nivel de precio, MBO le muestra los datos de cada orden individual del libro, incluidos su tamaño, su estado y cómo cambia con el tiempo. Esto es lo que hace posible que DeepDom identifique órdenes iceberg, órdenes stop y otras funciones avanzadas de flujo de órdenes.

En términos sencillos: MBP le dice cuánto hay en un nivel de precio. MBO le dice quién está en ese nivel de precio y cómo se está comportando.

### ¿Qué fuentes de datos admiten MBO?

Los datos MBO solo están disponibles en fuentes de datos específicas. Actualmente en DeepDom:

dxFeed Market Depth: admite MBO

Rithmic Market Depth: admite MBO

Si su fuente de datos admite MBO, cambiar a él desbloqueará todo el potencial de las herramientas avanzadas de flujo de órdenes de DeepDom.

#### General

Tipo de fuente (Source Type) Define el tipo de fuente de datos utilizado para el gráfico. Puede elegir entre:

MBP: utiliza datos Market By Price. Profundidad de mercado estándar que muestra el volumen combinado en cada nivel de precio

MBO: utiliza datos Market By Order. Datos granulares a nivel de orden que habilitan funciones avanzadas como la detección de órdenes iceberg

[SCREENSHOT: Mapa de calor — General (DeepDOM) | dd-es-heatmap-05.png]

Cambie a MBO si su fuente de datos lo admite y desea utilizar el conjunto completo de herramientas de flujo de órdenes de DeepDom.

Notas - Si selecciona MBO pero su fuente de datos no lo admite: Es posible que cierta información no esté disponible o no se muestre correctamente en el gráfico. Los indicadores que dependen de datos MBO pueden no mostrar los datos o comportarse de forma inesperada. Si esto ocurre, cambie el Tipo de fuente (Source Type) de nuevo a MBP o póngase en contacto con su proveedor de datos para confirmar si MBO está incluido en su suscripción.

#### Filtros MBO

Estos filtros se aplican cuando el gráfico está configurado en modo MBO y le permiten controlar qué órdenes individuales se incluyen en el análisis:

Volumen mínimo (Min. Volume) Establece el volumen mínimo que debe tener una orden individual para incluirse en el análisis MBO. Establecer este valor por encima de cero filtra las órdenes muy pequeñas, manteniendo el foco en órdenes lo suficientemente grandes como para ser significativas. Por ejemplo, establecerlo en 10 significa que el indicador solo rastreará las órdenes individuales de 10 contratos o más.

Excluir creador de mercado (Exclude Market Maker) Cuando está habilitado, las órdenes identificadas como procedentes de creadores de mercado se excluyen del análisis MBO. Los creadores de mercado colocan y cancelan órdenes constantemente como parte de su actividad normal, lo que puede crear mucho ruido en los datos. Excluirlos le ayuda a centrarse en la actividad genuina de instituciones y traders, en lugar de en la creación de mercado rutinaria.

[SCREENSHOT: Mapa de calor — Filtros MBO (DeepDOM) | dd-es-heatmap-06.png]

Notas - Si no está seguro de cuál usar: Empiece con MBP: funciona con todas las fuentes de datos y cubre la mayoría de los escenarios de trading. Cambie a MBO solo cuando desee específicamente utilizar las funciones avanzadas de flujo de órdenes que lo requieren, y solo si su fuente de datos lo admite.

## Cómo entender la liquidez

La mayoría de los traders solo ven lo que ya ha ocurrido en un gráfico de precios. El mapa de calor le muestra algo mucho más valioso: dónde está esperando el dinero antes de que el precio siquiera llegue allí. De forma predeterminada, el gráfico se carga con una hora de historial de liquidez, lo que significa que no solo ve dónde están las órdenes en este momento: puede ver cómo esa liquidez se ha ido acumulando, desplazando y desapareciendo con el tiempo. Esto le ofrece una visión prospectiva que ningún gráfico de precios estándar puede ofrecer.

Las órdenes de límite del DOM se muestran directamente en el gráfico:

Órdenes de venta de límite - Morado

Órdenes de compra de límite - Verde

[SCREENSHOT: Mapa de calor — Cómo entender la liquidez (DeepDOM) | dd-es-heatmap-07.png]

El mapa de calor no solo muestra las órdenes de límite actuales: guarda y traza esta información a lo largo del tiempo, para que pueda ver cómo la liquidez se ha acumulado, aumentado, disminuido o eliminado en cualquier nivel de precio. Esto importa porque una orden de límite que lleva mucho tiempo en un nivel es mucho más significativa que una que acaba de aparecer: le indica que alguien está genuinamente comprometido con ese precio.

Cómo leer la intensidad del mapa de calor:

DeepDom utiliza una escala de intensidad visual para mostrar la concentración de órdenes de límite en cada nivel de precio:

Cuanto más clara y nítida aparezca el área, mayor será la concentración de órdenes de límite en el libro.

Cuanto más oscura o menos visible aparezca el área, menor será la concentración de órdenes de límite en el libro.

Esta intensidad se ajusta automáticamente a las condiciones actuales del mercado. Si aparece una nueva orden de límite grande, toda la escala se desplaza para reflejar el nuevo contexto. Esto le indica al instante dónde están las órdenes más pesadas sin tener que leer un solo número, y el precio casi siempre reacciona cuando alcanza esas zonas.

#### Cómo leer los límites de compra y venta:

La separación entre las órdenes verdes (de compra de límite) y violetas (de venta de límite) es igualmente importante. Las bandas verdes por debajo del precio le indican dónde los compradores han colocado sus órdenes de límite y están esperando. Las bandas violetas por encima del precio le indican dónde se posicionan los vendedores. Cuando el precio entra en una banda verde gruesa, está viendo cómo entra en una zona de fuerte interés de compra pasivo: los compradores allí defenderán ese nivel y provocarán un rebote, o serán superados, provocando que el precio se acelere a través de él.

Cualquiera de los dos resultados es información operable.

[SCREENSHOT: Mapa de calor — Cómo leer los límites de compra y venta: (DeepDOM) | dd-es-heatmap-08.png]

#### Cómo leer la liquidez fresca frente a la persistente:

No todas las órdenes de límite del libro tienen el mismo peso, y esta es una de las distinciones más importantes que puede hacer al leer el mapa de calor.

La liquidez fresca se refiere a órdenes de límite que acaban de aparecer en el libro. Son órdenes recién colocadas: traders que acaban de decidir posicionarse en un precio específico. La liquidez fresca le habla de la nueva intención que entra en el mercado ahora mismo. Sin embargo, como estas órdenes acaban de aparecer, también es más probable que se cancelen o se muevan si el precio no las alcanza rápidamente. La aparición repentina de liquidez fresca en un nivel clave a medida que el precio se acerca puede indicar una orden reactiva y defensiva, colocada en respuesta a lo que está haciendo el precio y no como una posición planificada de antemano.

La liquidez persistente se refiere a órdenes de límite que llevan un tiempo significativo en el libro sin ser canceladas ni ejecutadas. Son órdenes en reposo y comprometidas: traders que colocaron su orden a un precio específico y la han mantenido allí a través de múltiples movimientos de precio y condiciones de mercado. La liquidez persistente es mucho más significativa porque le indica que alguien cree genuinamente que vale la pena defender ese nivel de precio. Han tenido múltiples oportunidades de cancelar o mover su orden y han decidido no hacerlo. Cuando el precio finalmente alcanza una zona de liquidez persistente, es mucho más probable que la reacción sea fuerte y sostenida.

[SCREENSHOT: Mapa de calor — Cómo leer la liquidez fresca frente a la persistente: (DeepDOM) | dd-es-heatmap-09.png]

[SCREENSHOT: Mapa de calor — Cómo leer la liquidez fresca frente a la persistente: (DeepDOM) | dd-es-heatmap-10.png]

#### Cómo usar ambas en conjunto:

Cuando vea liquidez persistente en un nivel, esa es una zona que merece la pena marcar y vigilar. Cuanto más tiempo lleve allí, más comprometido está el participante que hay detrás.

Cuando vea liquidez fresca aparecer de repente en un nivel a medida que el precio se acerca, sea más cauteloso: puede tratarse de una orden reactiva que se retire antes incluso de que el precio la alcance.

La configuración más potente es cuando la liquidez persistente y la liquidez fresca se acumulan a la vez en el mismo nivel: significa que tanto los participantes comprometidos y pacientes como los nuevos participantes agresivos se están posicionando en ese precio simultáneamente, lo que aumenta significativamente la probabilidad de una reacción fuerte.

#### Cómo leer el historial:

Como DeepDom guarda y traza estos datos a lo largo del tiempo, en lugar de mostrar solo una instantánea actual, puede mirar hacia atrás y ver exactamente cómo se desarrolló un nivel. Una banda gruesa de liquidez que lleva mucho tiempo en un nivel le indica que alguien está comprometido y esperando. Una orden grande que apareció de repente justo cuando el precio se acercaba cuenta una historia muy diferente. Leer el historial de cómo se forma la liquidez, no solo dónde está en este momento, es lo que le da el panorama completo.

Nota: Para acceder a los datos de profundidad de mercado, necesita Nivel 2 de su fuente de datos. DeepDom admite el análisis de más de 1.000 niveles del libro.