/** 
 * Une fonction : un bloc de code conçu pour éffectuer des taches particulières
 */

function multiplication(x, y) {
    let resultat = x * y;
}
multiplication(5, 3); //15


function aff(num1, num2 = 10) {
    console.log('num1 = ', num1);
    console.log('num2 = ', num2);
}
aff(35);

function aff(num1, num2 = 10) {
    console.log('num1 = ', num1);
    console.log('num2 = ', num2);
}
aff(40, 65); //la valeur de num2 sera écrasée


function ajouter(a, b) {
    return a + b; // doit etre toujours a la fin de la fonction
}
let somme = ajouter(5, 10);
console.log('la somme est ', somme);

/** 
 * Une fonction anonyme peut etre définie comme une fonction sans nom
 * Syntaxe : let maVariable = function([arguments]) {
 * }
 */

let bonjour = function() {
    console.log('bonjour');
    console.log('Je suis une fonction anonyme');
}
bonjour();
// utiliser une fonction anonyme comme argument pour une autre fonction (setTimeout())
/*setTimeout(function() {
    console.log('Bonjour setTimeOut');
}, 2000);*/
// fonction anonyme parametrée
let anonyme = function(a, b) {
    return a + b;
}

function sum() {
    let resultat;
    resultat = anonyme(15, 20);
    console.log('la somme est : ' + resultat);
}
sum();

// hoisting

function couleur(couleur) {
    console.log("la couleur est : " + couleur); //
}
couleur("Rouge");
// on va faire appel à la fonction avant de la déclarer
couleur2("Noire");

function couleur2(couleur2) {
    console.log("la couleur est : " + couleur2); //
}

//couleur3();
let couleur3 = function() {
        console.log("la couleur est : Orange "); //erreur => les expressions de fonction ne peuvent pas etre hisséés
    }
    // Function()
    /** 
     * Syntaxe : 
     * let maVariable = new Function(arg1, arg2,..., 'corps de la fonction')
     * chaque argument doit etre une chaine de caractère
     */
    // créer une fonction qui prend deux arguments a et b et renvoie le résultat de la soustraction des deux arguments
let soustraction = new Function('a', 'b', 'return a-b');
// appel de la fonction
console.log("le résultat de la soustraction est : ", soustraction(10, 5));
/** 
 * Si une fonction s'appelle elle-meme elle est alors une fonction récursive
 */

function factoriel(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factoriel(num - 1);
    }
}
console.log(factoriel(1)); // 1 = factoriel de 1
console.log(factoriel(3)); // 6
console.log(factoriel(5)); // 120

/** 
 * Fonction fléchées (Arrow functions , fonctions Lambda)
 * 
 * les fonctions fléchées sont des fonctions anonymes (sans non et non liés à un identifiant)
 * 
 * Syntaxe : let nomFonction  = (arg1, arg2) => {
 * corps de la fonctions}
 */

// expression de fonction
var maFonction1 = function aff() {
        console.log(`c'est une expression de fonction`);
    }
    // fonction anonyme
var maFonction2 = function() {
        console.log(`c'est une fonction anonyme`);
    }
    // fonction fléchée
var maFonction3 = () => {
    console.log(`c'est une fonction fléchée `);
}
maFonction1();
maFonction2();
maFonction3();
// parenthèses facultatives pour un paramètre unique

var num = x => {
    console.log(x);
}
num(654);
// accolades facultatives pour la déclaration unique et les parenthèses vide si aucun paramètre n'est requis
var afficher = () => console.log('Bonjour fonction fléchée');
afficher();

// fonctions fléchée avec paramètre
let affichage = (a, b, c) => {
    console.log(a + " " + b + " " + c);
}
affichage(50, 6, 87);

// fonction fléchée avec paramètre par défaut
let affichage2 = (a, b = 98) => {
    console.log(a + " " + b);
}
affichage2(50);

let affichage3 = (a, b = 98) => {
    console.log(a + " " + b);
}
affichage3(50, 698);

// fonction fléchée avec param rest

let affichage4 = (a, ...args) => {
    console.log(a + " " + args);
}
affichage4(50, 6, 87, 65, 84, 23, 20);

//Exemple ES5
function division(val) {
    return val / 2;

}
console.log(division(9)); // 4.5

//Exemple ES6 
let division1 = val => val / 2;
console.log(division1(9));
/**
 * Si on n'utilise pas les accolades on n'a pas besoin du mot-clé return
 * Si on utilise les accolades meme sur une déclaration unique on doit utiliser le mot-clé return
 */
// Exemple sans le mot-clé return
let division2 = valeur => {
        valeur / 2;
    } // Output : undefined
console.log(division2(10)); // Output : undefined
// Exemple avec le mot-clé return
let division3 = valeur => {
    return valeur / 2;
}
console.log(division3(10)); // 5