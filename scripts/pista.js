class Pista {
    /**
     * Contructor de pista
     * @param {String} nombre 
     * @param {String} duracion 
     */
    constructor(nombre, duracion) {
      this.nombre = nombre;
      this.duracion = duracion;
    }
  
    /**
     * Devuelve un string con formato de HTML para mostrar
     * la pista del disco
     * 
     */
    toString() {
      return `<div class="" >
                <div class="card-body">
                  <h5 class="">Nombre: ${this.nombre}</h5>
                  <h6 class="">Duración: ${this.duracion}</h6>
                </div>
              </div>`;
    }
  
    show(etiqueta) {
      document.querySelector(etiqueta).innerHTML += this.toString();
    }
  }
  