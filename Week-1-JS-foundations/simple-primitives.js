let a = 1;
a = 2;
console.log(a); // This will print 2 to the console, as 'a' was reassigned to 2.


// Constants in JavaScript
const b = 3;
 b = 4; // This will throw a TypeError because 'b' is a constant and cannot be reassigned.
console.log(b); // This will not execute because the previous line throws an error.

let name = "Harkirat";
let age = 25;
let isMarried = false;

console.log("Name is " + name + ", age is " + age + ", married: " + isMarried);


// Template literals for better readability
console.log(`Name is ${name}, age is ${age}, married: ${isMarried}`); // Recommended to use This!!!