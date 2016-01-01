/**
 * Created by Connor on 12/31/2015.
 */
function dropdown() {
    document.getElementById("navbar-m").classList.toggle('show');
}

/* Close dropdown menu if clicked outside of it */
window.onclick = function(event) {
    if(!event.target.matches('#navbutton-m') && !event.target.matches('#navicon-m')) {
        document.getElementById("navbar-m").classList.toggle('show', false);
    }
}