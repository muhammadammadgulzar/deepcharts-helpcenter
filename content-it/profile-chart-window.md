---
title: "Finestra Profile Chart (profili TPO e Volume)"
slug: "profile-chart-window"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "11 min read"
description: "La finestra Profile Chart dedicata in DeepCharts: lettere TPO, profili volume/delta giornalieri e settimanali, raggruppamento dei tick e il pannello Indicators che c'è dietro."
keywords: ["profile chart", "grafico TPO", "finestra market profile", "finestra volume profile", "lettere tpo", "raggruppamento tick", "D-VP", "W-VP", "profilo composito", "profile chart vuoto"]
source_hash: "90b30194bd62bc42"
ai_translated: true
source_hash: "90b30194bd62bc42"
---
Il Profile Chart è una finestra dedicata all'analisi a profili: profili a lettere TPO (Market Profile), profili di volume giornalieri e settimanali, profili delta e un profilo composito — impilabili come overlay su un unico asse temporale. Condivide con il grafico dei prezzi la toolbar, gli strumenti di disegno, il menu del tasto destro e il pannello di trading, ma il suo intero motore di rendering è costruito intorno ai profili invece che alle candele.

Questo articolo copre la finestra: come aprirla, i controlli dell'intestazione, la riga di interruttori dei tipi di profilo, il pannello Indicators che la governa davvero, e cosa fare quando il grafico resta vuoto. Per la teoria dei profili, parti da [[understanding-volume-profile]]; per l'indicatore TPO da aggiungere a un normale grafico dei prezzi, vedi [[market-profile-tpo]].

## Che cos'è

Invece di chiedere "dove è andato il prezzo nel tempo" (un grafico a candele), un grafico a profili chiede "quanto tempo e quanto volume ha speso il mercato a ciascun prezzo". Ogni sessione viene renderizzata come una distribuzione: le lettere TPO segnano quali periodi temporali hanno toccato ciascun prezzo, e le barre del volume profile mostrano quanti contratti sono stati scambiati lì. La finestra può sovrapporre diversi tipi di profilo fianco a fianco per ogni sessione — per esempio lettere TPO più un profilo di volume giornaliero — e aggiunge profili settimanali e compositi in aree dedicate sul bordo destro.

Per prendere confidenza con il lato volume, prova il profilo interattivo qui sotto — trascina la Value Area % e osserva le linee VAH/VAL e il POC magenta rispondere, oppure passa il mouse sulle righe per il volume per livello.

[WIDGET: volume-profile-lab]

## Quando usarla

- Leggere la struttura della sessione: aree di valore, point of control, single print e unfinished business ([[understanding-auction-theory]]).
- Confrontare a colpo d'occhio il valore in formazione di oggi con le sessioni precedenti.
- Separare l'attività RTH ed ETH — la riga di interruttori ha varianti RTH/ETH dedicate sia dei profili TPO sia di quelli di volume.
- Allargare lo sguardo ai profili settimanali e compositi per i livelli di timeframe superiore.
- Operare direttamente sui livelli del profilo — la finestra aggancia lo stesso pannello di trading di un grafico dei prezzi.

## Avvio rapido

1. Nella barra principale, apri **New → Profile Chart**.
2. Scegli il tuo strumento in **Select Instrument** e conferma. Appaiono solo gli exchange sottoscritti in [[symbol-manage]].
3. Attendi mentre la finestra mostra **Building chart** (o **Downloading data from connection**). La barra principale mostra un badge **LDT:** quando i dati vengono caricati dal disco, oppure **DWT:** quando vengono scaricati dal server del feed — entrambi sono normali stati di caricamento.
4. Il grafico si renderizza con i profili TPO per sessione. Attiva altri tipi di profilo dalla riga di interruttori in basso secondo necessità.

[SCREENSHOT: Finestra Profile Chart appena aperta su NQ che mostra lo spinner Building chart con barra di avanzamento, e il badge LDT della barra principale visibile in alto | dc-it-profile-chart-window-01.png]

## Anatomia della finestra

[SCREENSHOT: Profile Chart completamente renderizzato su NQ in modalità TPO che mostra l'intestazione con il menu a discesa del simbolo, il menu a discesa 30D - BT e il menu a discesa del raggruppamento tick, le icone della toolbar superiore, la barra di disegno a sinistra, i profili a lettere TPO per sessione con linee POC magenta e linee tratteggiate dell'area di valore, e la riga di interruttori dei tipi di profilo in basso | dc-it-profile-chart-window-02.png]

