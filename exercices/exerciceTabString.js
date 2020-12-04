/** 
 * Ecrire un programme Javascript pour supprimer tous les caractères 
 * d'une chaine donnée qui apparaissent plus d'une fois .accesAutorise
 * Exemple : abcabcgh => Output : gh
 * 152215 => 
 */

function removeDuplicate(str) {

    var arr_char = str.split('');
    var result = [];

    for (var i = 0; i < arr_char.length; i++) {
        if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i])) {
            //indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau
            console.log(str.indexOf(arr_char[i])); // 1- 6 ; 2- 7
            console.log(str.lastIndexOf(arr_char[i])); // 1-6 ; 2- 7
            result.push(arr_char[i]); // 1- g ; 2-h
        }
    }

    return result.join(''); // créer et renvoyer une chaine de caractères
}
console.log(removeDuplicate('abcabcgh'));
console.log(removeDuplicate('abcabc'));
console.log(removeDuplicate('javascript'));
console.log(removeDuplicate('string'));