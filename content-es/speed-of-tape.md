---
title: "Velocidad de la cinta"
slug: "speed-of-tape"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Mide a qué velocidad opera el mercado en una ventana temporal elegida, para que pueda detectar picos de actividad, aceleraciones y zonas muertas."
keywords: ["velocidad de la cinta", "speed of tape", "indicador de velocidad de negociación", "lectura de la cinta", "intensidad de actividad del mercado", "operaciones por segundo", "ritmo de la cinta"]
source_hash: "a8ff9848277e0e00"
ai_translated: true
source_hash: "a8ff9848277e0e00"
---
Speed of Tape monitoriza la intensidad de la actividad del mercado: cuánto volumen, cuántas órdenes o cuántas operaciones pasan en una ventana temporal fija. Cuando la cinta se acelera, los participantes tienen urgencia; cuando se ralentiza hasta arrastrarse, nadie está comprometido. Este indicador convierte ese instinto de lectura de la cinta en una serie medible y graficable.

Es un medidor de ritmo, no de dirección: le dice con cuánta intensidad está trabajando el mercado, y su coloreado de estilo vela insinúa qué lado está haciendo el trabajo.

Hágase una idea del ritmo con la cinta en vivo de abajo: déjela correr y luego pase el cursor para pausarla e inspeccionar impresiones individuales mientras los contadores de compra/venta siguen avanzando.

[WIDGET: tape-lab]

## Qué es

El indicador mide la actividad por intervalo de tiempo, la ventana **Number Seconds**, usando como entrada su elección de volumen, órdenes u operaciones ejecutadas. El resultado se traza como barras de estilo vela en un panel separado, con coloreado alcista y bajista que refleja una participación fuerte de compradores o de vendedores. Los filtros y una opción de desviación estándar le permiten conservar solo las lecturas estadísticamente inusuales.

[SCREENSHOT: Ventana de gráfico con el indicador Speed of Tape en un panel inferior — barras de velocidad de estilo vela disparándose durante una ruptura, con barras de color alcista en el impulso y barras más pequeñas durante la consolidación previa | dc-es-speed-of-tape-01.png]

## Cuándo usarlo

- Quiere una alerta temprana de que la actividad está aumentando antes de que una ruptura se extienda: el ritmo suele subir con el movimiento, o justo antes de él.
- Identifica patrones de aceleración: aumentos sucesivos de velocidad confirman la urgencia creciente detrás de una tendencia.
- Evita los mercados muertos: una velocidad de cinta persistentemente baja señala condiciones en las que las rupturas tienden a fallar.
- Complementa el análisis de footprint o de perfil con una dimensión de ritmo puro que ninguno de los dos muestra directamente.

## Inicio rápido

1. Abra la **Indicator List** en su gráfico y añada **Speed of Tape**.
2. Abra la **Settings** (configuración) del indicador.
3. Establezca **Input Data** en **Trades** para medir el recuento de ejecuciones, o mantenga **Volume** para ponderar por tamaño (consulte [[different-types-of-input]]).
4. Establezca **Number Seconds** en el intervalo sobre el que quiere medir la velocidad: los intervalos más cortos reaccionan más rápido, los más largos suavizan la lectura.
5. Deje **Filter Min** y **Filter Max** sin establecer al principio; añada un **Filter Min** más tarde para marcar solo los periodos genuinamente rápidos.

[SCREENSHOT: Diálogo de configuración de Speed of Tape abierto en la sección General — el menú desplegable Input Data expandido mostrando Volume, Order y Trades, con Number Seconds y los campos de filtro visibles debajo | dc-es-speed-of-tape-02.png]

## Cómo leerlo

- **Barras altas**: alta actividad para la ventana medida: urgencia, participación y, normalmente, una continuación más limpia.
- **Secuencia creciente de barras**: aceleración: cada ventana está más activa que la anterior, típico de un movimiento que reúne participación real.
- **Pico y luego colapso**: un estallido que no encontró continuación; a menudo marca puntos de clímax o de agotamiento.
- **Barras de color alcista frente a barras de color bajista**: participación fuerte de compradores frente a participación fuerte de vendedores, indicándole qué lado generó el ritmo.
- **Barras planas y diminutas**: el mercado está al ralentí; trate los extremos del rango y las señales con escepticismo adicional hasta que vuelva el ritmo.

## Referencia de configuración

### Configuración general

| Configuración | Qué hace |
|---|---|
| **Input Data** | Qué se cuenta: **Volume** (cantidad de volumen negociado en el periodo), **Order** (número de órdenes colocadas durante el periodo) o **Trades** (número de operaciones ejecutadas durante el periodo). |
| **Filter Min** | Umbral mínimo: solo se marcan las barras que superan este nivel. |
| **Filter Max** | Umbral máximo: solo se marcan las barras por debajo de este nivel. |
| **Number Seconds** | El intervalo de tiempo (en segundos) en el que se mide la velocidad. |
| **Std Dev Per Filter** | Valor de desviación estándar para filtrar los datos a un rango estadístico específico. |

### Subgráficos

| Configuración | Qué hace |
|---|---|
| **Bull Border / Bull Fill** | Colores de las velas positivas que muestran una participación fuerte de compradores. |
| **Bear Border / Bear Fill** | Colores de las velas negativas que muestran una participación fuerte de vendedores. |
| **Subgraph Style** | Estilo de dibujo: **Candlesticks**. |
| **Line Style / Line Width** | Estilo de renderizado y grosor. |
| **Short Name** | Etiqueta personalizada mostrada en la leyenda del panel. |

## Consejos y errores comunes

- **Elija la ventana deliberadamente.** Un valor corto de **Number Seconds** hace el panel nervioso; uno largo oculta los microestallidos. Ajústelo a cuánto tarda en desarrollarse su configuración de operación típica.
- **La velocidad no es dirección.** Una cinta rápida puede ser rápida en ambas direcciones (una batalla). Lea aquí el ritmo y la dirección en herramientas de delta como [[delta-bar]].
- **Use Std Dev Per Filter para encontrar lo inusual.** Filtrar a lecturas más allá de una banda estadística conserva solo las ventanas que genuinamente se desvían del ritmo normal, que es donde está la información.
- **Combine, no aísle.** El indicador es más efectivo junto al perfil de volumen y al análisis de delta: el ritmo confirma si los niveles basados en estructura están siendo atacados con participación real.
- **Conozca la diferencia con la variante instantánea.** [[speed-of-tape-instant]] se centra en la velocidad de la cinta actual e instantánea de las barras más recientes; este indicador traza la serie de velocidad a lo largo del historial del gráfico.

## Artículos relacionados

- [[speed-of-tape-instant]]
- [[delta-bar]]
- [[adv-time-and-sales]]
- [[understanding-volume-profile]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]