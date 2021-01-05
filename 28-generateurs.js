/** 
 * Un générateur est une alternative à l'utilisation d'itérateurs.
 * il permet de retourner plusieurs valeurs contrairement à la fonction classique qui ne peut retourner qu'une seule
 * valeur
 * 
 * Syntaxe : 
 * function* genFun() {
 * yield1;
 * yield2;
 * ....
 * }
 * 
 * yield : suspend l'execution de la fonction et renvoie une valeur à l'appelant
 * il conserve un état suffisant pour permettre à la fonction de reprendre là où elle s'est arrétée.
 * yield est sempblable à return mais pour les générateurs.
 * L'objet générateur possède 3 méthodes : 
 * 1- next() : est une méthode principale du générateur , renvoie une valeur générée par yiel
 *  => 2 proprietés : value et done
 * value : la valeur obtenue
 * done : c'est une valeur booleenne qui renvoie true si le code de la fonction est terminé sinon false
 * 2- return() => renvoie une valeur et met fin à l'execution du générateur
 * 3- throw() => permet de lever une exception dans le générateur
 */
// les fonctions du générateurs ne peuvent pas etre représentées en utilisant les fonctions fléchées

function* idGen() {
    var i = 0;
    while (true)
        yield i++;
}
var gen = idGen(); // gen est un objet générateur qui est l'instance de la fonction générateur idGen()
// un objet générateur peut etre utilisé dans les boucles for..of o bien dans d'autres fonctions qui acceptent un itérable
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);


function* genF() {
    yield 1;
    yield;
    yield 2;
}
var varGen = genF();

console.log(varGen.next().value);
console.log(varGen.next().value);
console.log(varGen.next().value);
// exemple avec return 
function* monGen() {
    yield 'première déclaration de yield';
    yield 'Deuxième déclaration de yield';
    return 'déclaration de return';
    yield 'Deuxième déclaration de yield';
}
let objGen = monGen();
console.log(objGen.next());
console.log(objGen.next());
console.log(objGen.next());
console.log(objGen.next());

// utilisation de for..loop avec le générateur

function* genVoyelles() {
    yield 'A';
    yield 'E';
    yield 'I';
    yield 'O';
    yield 'U';
    yield 'Y';

}
for (let alphabet of genVoyelles()) {
    console.log(alphabet);
}
// l'expression yield* =>va nous permettre d'executer le code d'un générateur à partir d'un autre générateur
//=> renvoyer les valeurs liéesaux yield du premier générateur

function* genSeq1() {
    yield 1;
    yield 2;
    yield 3;
}

function* genSeq2() {
    yield 4;
    yield* genSeq1();
    yield 5;
}
let gen2 = genSeq2();
console.log(gen2.next()); // 4
console.log(gen2.next()); //1
console.log(gen2.next()); //2
console.log(gen2.next()); //3
console.log(gen2.next()); //5
console.log(gen2.next()); // done = true => l'execution s'est terminée