/** 
 * Switch : peut remplacer de multiples controles
 * Syntaxe : 
 * switch (key) {
     case value:
         
         break;
     case value2:
         
         break;
     case valuen:
         
         break;
 
     default: // equivalent du else
         break;
 }
 */

var x = 1;
switch (x) {
    case 0:
        console.log('x est un zero');
        break;
    case 5:
        console.log('x est 1'); // x === 1 : strict égalité
        break;
    case 2:
        console.log('x est 2');
        break;
    default:
        console.log(`x n'existe pas`);
}

//Exemple 2

var x = prompt('Entrez une valeur ');
switch (x) {
    case '0':
    case '1':
        alert('zero ou un');
        break;
    case '2':
        alert('deux');
        break;
    case 3:
        alert('pas possible'); // '3' !== 3 (vérification d'une égalité stricte)
        break;
    default:
        alert(`x n'existe pas`);
}