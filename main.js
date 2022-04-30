const checkbox = document.getElementById("checkbox");
const button = document.querySelector("button[type=submit]");

checkbox.disabled = true;
button.disabled = true;
console.log(button);

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");
// const selectColor = document.getElementById("SelectColor");

//Assign Color To elements
elements.forEach(function (element) {
  const color = getRandomColor();

  element.style.backgroundColor = color;
  element.innerHTML = color;
  selectColor.innerHTML = color;
});

//Generate Random Color func
function getRandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }

  return color;
}

//Check If Right Color

elements.forEach(function (element) {
  element.addEventListener("click", function () {
    if (element.innerHTML === selectColor.innerHTML) {
      checkbox.checkbox = true;

      alert("You are Human !");
      button.disabled = false;

      button.classList.remove("btn-light");
      button.classList.add("btn-success");
    } else {
      alert("You are a Robot");

      location.reload(true);
    }
  });
});
