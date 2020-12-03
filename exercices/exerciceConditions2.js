/** 
 * Ecrire une fonction Javascript pour vérifier deux nombres donnés.
 * elle retourne true si l'un des nombres est 100 ou si leur somme est 100
 * x = 100 , y = 1 => true
 * x = 60 , y = 40 => true
 * x = 99 , y = 30 => false
 */

function test100(x, y) {
    return ((x == 100 || y == 100) || (x + y == 100));
}
console.log(test100(50, 50)); //true
console.log(test100(50, 100)); //true
console.log(test100(50, 25)); //false
console.log(test100(12, 88)); //true