/** 

 * Ecrire un programme Javascript où l'utlisateur saisit deux nombres ainsi que 
 * l'opération mathématique souhaitée, et le résultat s'affiche en html
 * Les opération : 
 * addition : a+b
 * soustraction : a-b
 * multiplication : a*b
 * division : a/b
 * 
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


function myCalc(a, b, op) {
    switch (op) {
        case '+' :
        case 'addition' :
            return a + b;
            break;
        case '-':
        case 'soustraction' :
            return a - b;
            break;
        case '*':
        case 'multiplication' :
            return a * b;
            break;
        case '/':
        case 'division' :
            return a / b;
            break;
    }
  }
  
  x = parseFloat(prompt('Choisissez votre 1er chiffre :'));
  op = prompt('Choisissez votre operateur [ + - / * ] :');
  y = parseFloat(prompt('Choisissez votre 2eme chiffre :'));
  
  if ( y == 0 && op == '/')
    alert('Impossible de diviser par 0.');
  else if ( op == '-' || op == '+' || op == '/' || op == '*' || op == 'addition' || op == 'soustraction' || op == 'multiplication' || op == 'division')
    document.write('Valeur finale: ' + myCalc(x, y, op));
  else
    alert("Mauvais operateur.");