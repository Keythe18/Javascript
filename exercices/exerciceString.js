/**
 * Ecrire un programme Javascript qui renvoie une chaine de caractère avec le premier 
 * caractère en majuscule.
 * par exemple : chaine = 'bonjour'; => Output: 'Bonjour'
 */
"use strict";
var str = 'bonjour';
var newStr = str[0].toUpperCase() + str.slice(1);
console.log(newStr);

//si str est vide donc str[0] => undefined donc la méthode toUpperCase() va renvoyer une erreur
/**
 * soit on utilise le charAt(0) 
 * soit on fait un test sur la chaine vide
 */