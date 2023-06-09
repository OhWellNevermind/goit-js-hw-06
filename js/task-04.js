const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");
increment.addEventListener("click", () => {
    value.innerHTML = +value.innerHTML + 1
})

decrement.addEventListener("click", () => {
    value.innerHTML = +value.innerHTML - 1
})