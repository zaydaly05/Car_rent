document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        const emailError = document.getElementById("email-error");
        const passwordError = document.getElementById("password-error");

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Please enter a valid email.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Validate password
        if (passwordInput.value.trim().length < 6) {
            passwordError.textContent = "Password must be at least 6 characters.";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        // Redirect if valid
        if (isValid) {
            window.location.href = "./User Dashboard.html";
        }
    });
});
