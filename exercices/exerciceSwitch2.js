/** 
 * Date() permet de créer un nouvel objet Date
 * var date = new Date();
 * var jour = date.getDay();
 * 
 * Ecrire un programme Javascript pour détecter le jour de la semaine
 * et afficher le texte adapté selon des différents cas prévus.
 */
var date = new Date(); // créer une instance de date
var jour = date.getDay(); // on a récupéré le jour (Aujourd'hui)
switch (jour) {
    case 0:
        console.log('Dimanche');
        break;
    case 1:
        console.log('Lundi');
        break;
    case 2:
        console.log('Mardi');
        break;
    case 3:
        console.log('Mercredi');
        break;
    case 4:
        console.log('Jeudi');
        break;
    case 5:
        console.log('Vendredi');
        break;
    case 6:
        console.log('Samedi');
        break;
    default:
        console.log('Ce jour n\'existe pas');
}