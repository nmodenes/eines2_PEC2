/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

/* Esta función sirve para cambiar el color de los enlaces y el icono de hamburguesa,
   que aparecen en el contenedor nav de navegación en la página de inicio.
   Como la imagen elegida de fondo es oscura los enlaces y el icono de hamburguesa no se veían.
   Los colores definidos son de la clase de Boostrap navbar-dark, en vez de navbar-light
   que viene por defecto. */
document .addEventListener("DOMContentLoaded", () => {
  const nav= document.querySelector("header nav");
  
  if(window.location.pathname === "/" || window.location.pathname.includes("index.html")) {
    //nav.classList.remove("navbar-light");
    nav.classList.add("navbar-dark");
  }
});
