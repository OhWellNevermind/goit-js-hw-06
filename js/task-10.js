
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const boxContainer = document.querySelector("#boxes")
const boxesCounter = document.querySelector("input");

createBtn.addEventListener("click", function () {
  createBoxes(boxesCounter.value)
})

destroyBtn.addEventListener("click", destroyBoxes)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (amount < +boxesCounter.min || amount > +boxesCounter.max) {
    alert("Please enter value in range from 1 to 100")
  } else {
    let width = "20px"
    let heigth = "20px"
    for (let i = 0; i < amount; i += +boxesCounter.step) {

      const div = document.createElement("div");
      div.style.backgroundColor = getRandomHexColor();
      width = 10 + parseInt(width) + "px"
      heigth = 10 + parseInt(heigth) + "px"
      div.style.width = width;
      div.style.height = heigth;
      boxContainer.insertAdjacentHTML("beforeend", `${div.outerHTML}`)
    }
  }
}

function destroyBoxes() {
  boxContainer.innerHTML = "";
  boxesCounter.value = "";
}