---
title: "Come acquistare un feed dati e ottenere le tue credenziali"
slug: "buy-data-feed"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Acquista un abbonamento al feed dati su my.deepcharts.com, firma il contratto per i dati di mercato e recupera il nome utente e la password che DeepCharts usa per connettersi."
keywords: ["acquistare feed dati", "acquisto feed dati", "abbonamento feed dati", "ottenere credenziali", "nome utente e password feed dati", "firmare contratto dati di mercato", "acquistare dati di mercato", "aggiungere abbonamento feed dati"]
source_hash: "b587af31ce06cb42"
ai_translated: true
source_hash: "b587af31ce06cb42"
---
Alla fine avrai un abbonamento al feed dati attivo e il nome utente e la password di cui DeepCharts ha bisogno per connettersi ai dati di mercato in tempo reale.

DeepCharts disegna i suoi grafici a partire da un feed dati di mercato in tempo reale. Se non hai già le credenziali di un feed da un broker o da una prop firm, puoi acquistare un abbonamento al feed direttamente dalla dashboard del tuo account su my.deepcharts.com — le credenziali vengono emesse proprio lì una volta firmato il contratto per i dati di mercato. Ecco dove finiscono quelle credenziali — la finestra Feed Settings all'interno di DeepCharts. Scegli una sorgente nel mock qui sotto per vedere quali campi richiede ciascun provider:

[WIDGET: feed-navigator]

## Prima di iniziare

- Un account DeepCharts su my.deepcharts.com — lo stesso account che contiene la tua licenza (vedi [[install-deepcharts]])
- Una decisione su quale feed vuoi — [[compatibility-guide]] confronta le opzioni supportate
- Una carta di pagamento
- Qualche minuto per completare il contratto per i dati di mercato (richiede dati personali e il tuo stato di sottoscrittore)

> **Nota:** Se il tuo account proviene da una **prop firm**, non acquistare un feed qui — le tue credenziali del feed arrivano dalla dashboard della prop firm stessa. Vedi invece [[connect-rithmic-prop-firm]] o [[connect-dxfeed-prop-firm]].

> **Suggerimento:** Stai solo esplorando la piattaforma per ora? Non hai bisogno di acquistare nulla — il [[free-delayed-data-feed|feed gratuito ritardato di 15 minuti]] integrato funziona senza credenziali né contratto.

## Passaggi

1. Accedi alla tua dashboard su my.deepcharts.com.

2. Fai clic su **Data Feed** nel menu a sinistra.

[SCREENSHOT: La dashboard di my.deepcharts.com dopo l'accesso con il menu a sinistra visibile e la voce Data Feed evidenziata | dc-it-buy-data-feed-01.png]

3. Seleziona **Add data feed subscription**.

[SCREENSHOT: La sezione Data Feed con il pulsante Add data feed subscription evidenziato | dc-it-buy-data-feed-02.png]

4. Scegli il feed dati che desideri e procedi con l'ordine. Durante l'ordine scegli i prodotti specifici di dati di mercato — quali exchange ti servono (CME, COMEX e così via) e il livello dei dati (top of book oppure profondità del mercato). Scegli la profondità del mercato se prevedi di usare il DOM e gli strumenti di orderflow; il top of book è sufficiente per il semplice grafico a candele.

[SCREENSHOT: La pagina dell'ordine del feed dati con il feed selezionato e la lista dei prodotti di dati di mercato (exchange, opzioni top of book / profondità del mercato) visibile | dc-it-buy-data-feed-03.png]

5. Inserisci i dati della tua carta e completa il pagamento.

6. Dopo che il pagamento è andato a buon fine, torna alla sezione **Data Feed** della dashboard.

7. Firma il contratto per i dati di mercato. Il contratto ti chiede di:
   - Selezionare il tuo stato di sottoscrizione. La maggior parte dei trader individuali rientra in **Non-Professional** — gli exchange definiscono i criteri esatti, quindi leggi con attenzione le descrizioni sul modulo prima di scegliere.
   - Inserire le tue informazioni personali.

[SCREENSHOT: Il flusso di firma del contratto per i dati di mercato sulla dashboard con l'opzione dello stato di sottoscrizione Non-Professional visibile | dc-it-buy-data-feed-04.png]

8. Quando il contratto è completo, torna alla sezione **Data Feed**. Il **nome utente e la password** del tuo feed sono ora visualizzati lì — queste sono le credenziali che inserisci in Feed Settings di DeepCharts.

[SCREENSHOT: La sezione Data Feed con un abbonamento attivo e i campi nome utente e password visibili (valori oscurati) | dc-it-buy-data-feed-05.png]

### Se hai acquistato un feed Rithmic

Rithmic consegna le sue credenziali attraverso il proprio sistema, quindi il contratto per i dati di mercato di un abbonamento Rithmic si completa in **R Trader Pro** anziché sulla dashboard. Segui prima [[sign-market-data-agreement]], poi connettiti usando [[connect-rithmic]].

### Se invece hai acquistato il feed su dxfeed.com

Anche l'acquisto diretto da dxfeed.com funziona, ma devi selezionare **DeepChart** come piattaforma durante il checkout — altrimenti le credenziali non saranno compatibili con DeepCharts. Vedi [[connect-dxfeed]] per i passaggi di connessione.

## Verifica che abbia funzionato

Nella sezione **Data Feed** di my.deepcharts.com il tuo abbonamento risulta attivo e sono visibili un nome utente e una password. È tutto ciò di cui DeepCharts ha bisogno — il passo successivo è inserirli in Feed Settings, come descritto in [[connect-data-feed]].

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| Nessun nome utente/password mostrato dopo il pagamento | Il contratto per i dati di mercato non è firmato completamente — riapri la sezione Data Feed e completa ogni passaggio del contratto |
| Credenziali rifiutate durante la connessione | [[fix-username-password]] |
| Non sei sicuro che questo feed copra il tuo mercato o broker | [[compatibility-guide]] |
| Hai un conto presso una prop firm | Ottieni le credenziali dalla dashboard della prop firm — [[connect-rithmic-prop-firm]] o [[connect-dxfeed-prop-firm]] |

## Articoli correlati

- [[connect-data-feed]]
- [[connect-dxfeed]]
- [[connect-rithmic]]
- [[sign-market-data-agreement]]
- [[free-delayed-data-feed]]
- [[compatibility-guide]]