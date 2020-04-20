//chiedere all'utente il numero di chilometri che vuole percorrere
var km = prompt ('Quanti chilometri vuoi percorrere?');

console.log (km);

// chiedere l'età del passeggero.
var eta = prompt ('Quanti anni hai?');

console.log(eta);

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//    il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzokm = km * 0.21 + '€';
console.log(prezzokm);

//prezzo per minorenni (con 20% di sconto)
var prezzominorenni = prezzokm * 0.8 + '€';

//    va applicato uno sconto del 20% per i minorenni
if (eta >= 18 && eta < 65){
    console.log("Il tuo biglietto costerà" + prezzokm );
} else if (eta < 18){
    console.log('Il tuo biglietto costerà' + prezzominorenni );

}

//    va applicato uno sconto del 40% per gli over 65
