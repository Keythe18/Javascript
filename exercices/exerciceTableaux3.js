/** 
 * Ecrire une fonction Javascript pour générer un tableau entre deux entiers : Intervalle
 *  d'une longueur de pas de 1.
 * affiche moi un tableau dans l'intervalle [3 , 9]
 * tab = [ 3,4,5,6,7,8,9];
 * 
 */

function interval(start, end) {
    if (start > end) {
        var arr = new Array(start - end + 1);
        for (var i = 0; i < arr.length; i++, start--) {
            arr[i] = start;
        }
        return arr;
    } else {
        var arr1 = new Array(end - start + 1);
        for (var j = 0; j < arr1.length; j++, start++) {
            arr1[j] = start;
        }
        return arr1;
    }
}
console.log(interval(3, 9));
console.log(interval(-3, 9));