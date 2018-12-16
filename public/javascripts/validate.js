
/* ==== Function para validar los campos del formulario ==== */


var nombre, apellido, telefono, email, expresion; //creo las variables de los inputs que quiero validar
var nombre = document.getElementById("nombre").value; //el id me permite seleccionar el valor del elemento que quiero validar
var apellido = document.getElementById("apellido").value;
var telefono = document.getElementById("telefono").value;
var email = document.getElementById("email").value;
var expresion= /\w+@\w+\.+[a-z]/; //variable con expresion regular para validar el campo del correo

function validateForm(){

    if(nombre === "" || apellido === "" || telefono === "" || email === ""){
        alert("Debes llenar los campos");
        return false;
    }
    else if(nombre.length>30 || apellido.length>30){
        alert("Debes escribir maximo 30 caracteres");
        return false;
    }
    else if(telefono.length>10){
        alert("El telefono es muy largo");
        return false;
    }
    else if(isNaN(telefono)){
        alert("No es un numero");
        return false;
    }
    else if(email.length>50){
        alert("El email es muy largo");
        return false;
    }
    else if(!expresion.test(email)){
        alert("El correo es invalido");
        return false;
};
}

function armarJson(){

}