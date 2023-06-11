const text = document.querySelector("#text");
const rangeInput = document.querySelector("#font-size-control")

text.style.fontSize = rangeInput.value + "px";

rangeInput.addEventListener("input", (event) => {
    text.style.fontSize = rangeInput.value + "px";
})