


$(function () {
    var navbar = $('#navbar');
    // Set offset for affixing navbar
    navbar.affix({
        offset: {
            top: navbar.offset().top
        }
    });

    // for smooth scrolling links
    navbar.find('a').click(function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
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
});