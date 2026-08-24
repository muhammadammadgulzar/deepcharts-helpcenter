---
title: "Requisitos del sistema"
slug: "system-requirements"
category: "Getting Started"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Requisitos de hardware, sistema operativo y software para ejecutar DeepCharts, además de orientación sobre antivirus y espacio en disco."
keywords: ["requisitos del sistema", "requisitos mínimos", "especificaciones", "windows 10", "windows 11", "ram", "funcionará", "hardware", "requisitos"]
source_hash: "68366ba77933c649"
ai_translated: true
source_hash: "68366ba77933c649"
---
DeepCharts es una aplicación de escritorio para Windows que procesa datos de tick en vivo, por lo que se beneficia de una máquina razonablemente moderna, pero no requiere hardware exótico. Esta página enumera lo que necesita antes de instalar y explica qué componentes importan realmente para el rendimiento.

Los requisitos mínimos oficiales se publican en su panel de my.deepcharts.com junto a la descarga del instalador. Consúltelos antes de comprar hardware; las cifras siguientes son orientación práctica.

## Qué es

Una lista de verificación del sistema operativo, el hardware y el entorno de software que DeepCharts necesita para instalarse y funcionar bien. Responde a "¿funcionará DeepCharts en mi máquina?" y "¿qué debería mejorar si va lento?".

## Cuándo usarlo

- Antes de instalar DeepCharts por primera vez — consulte [[install-deepcharts]].
- Antes de comprar o alquilar un nuevo PC, portátil o VPS para trading.
- Al diagnosticar problemas de rendimiento (gráficos lentos, datos con retardo) — consulte [[data-delayed-lagging]].
- Antes de trasladar su instalación — consulte [[move-to-new-computer]].

## Inicio rápido

No compare tablas a mano: introduzca los datos de su máquina en el verificador de abajo y este evaluará cada componente en vivo. Observe cómo cambia el requisito de RAM cuando modifica cuántas ventanas planea mantener abiertas: los requisitos dependen de la carga de trabajo, no solo de la aplicación.

[WIDGET: spec-check]

1. Pulse **Windows key + Pause** (o abra **Settings → System → About**) para ver su edición de Windows, procesador y RAM instalada, y ajuste los deslizadores para que coincidan.
2. Corrija cualquier elemento que el verificador marque en rojo antes de instalar; los elementos en naranja funcionarán, pero le costarán fluidez.
3. Confirme que tiene varios GB de espacio libre en disco en la unidad del sistema: la base de datos de datos de mercado reside allí de forma predeterminada y crece con el tiempo.
4. Compruebe los mínimos oficiales publicados en su panel de my.deepcharts.com y continúe con [[install-deepcharts]].

## Cómo interpretarlo

"Mínimo" significa que la plataforma se instala y funciona para un uso ligero: un par de gráficos con una fuente en diferido o en vivo. "Recomendado" es lo que necesita para una estación de trabajo de flujo de órdenes realista: varias ventanas de gráficos, un DOM, carga de datos a nivel de tick y un panel de trading activo durante mercados rápidos. Si se encuentra entre ambos, DeepCharts funcionará, pero los tiempos de carga y la fluidez de actualización escalan con su hardware, especialmente la CPU y la RAM.

## Referencia de configuración

> **Nota:** Las cifras exactas publicadas deben verificarse en el panel de my.deepcharts.com. [CONFIRM: exact minimum specs with team]

### Sistema operativo y software

| Requisito | Detalle |
|---|---|
| Sistema operativo | Windows 10 o Windows 11, 64 bits. DeepCharts es una aplicación exclusiva para Windows. |
| Runtime de .NET | Requerido por la plataforma. [CONFIRM: exact .NET version and whether the installer bundles it] |
| macOS / Linux | No compatibles de forma nativa. [CONFIRM: official stance on virtual machines and macOS virtualization] |

### Hardware

