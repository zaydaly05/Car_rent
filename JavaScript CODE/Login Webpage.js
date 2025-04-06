document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm")
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");
    if (!password || !email) {
        alert('Please fill out all required fields.');
        e.preventDefault(); // Prevent form submission
      }

      
    form.addEventListener("button", (event) => {
        event.preventDefault(); // Prevent form from submitting traditionally

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Password validation: At least 1 capital letter, 8 characters minimum, and 1 number
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            message.textContent = "Password must have at least 1 capital letter, 8 characters minimum, and 1 number.";
            return;
        }

        // Email validation and redirection logic
        if (email.endsWith(".admin")) {
            message.textContent = "Redirecting to admin page...";
            window.location.href = "C:\Users\Dell\Desktop\Web Project\HTML CODE\Admin Dashboard.html"; 
        } else if (email.endsWith(".user")) {
            message.textContent = "Redirecting to user page...";
            window.location.href = "C:\Users\Dell\Desktop\Web Project\HTML CODE\User Dashboard.html";
        } else {
            message.textContent = "Invalid email domain. Use .admin or .user.";
        }
    });
});