document.addEventListener("DOMContentLoaded", function() {
    // Get references to the toggle button and the content element
    const toggleButton = document.getElementsByClassName("toggle");
    const content = document.getElementsByClassName("content");

    // Add an event listener to the toggle button to detect when it is clicked
    toggleButton.addEventListener("click", function() {
    // Toggle the visibility of the content by changing the display property
    if (content.style.display == "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
    });
  });