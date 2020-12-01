/** alert : affiche un message et attend que l'utilisateur appuie sur "OK"
 * prompt : affiche un message et un champs de saisie pour l'utilisateur et 2 boutons 
 * "Ok"/"Annuler"
 * confirm : afficher une questions 2 boutons "Ok"/"Annuler"
 */

//Exemple alert :

//alert("Bonjour");

//Syntaxe prompt :
/*var resultat = prompt(titre, [default]);*/

//Exemple:
/*var age = prompt('Quel age as-tu ?', 100);
alert(`t'as ${age} ans!`);*/

//Exemple Internet Explorer :

//var testIE = prompt("test Internet Explorer");

//var testIE = prompt("test Internet Explorer", ''); // Pour IE

//Confirm 
// Syntaxe
//var resultat = confirm(question);
//Exemple:

var isMonday = confirm('Est-il lundi ?');
alert(isMonday); // Output true si on appuie sur Ok sinon false si on appuie sur annuler