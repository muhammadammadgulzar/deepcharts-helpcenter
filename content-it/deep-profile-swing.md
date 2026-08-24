---
title: "Deep Profile Swing"
slug: "deep-profile-swing"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "5 min read"
description: "Riferimento per Deep Profile Swing: profili del volume automatici su ogni swing di prezzo, quattro metodi di rilevamento degli swing, VWAP dello swing e criteri di stop."
keywords: ["profile swing", "profilo swing", "volume profile swing", "vwap swing", "volume domanda offerta", "volume BOS", "rilevamento swing"]
source_hash: "9640f97a09f8ad52"
ai_translated: true
source_hash: "9640f97a09f8ad52"
---
Deep Profile Swing traccia automaticamente un profilo del volume su ogni swing di prezzo, in base a parametri personalizzati che imposti tu. Invece di profilare un periodo fisso come un giorno o una settimana, profila i movimenti stessi — ogni impulso e ogni ritracciamento ottiene la propria distribuzione di volume.

Questo lo rende uno strumento strutturale: ti mostra come il volume si è distribuito dentro una gamba del movimento, dove si trova il VWAP dello swing, e quali livelli creati durante lo swing potrebbero agire in seguito come offerta o domanda — anche attorno ai punti di Break of Structure (BOS).

## Che cos'è

L'indicatore rileva gli swing con uno di quattro metodi (conteggio di barre, nuovi estremi, inversione assoluta o inversione in tick), poi costruisce un profilo — volume, ask/bid, delta, delta più volume, o percentuale di delta — su ogni swing rilevato. Può anche calcolare un VWAP per swing. Criteri di stop separati e indipendenti controllano quando uno swing è considerato terminato.

Se l'anatomia dei profili è nuova per te, esplora prima l'istogramma dal vivo qui sotto — passa il mouse sulle righe e nota il POC e l'area di valore, le stesse strutture che ogni profilo di swing porta con sé.

[WIDGET: volume-profile-lab]

## Quando usarlo

- Fai trading sulla struttura di mercato e vuoi vedere il volume che ha costruito ogni gamba, non solo la forma della gamba.
- Cerchi zone di offerta/domanda ancorate all'attività effettiva degli swing invece che a finestre temporali arbitrarie.
- Vuoi un VWAP ancorato allo swing che riparte da zero a ogni nuovo movimento.
- Analizzi se una gamba di breakout è stata sostenuta da partecipazione reale (un profilo pieno e ben distribuito) o è stata sottile (una gamba vuota, a basso volume).

## Avvio rapido

1. Apri un grafico e aggiungi **Deep Profile Swing** dal pulsante **Indicators** del grafico.
2. In **Main Swing Settings**, scegli uno **Swing Type** — **Reversal Tick** è un inizio pratico per i futures intraday: uno swing termina dopo che il prezzo si muove di un numero di tick prestabilito contro la direzione in corso.
3. Imposta la soglia di inversione (**Tick Rev.**) abbastanza grande da evitare che il rumore ordinario termini uno swing.
4. In **General settings**, imposta **VBP Type** su **Volume** e **Display Mode** su **Profile And Lines**.
5. Applica — ogni swing rilevato porta ora il proprio profilo.

[SCREENSHOT: Grafico con Deep Profile Swing attivo che mostra istogrammi di volume separati disegnati su tre swing di prezzo consecutivi, con le linee dei livelli degli swing estese verso destra | dc-it-deep-profile-swing-01.png]

Se il grafico si affolla, passa **Display Mode** su **Lines Only** — mantieni i livelli chiave e perdi gli istogrammi.

## Come leggerlo

- **Ogni profilo = uno swing.** L'istogramma mostra dove il volume si è concentrato dentro quella gamba. Un nodo grosso a metà swing marca una zona di battaglia; il volume che si assottiglia verso la fine dello swing suggerisce che il movimento ha esaurito i partecipanti.
- **Massimi/minimi di swing con volume pesante adiacente** diventano spesso riferimenti di offerta o domanda alla visita successiva.
- **VWAP dello swing** (Length Type = VWAP): il prezzo medio ponderato per il volume del movimento stesso. Un prezzo che tiene sopra un VWAP di swing in salita mantiene la gamba costruttiva; una rottura confermata (vedi **VWAP Break Ticks**) termina il tracciamento per progettazione.
- **I tipi Delta e Delta Percentage** rivelano se lo swing è stato guidato da compratori o venditori aggressivi — un rally il cui profilo di swing mostra un delta debole o negativo è stato sollevato con poca aggressione e merita sospetto.

## Riferimento delle impostazioni

