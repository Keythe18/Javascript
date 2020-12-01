/**
 * Opérateur TypeOf => renvoie le type de l'argument
 * 
 * Syntaxe : 
 * en tant qu'opérateur : typeOf x;
 * en tant que fonction : typeOf (x);
 * 
 * En faisant appel à typeOf il nous renvoie une chaine de charactère avec le nom du type
 */
typeof undefined; // Output : undefined

typeof 0; // // Output : 'number'

typeof 100000000000000000; // // Output :'BigInt'

typeof true; //Output :'Boolean'

typeof "str"; //Output : "string"

typeof Symbol("id"); // Output :"Symbol"

typeof Math; //Output :"object"

typeof alert; //Output : "function"

typeof null; //Output : "object"