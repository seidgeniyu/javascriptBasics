//OBJECTS
//Objects are complex data structures in JavaScript that store collections of key-value pairs. Unlike arrays, which use numerical indexes to access elements, objects use strings or symbols as keys to associate values with them. This makes objects more flexible and suitable for representing real-world entities and their properties.

//creating objects and accessing properties
const student = { name: "Seid", age: 22, hobbies: ["reading", "coding"] };
console.log(student.name); // Output: "Seid"
console.log(student.age); // Output: 22
console.log(student.hobbies);

//practical exaple, User Account:
const user = {
  firstName: "Seid",
  lastName: "Genyiu",
  email: "seyageniyu@gmail.com",
  address: {
    city: "Addis Ababa",
    state: "Addis Ababa",
  },
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log("Full Name:", user.getFullName()); // Output: Seid Geniyu
console.log("Email:", user.email); // Output: seyageniyu@gmail.com
console.log(user.address);
