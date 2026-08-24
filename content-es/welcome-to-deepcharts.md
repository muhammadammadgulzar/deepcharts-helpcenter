---
title: "Bienvenido a DeepCharts: recorrido por la plataforma"
slug: "welcome-to-deepcharts"
category: "Getting Started"
subcategory: ""
type: "concept"
difficulty: "beginner"
time: "6 min read"
description: "Un recorrido guiado por la barra principal de DeepCharts, sus menús y tipos de ventanas, y adónde ir después de instalar."
keywords: ["recorrido por la plataforma", "primeros pasos", "barra principal", "visión general", "nuevo en deepcharts", "qué es deepcharts", "menús", "ventanas"]
source_hash: "0b163fc89d6adfb7"
ai_translated: true
source_hash: "0b163fc89d6adfb7"
---
DeepCharts es una plataforma de Windows para el análisis del flujo de órdenes y el trading. En lugar de una pantalla fija, le ofrece una pequeña barra de control (la barra principal) desde la cual abre exactamente las ventanas que necesita: gráficos de precio, DOM, lectores de cinta, gráficos de perfil, escáneres y herramientas de trading.

Este recorrido repasa la barra principal menú por menú, explica para qué sirve cada tipo de ventana y le señala el artículo adecuado para cada paso siguiente. No necesita memorizar nada aquí: el objetivo es que, cuando vea una etiqueta de menú más adelante, ya sepa qué hay detrás de ella.

## La idea en un párrafo

Piense en una mesa de trading profesional: un operador puede mantener un gráfico de precio en el monitor izquierdo, una escalera de profundidad de mercado en el centro y una cinta de Time & Sales a la derecha, cada pantalla haciendo bien una sola tarea. DeepCharts funciona de la misma manera. La plataforma en sí es un coordinador ligero (la barra principal); todo lo demás es una ventana especializada que usted abre, organiza y guarda como un espacio de trabajo. Los datos de mercado llegan desde una fuente de datos que usted conecta (en vivo o gratuita con retraso), y todas las ventanas leen de esa misma fuente.

## Por qué les importa a los traders

- **Usted construye su propia pantalla.** Nada se le impone: el espacio de trabajo de un scalper y el de un swing trader pueden verse completamente diferentes en la misma plataforma.
- **El flujo de órdenes primero.** Más allá de los gráficos de velas clásicos, DeepCharts incluye herramientas de footprint, perfil de volumen, DOM y cinta diseñadas en torno a quién compra y quién vende: consulte [[orderflow-101]] para los conceptos.
- **Una fuente, muchas vistas.** Conecte una fuente de datos una vez y todos los gráficos, DOM y escáneres la usan. La fuente gratuita con retraso significa que puede explorarlo todo antes de pagar por datos: consulte [[free-delayed-data-feed]].
- **Los diseños persisten.** Las disposiciones de ventanas se guardan como espacios de trabajo, de modo que la sesión de mañana empieza donde terminó la de hoy: consulte [[templates-workspaces]].

## Cómo funciona

Todo empieza en la barra principal: la barra delgada en la parte superior de su pantalla tras iniciar la aplicación. A continuación hay una **maqueta funcional de ella**: haga clic en cada menú, pase el cursor sobre los elementos y haga clic en cualquiera para ir directamente a su guía.

[WIDGET: main-bar]

### La barra principal

De izquierda a derecha, la barra principal contiene los menús (**New**, **Options**, **Trading**, **Window**, **About us** y un menú de ayuda **?**) más dos controles que usará constantemente:

- Selector de **Workspace** (espacio de trabajo): cree, guarde y abra disposiciones de ventanas (**New**, **Save as**, **Open**; los diseños pueden almacenarse localmente, en la nube o compartirse).
- Selector de **Feed**: muestra su conexión de datos activa con un punto de estado de color. Verde significa conectado; cuando no hay nada conectado, muestra **Select a connection**. El menú desplegable enumera sus conexiones guardadas más una entrada **Feed Settings** para añadir nuevas: pruébelo en la maqueta de arriba haciendo clic en **● dxFeed - 15m** en el extremo derecho de la barra.

### El menú New: abrir ventanas

**New** es donde nace cada ventana de análisis:

| Elemento del menú | Qué abre |
|---|---|
| **Price Chart** | La ventana de gráfico estándar: velas, indicadores, herramientas de dibujo. Consulte [[chart-window]]. |
| **Book** → **Adv. Dom** / **Horizontal dom** / **Vertical dom** | Escaleras de profundidad de mercado en tres disposiciones. Consulte [[advanced-dom]]. |
| **Adv. Time And Sales** | La cinta: cada operación ejecutada tal como se imprime. Consulte [[adv-time-and-sales]]. |
| **Profile Chart** | Análisis de TPO y perfil de volumen. Consulte [[profile-chart-window]]. |
| **Scanner** | Escanee el mercado en busca de condiciones que usted defina. Consulte [[scanner-window]]. |
| **Correlation Viewer** | Compare cómo se mueven juntos los instrumentos. Consulte [[correlation-viewer]]. |

