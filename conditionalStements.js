//If Statements
//An if statement checks a condition and executes a block of code if the condition is true
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}

//If-Else Statements:
//An if-else statement checks a condition and executes one block of code if the condition is true, and another block of code if the condition is false.
let temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside.");
} else {
  console.log("It's not too hot today.");
}

//Switch Statements:
//A switch statement evaluates an expression and matches it with different cases. It executes the code block associated with the first matching case.
//If no case matches and a default case is provided, the code block associated with the default case is executed.
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the first day of the week.");
    break;
  case "Friday":
    console.log("It's the last day of the week.");
    break;
  default:
    console.log("It's a regular day.");
    break;
}

//LOOPS
//For Loop:
//A for loop is used when you know the number of iterations in advance.
//It has three parts: initialization, condition, and increment/decrement.

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//While Loop:
//A while loop is used when you don't know the number of iterations in advance and want to loop until a condition becomes false.

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//Do-While Loop:
//A do-while loop is similar to a while loop, but it checks the condition after executing the code block.
//This ensures that the code block is executed at least once.
let j = 1;
do {
  console.log(i);
  j++;
} while (j <= 5);

//Iterating over Arrays and Objects:
//Arrays:
//You can use for loops to iterate over the elements in an array by accessing them using their indices:
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Objects:
//The for...in loop can be used to iterate over the enumerable properties (key-value pairs) of an object.
//However, exercise caution as this loop iterates over all enumerable properties, including those inherited from the prototype chain:

let person = { name: "Alice", age: 30 };
for (let key in person) {
  console.log(key, person[key]);
}
