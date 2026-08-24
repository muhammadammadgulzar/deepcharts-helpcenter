---
title: "Entender el perfil de volumen: POC, área de valor, HVN/LVN"
slug: "understanding-volume-profile"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "intermediate"
time: "6 min read"
description: "Qué muestra un perfil de volumen, cómo se definen el POC, el área de valor, los HVN y los LVN, y cómo los traders los usan como soporte, resistencia y objetivos."
keywords: ["perfil de volumen", "POC", "punto de control", "área de valor", "VAH", "VAL", "nodo de alto volumen", "nodo de bajo volumen", "HVN", "LVN", "volumen por precio", "POC virgen"]
source_hash: "49649f3ae2236e4c"
ai_translated: true
source_hash: "49649f3ae2236e4c"
---
Un histograma de volumen normal le dice cuánto se negoció en cada barra de tiempo. Un perfil de volumen gira la pregunta 90 grados: cuánto se negoció en cada precio. Ese único cambio de eje convierte el volumen en bruto en un mapa de dónde el mercado encontró acuerdo y dónde no encontró ninguno, y ese mapa es la base de algunos de los niveles intradía más observados en el trading de futuros.

Este artículo cubre el concepto. Para las herramientas de DeepCharts que dibujan perfiles, vea la sección Véalo en DeepCharts más abajo.

## La idea en un párrafo

Los mercados son subastas, y las subastas pasan la mayor parte del tiempo — y negocian la mayor parte del volumen — en los precios que ambos lados consideran justos. Imagine un mercadillo callejero: el precio de un puesto atrae a la multitud todo el día, mientras que los puestos con precios demasiado altos o demasiado bajos solo reciben visitas breves y apresuradas. Un perfil de volumen es el mapa de la multitud de una sesión de trading: un histograma horizontal que muestra el volumen negociado en cada precio. La barra más larga es el precio que el mercado trató como el más justo; las barras finas son precios que el mercado rechazó rápidamente. Los traders leen ese mapa para juzgar qué precios atraerán al mercado de vuelta y por cuáles pasará a toda velocidad.

## Por qué les importa a los traders

- **Los perfiles clasifican los precios según la evidencia.** Un nivel donde cambiaron de manos 40.000 contratos es estructuralmente distinto de uno que negoció 900: el perfil hace visible esa diferencia.
- **El POC actúa como imán y referencia.** El precio tiende a gravitar de vuelta hacia el precio de mayor volumen de la sesión, y los POC de sesiones previas son niveles de reacción habituales.
- **Los bordes del área de valor enmarcan el día.** Volver a operar dentro del área de valor sugiere rotación; la aceptación fuera de ella sugiere un movimiento tendencial.
- **Los LVN marcan carriles rápidos.** El precio tiende a atravesar rápidamente las zonas de bajo volumen, lo que ayuda tanto a colocar objetivos como a colocar stops.

## Cómo funciona

### Construir el perfil

Tome cada operación de un período elegido — una sesión, una semana, un swing — y agrupe su volumen por precio. Dibujado en horizontal a lo largo del eje de precios, el resultado es el perfil. Importan tres estructuras:

- **POC (Point of Control, punto de control):** el precio único con el mayor volumen negociado del período. El precio justo de consenso del mercado para ese período.
- **Área de valor (VA):** la banda de precios alrededor del POC que contiene un porcentaje establecido del volumen total del período; por convención, normalmente alrededor del 70 %. Sus bordes son el **VAH** (Value Area High, máximo del área de valor) y el **VAL** (Value Area Low, mínimo del área de valor).
- **HVN y LVN:** los nodos de alto volumen son picos secundarios de volumen — precios a los que el mercado volvía una y otra vez; los nodos de bajo volumen son los valles entre ellos — precios que el mercado rechazó.

Explore las tres en el perfil en vivo de abajo: arrastre el porcentaje del área de valor y pase el cursor por las filas para ver moverse el POC, el VAH y el VAL.

[WIDGET: volume-profile-lab]

### Cómo se opera cada estructura

- **POC:** se comporta como un imán mientras el mercado está en equilibrio. Un precio que se aleja del POC con volumen tranquilo a menudo rota de vuelta hacia él. El POC de una sesión previa que el precio nunca revisitó (a menudo llamado POC virgen o naked POC) permanece en la lista de vigilancia de muchos traders como objetivo futuro.
- **VAH/VAL:** la frontera entre los precios aceptados y los rechazados. Un marco habitual: si el precio abre fuera del área de valor previa y vuelve a entrar en ella, a menudo rota hasta el otro lado del área de valor; si el precio abandona el área de valor y se mantiene fuera, el mercado puede estar en tendencia para construir valor en precios nuevos.
- **HVN:** soporte y resistencia construidos con participación real. El precio tiende a frenarse, oscilar o revertirse dentro de estas zonas porque ahí viven posiciones comprometidas.
- **LVN:** lo contrario: con poco negocio previo en esos precios, hay poco que frene al precio, así que los LVN tienden a atravesarse con rapidez. Son malos lugares para esperar un rebote y puntos de referencia útiles para stops (más allá del nodo) y objetivos (el lado lejano del nodo).

