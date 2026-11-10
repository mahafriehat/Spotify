
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("auth-form");

  if (!form) return;

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", (event) => {

    event.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";
    status.textContent = "";

    let valid = true;

    // Validate Email
    if (!validateEmail(email.value)) {

      emailError.textContent =
        "Please enter a valid email address.";

      valid = false;
    }

    // Validate Password
    if (!validatePassword(password.value)) {

      passwordError.textContent =
        "Password must contain at least 8 characters, uppercase, lowercase and special character.";

      valid = false;
    }

    // Stop if validation fails
    if (!valid) return;

    // Save demo login information
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email.value);

    status.textContent = "Login successful! Redirecting...";

    // Navigate to Home Page
    setTimeout(() => {
      window.location.href = "Home.html";
    }, 700);

  });

});
