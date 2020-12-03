/** 
 * Ecrire un programme Javascript qui itère les entiers de 1 à 100. 
 * Mais pour les multiples de 3 affiche 'trois' au lieu du nombre et pour les 
 * multiples de 5 affiche 'cinq'
 * si un nombre multiple de 5 et 3 'troiscinq'
 */


for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + ' troiscinq');
    } else if (i % 3 === 0) {
        console.log(i + ' trois');
    } else if (i % 5 === 0) {
        console.log(i + ' cinq');
    } else {
        console.log(i);
    }
}