### Las matemáticas (opcional)

El área de valor se calcula típicamente empezando en el POC y expandiéndose hacia fuera, añadiendo repetidamente la fila de precio vecina (o el par de filas) con mayor volumen, hasta que el volumen acumulado alcanza el porcentaje elegido del total del período. La convención del 70 % refleja aproximadamente una desviación estándar de una distribución normal (~68 %), tratando el perfil como una campana sobre el precio. Los algoritmos exactos y el porcentaje son configurables en la mayoría de las herramientas, así que dos plataformas pueden imprimir VAH/VAL ligeramente distintos a partir de datos idénticos.

> **Nota:** Un perfil solo es tan significativo como el período que cubre. Un perfil de 30 minutos y un compuesto semanal del mismo mercado discreparán: decida primero qué subasta está analizando.

## Véalo en DeepCharts

- [[deep-profile|Deep Profile]] — el indicador central de perfil de volumen/delta dibujado sobre el gráfico.
- [[deep-profile-swing]] — perfiles anclados a swings en lugar de a sesiones fijas.
- [[deep-profile-values]] — traza niveles derivados del perfil, como el POC y los límites del área de valor.
- [[profile-chart-window]] — la ventana dedicada a perfiles TPO y de volumen.
- [[market-profile-tpo]] — la contraparte basada en tiempo (TPO) del perfil de volumen.
- [[dynamic-poc]] — sigue el POC en desarrollo mientras migra a lo largo de la sesión.
- [[bar-poc]] — marca el precio de mayor volumen dentro de cada barra individual.
- [[quick-chart-templates]] — diseños de gráfico de perfil listos para usar (D-VP, W-VP y similares).

## Ejemplo práctico

Supongamos que la sesión de ES de ayer construyó su POC en 5.290,00 con un área de valor de 5.283,00–5.296,00, y que hoy abre en 5.302,00, por encima del VAH de ayer (cifras ilustrativas). En la primera media hora, los vendedores empujan el precio de vuelta por debajo de 5.296,00 y este se mantiene dentro del área de valor antigua. Ese patrón de apertura por encima y posterior reaceptación sugiere que el avance nocturno no encontró negocio, y muchos traders buscarían ahora una rotación a la baja a través del área de valor hacia el POC de 5.290,00, y luego observarían el comportamiento allí: un rebote rápido mantiene viva la historia del día equilibrado; la aceptación por debajo del VAL en 5.283,00 abre la puerta a un día de tendencia bajista. Fíjese en que cada punto de decisión de ese plan es una estructura del perfil, no una conjetura.

[SCREENSHOT: Gráfico intradía de ES con el perfil de ayer superpuesto, anotado con la apertura por encima del VAH, la reentrada en el valor y una flecha hacia el POC etiquetada con la lógica de rotación | dc-es-understanding-volume-profile-01.png]

## Malinterpretaciones comunes

- **"El precio siempre rebota en el POC."** El POC es una referencia, no un muro. En una tendencia fuerte, el precio atraviesa los POC antiguos; el contexto decide.
- **"El área de valor es una ciencia exacta."** Herramientas, porcentajes y configuraciones de agrupamiento distintos desplazan el VAH/VAL unos pocos ticks. Trátelos como zonas, no como líneas.
- **"Un perfil de cualquier período aleatorio es significativo."** Los perfiles describen una subasta concreta. Un perfil que abarca la mitad de una sesión y la mitad de otra no describe nada.
- **"El perfil de volumen y el perfil TPO son lo mismo."** A menudo coinciden pero miden cosas distintas: contratos negociados frente a tiempo pasado. Vea [[market-profile-tpo]].

## Profundice

El perfil de volumen es la teoría de subastas hecha visible; lea [[understanding-auction-theory]] para el marco que hay detrás de la aceptación y el rechazo, y [[understanding-vwap]] para la otra referencia de "precio justo" ampliamente observada y en qué se diferencia del POC. Los límites de sesión cambian lo que significa un perfil: [[understanding-market-structure-sessions]] cubre RTH frente a ETH.

## Artículos relacionados

- [[deep-profile]]
- [[profile-chart-window]]
- [[market-profile-tpo]]
- [[understanding-auction-theory]]
- [[understanding-vwap]]
- [[glossary]]