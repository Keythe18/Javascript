/** 
 * ecrire un programme Javascript pour trouver tous les éléments d'un tableau 
 * sauf le premier
 * retourner tout le tableau si sa longueur est 1
 * Par expl: tab[55,93,84,56,52] => Output :  [93,84,56,52]
 * tab[3] => Output :  [3]
 */

/**********Première Solution************ */
var tab = function(arr) {
    return arr.length > 1 ? arr.slice(1) : arr;
}
console.log(tab([55, 93, 84, 56, 52]));
console.log(tab([3]));

/**********Deuxième Solution************ */
function supprimerElement(tab) {
    for (var i = 0; i <= tab.length; i++) {
        if (tab.length > 1) {
            return tab.slice(1);
        } else {
            return tab;
        }
    }

}
console.log(supprimerElement([55, 93, 84, 56, 52]));
console.log(supprimerElement([3]));