- **Controlli dell'intestazione** — il menu a discesa del simbolo (per esempio NQ-202609), un menu a discesa della storia del tipo **30D - BT** (30 giorni di storia caricati; BT sta per Based on Tick, la stessa famiglia di etichette dei grafici dei prezzi — l'elenco completo delle opzioni di questo menu sul Profile Chart è [CONFIRM: options offered by the Profile Chart history dropdown]), il menu a discesa del raggruppamento tick (**N T** — vedi sotto), un'icona apri-in-nuova-finestra e un'icona più verde, poi i controlli standard collega/riduci/massimizza/chiudi.
- **Toolbar superiore** — la stessa famiglia del grafico dei prezzi: hamburger, collega-grafici, l'icona degli indicatori, ingranaggio, **$** (trading) e fotocamera.
- **Barra di disegno a sinistra** — puntatore, mano, aggiungi, mirino, zoom, occhio, gomma, linea orizzontale/verticale, ray, rettangolo, ellisse, testo e calcolatore di posizione; vedi [[drawing-tools]].
- **Riquadro dati in alto a sinistra** — O H L C più **%V** (variazione percentuale rispetto al giorno precedente), **ΣV** e **ΔV** per la sessione sotto il cursore. ΣV e ΔV si leggono come volume totale e delta della sessione, ma le loro definizioni esatte sono [CONFIRM: precise ΣV and ΔV definitions in the readout].
- **Riga di interruttori in basso** — i tipi di profilo (sezione successiva) con un interruttore **Trading panel** all'estremità destra.

### Raggruppamento dei tick (il menu a discesa N T)

Il menu a discesa **N T** imposta il raggruppamento dei tick, con preset come **1 T**, **20 T** e **100 T** più una finestra **Set Ticks Grouping** (campo numerico con i pulsanti **Cancel**, **Apply** e **Set**) per valori personalizzati. Valori più grandi raggruppano più tick per riga di profilo, il che sembra controllare l'altezza delle righe — la semantica esatta non è confermata. Cambiare il valore ricostruisce il grafico; uno spinner **Building chart** nel frattempo è normale.

[SCREENSHOT: Il menu a discesa del raggruppamento tick aperto con i preset 1 T, 20 T e 100 T, e la finestra Set Ticks Grouping aperta con il campo numerico e i pulsanti Cancel, Apply e Set | dc-it-profile-chart-window-03.png]

## Tipi di profilo: la riga di interruttori in basso

La riga lungo il bordo inferiore elenca ogni tipo di profilo: **TPO | Dly Vol. Profile | Dly Vol. Profile (ETH) | TPO (ETH) | TPO (RTH) | Dly Vol. Profile (RTH) | Dly Delta Profile | Wkly Vol. Profile | Wkly Delta Profile | Comp. Vol. Profile**. Quando la finestra è stretta le etichette si abbreviano in **TPO | D-VP | D-VP (ETH) | TPO (ETH) | TPO (RTH) | D-VP (RTH) | D-DP | W-VP | W-DP | C-VP** — la stessa famiglia di abbreviazioni dei quick template del grafico ([[quick-chart-templates]]): D-VP = profilo di volume giornaliero, D-DP = profilo delta giornaliero, W-VP/W-DP = profilo di volume/delta settimanale, C-VP = profilo composito di tutti i dati caricati.

> **Suggerimento:** La riga sembra fatta di radio button ma è multi-selezione. Ogni tipo attivato aggiunge un overlay — lettere TPO più un profilo di volume giornaliero più una variante RTH possono disegnarsi tutti insieme, fianco a fianco per sessione.

Due regole di posizionamento:

- **I tipi giornalieri** (TPO e profili Dly, incluse le varianti ETH/RTH) si disegnano per sessione all'interno dell'area principale del grafico.
- **I tipi settimanali e compositi** ricevono ciascuno una propria area verticale a tutta altezza sul bordo destro del grafico, con etichetta sull'asse **W-VP**, **W-DP** o **C-VP**, con un istogramma ciascuna.

