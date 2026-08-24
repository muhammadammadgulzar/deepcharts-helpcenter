---
title: "Correzione: grafici in ritardo o dati ritardati (checklist)"
slug: "data-delayed-lagging"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "intermediate"
time: "15 min to complete"
description: "Una checklist passo passo per diagnosticare dati dei grafici ritardati o in lag — instradamento sul feed ritardato, velocità di download regionale, DOM Type, gateway Rithmic e risorse di sistema."
keywords: ["grafici in lag", "dati ritardati", "grafico indietro rispetto al mercato", "etichetta di ritardo", "ritardo di 900 secondi", "lag all'apertura del mercato", "feed dati lento", "test di rete"]
source_hash: "a16bfd62284a3e75"
ai_translated: true
source_hash: "a16bfd62284a3e75"
---
I tuoi grafici si muovono, ma i prezzi arrivano in ritardo — qualche secondo dietro al mercato, o peggio durante l'apertura e i comunicati di rilievo. Il ritardo ha diverse cause indipendenti, quindi questo articolo è una checklist: percorrila dall'alto verso il basso e fermati al primo controllo che spiega il tuo caso.

## Sintomo

- Il grafico si aggiorna, ma visibilmente in ritardo rispetto al mercato live.
- Un'etichetta rossa di ritardo compare nell'angolo in alto a sinistra del grafico e mostra di quanti secondi i dati sono indietro.
- Il lag è peggiore durante i periodi ad alto volume (l'apertura del mercato, le notizie importanti).

[SCREENSHOT: Un grafico con l'etichetta rossa di ritardo visibile nell'angolo in alto a sinistra che mostra un valore di ritardo in secondi | dc-it-data-delayed-lagging-01.png]

Da non confondere con [[feed-connected-chart-not-moving]] — lì non si aggiorna proprio nulla. Controlla prima il puntino della connessione del feed: se il feed è disconnesso, questo articolo non si applica.

## Causa più probabile

O il simbolo è instradato sul feed gratuito ritardato di 15 minuti in Symbol Manage, oppure la tua velocità di download dalla regione del server del feed non riesce a stare al passo durante i periodi ad alto volume.

## Soluzione rapida

Leggi l'etichetta rossa di ritardo — ti dice quale problema hai:

1. Se l'etichetta indica esattamente **900 secondi** (15 minuti), l'exchange è instradato sul [[free-delayed-data-feed|feed ritardato gratuito]], non sul tuo abbonamento live. Apri **Options → Symbol Manage**, rimappa quell'exchange sulla tua connessione feed live (vedi [[symbol-manage]]), poi riapri il grafico.
2. Se l'etichetta fluttua in modo casuale (3s, 15s, 20s...), è un problema di prestazioni del feed live — continua con la checklist qui sotto.

Il mock interattivo di Symbol Manage qui sotto mostra come funziona la rimappatura — fai clic sull'icona a catena su un exchange per cambiare ciclicamente su quale feed è mappato.

[WIDGET: symbol-manage-mock]

## Se non ha funzionato

### Causa: velocità di download lenta dalla regione del server del feed

Ciò che conta non è la tua velocità internet generale ma la velocità di download dalla regione del server del feed — puoi avere 100 Mbps a livello globale ed essere comunque in ritardo. Esegui il test di rete integrato:

1. Fai clic sull'icona **?** nella barra principale.
2. Fai clic su **Contact Support**, poi su **I have a problem or delay with the platform**.
3. Nella finestra Diagnostic Tools, conferma l'esecuzione del test di rete.
4. Quando termina, usa il pulsante di copia negli appunti per salvare i risultati.

[SCREENSHOT: Finestra Diagnostic Tools dopo il completamento del test di rete, che mostra i risultati di ping e velocità di download per regione con il pulsante di copia negli appunti visibile | dc-it-data-delayed-lagging-02.png]

Come leggere i risultati: i valori US corrispondono al server della Virginia, i valori EU a Francoforte. Come regola pratica, se la velocità di download per la regione a cui ti colleghi è sotto circa 10 Mbps, aspettati ritardi durante i periodi ad alto volume. Anche una VPN o un proxy rilevati possono aggiungere latenza — prova senza.

### Causa: lo stream MBO di dxFeed è troppo pesante per la tua connessione

I dati Level-2 di dxFeed per gli exchange del CME Group sono MBO (market-by-order), molto più pesanti degli MBP. dxFeed ti instrada automaticamente sul suo server più vicino (Francoforte o Virginia) — non puoi scegliere — quindi se la tua linea non riesce a stare al passo, cambia il campo **DOM Type** nelle impostazioni del tuo feed dxFeed da **MBO** a **MBP**. MBP di solito elimina il ritardo sulle linee più lente; il compromesso è la perdita del dettaglio MBO a livello di ordine. Vedi [[connect-dxfeed]].

[SCREENSHOT: Impostazioni del feed dxFeed con il campo DOM Type aperto che mostra le opzioni MBO e MBP, con MBP selezionato | dc-it-data-delayed-lagging-03.png]

### Causa: gateway Rithmic o impostazioni di limitazione

Gli utenti Rithmic possono agire su tre impostazioni:

1. Il **Gateway** è selezionabile dall'utente — esegui il test di rete qui sopra e scegli la località gateway più veloce nelle impostazioni del tuo feed.
2. Verifica che la feed source sia **Rithmic RAPI**, non **Rithmic Beta**.
3. In R Trader Pro, apri **Window → Preferences → Performance** e imposta entrambi i cursori **Quotes** e **Order Book** al massimo, poi **Apply → OK**. Un limite qui strozza i dati ad alto volume e ritarda i grafici.

[SCREENSHOT: Scheda Performance delle Preferences di R Trader Pro con entrambi i cursori Quotes e Order Book trascinati al massimo | dc-it-data-delayed-lagging-04.png]

Vedi [[connect-rithmic]] e [[rtrader-pro-plugin]].

### Causa: il tuo computer è a corto di RAM o CPU

I risultati diagnostici includono la RAM libera e l'utilizzo della CPU. Una RAM libera molto bassa o un utilizzo complessivo della CPU molto alto causano lag indipendentemente dalla rete — chiudi le altre applicazioni e ripeti il test.

### Causa: i grafici sono lenti a caricarsi all'apertura (non è ritardo live)

Se il problema è il caricamento lento anziché il lag live, controlla il badge di stato nella barra principale mentre il grafico si costruisce. **LDT** significa che i dati vengono caricati dal tuo disco — se resta bloccato lì, indica un problema di dati locali, quindi elimina i dati del simbolo ([[delete-market-data]]) e ricaricali. **DWT** significa che i dati vengono scaricati dal server del feed — osserva **Options → Show Log → Connection log** per vedere i tick in arrivo. DWT con un Connection log vuoto significa che il server del feed non sta inviando alcun dato.

## Ancora bloccato

Se instradamento, velocità regionale, impostazioni e risorse di sistema risultano tutti a posto e il ritardo persiste, genera un [[diagnostic-report]], includi i risultati copiati del test di rete e contatta il supporto tramite [[get-help]].

## Come prevenirlo

- Mappa ogni exchange sul tuo feed live in [[symbol-manage]] dopo qualsiasi cambio di feed.
- Imposta i cursori delle prestazioni di R Trader Pro durante la configurazione iniziale di Rithmic — vedi [[connect-rithmic]].
- Scegli il tuo gateway Rithmic con lo speed test, non a caso, quando segui [[connect-data-feed]].

## Articoli correlati

- [[free-delayed-data-feed]]
- [[feed-connected-chart-not-moving]]
- [[connect-dxfeed]]
- [[connect-rithmic]]
- [[symbol-manage]]
- [[gaps-in-price]]