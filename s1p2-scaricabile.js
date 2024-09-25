/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* Oggi ti spiego i principali "tipi di dati" che usiamo in JavaScript.
Immagina di avere una scatola magica, che è il computer, dove puoi mettere dentro diversi tipi di cose. Ora vediamo insieme cosa puoi mettere in quella scatola!

- Numeri (Number): Sono proprio come i numeri che conosci! Puoi metterci dentro numeri interi come 5 o 10, oppure numeri con la virgola come 2.5 o 3.14.
- Testo (String): Questo è come una frase o una parola, che puoi mettere tra virgolette. Ad esempio, se vuoi scrivere il tuo nome, lo metteresti tra virgolette, come "Anna" o "Ciao!".
- Vero o Falso (Boolean): Immagina di fare una domanda a cui puoi rispondere solo con "sì" o "no". In JavaScript, usiamo true per dire "vero" (sì) e false per dire "falso" (no).
- Null: Questo è come una scatola vuota. Se hai una scatola e dentro non c'è nulla, diciamo che è null.
- Undefined: È come quando hai una scatola, ma ancora non hai deciso cosa ci vuoi mettere dentro. Quindi, per ora, è "undefined" (non definita).
- Oggetti (Object): Immagina un cesto dove puoi mettere insieme tante cose diverse. Un oggetto è come un cesto che può contenere numeri, parole, e anche altre scatole! Per esempio, potresti avere un oggetto che rappresenta una persona, con il suo nome e la sua età.
- Array: È come una fila di scatole, dove puoi mettere tante cose in ordine. Puoi immaginare un elenco, come la lista della spesa, dove ogni scatola contiene un elemento, come "mela", "banana", "latte".//

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*Un oggetto in JavaScript è un modo per conservare più informazioni insieme in un unico "contenitore". Ogni informazione ha un nome (chiamato "chiave") e un valore.
Pensa a un oggetto come a una lista di domande e risposte:

Chiave: La domanda (ad esempio, "Come ti chiami?").
Valore: La risposta (ad esempio, "Mi chiamo Anna").
Ad esempio, se vuoi descrivere una persona con nome, età e altezza, puoi fare così:

let persona = {
    nome: "Anna",    // Chiave: nome, Valore: "Anna"
    età: 25,         // Chiave: età, Valore: 25
    altezza: 1.7     // Chiave: altezza, Valore: 1.7
  };

Ogni chiave (come "nome") ha un valore associato (come "Anna"). Puoi usare la chiave per ottenere il valore, come se chiedessi: "Qual è il nome di questa persona?":

console.log(persona.nome); // Stampa "Anna"

Quindi, un oggetto è semplicemente un modo per raggruppare insieme tante informazioni su una cosa, tutte in un unico posto.

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 12;
let numero2 = 20;
let somma = numero1 + numero2;

console.log(somma); // Stampa 32

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Giorgia";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function eseguiSottrazione() {
    let x = 12; // dichiarazione della variabile
    let risultato = 4 - x; // sottrazione
    console.log(risultato); // stampa il risultato
}


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log(name1 !== name2); // true
console.log(name1.toLowerCase() === name2.toLowerCase()); // true