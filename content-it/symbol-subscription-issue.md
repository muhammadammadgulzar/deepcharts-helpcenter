---
title: "Correzione: problema di sottoscrizione dei simboli"
slug: "symbol-subscription-issue"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Risolvi un problema di sottoscrizione dei simboli verificando la connessione al feed dati e rimappando il mercato sulla connessione corretta in Symbol Manage."
keywords: ["problema sottoscrizione simboli", "simbolo non sottoscritto", "nessun dato per il simbolo", "gestione simboli", "symbol manager", "mercato non mappato", "nome connessione errato"]
source_hash: "9cddc54b91f37b4d"
ai_translated: true
source_hash: "9cddc54b91f37b4d"
---
DeepCharts segnala un problema di sottoscrizione dei simboli quando non riesce ad abbinare il simbolo che stai aprendo a una connessione al feed dati attiva. La soluzione si trova quasi sempre in **Symbol Manage** (Gestione simboli): il mercato manca dall'elenco oppure è assegnato al nome di connessione sbagliato.

## Sintomo

- DeepCharts mostra un problema di sottoscrizione dei simboli quando apri un grafico o un workspace.
- Un grafico non riesce a caricare i dati per un simbolo specifico anche se il tuo feed dati risulta connesso.

[SCREENSHOT: DeepCharts che mostra il messaggio di problema di sottoscrizione dei simboli all'apertura di un grafico, con il simbolo interessato visibile | dc-it-symbol-subscription-issue-01.png]

Da non confondere con:

- [[feed-connected-chart-not-moving]] — il grafico si apre ma il prezzo non si aggiorna mai (un problema di mappatura strettamente correlato).
- [[fix-data-access-suspended]] — una sospensione a livello di account dxFeed, non un problema di mappatura.

## Causa più probabile

Il mercato (exchange) non è presente nell'elenco di **Symbol Manage**, oppure è assegnato al nome di connessione sbagliato — quindi DeepCharts non sa quale feed debba fornire i dati di quel simbolo.

## Soluzione rapida

1. Verifica che il tuo feed dati sia connesso correttamente — cerca l'indicatore verde nella barra dei feed di DeepCharts.

[SCREENSHOT: Barra dei feed di DeepCharts con l'indicatore verde di connessione visibile accanto al nome del feed attivo | dc-it-symbol-subscription-issue-02.png]

2. Assicurati di avere davvero un feed dati che copra il mercato che vuoi analizzare. Consulta [[compatibility-guide]] per sapere quali feed coprono quali mercati, e [[buy-data-feed]] se ti serve ancora un abbonamento.
3. Rimuovi il segno di spunta accanto al tuo feed dati nell'elenco delle connessioni per metterlo offline mentre modifichi la mappatura. [CONFIRM: original article says "Connect the data feed and remove the check mark" — verify whether the feed must be connected or disconnected while remapping symbols]
4. Chiudi tutti i workspace.
5. Vai su **Options → Symbol Manage**.
6. Verifica che i mercati su cui fai trading siano elencati e che accanto a ciascuno compaia il nome di connessione corretto — il mock interattivo di Symbol Manage qui sotto mostra esattamente cosa cercare; fai clic sull'icona a forma di catena per cambiare ciclicamente il feed mappato di un mercato.

[WIDGET: symbol-manage-mock]

7. Se un mercato mostra la connessione sbagliata (o nessuna), fai clic con il tasto destro del mouse sul mercato e scegli la connessione corretta dal menu a discesa.

[SCREENSHOT: Finestra Symbol Manage con il menu a discesa aperto tramite clic destro su una riga di mercato, che mostra l'elenco delle connessioni disponibili da assegnare | dc-it-symbol-subscription-issue-03.png]

8. Fai clic su **Select** per salvare la modifica.
9. Chiudi la finestra **Symbol Manage**.
10. Riconnetti il tuo feed dati.
11. Apri di nuovo il grafico o il workspace.

## Se non ha funzionato

### Causa: l'exchange non è mai stato sottoscritto

Se l'elenco di Symbol Manage non contiene affatto il tuo mercato, devi prima sottoscrivere l'exchange e collegarlo al tuo feed. Segui [[symbol-manage]] per la procedura completa di sottoscrizione e mappatura.

### Causa: l'accordo per i dati di mercato non è stato firmato

Alcuni feed rifiutano le sottoscrizioni dei simboli finché l'accordo con l'exchange non è completato. Vedi [[sign-market-data-agreement]].

### Causa: il tuo abbonamento al feed non include quell'exchange

Un feed fornisce solo gli exchange inclusi nel tuo abbonamento dati. Controlla cosa copre il tuo piano in [[compatibility-guide]], oppure acquista il feed mancante tramite [[buy-data-feed]].

## Ancora bloccato

Genera un [[diagnostic-report]] — registra verso quale feed è instradato ciascun exchange — poi contatta il supporto tramite [[get-help]].

## Come prevenirlo

Configura una volta sola, e correttamente, i tuoi exchange e la mappatura dei feed usando [[symbol-manage]]. Dopo aver aggiunto un nuovo feed o conto, ricontrolla la mappatura prima di aprire i grafici.

## Articoli correlati

- [[symbol-manage]]
- [[feed-connected-chart-not-moving]]
- [[connect-data-feed]]
- [[sign-market-data-agreement]]
- [[compatibility-guide]]