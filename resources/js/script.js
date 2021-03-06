$(document).ready(function () {

    /* Hide skill descriptions on mobile phones until toggle */
    if ($(window).width() < 768) {
        $('.skills-col h4').each(function () {
            $(this).next().css('display', 'none');
            $('.mobile-disclaimer').css('display', 'block');
        });
    } else {
        $('.skills-col h4').each(function () {
            $(this).next().css('display', 'block');
            $('.mobile-disclaimer').css('display', 'none');
        });
    }

    
    /* Hero buttons scroll to sections */
    $('.js--scroll-to-bio').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-bio').offset().top
        }, 1000);
    });

    $('.js--scroll-to-projects').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-projects').offset().top
        }, 1000);
    });

    $('.js--scroll-to-skills').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-skills').offset().top
        }, 1000);
    });

    $('.js--scroll-to-resume').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-resume').offset().top
        }, 1000);
    });

    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-contact').offset().top
        }, 1000);
    });

    
    // Clicking on a project pic will make it flip
    var flipped = false;
    $('.project-container').click(function () {
        var effect = $(this).children('.flip-container').children('.flipper').css('transform') != 'none' ? 'none' : 'rotateY(180deg)';
        $(this).children('.flip-container').children('.flipper').css('transform', effect);
    });
    

    // Animations on scroll
    $('.download-button').waypoint(function (direction) {
        $(this).addClass('download-delay');
        $(this).addClass('animate__heartBeat');
    }, {
        offset: 'bottom-in-view'
    });

    
    // Thank you for your interest!
    $('.download-button').click(function () {
        alert('Thank you for your interest! I am looking forward to hearing back from you.');
    })
});


$(window).on('resize', function () {
    var win = $(this);

    // Dynamically removes skills desc for mobile phones
    if (win.width() < 768) {
        $('.skills-col h4').each(function () {
            $(this).next().css('display', 'none');
            $('.mobile-disclaimer').css('display', 'block');
        });
    } else {
        $('.skills-col h4').each(function () {
            $(this).next().css('display', 'block');
            $('.mobile-disclaimer').css('display', 'none');
        });
    }
});