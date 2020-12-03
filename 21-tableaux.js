/** 
 * Arrays / Tableaux
 * 
 * Syntaxe: 
 * var arr = new Array();
 * var arr = [];
 * 
 */
var fournitures = ['stylo', 'cahier', 'souris', 'ecran'];
// les éléments du tableau sont numérotés en commençant par 0
console.log(fournitures[0]); // stylo
console.log(fournitures[1]); // cahier
//On peut remplacer un élément
fournitures[0] = 'PC';
console.log(fournitures);
//Ajouter un élément au tableau
fournitures[4] = 'clavier';
console.log(fournitures);
//récupérer la longueur d'un tableau
console.log(fournitures.length); // le nombre total d'éléments dans le tableau correspond à sa longueur

//Les tableaux peuvent stocker des éléments de tout type

var arr = ['clavier', { cours: 'JS' }, false, function() {
    console.log('un message');
}];

console.log(arr[1].cours); //Output : JS
arr[3](); //un message
/** 
 * pop() => une méthode qui supprime le dernier élément d'un tableau et retourne cet élément
 * push() => une méthode qui ajoute un ou plusieurs éléments à la fin d'un tableau et retourne
 * la nouvelle longueur d'un tableau
 * shift() => une méthode qui supprime le premier élément d'un tableau et le retourne
 * unshift() => une méthode qui  ajoute un ou plusieurs éléments au début du tableau et renvoie
 * la nouvelle longueur d'un tableau
 * sort() => permet de trier les éléments d'un tableau
 * reverse() => une méthode qui renverse les éléments d'un tableau 
 * join()
 * toString()
 * slice() => extraire une portion d'un tableau
 * join () => La méthode join() crée et renvoie une nouvelle chaîne de caractères
 *  en concaténant tous les éléments d'un tableau
 * toString() => La méthode toString() renvoie une chaine de caractères représentant
 *  le tableau spécifié et ses éléments.
 */

var msg = ['je ', 'suis ', 'un ', 'message '];
console.log(msg.join('')); // Output : je suis un message
console.log(msg.toString()); // Output : je ,suis ,un ,message


// Parcourir un tableau :