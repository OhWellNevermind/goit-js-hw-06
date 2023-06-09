const text = document.querySelector("#text");
const rangeInput = document.querySelector("#font-size-control")

rangeInput.addEventListener("input", (event) => {
    text.style.fontSize = event.currentTarget.value + "px";
})