// TODO: Esercizio n°1

/**
 * Palidroma
   Chiedere all’utente di inserire una parola
   Creare una funzione per capire se la parola inserita è palindroma
*/

// ! RACCONLTA DATI

/** Funzione che chiede all'utente una parola
  *  @param {String} message

  * La stringa dell'utente
  * @returns {String}
*/

function askString(message = "Dammi una parola") {
  return prompt(message);
}

// ! ELABORAZIONE

/** Funzione che controlla se una stringa è palindroma
  * La stringa da controllare 
  * @param {String} text

  * Il risultato del controllo
  * @returns {Boolean}
*/

function isPalindrome(text) {
  /**Stringa vuota che verrà utilizzata per memorizzare la versione invertita della parola */
  let reverseText = "";

  /**Ciclo, scorre ogni carattere della stringa  */
  for (let i = 0; i < text.length; i++) {
    const currentChar = text[i];
    reverseText = currentChar + reverseText;
  }

  /**Stampa stringa originale e la sua versione invertita */
  console.log(text, reverseText);

  /** Confronta la stringa originale con quella invertita.
  Se sono uguali, la funzione restituisce true (la parola è palindroma), altrimenti restituisce false.
 */
  return text === reverseText;
}

const userWord = askString();
const isUserWordPalindrome = isPalindrome(userWord);

/**Stampa del risultato, true o false */
console.log(isUserWordPalindrome);
