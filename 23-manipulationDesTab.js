/**  tableau litteral*/
// Opérateur spread (...)
let couleurs = ['rouge', 'jaune'];
let couleurs2 = [...couleurs, 'bleu', 'noir']; // insertion du premier tab dans le 2éme , Concaténation
console.log(couleurs2); // Output :['rouge', 'jaune', 'bleu', 'noir']
let tab = ['rouge', 'jaune']; // Output :['rouge', 'jaune']
let tab2 = [...tab];
console.log(tab2)
    // Si je fais une copie des éléments d'un tableau dans un autre sans utiliser l'opérateur spread 
    //l'insertion d'un nouvel élément dans le tableau copié affectera le tableau original

let couleursCopie = couleurs;
couleursCopie.push('vert');
console.log('tableau couleurs : ', couleurs); //Output :['rouge', 'jaune', 'vert'] // tab original affecté
console.log('tableau couleurs copie : ', couleursCopie); //Output :['rouge', 'jaune', 'vert']

let couleur3 = ['violet', 'orange'];
let couleursCopie2 = [...couleur3];
couleursCopie2.push('bleu');
console.log('tableau couleurs : ', couleur3); //Output :tableau couleurs : ["violet", "orange"]
console.log('tableau couleurs copie 2: ', couleursCopie2); //Output :["violet", "orange", "bleu"]


let arr = ['A', ...
    'BCD', 'EF', 'G'
]; // il répartit chaque caractère spécifique de la chaine 'BCD' en caractère individuel
console.log(arr); //Output :["A", "B", "C", "D", "EF", "G"]