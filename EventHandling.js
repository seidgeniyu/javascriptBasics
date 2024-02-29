const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitButton");
const greeting = document.getElementById("greeting");

submitButton.addEventListener("click", function () {
  const name = nameInput.value;
  greeting.textContent = `Hello, ${name}!`;
});
