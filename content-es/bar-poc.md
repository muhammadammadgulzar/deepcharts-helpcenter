---
title: "POC de barra"
slug: "bar-poc"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Marca el Punto de Control — el precio con mayor volumen — de cada barra y puede extenderlo hacia la derecha como nivel de referencia vivo hasta que el precio vuelva a negociar a través de él."
keywords: ["POC de barra", "punto de control", "POC por barra", "POC extendido", "POC desnudo", "extensión de POC", "punto de control de barra", "indicador poc"]
source_hash: "9ba884252370044c"
ai_translated: true
source_hash: "9ba884252370044c"
---
El indicador Bar POC encuentra el Punto de Control (POC) de cada barra — el único precio donde se negoció más volumen dentro de esa barra — y lo resalta directamente sobre sus velas. También puede extender cada POC hacia la derecha como una línea horizontal, convirtiendo el precio más activo de una barra pasada en un nivel de referencia vivo que permanece en su gráfico hasta que el precio vuelve a él.

Mientras que un perfil de sesión le da un POC por día, Bar POC le da uno por barra, lo que lo convierte en una forma rápida de ver exactamente dónde se hizo el negocio más intenso dentro de cada vela.

## Qué es

Bar POC es un indicador de niveles de flujo de órdenes. Para cada barra localiza el nivel de precio con el mayor volumen negociado y lo marca con un pequeño rectángulo de resaltado; opcionalmente dibuja una línea de extensión desde ese POC hacia el borde derecho del gráfico. Responde a la pregunta "¿a qué precio cambió de manos realmente la mayor parte del volumen de esta barra, y ha probado el mercado ese precio desde entonces?"

Bar POC aplica la misma lógica que un perfil de volumen, una barra a la vez: pase el cursor sobre las filas del perfil interactivo de abajo para ver cómo el precio con mayor volumen (la fila magenta del POC) destaca sobre el resto:

[WIDGET: volume-profile-lab]

[SCREENSHOT: Ventana de gráfico con Bar POC aplicado — velas con pequeños rectángulos de resaltado en el precio de mayor volumen de cada barra, y dos o tres líneas de POC extendidas corriendo hasta el borde derecho del gráfico, una de ellas mostrando una etiqueta de duración | dc-es-bar-poc-01.png]

## Cuándo usarlo

- Opera retesteos: los POC intactos (extendidos) son imanes y niveles de reacción naturales porque allí se transaccionó volumen real.
- Quiere ver si el negocio de una barra se hizo cerca de su máximo, su medio o su mínimo: una lectura rápida de aceptación frente a rechazo dentro de cada vela.
- Usa el coloreado de agresión para ver si compradores o vendedores dominaron el área del POC de una barra clave.
- Quiere niveles intradía mantenidos automáticamente sin dibujar líneas a mano.

## Inicio rápido

1. Abra la lista **Indicator List** en su gráfico.
2. Busque **Bar POC** y haga clic en **+** para añadirlo.
3. Haga clic en el icono **Settings** junto al indicador.
4. Establezca **Days to Load** para cubrir el historial desde el que opera: más días significan más POC históricos y extensiones.
5. Establezca **Filter Mode** en **Auto** para que el algoritmo interno de la plataforma resalte solo los POC más relevantes en lugar de marcar cada barra.
6. En **Extended POC**, active **Enable** para que los POC no revisitados se proyecten hacia la derecha como niveles, y luego aplique.

[SCREENSHOT: Diálogo de configuración de Bar POC mostrando la sección General con Days to Load, Input Data, el menú desplegable Filter Mode abierto en Auto, los campos Auto Std. Dev. y Manual Min. Vol., y los grupos de Plot Settings (HighLight, Extended POC, Duration on Extension) debajo | dc-es-bar-poc-02.png]

## Cómo leerlo

- **Posición del POC dentro de la barra.** Un POC cerca de la parte superior de una barra alcista significa que el mercado aceptó precios más altos e hizo negocio allí; un POC dejado atrás en la parte inferior de una barra alcista larga significa que el movimiento por encima de él ocurrió con comparativamente poco volumen y puede ser frágil.
- **Las líneas de extensión son asuntos pendientes.** Un POC extendido es un precio donde se negoció un volumen intenso pero que el mercado no ha revisitado. Estos niveles suelen actuar como soporte o resistencia en el primer retesteo, por lo que son ubicaciones naturales para entradas, objetivos y colocación de stops.
- **Color de agresión.** La opción **Bid/Ask Color** colorea el rectángulo de resaltado según la agresión de venta/compra en el área del POC, de modo que puede ver de un vistazo qué lado estaba golpeando el mercado en el precio más activo de la barra.
- **El filtrado importa.** Con **Filter Mode** en **None** cada barra recibe un POC y el gráfico se convierte en ruido. El filtrado automático o manual reduce la visualización a POC respaldados por volumen significativo.

