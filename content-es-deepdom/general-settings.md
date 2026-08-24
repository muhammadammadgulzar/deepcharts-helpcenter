---
title: "Configuración general"
slug: "general-settings"
category: "How To"
subcategory: ""
type: "how-to"
difficulty: "beginner"
time: "12 min read"
description: "El panel de Configuración general (General Settings) es el centro de configuración principal de DeepDom."
keywords: ["configuración general", "configuración general de deepdom", "deepdom", "cómo hacer"]
source_hash: "fd4d9fd1de729bdc"
ai_translated: true
source_hash: "fd4d9fd1de729bdc"
---
El panel de Configuración general (General Settings) es el centro de configuración principal de DeepDom. Aquí es donde controla todo lo que afecta al comportamiento global de la plataforma: desde las preferencias de visualización y el rendimiento del gráfico hasta los valores predeterminados de trading, las cuentas de simulación, los sonidos de alerta y los atajos de teclado.

## Cómo abrir la Configuración general

Haga clic en **Options** en la barra de menú superior.

Seleccione **Settings** en el menú desplegable.

[SCREENSHOT: Configuración general — Cómo abrir la Configuración general (DeepDOM) | dd-es-general-settings-01.png]

Se abrirá la ventana de Configuración general con cinco pestañas: **General**, **Alert**, **Sim Account**, **Trading Quantity** y **Shortcuts**.

[SCREENSHOT: Configuración general — Cómo abrir la Configuración general (DeepDOM) | dd-es-general-settings-02.png]

## Pestaña 1 — General

Esta pestaña contiene toda la configuración principal de la plataforma, organizada en cuatro secciones.

[SCREENSHOT: Configuración general — Pestaña 1 — General (DeepDOM) | dd-es-general-settings-03.png]

### General

[SCREENSHOT: Configuración general — General (DeepDOM) | dd-es-general-settings-04.png]

Idioma (Language) Establece el idioma de visualización de la plataforma. Opciones disponibles:

Inglés

Italiano

Español

Alemán

Chino

Lista de zonas horarias (Time Zone List) Establece la zona horaria utilizada en toda la plataforma para todas las visualizaciones basadas en el tiempo, incluidos el gráfico, Time & Sales y las alertas. Configure siempre la zona horaria de la bolsa en la que opera para garantizar que todos los horarios de sesión y las marcas de tiempo sean precisos.

Tema (Theme) Establece el tema visual de la plataforma. Opciones disponibles:

Dark

Dark (Standard)

Blue

Light

Light (Standard)

Purple

Sonidos de notificación (Notification Sounds) Establece la voz predeterminada utilizada para las notificaciones de la plataforma. Opciones disponibles:

Warzone

Female - Emily

Female - Daniela

Male

Siempre visible (Always on Top) Cuando está habilitado, la ventana de DeepDom permanecerá siempre por encima de todas las demás ventanas abiertas en su pantalla. Es útil si está ejecutando varias aplicaciones y desea que DeepDom permanezca visible en todo momento.

### Tiempo de actualización (Refresh Time, MS)

[SCREENSHOT: Configuración general — Tiempo de actualización (MS) (DeepDOM) | dd-es-general-settings-05.png]

Esta sección controla la frecuencia con la que la plataforma actualiza sus visualizaciones de datos. Los valores están en milisegundos: cuanto menor sea el número, más rápida será la frecuencia de actualización.

Gráfico (Chart) Establece la frecuencia con la que el gráfico actualiza su visualización. El valor predeterminado es 50 ms, lo que significa que el gráfico se actualiza 20 veces por segundo. Reducir este valor hace que el gráfico responda mejor a los cambios en tiempo real. Aumentarlo reduce el uso de CPU si está experimentando problemas de rendimiento.

Time Sales Establece la frecuencia con la que se actualiza el panel de Time & Sales. El valor predeterminado es 300 ms. Un valor más bajo le ofrece un flujo de ejecuciones más rápido y en vivo. Un valor más alto es más fácil de leer en mercados más lentos.

