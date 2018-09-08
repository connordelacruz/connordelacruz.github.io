
/* Objects */

/**
 *
 * @param {string} name Site name
 * @param {string} url URL to site
 * @param {string} svg Name of the .svg file for icon (assumes the file is located in res/svg/)
 * @constructor
 */
function ContactLinkObject(name, url, svg) {
    this.name = name;
    this.url = url;
    this.svg = 'res/svg/' + svg;
}

/* Variables */

var contactLinks = [
    new ContactLinkObject('GitHub', 'https://github.com/connordelacruz', 'github.svg'),
    new ContactLinkObject('LinkedIn', 'http://www.linkedin.com/in/connordelacruz', 'linked.svg'),
    new ContactLinkObject('Email', 'mailto:connor.c.delacruz@gmail.com', 'email.svg'),
    new ContactLinkObject('Tumblr', 'https://connordelacruz.tumblr.com', 'tumblr.svg'),
    new ContactLinkObject('Instagram', 'https://www.instagram.com/delachrome', 'gram.svg')
];

/* Functions */

function buildContactLinksContainer(contactLinks) {
    var contactLinksContainer = '<div class="btn-group">';
    $.each(contactLinks, function (i, contactLink) {
        contactLinksContainer += buildContactLink(contactLink);
    });
    contactLinksContainer += '</div>';
    return contactLinksContainer;
}

function buildContactLink(contactLink) {
    return '<a class="btn btn-link" href="' + contactLink.url + '" target="_blank">' +
        '<img class="svg" src="' + contactLink.svg + '"/>' +
        '</a>';
}

function showCopyright() {
    $('.copyright').html('&copy; ' + new Date().getFullYear());
}


$(function () {
    // Populate contact links
    var contactLinksMarkup = buildContactLinksContainer(contactLinks);
    $('.contact-icons').html(contactLinksMarkup).addClass('in');

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
            }, 400);
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