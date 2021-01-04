/** 
 * Ecrire un programme Javascript pour compter les occurences d'une valeur dans un tableau
 * 
 * [2,5,3,5,9,5,8] , compte les occurences de 5 => 3 
 */

//la méthode reduce() est un accumulateur qui traite chaque valeur d'une liste(de gauche à droite)  afin de la réduire 
// en une seule valeur
const occurences = (arr, val) => arr.reduce((a, v) => (v == val ? a + 1 : a), 0);
console.log(occurences([2, 5, 3, 5, 9, 5, 8], 5)); // 3