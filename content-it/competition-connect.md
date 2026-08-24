---
title: "Competizione DeepCharts: iscriviti e connettiti"
slug: "competition-connect"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Iscriviti a una competizione di trading DeepCharts e collega il conto di gara V-Sim insieme al tuo feed dati."
keywords: ["competizione", "gara", "campionato", "V-Sim", "vsim", "iscriversi alla competizione", "credenziali di gara", "gara di trading", "reset del conto"]
source_hash: "0c0a82d9c4fe0416"
ai_translated: true
source_hash: "0c0a82d9c4fe0416"
---
Alla fine ti sarai iscritto a una competizione DeepCharts e starai facendo trading sul tuo conto di gara con grafici in tempo reale. DeepCharts organizza periodicamente competizioni di trading; i conti di gara girano sulla feed source **V-Sim**, che è **solo esecuzione** — inserisce le tue operazioni di gara ma non trasporta dati di mercato. Per questo colleghi due cose contemporaneamente: il conto di gara per le operazioni e il tuo feed dati per i grafici.

Poiché V-Sim esegue le operazioni contro condizioni di mercato in tempo reale, il feed gratuito ritardato di 15 minuti non è supportato per le competizioni — ti serve una connessione live Rithmic o dxFeed.

## Prima di iniziare

- Una licenza attiva della piattaforma DeepCharts — [[install-deepcharts]]
- Un feed dati live (Rithmic o dxFeed) collegato e funzionante — [[connect-data-feed]] (il feed ritardato di [[free-delayed-data-feed]] non è idoneo)
- Un account del sito web DeepCharts per registrarti alla gara

## Passaggi

1. Vai su `my.deepcharts.com` e accedi alla tua dashboard.

2. Seleziona **Contest** nella barra laterale.

[SCREENSHOT: Dashboard DeepCharts con la voce Contest evidenziata nella barra laterale e una scheda di competizione attiva visibile | dc-it-competition-connect-01.png]

3. Trova la competizione attiva e fai clic su **Join Competition**. Puoi prima consultare il regolamento della competizione tramite il link alle regole sulla stessa pagina.

4. Conferma la richiesta, poi aggiorna la pagina del browser.

5. Fai clic su **See Credentials**. Prendi nota dei quattro valori mostrati: **Username**, **Password**, **Feed Source** (V-Sim) e l'**Account ID** della tua competizione.

[SCREENSHOT: Pagina Contest dopo l'iscrizione, con il pulsante See Credentials e il pannello delle credenziali che mostra username, password, feed source V-Sim e account ID (valori oscurati) | dc-it-competition-connect-02.png]

> **Nota:** Le credenziali compaiono solo una volta che la competizione è iniziata. Se ti sei registrato ma non vedi ancora le credenziali, attendi la data di inizio.

6. In DeepCharts, fai clic su **Select Connection** → **Feed Settings**, poi fai clic su **Add Connection**.

7. Compila il modulo:
   - **Name** — un'etichetta qualsiasi, per esempio "Contest".
   - **Feed Source** — seleziona **V-Sim**. Questo è il campo critico; V-Sim si trova nello stesso menu a discesa di Rithmic e dxFeed.
   - **Username** e **Password** — dal pannello delle credenziali del passaggio 5.

[SCREENSHOT: Finestra Feed Settings con Feed Source impostata su V-Sim e lo username di gara inserito | dc-it-competition-connect-03.png]

8. Fai clic su **Save** e chiudi la finestra Feed Settings.

9. In **Select Connection**, connetti il feed di gara — e assicurati che **anche** il tuo feed dati sia connesso. Entrambi devono mostrare il punto verde nello stesso momento; puoi mantenere più connessioni contemporaneamente (vedi [[manage-feed-connections]]).

[SCREENSHOT: Menu a discesa Select Connection con la connessione di gara V-Sim e una connessione al feed dati live, entrambe con il punto verde | dc-it-competition-connect-04.png]

10. Apri **Options → Symbol Manage** e verifica che ogni exchange sia instradato verso il tuo **feed dati, non verso il conto di gara V-Sim**. Se Symbol Manage punta a V-Sim, i grafici non mostrano dati perché il conto di gara non ne trasporta. Prova il mock interattivo qui sotto — fai clic sull'icona a catena su una riga per cambiare ciclicamente il feed mappato. Vedi [[symbol-manage]].

[WIDGET: symbol-manage-mock]

11. Apri un grafico dei prezzi. Nel **Trading Panel** (lato destro del grafico), imposta il campo **Broker** su **V-Sim** e scegli il tuo conto di gara dal menu a discesa. Il saldo iniziale mostrato è di $50.000. Esplora il pannello nel mock interattivo qui sotto — passa il mouse su un pulsante per vedere cosa fa e fai clic sulla posizione SIM per osservare il P/L in tempo reale:

[WIDGET: trading-panel-mock]

### Se vuoi resettare il tuo conto

Dalla pagina Contest della dashboard, fai clic su **Reset Account** e conferma. Il tuo saldo torna a $50.000. Hai diritto a **un solo reset**, e solo entro la **prima settimana** della competizione — dopo, l'opzione scompare, quindi usala con criterio.

### Se non c'è nessuna competizione aperta

La pagina Contest mostra il pulsante **Join Competition** solo mentre le registrazioni sono aperte. Se non c'è nulla in elenco, ripassa più avanti — le competizioni si svolgono periodicamente.

## Verifica che abbia funzionato

- Sia la connessione di gara V-Sim sia il tuo feed dati mostrano il punto verde.
- I grafici si aggiornano in tempo reale dal tuo feed dati.
- Il Trading Panel mostra il broker V-Sim, il tuo conto di gara e il saldo di $50.000.

## Regole della competizione

Le regole di ogni competizione sono pubblicate sulla pagina Contest — consultale prima di fare trading. Le competizioni recenti hanno usato queste regole:

| Regola | Valore |
|---|---|
| Tipo di conto | Solo demo simulata (nessun denaro reale) |
| Idoneità alla classifica | Minimo 3 giorni di trading attivi |
| Limite di perdita giornaliera | 3% del saldo del conto |
| Limite di profitto giornaliero | 10% del saldo del conto |
| Posizione massima | 5 contratti mini alla volta |
| Posizioni overnight | Vietate — chiuse automaticamente alla chiusura del mercato |
| Reset | 1 reset, solo nella prima settimana |

Durante tutta la competizione sono richiesti una licenza attiva della piattaforma e un feed dati live. I dettagli dei premi di ogni competizione sono elencati sulla pagina Contest.

## Se qualcosa è andato storto

- **I grafici non mostrano dati** — Symbol Manage punta al conto V-Sim invece che al tuo feed dati, oppure il feed dati non è connesso. Reinstrada in [[symbol-manage]] e verifica che entrambi i punti siano verdi.
- **Nessun pulsante See Credentials** — la competizione non è ancora iniziata, oppure ti sei registrato senza completare la conferma di iscrizione. Verifica che la pagina Contest ti mostri come iscritto.
- **La connessione di gara resta rossa** — ricopia esattamente username e password dal pannello delle credenziali; vedi [[fix-username-password]].
- Per tutto il resto — vedi [[get-help]].

## Articoli correlati

- [[connect-data-feed]]
- [[connect-rithmic]]
- [[connect-dxfeed]]
- [[symbol-manage]]
- [[manage-feed-connections]]
- [[trading-panel-reference]]