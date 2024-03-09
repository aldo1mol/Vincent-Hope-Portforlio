$(document).ready(function() {
    // Function to toggle the navbar links when the toggle button is clicked
    $(".toggle-button").click(function() {
        $(".navbar-links").slideToggle();
    });

    // Function to close the navbar links when the window is resized to a larger screen
    $(window).resize(function() {
        if ($(window).width() > 770) {
            $(".navbar-links").css("display", "flex");
        } else {
            $(".navbar-links").css("display", "none");
        }
    });

    // Function to hide the navbar when a link is clicked
    $(".navbar-links").click(function() {
        if ($(window).width() <= 770) {
            $(".navbar-links").css("display", "none");
        }
    });
});

