/** 
 * Ecrire un programme JAvascript pour diviser un tableau donné d'entiers positifs en deux 
 * parties.
 * le premier élement va à la première partie , le deuxièeme va à la deuxième partie 
 * et le troisième va à la première partie ... 
 * ensuite on va calculer la somme des deux parties et la stocker dans un tableau de taille 2.
 */

function sumTab(arr) {
    var resultat = [0, 0];
    for (var i = 0; i < arr.length; i++) {
        if (i % 2) {
            resultat[1] += arr[i];
        } else {
            resultat[0] += arr[i];
        }

    }
    return resultat;
}
console.log(sumTab([3, 2, 5, 8, 1, 4]));