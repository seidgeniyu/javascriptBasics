const heading = document.getElementById("heading");
const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", function () {
  heading.textContent = "Text changed on button click!";
});
