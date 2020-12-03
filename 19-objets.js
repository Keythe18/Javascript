/** 
 * Un objet est un conteneur qui va posséder un ensemble de proprietés et de méthodes
 * qu'il est cohérent de regrouper.
 * Un objet peut etre créé avec {...}
 * 
 * La syntaxe : 
 * var user = new Objet(); // constructeur
 * var user = {}; // literal
 */

var user = { // Objet
    firstName: 'Pierre', // clé : firstName et valeur : Pierre
    age: 35, // clé : age et valeur : 35
    'is adult': true
};
//les proprietés d'un objet sont accessibles en utilisant la notation par point

console.log(user.firstName);
console.log(user.age);

//console.log(user.isAdult);

delete user.isAdult;
//console.log(user.is adult);
//Alternative notation par crochets
console.log(user['is adult']);

/*
Parcourir les clés d'un objet en utilisant la boucle for..in
Syntaxe : 
for(key in object) {

}
*/

for (var u in user) {
    console.log(u); // clés 
    console.log(user[u]); // les valeurs
}