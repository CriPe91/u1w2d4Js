/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}
console.log(area(4, 2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 += num2) * 3;
  } else {
    return (num1 += num2);
  }
}
console.log(crazySum(4, 8));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numb, x = 19) {
  if (numb > x) {
    return Math.floor(Math.abs(numb - x) * 3);
  } else {
    return numb - x;
  }
}
console.log(crazyDiff(25));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  }
}
console.log(boundary(40));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
  if (stringa.startsWith("epicode")) {
    return stringa;
  } else {
    return "epicode" + " " + stringa;
  }
}
console.log(epify("ciao a tutti"));
console.log(epify("epicode ciao"));
console.log(epify("salve a tutti"));

//startsWith in questo caso verifica se la stringa inizia con EPICODE

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numb) {
  if (numb % 3 === 0 || numb % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(12));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(stringa) {
  const stringaSplittata = stringa.split("");
  const stringaGirata = stringaSplittata.reverse([0]);
  const stringaCompleta = stringaGirata.join("");
  return stringaCompleta;
}
console.log(reverseString("Epicode"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa) {
  const parola = stringa.split(" ");
  const stringaRisultato = [];
  for (let i = 0; i < parola.length; i++) {
    const primaLettera = parola[i].charAt(0);
    const maiuscolaLettera = primaLettera.toUpperCase();
    const stringaTagliata = parola[i].slice(1);
    const parolaFinale = maiuscolaLettera + stringaTagliata;
    stringaRisultato.push(parolaFinale);
  }
  return stringaRisultato.join(" ");
}
console.log(upperFirst("ciao mi chiamo cristian"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const catString = function (stringa) {
  return stringa.slice(1, stringa.length - 1);
};
console.log(catString("epicode"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  const numeriCasuali = [];
  for (let i = 0; i < n; i++) {
    numeriCasuali.push(Math.floor(Math.random() * 11));
  }
  return numeriCasuali;
}
console.log(giveMeRandom(8));

/* SCRIVI QUI LA TUA RISPOSTA */
