/** 
 * Opérateur if
 * opérateur conditionnel  ?
 * syntaxe : var resultat = condition ? valeur1 : valeur2;
 * tout d'abord la condition est évaluée, si elle est vraie la valeur1 est retournée
 * sinon la valeur2 est retournée 
 * 
 * test ? code à executer si true : code à executer si false
 */
var age = 15;
// L'instruction if évalue la condition entre les parenthèses , 
// si la condition est vraie, le code entre les accolades sera executé
if (age > 17) {
    console.log(`t'as le droit de passer ton permis de condruire`);
} else if (age >= 18) {
    console.log(`t'as le droit de passer ton permis de condruire`);
} else {
    console.log(`tu n'as pas le droit de passer ton permis de condruire`);
}

var accesAutorise;
//var age1 = prompt('Quel age as-tu?', '');
if (age >= 18) {
    accesAutorise = true;
} else {
    accesAutorise = false;
}
//alert(accesAutorise);
accesAutorise = (age >= 18) ? true : false;
// Multiple ?

var age = prompt('age ?', 18);
var message = (age < 2) ? `c'est un bébé` : (age == 20) ? 'hello' : (age > 200) ? 'mort' : 'hi';
alert(message);

// en if-else
var msg;
if (age < 2) {
    msg = `c'est un bébé`;
} else if (age == 20) {
    msg = 'hello';
} else if (age > 200) {
    msg = 'mort';
} else {
    msg = 'hi';
}

var civilite = (sexe = 'F') ? 'Madame' : 'Monsieur';