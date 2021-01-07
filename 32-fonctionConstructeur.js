function User(name) {
    this.name = name;
    this.isStudent = true;
}

var user = new User('Toto');
console.log(user.name);
console.log(user.isStudent);
/**
 * Lorsque une fonction executée avec new elle effectue les étapes suivantes : 
 * un nouvel objet vide est créé et affecté à 'this'
 * le corps de la fonction s'execute, 'this' le modifie et lui ajoute des nouvelles proprietés
 * la valeur de this est renvoyée
 */
function User1(name) {
    //this= {};
    //ajouter des proprietés à 'this'
    this.name = name;
    this.isStudent = true;
    //return this;
}
// var user = new User('Toto');=> est equivalente au code ci-dessous
var user = {
    name: 'Toto',
    isStudent: true
}