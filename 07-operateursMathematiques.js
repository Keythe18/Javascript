"use strict";
/**
 * addition +
 * multiplication *
 * soustraction -
 * division /
 * modulo %
 * Exponentiation **
 * Incrémentation ++
 * Décrémentation --
 */
//Unary => un opérateur unaire possède un seul opérande
var x = 1;
x = -x;
console.log(x);
//Binary => un opérateur binaire possède deux opérandes
//addition
var sum = 2 + 3;
console.log(sum);

var x = 2;
var y = 3;
var somme = x + y;
console.log(somme);

// + unaire => n'a aucun effet sur les nombres

var x = 1;
console.log('+x ', +x); // Output :1

var y = -1;
console.log('+y ', +y); // Output :-1

console.log(+true); // Output : 1
console.log(+''); // Output : 0

var stylos = '5';
var cahiers = '3';

console.log(' stylos + cahiers ', stylos + cahiers); // Output : 53 => Concaténations

//Avoir la somme des stylos et des cahiers 

console.log('la somme des stylos et des cahiers ', +stylos + +cahiers); //8
//Number()
console.log('la somme des stylos et des cahiers ', Number(stylos) + Number(cahiers)); //8
//multiplication
var multiplication = x * y;
console.log(multiplication);

//soustraction
var soustraction = x - y;
console.log(soustraction);

//division 
var division = x / y;
console.log(division);

//modulo % => le résultat de x % y est le restede la division entière dex par y
console.log('le résultat de 9%4 est  ', 9 % 4);

//Pour vérifier si un nombre est divisible par 2
console.log('le résultat de a % b est  ', 6 % 2); // si j'obtiens 0 donc a est divisible par 2 sinon il n'est pas divisible par 2


//Exponentiation x ** y =>multiplie x par lui meme y fois

console.log(2 ** 2); //Output : 4 : on a multiplié 2 par lui-meme 2 fois
console.log(2 ** 3); //(2*2*2 , 3 fois)

console.log(4 ** (1 / 2)); // Output: 2
console.log(8 ** (1 / 3)); //Output : 2

//Incrémentation ++: augmenter une variable de 1

var compteur = 2;
//compteur = compteur + 1; // ( 2 + 1)
compteur++;
console.log('Mon compteur incrémenté: ', compteur); // 3

//Décrémentation --: diminuer une variable de 1

var compteur = 2;
//compteur = compteur - 1;
compteur--;
console.log('Mon compteur décrémenté: ', compteur); // 1
// L'incrémentation et la décrémentation ne peuvent etre appliquée qu'aux variables.

//console.log(5++); // Output : erreur

var counter = 1;
var x = ++counter;
console.log('var x = ++counter ', x); //Output 2:

var counter = 1;
var x = counter++;
console.log('var x = counter++', x) // Output :1


var compteur = 0;
compteur++;
++compteur;
console.log('Mon compteur est ', compteur);

// la priorité des opérateur ++/-- est plus élevée que la plupart des autres opérateurs 
var compteur = 1;
console.log(2 * ++compteur); //Output : 4

var compteur = 1;
console.log(2 * compteur++); // Output :2

//Une Ligne - Une Action
var compteur = 1;
console.log(2 * compteur);
compteur++;
//Priorités
console.log(2 + 2 * 3); // 8
console.log((2 + 2) * 3); // 12