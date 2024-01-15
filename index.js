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

