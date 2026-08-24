---
title: "Rollover de símbolos (cambio de mes de contrato)"
slug: "symbol-rollover"
category: "Data & Database"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Realice el rollover de un símbolo de futuros al siguiente mes de contrato en DeepCharts para que su gráfico siga el contrato del mes activo."
keywords: ["rollover", "rollover de símbolos", "mes de contrato", "contrato activo", "vencimiento", "gráfico sin volumen", "precio distinto al del bróker", "realizar rollover", "realizar rollback", "cambio de contrato", "rolover"]
source_hash: "5f46fc8cc6fe1cc0"
ai_translated: true
source_hash: "5f46fc8cc6fe1cc0"
---
Los contratos de futuros vencen. A medida que se acerca cada vencimiento, la actividad de trading migra al siguiente mes de contrato, y un gráfico que sigue todavía el contrato antiguo muestra volumen escaso y precios que ya no coinciden con los de su bróker. Al final de esta guía habrá realizado el rollover de un símbolo a su nuevo contrato del mes activo usando la ventana **Manage Rollover**, y sabrá cómo deshacer un rollover si elige el símbolo equivocado.

Si no tiene claro por qué los contratos hacen rollover, lea primero [[understanding-market-structure-sessions|Comprender la estructura del mercado y las sesiones]]: explica el ciclo de rollover en lenguaje sencillo.

## Antes de empezar

- [[connect-data-feed|Una fuente de datos ya está configurada]] — la desconectará durante el rollover y luego la reconectará.
- [[manage-feed-connections|Sabe cómo desconectar y reconectar su fuente de datos]].
- [[understanding-market-structure-sessions|Entiende qué es un cambio de contrato]] (lectura de contexto opcional).

> **Nota:** El rollover cambia localmente a qué mes de contrato apunta el símbolo. No afecta a su cuenta, sus suscripciones ni la configuración de su bróker.

## Pasos

1. Cierre el gráfico de precios del símbolo al que quiere hacer rollover (cierre cualquier ventana de gráfico que lo use).
2. Desconéctese de su fuente de datos.
3. Vaya a **Options → Symbols Rollover**.

[SCREENSHOT: El menú Options abierto en la barra principal de DeepCharts con la entrada Symbols Rollover resaltada | dc-es-symbol-rollover-01.png]

4. Se abre la ventana **Manage Rollover**. Tiene dos paneles: **Contracts in Roll-window** (símbolos con rollover pendiente) y **Contracts Rolled** (símbolos cuyo rollover ya se ha realizado).

[SCREENSHOT: La ventana Manage Rollover mostrando ambos paneles — Contracts in Roll-window con al menos un símbolo listado, y Contracts Rolled — con los botones Perform Rollover y Perform Rollback visibles | dc-es-symbol-rollover-02.png]

5. Haga clic en el símbolo al que quiere hacer rollover en el panel **Contracts in Roll-window**.
6. Presione **Perform Rollover**. El símbolo pasa al nuevo mes de contrato.

[SCREENSHOT: La ventana Manage Rollover justo después de un rollover, con el símbolo ya listado en el panel Contracts Rolled | dc-es-symbol-rollover-03.png]

### Si hizo rollover del símbolo equivocado

La misma ventana incluye un botón **Perform Rollback**. Seleccione el símbolo en el panel **Contracts Rolled** y presione **Perform Rollback** para deshacer el rollover y devolver el símbolo a su mes de contrato anterior.

## Verifique que funcionó

1. Reconecte su fuente de datos.
2. Abra un nuevo gráfico para el símbolo.
3. El gráfico ahora debería mostrar el contrato del mes activo actual: precios en vivo que coinciden con la plataforma de su bróker y volumen de trading normal. Si el gráfico antiguo parecía "muerto" — apenas volumen, precio alejándose del de su bróker — ese es exactamente el síntoma que el rollover corrige.

> **Consejo:** Si prefiere no hacer rollover manualmente en cada ciclo, revise las opciones de contrato continuo en [[price-chart-settings|Configuración del gráfico de precios]]: controlan cómo el gráfico une los meses de contrato entre sí.

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| El gráfico sigue mostrando precios antiguos o datos obsoletos tras el rollover | Elimine los datos locales del símbolo para que se vuelvan a descargar frescos — vea [[delete-market-data]] |
| Aparecen huecos en el precio alrededor de la fecha del rollover | Vea [[gaps-in-price]] — las fechas de rollover son una causa común de huecos aparentes |
| La fuente está conectada pero el gráfico no se mueve en absoluto | Vea [[feed-connected-chart-not-moving]] |
| El símbolo falta o no está suscrito | Compruebe sus suscripciones de bolsas en [[symbol-manage|Symbol Manage]] |

## Artículos relacionados

- [[price-chart-settings]]
- [[gaps-in-price]]
- [[delete-market-data]]
- [[download-data]]
- [[understanding-market-structure-sessions]]
- [[symbol-manage]]