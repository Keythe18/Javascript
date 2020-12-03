/**Ecrire un programme Javascript pour calculer la somme des deux entiers donnés.
 * Si les valeurs sont identiques, il va renvoyer le triple de leur somme.
 */

function clacSumTriple(x, y) {
    if (x == y) {
        return 3 * (x + y);
    } else {
        return (x + y);
    }
}
console.log(clacSumTriple(10, 10));
console.log(clacSumTriple(10, 90));