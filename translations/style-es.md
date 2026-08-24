# Spanish style guide + glossary (mined from the old human-written pages)

DEEPCHARTS HELP CENTER — ENGLISH > SPANISH STYLE GUIDE
(derived from the human-written Spanish pages at deepcharts.com/es/helpcenter and /es/helpcenter/deepdom)

1. REGISTER: formal "usted", consistently.
- All instructions address the reader as usted: "Haga clic en el menú Trading", "Seleccione Mostrar órdenes", "Desconecte la transmisión", "Cierre todos los espacios de trabajo".
- Possessives are su/sus: "su gráfico", "sus órdenes activas", "su fuente de datos". Indirect object "le": "le muestran la misma información visualmente".
- Never tuteo, never voseo, never "vosotros". (The legacy homepage tagline used tú — "Encuentra respuestas a tus preguntas" — this is an inconsistency in the old site; standardize on usted everywhere, including taglines and marketing copy.)

2. STEP-BY-STEP INSTRUCTIONS
- Numbered steps use the usted imperative: "Haga clic en…", "Seleccione…", "Habilite…", "Conecte…", "Utilice el clic izquierdo…", "Elija…".
- System results/outcomes use reflexive future or "se + verb": "Se abrirá la ventana de órdenes, mostrando sus órdenes actuales."
- Purpose clauses use "para + infinitive": "Utilice esto para filtrar…", "siga estos pasos para abrir un nuevo gráfico".
- How-to article and section titles use "Cómo + infinitive": "Cómo añadir mercados correctamente", "Cómo añadir y configurar las burbujas de volumen en su gráfico". Conceptual sections use "Por qué…": "Por qué son importantes las burbujas de volumen".

3. UI ELEMENT NAMES
- UI labels (menus, buttons, panels) are written in bold, capitalized as in the product, WITHOUT quotation marks: "el menú **Trading**", "Seleccione **Mostrar órdenes**", el botón **Suscribirse**.
- Menu paths use " > ": "Opciones > Administrar símbolos".
- Settings panels/options: give the Spanish translation followed by the English original in parentheses on first mention, then Spanish alone: "Configuración de trazado (Plot Settings)", "Modo de escala de burbuja (Bubble Scale Mode)", "Agrupamiento (Grouping)". Settings groups follow the "Configuración de…" pattern: Configuración general, Configuración de datos, Configuración de color, Configuración de texto.
- Toggle states: Habilitado / Deshabilitado. Actions: hacer clic, clic derecho ("haga clic con el botón derecho"), menú desplegable, deslizador.

4. WHAT STAYS IN ENGLISH
- Product names: DeepCharts, DeepDOM — never translated, never respelled.
- Acronyms and industry shorthand: DOM, MBO (Market By Order), MBP (Market By Price), CVD, VWAP, T&S, OCO, GEX, LMT, MKT, STP.
- bid / ask kept in English (lowercase in prose); use "oferta de compra / oferta de venta" only as a one-time descriptive gloss.
- tick, delta, footprint, trading, rollover stay in English (all lowercase except at sentence start).
- Deep-series indicator names: the human site translates them with English on first mention — follow that: "Iceberg Profundo (Deep Iceberg)", "Recarga Profunda (Deep Reload)", "Análisis de Liquidez Profunda (Deep Liquidity Scan)".

