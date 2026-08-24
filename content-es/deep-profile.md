---
title: "Deep Profile (Perfil de volumen / delta)"
slug: "deep-profile"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "Referencia completa de Deep Profile, el indicador de volumen por precio de DeepCharts: tipos de perfil, períodos, división por sesiones, POC, picos y valles, fusión y división."
keywords: ["perfil de volumen", "perfil de delta", "vbp", "volumen por precio", "perfil compuesto", "perfil de sesión", "poc", "fusionar perfiles", "el perfil cambia al hacer zoom"]
source_hash: "904eb27456482ca1"
ai_translated: true
source_hash: "904eb27456482ca1"
---
Deep Profile es el indicador de volumen por precio de DeepCharts: traza la actividad de trading por precio en lugar de por tiempo, dibujando un histograma de cuánto volumen (o delta) se operó en cada nivel de precio. Los distintos botones de perfil del gráfico habilitan todos este mismo indicador: cada botón es una configuración preestablecida diferente de Deep Profile.

Donde un gráfico de velas responde "qué pasó y cuándo", un perfil responde "dónde se hizo el negocio": qué precios aceptó el mercado y cuáles rechazó.

## Qué es

Deep Profile construye histogramas del volumen ejecutado por nivel de precio sobre un período que usted elige: la última sesión, un perfil por día, un único compuesto sobre todos los datos cargados, exactamente lo visible en pantalla, o cualquier área personalizada que seleccione. El histograma puede mostrar volumen total, división ask/bid, delta, o delta y volumen juntos.

## Cuándo usarlo

- Quiere localizar los precios donde se hizo más negocio: soportes/resistencias basados en volumen realmente operado, no en líneas trazadas a ojo.
- Opera niveles de sesión: el POC del día anterior, nodos de alto volumen y vacíos de bajo volumen.
- Quiere comparar la presión compradora frente a la vendedora por precio (perfiles Ask/Bid o Delta).
- Necesita el perfil de un área específica — una consolidación, un swing, un pico de noticias — mediante los períodos Visible o Custom.

## Inicio rápido

1. Abra un gráfico y añada **Deep Profile** desde el botón **Indicators** del gráfico (o haga clic en uno de los botones de perfil: son configuraciones preestablecidas de este indicador).
2. Abra la configuración y establezca **VBP Type** en **Volume Profile**.
3. Establezca **VBP Period** en **Multiple** con **Length Type** = Days y un **Length Value** de 1 para un perfil por día.
4. Aplique: cada día muestra ahora su propio histograma de volumen. Pruebe el perfil en vivo a continuación: pase el cursor sobre las filas y arrastre el Value Area % para ver cómo responden el POC y los límites VAH/VAL.

[WIDGET: volume-profile-lab]

### Configuración inicial recomendada

Sugerencias, no valores predeterminados:

| Área | Inicio sugerido |
|---|---|
| **VBP Type** | Primero **Volume Profile**; añada un **Delta Profile** más adelante para ver la presión direccional |
| **VBP Period** | **Multiple**, Length Type = Days, Length Value = 1 |
| **Input Data** | **Volume**; pruebe **Aggregate** cuando le interesen las órdenes grandes reconstruidas (consulte [[different-types-of-input]]) |
| **Agrupamiento de ticks** | **Automatic**; cambie a Manual con Manual Tick = 1 si sus niveles se desplazan al hacer zoom |
| **POC** | Habilitado, con **Show Line** activado para que el nivel se extienda de forma visible |
| **Peak and Valley** | Habilítelo cuando se sienta cómodo: empiece con mayor sensibilidad para obtener menos nodos y más significativos |

## Cómo leerlo

- **El histograma**: las barras más largas marcan los precios donde se operó más volumen: áreas de aceptación donde el mercado pasó tiempo haciendo negocio. Las barras cortas marcan rechazo: precios que el mercado atravesó rápidamente.
- **POC (Point of Control)**: el nivel donde ocurrió el mayor volumen de trading dentro del perfil. Actúa como el centro gravitacional del período y es una referencia ampliamente observada.
- **POC en desarrollo (Developing POC)**: con Line Type establecido en **Developing**, ve el rastro histórico de migración del POC a medida que se construyó la sesión, útil para juzgar si el valor se movía hacia arriba o hacia abajo.
- **Picos y valles**: los picos son nodos de alto volumen (normalmente mostrados en rojo) donde el precio tiende a frenarse; los valles son zonas de bajo volumen (normalmente verdes) que el precio tiende a atravesar rápidamente.
- **Perfiles de delta**: un delta positivo en un nivel significa que los compradores agresivos superaron allí a los vendedores agresivos; un delta negativo sostenido hacia un área de bajo volumen puede señalar venta de iniciativa.

Para los conceptos subyacentes — área de valor, HVN/LVN y cómo los perfiles enmarcan un día de trading — consulte [[understanding-volume-profile]]. Si solo quiere los niveles clave (POC, área de valor, VWAP) sin el histograma, use [[deep-profile-values]].

## Referencia de configuración

Agrupada como en el diálogo del indicador.

### Configuración general

