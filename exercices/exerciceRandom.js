/** 
 * Ecrire un javascript pour obtenir un nombre aléatoire dans un interval donné.
 * 
 * nomFn(0,1) => 0.369
 */

let random = (min, max) => Math.random() * (max - min) + min;

console.log(random(100, 200));
console.log(random(-9, -2));
console.log(random(0, 1));