function calculateSquareRoot(number) {
  if (number < 0) {
    throw new Error("Cannot calculate square root of a negative number!");
  }
  return Math.sqrt(number);
}

// Try-catch block to handle potential errors
try {
  const result = calculateSquareRoot(9);
  console.log("Square root:", result);
} catch (error) {
  console.error("Error:", error.message);
}

// Trying with a negative number (handled by the error)
try {
  calculateSquareRoot(-4); // This will throw an error
} catch (error) {
  console.error("Error:", error.message);
}
