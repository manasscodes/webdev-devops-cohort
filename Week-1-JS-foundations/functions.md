# JavaScript Functions

Functions are one of the most important building blocks in JavaScript. They allow you to group code together, reuse it, and make your programs more organized and modular.

## What is a Function?

A function is a set of statements that performs a task or calculates a value. You can define a function once and use (call) it as many times as you want.

## Function Declaration

You can declare a function using the `function` keyword:

```javascript
function functionName(parameters) {
    // function body
    // code to be executed
    return value; // optional
}
```

### Example:

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

// Calling the function
console.log(greet("Alice")); // Output: Hello, Alice!
```

## Function Expression

You can also create functions using function expressions:

```javascript
const greet = function(name) {
    return "Hello, " + name + "!";
};
```

## Arrow Functions (ES6)

Arrow functions provide a shorter syntax for writing functions:

```javascript
const greet = (name) => {
    return "Hello, " + name + "!";
};

// Even shorter for simple functions
const greet = name => "Hello, " + name + "!";
```

## Parameters and Arguments

- **Parameters**: Variables listed in the function definition
- **Arguments**: Values passed to the function when it's called

```javascript
function add(a, b) {  // a and b are parameters
    return a + b;
}

add(5, 3);  // 5 and 3 are arguments
```

## Return Statement

The `return` statement specifies the value that the function should return:

```javascript
function multiply(x, y) {
    return x * y;  // Returns the product
}

const result = multiply(4, 5); // result = 20
```

## Function Scope

Variables declared inside a function are only accessible within that function:

```javascript
function example() {
    let localVar = "I'm local";
    console.log(localVar); // Works
}

// console.log(localVar); // Error - localVar is not defined
```

## Default Parameters

You can set default values for parameters:

```javascript
function greet(name = "Guest") {
    return "Hello, " + name + "!";
}

console.log(greet());      // Hello, Guest!
console.log(greet("Bob")); // Hello, Bob!
```

## Rest Parameters

Use rest parameters to accept any number of arguments:

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

## Callback Functions

Functions can be passed as arguments to other functions:

```javascript
function processArray(arr, callback) {
    return arr.map(callback);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

## Immediately Invoked Function Expression (IIFE)

A function that runs as soon as it's defined:

```javascript
(function() {
    console.log("This function runs immediately!");
})();
```

## Best Practices

1. **Use descriptive names** for your functions
2. **Keep functions small** and focused on a single task
3. **Use meaningful parameter names**
4. **Return early** to avoid deeply nested conditions
5. **Document your functions** with comments when necessary

```javascript
// Good example
function calculateArea(width, height) {
    if (width <= 0 || height <= 0) {
        return 0;
    }
    return width * height;
}

// Bad example
function calc(w, h) {
    return w * h;
}
```



