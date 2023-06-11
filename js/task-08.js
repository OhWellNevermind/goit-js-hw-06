const form = document.querySelector(".login-form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const {
        elements: {email, password}
    } = event.currentTarget

      if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    let formData = {
        email: email.value,
        password: password.value
    }

    console.log(formData);
    event.currentTarget.reset();
})