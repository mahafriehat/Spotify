function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');

    if (menu && overlay) {
        menu.classList.toggle('open');
        if (menu.classList.contains('open')) {
            overlay.style.display = 'block';
        } else {
            overlay.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    function showError(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }

    function hideError(element) {
        element.textContent = '';
        element.style.display = 'none';
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateEmail() {
        const email = emailInput.value.trim();
        if (email === '') {
            showError(emailError, 'Email is required.');
            return false;
        }
        if (!emailRegex.test(email)) {
            showError(emailError, 'Please enter a valid email address (e.g., example@gmail.com).');
            return false;
        }
        hideError(emailError);
        return true;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;

    function validatePassword() {
        const password = passwordInput.value;


        if (password.length < 8) {
            showError(passwordError, 'Password must be at least 8 characters long.');
            return false;
        }

        if (!/[A-Z]/.test(password)) {
            showError(passwordError, 'Password must contain at least 1 uppercase letter (A-Z).');
            return false;
        }

        if (!/[a-z]/.test(password)) {
            showError(passwordError, 'Password must contain at least 1 lowercase letter (a-z).');
            return false;
        }

        if (!/[@#$!]/.test(password)) {
            showError(passwordError, 'Password must contain at least 1 special character (e.g., @, #, $, !).');
            return false;
        }

        hideError(passwordError);
        return true;
    }

    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isEmailValid && isPasswordValid) {
            alert('Login Successful! ✅');
            console.log('Email:', emailInput.value);
            console.log('Password:', passwordInput.value);
        } else {
            console.log('Validation Failed');
        }
    });
});