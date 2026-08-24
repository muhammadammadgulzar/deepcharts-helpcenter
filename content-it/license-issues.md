---
title: "Risolvere: problemi di licenza e attivazione"
slug: "license-issues"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Risolvi gli errori Invalid License e di convalida della licenza in DeepCharts — credenziali, abbonamenti scaduti, più dispositivi e blocchi nel file hosts."
keywords: ["licenza non valida", "chiave di licenza non funzionante", "convalida della licenza", "attivazione fallita", "codice licenza", "impossibile attivare", "errore di licenza", "abbonamento scaduto"]
source_hash: "4fb67f80075dd42e"
ai_translated: true
source_hash: "4fb67f80075dd42e"
---
DeepCharts si attiva con due valori: l'email registrata su my.deepcharts.com e la chiave di licenza alfanumerica mostrata in quell'account. Quando l'attivazione fallisce — un messaggio "Invalid License", un login rifiutato o errori di convalida durante una sessione — la causa è quasi sempre una di queste quattro: un refuso nelle credenziali, un abbonamento scaduto, la piattaforma in esecuzione su più di un dispositivo o (raramente) un blocco a livello di sistema della connessione al server delle licenze. Esaminale in quest'ordine.

> **Nota:** Se hai acquistato la licenza tramite una prop firm, sia l'installer sia i dettagli della licenza provengono dalla dashboard della prop firm, non da my.deepcharts.com. Assicurati di usare le credenziali della fonte giusta.

## Sintomo

- La finestra **License Key** rifiuta la tua email e la tua chiave di licenza all'avvio, in genere con un errore "Invalid License".
- DeepCharts richiede di nuovo la licenza dopo che in precedenza funzionava.
- Compaiono errori di convalida della licenza mentre la piattaforma è in esecuzione.

[SCREENSHOT: Finestra di attivazione License Key di DeepCharts con i campi E-mail e License visibili e uno stato di errore Invalid License mostrato | dc-it-license-issues-01.png]

## Causa più probabile

Spazi indesiderati nelle credenziali incollate. Copiando e incollando l'email o la chiave di licenza si trascina spesso uno spazio iniziale o finale, e il controllo della licenza lo rifiuta.

## Soluzione rapida

1. Accedi al tuo account my.deepcharts.com (o alla dashboard della tua prop firm) e individua la tua email registrata esatta e la chiave di licenza.

[SCREENSHOT: Dashboard dell'account my.deepcharts.com con la sezione della chiave di licenza visibile, chiave parzialmente sfocata | dc-it-license-issues-02.png]

2. Copia ciascun valore e incollalo nella finestra **License Key**. Copia e incolla anziché digitare a mano — ma controlla che non sia stato trascinato alcuno spazio all'inizio o alla fine di nessuno dei due campi.
3. Fai clic su **Login** e attendi la verifica della chiave.

> **Suggerimento:** Se incollare continua a fallire, incolla prima il valore in un editor di testo semplice, elimina eventuali spazi intorno, poi copialo di nuovo.

## Se non ha funzionato

### Causa: il tuo abbonamento è scaduto

La convalida della licenza fallisce quando l'abbonamento a cui è collegata non è più attivo.

1. Accedi a my.deepcharts.com e controlla che il tuo abbonamento a DeepCharts sia ancora valido.
2. Se è scaduto, rinnovalo e poi attiva di nuovo. Vedi [[manage-subscriptions]].

### Causa: DeepCharts è in esecuzione su più di un dispositivo

La piattaforma dovrebbe girare su un solo dispositivo alla volta. Eseguirla contemporaneamente su più macchine con la stessa licenza può causare problemi di convalida della licenza.

1. Chiudi DeepCharts su ogni altro computer dove potrebbe essere ancora in esecuzione (comprese le macchine lasciate accese altrove).
2. Attiva di nuovo sulla macchina che vuoi usare.

Ti trasferisci definitivamente su una nuova macchina? Segui [[move-to-new-computer]].

### Causa: il file hosts blocca il server delle licenze

Il file hosts di Windows (`C:\Windows\System32\drivers\etc\hosts`) associa nomi di dominio a indirizzi IP. Una voce aggiunta da software di sicurezza, da un ad blocker o da una precedente modifica manuale può impedire a DeepCharts di raggiungere il server delle licenze, per cui l'attivazione fallisce anche con credenziali corrette.

> **Attenzione:** Il file hosts è un file di sistema — una modifica errata può compromettere la connettività di altre applicazioni. Consulta la documentazione sulla modifica del file hosts per la tua versione di Windows prima di cambiarlo, oppure chiedi al supporto di guidarti.

1. Apri il file hosts e cerca qualsiasi voce che faccia riferimento a un dominio DeepCharts.
2. Rimuovi o commenta tali voci, salva il file e prova ad attivare di nuovo.

## Ancora bloccato

Genera un [[diagnostic-report]] — cattura informazioni sulla connettività di rete che aiutano il supporto a capire se il server delle licenze è raggiungibile dalla tua macchina — poi contatta il supporto tramite [[get-help]] con il testo esatto dell'errore e uno screenshot della finestra License Key.

## Come prevenirlo

- Attiva seguendo [[install-deepcharts]], che ti guida passo passo nella finestra della licenza.
- Mantieni DeepCharts installato e in esecuzione su una sola macchina alla volta; usa [[move-to-new-computer]] quando cambi hardware.
- Tieni d'occhio la data di rinnovo del tuo abbonamento — vedi [[manage-subscriptions]].

## Articoli correlati

- [[install-deepcharts]]
- [[manage-subscriptions]]
- [[move-to-new-computer]]
- [[diagnostic-report]]
- [[get-help]]