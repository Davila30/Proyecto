function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var links = document.querySelectorAll('.topnav a[href^="#"]');
links.forEach(function(link) {
    link.addEventListener('click', function() {
        var x = document.getElementById("myTopnav");
        if (x.className.includes("responsive")) {
            x.className = "topnav";
        }
    });
});