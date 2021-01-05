/** 
 * Un tableau = un objet utilisé pour stocker les collections dans un ordre chronologique
 * 
 * var nom_tab = new Array(); // en utlisant le mot-clé new 
 * var nom_tab = [val1, val2,val3, ...]
 * 
 * var nom_tab;
 * nom_tab = [val1, val2,val3, ...];
 * 
 * la longueur maximale autorisée = 4.294.967.295
 */
let num;
num = [2, 5, 9, 58, 6];
//console.log(num[0]); // 2
//console.log(num[1]); // 5
let num1 = new Array(6); // 6 : la taille du tableau
for (let i = 0; i < num1.length; i++) {
    num1[i] = i * 6;
    console.log(num1[i]);
} //

let num2 = new Array(1, 2, 3, 4, 5);
for (let i = 0; i < num2.length; i++) {
    //console.log(num2[i]); // Output : 1 2 3 4 5
}

var tab_multi = [
    [2, 3, 4],
    [5, 9, 3]
];
//console.log(tab_multi[0][0]); //2
//console.log(tab_multi[0][1]); //3
//console.log(tab_multi[1][1]); //9

var couleurs = new Array("Violet", "Bleu", "Rouge", "Vert");

function afficher(couleurs) {
    for (let i = 0; i < couleurs.length; i++) {
        console.log(couleurs[i]);
    }
}
afficher(couleurs);


function aff() {
    return new Array("Violet", "Bleu", "Rouge", "Vert", "Jaune");
}
let couleur = aff();
for (let i in couleur) {
    //console.log(couleur[i]);
}

/***************Méthodes des tableaux****************** */
/** 
 * Array.from() => créer un nouveau tableau à partir d'un objet de type tableau.
 * elle convertit les valeurs de type tableau et les valeurs itérables(set, map) en tableau
 * 
 * Syntaxe : Array.from(object, mapFunction, thisValue)
 * Object => nécessaire , c'est l'objet à convertir en tableau
 * mapFunction => optionnel , c'est la fonction map a appelé sur chaue élément du tableau
 * thisValue => optionnel , c'est la valeur à utiliser lors de l'execution de la mapFunction
 */
let nomLangage = Array.from('Javascript');
console.log(nomLangage);

/** 
 * Array.of() => avec cette méthode on peut créer un tableau avec une seule valeur numérique => ça va créer un tableau 
 * avec cette seule valeur au lieu de créer un tableau de cette taille (voir l'exemple en haut : comparaison avec ES5)
 */

let tab = Array.of(32);
console.log(tab);
console.log(" La taille du tableau", tab.length);

/** 
 * Array.prototype.copyWithin() => copier une partie d'un tableau à un endroit différent dans le meme tableau
 * elle renvoie le tableau modifié sans la modification de sa longueur
 * Remarque : au lieu d'ajouter d'autres éléments au tableau, cette méthode ne fait qu'écraser les éléments 
 * du tableau original
 * 
 * Syntaxe : 
 * Array.copyWithin(target,start,end)
 * target : nécessaire ,c'est la position de lindex pour copier
 * start: optionnel, fait la référence à la position de l'index pour commencer à copier les éléments
 * sa valeur par défaut est 0, si sa valeur est négative son début sera compté à partir de la fin
 * end: optionnel, fait la référence à la position de l'index pour arreter à copier les éléments
 * sa valeur par défaut est la longueur du tableau
 * 
 */
const NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const NUMEROS1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const NUMEROS2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(NUMEROS.copyWithin(1, 3, 5));
console.log(NUMEROS1.copyWithin(1, 3)); // supprimer le parametre end 
console.log(NUMEROS2.copyWithin(1)); // supprimer les parametres start et end

/** 
 * Array.prototype.find() => trouver une valeur à partir d'un tableau en fonction des critères spécifiques passés
 * à cette méthode.
 * Elle renvoie la première valeur de l'élément qui satisfait la condition donnée.
 * 
 * Syntaxe : array.find(callback(currentValue, index, arr), thisValue)
 * callback : représente la fonction qui execute chaque élément
 * currentValue : requis , la valeur de l'élément courant 
 * index : optionnel , l'index du tableau de l'élément courant
 * arr : optionnel, le tableau sur lequel on va appliquer le find()
 * thisValue : optionnel, la valeur utilisée lors de l'utilistion du callback
 * 
 * Remarque : la méthode find() de L'ES6 n'est pas similaire à la méthode filter() de l'ES5.
 * La méthode filter() renvoie toujours un tableau de correspondances mais la méthode find() renvoie 
 * toujours le premier résultat effectif.
 */