Nota: Reducir los tiempos de actualización aumenta la capacidad de respuesta de la plataforma, pero también aumenta el uso de CPU y memoria. Si su sistema funciona con lentitud, pruebe a aumentar ligeramente estos valores.

[SCREENSHOT: Configuración general — Tiempo de actualización (MS) (DeepDOM) | dd-es-general-settings-06.png]

P/L diario — Modo de visualización (Daily P/L — Display Mode) Establece cómo se muestra su ganancia y pérdida diaria en el panel de trading. Opciones disponibles:

Money: muestra el P/L en valor de moneda.

Ticks: muestra el P/L en ticks.

P/L abierto — Modo de visualización (Open P/L — Display Mode) Establece cómo se muestra la ganancia y pérdida de su posición abierta. Se actualiza en tiempo real a medida que se mueve su posición abierta. Opciones disponibles:

Money: muestra el P/L en valor de moneda.

Ticks: muestra el P/L en ticks.

Ticks per Contract: muestra el P/L en ticks calculados por contrato individual.

Punto de equilibrio — Ticks (Breakeven — Ticks) Establece el número de ticks utilizados para calcular su nivel de punto de equilibrio. Cuando se establece en 0, el punto de equilibrio se calcula en el precio de entrada exacto. Aumentar este valor añade un margen de ticks para tener en cuenta las comisiones o el deslizamiento al calcular su punto de equilibrio.

Panel de trading — Mostrar saldo (Trading Panel — Show Balance) Cuando está habilitado, el saldo de su cuenta se muestra en el panel de trading. Desactívelo si prefiere no ver su saldo mientras opera.

Panel de trading — Mostrar patrimonio (Trading Panel — Show Equity) Cuando está habilitado, el patrimonio de su cuenta se muestra en el panel de trading. Desactívelo si prefiere no ver su patrimonio mientras opera.

### Varios (Various)

[SCREENSHOT: Configuración general — Varios (DeepDOM) | dd-es-general-settings-07.png]

​Simulación — Condición de orden stop (Simulation — Stop Order Condition) Define cómo se activan las órdenes stop en el modo de simulación. Esta configuración existe porque algunas fuentes de datos pueden tener problemas con los datos históricos de Bid/Ask: disponer de dos opciones le permite evitar ejecuciones de órdenes incorrectas según la calidad de su fuente de datos. Opciones disponibles:

Last: la orden stop se activa según el último precio negociado. Esta es la configuración predeterminada y se recomienda si está experimentando problemas con sus datos históricos de Bid/Ask, ya que evita cualquier dependencia de la precisión del flujo de Bid/Ask.

Bid Ask: la orden stop se activa según el precio Bid o Ask. Las órdenes stop de compra se activan con el precio Ask y las órdenes stop de venta se activan con el precio Bid, lo que refleja más fielmente cómo se comportan las órdenes stop en condiciones de mercado en vivo.

Nota: Si observa ejecuciones de órdenes incorrectas o inesperadas durante la simulación, pruebe a cambiar al modo Last. Esto suele deberse a lagunas o inconsistencias en los datos históricos de Bid/Ask de su fuente de datos.

Informe de estrategia — Tamaño del texto (Strategy Report — Text Size) Establece el tamaño de fuente utilizado en la visualización del informe de estrategia.

Carpeta de base de datos (Database Folder) Muestra la ruta local donde DeepDom almacena los datos de la aplicación. Es importante entender que los datos del mapa de calor no se guardan en su disco duro: funcionan íntegramente en la RAM de su equipo. Esto significa que cada vez que abre un gráfico y carga el mapa de calor de un símbolo, DeepDom descarga los datos de nuevo y los carga directamente en la memoria. La cantidad de datos cargados en la RAM depende de su configuración de Profundidad histórica (Historical Depth): cuantas más horas de historial cargue, más RAM se utiliza.