[SCREENSHOT: Profile Chart con più interruttori attivi contemporaneamente — lettere TPO più barre del volume profile giornaliero per sessione nell'area principale, e tre aree verticali etichettate W-VP, W-DP e C-VP sul bordo destro, ciascuna con un istogramma a tutta altezza | dc-it-profile-chart-window-04.png]

## Il pannello Indicators

L'icona degli indicatori nella toolbar apre il pannello **Indicators** — il vero stato dietro la riga di interruttori. Ogni tipo di profilo è un'istanza di indicatore con un nome sistematico: **DT:** = lettere TPO, **DP: Vol** = volume profile, **DP: Delta** = profilo delta; **Multiple 1 D** = uno al giorno, **Multiple 1 W** = settimanale, **Composite** = l'intero intervallo caricato. Le istanze vivono in **Chart Area 1** (l'area principale) o in **Vertical Chart Area 1/2/3** (le colonne sul bordo destro). Ogni riga ha un'icona cestino (elimina), un'icona occhio (mostra/nascondi, applicata in tempo reale) e un'icona ingranaggio (impostazioni), più un pulsante verde **Indicators**.

La riga di interruttori e questo pannello possono brevemente perdere sincronia dopo attivazioni rapide — nel dubbio, fidati del pannello Indicators; riflette ciò che è davvero disegnato. Se sia possibile aggiungere ulteriori istanze di profilo oltre ai preset degli interruttori tramite il pulsante verde è [CONFIRM: adding extra DT/DP instances through the Indicators button].

