const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");
increment.addEventListener("click", () => {
    value.textContent = +value.textContent + 1
})

decrement.addEventListener("click", () => {
    value.textContent = +value.textContent - 1
})