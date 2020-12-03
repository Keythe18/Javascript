"use strict";
/**
 * Une fonction correspond à un bloc de code nommé et réutilisable et dans le but d'effectuer
 * une tache précise
 * fonctions intégrés : alert , prompt, confirm
 * Syntaxe : 
 * 
 * function nomFonction(paramètre1, paramètre2, ...){
 *   corps de la fonction
 * }
 */

function showMessage(firstName, lastName) {
    //1000 lignes de code
    console.log('Bonjour' + ' ' + firstName + ' ' + lastName);
}
//on fait appel à la fonction par son nom
showMessage('Dhia', 'Bani'); //arguments

//le retour des fonction
function calcSum(a, b) {
    var somme = a + b;
    return somme;
}
console.log(sum(9, 1));

function sum1(a, b) {
    //code
    return a + b;
    //code
}

function sum2(a, b = 5) {

    return a + b;
}
console.log(sum2(1));

function sum3(a, b = a) {

    return a - b;
}
console.log(sum3(1));