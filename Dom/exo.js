/** 

 * Ecrire un programme Javascript pour décapitaliser la première lettre d'une chaine de caractère

 * Exemple : 

 * si ma variable boolenne est true => prendre la première lettre de la chaine et la mettre en minuscule et le reste
 * des lettres de la chaine en MAJ

 * mafn(Javascript , false) => javascript
 * mafn(Rouge , true) => rOUGE

 */

/*
var test = "CoUcOu";

let mafn = function(str, x) {
    if (x)
        res = str[0].toLowerCase() + str.substring(1).toUpperCase();
    else
        res = str.toLowerCase();
    return res;
}

console.log(mafn(test, false)); */


/* 

 * Ecrire un programme Javascript pour trouver tous les éléments d'un tableau donné sauf le premier.
 * Retourner le tableau entier si la longueur du tableau est égale à 1.

 * tab[8] => [8]
 * tab[1,2,3,4] =>[2,3,4]

 */
/*
var tab = [1, 2, 3, 4];

tab.length > 1 ? tab.shift() : tab

console.log(tab);



var tab2 = [2];

tab2.length > 1 ? tab2.shift() : tab2

console.log(tab2);*/


/** 

 * Ecrire un javascript pour obtenir un nombre aléatoire dans un interval donné.

 * 

 * nomFn(0,1) => 0.369

 */

//let nomFn = function(max, min){
///   return (Math.random() * (max - min));
//}
/*
let nomFn = function(min, max){
    return (Math.random() * (max - min));
}

console.log(nomFn(0, 1))
console.log(nomFn(0, 100))*/

 

// Ecrire un programme Javascript pour compter les occurences d'une valeur dans un tableau

// [2,5,3,5,9,5,8] , compte les occurences de 5 => 3

//var tab = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 5]

/*let count = function(nb) {
    var x = 0;
    for (var i = 0; i < tab.length; i++){
        console.log(tab[i]);
        if (tab[i] = nb){
            ++x;
        }
    }
    return x;
}*/

//var freq = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

//console.log(freq([1, 1, 2, 1, 2, 3], 2));


/** 
 * Ecrire un programme Javascript pour obtenir un tableau trié d'objets classés par proprietés et ordre (ASC ou DESC) 
 */


//const utilisateurs = [{​​ name: 'Dhia', age: 48 }​​, {​​ name: 'Alexis', age: 36 }​​, {​​ name: 'Alexis', age: 19 }​​];


//console.log(maFn(utilisateurs, ['nom', 'age'], ['asc', 'desc']));
//console.log(maFn(utilisateurs, ['nom', 'age']));

 
//Ecrire un programme JS pour créer un tableau de paires clé-valeur à partir d'un objet donné
 
//{​​x : 1 , y: 2}​​ => [['x',1],['y',2]]


/** 

 * Ecrire un programme Javascript pour supprimer d'un objet les paires clé-valeurs correspondant au clé donné
 *
    console.log(fn({​​ x: 1, y: 2 }​​ , ['y'])); => {​​"x" : 1}​​
    console.log(fn({​​ x: 1, y: 2, z: 3 }​​ , ['z'])); => {​​'x': 1, 'y': 2}​​
 * 
 */

function dis(val)
{
document.getElementById("edu").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("edu").value
let y = eval(x)
document.getElementById("edu").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("edu").value = ""
}