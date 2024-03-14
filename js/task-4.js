const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (event.target.elements.email.value === "" || event.target.elements.password.value === "") {
        alert('All form fields must be filled in');
    } else {
        const ourElements = event.target.elements;
        const info = {
        email: ourElements.email.value.trim(),
        password: ourElements.password.value.trim()
        }
        console.log(info);
    }
    event.target.reset();
}