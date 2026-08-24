---
title: "Volume"
slug: "volume"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "beginner"
time: "6 min read"
description: "Istogramma del volume totale per barra con sfondo colorato in base al delta, calcolo basato sui secondi, marker di assorbimento, avvisi e una linea del volume medio."
keywords: ["volume", "indicatore volume", "istogramma del volume", "barre di volume", "sfondo delta", "assorbimento del volume", "volume medio", "marker volume", "avviso volume"]
source_hash: "f39d8b247202a62c"
ai_translated: true
source_hash: "f39d8b247202a62c"
---
L'indicatore Volume mostra il volume totale scambiato in ogni barra come istogramma sotto il tuo grafico. In DeepCharts va ben oltre un semplice grafico del volume: lo sfondo dell'istogramma può essere colorato in base al delta, i dati possono essere filtrati per dimensione degli scambi, i marker grafici possono segnalare le barre che soddisfano le condizioni di volume e delta che definisci, e il calcolo può basarsi sui secondi per rivelare le accelerazioni all'interno della barra.

Se sei nuovo all'orderflow, questo è il primo indicatore da imparare — quasi tutti gli altri strumenti di volume e delta si basano sugli stessi concetti.

## Che cos'è

Il Volume è un misuratore di attività per barra. Ogni barra dell'istogramma risponde alla domanda "quanto è stato scambiato qui?", e la colorazione opzionale basata sul delta risponde a "chi è stato più aggressivo — i compratori o i venditori?" Con i marker abilitati risponde anche a "uno sforzo insolitamente grande è stato assorbito?"

[SCREENSHOT: Finestra del grafico con l'indicatore Volume in un pannello sotto le candele — barre dell'istogramma visibili con uno sfondo colorato in base al delta e una barra segnalata da un marker di assorbimento | dc-it-volume-01.png]

## Quando usarlo

- Vuoi una conferma dietro i movimenti di prezzo: un volume alto su un breakout segnala convinzione, un volume basso segnala debolezza.
- Vai a caccia di assorbimento — spinte forti di volume e delta che non riescono a muovere il prezzo, spesso precursori di inversioni.
- Fai trading su grafici range o tick e vuoi il volume basato sui secondi per evidenziare accelerazioni e decelerazioni nella velocità degli scambi.
- Vuoi una lettura a colpo d'occhio della pressione in acquisto contro quella in vendita tramite le modalità di sfondo basate sul delta.
- Vuoi contesto: la linea del volume medio mostra se l'attività attuale è sopra o sotto la norma.

## Guida rapida

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **Volume** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** (impostazioni) accanto all'indicatore.
4. Nelle impostazioni dei dati, mantieni **Input data** su **Volume** (vedi [[different-types-of-input]] per capire cosa contano invece **Order** e **Aggregate Trade**).
5. Imposta **Background Mode** su **Delta Fading** in modo che lo sfondo di ogni barra dell'istogramma sfumi con la forza della pressione in acquisto o in vendita.
6. Abilita **Average Volume** e imposta un numero di giorni, così puoi confrontare le barre attuali con la norma recente.
7. Applica e verifica che l'istogramma venga disegnato sotto il grafico.

