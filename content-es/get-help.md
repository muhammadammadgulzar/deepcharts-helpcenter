---
title: "Cómo obtener ayuda (chat, informe de diagnóstico, soporte)"
slug: "get-help"
category: "Troubleshooting & Support"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Todas las vías para contactar con el soporte de DeepCharts: Contact Support desde la aplicación con diagnósticos, el chat del sitio web, y qué incluir para que su ticket se responda a la primera."
keywords: ["contactar soporte", "obtener ayuda", "chat de soporte", "chat en vivo", "enviar ticket", "atención al cliente", "centro de ayuda", "hablar con un agente"]
source_hash: "413337dff2efc5ca"
ai_translated: true
source_hash: "413337dff2efc5ca"
---
Al terminar conocerá todas las vías para contactar con el soporte de DeepCharts y habrá enviado una solicitud que contiene todo lo que soporte necesita para responder a la primera.

Hay dos canales principales. Cuál usar depende de dónde reside el problema: si la plataforma funciona y el problema está dentro de ella (retrasos, conexiones, cierres inesperados en plena sesión), use el flujo **Contact Support** de la aplicación, porque adjunta automáticamente un informe de diagnóstico. Si la plataforma no abre, o su pregunta es sobre cuentas, facturación o configuración inicial, use el chat del sitio web de DeepCharts.

## Antes de empezar

- Busque primero en este centro de ayuda su mensaje de error exacto: la mayoría de los errores de conexión tienen un artículo de solución dedicado, por ejemplo [[fix-unable-to-establish-connection]] o [[fix-username-password]].
- Si el problema es de rendimiento, retraso o conectividad, genere un [[diagnostic-report|informe de diagnóstico]]: es el adjunto más útil de todos.
- Anote su proveedor de fuente de datos y el nombre de su bróker o empresa prop (consulte [[compatibility-guide]]), ya que la mayoría de los problemas de fuentes de datos son específicos del proveedor.
- Haga capturas de pantalla del error o del comportamiento inesperado mientras está en pantalla.

## Pasos

1. Decida qué canal se ajusta a su situación usando las ramas de abajo.
2. Prepare su descripción antes de abrir el canal. Un primer mensaje que consigue una respuesta rápida y precisa incluye:
   - Qué estaba haciendo cuando apareció el problema y qué esperaba que ocurriera.
   - El texto exacto del error, palabra por palabra (péguelo, no lo parafrasee).
   - Capturas de pantalla del error o de la ventana afectada.
   - Su fuente de datos y el nombre de su bróker/empresa prop (por ejemplo "Rithmic a través de una empresa prop" o "dxFeed comprado en el sitio web").
   - El informe de diagnóstico, enviado automáticamente por el flujo de la aplicación, y cualquier archivo de registro que soporte le haya pedido (consulte [[diagnostic-report]] para saber dónde están los registros).
3. Envíelo por el canal elegido y mantenga la conversación abierta para preguntas de seguimiento.

### Si el problema está dentro de la plataforma (retraso, conexión, cierre inesperado)

Use el flujo de la aplicación: agrupa una instantánea de diagnóstico de su sistema y conectividad junto con su mensaje:

1. Haga clic en el icono **?** (signo de interrogación) en la barra de herramientas de DeepCharts.
2. Seleccione **Contact Support**.
3. Elija **I have a problem or delay with the platform** (tengo un problema o retraso con la plataforma).
4. Deje que se ejecuten las comprobaciones de diagnóstico, haga clic en **Click Here to Confirm** y después en **Contact Support and Send Information** junto con su descripción.

[SCREENSHOT: El menú ? abierto en la barra de herramientas de DeepCharts con Contact Support resaltado, y la ventana de diagnóstico visible detrás | dc-es-get-help-01.png]

El procedimiento completo, incluido lo que contiene el informe y dónde se guardan los archivos de registro, está en [[diagnostic-report]].

> **Nota:** El informe de diagnóstico recopila únicamente datos de sistema y conectividad: no incluye ningún nombre de usuario ni credenciales.

### Si DeepCharts no abre, o la pregunta es sobre cuentas o facturación

Use el widget de chat del sitio web de DeepCharts:

1. Abra el sitio web de DeepCharts y haga clic en el widget de chat en la esquina de la página.
2. Describa su problema. El asistente resuelve de inmediato las preguntas comunes de configuración, fuentes de datos y plataforma, y reenvía la conversación a un agente humano cuando el asunto lo requiere.
3. Adjunte sus capturas de pantalla y pegue el texto exacto del error en el chat.

[SCREENSHOT: El sitio web de DeepCharts con el widget de chat de soporte abierto en la esquina, mostrando el campo de entrada de la conversación | dc-es-get-help-02.png]

Para preguntas de facturación y suscripción en concreto, [[manage-subscriptions]] cubre las opciones de autoservicio.

### Si le pidieron enviar un correo a soporte

[CONFIRM: support email + hours]

## Verifique que funcionó

- En la aplicación: el flujo de diagnóstico se completa y su información se envía tras **Contact Support and Send Information**.
- Chat del sitio web: recibe una respuesta en la conversación, ya sea una solución inmediata o una derivación a un agente.

Los tiempos de respuesta dependen de la disponibilidad de soporte. [CONFIRM: expected support hours and response-time expectations]

## Si algo salió mal

| Síntoma | Qué hacer |
|---|---|
| El diagnóstico de la aplicación no puede ejecutarse ni enviarse | Puede que su equipo esté sin conexión; use el chat del sitio web y mencione que el diagnóstico falló |
| El widget de chat no aparece en el sitio web | Pruebe otro navegador o desactive los bloqueadores de contenido para el sitio |
| Su problema es un error de conexión específico | Consulte primero los artículos de solución dedicados, por ejemplo [[fix-unable-to-establish-connection]], [[fix-bad-server]] o [[fix-username-password]] |
| La plataforma no se instala o no arranca | Consulte [[installation-problems]] antes de contactar con soporte: cubre los bloqueos más comunes |

## Artículos relacionados

- [[diagnostic-report]]
- [[installation-problems]]
- [[license-issues]]
- [[manage-subscriptions]]
- [[data-delayed-lagging]]
- [[compatibility-guide]]