/** 
 * expression de classe : 
 * var nomClasse = new nomClasse{
 * }
 * Declaration : 
 * class ClassName {
 * }
 */
// expression de classe
var Student = class {
        constructor(nom, age) {
            this.nom = nom;
            this.age = age;
        }
    }
    //Declaration:
class Eleve {
    constructor(nom, age) {
        this.n = nom;
        this.a = age;
    }
    fct() {
        console.log('le nom est ', this.n);
        console.log('l\'age est ', this.a);
    }
}
// Instancier un objet d'une classe
var s = new Eleve('Toto', 19);
s.fct();
console.log(s);
// le mot-clé static : on l'utilise pour réaliser des fonctions statiques dans la classe
class StaticExemple {
    static afficher() {
        console.log('une fonction statique');
    }
}
// une fonction statique est référencée uniquement en utilisant le nom de la classe
StaticExemple.afficher();

/** 
 * Héritage  : c'est la possibilité de créer de nouvelles entités à partir d'une entité existante. ( extends et super)
 * une classe peut-etre héritée d'une autre classe en utilisant le mot-clé extends .
 * A l'exception du constructeur de la classe mère, la classe fille hérite de toutes proprietés et méthodes
 * 
 * Syntaxe : class nom_classe_fille extends nom_classe_mère {
 *  // la classe nom_classe_fille hérite de la classe nom_classe_mère
 * }
 * 
 */
class User {
    constructor(nom) {
        this.n = nom;
    }
}
class Utilisateur extends User {
    afficher() {
        console.log('le nom de l\'eleve : ' + this.n);
    }
}

var utilisateur = new Utilisateur('Toto2');
utilisateur.afficher();

class Animal {
    manger() {
        console.log('manger ... ');
    }
}
class Chien extends Animal {
    aboyer() {
        console.log('aboyer ... ');
    }
}

class Chiot extends Chien {
    pleurer() {
        console.log('pleurer ... ');
    }
}

var petit = new Chiot();
petit.manger();
petit.aboyer();
petit.pleurer();
// Overriding || Surcharge

class Parent {
    afficher() {
        console.log('je viens de la classe parent');
    }
}
/**
 * Super : nous a servi pour accéder à la proprieté de la classe parent
 */
class Enfant extends Parent {
    afficher() {
        super.afficher();
        console.log('je viens de la classe enfant');
    }
}

var enfant = new Enfant();
enfant.afficher();