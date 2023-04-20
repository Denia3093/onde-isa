(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $('.fixed-top').css('top', $('.top-bar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-top').addClass('bg-dark').css('top', 0);
        } else {
            $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

var precio;
var titulo;
var totalPagar = 0;
var descripción;
var cantidad;
var fila = "";
var TP = 0;
var texto;




function eleccion(value, Titulo) {
    
    $("#cantidad").prop('disabled', false);

    titulo = Titulo;
    precio = value;
     texto  = document.getElementById("Producto");
    
    texto.innerText = "Producto: " + Titulo;

 
    
    $("html, body").animate({ 
        scrollTop: $("#Producto").offset().top
    });
   


}

function añadir(){
    cantidad = document.getElementById("cantidad").value;
    descripción = document.getElementById("Descripcion");
    var calculo = parseFloat(precio) * cantidad;

    if ((titulo == undefined) || titulo =="") {
        alert("Selecciona un producto para continuar")
        
    }

    else{
    fila = cantidad + " " + titulo + ": ₡" + calculo +"\n" ;

    descripción.innerHTML += fila;

    TP += parseFloat(calculo); 

    texto.innerText = "Producto: "
    $(".btn-danger").prop('disabled', false);
    $("#cantidad").val('1');
}
}


function comprar(){
    totalPagar = document.getElementById("Total");

    descripción = document.getElementById("Descripcion").value;

    if (descripción == "") {
        alert("Aun no has añadido nada al carrito")
        
    }
    else{
        totalPagar.value = "₡ " + (parseFloat(TP) + (parseFloat(TP) * 0.13));
        
    }
    
}

function nuevo() {
    descripción = document.getElementById("Descripcion");

    TP = 0;
    titulo = ""
    texto.innerText = "Producto: "
    descripción.innerText = "";
    totalPagar.value = "₡" + TP;
    $("#cantidad").val('1');
     $("#cantidad").prop('disabled', true);
}




//Para cargar el JSON del tipo de cambio
function llamarJson() {
    $.ajax({
        url: "https://tipodecambio.paginasweb.cr/api",
        type: "get",
        datatype: "json",


        //Funciones
        success : OnSuccess,
        error: OnError

    });
    
}



function OnSuccess(data) {
    var cargarRegistros = document.getElementById("Cambio");
    var registros = "";


     
        registros += "<p id='Fecha'>" + data.fecha + "</p>" +
        "Compra: <p id='Compra'>"+ data.compra + "</p>" +
        "Venta: <p id ='Venta'>" + data.venta + "</p>";
        
    
        cargarRegistros.innerHTML +=registros;

}




function OnError(jqXHR, textStatus, errorThrown) {
    alert("Mensaje de Error: " + errorThrown + "\nURL: " + url);
}