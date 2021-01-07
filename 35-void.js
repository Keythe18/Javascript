/** 
 * void => est utilisé comme le type de retour des fonctions qui ne renvoient aucune valeur
 * Syntaxe : void expression
 * 
 */

var a, b, c;
a = void(b = 2, c = 8);
console.log('a = ', a + 'b = ', b + 'c = ', c); // Output a = undefined , b = 2 , c = 8


// IIFE : utiliser void pour forcer le mot-clé function à etre traité comme une expression plutot comme une déclaration

void

function bonjour() {
    var message = function() {
        console.log("Bonjour")
    };
    message();
}();