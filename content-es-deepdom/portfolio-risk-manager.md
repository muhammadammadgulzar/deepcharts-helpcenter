---
title: "Gestor de riesgos de cartera"
slug: "portfolio-risk-manager"
category: "Trading"
subcategory: ""
type: "how-to"
difficulty: "intermediate"
time: "6 min read"
description: "Gestione y realice el seguimiento de las órdenes activas, las posiciones y el historial de ejecuciones a través de la interfaz dedicada de la Ventana de órdenes"
keywords: ["gestor de riesgos de cartera", "gestor de riesgos de cartera deepdom", "deepdom", "trading"]
source_hash: "f903492cbabd5799"
ai_translated: true
source_hash: "f903492cbabd5799"
---
Gestione y realice el seguimiento de las órdenes activas, las posiciones y el historial de ejecuciones a través de la interfaz dedicada de la Ventana de órdenes

## Gestor de riesgos

El Gestor de riesgos de Deepdom permite a los traders aplicar controles de riesgo profesionales y automatizados directamente dentro de la plataforma.

Al definir reglas estrictas de gestión de riesgos, los traders pueden imponer disciplina en tiempo real. Si se incumple cualquier regla predefinida, la cuenta se bloquea automáticamente durante el día (o durante un período especificado), garantizando el cumplimiento del plan de trading y evitando la toma de decisiones emocionales.

## 1. Cómo acceder al Gestor de riesgos

1. Vaya a **Trading** en la barra de navegación principal.
2. Haga clic en **Show Portfolio**.

[SCREENSHOT: Gestor de riesgos de cartera — 1. Cómo acceder al Gestor de riesgos (DeepDOM) | dd-es-portfolio-risk-manager-01.png]

## 2. Sección de vista general

En la pestaña **Overview** (Vista general), puede ver todas las cuentas conectadas a Deepdom.

[SCREENSHOT: Gestor de riesgos de cartera — 2. Sección de vista general (DeepDOM) | dd-es-portfolio-risk-manager-02.png]

Verá una tarjeta principal por cada conexión (por ejemplo: SIM, Rithmic, Dxfeed).

[SCREENSHOT: Gestor de riesgos de cartera — 2. Sección de vista general (DeepDOM) | dd-es-portfolio-risk-manager-03.png]

#### Información de la tarjeta de conexión

Nombre de la conexión (arriba a la izquierda, p. ej., SIM)

Daily Profit (Beneficio diario): PnL diario total de todas las cuentas bajo esa conexión

Open Profit (Beneficio abierto): PnL no realizado actual

[SCREENSHOT: Gestor de riesgos de cartera — Información de la tarjeta de conexión (DeepDOM) | dd-es-portfolio-risk-manager-04.png]

#### Controles a nivel de conexión

En el lado derecho de la tarjeta de conexión:

#### Botón de pausa

Le permite pausar el trading durante:

1 minuto

10 minutos

30 minutos

60 minutos

Toda la sesión

#### Cuando está en pausa:

Todas las cuentas bajo la conexión quedan bloqueadas

Aparece el estado "Lockout" (Bloqueo)

Un temporizador de cuenta atrás muestra cuándo se reanudará el trading

[SCREENSHOT: Gestor de riesgos de cartera — Cuando está en pausa: (DeepDOM) | dd-es-portfolio-risk-manager-05.png]

#### Botón de cierre

Cierra (aplana) instantáneamente todas las posiciones abiertas de todas las cuentas bajo esa conexión.

## 3. Tarjetas de cuenta individuales

Cada cuenta bajo una conexión tiene su propio panel de control.

[SCREENSHOT: Gestor de riesgos de cartera — 3. Tarjetas de cuenta individuales (DeepDOM) | dd-es-portfolio-risk-manager-06.png]

#### Botones a nivel de cuenta

• Botón de ojo: abre la vista detallada de gestión de riesgos de esa cuenta

