//chiedere all'utente il numero di chilometri che vuole percorrere
var km = prompt ('Chilometri da percorrere:');

console.log ('kms:' + km);

// chiedere l'età del passeggero.
var eta = prompt ('Età del viaggiatore');

console.log( 'età:' + eta);

//    il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzokm = km * 0.21 ;

console.log('Prezzo intero del biglietto:' + prezzokm + '€');


//calcolare il prezzo totale del viaggio
//per le personne che sono nelle fasce di età tra 18 - 65 anni
if (eta >= 18 && eta < 65){
    console.log('Prezzo finale del biglietto:' + prezzokm + '€' );
}
//    va applicato uno sconto del 20% per i minorenni
else if (eta < 18){
    console.log('Prezzo finale del biglietto:' + (prezzokm * 0.8) + '€' );
}
//    va applicato uno sconto del 40% per gli over 65
else {
    console.log('Prezzo finale del biglietto:' + (prezzokm * 0.6) + '€');
}
