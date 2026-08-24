---
title: "Bar POC"
slug: "bar-poc"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Segna il Point of Control — il prezzo con più volume — di ogni barra e può estenderlo verso destra come livello di riferimento attivo finché il prezzo non lo riattraversa."
keywords: ["bar POC", "point of control", "POC per barra", "POC esteso", "naked POC", "estensione POC", "point of control della barra", "indicatore poc"]
source_hash: "9ba884252370044c"
ai_translated: true
source_hash: "9ba884252370044c"
---
L'indicatore Bar POC individua il Point of Control (POC) di ogni barra — il singolo prezzo dove è stato scambiato il maggior volume all'interno di quella barra — e lo evidenzia direttamente sulle tue candele. Può anche estendere ogni POC verso destra come linea orizzontale, trasformando il prezzo più trafficato di una barra passata in un livello di riferimento attivo che resta sul grafico finché il prezzo non vi ritorna.

Dove un profilo di sessione ti dà un POC al giorno, Bar POC te ne dà uno per barra, il che lo rende un modo rapido per vedere esattamente dove è stato fatto il grosso degli scambi all'interno di ogni candela.

## Che cos'è

Bar POC è un indicatore di livelli di orderflow. Per ogni barra individua il livello di prezzo con il volume scambiato più alto e lo segna con un piccolo rettangolo di evidenziazione; opzionalmente disegna una linea di estensione da quel POC verso il bordo destro del grafico. Risponde alla domanda "a quale prezzo è passato di mano la maggior parte del volume di questa barra — e il mercato ha testato quel prezzo da allora?"

Bar POC applica la stessa logica di un profilo del volume, una barra alla volta — passa il mouse sulle righe nel profilo interattivo qui sotto per vedere come il prezzo con più volume (la riga POC magenta) si distingue dalle altre:

[WIDGET: volume-profile-lab]

