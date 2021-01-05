/** 
 * IIFE => Expression de Fonction Immédiatement Invoquée
 * => c'une fonction executée qu'elle est définie
 * => fonction anonyme auto-executée
 * 2 parties principales : 
 *    1- la fonction anonyme ayant une portée lexixale
 *    2- crée la IIFE par laquelle js va interpréter directement la fonction
 * 
 * Syntaxe :  
 * (function() {
 * instructions ... })();
 * ou bien : 
 * (() => { instructions })();
 * 
 * La IIFE peut avoir un nom : 
 * (function nomIIFE(){
 * /...../
 * })();
 */

function sum(a, b) {
    return a + b;
}
console.log(window.sum)

var counter = 15;
console.log(window.counter);

/*let sum = (function(a, b) {
    return a + b;
});*/ // la variable sum est réferencée comme une fonction anonyme qui ajoute deux arguments

/** 
 * Si on déclare plusieurs variables et fonctions globales => le moteur JS se verra attribuer de la mémoire pour 
 * celles-ci jusqu'à ce que l'objet global perde de la portée.
 * => Par conséquent le script peut utiliser la mémoire de manière inefficace. De plus, le fait de disposer de variables
 * et de fonctions globales risque de provoquer des collisions de noms.
 * Donc la meilleure façon d'empecher les fonctions et les variables d'allouer de la mémoire à l'objet est d'utiliser
 * les IIFE.
 */
// executer la fonction immédiatement après sa création
let somme = (function(a, b) {
    return a + b;
})(8, 10); //  la variable somme contient le résultat de l'appel de la fonction
console.log(somme);

// IIFE => car la fonction est créée comme une expression et executée immédiatement
(function(a, b) {
    return a + b;
})(8, 10);
// En plaçant les fonctions et les variables à l'intérieur d'une Expression de Fonction Immédiatement Invoquée, 
// on peut éviter de les polluer à l'objet global 
(function() {
    var counter = 0;

    function sum(a, b) {
        return a + b;
    }
    console.log(sum(60, 40));
}());
/**
 * IIFE commence par un point-virgule(;)
 * 
 * ;(function() {
 * /....../
 * })();
 * 
 * fichier1.js 
 * (function() {
 * /....../
 * })()
 * 
 * fichier2.js
 * (function() {
 * /....../
 * })()
 
 * => le point-virgule au début : est utilisé pour terminer la déclaration dans le cas où deux fichiers ou plusieurs
 * fichiers Javascript sont concaténer aveuglement dans un seul fichier.
 *  si on utilise un outil de regroupement de code pour concaténer le code des deux fichiers en un seul sans le (;)
 * le code Javascript concaténé entrainera une erreur de syntaxe.
 */