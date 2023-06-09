const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === +event.currentTarget.dataset.length) {
        event.currentTarget.classList.add("valid")
    }
    else {
        event.currentTarget.classList.add("invalid")
    }
})