5. TERMINOLOGY DISCIPLINE
- "order" is always "orden" (f.), NEVER "pedido" (the legacy page title "Ventana de pedidos" is an error; the article body itself uses "Ventana de órdenes" — use the latter).
- One term per concept; see glossary. Do not alternate between synonyms (e.g. don't mix "fuente de datos" and "feed de datos").

6. MECHANICS
- Headings and category names in sentence case ("Problemas comunes", "Solución de problemas"); capitalize only the first word and proper nouns. (The legacy site title-cased some category names, e.g. "Problemas Comunes" — normalize to sentence case.)
- Replace English em dashes with a colon or comma: "Everything you need — from A to B" > "Todo lo que necesita: desde A hasta B".
- Opening ¿ and ¡ required; accents on capital letters required (Órdenes, Análisis).
- Support wording: "cree un ticket de soporte directamente en nuestro sitio web" or write to support@deepcharts.com.
- Colors/direction conventions from the product are stated plainly: "azul para una compra de mercado, rosa para una venta de mercado".

## Glossary

orderflow / order flow -> flujo de órdenes
order book -> libro de órdenes
market depth -> profundidad de mercado
DOM (Depth of Market) -> DOM (untranslated)
data feed -> fuente de datos
data stream / feed (live) -> flujo de datos; la transmisión
footprint -> footprint (untranslated; "gráfico footprint" if a noun is needed)
iceberg order -> orden iceberg
hidden liquidity -> liquidez oculta
liquidity -> liquidez
delta -> delta (untranslated, masculine: el delta)
hidden delta -> delta oculto
cumulative volume delta -> CVD (delta de volumen acumulado)
volume profile -> perfil de volumen
volume -> volumen
chart -> gráfico
chart overlay -> superposición de gráfico
workspace -> espacio de trabajo
heatmap -> mapa de calor
volume bubbles -> burbujas de volumen
tick -> tick (untranslated)
tick data -> datos de tick
replay (tick replay) -> reproducción (reproducir datos de tick)
order -> orden (never "pedido")
orders window -> Ventana de órdenes
limit order -> orden de límite (LMT)
market order -> orden a mercado (MKT)
stop order -> orden stop (STP)
OCO order -> orden OCO
pending / active order -> orden pendiente / orden activa
passive order -> orden pasiva
aggressive buyer / seller -> comprador agresivo / vendedor agresivo
bid / ask -> bid / ask (gloss: oferta de compra / oferta de venta)
spread -> diferencial
Spread Bid/Ask (indicator) -> Diferencial de oferta/demanda
position -> posición
fill / execution -> ejecución; executed volume -> volumen ejecutado
cancel / modify (an order) -> cancelar / modificar
trade (noun) / to trade -> operación / operar
trading -> trading (untranslated)
broker -> bróker
prop firm -> empresa prop
connection -> conexión
symbol -> símbolo
manage symbols -> administrar símbolos
market -> mercado
exchange -> bolsa
subscription / subscribe -> suscripción / suscribirse
instrument -> instrumento
futures / contract -> futuros / contrato
rollover -> rollover (cambio de contrato)
database -> base de datos
cache -> caché
settings -> configuración
general settings -> configuración general
plot settings -> configuración de trazado (Plot Settings)
enabled / disabled -> habilitado / deshabilitado
button -> botón
click / right-click / left-click -> hacer clic / clic derecho / clic izquierdo
dropdown menu -> menú desplegable
slider -> deslizador
window -> ventana
Time & Sales -> Time & Sales (T&S)
scanner -> escáner
correlation -> correlación
indicator -> indicador
drawing tools -> herramientas de dibujo
template -> plantilla
timeframe -> marco temporal
session imbalance -> desequilibrio de sesión
absorption -> absorción
reload (order reload) -> recarga
MBO / MBP -> MBO (Market By Order) / MBP (Market By Price)
market maker -> creador de mercado
order ID -> ID de la orden
total size / visible size -> tamaño total / tamaño visible
risk manager / risk management -> gestor de riesgos / gestión de riesgos
portfolio -> cartera
simulation environment -> entorno de simulación
account -> cuenta
license -> licencia
billing -> facturación
support ticket -> ticket de soporte
troubleshooting -> solución de problemas
keyboard shortcut -> atajo de teclado
auction theory -> teoría de subastas
envelopes (VWAP) -> envolventes
important levels -> niveles importantes
getting started -> primeros pasos
real time -> tiempo real
Search… (placeholder) -> Buscar…
No results found -> No se encontraron resultados
Coming soon -> Próximamente
Related articles -> Artículos relacionados
Last updated -> Última actualización
Learn more -> Más información