## Referencia de configuración

Agrupada como en el diálogo de configuración.

### General Settings

| Configuración | Qué hace |
|---|---|
| **Days to Load** | Define el número de días históricos cargados para el indicador. |
| **Input Data** | Selecciona los datos de entrada que usa el cálculo. Consulte [[different-types-of-input]] para los tipos disponibles. |
| **Min/Max Filter** | Filtra las órdenes por tamaño de contrato, de modo que el cálculo del POC puede ignorar operaciones fuera del rango de tamaño elegido. |
| **Filter Mode** | **None**: no se aplica ningún filtro. **Manual**: aplica un filtro manual definido por el usuario. **Auto**: aplica un filtro automático usando los algoritmos internos de la plataforma para resaltar los POC más relevantes. |
| **Auto Std. Dev.** | Define la desviación estándar usada por el filtro automático. Valores más altos conservan solo los POC más excepcionales. |
| **Manual Min. Vol.** | Define el volumen mínimo requerido para un POC al usar el filtrado manual. |

> **Nota:** Estas configuraciones se pueden ajustar por separado para el horario regular de negociación (Regular Trading Hours, RTH), de modo que puede filtrar la sesión regular de forma diferente a la sesión nocturna.

### Plot Settings — HighLight

| Configuración | Qué hace |
|---|---|
| **Show Rectangle** | Activa o desactiva el rectángulo que resalta el precio del POC dentro de la barra. |
| **Line Width** | Grosor del borde del rectángulo. |
| **Show Background** | Activa o desactiva el relleno de fondo del rectángulo. |
| **Back Opacity** | Transparencia del relleno de fondo. |
| **Bid/Ask Color** | Colorea el rectángulo según la agresión de venta/compra en el área del POC. |

### Plot Settings — Extended POC

| Configuración | Qué hace |
|---|---|
| **Enable** | Extiende una línea desde el POC hacia el borde derecho del gráfico hasta que el precio interactúa con ella. |
| **Line Width** | Grosor de la línea de extensión. |
| **Max Bar Extension** | Número máximo de barras que puede durar una extensión. Establezca **0** para extender hasta el final del gráfico. |
| **Reset Start Day** | Cuando está habilitado, restringe las extensiones únicamente al día actual. |
| **Remove Line On Shadow Triggered** | Termina la extensión la primera vez que el precio toca el nivel (incluso con una mecha) en lugar de esperar una ruptura basada en el cierre. |
| **Tick Margin Breakout** | Número mínimo de ticks que el precio debe atravesar el nivel para confirmar una ruptura y eliminar la línea. |

### Plot Settings — Duration on Extension

| Configuración | Qué hace |
|---|---|
| **Enable** | Muestra la duración (días, horas, minutos) de la extensión del POC junto a la línea. |
| **Text Size** | Tamaño del texto de duración. |
| **Text Color** | Color del texto de duración. |

## Consejos y errores comunes

- **Comience con el filtrado Auto.** Ajustar manualmente **Manual Min. Vol.** por instrumento es propenso a errores; el filtro automático se adapta mediante su umbral de desviación estándar y es la ruta más rápida hacia un gráfico limpio.
- **Las extensiones antiguas son un contexto más fuerte que las recientes.** Un POC que ha sobrevivido muchas horas sin ser probado (visible con **Duration on Extension** habilitado) tiene más peso que uno impreso hace tres barras.
- **Elija su regla de toque deliberadamente.** **Remove Line On Shadow Triggered** trata una sola mecha como una prueba; dejarlo desactivado exige una ruptura genuina confirmada por **Tick Margin Breakout**. Los scalpers suelen querer la regla de la mecha, los operadores de niveles la regla de la ruptura.
- **No confunda Bar POC con el POC de sesión.** El Punto de Control de toda la sesión proviene de una herramienta de perfil como [[deep-profile]]; Bar POC trabaja a la resolución de una sola vela. Consulte [[understanding-volume-profile]] para ver cómo encajan los POC en la imagen general de la subasta.

## Artículos relacionados

- [[understanding-volume-profile]]
- [[dynamic-poc]]
- [[deep-profile]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]