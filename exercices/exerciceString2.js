/**
 * Ecrire un script pour cacher une adresse mail
 * exemple : user_user@gmail.com => Output: user...@gmail.com
 */
"user strict";

var user_mail = 'user_user@gmail.com';
// split() : c'est une méthode qui permet de diviser une chaine à partir d'un séparateur =>
//fournit un tableau de substring 
var splitted = user_mail.split('@');
console.log(splitted);
var partie1 = splitted[0];
console.log(partie1);
var mailAvg = partie1.length / 2;
console.log(partie1.length); //9
console.log(mailAvg); // 4.5
partie1 = partie1.substring(0, (partie1.length - mailAvg)); //user
console.log(partie1);
var partie2 = splitted[1];
console.log(partie2);
console.log(partie1 + '...@' + partie2);