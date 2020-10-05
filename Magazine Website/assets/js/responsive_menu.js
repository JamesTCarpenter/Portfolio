/**
 * File: responsive_menu.js
 *
 * Implements very simple drop-down functionality for the navigation on tablet and mobile layouts.
 *
 * Authors: May Hassan Ismail Ahmed Abouelkhir, James Carpenter, Shamie Jegan, Alana Schroeder, Syana Seri, Fatma Shawkey
 */

// After the DOM loads, attach a click event listener to the drop down button
window.onload = function() {
    // Get the drop down button element
    var dropdown_button = document.getElementById("dropbtn");

    // Assign an event listener for clicks on the button
    dropdown_button.addEventListener("click", function() {

        // Get the element's next sibling, i.e. the drop down menu
        var dropdown_menu = this.nextElementSibling;

        // Swap the visibility of the drop down menu
        if (dropdown_menu.style.display === "block") {
            dropdown_menu.style.display = "none";
        } else {
            dropdown_menu.style.display = "block";
        }
    });
};

