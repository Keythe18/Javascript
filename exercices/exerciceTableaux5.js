/** 
 * Ecrire une fonction JS qui retourne la valeur la plus proche de 0.
 * 
 * [7,3,5,-3,8] => on -3 et 3 => on retourne la valeur positive la plus proche de 0 : 3
 * [7,3,5,1,8] => 1
 * [7, -2, 3, -1, 5, 6, 0] => -1 : la plus proche de 0 et non pas 0
 */

function plusProche(tab) {
    var closest = 0;
    for (var i = 0; i < tab.length; i++) {
        if (closest === 0) {
            closest = tab[i];
        } else if (tab[i] > 0 && tab[i] <= Math.abs(closest)) {
            closest = tab[i];
        } else if (tab[i] < 0 && -tab[i] < Math.abs(closest)) {
            closest = tab[i];
        }
    }
    return closest;
}
console.log(plusProche([7, -2, 3, -1, 5, 6, 0])); // -1