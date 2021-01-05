/** 
 * Map : un type de collection qui contient des paires clés-valeurs.
 * les maps sont ordonnées => traverse les éléments dans leur ordre d'insertion
 * 
 * Syntaxe : 
 * 
 * var map = new Map([iterable]); 
 * itérable : optionnel 
 */
/***   Map.prototype.size => renvoie le nombre d'éléments dans la map *** */


var map = new Map();
map.set('cours1', 'CSS');
map.set('cours2', 'HTML');
map.set('cours3', 'ES5');
map.set('cours4', 'ES6');
console.log(map)
console.log(map.size); // Output :4
//console.log(map.clear()); => supprimer toutes les paires clé-valeurs 
console.log(map.keys()); // renvoyer un itérateur pour toutes les clés de la map
map.delete('cours1'); // => map.delete(key) : pour supprimer une entrée
console.log(map);
console.log(map.values()); // => renvoyer un itérateur pour les valeurs de la map
console.log(map.has('cours1')); // => map.has(clé) vérifier si la clé correspondante se trouve ou non dans la map
// map.forEach(callbackFn[])
/** 
 * WeakMap : c'est similaire à la map mais les clés doivent etre un objet
 * les clés ne sont pas énumérés => y'a pas de méthodes pour obtenir les clés
 * méthodes : delete(key), get(key), set(key,value), has(key)
 * 
 * Syntaxe : var weakmap = new WeakMap();
 */

let weakmap = new WeakMap();
let obj = {};
console.log(weakmap.set(obj, 'Bonjour'));
console.log(weakmap.has(obj));

var cours = new Map([
    ['1', 'CSS'],
    ['2', 'HTML'],
    ['3', 'ES5'],
    ['4', 'ES6']
]);
for (let c of cours.values()) {
    console.log(c);
}
for (let c of cours.entries()) {
    console.log(`${c[0]} : ${c[1]}`);
}


var iter = cours.values();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

var iter = cours.entries();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

var iter = cours.keys();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());