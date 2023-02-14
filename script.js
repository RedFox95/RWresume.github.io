$(document).ready(() => {
    $('#experience-toggle').on('click', () => {
        $('.experience').toggle();
    });
    $('#projects-toggle').on('click', () => {
        $('.projects').toggle();
    });
    $('#contact-toggle').on('click', () => {
        $('.contact').toggle();
    });
    $('#about-toggle').on('click', () => {
        $('.about').toggle();
    });
})