---
title: "Análisis de rendimiento (Signal Performance)"
slug: "performance-analysis"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Genere estadísticas de trading por cuenta: curva de capital, drawdown, detalle por operación, desglose por símbolo y rentabilidad por hora."
keywords: ["análisis de rendimiento", "signal performance", "informe de estrategia", "mostrar informes", "estadísticas de trading", "curva de capital", "drawdown", "run-up", "lista de operaciones", "análisis temporal", "exportar csv", "tasa de acierto"]
source_hash: "f3821e0fa6b492b8"
ai_translated: true
source_hash: "f3821e0fa6b492b8"
---
El Strategy Report convierte el historial de operaciones de una cuenta en estadísticas: beneficio total y drawdown, una lista por operación, un desglose por símbolo, una curva de capital y una vista de rentabilidad por hora que muestra qué horas del día realmente le hacen ganar dinero.

Una peculiaridad de nombres de entrada: se abre desde el menú como **Strategy Report**, pero la ventana en sí se titula **Signal Performance**. Es la misma funcionalidad: no busque una segunda herramienta.

## Qué es

Un generador de informes para cualquier cuenta conectada (incluida SIM). Usted elige el bróker, la cuenta, el rango de fechas y los símbolos, hace clic en **Generate Report** y obtiene cinco secciones de análisis sobre exactamente esas operaciones. Como funciona por cuenta, es igual de útil para revisar una cuenta prop en vivo que para medir una estrategia que ha estado probando en SIM.

[SCREENSHOT: La ventana Signal Performance abierta mediante Trading → Strategy Report, mostrando los selectores Broker y Account, los filtros de rango de fechas y símbolos en la esquina superior derecha, y el botón Generate Report | dc-es-performance-analysis-01.png]

## Cuándo usarlo

- **Revisión semanal o mensual**: mida la tasa de acierto, el drawdown y las comisiones de un período en lugar de confiar en la memoria.
- **Comparar instrumentos**: la sección Symbol Performance muestra qué mercados le pagan y cuáles le desangran.
- **Encontrar sus horas**: Time Analysis revela las horas del día en las que su trading es rentable y las horas en las que debería abstenerse.
- **Validar una estrategia en SIM**: genere el mismo informe sobre la cuenta SIM antes de llevar una estrategia a real; vea [[simulation-accounts]].

## Inicio rápido

1. Haga clic en **Trading → Strategy Report** en la barra principal. Se abrirá la ventana **Signal Performance**.
2. Elija el **Broker** y la **Account** (cuenta) a analizar.
3. Use la rueda de desplazamiento en la esquina superior derecha para elegir el rango de fechas y los símbolos a incluir.
4. Haga clic en **Generate Report**.
5. Para llevar los datos a otro lugar (hoja de cálculo, diario de trading), haga clic en **Export CSV**.

[SCREENSHOT: El área de filtros superior derecha de la ventana Signal Performance con los controles de rango de fechas y selección de símbolos visibles | dc-es-performance-analysis-02.png]

## Cómo leerlo

El informe generado se organiza en cinco secciones:

### Strategy Performance

El resumen del período: **Balance**, **Profit** (beneficio) obtenido, **Losses** (pérdidas) incurridas, número de operaciones ejecutadas, **Commissions** (cuando el seguimiento de comisiones está habilitado [CONFIRM: where commissions are configured]), **DrawDown** y **Run-up**, y el porcentaje de operaciones ganadoras. Las cifras se dividen en **Long Executes**, **Short Executes** y **All Executes**, de modo que puede ver de inmediato si una dirección está sosteniendo la cuenta.

[SCREENSHOT: La sección Strategy Performance de un informe generado mostrando Balance, Profit, Losses, recuento de operaciones, DrawDown, Run-up y porcentaje de acierto divididos en columnas Long/Short/All Executes | dc-es-performance-analysis-03.png]

### Trade List

Cada operación del período con hora de entrada y salida, precio de entrada y salida, cantidad, y **Profit**, **DrawDown** y **Run-up** por operación. El drawdown/run-up por operación es la columna infravalorada: muestra cuánta presión soportó cada operación ganadora y cuán en beneficio llegó a estar cada perdedora: la materia prima para ajustar stops y objetivos.

### Symbol Performance

El balance por símbolo operado durante el período: la forma más rápida de identificar sus instrumentos más y menos rentables.

### Chart

Análisis visual de los mismos datos: la **curva de capital**, el gráfico de **drawdown** y vistas de operaciones individuales.

[SCREENSHOT: La sección Chart de un informe mostrando la curva de capital con el gráfico de drawdown debajo | dc-es-performance-analysis-04.png]

### Time Analysis

Rentabilidad por hora del día (qué horas son las más y las menos favorables), también con vistas diaria, mensual y anual. Úselo para ajustar cuándo opera, por ejemplo evitando sus horas de bajo rendimiento constante.

[SCREENSHOT: La sección Time Analysis mostrando el histograma de rentabilidad por hora con horas claramente rentables y no rentables | dc-es-performance-analysis-05.png]

## Referencia de configuración

| Control | Qué hace |
|---|---|
| **Broker** | Sobre qué historial de conexión se genera el informe. |
| **Account** | Qué cuenta bajo ese bróker. |
| **Filtros de rango de fechas / símbolos** (rueda de desplazamiento, esquina superior derecha) | Restringen el informe a un período y a un conjunto de instrumentos. |
| **Generate Report** | Construye el informe a partir de la selección actual. |
| **Export CSV** | Exporta los datos del informe a un archivo CSV. |

## Consejos y errores comunes

- **"Strategy Report" frente a "Signal Performance"**: la entrada del menú y el título de la ventana difieren; es una sola funcionalidad.
- **Informe vacío**: revise la selección de Broker/Account y amplíe el rango de fechas; el informe solo cubre la cuenta seleccionada, no todas las cuentas juntas.
- **Primero la división Long/Short**: antes de cambiar nada de una estrategia, compruebe si las pérdidas se concentran en una dirección. A menudo ese es todo el diagnóstico.

> **Advertencia:** El menú de clic derecho del gráfico contiene **Clear Historical Account Report**, que elimina permanentemente el historial de trading almacenado de la cuenta seleccionada en el panel de trading. Tras borrarlo, el Strategy Report no tiene datos para esa cuenta y no se pueden recuperar. No lo use como botón de "actualizar".

## Artículos relacionados

- [[orders-window]]
- [[portfolio-wallet]]
- [[trading-panel-reference]]
- [[trading-from-chart]]
- [[simulation-accounts]]