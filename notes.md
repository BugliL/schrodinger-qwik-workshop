Qwik e' un metaframework

Sintassi simile a React con molte ottimizzazioni 
Lo stesso sito fatto con 2 tecnlogie diverse gira con 5x tanto
builder.io/?render=next
builder.io/

Qwik e' lazy al massimo, il caricamento dei componenti e del codice viene fatto
solo e soltanto quando necessario e mai in modo inutile. Non c'e' costo upfront
per l'esecuzione delle applicazioni. Esegue meno codice e siccome ne esegue
meno, scarica solo quello necessario.
Non c'e' bisongno di aspettare che venga scaricato perche' sfrutta alcuni 
componenti del browser per scaricare correttamente tutti i JS necessari.
Il principio su cui si basa questo framework e' basarsi sul comportamento
dell'applicazione e non su come organizzare o fare le cose.


Ogni volta che un componente accede alla variabile si crea un binding con una
subscription. Ogni volta che una variabile viene aggiornata fa il refresh di
tutti i componenti che sono sottoscritti. Anche nei componenti figli non vengono
chiamati nel caso non leggano il valore.

Gli observable sono entita' che forniscono valori nel tempo. I signal sono
componenti che forniscono il valore attuale.

Concetti di base:
Dove si trova un $ si ha un potenziale punto di binding

Signal
tipo useState di React ma meglio, c'e' solo da usare la variabile il resto se
ne occupa il framework.
```
const x = useSignal(10);
// per utilizzare la variabile is usa `x.value` facendo assegnazioni e letture.
<h1>{ x.value }</h1>
```

Server
Visualizza nel client qualcosa che viene eseguito nel browser.
Collega le interazioni effettuate nel client collegandole al server di avvio.
Tramite RPC chiama il server.
La potenza di questo approccio e' la possibilita' di utilizzare i tipi.

useResource$ async
creato appositamente per fare i fetch dei dati e della roba

useComputed
permette di filtrare ed utilizzare successivamente i componenti.

Componente Link
Componente Image

upsert
qwik ui
track
onGet

[...index] default route se un file index non e' presente e se la chiamata non
corrisponde direttamente ad un file preciso

C'e' la possibilita di integrare delle pagine costruite su builder.io e
visualizzarle direttamente dentro l'applicazione
C'e' la possibilita di integrare dei componenti React







