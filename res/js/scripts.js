/**
 * Created by Connor on 12/31/2015.
 */

/* Vars declared here to remain in scope, initialized after page loads
var navbox;
var navboxheight;
var headlineheight;
var offsetval;
/* Initialize vars when page loads
window.onload = function() {
    navbox = document.getElementById("navbox-m");
    navboxheight = document.getElementById("navbox").style.height;
    headlineheight = document.getElementById("headline").style.height;
    offsetval = headlineheight - navboxheight;
}

/* Fixes the navbar to the top of the screen after scrolling down a certain distance.
 * For wide viewport only since the navbar is fixed by default in narrow viewports.
 *
window.onscroll = function() {
    var scrolltop = document.body.scrollTop;

    if(scrolltop >= offsetval) {
        navbox.classList.style.display = "block";
    } else {
        navbox.classList.style.display = "none";
    }
}

/* Toggles dropdown menu */
function dropdown() {
    var navicon = document.getElementById("navicon-m");
    // returns true if .show is added (i.e. dropdown opens) so change the img to an 'x'
    if (document.getElementById("navbar-m").classList.toggle('show')) {
        navicon.src = "res/svg/close.svg";
    } else {
        navicon.src = "res/svg/menu.svg";
    }
}

/* Close dropdown menu if clicked outside of it */
window.onclick = function(event) {
    if(document.getElementById("navbar-m").classList.contains('show') &&
        !event.target.matches('#navbutton-m') && !event.target.matches('#navicon-m')) {
        document.getElementById("navbar-m").classList.toggle('show', false);
        document.getElementById("navicon-m").src = "res/svg/menu.svg";
    }
}

