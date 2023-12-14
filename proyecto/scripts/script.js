function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    
    // Cierra la barra de navegación cuando se hace clic en un enlace interno
    var links = document.querySelectorAll('.topnav a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            var x = document.getElementById("myTopnav");
            x.className = "topnav"; // Cambia la clase para cerrar el menú
        });
    });
}

//Funcion footer

function onFooter() {
    
}