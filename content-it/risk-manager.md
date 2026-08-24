---
title: "Responsabile del rischio"
slug: "risk-manager"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "15 min to complete"
description: "Imposta limiti automatici di perdita/profitto giornalieri, trailing drawdown e regole sugli orari di trading che bloccano il conto quando vengono violati."
keywords: ["responsabile del rischio", "money management", "limite perdita giornaliera", "limite profitto giornaliero", "trailing drawdown", "trailing stop", "lockout", "conto bloccato", "sbloccare conto", "limite orari di trading", "exclude not listed"]
source_hash: "369e7a3781da2d98"
ai_translated: true
source_hash: "369e7a3781da2d98"
---
Alla fine di questa guida avrai regole di rischio automatizzate su un conto — limiti giornalieri di perdita e profitto, un trailing drawdown opzionale, orari di trading e una lista di simboli consentiti — che mettono in pausa o chiudono le posizioni del conto nel momento in cui una regola viene violata, così la decisione di fermarti viene presa prima del tilt, non durante.

Il Risk Manager vive dentro la finestra Portfolio e funziona su qualsiasi conto connesso, incluso il conto SIM.

> **Attenzione:** Il Risk Manager opera lato client — gira dentro DeepCharts sul tuo PC. Se la piattaforma è chiusa, le regole non vengono applicate. Trattalo come uno strumento di disciplina, non come una garanzia.

## Prima di iniziare

- Un conto feed/broker connesso — [[connect-data-feed]]
- Familiarità con la finestra Portfolio — [[portfolio-wallet]]
- Un conto SIM su cui testare le regole prima di fidarti dal vivo — [[simulation-accounts]]

## Passaggi

### Apri le impostazioni di rischio

1. Fai clic su **Trading → Show Portfolio** nella barra principale.

2. Trova la scheda della connessione o del conto che vuoi proteggere. Le regole possono essere configurate a entrambi i livelli — per l'intera connessione o per singolo conto.

3. Fai clic sul pulsante **Settings** su quella scheda. Si aprono le impostazioni di money management.

[SCREENSHOT: La finestra Portfolio con una scheda di connessione visibile e il pulsante Settings evidenziato, pronto ad aprire le impostazioni di gestione del rischio | dc-it-risk-manager-01.png]

4. Attiva **Enable** — l'interruttore principale che attiva il money manager per questo ambito.

### Imposta i tuoi limiti giornalieri

5. Sotto **Daily Loss Limit**, attiva **Enable**, inserisci il **Value** e scegli l'**Unit** — denaro (**$**) o percentuale (**%**). Quando la perdita giornaliera supera questo valore, scatta l'azione configurata.

6. Sotto **Daily Profit Limit**, fai lo stesso. Facoltativamente attiva **Include Open Position** — con questa opzione abilitata, i trade aperti vengono chiusi nel momento in cui il limite viene raggiunto, contando il profitto non realizzato ai fini del limite.

