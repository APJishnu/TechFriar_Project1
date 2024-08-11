document.getElementById('submit-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');

    // Clear any previous error messages
    clearErrorMessages();

    let isValid = true;

    // Validate name
    if (name.value === '') {
        showError(name, 'Please enter your name');
        isValid = false;
    } else if (!validateText(name.value)) {
        showError(name, 'Name should only contain letters and spaces');
        isValid = false;
    }

    // Validate email
    if (email.value === '') {
        showError(email, 'Please enter your email');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate subject
    if (subject.value === '') {
        showError(subject, 'Please enter a subject');
        isValid = false;
    } else if (!validateText(subject.value)) {
        showError(subject, 'Subject should only contain letters and spaces');
        isValid = false;
    }

    // Validate message
    if (message.value === '') {
        showError(message, 'Please enter your message');
        isValid = false;
    } else if (!validateWordCount(message.value)) {
        showError(message, 'Message must contain at least 5 words');
        isValid = false;
    }

    // If the form is valid, show the success message
    if (isValid) {
        showSuccessMessage();
        document.getElementById('submit-form').reset();
    }
});

function showError(inputElement, errorMessage) {
    let errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = errorMessage;
    errorElement.style.color = 'red';
    inputElement.parentNode.appendChild(errorElement);
}

function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (errorMessage) {
        errorMessage.remove();
    });
}

function showSuccessMessage() {
    let formMessage = document.getElementById('form-message');
    formMessage.textContent = 'Thank you for contacting us!';
    formMessage.style.display = 'block'; // Show the message

    // Remove the message after 5 seconds
    setTimeout(function () {
        formMessage.style.display = 'none';
    }, 5000);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateText(text) {
    const re = /^[A-Za-z\s]+$/;
    return re.test(text);
}

function validateWordCount(text) {
    const words = text.trim().split(/\s+/);
    return words.length >= 5;
}
