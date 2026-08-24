---
title: "Deep Trades"
slug: "deep-trades"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Contrassegna i grandi ordini aggressivi sul grafico e rivela la liquidità passiva che li ha assorbiti, usando quattro tipi di marker distinti."
keywords: ["deep trades", "grandi ordini", "grandi ordini sul grafico", "MBO", "iceberg", "marker a rombo", "deep trades nessun marker", "deep trades storico mancante"]
source_hash: "9f816a44975578ed"
ai_translated: true
source_hash: "9f816a44975578ed"
---
Deep Trades visualizza in tempo reale i grandi ordini aggressivi a mercato — e, a differenza di una semplice bolla dei grandi trade, ti mostra anche cosa c'era dall'altra parte dello scambio. Quattro forme di marker ti dicono se l'ordine ha spazzato piccole quantità in attesa, ha colpito un muro passivo significativo o si è scontrato frontalmente con un altro grande operatore.

È il successore di [[big-trades|Big Trades]]: Big Trades segna solo dove i grandi trade sono stati eseguiti; Deep Trades rivela il lato passivo — se c'era liquidità in attesa, come era composto lo scambio e quando due grandi ordini si sono scontrati direttamente.

## Che cos'è

Deep Trades è un indicatore orderflow che disegna sul grafico marker codificati per forma ovunque venga eseguito un grande ordine aggressivo. Risponde alla domanda "cosa c'era dall'altra parte di quel trade?" collegando gli ordini aggressivi alla liquidità passiva che li ha eseguiti. Richiede dati di mercato ordine per ordine (MBO), motivo per cui funziona solo su feed specifici.

> **Attenzione:** La compatibilità del feed è un requisito imprescindibile. Deep Trades funziona su **Rithmic Level 1**, **Rithmic Level 2** e **dxFeed Level 2** (con **DOM Type = MBO** per i simboli del gruppo CME). **Non** funziona su dxFeed Level 1 o CQG, perché quei feed non forniscono dati MBO. Su un feed compatibile MBO, imposta anche **Source Type = MBO** in **Source Settings**. Se il tuo feed non è compatibile, usa [[big-trades]] con input Aggregate.

[SCREENSHOT: Grafico con Deep Trades attivo che mostra più tipi di marker contemporaneamente — almeno un quadrato, un cerchio vuoto, un cerchio pieno e un marker a rombo su candele recenti, con i marker colorati lato ask e lato bid distinguibili | dc-it-deep-trades-01.png]

## Quando usarlo

- Fai trading con l'orderflow e vuoi vedere dove vengono eseguiti gli ordini di dimensione istituzionale mentre accadono.
- Vuoi distinguere un grande ordine che ha spazzato liquidità sottile da uno che si è scontrato con un vero muro.
- Cerchi scontri diretti tra grandi ordini aggressivi e grandi ordini passivi (marker a rombo) — gli eventi più significativi che lo strumento rileva.
- Usi iceberg e assorbimento nel tuo playbook (vedi [[understanding-icebergs-absorption]]).

## Avvio rapido

1. Verifica il tuo feed: Rithmic L1/L2 o dxFeed L2. Su dxFeed L2 imposta **DOM Type = MBO** per i simboli del gruppo CME; su qualsiasi feed compatibile MBO imposta **Source Type = MBO** in **Source Settings**.
2. Apri l'**Indicator List** sul tuo grafico, trova **Deep Trades** e fai clic su **+**.
3. Fai clic sull'icona **Settings** accanto a Deep Trades.
4. In **Data Settings**, imposta il **Filter Mode**. Configurazione iniziale: **Automatic** con **Intensity = Medium**, oppure **Manual** con un **Filter** intorno a 30 contratti su un future su indice liquido — poi calibra sul tuo strumento.
5. Lascia **Standard Dev.** al valore predefinito (consigliato) così le dimensioni dei marker si scalano in modo sensato.
6. Applica e osserva i marker apparire man mano che i grandi trade vengono eseguiti.

[SCREENSHOT: Finestra delle impostazioni di Deep Trades aperta su Data Settings, che mostra Chart Area, Days to Load e Filter Mode impostato su Automatic con il menu a discesa Intensity espanso (Low/Medium/Strong) | dc-it-deep-trades-02.png]

> **Nota:** Gli utenti esistenti devono eseguire una migrazione del database una tantum prima che lo storico di Deep Trades possa essere memorizzato: **Options → Database → Settings → Migrate/Compress**. Disconnetti prima i tuoi feed e chiudi il workspace; la migrazione richiede circa 10–15 minuti.

