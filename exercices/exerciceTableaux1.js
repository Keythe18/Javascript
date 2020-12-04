/** 
 * Ecrire un programme javascript pour calculer la somme de chaque valeur d'indice individuel
 * à partir des deux tableaux.
 * 
 * Exemple : 
 *
 * arr1 = [5,3,6,3,4];
 * arr2 = [1,5,6,0,1,13];
 *Output=>[6,8,12,3,5,13] 
 */

function sommeTabs(arr1, arr2) {
    var resultat = [];
    var i = 0;
    var j = 0;

    if (arr1.length === 0) {
        return 'Le premier tableau est vide';
    }
    if (arr2.length === 0) {
        return 'Le deuxième tableau est vide';
    }
    while (i < arr1.length && i < arr2.length) {
        resultat.push(arr1[i] + arr2[i]);
        i++;
    }
    if (i === arr1.length) {
        for (j = i; j < arr2.length; j++) {
            resultat.push(arr2[j]);
        }
    } else {
        for (j = i; j < arr1.length; j++) {
            resultat.push(arr1[j]);
        }
    }
    return resultat;
}
console.log(sommeTabs([5, 3, 6, 3, 4], [1, 5, 6, 0, 1, 13]));