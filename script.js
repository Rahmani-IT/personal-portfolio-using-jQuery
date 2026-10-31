$(document).ready(function() {


console.log("jQuery is ready!");

// Change Text
$("#changeText").click(function() {

    $("#headline").text("Welcome to My Web Development Portfolio!");

    $(".intro").text("I am learning HTML, CSS, JavaScript and jQuery.");

});


// Dark Theme
$("#darkTheme").click(function() {

    $("body").addClass("dark-theme");

    $("#headline").css("color", "#c7d2fe");

});


// Light Theme
$("#lightTheme").click(function() {

    $("body").removeClass("dark-theme");

    $("#headline").css("color", "");

});

        // Task 2: Hide
    $("#hideButton").click(function() {

        $("#status").hide();

        $("#facts").hide();

    });


    // Task 2: Show
    $("#showButton").click(function() {

        $("#status").show();

        $("#facts").show();

    });


    // Task 2: Toggle
    $("#toggleButton").click(function() {

        $("#status").toggle();

        $("#facts").toggle();

    });
    
// Task 3: Fade Methods

// Fade In
$("#fadeInButton").click(function() {

    $("#image1Box").fadeIn();

    $("#image2Box").fadeIn();

});


// Fade Out
$("#fadeOutButton").click(function() {

    $("#image1Box").fadeOut();

    $("#image2Box").fadeOut();

});


// Fade Toggle
$("#fadeToggleButton").click(function() {

    $("#image1Box").fadeToggle();

    $("#image2Box").fadeToggle();

});

        // Task 4: Slide Methods

    // Music
    $("#musicTitle").click(function() {

        $("#musicPanel").slideToggle();

    });


    // Movie
    $("#movieTitle").click(function() {

        $("#moviePanel").slideToggle();

    });


    // Subject
    $("#subjectTitle").click(function() {

        $("#subjectPanel").slideToggle();

    });


    // Slide Down Button
    $("#showAll").click(function() {

        $(".slidePanel").slideDown();

    });


    // Slide Up Button
    $("#hideAll").click(function() {

        $(".slidePanel").slideUp();

    });
    
   // Task 5: Add & Remove Elements

// Add Skill
$("#addSkill").click(function() {

    var skill = $("#skillInput").val().trim();

    if (skill != "") {

        $("#skillList").append("<li>" + skill + "</li>");

        $("#skillInput").val("");

    }

});


// Prepend Skill
$("#prependSkill").click(function() {

    var skill = $("#skillInput").val().trim();

    if (skill != "") {

        $("#skillList").prepend("<li>" + skill + "</li>");

        $("#skillInput").val("");

    }

});


// Remove Skill
$("#removeSkill").click(function() {

    $("#skillList li:last").remove();

});
    
        // Task 6: Modifying Attributes

    $("#changeLink").click(function() {

        $("#githubLink").attr("href", "https://github.com/Rahmani-IT");

        $("#githubLink").text("Visit My GitHub Profile");

    });
    
        // Task 7: Form Interaction

    $("#userName").keyup(function() {

        var name = $("#userName").val();

        $("#showName").text(name);

    });


    $("#userEmail").keyup(function() {

        var email = $("#userEmail").val();

        $("#showEmail").text(email);

    });
    
        // Task 8: Basic Animation

    var animationStarted = false;

    $("#animateSkills").click(function() {

        if (animationStarted == false) {

            $("#htmlBar").animate({
                width: "90%"
            });

            $("#cssBar").animate({
                width: "80%"
            });

            $("#jsBar").animate({
                width: "65%"
            });

            animationStarted = true;

        } else {

            $("#htmlBar").animate({
                width: "0%"
            });

            $("#cssBar").animate({
                width: "0%"
            });

            $("#jsBar").animate({
                width: "0%"
            });

            animationStarted = false;

        }

    });
    
});
