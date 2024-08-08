// scripts.js
document.getElementById('submit-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let formMessage = document.createElement('div');
    formMessage.id = 'form-message';
    document.querySelector('.contact-form').appendChild(formMessage);

    if (name === '' || email === '' || subject === '' || message === '') {
        formMessage.textContent = 'Please fill in all fields';
        formMessage.style.color = 'red';
    } else if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address';
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = 'Thank you for contacting us!';
        formMessage.style.color = 'green';

        // Clear the form fields
        document.getElementById('submit-form').reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
