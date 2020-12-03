/** 
 * Les boucles sont un moyen de répéter le meme code plusieurs fois
 * While : 
 * Syntaxe :
 * while(condition) {
 *    //instructions 
 * }
 * 
 * do .. while  
   Syntaxe : 
   do {
       //instructions
   } while(condition)
 Pour le do..while il execute les instructions dans le corps de la boucle au moins une fois 
 quelle que soit la condition.
 */
//var i = 4; // dans ce cas la condition n'est pas vrai => pas d'execution du code
/*while (i < 4) {
    alert(i);
    i++;
}

var i = 0; // dans ce cas la condition est vérifiée => le code est exécuté
while (i < 4) {
    alert(i);
    i++;
}

while (i) { // while (i!=0)
    alert(i);
    i--;
}

//do ..while
do {
    alert(i);
    i++;
}
while (i < 4);*/


var somme = 0;
while (true) {
    var valeur = +prompt('Entrez un nombre ', '');
    if (!valeur) break;
    /**
     *  la directive break est activée si l'utilisateur saisit une ligne vide ou annule la saisie
     * Elle arrete immédiatement la boucle en passant le controle à la première ligne après 
     * la boucle (alert('La somme est ' + somme);)
     */
    somme += valeur;
}
alert('La somme est ' + somme);