/** 
 * for 
 * Syntaxe : 
 * for (begin ; condition ; step) {
 *  //instructions
 * }
 */
"use strict";
/*for (var i = 0; i < 4; i++) { // Output : 0 , 1 , 2 ,3
    // console.log(i);
}*/
/** 
 * begin : i = 0 => s'execute une fois à l'entrée de la boucle
 * condition : i < 4 => est vérifiée avant chaque itération de la boucle. une fois cette condition
 * est fausse la boucle s'arrete
 * body : console.log(i) => s'execute encore et encore tant que la conditon est vraie
 * step : i++ => s'execute après le body à chaque itération
 */
//Sauter des parties
//var i = 0;
/*for (; i < 4; i++) { // =>  comme on a déja déclarer notre compteur (i) on peut supprimer le begin
    console.log(i);
}
for (; i < 4;) { // =>  while(i<4)
    console.log(i);
}*/
/*for (;;) { // boucle infinie
    console.log(i);
}*/
// directive : continue => n'arrete pas toute la boucle , au lieu de ça elle arrete l'itération
// en cours et force la boucle à en démarrer une nouvelle.

/*for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    /**
     * pour les valeurs paires de i, la directive continue arrete l'execution du body 
     * et passe le controle à l'itération suivante de for
    
console.log(i); // n'est appelé que pour les valeurs impaires
}
 */
//Cas des boucles imbriqués :
sort:
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var saisie = prompt(`Les valeurs (${i} ,${j})`, '');
            //si chaine vide ou annulation => break
            if (!saisie) break sort;
        }
    }
alert('OK!');
/**Etiquette : identifiant  avec un point avant une boucle
 * Syntaxe : 
 * labelName : for( ... ) {
 * }
 * */