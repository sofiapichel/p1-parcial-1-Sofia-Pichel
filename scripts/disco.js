class Disco {
    /**
     * Contructor de disco
     * @param {String} nombre 
     * @param {String} autor 
     * @param {String} id 
     */
    constructor(nombre, autor, id, pistas) {
      this.nombre = nombre;
      this.autor = autor;
      this.id = id;
      this.pistas = [];
    }
  
    /**
     * Devuelve un string con formato de HTML para mostrar
     * el disco
     * 
     */
    toString() {
      return `<div class="card" style="width: 18rem;">
                <div class="">
                  <p>Álbum</p>
                  <h5 class="">Nombre: ${this.nombre}</h5>
                  <h6 class="">Autor: ${this.autor}</h6>
                  <h6 class="">Código ID: ${this.id}</h6>
                  <hr style="border:1px solid white;">
                  <p>Pistas</p>
                  <p class="">${this.pistas}</p>
                </div>
              </div>`;
    }
  
    show(etiqueta) {
      document.querySelector(etiqueta).innerHTML += this.toString();
    }

    agregarPista(pista) {
      console.log(pista)
      this.pistas.push(pista);
    }
  }
  