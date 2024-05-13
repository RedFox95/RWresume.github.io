document.addEventListener("DOMContentLoaded", function() {
    // get all the buttons and their corresponding content divs
    const buttons = document.querySelectorAll('.btn-group button');
    const contentDivs = document.querySelectorAll('.btn-group div');

    // add a click event listener to each button
    buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // toggle the display of the corresponding content div
        contentDivs[index].classList.toggle('hidden');
    });
    });
};
