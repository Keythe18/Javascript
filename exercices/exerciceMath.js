/**
 * Ecrire un programme script pour calculer l'aire d'un triangle
 * dont les trois cotés on une longueur de 5,6,7
 * 
 * calculer le périmètre (a+b+c)/2
 * la formule de Héron
 */

var cote1 = 5;
var cote2 = 6;
var cote3 = 7;

var perimetre = (cote1 + cote2 + cote3) / 2;
var aire = Math.sqrt(perimetre * ((perimetre - cote1) * (perimetre - cote2) * (perimetre - cote3)));
alert(aire); // Output : 14.696938456699069