/** 
 * 
 */
//ES5 : gérer la situation où on veut passer plus de paramètres que prévu dans la fonction
function ajouter(a) {
    console.log(arguments.length); //Output : 4
    var total = 2 * a; // le double du premier param => a* 2 = 1*2 =2
    for (var i = 1; i < arguments.length; i++) {
        total += arguments[i]; // additionner le reste des param au double du premier => 2+2+3+4 =11
    }
    return total;
}

console.log(ajouter(1, 2, 3, 4)); //Output : 11
// ES6 : paramètre rest 
/** 
 * le paramètre rest est préfixé par (...)
 * Syntaxe : function nomFonc (a, b, ...args) {
 * }
 */

function ajouter1(a, ...valeurs) {
    let total = 2 * a;
    for (let i = 0; i < valeurs.length; i++) {
        total += valeurs[i];
    }
    return total;
}
console.log(' ES6 : paramètre rest : ', ajouter(1, 2, 3, 4)); //Output :

function maFonction(a, b, ...reste) {
    console.log(a);
    console.log(b);
    console.log(reste);
}
console.log(maFonction('un', 'deux', 'trois', 'quatre'));

//on peut utiliser les méthodes des tableaux sur le param rest
function trier(...lesArguments) {
    let argsTries = lesArguments.sort();
    return argsTries;
}
console.log(trier(9, 5, 3, 2, 0)); //Output: [0, 2, 3, 5, 9]

//=> on peut utiliser les méthodes des tableaux sur le param rest MAIS pas surl'objet arguments


//déstructuration => décomposition d'une structure complexeen parties plus simple
let couleurs = ["Beige", "Noir", "Bleu", "Vert", "Rouge"];
// tache de déstructuration
let [x, y, ...args] = couleurs;
console.log(x);
console.log(y);
console.log(args);


// Utilisation du paramètre rest dans une fonction dynamique
let num = new Function('...args', 'return args');
console.log(num(10, 20, 30)); // output: [10, 20, 30]