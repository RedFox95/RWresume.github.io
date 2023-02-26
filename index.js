document.addEventListener("DOMContentLoaded", function() {
    
    const contactBtn = document.getElementById('contact');
    const footer = document.querySelector('.footer');

    contactBtn.addEventListener('click', () => {
    footer.classList.toggle('visible');
    });

});