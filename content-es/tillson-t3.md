---
title: "Tillson T3"
slug: "tillson-t3"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Configure e interprete el Tillson T3, una media móvil suavizada avanzada que reduce el retardo en comparación con las medias móviles tradicionales."
keywords: ["tillson t3", "media móvil t3", "indicador t3", "media móvil suavizada", "factor de volumen", "tilson t3", "media móvil de bajo retardo"]
source_hash: "713ba26b5585da81"
ai_translated: true
source_hash: "713ba26b5585da81"
---
El Tillson T3 es un indicador de suavizado avanzado desarrollado por Tim Tillson. Se comporta como una media móvil, pero aplica múltiples capas de suavizado, lo que le da una línea notablemente más suave con menos retardo que una media móvil simple o exponencial de la misma longitud.

Si ya usa una [[moving-average|Media móvil]] estándar y le resulta demasiado nerviosa o demasiado lenta, el T3 es el siguiente paso natural: filtra el ruido sin quedarse tan atrás del precio.

## Qué es

El T3 responde a la pregunta "¿hacia dónde va realmente el precio una vez eliminado el ruido?". Traza una única línea suavizada sobre el gráfico de precios. Por su construcción, la línea gira con el precio antes que una media móvil convencional de suavidad comparable: esa reducción del retardo es la razón de ser del indicador. Para percibir el compromiso de retardo que el T3 mejora, alterne entre SMA y EMA y arrastre el deslizador de longitud en la demostración de abajo.

[WIDGET: ma-lab]

Un ajuste llamado **Volume Factor** (factor de volumen) controla el equilibrio entre capacidad de respuesta y suavidad, de modo que un mismo indicador puede ajustarse desde "línea de señal rápida" hasta "filtro de tendencia lento" sin cambiar su longitud.

## Cuándo usarlo

- Como filtro de tendencia: opere solo en la dirección de la pendiente del T3.
- Como referencia dinámica de soporte/resistencia en mercados con tendencia, de forma similar a como los traders usan una EMA.
- Como sustituto más suave de una media móvil en configuraciones de cruce, cuando una MA normal produce demasiados vaivenes.
- En instrumentos volátiles o marcos temporales intradía rápidos donde una media móvil sin tratar produce demasiado ruido.

## Inicio rápido

1. Abra un gráfico y haga clic en el icono de gráfico de barras en la esquina superior izquierda para abrir el panel **Indicators**.
2. Haga clic en **Indicators** para abrir la lista completa **Indicator List**.
3. Busque "Tillson T3" y haga clic en **+** para añadirlo.
4. Haga clic en el icono de engranaje junto al indicador para abrir su configuración.

Una configuración inicial sensata es la predeterminada: **Length** 14, **Volume Factor** 0.618, **Input Data** Close. Con **Auto Color** establecido en **Slope**, la línea cambia de color cuando cambia su dirección, lo que permite leer la tendencia de un vistazo.

[SCREENSHOT: Un gráfico de precios con el Tillson T3 trazado sobre las velas, Auto Color = Slope de modo que la línea muestra un color en los tramos ascendentes y el color secundario en los descendentes | dc-es-tillson-t3-01.png]

## Cómo interpretarlo

- **La pendiente** es la señal principal. Un T3 ascendente indica presión alcista; un T3 descendente indica presión bajista. Con **Auto Color: Slope** habilitado, el cambio de color marca cada cambio de dirección.
- **El precio en relación con la línea**: un precio que se mantiene por encima de un T3 ascendente respalda un sesgo alcista; un precio que se mantiene por debajo de un T3 descendente respalda un sesgo bajista.
- **Línea aplanada**: cuando el T3 se aplana y el precio lo cruza repetidamente, el mercado está en rango; las señales de seguimiento de tendencia de cualquier media móvil no son fiables en ese estado.

Como el T3 está muy suavizado, trátelo como una herramienta de tendencia y sesgo, no como un disparador de entrada preciso. Combínelo con una herramienta de momento como el [[rsi|RSI]] o con contexto de flujo de órdenes para el timing.

## Referencia de configuración

### Configuración general

| Ajuste | Qué hace |
|---|---|
| **Length** | Número de barras usadas en el proceso de suavizado. Predeterminado: 14. Acórtelo para marcos temporales más rápidos, alárguelo para filtrar la tendencia en marcos temporales superiores; ajústelo a la volatilidad de su instrumento. |
| **Volume Factor** | Controla la intensidad del suavizado, normalmente en el rango de 0 a 1. Predeterminado: 0.618 (la proporción áurea). Valores más bajos hacen la línea más reactiva con menos retardo; valores más altos aumentan la intensidad del suavizado, produciendo una línea más suave que filtra más ruido. |
| **Input Data** | Qué serie de precios alimenta el cálculo: **High** (sensible a los movimientos alcistas), **Low** (sensible a los movimientos bajistas), **Open** (precio inicial de la barra), **Close** (predeterminado: el precio de cierre de la barra) o **Volume** (análisis ponderado por volumen). Consulte [[different-types-of-input]]. |

### Subgráfico

| Ajuste | Qué hace |
|---|---|
| **Color** / **Secondary Color** | Los colores de línea alcista y bajista usados cuando el coloreado automático está activo. |
| **Subgraph Style** | Cómo se dibuja la serie. Predeterminado: **Line**. |
| **Auto Color** | Establézcalo en **Slope** para recolorear la línea automáticamente según la dirección del indicador. |
| **Line Style** | Predeterminado: **Solid**; hay alternativas discontinuas disponibles. |
| **Line Width** | Grosor de la línea. Predeterminado: 1. Auméntelo para hacer la línea de tendencia más prominente. |
| **Short Name** | Etiqueta personalizada mostrada en la leyenda del gráfico. |

[SCREENSHOT: El diálogo de configuración del Tillson T3 mostrando el grupo General (Length 14, Volume Factor 0.618, Input Data Close) y el grupo Subgraph debajo | dc-es-tillson-t3-02.png]

## Consejos y errores comunes

- **No ajuste Length y Volume Factor al mismo tiempo.** Cambie uno, observe, y luego cambie el otro: ambos afectan a la suavidad, y ajustarlos a la vez hace difícil saber qué cambio ayudó.
- **Una línea más suave no es automáticamente mejor.** Elevar mucho el Volume Factor hace el T3 muy limpio, pero también más lento para confirmar reversiones. Ajuste el valor a su tiempo de mantenimiento de posiciones.
- **Los mercados en rango derrotan a toda media móvil**, incluido el T3. Si la línea está plana, manténgase al margen o cambie a herramientas de rango en lugar de tomar cada cruce.
- Compárelo una vez lado a lado con una [[moving-average|media móvil]] estándar de la misma longitud: ver la diferencia de retardo en su propio instrumento es la forma más rápida de entender lo que el T3 le aporta.

## Artículos relacionados

- [[moving-average]]
- [[super-trend]]
- [[linear-regression]]
- [[different-types-of-input]]
- [[indicator-layout]]