Cuando cierra el mapa de calor o el gráfico, los datos en caché se eliminan de la RAM automáticamente. No se almacena nada de forma permanente en su disco duro. Por eso, cada vez que vuelve a abrir un gráfico, el mapa de calor tarda un momento en recargarse: siempre parte de cero desde un estado limpio.

Consejo: Si está experimentando tiempos de carga lentos o un uso elevado de memoria, pruebe a reducir la configuración de Profundidad histórica (Historical Depth) para cargar menos datos en la RAM.

Nota: Si está experimentando problemas relacionados con la caché en DeepDom, consulte el artículo dedicado: Problemas de caché - DeepDom

Diálogo de guardado de capturas (Screenshot Save Dialog) Cuando está habilitado, DeepDom le pedirá que elija una ubicación de guardado cada vez que tome una captura de pantalla. Cuando está deshabilitado, las capturas de pantalla se guardan automáticamente en la ubicación predeterminada.

Monitor de captura (Screenshot Monitor) Cuando está habilitado, DeepDom captura todo el monitor en las capturas de pantalla, en lugar de solo la ventana de la aplicación.

Comprobar retraso en tiempo real (Check Real Time Delay) Cuando está habilitado, DeepDom supervisa el retraso entre su fuente de datos y el tiempo real, y le avisará si el flujo se queda atrás. Es útil para detectar problemas de conexión o de latencia durante el trading en vivo.

### Alertas de trading (Alert Trading)

Esta sección controla qué eventos de trading activan alertas de audio y qué sonido se utiliza para cada uno.

[SCREENSHOT: Configuración general — Alertas de trading (DeepDOM) | dd-es-general-settings-08.png]

Enable Order Submitted: Cuando está habilitado, se reproduce una alerta de audio cada vez que una orden se envía correctamente al mercado.

Order Submitted Alert: Haga clic en **Select** para elegir el archivo de sonido que se reproduce cuando se envía una orden.

Enable Order Filled: Cuando está habilitado, se reproduce una alerta de audio cada vez que una de sus órdenes se ejecuta.

Order Filled Alert: Haga clic en **Select** para elegir el archivo de sonido que se reproduce cuando una orden se ejecuta.

Enable Order Cancelled: Cuando está habilitado, se reproduce una alerta de audio cada vez que una de sus órdenes se cancela.

Order Cancelled Alert: Haga clic en **Select** para elegir el archivo de sonido que se reproduce cuando una orden se cancela.

Enable Order Rejected: Cuando está habilitado, se reproduce una alerta de audio cada vez que una de sus órdenes es rechazada por el bróker o la bolsa.

Order Rejected Alert: Haga clic en **Select** para elegir el archivo de sonido que se reproduce cuando una orden es rechazada.

Discard Nearly Sounds: Cuando está habilitado, se descartan los sonidos de alerta duplicados que se activan en sucesión muy rápida, de modo que no escuche la misma alerta dispararse varias veces con milisegundos de diferencia. Es útil en mercados rápidos, donde varios eventos de órdenes pueden dispararse casi simultáneamente.

## Pestaña 2 — Alert

Esta pestaña gestiona los sonidos de alerta personalizados disponibles en toda la plataforma. Antes de poder asignar un sonido a cualquier alerta de indicador o alerta de anotación, primero debe añadir el sonido aquí, en la pestaña **Alert**. Una vez añadido un sonido aquí, estará disponible para seleccionarlo en las opciones de sonido de cualquier indicador o anotación de la plataforma. Si no se añade ningún sonido aquí, la selección de sonido en sus indicadores y anotaciones aparecerá vacía.

DeepDom incluye un conjunto de sonidos de alerta precargados de forma predeterminada, listos para usar. También puede añadir sus propios sonidos personalizados en cualquier momento.

[SCREENSHOT: Configuración general — Pestaña 2 — Alert (DeepDOM) | dd-es-general-settings-09.png]

Cada alerta de la lista muestra su Nombre y la ruta del archivo de sonido en su equipo.

