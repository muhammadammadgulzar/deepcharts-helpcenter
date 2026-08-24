---
title: "Solución: gaps de precio en los gráficos"
slug: "gaps-in-price"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "intermediate"
time: "10 min to complete"
description: "Elimine los gaps de precio causados por datos locales dañados y aprenda a distinguirlos de los gaps de mercado reales y de los meses de contrato vencidos."
keywords: ["gaps de precio", "velas ausentes", "huecos en el gráfico", "barras ausentes", "datos dañados", "gap de precio en el gráfico", "datos faltantes en el gráfico"]
source_hash: "4af630875a44fa4d"
ai_translated: true
source_hash: "4af630875a44fa4d"
---
Los gaps en su historial de precios tienen tres orígenes posibles: datos dañados en la base de datos local, gaps de mercado legítimos, o un mes de contrato de futuros vencido o inválido. Solo el primero es un problema que puede solucionar volviendo a descargar los datos, así que antes de borrar nada, dedique un minuto a descartar los otros dos.

## Síntoma

- Un gráfico muestra un gap: velas ausentes o un hueco en el historial de precios donde debería haber datos.
- El gap persiste tras desplazarse y volver, o reaparece en gráficos nuevos del mismo símbolo.

[SCREENSHOT: Un gráfico de precios con un gap visible en el historial de velas: barras ausentes en medio de una sesión, con el área del gap resaltada | dc-es-gaps-in-price-01.png]

No debe confundirse con [[feed-connected-chart-not-moving]]: allí el gráfico deja de actualizarse por completo; aquí el historial se carga pero tiene huecos.

## Causa más probable

Datos históricos dañados de ese símbolo en la base de datos local de DeepCharts: el gráfico renderiza fielmente los datos rotos que encuentra en el disco.

## Solución rápida

Antes de borrar nada, compruebe los dos casos que no son corrupción de datos:

1. Observe las marcas de tiempo alrededor del gap. Si se sitúa en una pausa de sesión, durante un fin de semana o en un período de baja liquidez, se trata de un gap de mercado real: comportamiento normal de la negociación que no puede ni debe "arreglarse". Consulte [[understanding-market-structure-sessions]].
2. En el caso de futuros, confirme que el gráfico está en el mes de vencimiento del contrato correcto y activo antes de asumir un problema de datos. Un contrato vencido o inválido produce un historial escaso y lleno de gaps: consulte [[symbol-rollover]].

Si no aplica ninguno de los dos, elimine los datos almacenados del símbolo afectado para que DeepCharts vuelva a descargarlos:

3. Utilice la herramienta de borrado de la aplicación (**Options → Delete data**): elija el símbolo afectado y un rango de fechas que cubra el gap. Esto elimina solo ese tramo de datos; el procedimiento completo está en [[delete-market-data]].
4. Reinicie DeepCharts y vuelva a abrir el gráfico. El software descarga automáticamente datos frescos para el rango eliminado.

[SCREENSHOT: Diálogo de borrado de datos de la aplicación con un símbolo seleccionado y un rango de fechas que cubre el gap | dc-es-gaps-in-price-02.png]

## Si eso no funcionó

### Causa: corrupción más profunda en la carpeta de base de datos del símbolo

Si el gap sobrevive a un borrado desde la aplicación, elimine manualmente toda la carpeta de datos del símbolo:

1. Abra **General Settings** (configuración general) y localice el campo **Database Folder Path** (ruta de la carpeta de la base de datos).

[SCREENSHOT: Diálogo de General Settings con el campo Database Folder Path resaltado | dc-es-gaps-in-price-03.png]

2. Navegue hasta esa carpeta en el Explorador de archivos.
3. Elimine únicamente la carpeta del símbolo afectado.

> **Advertencia:** Elimine siempre solo la carpeta del símbolo afectado, nunca la base de datos completa. Borrarlo todo elimina el historial almacenado de todos los símbolos.

[SCREENSHOT: Explorador de archivos dentro de la carpeta de la base de datos con la subcarpeta de un único símbolo seleccionada para su eliminación, y las carpetas de los demás símbolos visibles e intactas | dc-es-gaps-in-price-04.png]

4. Reinicie DeepCharts. Descargará automáticamente datos frescos para ese símbolo.

### Causa: el gap es actividad de mercado real

Las pausas de sesión, los gaps de fin de semana y los períodos de baja liquidez dejan huecos genuinos en el precio. Reflejan actividad de negociación real, así que ninguna nueva descarga los rellenará.

### Causa: mes de contrato vencido o inválido

Si el símbolo todavía apunta a un contrato de futuros antiguo, hágale rollover al mes activo (consulte [[symbol-rollover]]) y luego recargue el gráfico.

## Si sigue atascado

Si los gaps siguen reapareciendo en varios símbolos, puede que la propia base de datos necesite atención: consulte [[database-problems]]. En caso contrario, genere un [[diagnostic-report|informe de diagnóstico]] y contacte con soporte a través de [[get-help]].

## Cómo prevenirlo

- Mantenga los contratos al día con [[symbol-rollover]] para que los gráficos nunca carguen un mes de contrato muerto.
- Ejecute [[database-optimization]] periódicamente para mantener la base de datos local en buen estado.

## Artículos relacionados

- [[delete-market-data]]
- [[download-data]]
- [[symbol-rollover]]
- [[database-problems]]
- [[database-optimization]]
- [[understanding-market-structure-sessions]]