const myImage = document.getElementById("starPhoto");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    const myH1 = document.getElementById("clickPhotoH1");
    if (mySrc === "assets/StarPortrait.jpeg") {
        myImage.setAttribute("src", "assets/RomeoTongueOut.jpeg");
        myH1.textContent = "You've been bamboozled!";
    } else {
        myImage.setAttribute("src", "assets/StarPortrait.jpeg");
        myH1.setAttribute = "Click the dog for a fun surprise!";
    }
};