• Botón de pausa: pausa solo esa cuenta específica

• Botón de cierre: aplana solo esa cuenta

#### Información de la cuenta

• Balance (Saldo)

• PnL diario

• PnL abierto

## 4. Configuración de gestión monetaria (lado del cliente)

Haga clic en el botón **Settings** para configurar las reglas de riesgo.

Se le pedirá que elija entre:

• Configuración a nivel de cuenta

• Configuración a nivel de conexión

[SCREENSHOT: Gestor de riesgos de cartera — 4. Configuración de gestión monetaria (lado del cliente) (DeepDOM) | dd-es-portfolio-risk-manager-07.png]

Importante: el Gestor de riesgos opera en el lado del cliente. Si la plataforma está cerrada, el gestor monetario no funcionará.

## 5. Configuración general

[SCREENSHOT: Gestor de riesgos de cartera — 5. Configuración general (DeepDOM) | dd-es-portfolio-risk-manager-08.png]

#### Habilitar

Active o desactive el gestor monetario.

#### Symbol – Exclude Not Listed (Símbolo: excluir no listados)

Si está habilitado, solo podrá operar los símbolos que añada manualmente.

Ejemplo: si desea evitar operar accidentalmente el contrato Mini en lugar del Micro, añada solo el símbolo Micro. Todos los demás símbolos quedarán bloqueados.

## 6. Límite de pérdida diaria

[SCREENSHOT: Gestor de riesgos de cartera — 6. Límite de pérdida diaria (DeepDOM) | dd-es-portfolio-risk-manager-09.png]

• Habilitar: active la protección de pérdida diaria

• Valor: pérdida máxima permitida

• Unidad: dinero ($) o porcentaje (%)

Una vez incumplido, se ejecutará la acción seleccionada.

## 7. Límite de beneficio diario

[SCREENSHOT: Gestor de riesgos de cartera — 7. Límite de beneficio diario (DeepDOM) | dd-es-portfolio-risk-manager-10.png]

• Habilitar: active la protección de beneficio diario

• Valor: beneficio máximo permitido

• Unidad: dinero ($) o porcentaje (%)

• Include Open Position (Incluir posición abierta): si está habilitado, las operaciones abiertas se cerrarán una vez alcanzado el límite.

## 8. Trailing Stop (drawdown móvil diario)

#### Habilitar

Active el límite móvil.

#### Opciones de acción:

[SCREENSHOT: Gestor de riesgos de cartera — Opciones de acción: (DeepDOM) | dd-es-portfolio-risk-manager-11.png]

• Daily Pause (Pausa diaria): bloquea la cuenta durante la sesión

• Time Pause (Pausa temporal): bloquea la cuenta durante los minutos seleccionados

[SCREENSHOT: Gestor de riesgos de cartera — Opciones de acción: (DeepDOM) | dd-es-portfolio-risk-manager-12.png]

• Flat (Aplanar): cierra las posiciones pero no bloquea

#### Valor y unidad

Se establece en dinero o porcentaje.

#### Incluir posición abierta

Si está habilitado, el trailing stop se aplica también al PnL no realizado.

Ejemplo: si el beneficio abierto retrocede más que el límite móvil, el sistema ejecuta la acción seleccionada.

## 9. Límites basados en la cartera

#### Límite de pérdida de cartera

Controla la pérdida total de todas las posiciones abiertas (p. ej., ES + NQ combinados).

[SCREENSHOT: Gestor de riesgos de cartera — Límite de pérdida de cartera (DeepDOM) | dd-es-portfolio-risk-manager-13.png]

#### Mismas opciones de configuración:

• Habilitar

• Acción

• Valor

• Unidad

#### Límite de beneficio de cartera

Misma lógica que el límite de beneficio diario, pero aplicada a toda la cartera.

[SCREENSHOT: Gestor de riesgos de cartera — Límite de beneficio de cartera (DeepDOM) | dd-es-portfolio-risk-manager-14.png]

