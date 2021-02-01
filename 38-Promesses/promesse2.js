function charger(source) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = source;
        document.head.append(script);
        script.onload = () => resolve('Le fichier ' + source + ' a été bien chargé');
        script.onerror = () => reject(new Error('Echec de chargement de ' + source));
    });
}

const p1 = charger('promesse1.js');
const p2 = charger('promesse1s.js');