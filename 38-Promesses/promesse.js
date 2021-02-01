/** 
 * Promesse : représente quelque chose qui est finalement réalisé => elle peut etre soit rejetée soi résolue en fonction
 * de l'opération.
 * Avant les promesses , les callbacks étaient utilisés pour effectuer la programmation asynchrone
 * 
 * Callback : moyen de gérer l'execution d'une fonction après l'execution d'une autre fonction
 * 
 * La promesse comporte principalement trois étapes : 
 * En attente : l'état initial de chaque promesse => le résultat n'a pas encore été traité
 * Réalisé : l'opération est terminée avec succès
 * Rejeté : représente un échec qui se produit pendant le traitement
 * 
 * Syntaxe : const Promise = new Promise ((resolve, reject) => {... })
 * 
 * Asynchronisme : le code s'execute s'execute sans blocage ni attente du résultat et tout ce qui doit attendre 
 * la promesse pour continuer on le met dans .then
 */

/*const promise = new Promise((resolve, reject) => {
    // traitement d'une tache asynchrone
    //appel a resolve si la promesse est résolue
    // ou bien 
    // appel a reject si il y un echec
})*/

/*var mamanEstContente = true;
var avoirPS5 = new Promise(
    function(resolve, reject) {
        if (mamanEstContente) {
            var console = {
                version: 'PS5',
                couleur: 'Blanche'
            };
            resolve(console); // résolue
        } else {
            var raison = new Error('Maman est fachée');
            reject(raison); // rejeté
        }
    }
);*/

/*var demanderAMaman = function() {
    avoirPS5.then(function(resolue) {
        console.log(resolue);
    }).catch(function(error) {
        console.log(error.message);
    })
};
demanderAMaman();*/

/*var frimer1 = function(console) {
    return new Promise(function(resolve, reject) {
        var message = ` Salut mon ami j'ai eu la nouvelle ` + console.version + ' ' + console.couleur;
        resolve(message);
    });
};*/
// raccourcir frimer()
/*var frimer = function(console) {
    var message = ` Salut mon ami j'ai eu la nouvelle ` + console.version + ' ' + console.couleur;
    return Promise.resolve(message);
};*/
/*var demanderAMaman = function() {
    avoirPS5.then(frimer) // enchainer les promesses
        .then(function(resolue) {
            console.log(resolue);
        })
        .catch(function(error) {
            console.log(error.message);
        });
};*/
//demanderAMaman();
/********************* Méthodes de Promesse ************************** */
/** 
 * .then() =>  utilisée lorsqu'une promesse est resolue ou rejetée. peut etre enchainée pour gérer le rejet ou bien 
 * la réalisation de la promesse
 * .catch() => utilisé pour gérer les échecs et les rejets
 * //return Promise.resolve(msg);
 * .resolve() => renvoie un nouvel objet promise qui est résolu avec la valeur donnée.
 * .reject() => renvoie un objet Promise rejeté avec la valeur donnée
 * .all() => prend en argument un ensemble de promesses. permet d'obtenir une promesse résolue 
 * .race() =>renvoie une promesse résolue basée sur la première promesse réferencée qui se résout
 */
// Exemple Resolve
Promise.resolve('Resolue').then(function(valeur) {
    console.log(valeur);
}, function(valeur) {});

// Exemple Reject

function resolue(resultat) {
    console.log('Résolue');
}

function rejetee(resultat) {
    console.error(resultat);
}

Promise.reject(new Error('Echec')).then(resolue, rejetee);

//Exemple All
const promesse1 = Promise.resolve('Promesse');
const promesse2 = 'résolue';
const promesse3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 1000);
});
Promise.all([promesse1, promesse2, promesse3]).then(function(valeurs) {
    console.log(valeurs);
});

//Exemple Race
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve("promise1 est la première promesse"), 1000);
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve("promise2 est la deuxième promesse"), 2000);
})

Promise.race([promise1, promise2]).then(resultat => {
    console.log(resultat);
})