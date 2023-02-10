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

    const text = document.querySelector("#text");

    document.body.addEventListener("mousemove", (event) => {
        const x = event.clientX;
        const y = event.clientY;

        const width = window.innerWidth;
        const height = window.innerHeight;

        const colorValue = Math.floor((x / width) * 255);
        const backgroundValue = 255 - colorValue;

        text.style.color = `rgb(${backgroundValue}, ${backgroundValue}, ${backgroundValue})`;
        document.body.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
      });
});




