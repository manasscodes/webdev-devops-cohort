// Demonstrating complex primitives in JavaScript: Arrays and Objects

// Arrays
let fruits = ["apple", "banana", "cherry"];
console.log("Fruits array:", fruits);

// Accessing array elements
console.log("First fruit:", fruits[0]);

// Adding an element
fruits.push("orange");
console.log("After push:", fruits);

// Removing the last element
let lastFruit = fruits.pop();
console.log("Popped fruit:", lastFruit);
console.log("After pop:", fruits);

// Iterating over an array
console.log("Iterating over fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Objects
let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};
console.log("Person object:", person);

// Accessing object properties
console.log("Person's name:", person.name);

// Adding a new property
person.city = "New York";
console.log("After adding city:", person);

// Removing a property
delete person.isStudent;
console.log("After deleting isStudent:", person);

// Iterating over object properties
console.log("Iterating over person properties:");
for (let key in person) {
    console.log(key + ":", person[key]);
}

// Practice Programs

// 1. Sum all numbers in an array
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum of numbers:", sum);

// 2. Find the person with the highest age in an array of objects
let people = [
    { name: "Bob", age: 25 },
    { name: "Carol", age: 32 },
    { name: "Dave", age: 28 }
];
let oldest = people[0];
for (let i = 1; i < people.length; i++) {
    if (people[i].age > oldest.age) {
        oldest = people[i];
    }
}
console.log("Oldest person:", oldest.name, "with age", oldest.age);

// 3. Create an array of objects and print names of people older than 27
console.log("People older than 27:");
for (let i = 0; i < people.length; i++) {
    if (people[i].age > 27) {
        console.log(people[i].name);
    }
}
