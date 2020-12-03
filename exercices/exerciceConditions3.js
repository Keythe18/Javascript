/** 
 * Ecrire une fonction pour vérifier si un nombre donné est un multiple de 3
 *  ou un multiple de 7
 */

function test37(a) {
    if (a % 3 == 0 || a % 7 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(test37(15)); //true
console.log(test37(8)); //false
console.log(test37(21)); // true