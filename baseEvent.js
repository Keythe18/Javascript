"use strict"
// ---------- Variables ----------
var bouton ;



// ---------- Fonctions ----------
function removeContent() {
    const maDiv = document.getElementById('result')
    maDiv.remove()
}




// ---------- Execution ----------
document.addEventListener('DOMContentLoaded', function(){ // Charge les scripts apres que toute la page html ai chargee
    //traitement
    bouton = document.querySelector('.btn.btn-success')
    bouton.addEventListener('click', removeContent)
})

