"use strict";
/**
 * On utilise = pour faire l'affectation
 * L'affection = est aussi un opérateur qui a une très faible priorité 
 */
var x = 1 + 3 * 2;
console.log(x); // 7

//var x = y;
var x = 1;
var y = 2;
var z = 3 - (x = y + 1);
console.log(x); //Output : 3
console.log(z); //Output : 0

var a;
var b;
var c;

a = b = c = 2 + 2;
console.log(a); //Output : 4
console.log(b); //Output : 4
console.log(c); //Output : 4
// les affectations en chaine évaluent de droite à gauche.

//Lisibilité
c = 2 + 2;
b = c;
a = c;

//Modifier et assigner
//+= et *=

var nb = 2;
//nb = nb + 5;
nb += 5;
console.log(nb); // Output : 7
//nb = nb * 2;
nb *= 2;
console.log(nb); //Output: 14


var n = 2;
n *= 3 + 5;
console.log('le résultat de n est ', n); //Output: 16 (on commence de droite à gauche , n*=8;)