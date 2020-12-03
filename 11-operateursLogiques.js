"use strict";
/**
 * || (OU)
 * && (ET)
 * ! (NOT)
 */
//|| OR

//var result = x || y;
//4 combinaisons logiques possibles:result
console.log(true || true); // Output : true
console.log(false || true); // Output : true
console.log(true || false); // Output : true
console.log(false || false); // Output : false

if (1 || 0) { // (true || false)
    console.log('C\'est vrai ');
}
//var result = x || y || z;
//une chaine de (OR) renvoie la première valeur true ou la dernière si aucune valeur
//true n'a été trouvée

console.log(1 || 0); //Output :1
console.log(null || 1); // Output :1
console.log(null || 0 || 1); //Output :1
console.log(null || undefined || 0); //Output :0

//&& (AND)

//var result = x && y;

console.log(true && true); //Output true
console.log(false && true); //Output false
console.log(true && false); //Output false
console.log(false && false); //Output false

//var result = x && y && z; //évaluation des opérandes de gauche à droite
//&& (AND) renvoie la première valeur fausse ou la dernièrevaleursi aucune n'a été trouvée

console.log(1 && 0); //Output:0
console.log(null && 5); //Output: null
console.log(0 && 'chaine'); //Output:0
console.log(1 && 2 && null && 3); //Output :null
console.log(1 && 2 && 3); //Output :3

//La priorité de && (AND) est supérieure à || (OR)

//exemple :
//var result = x && y || z && w;
//=> meme expression
//var result = (x && y) || (z && w);

//! (NOT)

//var result = !x;
console.log(!true); //Output :false
console.log(!0); // Output : true

console.log(!!null); //Output :false
console.log(Boolean(null)); //Output :false

//La priorité de NOT est la plus élevée de tous les opérateurs logiques

console.log(null || 2 || undefined); //Output :2