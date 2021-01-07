/**
 * var user = {
 *          nom : 'toto',
 *          age : 65
 * }
 * => un objet est une collection de paires clé-valeur
 * 
 * var user = new Object();
 * 
 */
//ES5
function user(nom, age) {
    return {
        nom: nom,
        age: age
    };
}
console.log(user('toto', 65));

//ES6 
function user(nom, age) {
    return {
        nom,
        age
    };
};
let nom = 'toto';
let age = 65;
let user1 = {
    nom,
    age
};
console.log(user1.nom);
console.log(user1.age);
// Proprietés calculées (Computed Properties) :elles permettent de choisir dynamiquement quelle proprieté 
// de l'objet est mise à jour
//ES5
var etablissement = {
    id: 1,
    nom: 'lycee secondaire'
}
var departement = 'nom_dept';
etablissement[departement] = 'Paris';
console.log(etablissement);
// ES6
var departement = 'nom_dept';
var etablissement = {
    id: 2,
    nom: 'école primaire',
    [departement]: 'Nord pas de calais'
}
console.log(etablissement);

// avant ES6
let utilisateur = {
    nom: 'mariko',
    prenom: 'ousmane',
    nomComplet: function() {
        return this.nom + " " + this.prenom;
    }
};
//En ES6 : on a supprimé les 2 point et le mot-clé de la fonction (function)
let utilisateur1 = {
    nom: 'mariko',
    prenom: 'ousmane',
    nomComplet() {
        return this.nom + " " + this.prenom;
    }
};

/*** 
 * fusion des objets : 
 * 1-Object.assign(target, sources)
 * 2-opérateur Spread => var new_obj = [...obj1, ...obj2]
 */

var obj1 = { 1: 'Bonjour', 2: 'tout' };
var obj2 = { 3: 'le', 4: 'monde' };
var obj3 = { 5: 'Bienvenue' }

var obj_final = Object.assign(obj1, obj2, obj3);
console.log(obj_final);
// Clonage des objets
let objet1 = {
    taille: 123,
    hauteur: 12
};
let obj_clon = Object.assign({}, objet1);
obj_clon.hauteur = 23;
console.log(objet1);
console.log(obj_clon);

//Opérateur Spread

var obj_final1 = {...obj1,
    ...obj2,
    ...obj3
};
console.log(obj_final1);
// supprimer des proprietés

var monObj = new Object();
monObj.x = 260;
monObj.y = 238;

delete monObj.a;
console.log(monObj.a); //Output : undefined

//Déstructuration
//Exp1
const num = { a: 500, b: 600 };
const { a, b } = num;
console.log(a); //500
console.log(b); //600

//Exp2
const student = {
    id: 1,
    username: 'Ryan',
    position: 'Premier'
}

const { id, username, position } = student;
console.log(id);
console.log(username);
console.log(position);

// destructuration avec valeurs par défauts
const { a1 = 120, b1 = 130 } = { a1: 850 };
console.log(a1); // 850 
console.log(b1); // 130

//changer le nom des variables
const num2 = { z: 100, w: 200 };
const { z: x, w: y } = num2;
console.log(x); //100
console.log(y); //200

//Utilisation du paramètre Rest

let {
    n1,
    n2,
    ...args
} = { n1: 1, n2: 2, n3: 3, n4: 4, n5: 6 }
console.log(n1);
console.log(n2);
console.log(args);