## Come leggerlo

| Marker | Significato |
|---|---|
| **Quadrato** | Un grande ordine ha colpito una significativa liquidità passiva in attesa. |
| **Cerchio vuoto** | Un grande trade composto da molte piccole quantità combinate insieme. |
| **Cerchio pieno** | Un grande trade eseguito da grandi quantità individuali in una o poche esecuzioni. |
| **Rombo** | Un grande ordine aggressivo si è scontrato direttamente con un grande ordine passivo in attesa — il marker più significativo. |

I marker sono colorati per lato (**Ask Color** per l'aggressione in acquisto, **Bid Color** per l'aggressione in vendita), con colori "Battle" separati per gli scontri a rombo. La dimensione del marker si scala con la dimensione del trade.

Priorità di lettura: prima i rombi (due grandi operatori in disaccordo sul prezzo), poi i quadrati (aggressione che incontra un muro — potenziale assorbimento), infine i cerchi (dettaglio sulla composizione del lato aggressivo). Un cluster di quadrati o rombi che non riesce a muovere il prezzo è assorbimento classico; lo stesso cluster seguito da continuazione ti dice che il muro si è rotto.

Ogni marker nasce come esecuzioni sul tape. Osserva il Time & Sales live qui sotto e filtra per Ask o Bid per farti un'idea delle esecuzioni aggressive che Deep Trades sta misurando.

[WIDGET: tape-lab]

## Riferimento delle impostazioni

Raggruppate come nella finestra delle impostazioni.

### Data Settings

| Impostazione | Cosa fa |
|---|---|
| **Chart Area** | Dove vengono disegnati i marker: pannello Horizontal o Vertical, più il numero del pannello. |
| **Days to Load** | Quanti giorni di storico dei grandi trade memorizzato visualizzare. |
| **Filter Mode** | **Manual**: imposti tu il **Filter** = contratti minimi per trade (per esempio 30). **Automatic**: la piattaforma sceglie le soglie; tu scegli l'**Intensity** (**Low / Medium / Strong**). |

### Plot Settings

| Impostazione | Cosa fa |
|---|---|
| **Standard Dev.** | Controlla la scalatura della dimensione dei marker. Si consiglia di mantenere il valore predefinito. |
| **Minimum / Maximum Opacity** | Intervallo di opacità tra le dimensioni dei marker. |
| **Ask Color / Ask Color Battle** | Colori per i marker lato acquisto e per gli scontri a rombo lato acquisto. |
| **Bid Color / Bid Color Battle** | Colori per i marker lato vendita e per gli scontri a rombo lato vendita. |

### Marker Settings

| Impostazione | Cosa fa |
|---|---|
| **Minimum / Maximum Size** | L'intervallo di dimensioni entro cui i marker si scalano. |

### Alert Settings

| Impostazione | Cosa fa |
|---|---|
| **Enable Alert Sound** | Attiva gli avvisi sonori. |
| **Bid Alert / Ask Alert** | Suoni separati per i rilevamenti lato bid e lato ask. |

## Suggerimenti ed errori comuni

- **Nessun marker?** Quasi sempre è una questione di feed: dxFeed L1 e CQG non funzionano, DOM Type non è su MBO, oppure **Source Type** non è impostato su MBO in Source Settings. Dopo di che, verifica che il Filter manuale non sia troppo alto per lo strumento.
- **Nessuno storico per i giorni passati?** È così per progetto. I dati MBO non possono essere riscaricati dal provider — i marker storici esistono solo per i periodi in cui la tua piattaforma era in esecuzione e connessa. Una settimana con il PC spento non ha storico Deep Trades.
- **Troppi o troppo pochi marker:** in modalità Manual regola i contratti minimi; in modalità Automatic cambia l'Intensity.
- **Lascia che sia la piattaforma a calibrare le soglie.** Esegui **Options → Tools → Big Trades Analysis** — calcola le soglie ottimali per strumento (usate con il filtro in modalità Automatic) e le salva automaticamente. Rieseguilo ogni settimana o mese, man mano che le condizioni di liquidità cambiano.
- **Combinalo con la tabella.** Abbina i marker a [[deep-stats]] per confermare l'assorbimento numericamente (letture COT ed Effort) invece di fidarti di un singolo marker.

## Articoli correlati

- [[orderflow-101]]
- [[understanding-icebergs-absorption]]
- [[big-trades]]
- [[deep-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]