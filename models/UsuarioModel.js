const usuarios = [
    {
        nombre: "Marck moncada",
        telefono: "31312223333",
        correo: "correo@correo.com",
        contrasena: "12345",
        id: "id12345"
    },
    {
        nombre: "sofia",
        telefono: "3138674934",
        correo: "sofia@correo",
        contrasena: "54321",
        id: "id54321"
    }
];

export function guardarUsuario(){

}

export function buscarUsuario(correo, contrasena){
    let auth = usuarios.some((usuario)=> correo == usuario.correo && contrasena == usuario.contrasena)
    return auth
}