const myImage = document.getElementById("starPhoto");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "assets/StarPortrait.jpeg") {
        myImage.setAttribute("src", "assets/RomeoTongueOut.jpeg");
    } else {
        myImage.setAttribute("src", "assets/StarPortrait.jpeg");
    }
};