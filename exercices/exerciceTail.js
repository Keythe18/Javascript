/** 
 * Ecrire un programme Javascript pour trouver tous les éléments d'un tableau donné sauf le premier.
 * Retourner le tableau entier si la longueur du tableau est égale à 1.
 * 
 * tab[8] => [8]
 * tab[1,2,3,4] =>[2,3,4]
 */
const TAIL = arr => (arr.length > 1 ? arr.slice(1) : arr);

console.log(TAIL([1, 2, 3, 4]));
console.log(TAIL(['a', 'b']));
console.log(TAIL([25]));