## 10. Límites basados en posiciones

#### Límite de pérdida por posición

Se aplica a operaciones individuales. Si se supera, la posición se aplana automáticamente y se ejecuta la acción.

#### Límite de beneficio por posición

Misma lógica, pero para objetivos de beneficio en posiciones individuales.

[SCREENSHOT: Gestor de riesgos de cartera — Límite de beneficio por posición (DeepDOM) | dd-es-portfolio-risk-manager-15.png]

## 11. Limitar horas de trading (zona horaria EST)

[SCREENSHOT: Gestor de riesgos de cartera — 11. Limitar horas de trading (zona horaria EST) (DeepDOM) | dd-es-portfolio-risk-manager-16.png]

Puede restringir el trading a ventanas horarias específicas.

#### Importante:

• La hora se basa en la zona horaria EST

• Es independiente de la zona horaria de su PC o de la del gráfico

#### Establezca:

• Begin Time (Hora de inicio)

• End Time (Hora de fin)

## 12. Añadir símbolo

[SCREENSHOT: Gestor de riesgos de cartera — 12. Añadir símbolo (DeepDOM) | dd-es-portfolio-risk-manager-17.png]

Añada o elimine los símbolos permitidos para el trading.

Si Symbol – Exclude Not Listed está habilitado, solo se podrán operar los símbolos añadidos.

## 13. Inhibir cambios hasta la próxima sesión

[SCREENSHOT: Gestor de riesgos de cartera — 13. Inhibir cambios hasta la próxima sesión (DeepDOM) | dd-es-portfolio-risk-manager-18.png]

Si está habilitado:

• Cualquier cambio realizado en la configuración de riesgo solo se aplicará el próximo día de trading.

## 14. Estado

El estado puede mostrar:

Lockout (Bloqueo): la cuenta está bloqueada debido al incumplimiento de una regla. Un temporizador de cuenta atrás muestra cuándo se reanudará el trading.

[SCREENSHOT: Gestor de riesgos de cartera — 14. Estado (DeepDOM) | dd-es-portfolio-risk-manager-19.png]

## 15. Vista detallada de la cuenta

Haga clic en el botón de ojo para ver las posiciones detalladas y la información de riesgo de la cuenta.

#### Nota importante

El Gestor de riesgos sigue la zona horaria de CME (EST) para los reinicios diarios.

#### Si está bloqueada durante el día:

• La cuenta se desbloquea automáticamente a las 18:00 EST.

• La única manera de desbloquear la cuenta después de que se active el bloqueo del Gestor de riesgos es pedir al equipo de soporte de Deepdom que la desbloquee desde el backend, y esto puede tardar algún tiempo.

[SCREENSHOT: Gestor de riesgos de cartera — Si está bloqueada durante el día: (DeepDOM) | dd-es-portfolio-risk-manager-20.png]

## Resumen

El Gestor de riesgos de Deepdom proporciona:

• Límites diarios de pérdida y beneficio

• Protección de drawdown móvil

• Controles de riesgo a nivel de cartera

• Límites basados en posiciones

• Trading restringido por horario

• Protección basada en símbolos

• Aplicación automática de bloqueos

Transforma la gestión de riesgos de una decisión discrecional en un sistema de disciplina automatizado, garantizando que los traders sigan estrictamente su plan de riesgo predefinido.

## ¿Sigue teniendo problemas?

Nuestro equipo de soporte está disponible 24/7 y listo para ayudarle con cualquier problema que encuentre. Cuando se ponga en contacto, incluya:

Una captura de pantalla del problema.

Una breve descripción de lo que intentaba hacer.

Ticket de soporte (respuesta más rápida): visite www.deepcharts.com y cree un ticket de soporte directamente en nuestro sitio web.

Soporte por correo electrónico: también puede escribirnos a support@deepcharts.com. Tenga en cuenta que las respuestas por correo electrónico pueden tardar un poco más que un ticket de soporte.