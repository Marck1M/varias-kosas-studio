import { buscarUsuario } from "../models/UsuarioModel.js";
import { generalAlert } from "../helpers/alerts.js";

function iniciarSesion(){
    let correo = document.querySelector("#correo").value 
    let contrasena = document.querySelector("#clave").value

    let auth = buscarUsuario(correo, contrasena)
    if(auth){
        generalAlert("Bienvenido al sistema ", "SERA REDIRECCIONADO al catalogo de cosas", "success ")
        setTimeout(()=>{
            return window.location.href = "/views/pages/cosas-view-catalogo.html"
            
        }, 2000)
    }
    generalAlert("error", "usuario o contraseña incorrecto", "error")
    setTimeout(()=>{
        return window.location.href = "/index.html"

    }, 2000)
}


document.querySelector("#btn-login").addEventListener("click", iniciarSesion)