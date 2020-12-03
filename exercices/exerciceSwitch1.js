/** 
 * Ecrire un programme Javascript où l'utlisateur saisit deux nombres ainsi que 
 * l'opération mathématique souhaitée, et le résultat s'affiche en html
 * Les opération : 
 * addition : a+b
 * soustraction : a-b
 * multiplication : a*b
 * division : a/b
 * Détails : 
 * Il faut afficher une erreur en cas d'opération mathématique inconnue
 * les nombres saisi peuvent etre à virgule
 * L'utilisateur doit pouvoir saisir le nom de l'opération que 
 * l'opérateur correspondant : + - * /
 * Il faut répéter le moins de code possible , notamment le code d'affichage du résultat
 * 
 * Rappel : La division par 0 n'existe pas donc il faut gérer ce cas.
 * 
 * ParseInt: est une fonction qui analyse un String et le convertit en entier
 * ParseFloat: est une fonction qui analyse un String et le convertit en nombre flottant
 */

var nb1, nb2, op, resultat;
const OPERATEUR = ['+', '-', '*', '/', 'addition', 'soustraction', 'multiplication', 'division'];

do {
    nb1 = prompt('nombre 1');
    nb1 = parseFloat(nb1);
}
while (isNaN(nb1));

do {
    nb2 = prompt('nombre 2');
    nb2 = parseFloat(nb2);
}
while (isNaN(nb2));
do {
    op = prompt('Opérateur')
}
while (!OPERATEUR.includes(op));

resultat = " le résultat de " + nb1 + op + nb2 + " = ";
switch (op) {
    case '+':
    case 'addition':
        resultat = nb1 + nb2;
        break;
    case '-':
    case 'soustraction':
        resultat = nb1 - nb2;
        break;
    case '*':
    case 'multiplication':
        resultat = nb1 * nb2;
        break;
    case '/':
    case 'division':
        if (nb2 === 0) {
            resultat = 'erreur , on ne peut pas diviser par 0'
        } else {
            resultat = nb1 / nb2;
        }
        break;
}
document.write(resultat);