Haga clic en el botón **Play** (flecha verde) para escuchar el sonido antes de asignarlo.

Haga clic en el icono de **Settings** para renombrar o reconfigurar la alerta.

Haga clic en el icono de **Delete** (papelera roja) para eliminar la alerta de la lista.

Haga clic en **Add** para añadir un nuevo archivo de sonido personalizado desde su equipo.

Nota: DeepDom es compatible con archivos de audio .wav. Si desea utilizar un sonido personalizado para cualquier alerta de la plataforma, añádalo aquí primero: después aparecerá como opción en cualquier lugar donde se puedan asignar sonidos. Para recibir cualquier alerta, asegúrese de que los tipos de alerta estén habilitados yendo a Options → Alerts y verificando que **Alert Sound**, **Message Popup**, **Webinar** y **Trading Sound** estén marcados. Para una guía completa paso a paso sobre la configuración de las notificaciones de sonido, consulte el artículo dedicado: Cómo insertar notificaciones de sonido

[SCREENSHOT: Configuración general — Pestaña 2 — Alert (DeepDOM) | dd-es-general-settings-10.png]

## Pestaña 3 — Sim Account

La pestaña **Sim Account** le permite crear y gestionar cuentas de simulación de paper trading. Las cuentas de simulación le permiten practicar el trading en DeepDom utilizando datos de mercado reales en vivo sin arriesgar dinero real.

[SCREENSHOT: Configuración general — Pestaña 3 — Sim Account (DeepDOM) | dd-es-general-settings-11.png]

Cómo añadir una cuenta de simulación:

Haga clic en el botón **Add**.

Introduzca un Nombre para la cuenta.

Establezca el Saldo (Balance): el capital virtual inicial de la cuenta.

Haga clic en **Add** para confirmar.

Puede crear varias cuentas de simulación con diferentes saldos para probar diferentes estrategias o tamaños de posición. Sus cuentas de simulación aparecen en el selector de cuentas del panel de trading, lo que le permite cambiar entre trading en vivo y en simulación en cualquier momento.

Nota: Para una guía completa sobre el uso del entorno de simulación en DeepDom, consulte el artículo dedicado: Entorno de simulación

## Pestaña 4 — Trading Quantity

La pestaña **Trading Quantity** le permite establecer cantidades de orden predeterminadas para cada instrumento que opera. Esto ahorra tiempo durante el trading en vivo, ya que el tamaño de su orden se rellena automáticamente al cambiar a un símbolo específico.

[SCREENSHOT: Configuración general — Pestaña 4 — Trading Quantity (DeepDOM) | dd-es-general-settings-12.png]

Cómo añadir una Trading Quantity:

Haga clic en el botón **Add**.

Aparecerá una ventana que le pedirá que seleccione el instrumento. Una vez que seleccione el símbolo, se abrirá la configuración de Trading Quantity.

Establezca la Cantidad predeterminada (Default Quantity): el número de contratos que se rellenará de forma predeterminada cuando opere este instrumento.

Establezca la Cantidad de incremento (Increment Quantity): la cantidad en la que aumenta o disminuye el tamaño cada vez que hace clic en las flechas de cantidad del panel de trading.

Establezca el BidAsk Tick Diff: define la diferencia de ticks entre el Bid y el Ask utilizada para los cálculos de colocación de órdenes en este instrumento.

Haga clic en **OK** para guardar.

Una vez guardada su configuración, deberá reiniciar la plataforma para que los cambios surtan efecto.

[SCREENSHOT: Configuración general — Pestaña 4 — Trading Quantity (DeepDOM) | dd-es-general-settings-13.png]

Esto es especialmente útil para los traders que alternan entre varios instrumentos con diferentes tamaños predeterminados: en lugar de ajustar manualmente la cantidad cada vez, se establece automáticamente al seleccionar el símbolo.

## Pestaña 5 — Shortcuts

