//Error handling is a crucial aspect of writing robust JavaScript applications.
//It allows you to gracefully manage unexpected occurrences (errors) within your code, preventing crashes and providing informative messages to you or the user.
function getUserInput() {
  const userInput = prompt("Enter your age:");
  try {
    const age = parseInt(userInput); // Attempt conversion to number
    if (isNaN(age)) {
      throw new TypeError("Invalid input: Please enter a number.");
    }
    if (age < 0) {
      throw new RangeError("Invalid age: Age cannot be negative.");
    }
    return age;
  } catch (error) {
    console.error(error.message);
    return null; // Indicate invalid input
  }
}

const age = getUserInput();

if (age !== null) {
  console.log(`Your age is: ${age}`);
} else {
  console.log("Invalid input. Please try again.");
}
