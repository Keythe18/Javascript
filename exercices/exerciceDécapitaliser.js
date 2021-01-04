/** 
 * Ecrire un programme Javascript pour décapitaliser la première lettre d'une chaine de caractère
 * 
 * Exemple : 
 * si ma variable boolenne est true => prendre la première lettre de la chaine et la mettre en minuscule et le reste
 * des lettres de la chaine en MAJ
 * mafn(Javascript , false) => javascript
 * mafn(Rouge , true) => rOUGE
 */

let decapitaliser = ([first, ...rest], upper = false) => first.toLowerCase() +
    (upper ? rest.join('').toUpperCase() : rest.join(''));

console.log(decapitaliser('Javascript', false));
console.log(decapitaliser('Rouge', true));