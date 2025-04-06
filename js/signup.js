document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    const fields = [
        {
            id: "name",
            validate: value => value.trim() !== "",
            message: "Name is required"
        },
        {
            id: "email",
            validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: "Invalid email address"
        },
        {
            id: "phone",
            validate: value => /^\+?\d{10,15}$/.test(value),
            message: "Invalid phone number"
        },
        {
            id: "license",
            validate: value => value.trim() !== "",
            message: "License number is required"
        }
    ];

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Always prevent default

        let isValid = true;

        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const error = document.getElementById(`${field.id}-error`);

            if (!field.validate(input.value)) {
                error.textContent = field.message;
                isValid = false;
            } else {
                error.textContent = "";
            }
        });

        if (isValid) {
            // Manually redirect
            window.location.href = "./login.html";
        }
    });
});
