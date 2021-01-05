/** 
 * Ecrire un programme Javascript pour retourner la valeur minimum-maximum d'un tableau, après avoir appliqué 
 * la fonction fournie par défaut pour définir la regle de comparaison.
 * 
 * 
 * maFn([1,2,3]) => 1
 * maFn([10,20,30], ...) => 30
 *
 * 
 * (a,b) => a-b ou bien b-a
 *  */

const val = (arr, comparator = (a, b) => a - b) => arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));

console.log(val([1, 2, 3])); // Output : 1
console.log(val([10, 20, 30], (a, b) => b - a)); // Output : 30
console.log(val([{ nom: 'aa', age: 16 }, { nom: 'bb', age: 20 }, { nom: 'cc', age: 19 }], (a, b) => a.age - b.age));
//Output: { nom: 'aa', age: 16 }