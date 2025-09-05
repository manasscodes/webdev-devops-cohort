// string Handbook
// String : length(), indexOf(), lastIndexOf(), slice(), substring(), replace(), toUpperCase(), toLowerCase(), trim(), split()

// Run each function to see output , play and learn by doing

// Length
function getLength(str) {
  console.log("Original String: ", str);
  console.log("Length of the String: ", str.length);
}

getLength("Hello, World!");

// IndexOf
function getIndexOf(str, char) {
  console.log("Original String: ", str);
  console.log("Index of the Character: ", str.indexOf(char));
}

getIndexOf("Hello, World!", "o");

// LastIndexOf
function getLastIndexOf(str, char) {
  console.log("Original String: ", str);
  console.log("Last Index of the Character: ", str.lastIndexOf(char));
}

getLastIndexOf("Hello, World!", "o");

// Slice
function getSlice(str, start, end) {
  console.log("Original String: ", str);
  console.log("Slice of the String: ", str.slice(start, end));
}

getSlice("Hello, World!", 0, 5);

// Substring
function getSubstring(str, start, end) {
  console.log("Original String: ", str);
  console.log("Substring of the String: ", str.substring(start, end));
}

getSubstring("Hello, World!", 0, 5);

// Replace
function getReplace(str, old, newStr) {
  console.log("Original String: ", str);
  console.log("Replace of the String: ", str.replace(old, newStr));
}

getReplace("Hello, World!", "Hello", "Hi");

// ToUpperCase
function getUpperCase(str) {
  console.log("Original String: ", str);
  console.log("UpperCase of the String: ", str.toUpperCase());
}

getUpperCase("Hello, World!");

// ToLowerCase
function getLowerCase(str) {
  console.log("Original String: ", str);
  console.log("LowerCase of the String: ", str.toLowerCase());
}

getLowerCase("Hello, World!");

// Trim
function getTrim(str) {
  console.log("Original String: ", str);
  console.log("Trim of the String: ", str.trim());
}

getTrim("Hello, World!");

// Split
function getSplit(str, separator) {
  console.log("Original String: ", str);
  console.log("Split of the String: ", str.split(separator));
}
