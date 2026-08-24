---
title: "Rastreador de Desequilibrios (Imbalance Tracker)"
slug: "imbalance-tracker"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Referencia del indicador Rastreador de Desequilibrios (Imbalance Tracker): cómo detecta zonas de desequilibrio de compra/venta, cómo funcionan las zonas frescas y activadas, y cada configuración explicada."
keywords: ["rastreador de desequilibrios", "zonas de desequilibrio", "desequilibrios apilados", "desequilibrio compra venta", "desequilibrio de flujo de órdenes", "imbalance tracker", "zona fresca", "zona activada"]
source_hash: "ae78c233e8f7d886"
ai_translated: true
source_hash: "ae78c233e8f7d886"
---
El Rastreador de Desequilibrios (Imbalance Tracker) es una herramienta avanzada de análisis de mercado que identifica y monitorea desequilibrios entre órdenes de compra y de venta: lugares donde un lado del mercado negoció con mucha más agresividad que el otro. Cuando varios desequilibrios se apilan en niveles de precio consecutivos, el indicador marca el área como una zona en su gráfico y la sigue rastreando hasta que el precio regresa.

Se usa principalmente en el trading de flujo de órdenes: las zonas que dibuja son los mismos desequilibrios apilados que usted encontraría manualmente en un gráfico footprint, detectados y gestionados automáticamente.

## Qué es

En cada nivel de precio, el indicador compara la compra agresiva con la venta agresiva. Cuando la diferencia supera sus umbrales de porcentaje y volumen, y hay acuerdo en suficientes niveles consecutivos, traza una zona de desequilibrio. Las zonas tienen dos estados: **Fresh Zone** (zona fresca: el precio todavía no ha vuelto a probar el área) y **Triggered Zone** (zona activada: el precio ha vuelto a cruzarla).

## Cuándo usarlo

- Para encontrar soportes y resistencias de desequilibrios apilados sin leer cada barra del footprint a mano.
- Para monitorear qué zonas de desequilibrio siguen sin probar (frescas) y cuáles ya han sido revisitadas.
- Para recibir una alerta en el momento en que se forma una nueva área de desequilibrio significativa.
- Para añadir contexto de flujo de órdenes a un gráfico de velas estándar sin cambiar de tipo de gráfico.

## Inicio rápido

1. Añada **Imbalance Tracker** a su gráfico.
2. En la configuración de desequilibrios, revise **Minimum Imbalance %** y **Minimum Volume Diff**: estos dos filtros deciden qué tan significativa debe ser una diferencia antes de contar.
3. Ajuste **Min. Num. Of Consecutive Imb** para exigir desequilibrios apilados en lugar de aislados; valores más altos producen menos zonas, pero más fuertes.
4. En la configuración de trazado, elija valores distintos de **Buy Color** y **Sell Color** para que las zonas del lado comprador y del lado vendedor sean inconfundibles.
5. Opcionalmente, habilite las alertas para que las zonas nuevas le notifiquen con un sonido y una ventana emergente.

[SCREENSHOT: Un gráfico de velas con el Rastreador de Desequilibrios activo, mostrando una zona fresca de desequilibrio del lado comprador que se extiende hacia la derecha desde un impulso alcista y una zona activada atenuada por encima | dc-es-imbalance-tracker-01.png]

## Cómo leerlo

Una zona del lado comprador marca niveles donde los compradores agresivos arrollaron a los vendedores; en la lógica del flujo de órdenes, esos niveles suelen actuar como soporte en un retest, porque los participantes que compraron allí pueden defender el área. Las zonas del lado vendedor son la imagen espejo y suelen actuar como resistencia.

El estado de la zona también contiene información. Una **Fresh Zone** está sin probar: el mercado aún no ha regresado a comprobar si el lado agresivo la defenderá. Una vez que el precio entra en el área, se convierte en una **Triggered Zone** y se recolorea, indicándole que el nivel ya ha sido consumido al menos una vez. Con **Trigger Only Touch** habilitado, la visualización de zonas activadas se limita a las que el precio ha vuelto a probar al menos una vez.

Para la teoría subyacente de compradores agresivos, vendedores y delta, consulte [[orderflow-101]]; para ver cómo lucen los desequilibrios dentro de las barras individuales, consulte [[reading-a-footprint]], o explórelo directamente abajo ajustando la ratio de desequilibrio diagonal y observando qué pares bid×ask se iluminan:

[WIDGET: footprint-lab]

## Referencia de configuración

### Imbalance Settings

| Configuración | Qué hace |
|---|---|
| **Minimum Imbalance %** | La diferencia porcentual mínima entre órdenes de compra y de venta para que un nivel califique: el filtro de significancia. |
| **Minimum Volume Diff** | El umbral de volumen que debe superarse antes de detectar un desequilibrio. Auméntelo en instrumentos activos para ignorar diferencias triviales. |
| **Include zero on imbalance** | Si los ticks con volumen cero en un lado se incluyen en el cálculo del desequilibrio. |
| **Min. Num. Of Consecutive Imb** | Cuántos niveles de precio desequilibrados consecutivos se requieren antes de que el indicador marque un área. |

### Configuración de trazado (Plot Settings)

| Configuración | Qué hace |
|---|---|
| **Num. Extended Bars** | Cuántas barras hacia adelante se dibuja una zona en el gráfico. |
| **Line Width** | Grosor de las líneas de resaltado de las zonas. |
| **Fresh Zone** | Muestra las áreas de desequilibrio que el precio no ha vuelto a probar, con opciones separadas de **Buy Color** y **Sell Color**. |
| **Triggered Zone** | Muestra las zonas que el precio ha cruzado, con las opciones **Enable**, **Trigger Only Touch**, **Buy Trig Color** y **Sell Trig Color**. |

### Alert Settings

| Configuración | Qué hace |
|---|---|
| **Enable** | Activa las notificaciones de sonido y ventana emergente cuando se genera una señal. |
| **Alert-Name** | Selecciona qué sonido de notificación se reproduce. |
| **Popup-message** | Personaliza el texto mostrado en la ventana emergente. |

[SCREENSHOT: El diálogo de configuración del Rastreador de Desequilibrios mostrando el grupo Imbalance Settings con Minimum Imbalance %, Minimum Volume Diff, Include zero on imbalance y Min. Num. Of Consecutive Imb | dc-es-imbalance-tracker-02.png]

## Consejos y errores comunes

- **Un conteo consecutivo demasiado bajo significa ruido.** Un único nivel desequilibrado es común; exigir varios niveles consecutivos es lo que hace que una zona sea significativa.
- **Ajuste los umbrales de volumen por instrumento.** Un **Minimum Volume Diff** que funciona en un futuro de índice líquido marcará todo en un contrato poco negociado, y viceversa.
- **Piense en las impresiones a cero.** **Include zero on imbalance** cambia qué cuenta como desequilibrio en niveles donde un lado no negoció nada en absoluto; pruebe ambos ajustes en su mercado.
- **Vigile el estado de la zona, no solo su ubicación.** Un nivel que ya ha sido activado repetidamente no es la misma operación que una zona fresca sin probar.
- **Mantenga el gráfico legible.** Valores grandes de **Num. Extended Bars** dejan muchas zonas antiguas en pantalla; acorte la extensión si el gráfico se satura.

## Artículos relacionados

- [[orderflow-101]]
- [[reading-a-footprint]]
- [[imbalance-rejector]]
- [[deep-print]]
- [[different-types-of-input]]
- [[indicator-layout]]