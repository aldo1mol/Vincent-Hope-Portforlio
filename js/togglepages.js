// Function to set the active link and toggle CSS
function setActiveLink(clickedLink) {
    // Add CSS properties to the clicked link
    clickedLink.css({
        "font-size": "20px",
        "color": "rgb(192, 165, 13)"
    });

    // Remove CSS properties from the other link
    $("a.nav-link").not(clickedLink).css({
        "font-size": "", // Remove the font-size property
        "color": ""      // Remove the color property
    });
}




// jQuery code to toggle between .text and .text-two when #about is clicked
    $("a[href='#about']").click(function (e) {
        e.preventDefault(); // Prevent the default behavior of the link
        var $clickedLink = $(this);

        // Toggle CSS properties for the active link
        setActiveLink($clickedLink);

        $(".text").hide(400); // Hide .text with a 400ms transition
        $(".text-two").show(400); // Show .text-two with a 400ms transition
        $(".services").hide(400);
        $(".projects").hide(400);
        $(".contact").hide(400);
    //Change the background image and apply fade-in transition
    $("#home").fadeOut(200, function() {
        $(this).css("background-image", "url(img/file.jpg)").fadeIn(400);
    });
    });

    // jQuery code to toggle between .text and .text-two when #home is clicked
    $("a[href='#home']").click(function (e) {
        e.preventDefault(); // Prevent the default behavior of the link
       var $clickedLink = $(this);

        // Toggle CSS properties for the active link
        setActiveLink($clickedLink);

        $(".text").show(400); // Show .text with a 400ms transition
        $(".text-two").hide(400); // Hide .text-two with a 400ms transition
        $(".services").hide(400);
        $(".contact").hide(400);
        $(".projects").hide(400);
        $("#home").fadeOut(200, function() {
            $(this).css("background-image", "url(/img/IMG_3017.jpg)").fadeIn(400);
        });

    });


     // jQuery code to toggle between .text and .text-two when #home is clicked
     $("a[href='#services']").click(function (e) {
        e.preventDefault(); // Prevent the default behavior of the link
        var $clickedLink = $(this);

        // Toggle CSS properties for the active link
        setActiveLink($clickedLink);
        $(".text").hide(400); // Show .text with a 400ms transition
        $(".text-two").hide(400); // Hide .text-two with a 400ms transition
        $(".projects").hide(400);
        $(".contact").hide(400);
        $(".services").show(400);
        $("#home").fadeOut(200, function() {
            $(this).css("background-image", "url(/img/IMG_3017.jpg)").fadeIn(400);
        });
    });


    $("a[href='#projects']").click(function (e) {
        e.preventDefault(); // Prevent the default behavior of the link
        var $clickedLink = $(this);

        // Toggle CSS properties for the active link
        setActiveLink($clickedLink);
        
        $(".text").hide(400); // Show .text with a 400ms transition
        $(".text-two").hide(400); // Hide .text-two with a 400ms transition
        $(".services").hide(400);
        $(".contact").hide(400);
        $(".projects").show(400);
        $("#home").fadeOut(200, function() {
            $(this).css("background-image", "url(/img/IMG_3017.jpg)").fadeIn(400);
        });

    });


    $("a[href='#contact']").click(function (e) {
        e.preventDefault(); // Prevent the default behavior of the link
        var $clickedLink = $(this);

        // Toggle CSS properties for the active link
        setActiveLink($clickedLink);
        
        $(".text").hide(400); // Show .text with a 400ms transition
        $(".text-two").hide(400); // Hide .text-two with a 400ms transition
        $(".services").hide(400);
        $(".projects").hide(400);
        $(".contact").show(400);
        $("#home").fadeout(200, function() {
            $(this).css("background-image", "url(/img/IMG_3017.jpg)").fadeIn(400);
        });

    });




























// // jQuery code to toggle between .text and .text-two when #about is clicked
// $("a[href='#about']").click(function (e) {
//     e.preventDefault(); // Prevent the default behavior of the link
//     $(".text").css("display", "none"); // Hide .text
//     $(".text-two").css("display", "block"); // Show .text-two
//     $(".services").css("display", "none");

//     // Change the background image
//     $("#home").fadeOut(200, function() {
//         $(this).css("background-image", "url(/img/file.jpg)").fadeIn(400);
//     });
// });

// // jQuery code to toggle between .text and .text-two when #home is clicked
// $("a[href='#home']").click(function (e) {
//     e.preventDefault(); // Prevent the default behavior of the link
//     $(".text").css("display", "block"); // Show .text
//     $(".text-two").css("display", "none"); // Hide .text-two
//     $(".services").css("display", "none");

//     // Change the background image
//     $("#home").fadeOut(200, function() {
//         $(this).css("background-image", "url(/img/IMG_3017.jpg)").fadeIn(400);
//     });
// });

// // jQuery code to toggle between .text and .text-two when #services is clicked
// $("a[href='#services']").click(function (e) {
//     e.preventDefault(); // Prevent the default behavior of the link
//     $(".text").css("display", "none"); // Hide .text
//     $(".text-two").css("display", "none"); // Hide .text-two
//     $(".services").css("display", "block"); // Show .services
//     // Change the background image
//     $("#home").fadeOut(200, function() {
//         $(this).css("background-image", "url(/img/IMG_3017.jpg)").fadeIn(400);
//     });
// });


































    
