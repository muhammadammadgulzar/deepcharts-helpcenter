---
title: "Texto en el gráfico"
slug: "text-on-chart"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "beginner"
time: "3 min read"
description: "Muestre un mensaje de texto personalizado directamente en su gráfico para notas, recordatorios y avisos de su plan de trading."
keywords: ["texto en el gráfico", "nota en el gráfico", "añadir texto al gráfico", "etiqueta de gráfico", "notas en el gráfico", "recordatorio en el gráfico"]
source_hash: "7658bfcfa2b08577"
ai_translated: true
source_hash: "7658bfcfa2b08577"
---
Texto en el gráfico (Text on Chart) muestra un mensaje de texto personalizado directamente en su gráfico. Los traders lo usan para notas, recordatorios, ideas de trading y observaciones de mercado que quieren tener visibles de un vistazo durante el análisis: un aviso del plan de trading, una advertencia de noticias o la etiqueta identificativa de una disposición de espacio de trabajo.

## Qué es

Es un indicador de anotación ligero: usted escribe un mensaje una vez en su configuración, y DeepCharts renderiza ese texto en el gráfico. A diferencia de las anotaciones a mano alzada, el texto forma parte del indicador, por lo que persiste con la configuración del gráfico y viaja con las disposiciones guardadas (consulte [[templates-workspaces]]).

## Cuándo usarlo

- Mantenga su plan de trading o sus reglas de riesgo visibles en el gráfico mientras opera ("sin entradas antes de las 9:45", "máximo 2 intentos").
- Marque un gráfico con el escenario o el sesgo que preparó durante el análisis previo a la apertura.
- Etiquete los gráficos en un espacio de trabajo con varios gráficos para identificar cada uno de un vistazo.
- Déjese recordatorios sobre eventos próximos relevantes para el instrumento.

## Inicio rápido

1. Abra el menú de indicadores en su gráfico y añada **Text on Chart**.
2. Abra la configuración del indicador.
3. Escriba su mensaje en el campo **Text**.
4. Establezca un **Font Size** (tamaño de fuente) lo bastante grande para leerlo de un vistazo, y elija un **Text Color** (color de texto) que contraste con el fondo de su gráfico.
5. Opcionalmente, establezca un **Back Color** (color de fondo) para colocar el texto sobre un bloque de fondo sólido y mejorar la legibilidad.
6. Aplique la configuración.

[SCREENSHOT: Un gráfico con el indicador Text on Chart mostrando una breve nota del plan de trading en texto grande con un bloque de fondo contrastante, claramente legible sobre las velas | dc-es-text-on-chart-01.png]

## Referencia de configuración

[SCREENSHOT: Diálogo de configuración de Text on Chart mostrando los campos Font Size, Text Color, Back Color y Text, con un mensaje de ejemplo introducido en el campo Text | dc-es-text-on-chart-02.png]

| Ajuste | Qué hace |
|---|---|
| **Font Size** | Ajusta el tamaño del texto en el gráfico. Los tamaños más grandes aumentan la visibilidad y la prominencia; los más pequeños crean anotaciones sutiles que ocupan menos espacio. |
| **Text Color** | El color del texto mostrado. Elija un color con suficiente contraste respecto al fondo de su gráfico. |
| **Back Color** | El color de fondo detrás del texto. Un fondo sólido mejora significativamente la legibilidad al crear contraste entre el texto y los elementos del gráfico que hay detrás. |
| **Text** | El campo principal de entrada de texto: el mensaje o la información personalizada que se mostrará en el gráfico. |

## Consejos y errores comunes

- **El contraste lo es todo.** Un texto claro sobre un tema claro (u oscuro sobre oscuro) desaparece: establezca **Back Color** en lugar de buscar un color de texto que funcione sobre las velas.
- Mantenga los mensajes cortos. El indicador es para avisos de un vistazo, no para párrafos; un texto largo compite con el precio por la atención.
- Para flechas, cajas y notas ancladas a un precio, use [[drawing-tools|herramientas de dibujo]] en su lugar: Text on Chart es un mensaje fijo, no una anotación de nivel de precio.
- Añada el indicador a una plantilla guardada para que las notas recurrentes (como las reglas de sesión) aparezcan en cada gráfico que abra desde ella — consulte [[templates-workspaces]].

## Artículos relacionados

- [[drawing-tools]]
- [[annotations-overlay]]
- [[templates-workspaces]]
- [[different-types-of-input]]
- [[indicator-layout]]