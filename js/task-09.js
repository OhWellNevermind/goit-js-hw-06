function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeBtn = document.querySelector(".change-color");
const background = document.querySelector("body");
const colorHex = document.querySelector(".color");

colorChangeBtn.addEventListener("click", () => {
  let colorToChange = getRandomHexColor();
  background.style.backgroundColor = colorToChange;
  colorHex.textContent = colorToChange;
  colorChangeBtn.style.backgroundColor = colorToChange;
})
