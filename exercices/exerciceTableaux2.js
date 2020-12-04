/** 
 * Ecrire une fonction Javascript qui supprime les valeurs : null, 0 , false , undefined , NaN
 * Exemple :  tab [9, 0, NaN, undefined, 6, null, 36]
 * Output :  tab [9, 6, 36]
 */
//Boolean => un objet permettant de représenter des valeurs bouléennes
/**
 * si la valeur estomise ou est : 0, -0, null, false, NaN, undefined, ou une chaine de 
 * caractère vide (""), l'objet a une valeur initiale false
 */

/************* Première Solution *********** */
var arr = [9, 0, NaN, undefined, 6, null, 36];
var arrFiltre = arr.filter(Boolean);
console.log(arrFiltre);

/************* Deuxième Solution *********** */

function filtrerArr(arr) {
    var i = -1;
    var arrLength = arr ? arr.length : 0;
    var resIndex = -1;
    var resultat = [];

    while (++i < arr.length) {
        var valeur = arr[i];

        if (valeur) {
            resultat[++resIndex] = valeur;
        }
    }
    return resultat;
}
console.log(filtrerArr([9, 0, NaN, undefined, 6, null, 36]));