> **Consejo:** Abra el menú **New** en la maqueta interactiva al principio de esta página: cada entrada allí enlaza con la guía completa de su ventana.

### El menú Options: configuración y datos

**Options** contiene la configuración de la plataforma y la gestión de datos: **Symbol Manage** (mapee las bolsas a su fuente de datos, la ventana de configuración más importante de todas, consulte [[symbol-manage]]), **Settings** (idioma, tema, zona horaria, sonidos, atajos: consulte [[customize-language-theme-sounds]] y [[keyboard-shortcuts]]), **Replay Tick Data** (practique con mercados grabados, consulte [[replay-data]]), **Symbols Rollover** (consulte [[symbol-rollover]]), un submenú **Database** (consulte [[database-optimization]]), **Show Log**, **Show Calendar** (calendario económico) y un submenú **Tool**.

### El menú Trading: órdenes y cuentas

El menú **Trading** alberga sus herramientas de ejecución, incluida la ventana **Orders** que enumera cada orden que ha colocado ([[orders-window]]), **Portfolio** con saldos de cuenta, P/L y el gestor de riesgos integrado ([[portfolio-wallet]], [[risk-manager]]), **Signal Performance** para estadísticas de sus operaciones pasadas ([[performance-analysis]]) y el **Trade Copier** para replicar órdenes entre cuentas ([[trade-copier]]). La entrada de órdenes propiamente dicha ocurre en el propio gráfico a través del panel de trading: consulte [[trading-from-chart]].

### El menú Window

**Window** gestiona las ventanas abiertas, incluido **Position windows**, un diálogo que organiza sus tipos de ventanas entre monitores, útil en configuraciones de varias pantallas. Consulte [[multi-monitor-windows]].

### About us y ayuda

**About us** contiene **Calendar events** (la ventana **Deepchart Events**: únase a sesiones en vivo o vea grabaciones desde dentro de la aplicación), **Info** y **Website**. El menú **?** tiene dos entradas: **Guides**, que abre este centro de ayuda en su navegador, y **Contact Support**, que abre la ventana de diagnóstico: consulte [[get-help]] y [[diagnostic-report]].

## Véalo en DeepCharts

Cada tipo de ventana del recorrido tiene su propio artículo de referencia:

- Gráficos: [[chart-window]], [[price-chart-settings]], [[drawing-tools]]
- Ventanas de flujo de órdenes: [[advanced-dom]], [[adv-time-and-sales]], [[profile-chart-window]]
- Análisis: [[scanner-window]], [[correlation-viewer]]
- Trading: [[trading-from-chart]], [[orders-window]], [[portfolio-wallet]], [[risk-manager]]

## Ejemplo práctico

Una primera hora típica con DeepCharts es así. Instala la plataforma y activa su licencia ([[install-deepcharts]]). En el primer inicio se ejecuta un asistente de arranque de tres pasos: elige la fuente de datos gratuita con 15 minutos de retraso ([[free-delayed-data-feed]]), confirma el mapeo de bolsas en el paso integrado de Symbol Manage y elige un tema y un perfil de sonidos de alerta. El punto del selector de Feed se pone verde. Abre **New → Price Chart**, elige un instrumento y las velas empiezan a dibujarse ([[first-chart]]). A partir de ahí, añade un indicador, abre un DOM junto al gráfico y guarda el diseño como su primer espacio de trabajo. Coste total hasta ahora: nada, la fuente con retraso es gratuita.

## Malentendidos comunes

- **"DeepCharts viene con datos de mercado en vivo."** No es así: la plataforma se conecta a una fuente de datos que usted aporta (o a la gratuita con retraso). Los gráficos permanecen vacíos hasta que se conecta una fuente y se mapean las bolsas en [[symbol-manage]].
- **"DeepCharts es un bróker."** No. Se conecta a brókeres, empresas prop y fuentes de datos: consulte [[compatibility-guide]]. También puede operar en papel con una cuenta SIM integrada sin ningún bróker ([[simulation-accounts]]).
- **"Falta mi símbolo, la fuente debe de estar rota."** Normalmente la bolsa simplemente no está suscrita en **Options → Symbol Manage**: el selector de instrumentos solo enumera las bolsas suscritas.
- **"Me salté el asistente, así que tengo que reinstalar."** Todo lo que hace el asistente puede rehacerse más tarde a través de **Feed Settings**, **Options → Symbol Manage** y **Options → Settings**.

## Profundice

Siga la ruta de primeros pasos en orden: [[system-requirements]] → [[install-deepcharts]] → [[free-delayed-data-feed]] → [[first-chart]] → [[simulation-accounts]], o realice el recorrido culminante único [[quick-start-first-trade]] que los encadena todos en una sola sesión. Cuando esté listo para datos en vivo, empiece en [[buy-data-feed]].

## Artículos relacionados

- [[quick-start-first-trade]]
- [[install-deepcharts]]
- [[free-delayed-data-feed]]
- [[first-chart]]
- [[symbol-manage]]
- [[compatibility-guide]]