| Componente | Mínimo (práctico) | Recomendado | Por qué importa |
|---|---|---|---|
| CPU | Procesador multinúcleo moderno de 64 bits | Cuatro núcleos de generación reciente o superior | El procesamiento de ticks y el cálculo de indicadores dependen de la CPU; más núcleos mantienen los gráficos con capacidad de respuesta durante periodos volátiles. |
| RAM | 8 GB | 16 GB o más | Cada gráfico abierto mantiene en memoria los días de datos de tick cargados; múltiples gráficos y DOM se acumulan. |
| Disco | Varios GB libres, SSD muy preferible | SSD con abundante espacio libre | Los datos de tick históricos se almacenan localmente y se releen en cada carga de gráfico; un SSD acorta drásticamente los tiempos de construcción del gráfico. |
| GPU | Cualquier GPU capaz de ejecutar Windows 10/11 | Una GPU dedicada ayuda con muchas ventanas en monitores grandes | El renderizado de gráficos usa la GPU; DeepCharts incluso ofrece un ajuste **Parallel gpu count** en **Options → Settings → General**. |
| Pantalla | 1920×1080 | Uno o más monitores grandes o de alta resolución | El trabajo de flujo de órdenes consume mucha pantalla; las disposiciones multimonitor son compatibles a través de **Window → Position windows** — consulte [[multi-monitor-windows]]. |
| Red | Banda ancha estable | Conexión por cable de baja latencia | Las fuentes en vivo transmiten continuamente; la velocidad de descarga y la latencia hasta el servidor de la fuente afectan directamente al retardo de los datos. |

### Espacio en disco y la base de datos local

DeepCharts almacena los datos de mercado descargados en una base de datos local, de forma predeterminada en `%LocalAppData%\Deepchart\Database`. Esta carpeta crece a medida que carga más símbolos y más días de historial de ticks. De ello se derivan dos cosas:

- Mantenga un espacio libre significativo en la unidad que la aloja, o mueva la carpeta: **Options → Settings → General → VARIOUS → Database Folder**.
- Puede recuperar espacio más adelante — consulte [[delete-market-data]] y [[database-optimization]].

### Antivirus y software de seguridad

La interferencia del antivirus es el bloqueador de instalación más común, con diferencia.

> **Advertencia:** Deshabilite temporalmente su antivirus antes de ejecutar el instalador y vuelva a habilitarlo después. Algunos productos ponen en cuarentena silenciosamente componentes del instalador, lo que se manifiesta más tarde como una instalación fallida o incompleta.

Si su máquina está gestionada por una política de empresa, el software de control de aplicaciones también puede impedir que DeepCharts se inicie — consulte [[application-control-policy]].

## Consejos y errores comunes

- **No se salte el paso del antivirus.** "El instalador se ejecutó y no pasó nada" es casi siempre el antivirus — consulte [[installation-problems]].
- **Los portátiles con planes de ahorro de energía** limitan la CPU, lo que se manifiesta como gráficos con retardo. Use un plan de energía de alto rendimiento mientras opera.
- **Más días de datos cargados = más RAM y CPU.** Si la plataforma se siente pesada, reduzca los días a cargar en sus gráficos antes de culpar al hardware — consulte [[data-delayed-lagging]].
- **Usuarios de VPS:** los mismos requisitos se aplican a las máquinas virtuales; los planes de VPS infradimensionados (2 GB de RAM, vCPU compartida) tendrán dificultades con los datos de tick.
- **La calidad de internet importa tanto como el PC.** Si los gráficos solo se ralentizan durante periodos de mercado agitados, pruebe su conexión con el diagnóstico integrado — consulte [[diagnostic-report]].

## Artículos relacionados

- [[install-deepcharts]]
- [[installation-problems]]
- [[application-control-policy]]
- [[move-to-new-computer]]
- [[data-delayed-lagging]]
- [[database-optimization]]