[SCREENSHOT: Finestra del grafico con Bar POC applicato — candele con piccoli rettangoli di evidenziazione sul prezzo a maggior volume di ogni barra, e due o tre linee POC estese che corrono fino al bordo destro del grafico, una delle quali mostra un'etichetta di durata | dc-it-bar-poc-01.png]

## Quando usarlo

- Tradi i retest: i POC intatti (estesi) sono magneti e livelli di reazione naturali perché lì è stato transato volume reale.
- Vuoi vedere se gli scambi di una barra sono avvenuti vicino al suo massimo, al centro o al minimo — una lettura rapida di accettazione contro rifiuto all'interno di ogni candela.
- Usi la colorazione dell'aggressività per vedere se hanno dominato compratori o venditori nell'area del POC di una barra chiave.
- Vuoi livelli intraday mantenuti automaticamente senza disegnare linee a mano.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **Bar POC** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** accanto all'indicatore.
4. Imposta **Days to Load** per coprire la storia da cui tradi — più giorni significano più POC storici ed estensioni.
5. Imposta **Filter Mode** su **Auto** in modo che l'algoritmo interno della piattaforma evidenzi solo i POC più rilevanti anziché segnare ogni barra.
6. Sotto **Extended POC**, attiva **Enable** in modo che i POC non rivisitati si proiettino verso destra come livelli, poi applica.

[SCREENSHOT: Finestra delle impostazioni di Bar POC che mostra la sezione General con Days to Load, Input Data, il menu a discesa Filter Mode aperto su Auto, i campi Auto Std. Dev. e Manual Min. Vol. e i gruppi Plot Settings (HighLight, Extended POC, Duration on Extension) sotto | dc-it-bar-poc-02.png]

## Come leggerlo

- **Posizione del POC all'interno della barra.** Un POC vicino alla parte alta di una barra rialzista significa che il mercato ha accettato prezzi più alti e ha scambiato lì; un POC lasciato in fondo a una lunga barra rialzista significa che il movimento sopra di esso è avvenuto con relativamente poco volume e può essere fragile.
- **Le linee di estensione sono lavoro non finito.** Un POC esteso è un prezzo dove è stato scambiato volume pesante ma che il mercato non ha rivisitato. Questi livelli agiscono spesso da supporto o resistenza al primo retest, quindi sono posizioni naturali per ingressi, target e collocazione degli stop.
- **Colore dell'aggressività.** L'impostazione **Bid/Ask Color** colora il rettangolo di evidenziazione in base all'aggressività in vendita/acquisto nell'area del POC, così vedi a colpo d'occhio quale lato stava colpendo il mercato al prezzo più trafficato della barra.
- **Il filtro conta.** Con **Filter Mode** impostato su **None** ogni barra riceve un POC e il grafico diventa rumore. Il filtro automatico o manuale riduce la visualizzazione ai POC sostenuti da volume significativo.

## Riferimento delle impostazioni

Raggruppate come nella finestra delle impostazioni.

### General Settings

| Impostazione | Che cosa fa |
|---|---|
| **Days to Load** | Definisce il numero di giorni storici caricati per l'indicatore. |
| **Input Data** | Seleziona i dati di input usati dal calcolo. Vedi [[different-types-of-input]] per i tipi disponibili. |
| **Min/Max Filter** | Filtra gli ordini per dimensione in contratti, così il calcolo del POC può ignorare gli scambi fuori dall'intervallo di dimensione scelto. |
| **Filter Mode** | **None** — nessun filtro viene applicato. **Manual** — applica un filtro manuale definito dall'utente. **Auto** — applica un filtro automatico che usa gli algoritmi interni della piattaforma per evidenziare i POC più rilevanti. |
| **Auto Std. Dev.** | Definisce la deviazione standard usata dal filtro automatico. Valori più alti mantengono solo i POC più eccezionali. |
| **Manual Min. Vol.** | Definisce il volume minimo richiesto per un POC quando si usa il filtro manuale. |

> **Nota:** Queste impostazioni possono essere configurate separatamente per le Regular Trading Hours (RTH), così puoi filtrare la sessione regolare in modo diverso dalla sessione notturna.

### Plot Settings — HighLight

| Impostazione | Che cosa fa |
|---|---|
| **Show Rectangle** | Attiva/disattiva il rettangolo che evidenzia il prezzo del POC all'interno della barra. |
| **Line Width** | Spessore del bordo del rettangolo. |
| **Show Background** | Attiva/disattiva il riempimento di sfondo del rettangolo. |
| **Back Opacity** | Trasparenza del riempimento di sfondo. |
| **Bid/Ask Color** | Colora il rettangolo in base all'aggressività in vendita/acquisto nell'area del POC. |

### Plot Settings — Extended POC

| Impostazione | Che cosa fa |
|---|---|
| **Enable** | Estende una linea dal POC verso il bordo destro del grafico finché il prezzo non interagisce con essa. |
| **Line Width** | Spessore della linea di estensione. |
| **Max Bar Extension** | Numero massimo di barre per cui un'estensione può proseguire. Imposta **0** per estendere fino alla fine del grafico. |
| **Reset Start Day** | Quando attivo, limita le estensioni al solo giorno corrente. |
| **Remove Line On Shadow Triggered** | Termina l'estensione la prima volta che il prezzo tocca il livello (anche con un'ombra) invece di attendere un breakout basato sulla chiusura. |
| **Tick Margin Breakout** | Numero minimo di tick di cui il prezzo deve attraversare il livello per confermare un breakout e rimuovere la linea. |

### Plot Settings — Duration on Extension

| Impostazione | Che cosa fa |
|---|---|
| **Enable** | Mostra la durata (giorni, ore, minuti) dell'estensione del POC accanto alla linea. |
| **Text Size** | Dimensione del testo della durata. |
| **Text Color** | Colore del testo della durata. |

## Suggerimenti ed errori comuni

- **Parti con il filtro Auto.** Regolare manualmente **Manual Min. Vol.** per ogni strumento è soggetto a errori; il filtro automatico si adatta tramite la sua soglia di deviazione standard ed è la via più rapida per un grafico pulito.
- **Le estensioni vecchie sono un contesto più forte di quelle fresche.** Un POC sopravvissuto molte ore senza essere testato (visibile con **Duration on Extension** attivo) pesa più di uno stampato tre barre fa.
- **Scegli deliberatamente la tua regola di tocco.** **Remove Line On Shadow Triggered** considera una singola ombra come un test; lasciarlo disattivato richiede un breakout autentico confermato da **Tick Margin Breakout**. Gli scalper di solito vogliono la regola dell'ombra, i trader di livelli quella del breakout.
- **Non confondere Bar POC con il POC di sessione.** Il Point of Control dell'intera sessione proviene da uno strumento di profilo come [[deep-profile]]; Bar POC lavora alla risoluzione della singola candela. Vedi [[understanding-volume-profile]] per come i POC si inseriscono nel quadro più ampio dell'asta.

## Articoli correlati

- [[understanding-volume-profile]]
- [[dynamic-poc]]
- [[deep-profile]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]