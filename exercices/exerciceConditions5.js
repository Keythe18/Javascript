/** 
 * Ecrire une fonction Javascript pour créer une nouvelle chaine de caractère à partir
 * d'une chaine donnée en changeant la position des premiers et derniers caractères
 * La longueur de la chaine doit etre supérieure ou égal à 1
 *  */
"use strict";

function inverserStr(str) {
    if (str.length <= 1) {
        return str;
    }
    var midC = str.substring(1, str.length - 1); // b
    return (str.charAt(str.length - 1) + midC + str.charAt(0));
}

console.log(inverserStr('a'));
console.log(inverserStr('ab'));
console.log(inverserStr('abc'));
//console.log(inverserStr('abcz'));