// signup-scripts

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    const togglePassword = document.getElementById('togglePassword');

    const successPopup = document.getElementById('successPopup');
    const closePopup = document.getElementById('closePopup');
    const mainContent = document.getElementById('main-content');

    // Form validation and message display
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent form from submitting normally

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Clear previous error messages
        clearErrors();

        let isValid = true;

        if (!name) {
            nameError.textContent = "Please enter your full name.";
            isValid = false;
        }

        if (!email) {
            emailError.textContent = "Please enter your email address.";
            isValid = false;
        } else if (!validateEmail(email)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (!phone) {
            phoneError.textContent = "Please enter your phone number.";
            isValid = false;
        } else if (!validatePhone(phone)) {
            phoneError.textContent = "Please enter a valid phone number (10 digits).";
            isValid = false;
        }

        if (!password) {
            passwordError.textContent = "Please enter your password.";
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters long.";
            isValid = false;
        }

        if (!confirmPassword) {
            confirmPasswordError.textContent = "Please confirm your password.";
            isValid = false;
        } else if (password !== confirmPassword) {
            confirmPasswordError.textContent = "Passwords do not match.";
            isValid = false;
        }

        // If the form is valid, show the success popup
        if (isValid) {
            showSuccessPopup();
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to validate phone number (10 digits)
    function validatePhone(phone) {
        return phone.length === 10 && /^\d+$/.test(phone);
    }

    // Function to clear all error messages
    function clearErrors() {
        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
    }

    // Function to show success popup and blur background
    function showSuccessPopup() {
        successPopup.style.display = 'flex';
        mainContent.classList.add('blur');
    }

    // Function to close success popup
    closePopup.addEventListener('click', () => {
        successPopup.style.display = 'none';
        mainContent.classList.remove('blur');
    });

    // Toggle password visibility for both password fields
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        confirmPasswordInput.type = type;
        togglePassword.innerHTML = type === 'password' ? '<img src="img/eye-outline.svg" alt="Show Password">' : '<img src="img/eye-off-outline.svg" alt="Hide Password">';
    });
});
