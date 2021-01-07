/** 
 * startsWith() : une méthode sensible à la casse qui détermine si la chaine commence par les caractères spécifiés 
 * ou non. => renvoie un boolean 
 * 
 * Syntaxe : string.startsWith(searchValue, startPosition)
 * searchValue : requis , il contient les paramètres à rechercher au début de la chaine
 * startPosition : facultatif , sa valeur par defaut : 0 . Il spécifie la position dans la chaine de caractère 
 * à laquelle la recherche doit commencer
 */

var str = "Je suis une chaine de caractère";
console.log(str.startsWith('je', 0)); // false : sensible à la casse
console.log(str.startsWith('Je', 0)); // true

/** 
 * endsWith() : une méthode sensible à la casse qui détermine si la chaine se termine par les caractères spécifiés 
 *  Syntaxe :  string.endsWith(searchValue, length)
 * searchValue : requis, il contient les paramètres à rechercher à la fin de la chaine
 * length : facultatif , c'est la longueur de la chaine qui sera recherchée
 */
console.log(str.endsWith('une', 11)); // true
console.log(str.endsWith('Une', 11)); // false

/** 
 * includes() : une méthode sensible à la casse qui détermine si une chaine contient les caractères spécifiés ou non
 * Syntaxe : string.includes(searchValue, start)
 * searchValue : requis , la sous-chaine à rechercher 
 * start : facultatif,  représente la postion ou commencer ; valeur par défaut 0
 */

console.log(str.includes('suis', 1)); // true 
console.log(str.includes('suis', 11)); // false

/**  
 * repeat() => construit une nouvelle chaine qui contient un nombre déterminé de copies de la chaine 
 * sur laquelle cette méthode a été appelée.
 * 
 * Syntaxe : string.repeat(count)
 * count : obligatoire , indique le nombre de fois qu'il faut répéter la chaine donnée. [0 , infini]
 */

console.log(str.repeat(3)); //

/** String Interpolation */

var maVariable = 'tout';
var maVariable2 = ' le monde ';
console.log(`Bonjour , ${maVariable}  ${maVariable2} ! `);