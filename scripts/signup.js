document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        confirmPasswordInput.type = type;
        togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });

    // Form validation and popup
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (!name || !email || !password || !confirmPassword) {
            showPopup('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            showPopup('Passwords do not match.');
            return;
        }

        // Simulate successful form submission
        setTimeout(() => {
            showPopup('Successfully registered!', true);
        }, 500);
    });

    function showPopup(message, isSuccess = false) {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `
            <div class="message">${message}</div>
            <button class="close-button">Close</button>
        `;
        document.body.appendChild(popup);
        popup.style.display = 'block';

        // Apply blur to the main content
        document.body.classList.add('blurred');

        const closeButton = popup.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            popup.style.display = 'none';
            document.body.removeChild(popup);

            // Remove blur effect when popup is closed
            document.body.classList.remove('blurred');

            // Redirect to another page after successful registration
            if (isSuccess) {
                window.location.href = 'index.html';
            }
        });
    }
});
