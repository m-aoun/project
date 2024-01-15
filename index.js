// responsive nav bar 
var navlinks = document.getElementById("navlinks");

function ShowMenu() {
    navlinks.style.right = "-210px";
}

function HideMenu() {
    navlinks.style.right = "0";
}

// library used for animation
AOS.init({
    duration: 2000,
});


// nav on scroll color change
function changBy() {
    var navbar = document.getElementById('changeonscroll');
    var scrollPosition = window.scrollY;

    if (scrollPosition < 200) {
        navbar.classList.remove('nav_bar_when_scroll');
    } else {
        navbar.classList.add('nav_bar_when_scroll');
    }
}

window.addEventListener('scroll', changBy);