var array = [5, 22, 19, 25, 34];
var resultat = array.find(x => x > 20);
console.log(resultat); // Output : 22

/** 
 * Array.prototype.findIndex() => renvoie l'indice du premier élément du tableau qui satisfait une condistion 
 * donnée. si aucun élément trouvé elle envoie -1
 */
var res = array.findIndex(x => x > 20);
console.log(res); //1

/** 
 * Array.prototype.entries() => renvoie un objet itérateur de tableau , qui peut etre utilisé pour boucler les clés et 
 * les valeurs des tableaux.
 */

var couleurs1 = ["Violet", "Bleu", "Rouge", "Vert", "Jaune"];
var affichage = couleurs1.entries();
for (let i of affichage) {
    console.log(i);
}
// ou bien utiliser l'opérateur spread
console.log(...affichage);

/** 
 * Array.prototype.keys()
 */

var couleurs1 = ["Violet", "Bleu", "Rouge", "Vert", "Jaune"];
var affichage = couleurs1.keys();
console.log(...affichage);

/** 
 * Array.prototype.values() => retourne la valeur de chaque clé
 */

var couleurs1 = ["Violet", "Bleu", "Rouge", "Vert", "Jaune"];
var affichage = couleurs1.values();
console.log(...affichage);

/** 
 * Array.prototype.fill() => remplit les éléments d'un tableau avec une valeur statique.
 * on peut remplir une partie d'un tableau ou remplir le tableau entier
 * modifie le tableau original
 * 
 * array.fill(value, start, end)
 * value : requise , c'est une valeur statique pour remplir le tableau 
 * start : optionnel , index pour commencer à remplir le tableau ; 0 par défaut
 * end : optionnel , index pour arreter de remplir le tableau; la longueur du tableau par défaut
 */

var couleurs2 = ["Violet", "Bleu", "Rouge", "Vert"];
var affichage = couleurs2.fill('Orange', 2, 4);
console.log(...affichage); // output : Violet Bleu Orange Orange

/**Déstructuration => d'extraire des valeurs de données stockées dans des tableaux
 * lors de la déstructuration d'un tableau on utilise les index
 */
var array3 = ['Bonjour', 'tout', 'le', 'monde'];
// tache de déstructuration
var [premier, deuxieme, troisieme, quatrieme] = array3;
console.log(premier);
console.log(deuxieme);
console.log(troisieme);
console.log(quatrieme);

var tab_col = ["Violet", "Rose", "Bleu", "Vert", "Jaune", "Orange", "Rouge"];
// tache de déstructuration
//var [couleur1, couleur2, couleur3] = tab_col;
var [couleur1, , couleur3, , couleur5] = tab_col; // laisser un espace vide pour les élément qu'on va afficher
// pas d'utilisation de chiffre pour la déstructuration sinon on aura une erreur car les chiffres ne peuvent pas
//etre des noms de variables
console.log(tab_col);
console.log(couleur1);
console.log(couleur3);
console.log(couleur5);
/*** Déstructuration avec le paramètre Rest *** */
var tab_col2 = ["Violet", "Rose", "Bleu", "Vert", "Jaune", "Orange", "Rouge"];
var [a, b, ...rest] = tab_col2;
console.log("/********************************************/")
console.log(a);
console.log(b);
console.log(rest);
/*** Déstructuration avec les valeurs par défaut*** */
var x, y;
[x = 32, y = 95] = [100];
console.log(x); // 100
console.log(y); // 95
/*** Déstructuration avec echange de variable*** */
var x = 685,
    y = 215;
[x, y] = [y, x];
console.log(x); // 215
console.log(y); //685

/*  ** */
function maFn() {
    return [1, 2, 3];
}
//Utilisation de la déstructuration de tableau pour déstructurer les éléments de tableau en éléments spécifiques x,y,z
var [x, y, z] = maFn();
console.log(x); // 1
console.log(y); // 2
console.log(z); // 3