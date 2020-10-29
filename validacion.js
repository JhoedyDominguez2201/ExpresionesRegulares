function validacion1() {
    var Color = document.getElementById("color").value;
    

    if (!(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(Color))) {
        alert("Color invalido");
       
    } else {
        alert("Color valido");
        redireccionar();
        
    }

}

function validacion2() {
    var coordenadas = document.getElementById("coordenadas").value;
    

    if (!(/([0-9]{2}°[0-5][0-9]'[0-5][0-9]"[N|S]{1}[\s][0-9]{2}°[0-9]{2}'[0-5][0-9]"[E|O]{1})$/.test(coordenadas))) {
        alert("Coordenada invalida");
       
    } else {
        alert("Coordenada valida");
        redireccionar();

    }
}

function redireccionar(){
    location.href="nuevapagina.html";
}

function redireccionar2(){
    location.href="index.html";
}