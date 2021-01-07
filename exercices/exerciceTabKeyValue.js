/** 
 * Ecrire un programme JS pour créer un tableau de paires clé-valeur à partir d'un objet donné
 * 
 * {x : 1 , y: 2} => [['x',1],['y',2]]
 */

const tab = obj => Object.keys(obj).map(k => [k, obj[k]]);
console.log(tab({ x: 1, y: 2 }));
console.log(tab({ x: 1, y: 2, z: 3 }));