$(document).ready(function() {


console.log("jQuery is ready!");


$("#changeText").click(function() {

    $("#headline").text("Welcome to My Web Development Portfolio!");

    $(".intro").text("I am learning HTML, CSS, JavaScript and jQuery.");

});



$("#darkTheme").click(function() {

    $("body").addClass("dark-theme");

    $("#headline").css("color", "#c7d2fe");

});



$("#lightTheme").click(function() {

    $("body").removeClass("dark-theme");

    $("#headline").css("color", "");

});

       
    $("#hideButton").click(function() {

        $("#status").hide();

        $("#facts").hide();

    });


  
    $("#showButton").click(function() {

        $("#status").show();

        $("#facts").show();

    });


    $("#toggleButton").click(function() {

        $("#status").toggle();

        $("#facts").toggle();

    });
    
$("#fadeInButton").click(function() {

    $("#image1Box").fadeIn();

    $("#image2Box").fadeIn();

});



$("#fadeOutButton").click(function() {

    $("#image1Box").fadeOut();

    $("#image2Box").fadeOut();

});



$("#fadeToggleButton").click(function() {

    $("#image1Box").fadeToggle();

    $("#image2Box").fadeToggle();

});


    $("#musicTitle").click(function() {

        $("#musicPanel").slideToggle();

    });



    $("#movieTitle").click(function() {

        $("#moviePanel").slideToggle();

    });

    $("#subjectTitle").click(function() {

        $("#subjectPanel").slideToggle();

    });


    $("#showAll").click(function() {

        $(".slidePanel").slideDown();

    });


    $("#hideAll").click(function() {

        $(".slidePanel").slideUp();

    });

$("#addSkill").click(function() {

    var skill = $("#skillInput").val().trim();

    if (skill != "") {

        $("#skillList").append("<li>" + skill + "</li>");

        $("#skillInput").val("");

    }

});



$("#prependSkill").click(function() {

    var skill = $("#skillInput").val().trim();

    if (skill != "") {

        $("#skillList").prepend("<li>" + skill + "</li>");

        $("#skillInput").val("");

    }

});



$("#removeSkill").click(function() {

    $("#skillList li:last").remove();

});
    

    $("#changeLink").click(function() {

        $("#githubLink").attr("href", "https://github.com/Rahmani-IT");

        $("#githubLink").text("Visit My GitHub Profile");

    });
    
       

    $("#userName").keyup(function() {

        var name = $("#userName").val();

        $("#showName").text(name);

    });


    $("#userEmail").keyup(function() {

        var email = $("#userEmail").val();

        $("#showEmail").text(email);

    });
    
       

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
