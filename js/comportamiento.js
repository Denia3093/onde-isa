var Nombre;
var Apellidos;
var Cedula;
var Correo;
var Fecha;
var Hora;
var Telefono;
var Rango;
var Grado;

var fila = 0;

function registrar() {

    
    
     Nombre = document.getElementById("Nombre").value;
     Correo = document.getElementById("Correo").value;
     Correo =  document.getElementById("Email").value;
     Fecha = document.getElementById("date").value;
     Rango = document.getElementById("Rango").value;
     Grado = document.getElementById("Grado").value;
     Genero = document.getElementById("Genero").value;
     if( (Nombre == "") || 
         (Correo == "") || 
         (Fecha == "")||
        (Rango ==  "")|| 
        (Genero ==  "")|| 
        (Grado ==  "")){


        alert("Por favor completa los espacios requeridos"); 

        if(Nombre == ""){

            $(".1").show();
    
         }  
          if(Correo == ""){
    
             $(".2").show();
         }  
         if(Fecha == ""){
    
            $(".3").show();
         }   
         if(Rango == ""){
    
            $(".4").show();
    
         }  
    
         if(Genero == ""){
    
            $(".5").show();
    
         }  
         if(Grado == ""){
    
            $(".6").show();
    
         } 
     else{
     guardar();
     
     $(".invalid-feedback").hide();

    alert("Tu comentario ha sido registrado exitosamente.")
     }
}

function guardar(){
   localStorage.setItem("Nombre", Nombre); 
   localStorage.setItem("Email", Correo);
   localStorage.setItem("Date", Fecha);
   localStorage.setItem("Rango", Rango);
   localStorage.setItem("Genero", Grado);
   localStorage.setItem("Grado", Grado);
 


   mostrar();
}

function mostrar() {

    var tabla = document.getElementById("registros");
    var registros = "";
    
    

    Nombre= localStorage.getItem("Nombre");
    Correo = localStorage.getItem("Email");
    Fecha = localStorage.getItem("Date");
    Rango= localStorage.getItem("Rango");
    Genero= localStorage.getItem("Genero");
    Grado= localStorage.getItem("Grado");

    for(var i = 0; i <= fila; i++){
        
        
    registros += "<tr class='table-warning' value=" + Nombre + '">' 
    registros += '<td>' + Nombre + '</td>'
    registros += '<td>' + Correo + '</td>'
    registros +=  '<td>' + Fecha + '</td>'
    registros +=   '<td>' + Rango + '</td>'
    registros +=   '<td>' + Genero + '</td>'
    registros +=   '<td>' + Grado + '</td>'
        '</tr>';
        
        
        
        }
        tabla.innerHTML =registros;
        

    
        
}


function calcularEdad() { 
   
      var d = document.getElementById("Fecha").value;
      var inDate = new Date(d);
      var anno = inDate.getFullYear();
      var fec_hoy = new Date() ; 
      var fec_anno = fec_hoy.getFullYear() ;
      
      var edad   =  fec_anno - anno ;

      
   
        if (edad <= 18) {
        alert("Debes de ser mayor de edad para continuar");
        $("#my-form-button").prop('disabled', true);
       }
       else{
         $("#my-form-button").prop('disabled', false);
      }
    }
    
}