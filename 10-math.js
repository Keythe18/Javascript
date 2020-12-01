"use strict";
/**
 * Math est un objet (ce n'est pas une fonction). il a des méthodes et des proprietés
 * qui permettent l'utilisation des constantes et fonctions mathématiques
 * 
 * Math fonctionne avec le type Number mais pas avec le BigInt
 */
//Math.PI : proprietés
var p = Math.PI;
console.log(p); // Output : 3.141592653589793
//Math.SQRT2 :  la racine carrée
var sqrt = Math.SQRT2; // Output :1.4142135623730951
console.log(sqrt);
//Math.sqrt(x)=> retourne la racine carrée du paramètre
console.log(Math.sqrt(4)); //Output :2
//Math.random() => retourne un nombre aléatoire compris entre 0 inclus et 1 exlus
console.log(Math.random());
//Math.floor(x) => retourne le plus grand entier inférieur ou égal à la valeur passée en paramètre
console.log(Math.floor(5.9)); //Output :5
//Math.round(x) => retourne l'arrondi d'un nombre
console.log(Math.round(5.9)); // Output :6
//Math.pow(x,y) => retourne le résultat de x à la puissance y
console.log(Math.pow(2, 3)); //Output :8
//Math.max(x,y,z) => retourne la plus grande valeur d'une liste de nombres
//Math.min(x,y,z) => retourne la plus petite valeur d'une liste de nombres
console.log('La plus grande valeur est ', Math.max(8, -3, 9, 3)); //Output :9
console.log('La plus petite valeur est ', Math.min(8, -3, 9, 3)); //Output :-3
//Math.abs(x) =>retourne la valeur absolue d'un nombre
console.log('la valeur absolue de -8.6 est ', Math.abs(-8.6)); // Output :8.6

console.log(Math.floor(Math.random() * 10)); // Output: -- (utilisation de Math.random())