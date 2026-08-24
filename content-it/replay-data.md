---
title: "Replay dei dati di mercato"
slug: "replay-data"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Riproduci i dati di mercato registrati su un grafico a qualsiasi data, ora e velocità — esercitati e rivedi le sessioni senza un feed dati live."
keywords: ["replay", "replay tick", "replay dati tick", "replay di mercato", "replay manage", "backtest", "esercitarsi nel weekend", "il replay non parte", "replay dei miei trade"]
source_hash: "ab08bc1dd5161e99"
ai_translated: true
source_hash: "ab08bc1dd5161e99"
---
Alla fine di questa guida riprodurrai dati di mercato registrati su un grafico — alla data, ora e velocità che preferisci — senza bisogno di un feed dati live. Il replay è il modo in cui ti eserciti nei weekend, rivedi una sessione barra per barra o studi un trade passato in condizioni di mercato reali.

Il replay e un feed live si escludono a vicenda: la piattaforma riproduce dati tick registrati invece di trasmettere dati live, quindi devi disconnettere il feed e chiudere i tuoi grafici prima di iniziare.

## Prima di iniziare

- DeepCharts installato e attivato — [[install-deepcharts]]
- Nessuna connessione al feed dati attiva — il selettore del feed in alto a destra non deve mostrare il puntino verde di connessione; vedi [[manage-feed-connections]]
- Tutti i grafici dei prezzi aperti chiusi
- Un'idea di massima dell'exchange e della data che vuoi riprodurre

## Passaggi

1. Disconnettiti da qualsiasi feed dati e chiudi ogni grafico dei prezzi aperto. Il replay non parte finché un grafico è aperto o un feed è connesso.

2. Apri **Options → Replay Tick Data**. Si apre la finestra **Replay Manage**.

[SCREENSHOT: Menu Options aperto nella barra principale con Replay Tick Data evidenziato | dc-it-replay-data-01.png]

3. Premi **Select Symbols** e scegli l'exchange che vuoi riprodurre.

[SCREENSHOT: Finestra Replay Manage con la selezione di exchange/simbolo aperta e un exchange scelto | dc-it-replay-data-02.png]

4. Fai clic sull'icona del calendario, scegli la data e l'ora da cui deve iniziare il replay, poi premi **Set**.

[SCREENSHOT: Finestra Replay Manage con il selettore calendario aperto, una data e un'ora di inizio selezionate, e il pulsante Set visibile | dc-it-replay-data-03.png]

5. Se vuoi i dati di profondità del mercato durante il replay, abilita l'opzione Level 2 nella finestra del replay mentre i dati si caricano — l'Advanced DOM diventa così utilizzabile durante la sessione. [CONFIRM: exact label and location of the Level 2 / DOM option in the Replay Manage window] Vedi [[advanced-dom]].

6. Lascia aperta la finestra **Replay Manage** e torna alla finestra principale. Apri un nuovo grafico per quell'exchange tramite **New → Price Chart** — vedi [[first-chart]].

7. Premi **Play** in Replay Manage. Il grafico inizia a costruire le barre dalla data e dall'ora selezionate.

[SCREENSHOT: Finestra Replay Manage durante la riproduzione che mostra il controllo Play, la barra di scorrimento della velocità e le opzioni di velocità preimpostate, con un grafico in replay sullo sfondo | dc-it-replay-data-04.png]

8. Regola il ritmo con la barra di scorrimento della velocità o con le opzioni di velocità preimpostate.

> **Attenzione:** Tieni aperta la finestra Replay Manage per tutta la sessione. Chiuderla termina il replay.

> **Nota:** Il replay non ha impostazioni proprie di indicatori o template — Replay Manage controlla solo exchange, data/ora e velocità. I grafici aperti durante il replay usano lo stesso template di grafico e la stessa lista di indicatori dei tuoi grafici live. Se un indicatore indesiderato compare su un grafico in replay, proviene dalla lista di indicatori del grafico o dal template salvato, non dal replay.

### Se vuoi riprodurre uno dei tuoi trade passati

Non esiste un pulsante "replay del mio trade" in un solo clic, ma il flusso di lavoro è semplice:

1. Su un grafico dello strumento che hai tradato, fai clic con il tasto destro del mouse e abilita **Show Historical Orders** (Ctrl Alt H). Compaiono delle frecce che marcano i tuoi ingressi e le tue uscite passate.
2. Annota gli orari di ingresso e di uscita indicati dalle frecce.
3. Avvia un replay (passaggi qui sopra) esattamente a quella data e ora e osserva il mercato attorno al tuo trade.

Per il lato statistico della revisione del tuo trading, vedi [[performance-analysis]].

### Se metti a grafico un mini ma esegui sul suo micro

Riprodurre il contratto mini è l'opzione consigliata e più accurata — i dati storici dei micro sul server non sono puliti quanto quelli dei mini, quindi aspettati problemi di sincronizzazione se li mescoli. Se ti serve comunque un grafico del mini con esecuzione sul micro in replay, la soluzione alternativa è:

1. Connetti un feed dati live.
2. Apri il grafico del contratto micro a partire dalla data del backtest — i suoi dati tick vengono scaricati dal feed live e memorizzati in locale. Il progresso è visibile sotto **Options → Show Log → Connection Logs**; per intervalli ampi ci vuole un po'.
3. Una volta caricati, chiudi il grafico e disconnetti il feed.
4. Apri Replay Manage, seleziona sia il contratto mini sia il micro, e avvia il replay.

## Verifica che abbia funzionato

Dopo aver premuto **Play**, il grafico disegna nuove barre alla velocità scelta a partire dall'orario di inizio selezionato, e mettere in pausa o cambiare velocità in Replay Manage ha effetto immediato. I tuoi indicatori calcolano sui dati riprodotti esattamente come farebbero dal vivo.

## Se qualcosa è andato storto

- **Play non fa nulla o il replay non parte** — un grafico dei prezzi era ancora aperto o un feed dati era ancora connesso quando hai aperto Replay Manage. Chiudi tutti i grafici, disconnetti il feed e ricomincia dal passaggio 2.
- **Il grafico resta vuoto** — la data selezionata non ha dati registrati per quell'exchange. Scegli una data o un exchange diverso in Replay Manage.
- **Il replay si è fermato da solo** — la finestra Replay Manage è stata chiusa. Riapri **Options → Replay Tick Data** e configura di nuovo la sessione; tieni la finestra aperta.
- **Sul grafico in replay compare un indicatore che non hai mai aggiunto** — proviene dal template salvato o dalla lista di indicatori del grafico (il replay non aggiunge nulla). Rimuovilo tramite il gestore degli indicatori del grafico o carica un template pulito — vedi [[templates-workspaces]].
- **Ti serve solo la revisione di fine giornata, non la riproduzione dei tick** — la sorgente feed Historical potrebbe essere più adatta; vedi [[end-of-day-data]].

## Articoli correlati

- [[manage-feed-connections]]
- [[first-chart]]
- [[advanced-dom]]
- [[templates-workspaces]]
- [[performance-analysis]]
- [[simulation-accounts]]