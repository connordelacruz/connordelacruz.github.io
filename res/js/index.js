
/* Variables */

// TODO: declare list of contact section urls and icons to be added to the page

/* Functions */

function showCopyright() {
    $('.copyright').html('&copy; ' + new Date().getFullYear());
}


$(function () {
    var navbar = $('#navbar');
    // Enable affixed navbar
    navbar.affix({
        offset: {
            top: navbar.offset().top
        }
    });
    // Enable scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 70
    });

    // for smooth scrolling links
    navbar.find('a').click(function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                // Subtract the size of navbar container (if not affixed will compensate for increased page height, if affixed compensates for navbar height)
                scrollTop: $(hash).offset().top - $('#navbar-container').outerHeight()
            }, 400, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                // TODO: causes page to jump to hash in Chrome so omitting for now
                // window.location.hash = hash;
            });
        }
    });

    // Collapse navbar w/ animation when body is clicked
    $(document).click(function (event) {
        var clickTarget = $(event.target);
        var isOpened = $('.navbar-collapse').hasClass('collapse in');
        // Collapse if navbar is open and this isn't the navbar-toggle button
        if(isOpened && !clickTarget.hasClass('navbar-toggle')) {
            $('button.navbar-toggle').click();
        }
    });

    $('#about-photo').on('dragstart', function(event) { event.preventDefault(); });

    showCopyright();
});