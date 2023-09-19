document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const inputElement = document.querySelector(".form-group input");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        const nameInput = document.getElementById("name");
        if (nameInput.value.length <= 5) {
            alert("Name should be more than 5 characters long.");
            nameInput.focus();
            isValid = false;
        }


        const emailInput = document.getElementById("email");
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            isValid = false;
        }


        const subjectInput = document.getElementById("subject");
        if (subjectInput.value.length <= 15) {
            alert("Subject should be more than 15 characters long.");
            subjectInput.focus();
            isValid = false;
        }


        const messageInput = document.getElementById("message");
        if (messageInput.value.length <= 25) {
            alert("Message content should be more than 25 characters long.");
            messageInput.focus();
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
