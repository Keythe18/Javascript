//console.log('Bonjour'); // le mode strict n'est pas activé
'use strict'; //'use strict'

/** use strict est une nouvelle fonctionnalité de ES5
 * qui permet de placer un programme ou une fonction dans un contexte strict.
 * un contexte strict empeche certaines actions d'etre effectuée et prévoit
 * davantage d'exceptions.
 */

var maVariable = 'Un script en mode strict!';
console.log(maVariable);

//L'utilisation d'une variable sans la déclarer n'est pas autorisée
age = 100;
//console.log(age); // erreur

//Les objet aussi sont des varibles 
//L'utilisation d'objets sans les déclarer n'est pas autorisée
nb = { x: 1, y: 2 }; //erreur
console.log(nb);

function myFunction(x, y) {} // erreur