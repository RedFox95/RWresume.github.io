$(document).ready(() => {
    var toggleButton = document.getElementById("toggleButton");
    var maristnetworking = document.getElementById("maristnetworking");

    toggleButton.addEventListener("click", function() {
    if (maristnetworking.style.display === "none") {
        maristnetworking.style.display = "block";
    } else {
        maristnetworking.style.display = "none";
    }
    });

})