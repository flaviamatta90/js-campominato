// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var bombe = 16;
var tentativi = 3;
var random = Math.floor(Math.random() * 100) + 1;


// funzione che genera numero casuale tra 1 e 100
function generaNumero(random){
  return random;
}
  console.log(random);

  // funzione che dato un array e un numero mi controlli che il numero non sia gia nell'array


// creo variabile array che contiene i numeri bomba

// ciclo che richiama la funzione di generazione numeri per 16 volte
  // check che il numero non sia duplicato
  // se non è duplicato, la salvo nell'array

// creo variabile array che contiene i numeri utente

// variabile booleana haPerso = false

// ciclo di 100 - 16volte
  //prompt in cui chiedo all'utente un numero
  // check che il numero sia compreso tra 1 e 100
  // check che il numero non sia duplicato nell'array utente
  // se non è duplicato, salvo il numero nell'array utente.
  // chek che il numero non sia nell'array bomba
  // se il numero è nell'array bomba manderò un alert 'Hai perso!' ed esco al ciclo
  // alert con array/ utente.legth --> numero di volte che l'utente ha inserito un numero corretto
  // ha perso = true;
  // esco dal ciclo
// while e break

// check se haPerso = false
// aler hai vinto
// alert con array utente.legth --> numero di volte che l'utente ha inserito un numero corretto
