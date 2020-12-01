/**
 * Il existe 8 types de données de base en Javascript
 */

var message = 'Bonjour';
console.log(message);
message = 123;
console.log(message);
// Number
//valeur max  : (2 puissance 53) -1
var nbEntier = 1;
var nbFloat = 1.25;
/**les opérations sur les nombres :
 * la multiplications *
 * l'addition +
 * la division /
 * la soustraction -
 * ....
 * 
 * Infinity
 * -Infinity
 * NaN => Not a Number : représente une erreur de calcul
 */
console.log(1 / 0); // Output : Infinity
console.log(Infinity); // Output : Infinity

console.log('un' / 2);
console.log('1' / 2); //0.5
//BigInt => permet de représenter des nombres entiers supérieurs a 2 puissance 53
var monBigInt = 999999999999999999999999999999999;

//String
/**
 * Une chaine de caractère en Javascript doit etre entourée de guillemets
 * 3 types de guillemets
 * Backticks : alt gr + 7
 */

var str = "Bonjour";
var str2 = 'les guillemets simples sont aussi autorisés';
var str3 = `on peut intégrer un autre ${str}`;
console.log(str3);
//integrer une expression 
//l'expression entre ${} est évaluée et le résultat devient une partie de notre chaine
console.log(`le résultat est ${1+3}`); //Output : le résultat est 4

var paragraphe = 'je suis un long paragraphe \n' +
    'qui explique le retour à la ligne ';
console.log(paragraphe);

var paragraphe1 = `je suis
     un long paragraphe
     qui explique
     le retour à la ligne `;
console.log(paragraphe1);

//Boolean
/**
 * true / false
 */

var isMonday = true; // oui c'est lundi
var isSaturday = false; // non c'est pas encore samedi
var isGreater = 10 > 6;
console.log(isGreater); //Output : true

// Null
// null en javascript n'est pas une référence à un objet inexistant ou un pointeur nul
// c'est juste une valeur spéciale qui représente "rien"
var selectedColor = null;
selectedColor = 'rouge';

//Undefined
/*
elle signifie que la valeur n'est pas attribuée
 */
var age;
console.log(age); // Output : undefined

var age1 = 100;
age1 = undefined; // non recommendé => utiliser null au lieu de undefined
console.log(age1); //Output: undefined

//Object 
/**
 * les objets sont utilisés pour stocker plusieurs données
 */
//Symbol
/**
 * Le type Symbol est utilisé pour créer des identificateurs uniques pour les objets
 */