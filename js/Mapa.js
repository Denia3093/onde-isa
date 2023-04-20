
var map;
var myLatLng;
var boton = document.querySelector(".btn-info");

function initMap(){

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
} 

else {
    x.innerHTML = "Geolocalización no está soportada en este navegador.";
}

function showPosition() {


 myLatLng = { lat:10.010077813765411, lng: -84.17600403005947 };
 map = new google.maps.Map(document.getElementById("googleMap"),
  {center:myLatLng, 
    zoom:14});

//Marcador y mapear mi ubicación
new google.maps.Marker({
position: myLatLng,
map,
title: "OndeIsa"});

}

function showError(error) {

      switch(error.code) {
            case error.PERMISSION_DENIED: // Acceso Posicion
             x.innerHTML = "Acceso denegado."
             break;
            case error.POSITION_UNAVAILABLE: //Info Pocision
             x.innerHTML = "La información no se encuentra disponible."
             break;
            case error.TIMEOUT: //Tiempo en responder
             x.innerHTML = "El tiempo de espera de la solicitud se ha agotado. Intentelo de nuevo."
             break;
            case error.UNKNOWN_ERROR: // Desconocido
             x.innerHTML = "Error desconocido. Intentelo de nuevo."
             break;
    }
}
}		

function myMap() { //Para poder realizar otra ruta

myLatLng = { lat:10.010001, lng: -84.176019 };
map = new google.maps.Map(document.getElementById("googleMap"),
{center:myLatLng, 
zoom:14});

//Marcador y mapear mi ubicación
new google.maps.Marker({
position: myLatLng,
map,
title: "OndeIsa"});

boton.disabled =false;

}


function CalcularDistancia() {

var miDirección = document.getElementById("txtOrigem").value;

var configDR = {
    map: map,
}

var configDS = {
    origin: miDirección,
    destination: myLatLng,
    travelMode: google.maps.TravelMode.DRIVING
}

var ds = new google.maps.DirectionsService(); //Para obtener coordenadas
var dr = new google.maps.DirectionsRenderer(configDR); //Traduce coordenadas a una ruta

ds.route(configDS, Rutear);

function Rutear(result, status) {
    //Para mostrar la linea entre a y b
    if (status == 'OK') {
        dr.setDirections(result);
        boton.disabled = true;
    }

    else{
        alert("Dirección errónea o no ingresada, intenta de nuevo " + status)
    }
}

}