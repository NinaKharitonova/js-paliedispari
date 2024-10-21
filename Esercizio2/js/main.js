// TODO: Esercizio n°2

/** 
   Pari e Dispari
   L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
   Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
   Sommiamo i due numeri
   Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
   Dichiariamo chi ha vinto.
*/

// Funzione per generare un numero casuale tra 1 e 5
function generateRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

// Funzione per determinare se un numero è pari
function isEven(number) {
  return number % 2 === 0;
}

// L'utente sceglie tra "pari" o "dispari"
const userChoice = prompt("Scegli pari o dispari").toLowerCase();

// L'utente inserisce un numero da 1 a 5
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"), 10);

// Generiamo un numero random per il computer
const computerNumber = generateRandomNumber();

// Sommiamo i due numeri
const sum = userNumber + computerNumber;

// Verifichiamo se la somma è pari o dispari
const sumIsEven = isEven(sum);

// Mostriamo i risultati
console.log(`Hai scelto: ${userChoice}`);
console.log(`Il tuo numero: ${userNumber}`);
console.log(`Il numero del computer: ${computerNumber}`);
console.log(`Somma: ${sum} (${sumIsEven ? "pari" : "dispari"})`);

// Determiniamo il vincitore
if (
  (sumIsEven && userChoice === "pari") ||
  (!sumIsEven && userChoice === "dispari")
) {
  console.log("Hai vinto!");
} else {
  console.log("Hai perso, vince il computer!");
}