| Configuración | Qué hace |
|---|---|
| **VBP Type** | Variedad de perfil: **Volume Profile** (volumen total operado en cada nivel de precio), **Ask/Bid Volume Profile** (presión compradora y vendedora separadas), **Delta Profile** (diferencia entre compradores y vendedores agresivos por nivel), **Delta and Total Volume** (delta a la izquierda, volumen a la derecha) |
| **VBP Period** | Alcance de los datos: **Latest** (solo el perfil más reciente), **Multiple** (perfiles separados por período de tiempo seleccionado), **Composite** (un único perfil sobre todos los datos cargados), **Visible** (perfil de exactamente los datos en pantalla: se recalcula al desplazarse y hacer zoom), **Custom** (perfil sobre cualquier área del gráfico seleccionada a mano, con atajos en la barra de herramientas izquierda) |
| **Length Type / Length Value** | Frecuencia del perfil: p. ej. Length Type = Days con Length Value = 2 crea un nuevo perfil cada dos días. Se admiten unidades de minutos, diarias, semanales y mensuales |

### Configuración de datos

| Configuración | Qué hace |
|---|---|
| **Input Data** | Base de cálculo: **Volume**, **Order**, **Aggregate** o **Number of Trades** (recuentos de operaciones individuales en lugar de volumen total). Distintos tipos de entrada producen formas de perfil visiblemente diferentes: consulte [[different-types-of-input]] |
| **Min and Max Filter** | Umbrales de tamaño: p. ej. un filtro mínimo de 20 excluye las órdenes menores de 20 |
| **Tick Grouping** | Altura de la barra: **Automatic** (calculada por DeepCharts) o **Manual** (p. ej. Manual Tick = 5 agrupa cinco ticks por barra) |

> **Nota:** Con el agrupamiento de ticks Automatic, las alturas de las barras — y por tanto los precios exactos del POC y los niveles — pueden desplazarse al hacer zoom en la escala de precios. Para congelar los niveles, establezca el agrupamiento en Manual con Manual Tick = 1.

### Filter / Split Time

| Configuración | Qué hace |
|---|---|
| **Filter Mode: Splitted** | Dibuja múltiples perfiles dentro del mismo día de trading: por ejemplo, perfiles de sesión ETH y RTH separados |
| **Filter Mode: Triple + Custom Time** | Tres perfiles separados por día sobre rangos de tiempo personalizados |

> **Advertencia:** Los tiempos de filtro personalizados usan la zona horaria de la bolsa del instrumento que está operando: siempre, independientemente de su reloj local. Introducir aquí horas locales construye silenciosamente perfiles sobre las horas equivocadas.

### POC del perfil

| Configuración | Qué hace |
|---|---|
| **Enable** | Activa o desactiva la visualización del POC: el nivel con el mayor volumen operado |
| **Highlight Enable / Color** | Resalta la barra del POC con un color personalizado |
| **Show Line / Line Type** | Dibuja una línea horizontal del POC; **Developing** muestra las ubicaciones históricas del POC a medida que migraron |
| **Extended Line Till End Window** | Extiende la línea del POC a través del gráfico visible |
| **Line Color / Width** | Estilo de la línea del POC |

### Peak and Valley

| Configuración | Qué hace |
|---|---|
| **Peaks / Valleys** | Resalta los nodos de alto volumen (picos) y las zonas de bajo volumen (valles) |
| **Sensitivity** | Una sensibilidad más alta filtra el ruido: menos detecciones pero más significativas |

[SCREENSHOT: Diálogo de configuración de Deep Profile abierto en la sección General settings mostrando los menús desplegables VBP Type y VBP Period | dc-es-deep-profile-01.png]

### Fusionar y dividir perfiles

Haga clic con el botón derecho en cualquier perfil del gráfico para combinar o dividir períodos: fusionar con el perfil anterior o el siguiente, dividir de nuevo un perfil fusionado, o restablecer para deshacer todas las fusiones. Use esto para combinar ayer y hoy en una sola distribución, o para aislar una única sesión de un compuesto.

[SCREENSHOT: Menú contextual de clic derecho sobre un perfil mostrando las opciones de fusión, división y restablecimiento | dc-es-deep-profile-02.png]

## Consejos y errores comunes

- **"Solo veo un perfil grande / quiero uno por día."** VBP Period = Composite construye un único perfil sobre todo. Cambie a **Multiple** con Length Type = Days, Length Value = 1. Tenga en cuenta también que la configuración de días a cargar del gráfico limita hasta dónde pueden existir perfiles: aumente los días cargados si faltan perfiles antiguos.
- **"El perfil cambia cuando hago zoom."** O bien VBP Period es **Visible** (recalcular con la vista es su propósito), o el agrupamiento de ticks Automatic está redimensionando las barras: establezca Manual Tick = 1 para fijar los niveles.
- **"La forma de mi perfil difiere de otra plataforma."** Compare el tipo de Input Data, los filtros Min/Max, el agrupamiento de ticks y la división de sesiones ETH/RTH antes de asumir datos incorrectos: cada uno cambia la forma de manera legítima.
- **Perfil de una sola consolidación:** VBP Period = **Custom** y seleccione el área, o **Visible** y encuadre el área en pantalla.
- **Perfiles nocturnos y RTH separados:** Filter Mode = **Splitted** con la opción RTH (dos perfiles por día), o **Triple** con rangos de tiempo personalizados.

## Artículos relacionados

- [[understanding-volume-profile]]
- [[deep-profile-values]]
- [[deep-profile-swing]]
- [[profile-chart-window]]
- [[different-types-of-input]]
- [[indicator-layout]]