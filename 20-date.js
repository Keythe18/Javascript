/** 
 * Date
 * le constructeur : Date(); => possède de nombreuses méthodes qui vont nous permettre
 * d'obtenir ou de définir une date.
 */

var date = new Date();
date.getDay();
console.log(date);

// Les méthodes getters (accesseurs) et setters (mutateurs) de l'objet date
console.log(date.getDay()); // renvoie le jour de la semaine sous forme de chiffre : 0 pour Dimanche
console.log(date.getDate()); // renvoie le jour du mois en chiffre pour la date spécifiée
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
/*Convertir une date au format local
toLocaleDateString() => renvoie la partie jours-mois-année d'une date formatée
toLocalTimeString() => renvoie la partie heure-minutes-secondes d'une date formatée
toLocalString() => renvoie la date complète formatée en fonction d'une locale et d'options
par exemple la Locale pour la France : fr-FR
les options : 
weekday => représente le jour de la semaine.les valeurs possible sont : narrow, short,long
day => représente le jour du mois.les valeurs possible sont : numeric , 2-digit
month : les valeurs possible sont : numeric , 2-digit
year : les valeurs possible sont : numeric , 2-digit
hour : les valeurs possible sont : numeric , 2-digit
minute : les valeurs possible sont : numeric , 2-digit
second : les valeurs possible sont : numeric , 2-digit
 */

var dateLocale = date.toLocaleString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});

console.log('La date est ', dateLocale);