/** 
 * Ecrire un programme Javascript pour trouver les numéros de 3 chiffres de Armstrong.
 * Un nombre Armstrong de trois chiffre est un nombre entier tel que la somme des cube de 
 * ses chiffres est égale eu nombre lui-meme.
 * 
 * 1**3+5**3+3**3 = 153
 */

function nombreArmstrong() {
    for (var i = 1; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            for (var k = 0; k < 10; k++) {
                var puissance = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
                var res = (i * 100 + j * 10 + k);
                if (puissance == res) {
                    console.log(puissance);
                }
            }
        }
    }
}
nombreArmstrong();
/**
 * Output : 
 * 153
   370
   371
   407
 */