[SCREENSHOT: Pannello Indicators aperto sopra il Profile Chart che elenca Chart Area 1 con Price e diverse istanze DT e DP: Vol, più le Vertical Chart Area 1-3 ciascuna con un'istanza settimanale o composita, con le icone cestino, occhio e ingranaggio visibili per riga | dc-it-profile-chart-window-05.png]

## Come leggerlo

In modalità TPO ogni sessione si disegna come un profilo a lettere: ogni lettera segna un periodo temporale della sessione, quindi una riga di prezzo con molte lettere ha mantenuto interesse negli scambi per molti periodi, mentre lettere singole agli estremi segnano escursioni brevi. Una linea magenta segna il POC di ogni sessione (il livello più scambiato/più visitato) e linee tratteggiate segnano i confini dell'area di valore, seguendo le convenzioni standard del Market Profile — vedi [[market-profile-tpo]] per il kit interpretativo completo.

Diversi dettagli visivi di questa finestra non sono ancora documentati e il loro significato esatto può variare: i gruppi di colore delle lettere, le righe sottolineate, e le barre verticali verdi, viola e gialle ai lati di ogni sessione. Lo stesso vale per i colori a mappa di calore (giallo/arancione/rosso/verde/magenta) sulle barre del volume profile. Descrivi i livelli in base alla loro struttura (POC, area di valore, single) invece di affidarti a questi colori finché non sono confermati. [CONFIRM: legend for TPO letter colors, underlined rows, per-session vertical range bars, and volume-profile heat colors]

Premi play sul profilo interattivo qui sotto per guardare le lettere di una sessione impilarsi periodo dopo periodo — passa il mouse su qualsiasi riga per vedere quali periodi hanno toccato quel prezzo, e osserva la formazione del POC e dell'area di valore.

[WIDGET: tpo-lab]

## Fare trading dal Profile Chart

L'interruttore **Trading panel** (estremità destra della riga in basso) aggancia lo stesso pannello di trading laterale del grafico dei prezzi: simbolo, quantità aperta e riquadri P/L, **Qty**, **Broker/Account**, la griglia di pulsanti **MKT | BID-ASK | LMT | STP | STP LMT**, **Cancel + Breakeven**, **Cancel and Flat**, il blocco strategia OCO con i radio **Server/Client** e **Link pending orders**. L'icona **$** della toolbar diventa verde quando il trading è abilitato.

Il menu del tasto destro è la stessa famiglia del grafico dei prezzi — modalità puntatore/mirino/mano/zoom, **Drawing Objects** e **Drawing Utilities**, **Trading Enabled** (Ctrl Alt T), **Show Trading Panel** (Ctrl Alt P), **Show Historical Orders**, **Trading Settings**, **Rebuild Chart**, **Template**, **Indicators** (Ctrl I) e **Properties** (Ctrl P) — più una voce extra in fondo per l'indicatore sotto il cursore (per esempio "DT: Multiple 1 D (2)"), una scorciatoia verso le impostazioni di quell'istanza.

Vedi [[trading-from-chart]] e [[trading-panel-reference]] per il flusso di trading completo — tutto quello che c'è lì vale anche qui.

[SCREENSHOT: Profile Chart con il pannello di trading agganciato a destra che mostra il campo Qty, la griglia MKT/BID-ASK/LMT/STP/STP LMT, i pulsanti Breakeven e Cancel and Flat e il blocco OCO, con l'icona $ della toolbar verde | dc-it-profile-chart-window-06.png]

## Riferimento impostazioni

| Controllo | Dove | Cosa fa |
|---|---|---|
| Menu a discesa del simbolo | Intestazione | Cambia strumento o scadenza contrattuale; il grafico riscarica i dati (badge **DWT:**). |
| Menu a discesa della storia (es. **30D - BT**) | Intestazione | Quanta storia viene caricata (30D = 30 giorni) e la sua base (BT = Based on Tick). Elenco completo delle opzioni non confermato. |
| Menu a discesa **N T** | Intestazione | Preset di raggruppamento tick più **Set Ticks Grouping** per valori personalizzati; ricostruisce il grafico. |
| Interruttori dei tipi di profilo | Riga in basso | Multi-selezione; ognuno aggiunge/rimuove un overlay di profilo. |
| Interruttore **Trading panel** | Riga in basso, estremità destra | Mostra/nasconde il pannello di trading agganciato. |
| **Indicators** (Ctrl I) | Icona toolbar / tasto destro | Il pannello che gestisce ogni istanza di profilo (cestino/occhio/ingranaggio per riga). |
| **Properties** (Ctrl P) | Tasto destro | Finestra delle proprietà, come sul grafico dei prezzi. |
| **Rebuild Chart** | Tasto destro | Svuota e ridisegna il grafico — primo rimedio leggero per i difetti di rendering. |
| **Template** | Tasto destro | Salva o carica la configurazione della finestra ([[templates-workspaces]]). |
| Ingranaggio per indicatore | Pannello Indicators | Apre la finestra di impostazioni di quella specifica istanza di profilo. |

## Risoluzione dei problemi

- **Il grafico è vuoto (solo una linea del prezzo tratteggiata).** Ogni tipo di profilo è disattivato. Attivane uno nella riga in basso (parti da **TPO**), oppure apri il pannello Indicators e controlla se le istanze DT/DP sono state nascoste (occhio) o eliminate (cestino). Se ancora non disegna, tasto destro → **Rebuild Chart**.
- **Bloccato su Building chart / Downloading data.** La finestra scarica la storia prima del rendering. **LDT:** nella barra principale significa che sta caricando dati dal disco; **DWT:** che sta scaricando dal server del feed. Finestre di storia grandi e dati tick richiedono tempo. Se non finisce mai mentre gli altri grafici caricano bene, vedi [[data-delayed-lagging]] e valuta di riscaricare i dati ([[download-data]]).
- **Righe troppo sottili, lettere illeggibili.** Aumenta il raggruppamento dei tick (menu a discesa **N T** — prova 20 T o 100 T, o un valore personalizzato tramite **Set Ticks Grouping**). Il grafico si ricostruisce con righe più alte.
- **Gli interruttori sembrano spenti ma gli overlay disegnano ancora.** Una breve desincronizzazione tra la riga di interruttori e il pannello Indicators — apri il pannello Indicators e gestisci le istanze direttamente da lì.
- **Selettore degli strumenti vuoto.** Non c'è nulla di sottoscritto in [[symbol-manage]].

## Suggerimenti ed errori comuni

- Non trattare la riga di interruttori come una scelta esclusiva — sovrapporre il TPO a un profilo di volume giornaliero per sessione è uno dei principali punti di forza della finestra.
- Mantieni ragionevole il numero di overlay attivi; cinque o più per sessione diventano visivamente densi in fretta. Usa le icone occhio del pannello Indicators per parcheggiare gli overlay invece di eliminarli.
- Le varianti RTH/ETH sono overlay separati, non filtri sul TPO principale — attivare **TPO (RTH)** aggiunge un profilo solo RTH accanto a quello dell'intera sessione.
- Le scadenze contrattuali contano: il menu a discesa del simbolo carica anche contratti più vecchi, e ogni cambio riscarica i dati. Vedi [[symbol-rollover]] se il tuo simbolo sembra bloccato su un vecchio contratto.
- La finestra supporta l'intera barra di disegno — i livelli del profilo che segni con linee orizzontali si gestiscono come qualsiasi disegno sul grafico ([[drawing-tools]]).

## Articoli correlati

- [[market-profile-tpo]]
- [[understanding-volume-profile]]
- [[understanding-auction-theory]]
- [[deep-profile]]
- [[quick-chart-templates]]
- [[trading-panel-reference]]