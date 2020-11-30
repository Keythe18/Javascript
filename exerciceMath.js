var a = 5;
var b = 6;
var c = 7;
var aire;
var p;

p = (a + b + c) / 2;
aire = Math.sqrt( p * (p - a) * (p - b) * (p - c));
console.log(aire);