La pestaña **Shortcuts** le ofrece una lista completa de todos los atajos de teclado disponibles en DeepDom, organizados por categoría y tipo. Puede grabar nuevas combinaciones o eliminar las existentes para adaptarlas a su flujo de trabajo personal.

[SCREENSHOT: Configuración general — Pestaña 5 — Shortcuts (DeepDOM) | dd-es-general-settings-14.png]

General

Replay Play/Pause

Restablecer ventanas abiertas — Ctrl Alt R

Tomar captura de pantalla — Ctrl Alt I

Cerrar espacio de trabajo — Ctrl Alt C

Espacio de trabajo siguiente — Ctrl Alt +

Abrir espacio de trabajo — Ctrl Alt O

Espacio de trabajo anterior — Ctrl Alt -

Guardar espacio de trabajo — Ctrl Alt S

Gráfico — Acciones

Exportar anotaciones

Importar anotaciones

Ajuste de anotación — Ctrl S

Cambiar símbolo — Ctrl C

Borrar todo — Ctrl Backspace

Indicadores — Ctrl I

Propiedades — Ctrl P

Gráfico — Controles

Cruceta — Alt C

Mano — Alt H

Puntero — Alt P

Rango de zoom — Alt R

Gráfico — Herramientas de dibujo

Proyección de Fibonacci

Retroceso de Fibonacci — Shift R

Línea horizontal — Shift H

Línea — Shift L

Línea paralela — Shift P

Rayo

Rectángulo — Shift R

Gráfico — Desplazamiento

Mover al final — Ctrl Z

Mover a la izquierda — Ctrl ←

Mover a la derecha — Ctrl →

Zoom — Ctrl -

Zoom + — Ctrl +

Gráfico — Configuración de herramientas

TC1 (predeterminada) — F1

TC2 — F2

TC3 — F3

TC4 — F4

TC5 — F5

TC6 — F6

TC7 — F7

TC8 — F8

TC9 — F9

Gráfico — Trading

B/E — Añadir o mover órdenes

B/E — Mover órdenes existentes

Habilitar/Deshabilitar — Ctrl Alt T

Habilitar/Deshabilitar OCO

Orden de compra Bid

Orden de compra de límite

Orden de compra a mercado

Orden stop de compra

Orden stop de límite de compra

Cancelar órdenes y cerrar posición

Cancelar todas las órdenes

Orden de venta Ask

Orden de venta de límite

Orden de venta a mercado

Orden stop de venta

Orden stop de límite de venta

Mostrar/Ocultar histórico — Ctrl Alt H

Mostrar/Ocultar panel — Ctrl Alt P

Nota: Algunos atajos no tienen una combinación de teclas asignada de forma predeterminada. Puede grabar y asignar su propia combinación a cualquier atajo sin asignar en cualquier momento.

Para cada atajo de la lista:

Haga clic en el icono de **Record** para asignar o cambiar la combinación de teclas de ese atajo.

Haga clic en el icono de **Delete** para eliminar la combinación asignada a ese atajo.

[SCREENSHOT: Configuración general — Pestaña 5 — Shortcuts (DeepDOM) | dd-es-general-settings-15.png]

Nota: Para una guía completa paso a paso sobre la configuración y personalización de los atajos de teclado, consulte el artículo dedicado: Cómo configurar los atajos de teclado

## Conclusión

El panel de Configuración general le da control total sobre el comportamiento de DeepDom como plataforma. Dedicar unos minutos a configurar correctamente estos ajustes, especialmente su zona horaria, las frecuencias de actualización, los valores predeterminados de trading y los atajos de teclado, hará que su flujo de trabajo sea significativamente más rápido y fiable durante las sesiones de trading en vivo.

## ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre. Cuando se ponga en contacto, incluya:

Una captura de pantalla del problema.

Una breve descripción de lo que intentaba hacer.

Ticket de soporte (respuesta más rápida): visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico: también puede escribirnos a support@deepcharts.com. Tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.