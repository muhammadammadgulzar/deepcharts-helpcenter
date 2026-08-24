---
title: "Identificador de Confluencias"
slug: "confluence-identifier"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "advanced"
time: "7 min read"
description: "Encuentre automáticamente zonas de soporte y resistencia de alta probabilidad donde se alinean niveles del perfil de volumen, giros de precio y retrocesos."
keywords: ["identificador de confluencias", "confluencia", "zonas de soporte y resistencia", "niveles del perfil de volumen", "poc área de valor", "zonas de confluencia", "confluancia"]
source_hash: "7bc29a5f36f1b302"
ai_translated: true
source_hash: "7bc29a5f36f1b302"
---
La mayoría de los niveles fuertes de soporte y resistencia son fuertes porque varias razones independientes señalan el mismo precio: un POC del perfil, un giro anterior, un nivel de retroceso. El Identificador de Confluencias (Confluence Identifier) automatiza ese razonamiento: identifica zonas de soporte y resistencia de alta probabilidad combinando múltiples fuentes de datos de mercado y resaltando los precios donde se alinean.

Es uno de los indicadores más configurables de DeepCharts, por lo que esta referencia recorre cada grupo de configuración en el orden en que los presenta el diálogo.

## Qué es

El Identificador de Confluencias detecta áreas de confluencia a partir de tres familias de evidencia:

- **Niveles del perfil de volumen**: POC, bordes del Área de Valor, Picos y Valles de hasta tres perfiles Volume By Price independientes.
- **Giros de la acción del precio**: máximos y mínimos de giro encontrados por un motor Zig Zag.
- **Niveles de retroceso de la tendencia**: retrocesos del 38.2%, 50%, 61.8% y 75% del giro principal.

Cuando suficientes de estos elementos caen dentro de un rango de precios definido (su sensibilidad en ticks), el indicador resalta ese rango como una zona potencial de soporte o resistencia. Las zonas respaldadas por más confluencias se enfatizan visualmente como más fuertes.

Si los niveles del perfil son la familia menos familiar, pruebe el perfil de volumen interactivo de abajo: pase el cursor sobre las filas y arrastre el porcentaje del Área de Valor para ver de dónde provienen el POC, el VAH y el VAL:

[WIDGET: volume-profile-lab]

## Cuándo usarlo

- Para construir un mapa de niveles objetivo: en lugar de elegir niveles a mano, usted define la evidencia y el indicador puntúa cada precio según cuánta evidencia se acumula ahí.
- Para clasificar las zonas por fuerza: una zona con 5 confluencias es una propuesta de trading distinta de una zona con 2 confluencias, y el coloreado lo refleja.
- Para combinar el análisis de perfiles y la acción del precio en una sola vista sin ejecutar media docena de estudios separados.
- Para enmarcar operaciones: las zonas de confluencia son ubicaciones naturales para entradas, stops y objetivos cuando se alinean con su lectura direccional.

## Inicio rápido

1. Abra un gráfico y haga clic en el icono de gráfico de barras en la esquina superior izquierda para abrir el panel **Indicators**.
2. Haga clic en **Indicators** para abrir la lista completa **Indicator List**.
3. Busque "Confluence Identifier" y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración. Empiece con moderación: habilite un perfil Volume By Price y los giros Zig Zag, y deje los retrocesos desactivados hasta que se familiarice con el resultado.
5. A medida que habilite más fuentes, aumente el **Minimum Number of Confluences** (número mínimo de confluencias) y reduzca la **Tick Sensitivity** (sensibilidad en ticks) para que solo sobrevivan las zonas más significativas. Una configuración de ejemplo de la documentación usa tres perfiles de volumen, giros de precio y retrocesos del último giro con un mínimo de 5 confluencias y una sensibilidad de 3 ticks.

[SCREENSHOT: Un gráfico de futuros con el Identificador de Confluencias activo: varias zonas de soporte/resistencia sombreadas con intensidad de color variable, con la zona más fuerte donde se alinean un POC de perfil, un mínimo de giro y un nivel de retroceso | dc-es-confluence-identifier-01.png]

## Cómo leerlo

- **Cada zona resaltada es un rango de precios donde se alinearon múltiples elementos** dentro de su sensibilidad en ticks. Las zonas por encima del precio actúan como resistencia candidata, las zonas por debajo como soporte candidato.
- **El color codifica la fuerza.** La configuración Support & Resistance Colors vincula el color de la zona al número de confluencias, de modo que las zonas más fuertes (más confluencias) destacan: trátelas como los niveles de decisión principales.
- **Menos zonas y más amplias frente a más zonas y más estrechas es su compromiso.** Valores más pequeños de **Tick Sensitivity** producen zonas más precisas; valores mayores producen zonas más amplias. Un **Minimum Number of Confluences** más alto genera menos zonas pero más fuertes.
- **Las zonas son ubicaciones, no direcciones.** El indicador le dice dónde es probable una reacción, no hacia dónde romperá el precio; combínelo con su lectura de tendencia y de flujo de órdenes.

## Referencia de configuración

### Configuración de datos (Data Settings)

| Configuración | Qué hace |
|---|---|
| **Input Data** | Lo que miden los perfiles: **Volume** (volumen negociado en cada nivel de precio) u **Orders** (número de órdenes ejecutadas). Consulte [[different-types-of-input]]. |
| **Filter Min** | Umbral mínimo que filtra los valores insignificantes. |
| **Filter Max** | Umbral máximo; 0 = sin filtro máximo. |

