// ES6  
const estContente = true;
// 1ere promesse
const jeVaisAvoirPS5 = new Promise((resolve, reject) => {
    if (estContente) {
        const console1 = {
            version: 'PS5',
            couleur: 'Blanche'
        };
        resolve(console1);
    } else {
        const raison1 = new Error(`Maman n'est pas contente`);
        reject(raison1);
    }
});
// 2eme promesse
const frimerEnfant = function(console1) {
    const msg = ` Salut mon ami j'ai eu la nouvelle ` + console1.version + ' ' + console1.couleur;
    return Promise.resolve(msg);
};

// appeler la promesse
const demanderAMaMaman = function() {
    jeVaisAvoirPS5.then(frimerEnfant)
        .then(resolue => console.log(resolue))
        .catch(error => console.log(error.message));
};

demanderAMaMaman();