var parte1 = ["!24 hechos", " 10 relevacines inesperadas", " 13 secretos", " 56 consejos", " 36 verdades incomodas", " escandalos de celebridades", " descubiertos infraganti"];

var parte2 = [" de x famoso", " para ligar", " sobre tu marca de telefonos favorito",  " para hacerte millonario", " sobre la cerveza", " socialistas", " los comunistas"];

var parte3 = [ " que nunca hubieras imaginado", " que no podras creer", " que te resultaran inesperadas", " que te sorprenderan", " que siempre imaginaste", " que eran secreto a voces"];

function obtenerNumeroAlAzar(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo)) + minimo;
}

function obtenerTitular(){
    var texto1 = parte1[obtenerNumeroAlAzar(0, parte1.length)];
    var texto2 = parte2[obtenerNumeroAlAzar(0, parte2.length)];
    var texto3 = parte3[obtenerNumeroAlAzar(0, parte3.length)];
    return texto1 + texto2 + texto3;
}

function generarClickbait(cantidadClickbait){
    if(cantidadClickbait < 1){
        throw "Muy pocos click para llegar al millon";
    }

    var contenidoHTML = "";
    
    for(var i =0; i < cantidadClickbait; i++){
        var imagenRandom = obtenerNumeroAlAzar(1,9);

        //+=para anadir texto
        contenidoHTML +='<div class="col-12 col-sm-6 col-md-4 col-lg-3">';
        contenidoHTML +='<img src=img/' + imagenRandom + '.jpg class="img-fluid">';             
        contenidoHTML += '<br><br>';
        contenidoHTML += '<h3><a href="#">' + obtenerTitular() + '</a></h3>';
        contenidoHTML += '<br><br>';
        contenidoHTML += '</div>';
    }

    document.getElementById('noticias').innerHTML = contenidoHTML;
}

document.addEventListener('DOMContentLoaded', function(){

    generarClickbait(8);
}, false);