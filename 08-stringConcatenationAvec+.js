"use strict";


var str = 'Bonjour' + ' ' + 'tout le monde';
console.log(str);
/**
 * NB : si l'un des opérandes est une chaine de caractères, alors l'autre est également
 * converti en chaine de caractères.
 */
console.log('1' + 2); // Output :'12'
console.log(2 + '1'); // Output :'21'
console.log(2 + 1); // Output :3
console.log(2 + 2 + '1'); // Output :'41' c'est comme 4 + '1'

console.log('1' / 2); // Output 0.5 =>La division / convertit '1' en number
console.log('8' - '4'); // Output 4 =>La soustraction / convertit '8' et '4' en number