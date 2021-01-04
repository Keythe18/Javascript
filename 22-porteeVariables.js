/** 
 * Portée globale : la variable peut etre accessible à partir de n'importe quelle 
 * partie du code JS
 * Portée locale : la varible accessible à partir d'une fonction où elle est déclarée
 */

/*var maVariable = "Je suis une variable globale"; //varible d'une portée globale

function maFonction() {
    var maVariable = "je suis une variable locale "; // variable d'une portée locale
    console.log("Premier output " + maVariable); //  Output : je suis une variable locale
}
console.log("Deuxième output " + maVariable); // Output : Je suis une variable globale
maFonction();*/
/** 
 * Portée du bloc
 */

function maFonction2() {
    var x = 1;
    console.log("la valeur de x dans la fonction : " + x); {
        console.log("Début du bloc");
        let x = 2;
        console.log("valeur de x : " + x);
    }
    console.log("la valeur de x dans la fonction : " + x);
}
//maFonction2();


/*for (var i = 0; i < 10; i++) {
    console.log("dans la boucle avec var : " + i); // 0 => 9
}
console.log("en dehors de la boucle avec var : " + i); //Output: 10 (normalement on est censé avoir undefined)*/
for (let i = 0; i < 10; i++) {
    //  console.log("dans la boucle avec let : " + i); // 0 => 9
}
//console.log("en dehors de la boucle avec let : " + i); // Output : undefined)

/** let vs var */
/*var x = 10;
var x = 2600;
console.log(x); // Output : 2600*/
let x = 10;
//let x = 2066;
//console.log(x); // Output : erreur => sécurité au niveau des blocs

// une variable déclarée avec le mot-clé let se voit attribuer la portée du bloc
/**  let : blocs multiples*/
let i = 15;
for (let i = 1; i <= 5; i++) {
    // à l'intérieur de la boucle for , la valeur de i commence à 1 en allant jusqu'à 5
    //console.log("la valeur de i à l'intérieur de la boucle: ", i); // 1=>5
}
// à l'exterieur de la boucle for , la valeur de i est 15
//console.log("la valeur de i à l'extérieur de la boucle: ", i); //15
if (i == 15) {
    // à l'intérieur de if , la valeur de i est 1235
    let i = 1235;
    //console.log("la valeur de i dans le bloc if : ", i); // 1235
}
//console.log(i); // 15

/** CONST 
 * les constantes ne peuvent pas etre réattribuées une valeur
 * les constantes ne peuvent pas etre redéclarées
 * Une constante nécessite un initialiseur => doit etre initialisés
 * une convention : les constantes sont écrites en MAJUSCULE
 * 
 */
const MA_CONSTANTE = 45;
//MA_CONSTANTE = 54;
console.log(MA_CONSTANTE); // erreur 

//1er exemple
const CAR = {
    marque: 'Peugeot'
};
//on a changer la valeur d'une proprieté
CAR.marque = "Citroen";
console.log("1er exemple", CAR); // Output CAR.marque = "Citroen";
//2eme exemple
/*const VOITURE = {
    marque: 'Peugeot'
};
// on a changer la référence de l'objet
VOITURE = {
    marque: 'Citroen'
};
console.log("2eme exemple", VOITURE); // Output  : erreur*/

//3éme exemple
/*const CAR = {
    marque: 'Peugeot'
};
// geler l'objet => rendre l'objet non modifiable
Object.freeze(CAR);
CAR.marque = "Citroen";
console.log("1er exemple", CAR); // Output CAR.marque = "Citroen";
*/


const TAB_NUM = [1, 2, 3, 4];
TAB_NUM.push(5);
console.log('TAB_NUM : ', TAB_NUM); //Output : +5

const TAB_NUMS = [11, 12, 13, 14];
console.log('TAB_NUMS : ', TAB_NUMS); //Output:[11, 12, 13, 14]
//réattribuer  TAB_NUMS
//TAB_NUMS = [111, 112, 113, 114];
//console.log('TAB_NUMS Après changement: ', TAB_NUMS); //Output : erreu
/** 
 * Var et hoisting : utilisation des variables avant qu'elles soient déclarées
 */
// une variable cours placée au top
//var cours = undefined;
// utilisation de la variable avant de la déclarer
//console.log("1ere utilisation", cours);
//var cours = 'ES6'; // déclarer la variable l'initialiser
//console.log("2eme utilisation", cours);
/** var , block scope */
for (var j = 1; j <= 10; j++) {
    console.log(j); //
}
console.log("affichage de j après la boucle : " + j); //