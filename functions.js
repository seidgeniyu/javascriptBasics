//JavaScript functions are reusable blocks of code that perform specific tasks.
// They help you organize your code, improve readability, and avoid code duplication.

//Function declaration

function functionName(parameter1, parameter2) {
  // Code to be executed
  return value; // (Optional)
}

//Passing Parameters and Returning Values:
function greet(name) {
  // Function declaration with one parameter
  return "Hello, " + name + "!";
}

const Greeting = greet(" Hello Seya"); // Call the function with an argument
console.log(Greeting);

//Write a function that calculates the area of a rectangle given its width and height:
function calculateArea(width, height) {
  return width * height;
}

const area = calculateArea(10, 10);
console.log(area);

//function that checks if a number is even and returns true if it is, false otherwise:

function isEven(number) {
  return number % 2 === 0;
}

const isNumberEven = isEven(8);
console.log(isNumberEven);

//creating and accessing elements in array
const computers = ["Apple", "HP", "Mac"];
console.log(computers[0]);

// array manipulation
const sports = ["football", "table tenis", "cricket"];
sports[1] = "swimming";
console.log(sports[1]);

//Create an array of numbers and print the sum of all elements using a loop:
const numbers = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(total);
