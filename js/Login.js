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
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordPattern.test(passwordInput.value.trim())) {
            passwordError.textContent = "Password must be at least 6 characters, include at least 1 uppercase letter, and 1 number.";
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