[SCREENSHOT: La finestra delle impostazioni di rischio che mostra le sezioni Daily Loss Limit e Daily Profit Limit, ciascuna con interruttore Enable, campo Value e selettore di unità $/%, e l'opzione Include Open Position sul limite di profitto | dc-it-risk-manager-02.png]

> **Nota:** Perché un limite di profitto? Le regole delle prop firm spesso pongono un tetto ai guadagni giornalieri, e molti trader restituiscono nel pomeriggio una mattinata in verde. Un limite di profitto mette in cassaforte la giornata.

### Se vuoi un trailing drawdown

7. Sotto **Trailing Stop** (trailing drawdown giornaliero), attiva **Enable** e imposta **Value** e **Unit** ($ o %).

8. Scegli l'**Action** che scatta alla violazione:
   - **Daily Pause** — blocca il conto per il resto della sessione.
   - **Time Pause** — blocca il conto per il numero di minuti che selezioni.
   - **Flat** — chiude le posizioni senza bloccare il conto.

9. Facoltativamente abilita **Include Open Position** così la regola trailing sorveglia anche il PnL non realizzato — se i guadagni aperti ritracciano oltre il limite, l'azione scatta.

> **Nota:** Questa regola trailing è il motore proprio di DeepCharts. Non legge né replica la metrica ufficiale di trailing drawdown della tua prop firm — ogni firm calcola le proprie regole dal proprio lato. Usala come approssimazione indipendente di autodisciplina, non come monitor del numero della firm.

### Se vuoi limiti di portafoglio e per posizione

10. **Portfolio Loss Limit / Portfolio Profit Limit** — lo stesso schema enable/action/value/unit, applicato al risultato combinato di tutte le posizioni aperte insieme (per esempio ES + NQ come un unico numero).

11. **Position Loss Limit / Position Profit Limit** — soglie per singolo trade. Una posizione che supera il suo limite di perdita viene chiusa automaticamente, poi scatta l'azione configurata.

### Se vuoi limitare quando e cosa fai trading

12. Sotto **Limit Trading Hours**, imposta la finestra **Begin Time** e **End Time**. L'orario si basa sul **fuso orario EST**, indipendentemente dal fuso del tuo PC o del grafico.

13. Attiva **Symbol – Exclude Not Listed** per bloccare ogni simbolo che non hai esplicitamente consentito, poi usa **Add Symbol** per costruire la lista dei consentiti. Uso tipico: consentire solo i contratti Micro, così un clic sbagliato non potrà mai aprire una posizione su un Mini.

[SCREENSHOT: La finestra delle impostazioni di rischio scorsa fino a Limit Trading Hours con i campi orario Begin/End e l'interruttore Symbol – Exclude Not Listed con la lista Add Symbol sotto | dc-it-risk-manager-03.png]

### Se vuoi proteggere le regole da te stesso

14. Attiva **Inhibit Changes Until Next Session**. Qualsiasi modifica alle impostazioni di rischio avrà effetto solo a partire dal giorno di trading successivo — così non puoi alzarti da solo il limite di perdita nel bel mezzo di un tilt.

## Verifica che abbia funzionato

Testa su SIM prima di affidartici dal vivo: imposta un piccolo **Daily Loss Limit** su un conto SIM, piazza un trade in perdita oltre il limite e osserva la scheda del conto nella finestra Portfolio passare a **Lockout** con un timer per il conto alla rovescia. Quello stato è la prova osservabile che il motore delle regole è armato e sta applicando le regole.

[SCREENSHOT: Una scheda di conto del Portfolio che mostra lo stato Lockout con il timer del conto alla rovescia dopo l'attivazione di una regola di rischio | dc-it-risk-manager-04.png]

## Se qualcosa è andato storto

- **"Il mio conto è bloccato — sbloccatemi"** — un conto bloccato si sblocca automaticamente alle **18:00 EST** (il reset della sessione CME). L'unico modo per sbloccarlo prima è che il team di supporto DeepCharts lo faccia dal backend, il che richiede tempo — vedi [[get-help]].
- **"Ho cambiato i miei limiti ma non è cambiato nulla"** — **Inhibit Changes Until Next Session** è attivo; le modifiche si applicano al giorno di trading successivo, per progettazione.
- **"Non riesco a piazzare un trade su un certo simbolo"** — **Symbol – Exclude Not Listed** è abilitato e il simbolo non è nella lista dei consentiti, oppure sei fuori dagli orari di trading configurati (ricorda: EST, non l'ora locale).
- **"Perché ha chiuso il mio trade in guadagno?"** — un limite di profitto con **Include Open Position** conta il PnL non realizzato e chiude allo scatto.
- **"Il Risk Manager ieri non mi ha fermato"** — DeepCharts era in esecuzione? È lato client: piattaforma chiusa significa nessuna applicazione delle regole. Verifica anche che la regola fosse **Enabled** e configurata al livello giusto (connessione vs conto).
- **I reset sembrano avvenire a un'ora strana** — tutti i reset e le regole sugli orari di trading seguono l'EST (fuso orario CME). Per i trader di Europa e Asia è la fonte di confusione più comune.

## Articoli correlati

- [[portfolio-wallet]]
- [[trading-panel-reference]]
- [[simulation-accounts]]
- [[oco-strategies]]
- [[get-help]]