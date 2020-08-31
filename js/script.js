var random = [];
var numeroUtente = [];
var listaBombe = [];
var difficoltà = parseInt(prompt("Inserisci un livello di difficoltà 0,1,2"))
var range;
var numeriInseriti = [];
var bombaEsplosa = false;
var possibilità = range - 16;



// switch con difficoltà
switch (difficoltà) {
  case 0:
    range = 100;
    break;
  case 1:
    range = 80;
    break;
  case 2:
    range = 50;
    break;
  default:
  range = 17;
}



// funzione generica per vedere se un numero/elemento/nome è doppiato
function inArray(array, elemento){
  var trovato = false;
  var i = 0;
  for(i = 0; i < array.length; i++){
    if (array[i] == elemento) {
      return true;
    }
  }
    return false;
}

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati nell'array
function generaNum(max, min){
  var min = 1,
      max = 100,
      random;

  do{
    random = Math.floor(Math.random()*(max - min) + 1);
  } while ( random == generaNum.last);
  generaNum.last = random;
  return random;
}

for (var i = 1; i <= 16; i++) {
  console.log(generaNum());
}


// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// // richiedi numero corretto
// // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
while(numeriInseriti.length < possibilità && bombaEsplosa == false){
  var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e " + range));

  if (isNaN (numeroUtente) || numeroUtente < range || numeroUtente < 1 ){
    alert("Devi inserire un numero tra 1 e " + range)
  } else if (inArray(numeriInseriti, numeroUtente) == false){
    if(inArray(random, numeroUtente) == true){
      bombaEsplosa = true;
    } else{
      numeriInseriti.push(numeroUtente);
    }
  } else {
    alert('Hai già inserito questo numero!!')
  }
  console.log(numeriInseriti);
}


// // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// stampa un messaggio appropriato sull’esito del controllo.
if(bombaEsplosa == true){
  alert("Hai perso!!! Sei arrivato al livello " + numeriInseriti.length)
} else {
  alert("Hai vinto!!!")
}




// funzione che genera numero casuale tra 1 e 100 V

// funzione che dato un array e un numero mi controlli che il numero non sia gia nell'array

// ciclo che richiama la funzione di generazione numeri per 16 volte

// check che il numero non sia duplicato
// se non è duplicato, la salvo nell'array

// creo variabile array che contiene i numeri utente
//
// variabile booleana haPerso = false
//
// ciclo di 100 - 16volte
//   prompt in cui chiedo all'utente un numero
//   check che il numero sia compreso tra 1 e 100
//   check che il numero non sia duplicato nell'array utente
//   se non è duplicato, salvo il numero nell'array utente.
//   chek che il numero non sia nell'array bomba
//   se il numero è nell'array bomba manderò un alert 'Hai perso!' ed esco al ciclo
//   alert con array/ utente.legth --> numero di volte che l'utente ha inserito un numero corretto
//   ha perso = true;
//   esco dal ciclo
// while e break
//
// check se haPerso = false
// aler hai vinto
// alert con array utente.legth --> numero di volte che l'utente ha inserito un numero corretto


// if (difficoltà == 0){
//   range = 100;
// } else if (difficoltà == 1) {
//    range = 84
// } else if(difficoltà == 2){
//   range = 50;
// } else {
//   range = 17;
// }





// var listaBombe =[];
//
// while(listaBombe.length < 16){
//   var numeroCasuale = generaNumeroRandom(1, range);
//
//   if(inArray(listaBombe, numeroCasuale) == false)
//   listaBombe.push(numeroCasuale);
// }
// console.log(listaBombe.sort());
