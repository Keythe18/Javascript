/** 
 * setInterval() => 2 arguments : une fonction et un entier ; méthode JS qui produit des effets d'animation
 * 
 */

function maFonction() {
    setInterval(function() {
        alert('Bonjour');
        // ou bien
        // window.alert('Bonjour');
    }, 3000);
    clearInterval();
}
maFonction();