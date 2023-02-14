$(document).ready(() => {
    $('.experience').hide();
    $('.projects').hide();
    $('.contact').hide();
    $('.about').hide();
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

});




