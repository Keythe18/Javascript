/** 
 * Set => une collection similaire à des tableaux : ne contient pas des doublons
 * prend en charge les valeurs primitives et les références d'objets
 * les Sets sont ordonnés => les éléments sont itérés dans leur ordre d'insertion.
 * 
 * Syntaxe : var set = new Set ("val1","val2","val3")

 */
// les valeurs du Set sont uniques
let couleurs = new Set(["Violet", "Bleu", "Rouge", "Vert", "Rouge"]);
console.log(couleurs);
// Proprieté Set.size => renvoie le nombre d'éléments dans l'objet Set
console.log(couleurs.size); //Output : 4
// Set.prototype.add(valeur) =>ajouter un nouvel élément
couleurs.add("Rose");
couleurs.add("Blanc");
couleurs.add("Noir");
console.log(couleurs);
console.log(couleurs.size); // output : 7
//Set.prototype.clear : efface tous les objets de Set
//couleurs.clear();
console.log(couleurs.size);
//Set.prototype.delete(valeur) => supprime la valeur passée correspondante à l'objet set
couleurs.delete("Violet");
console.log(couleurs);
console.log(couleurs.size); // output: 6
//Set.prototype.entries() => renvoie l'objet Set qui contient un tableau de valeur pou chaque élément

var entr = couleurs.entries();
for (let i = 0; i < couleurs.size; i++) {
    console.log(entr.next().value);
}
//Set.prototype.forEach(callbackFn[,Args]) => execute la fonction callback pour chaque element
function maFn(values) {
    console.log(values);
}
couleurs.forEach(maFn);
//Set.prototype.has(value) => verifie l'existance d'une valeur dans le Set
console.log(couleurs.has("Violet")); // Output : false
console.log(couleurs.has("Rouge")); // Output : true
//Set.prototype.values() =>
var valeur = couleurs.values();
console.log(valeur.next().value);
console.log(valeur.next().value);
console.log(valeur.next().value);
console.log(valeur.next().value);
/****************************************************************************** */
/** 
 * WeakSet : sert à stocker une collection d'objets ; pas de stockage de valeurs en double
 * les WeakSets ne peuvent pas etre itérés
 * 
 * add(value), delete(value), has(value)
 */

let weakset = new WeakSet();
let objet = { message: "Bonjour" };
weakset.add(objet);
console.log(weakset.has(objet)); //  Output : true
weakset.delete(objet);
console.log(weakset.has(objet)); // Output : false
/******************************************************************** */
/** 
 * Itérateurs  : permet d'accéder à une collection d'objets un par un.
 * les itérateurs sont les objets avec la méthode next()
 */

var keys = couleurs.keys();
var entries = couleurs.entries();
var values = couleurs.values();

console.log(keys.next());
console.log(entries.next());
console.log(values.next());