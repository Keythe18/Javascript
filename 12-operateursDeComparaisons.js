"use strict";
/**
 *  == égal à
 *  === valeur et type
 *  a < b ; a > b ; a>=b ; a<=b
 *  Non égal : a != b
 *  Non égal (valeur et type) a !== b
 */
// tous les opérateurs de comparaison renvoient une valeur booléenne true/false

console.log(3 > 2); // Output :true
console.log(3 == 2); //Output : false
console.log(3 != 2); //Output : true

var resultat = 3 > 2;
console.log(resultat); // Output:true

//Comparaison des chaines de caractères :

console.log('Z' > 'A'); //Output : true
console.log('Abd' > 'Abc'); //Output :true

console.log('A' > 'a'); //Output :false
//la table encodage unaire

//Comparaison des types différents
/**
 * Js Convertit les valeurs en number
 */
console.log('comparer deux types différents ', '2' > 1); //Output : true 
console.log('comparer deux types différents ', '01' == 1); //Output : true

console.log(true == 1); //Output : true => le true devient 1
console.log(false == 0); //Output :true => le false devient 0
// 
var x = 0;
console.log(Boolean(x)); //Output :false
var y = '0';
console.log(Boolean(y)); //Output : true
console.log(x == y); //Output :  true!

//Egalité stricte
/**
 * l'opérateur de l'égalité strict === vérifie l'égalité sans conversion de type
 */
console.log(0 == false); // Output : true
console.log('' == false); // Output : true

console.log(0 === false); // Output : fasle car les deux types sont différents

// not égal strict :!==

//Résumé :
/** 
 * = : utilisé pour attribuer des valeurs à une variable en JS
 * == : utilisé pour la comparaison entre deux variables quelque soit le type de la variable
 * === : utilisé pour une comparaison stricte entre deux variables => vérifier le type est la valeur
 * des deux variables 
 * il vérifie le type et compare les deux valeurs
 */