/** 
 * Modules : sont un morceau d'un code Javascript écrit dans un fichier.
 * les modules nous aident Modulariser le code simplment en le divisant en modules qui peuvent etre importés n'importe où;
 * les modules facilitent la maintenance du code , le débogage du code et la réutilisation du code
 * pour exporter les modules on utilise le mot clé export
 * 2 types d'exportation : 
 * 1- exportation nommée 
 * 2- exportation par defaut: peut avoir au maximum une valeur qui peut etre exportée en utilisant l'exportation par 
 * défaut
 * pour importer un module on utilise le mot-clé import     
 * les valeurs qui sont exportés du module peuvent etre importé
 * pour importer un module faut spécifier son chemin d'accès
 * pour importer une exportation nommée on doit utilisé le meme nom que l'objet correspondant
 * pour importer une exportation par défaut on peut utiliser n'importe quel nom de l'objet correspondant
 */

class User {
    // methodes
}
export { User }; // exportation de classe nommée

function afficher() {

}
export { afficher }; // exportation de fonction nommée

let x = 1;
export { x }; // exportation de variable nommée


export { User, afficher }; // on peut utiliser la syntaxe de plusieus exportations nommées dans un module

import { User, afficher } from "./module.js.js";

import * as utilisateur from "./module.js.js"; // ici utilisateur est un alias et module.js est le nom du module

/**************************************************************************** */
export default User; // exportation par défaut de classe
export default afficher; // exportation par défaut de la fonction
export default x; // exportation par défaut de variable


import User from "./module.js.js"; // importer 'exportation par défaut de classe'
/*****************************Dépendence Cyclique************************************************* */
/** 
 * la dépendance cyclique est une relation directe ou indirecte entre 2 ou plusieurs modules qui dépendent l'un
 * de l'autre.
 * Deux Modules A et B ,sont cycliquement dépendants l'un de l'autre si A import B et B import A de manière indirecte
 * supposons on a 3 modules A, B et C : leur chaine de dépendance est => A->B->C->A : A dépend de B; B dépend de C 
 * et C dépend de A
 */