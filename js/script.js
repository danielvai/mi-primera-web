
console.log("Mi archivo JavaScript funciona");

let nombreWeb = "Mi primera web";
let numeroPaginas = 3;
let webPublicada = false;

console.log(nombreWeb);
console.log(numeroPaginas);
console.log(webPublicada);

if (numeroPaginas >= 3) {
    console.log("Mi web tiene varias páginas");
} else {
    console.log("Mi web todavía tiene pocas páginas");
}

function saludar() {
    console.log("¡Bienvenido a mi página web!");
}

saludar();

let boton = document.getElementById("mi-boton");

boton.addEventListener("click", function() {
    alert("¡Has pulsado tu primer botón interactivo!");
});

let mensaje = document.getElementById("mensaje-js");

mensaje.textContent = "¡El texto ha cambiado con JavaScript!";

const botonMenu = document.getElementById("boton-menu");
const menuPrincipal = document.getElementById("menu-principal");

botonMenu.addEventListener("click", function() {
    menuPrincipal.classList.toggle("abierto");

    const estaAbierto = menuPrincipal.classList.contains("abierto");
    botonMenu.setAttribute("aria-expanded", String(estaAbierto));
});
