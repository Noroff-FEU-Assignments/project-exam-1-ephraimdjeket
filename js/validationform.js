document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Name Validation
        const nameInput = document.getElementById("name");
        const nameError = document.getElementById("name-error");
        if (nameInput.value.length <= 5) {
            nameError.textContent = "Name should be more than 5 characters long.";
            nameInput.focus();
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Email Validation
        const emailInput = document.getElementById("email");
        const emailError = document.getElementById("email-error");
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Please enter a valid email address.";
            emailInput.focus();
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Subject Validation
        const subjectInput = document.getElementById("subject");
        const subjectError = document.getElementById("subject-error");
        if (subjectInput.value.length <= 15) {
            subjectError.textContent = "Subject should be more than 15 characters long.";
            subjectInput.focus();
            isValid = false;
        } else {
            subjectError.textContent = "";
        }

        // Message Validation
        const messageInput = document.getElementById("message");
        const messageError = document.getElementById("message-error");
        if (messageInput.value.length <= 25) {
            messageError.textContent = "Message content should be more than 25 characters long.";
            messageInput.focus();
            isValid = false;
        } else {
            messageError.textContent = "";
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
