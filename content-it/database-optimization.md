---
title: "Ottimizzazione del database"
slug: "database-optimization"
category: "Data & Database"
subcategory: ""
type: "howto"
difficulty: "advanced"
time: "15 min to complete"
description: "Esegui l'utility Migrate/Compress per ridurre il database locale di DeepCharts fino al 90% e velocizzare l'avvio e le prestazioni generali."
keywords: ["ottimizzazione database", "migrate compress", "comprimere database", "ridurre database", "database troppo grande", "avvio lento", "spazio su disco", "ottimizzare database", "prestazioni parallels mac"]
source_hash: "b25f8546c7f3d162"
ai_translated: true
source_hash: "b25f8546c7f3d162"
---
DeepCharts memorizza lo storico di tick e barre in un database locale che cresce a ogni sessione. Col tempo un database grande rallenta l'avvio e consuma spazio su disco. Alla fine di questa guida avrai eseguito l'utility **Migrate / Compress**, che può ridurre la dimensione del database fino al 90% e velocizzare sensibilmente la piattaforma.

I benefici sono maggiori dopo un uso prolungato e sulle macchine dove disco e memoria sono limitati — le macchine virtuali in particolare (per esempio, Parallels su Mac) ne traggono il massimo vantaggio. Oltre alla riduzione delle dimensioni ottieni tempi di avvio più rapidi, un uso ridotto dello storage e prestazioni generali della piattaforma migliorate.

## Prima di iniziare

- [[manage-feed-connections|Sai come disconnettere i tuoi feed dati]] — tutti i feed devono essere disconnessi prima dell'esecuzione dell'utility.
- [[templates-workspaces|Il layout del tuo workspace è salvato]] — chiuderai il workspace prima di iniziare.
- Scegli un momento tranquillo. Il processo può richiedere diversi minuti (di più per database molto grandi), quindi eseguilo dopo la tua sessione di trading o nel weekend — mai a metà sessione.
- Su un laptop, collega l'alimentatore prima di iniziare.

> **Attenzione:** Non spegnere né riavviare il computer mentre Migrate / Compress è in esecuzione. Interrompere il processo può corrompere il database. I laptop devono restare collegati alla corrente per tutta la durata.

## Passaggi

1. Chiudi il tuo workspace usando il menu a discesa del workspace nella parte superiore della barra principale (etichettato con il nome del workspace attuale, per esempio **Untitled**).

[SCREENSHOT: Il menu a discesa del workspace nella parte superiore della barra principale di DeepCharts espanso, che mostra l'opzione per chiudere il workspace attuale | dc-it-database-optimization-01.png]

2. Disconnetti tutti i feed dati usando il menu a discesa **Feed** in alto.

[SCREENSHOT: Il menu a discesa Feed nella parte superiore della barra principale espanso con l'opzione di disconnessione visibile | dc-it-database-optimization-02.png]

3. Vai su **Options → Database → Settings**.
4. Seleziona **Migrate / Compress**.

[SCREENSHOT: La finestra Database Settings con l'opzione Migrate / Compress evidenziata | dc-it-database-optimization-03.png]

5. Fai clic su **Yes** nella finestra di conferma. La finestra stessa avverte che l'operazione può richiedere del tempo e suggerisce di eseguirla dopo la sessione o nel weekend.
6. Fai clic su **OK**.
7. Attendi il completamento del processo. Aspettati diversi minuti; un database cresciuto per mesi può richiedere più tempo. Non chiudere la piattaforma né spegnere la macchina mentre è in esecuzione.

[SCREENSHOT: Lo stato di avanzamento di Migrate / Compress mentre l'utility è in esecuzione | dc-it-database-optimization-04.png]

## Verifica che abbia funzionato

1. L'utility termina senza errori e la piattaforma torna reattiva.
2. Per misurare il guadagno, confronta la dimensione della cartella del database prima e dopo: **Options → Settings → Various** mostra il percorso **Database Folder** — controlla la dimensione di quella cartella in Esplora file.
3. L'avvio dovrebbe essere sensibilmente più rapido al prossimo lancio di DeepCharts, soprattutto su una macchina virtuale.

> **Suggerimento:** Rendi Migrate / Compress parte della tua manutenzione di routine — per esempio, nei weekend dopo settimane con molti dati. Una compressione regolare mantiene il database abbastanza piccolo da rendere raramente necessari interventi più drastici.

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| Il processo è stato interrotto (mancanza di corrente, spegnimento forzato) e ora i grafici si comportano male | Considera il database potenzialmente corrotto — vedi [[database-problems]] |
| Un singolo simbolo mostra dati errati dopo la compressione | Elimina e riscarica i dati di quel simbolo — vedi [[delete-market-data]] e [[download-data]] |
| La piattaforma è ancora lenta dopo la compressione | Percorri la checklist delle prestazioni in [[data-delayed-lagging]] |

## Articoli correlati

- [[database-problems]]
- [[delete-market-data]]
- [[download-data]]
- [[data-delayed-lagging]]