[SCREENSHOT: Finestra delle impostazioni dell'indicatore Volume aperta sulla sezione dati, con il menu a discesa Input data espanso che mostra le voci Volume, Order e Aggregate Trade e i campi Filter Min / Filter Max sotto | dc-it-volume-02.png]

## Come leggerlo

- **Barre alte sui breakout** significano che la partecipazione sostiene il movimento; un breakout con volume in calo è sospetto.
- **La colorazione delta** mostra chi è stato aggressivo: con **Delta Fading**, uno sfondo rialzista fortemente colorato significa che i compratori hanno dominato la barra, e viceversa. Una barra alta con uno sfondo quasi neutro significa forti scambi in entrambe le direzioni — una battaglia, non un consenso.
- **I marker di assorbimento** (con **Total Delta Absorption** abilitato) segnalano le barre che hanno raggiunto un forte picco di delta e poi hanno chiuso con un delta di segno opposto — un'inversione completa da forte acquisto a vendita o viceversa, e un classico avvertimento di inversione.
- **Il volume basato sui secondi** trasforma l'istogramma in un misuratore di velocità: sui grafici range, un volume per intervallo in aumento mostra il mercato che accelera verso un livello, un volume in calo mostra uno sforzo che si sta esaurendo.
- **La linea del volume medio** àncora tutto: una barra "alta" conta solo in relazione a ciò che è normale per quello strumento in quel momento.

## Riferimento delle impostazioni

Raggruppate come nella finestra delle impostazioni.

### Data Setting

| Impostazione | Cosa fa |
|---|---|
| **Input data** | Database usato per calcolare l'indicatore: **Volume** (quantità totale di contratti o azioni scambiati), **Order** (numero di ordini inseriti — utile per valutare la partecipazione) o **Aggregate Trade** (numero di scambi eseguiti, che mostra la frequenza indipendentemente dalla dimensione). Vedi [[different-types-of-input]]. |
| **Filter Min** | Filtro minimo sul database scelto — vengono conteggiati solo i dati sopra questa soglia. |
| **Filter Max** | Filtro massimo sul database scelto. Lasciato a **0**, non viene applicato alcun filtro massimo. |

### Calculation Settings

| Impostazione | Cosa fa |
|---|---|
| **Calculation Based on Seconds** | Quando è abilitata, il volume viene calcolato per intervallo di tempo anziché per barra. Particolarmente utile sui grafici range per evidenziare accelerazioni o decelerazioni nella velocità degli scambi. |
| **Number of Seconds** | La durata dell'intervallo per il calcolo basato sui secondi — per esempio, 5 secondi mostra l'accelerazione o la decelerazione del volume in finestre di 5 secondi. |

### Plot Settings

| Impostazione | Cosa fa |
|---|---|
| **Minimum Tot Volume** | Volume totale minimo richiesto perché una barra venga visualizzata; le barre più piccole vengono nascoste in modo che l'attività significativa risalti. |
| **Background Mode** | Come viene colorato lo sfondo dell'istogramma: **None** (colori fissi da Series Bull Border/Bull Fill), **Fade** (gradiente dai colori della serie), **Delta Fading** (sfuma con la forza del delta), **Delta Range** (colori da un intervallo di delta definito dall'utente; il bordo assume il colore del picco di delta raggiunto), **Volume Slope** (colore Bull Border quando il volume sale rispetto alla barra precedente, Bear Border quando scende), **Price Slope** (colorato in base alla direzione del prezzo). |
| **Delta Input Data** | Database usato per il calcolo del delta: **Volume** o **Trade**. |
| **Delta Range** | Apre una finestra secondaria per personalizzare la colorimetria del delta su intervalli di valore definiti dall'utente. |
| **Neutral Color** | Colore di sfondo usato quando il delta è vicino a zero o neutro. |
| **Text Settings** | Dimensione e colore del testo visualizzato sull'istogramma del volume. |

### Marker (Setting, Color And Alert)

Abilita marker grafici quando le condizioni di volume e delta sono soddisfatte.

| Impostazione | Cosa fa |
|---|---|
| **Volume Max** | Soglia del picco di volume — segna le barre che la superano. |
| **Diff. Vol** | Differenza di volume rispetto al picco massimo raggiunto. Utile con il calcolo basato sui secondi per individuare pullback o ritracciamenti del volume. |
| **Max. Delta** | Delta assoluto massimo raggiunto dalla barra — segna le barre con uno squilibrio significativo tra acquisti e vendite. |
| **Diff. Delta** | Differenza di delta rispetto al picco massimo raggiunto — utile per identificare assorbimenti o inversioni del delta. |
| **Total Delta Absorption** | Quando è abilitata, evidenzia solo le barre che raggiungono il picco specificato e poi chiudono con un delta di segno opposto — un'inversione completa dell'aggressività che segnala possibili svolte. |
| **Calculation on Close** | Quando è abilitata, il marker scatta solo alla chiusura della barra. Disabilitata, può apparire durante la barra e scomparire di nuovo se le condizioni smettono di essere soddisfatte. |
| **Marker Color** | Colori e opacità dei marker, distinguendo l'assorbimento sul Bid (venditori sopraffatti) da quello sull'Ask (compratori sopraffatti). |
| **Marker Alert** | Notifica sonora e messaggio popup quando le condizioni del marker sono soddisfatte. |

### Average Volume

| Impostazione | Cosa fa |
|---|---|
| **Average Volume** | Abilita una linea media per il volume e imposta il numero di giorni usato per calcolarla — contesto per capire se il volume attuale è sopra o sotto la norma. |

## Suggerimenti ed errori comuni

- **Interpreta il volume in relazione alla media, non in modo isolato.** Abilita la linea media prima di giudicare "grande" una barra.
- **Lascia abilitato Calculation on Close mentre impari.** I marker intrabar che appaiono e svaniscono insegnano cattive abitudini; i segnali a barra chiusa sono stabili.
- **I marker di assorbimento sono avvertimenti, non ingressi.** Confermali con la struttura e il tape prima di andare contro un movimento — vedi [[orderflow-101]] per la meccanica sottostante.
- **Il volume basato sui secondi appartiene ai grafici range e tick.** Sui grafici a tempo classici ogni barra copre già la stessa durata, quindi l'opzione aggiunge poco.
- **Un istogramma filtrato è un indicatore diverso.** Se imposti **Filter Min** alto per isolare gli scambi grandi, ricorda che le barre non mostrano più l'attività totale — confronta con un grafico non filtrato prima di trarre conclusioni.

## Articoli correlati

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-bar]]
- [[big-trades]]
- [[speed-of-tape]]