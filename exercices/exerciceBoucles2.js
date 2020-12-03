/** 
 *  Ecrire un programme Javascript pour construire le modèle suivant : 
 
*  
* *  
* * *  
* * * *  
* * * * *

 */
var ch = '';
for (var x = 1; x <= 6; x++) {
    for (var y = 1; y < x; y++) {
        ch = ch + ('*');
    }
    console.log(ch);
    ch = '';
}