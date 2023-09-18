document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const inputElement = document.querySelector(".form-group input");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Name validation (more than 5 characters)
        const nameInput = document.getElementById("name");
        if (nameInput.value.length <= 5) {
            alert("Name should be more than 5 characters long.");
            nameInput.focus();
            isValid = false;
        }

        // Email validation (valid email format)
        const emailInput = document.getElementById("email");
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            isValid = false;
        }

        // Subject validation (more than 15 characters)
        const subjectInput = document.getElementById("subject");
        if (subjectInput.value.length <= 15) {
            alert("Subject should be more than 15 characters long.");
            subjectInput.focus();
            isValid = false;
        }

        // Message content validation (more than 25 characters)
        const messageInput = document.getElementById("message");
        if (messageInput.value.length <= 25) {
            alert("Message content should be more than 25 characters long.");
            messageInput.focus();
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
        }
    });
});
