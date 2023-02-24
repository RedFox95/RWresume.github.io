$(document).ready(() => {

    const toggleButton = document.getElementById("maristnetworkingtoggle");
    const contentDiv = document.getElementById("maristnetworkingcontent");

    toggleButton.addEventListener("click", function() {
        if(this.classList === "hidden") {
            contentDiv.style.display = "flex";
        }
    });


})