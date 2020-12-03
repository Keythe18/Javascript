/** 
 * Ecrire un programme Javascript pour trouver le plus grand des cinq chiffres
 * exemple: 9,-2,4,0,-3 => 9
 * Math.max() => renvoie le plus grand nombre d'une série de 0 ou plusieurs nombres
 */

var a = 9;
var b = -2;
var c = 4;
var d = 0;
var e = 3;

if (a > b && a > c && a > d && a > e) {
    console.log(a);
} else if (b > a && b > c && b > d && b > e) {
    console.log(b);
} else if (c > a && c > b && c > d && c > e) {
    console.log(b);
} else if (d > a && d > c && d > b && d > e) {
    console.log(d);
} else {
    console.log(e);
}