### Configuración de confluencia (Confluence Settings)

| Configuración | Qué hace |
|---|---|
| **Tick Sensitivity** | El rango de precios, en ticks, dentro del cual los elementos cuentan como alineados. Valores más pequeños = zonas más precisas; valores más grandes = zonas más amplias. |
| **Minimum Number of Confluences** | Cuántos elementos deben alinearse para crear una zona. Valores más altos generan menos zonas pero más fuertes; valores más bajos producen zonas más frecuentes. |
| **Starting Mode** | Dónde comienza el cálculo: **Zig Zag** (usa giros de precio según la lógica Zig Zag) o **Date** (comienza desde una fecha específica). |
| **Start Date** | La fecha de inicio, usada cuando el modo **Date** está seleccionado. |
| **Absolute % of Reversal for Zig Zag Trend** | La reversión mínima del precio usada para identificar los puntos de giro que determinan el inicio del cálculo. |
| **Number of Swings** | Cuántos giros se consideran al determinar el punto de inicio del cálculo. |

### Configuración de giros Zig Zag (Zig Zag Swing Settings)

| Configuración | Qué hace |
|---|---|
| **% Absolute Variation for Zig Zag Inversion** | El porcentaje de reversión del precio usado para identificar los giros que alimentan el cálculo de confluencias. |
| **Enable Zig Zag Swing** | Incluye los máximos y mínimos de giro como elementos de confluencia. |
| **Include Swings in the First Half** | Habilitado: se incluyen los puntos de giro más antiguos. Deshabilitado: solo se consideran los giros recientes. |

> **Nota:** Hay dos Zig Zags en este indicador y cumplen funciones diferentes. El primero (en Confluence Settings) se usa solo para determinar la fecha de inicio del cálculo y puede usar un porcentaje mayor. El segundo (aquí) identifica los giros usados para las confluencias y debe usar un **porcentaje más pequeño** para que se incluyan los giros menores.

### Perfiles Volume By Price

Se pueden habilitar hasta tres perfiles Volume By Price independientes, cada uno con su propio bloque:

| Configuración | Qué hace |
|---|---|
| **Enable** | Activa o desactiva este perfil. |
| **Profile Settings** | Tipo de perfil (Daily, Weekly, Monthly o Composite) más el agrupamiento de ticks y los umbrales de volumen. |
| **Enablements** | Qué elementos del perfil participan en la confluencia: POC, Área de Valor, Picos, Valles, Desequilibrios de delta. |
| **Visual Appearance** | Colores, grosor y estilo de línea para los niveles de este perfil. |
| **Include by Number** | Alterna entre un número fijo de perfiles recientes y todos los perfiles desde la fecha de inicio. |
| **Number of Profiles** | Cuántos perfiles recientes se usan cuando la opción fija está habilitada. |

### Activación de retrocesos de tendencia (Trend Retracement Enables)

| Configuración | Qué hace |
|---|---|
| **Enable Retracements** | Añade los niveles de retroceso (38.2%, 50%, 61.8%, 75%) del giro principal como elementos de confluencia. |
| **Exclude Previous Retracements** | Habilitado: solo se usan los retrocesos del giro más reciente. Deshabilitado: también se incluyen los retrocesos anteriores. |

### Configuración de desarrollo (Developing Settings)

| Configuración | Qué hace |
|---|---|
| **Zig Zag line display** | Muestra las líneas Zig Zag en el gráfico, con colores personalizables para giros alcistas y bajistas, para que pueda ver la estructura de mercado con la que trabaja el indicador. |

### Colores de soporte y resistencia (Support & Resistance Colors)

| Configuración | Qué hace |
|---|---|
| **Zone colors by confluence count** | Establece los colores de las zonas según cuántas confluencias respaldan la zona, de modo que las zonas más fuertes se enfatizan visualmente. |

[SCREENSHOT: El diálogo de configuración del Identificador de Confluencias mostrando el grupo Confluence Settings (Tick Sensitivity, Minimum Number of Confluences, Starting Mode) con los tres bloques de perfiles Volume By Price contraídos debajo | dc-es-confluence-identifier-02.png]

## Consejos y errores comunes

- **Escale los umbrales con la evidencia.** A medida que habilita más elementos (varios VBP, giros, retrocesos), aumente el **Minimum Number of Confluences** y reduzca la **Tick Sensitivity**; de lo contrario, casi cada precio califica como zona y la herramienta deja de discriminar.
- **Configure bien los dos porcentajes de Zig Zag.** Una mala configuración común es usar el mismo porcentaje para ambos: el Zig Zag de la fecha de inicio debe ser más grueso (% mayor) y el Zig Zag de giros más fino (% menor) para que los giros menores puedan contribuir a las confluencias.
- **Despeje el gráfico con indicadores de perfil separados.** Para un gráfico más limpio, puede desactivar aquí las líneas de VBP y mostrar los perfiles de volumen con indicadores separados como [[deep-profile]]: las zonas de confluencia se siguen calculando a partir de los elementos habilitados.
- **Valide las zonas contra el concepto.** Si no está seguro de por qué un POC o un borde del Área de Valor debería actuar como soporte, lea primero [[understanding-volume-profile]]: el indicador es tan útil como su interpretación de la evidencia que acumula.

## Artículos relacionados

- [[understanding-volume-profile]]
- [[deep-profile]]
- [[zig-zag]]
- [[swing-point]]
- [[different-types-of-input]]
- [[indicator-layout]]