"use strict";
/**
 * length est une proprieté
 * maChaine.length() au lieu de maChaine.length => faux
 */
//maChaine.length

var maChaine = 'Bonjour'; //Output : 7
console.log('La longueur de la chaine est: ', maChaine.length);
var maChaine1 = `Bonjour\n`;
console.log('La longueur de la deuxième chaine est: ', maChaine1.length); //Output :8
/*Obtenir un caractère à une position donnée:
syntaxe : 
maChaine.charAt(pos)
maChaine[pos]
=> il y une seule différence : le retour en cas d'un caractère inexistant
 */
console.log('Récupérer le premier caractère ', maChaine[0]); //Output : B
console.log('Récupérer le premier caractère ', maChaine.charAt(0)); //Output : B
console.log('Récupérer le dernier caractère ', maChaine[maChaine.length - 1]);
//Output : r

console.log('Récupérer un caractère inexistant ', maChaine[8]); //Output : undefined
console.log('Récupérer un caractère inexistant  ', maChaine.charAt(8));
//Output : ' ' :une chaine vide

//Les chaines sont immuables
/**
 * les chaines de caractères ne peuvent pas etre modifiées en Javascript 
 * => il est impossible de changer un caractère
 */
//maChaine[0] = 'b'; // erreur :  Cannot assign to read only property '0' of string 'Bonjour'
//console.log(maChaine[0] = 'b');
//Solution :
// on a crée une nouvelle chaine et on l'a attribué à la chaine existante au lieu de l'ancienne
var maChaine = 'Hi'
maChaine = 'h' + maChaine[1];
console.log(maChaine);
/*replace() => utilisé pour rechercher une correspondance entre l'expression et la chaine
et remplacer le substr correspondant par une nouvelle chaine
 */
//toUpperCase => majuscules
//toLowerCase => miniscules

var str = 'Chaine';
console.log(str.toUpperCase()); // Output :CHAINE
console.log(str.toLowerCase()); // Output :chaine

//rechercher un substring dans une chaine
/**
 * str.indexOf(substr , startPostion);
 */

var str1 = 'ma chaine de caractères';
//rechercher la position de 'chaine' dans str 
console.log(str1.indexOf('chaine')); // Output :3

//rechercher la position de 'Chaine' dans str 
console.log(str1.indexOf('Chaine')); // Output : -1

console.log(str1.indexOf('c')); // Output : 3
//trouve moi un c à partir de la postion 4
console.log(str1.indexOf('c', 4)); // Output : 13
//il va chercher de la fin de la chaine à son début
console.log(str1.lastIndexOf('c')); // 17
// Syntaxe : str.slice(start, end);
var str2 = 'String';
console.log(str2.slice(0, 3)); //Output : Str
console.log('le début est plus grand que la fin', str2.slice(3, 0)); //Output : Str
//si on utilise des valeurs négatives pour le début/fin => la position est comptée à partir
// de la fin de la chaine
console.log(str2.slice(-3, -1)); //Output : in
// si on ne met pas un deuxième argument , slice va jusqu'au bout de la chaine
console.log(str2.slice(2)); //Output : ing
//str.substring(start, end);
console.log(str2.substring(0, 3)); //Output : Str
console.log(str2.substring(3, 0)); //Output : Str
//le substring ne supporte pas les arguments négatifs contrairementà slice
//str.substr(start , length)

console.log(str2.substr(0, 3)); //Output :Str
console.log(str2.substr(-4, 2)); //Output : ri // a partir de la 4ème position , récupérer 2 caractères

//Récup :
/** 
 * slice (start, end) => du début à la fin sans inclure la fin / permet les négatifs
 * substring(start, end) => entre le début et la fin / les valeurs négatives signifient 0
 * substr (start, length) => à partir du début avec une longeur précise / permet un début négatif
 */

//str.trim() => supprime les espaces entre les guillemets

var str3 = "    je suis une chaine sans espaces entre les guillemets    ";
console.log(str3);
console.log(str3.trim());