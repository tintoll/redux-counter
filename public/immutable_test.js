let a = 7;
let b = 7;

let object1 = { a: 1, b: 2 };
let object2 = { a: 1, b: 2 };

console.log(a === b); // true
console.log(object1 === object2); //false

let object3 = object1;

console.log(object1 === object3); // true
object3.c = 3;
console.log(object1 === object3); // true
