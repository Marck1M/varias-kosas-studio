import { getLocalStorage } from "../helpers/local-storage.js";

export function verificarSesion() {
    const usuario = getLocalStorage("usuario");
    if (!usuario) {
        window.location.href = "/index.html";
    }
}