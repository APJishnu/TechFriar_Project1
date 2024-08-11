// toggle-navbar

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.icon');
    const menu = document.querySelector('.list-item');

    if (toggleButton && menu) {
        toggleButton.addEventListener('click', () => {
            menu.classList.toggle('show');
            
            
        });
    }
});