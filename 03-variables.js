/*on utilise les variables pour stocker temporairement des données dans la mémoire
d'un ordinateur
pour déclarer une variable on utilise le mot-clé var 
 */

var maVariable;
console.log(maVariable); // undefined

var maVariable = 'maVariable';
console.log(maVariable);
/** les variables ne peuvent pas etre des mots-clés réservés
 *  les noms de variables doivent avoir une signification
 *  les noms de variables ne peuvent pas commencer par un nombre
 * var 1message;
 *  ils ne peuvent pas contenir d'espace ou -
 * var message-bonjour;
 * var message bonjour;
 *  les variables sont sensibles à la casse
 */

var myVeryLongName; // camelCase
var maVARIABLE;

// ces noms sont valides 
var $ = 1;
var _ = 2;
console.log($ + _);
var maVariable2 = 'maVariable2';
console.log(maVariable2);

var message1 = 'Bonjour';
var message2 = 'tout';
var message3 = 'le monde';