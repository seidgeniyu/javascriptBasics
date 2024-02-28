//Arrays
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
