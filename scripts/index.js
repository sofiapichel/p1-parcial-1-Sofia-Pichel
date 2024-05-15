'use strict';

/*
 * Pichel,Sofía
 */

let biblioteca = new Biblioteca();

function cargar() {
    biblioteca.registrarDisco();
}

/**
 * Llamada desde un boton. Muestra todos los bibliotecas disponibles.
 */
function mostrar() {
    biblioteca.show("#discos");
};