Raggruppate come nella finestra di dialogo dell'indicatore.

### General settings

| Impostazione | Che cosa fa |
|---|---|
| **VBP Type** | Metodo di analisi del profilo: **Volume** (volume totale per livello — i prezzi più attivi dello swing), **Ask Bid Volume** (volume ask e bid separati per valutare l'equilibrio compratori/venditori), **Delta** (volume in acquisto meno volume in vendita — direzione della pressione), **Delta and Total Volumes** (entrambi combinati), **Delta Percentage** (delta come percentuale del volume totale — forza relativa della pressione) |
| **Length Type** | Base di calcolo: **Swing** (un profilo del volume per movimento di swing) o **VWAP** (prezzo medio ponderato per il volume all'interno dello swing) |
| **Include Reversal Bar** | Include o esclude dal profilo la barra di inversione che segna l'inizio di un nuovo swing |
| **Display Mode** | **Profile And Lines** (istogramma più linee dei livelli chiave) o **Lines Only** (solo linee dei livelli chiave — grafici puliti) |

### Main Swing Settings

| Impostazione | Che cosa fa |
|---|---|
| **Swing Type** | Metodo di rilevamento: **Left Right Bar** (uno swing è un estremo con un numero definito di barre su ciascun lato), **Highest Lowest** (nuovi massimi/minimi rispetto al movimento precedente), **Reversal Absolute** (un movimento di prezzo fisso contro il trend innesca l'inversione), **Reversal Tick** (un numero definito di tick contro il trend — adatto al trading di breve termine) |
| **Abs. Rev.** | Movimento di prezzo minimo richiesto per un'inversione quando si usa **Reversal Absolute** |
| **Tick Rev./Highest Lowest** | Quantità di tick necessaria per il rilevamento dell'inversione o per l'identificazione di un nuovo massimo/minimo |
| **Right Bar** | Con **Left Right Bar**: quante barre a destra devono formarsi prima che uno swing sia convalidato |

### Swing Stop Settings

Questi parametri rispecchiano le Main Swing Settings ma operano in modo indipendente, così i criteri che terminano uno swing possono differire da quelli che lo rilevano.

| Impostazione | Che cosa fa |
|---|---|
| **Enable Stop Swing** | Attiva o disattiva i criteri separati di terminazione dello swing |

### VWAP Swing Settings

Applicate quando **Length Type** = **VWAP**:

| Impostazione | Che cosa fa |
|---|---|
| **Swing Min Ticks** | Tick minimi richiesti per avviare uno swing — filtra i movimenti piccoli |
| **Swing Max Ticks** | Tick massimi prima che lo swing corrente si chiuda e ne inizi uno nuovo — evita che un movimento enorme venga trattato come un unico swing |
| **VWAP Break Ticks** | Tick necessari per confermare una rottura del VWAP all'interno dello swing; una volta superati, il VWAP dello swing corrente smette di essere tracciato |

[SCREENSHOT: Finestra delle impostazioni di Deep Profile Swing aperta su Main Swing Settings con il menu a discesa Swing Type espanso che mostra i quattro metodi di rilevamento | dc-it-deep-profile-swing-02.png]

## Suggerimenti ed errori comuni

- **Compaiono profili su ogni oscillazione?** Il rilevamento è troppo sensibile. Aumenta **Abs. Rev.**, **Tick Rev.** o **Right Bar** (quello usato dal tuo Swing Type), e valuta di abilitare le regole di Stop Swing.
- **Vuoi i livelli, non gli istogrammi:** **Display Mode** = **Lines Only**.
- **La linea del VWAP dello swing si ferma a metà movimento:** o è stato raggiunto **VWAP Break Ticks** (una rottura confermata ferma il tracciamento) o è stato toccato **Swing Max Ticks** (lo swing si è chiuso e ne è iniziato uno nuovo). Entrambi sono per progettazione, non un bug.
- **La scelta del metodo di rilevamento conta più dello stile.** Left Right Bar conferma tardi ma è stabile; l'inversione in tick/assoluta reagisce più in fretta ma si inverte più spesso nelle fasi laterali. Adattalo al tuo orizzonte temporale prima di regolare qualsiasi altra cosa.
- Scelte diverse in stile **Input Data** nella famiglia dei profili cambiano le forme — se questo profilo di swing non concorda con il tuo [[deep-profile]], confronta prima le configurazioni.

## Articoli correlati

- [[deep-profile]]
- [[understanding-volume-profile]]
- [[understanding-vwap]]
- [[swing-point]]
- [[different-types-of-input]]
- [[indicator-layout]]