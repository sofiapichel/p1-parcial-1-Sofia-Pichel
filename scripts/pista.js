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
   * Convierte la duración de la pista en segundos al formato mm:ss
   */
  formatearDuracion() {
    const minutos = Math.floor(this.duracion / 60);//Redondea el resultado
    const segundos = this.duracion % 60;//Calcula el resto de la división (devuelve los segundos restantes)
    // Verifica que si el segundo es menor a 10, que no quede el número solo
    const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos;
    return `${minutos}:${segundosFormateados}`;
  }

    /**
     * Devuelve un string con formato de HTML para mostrar
     * la pista del disco
     * 
     */
    toString() {
      const duracionFormateada = this.formatearDuracion();
      const esDuracionLarga = this.duracion > 180; // Verifica si la duración es mayor a 3 minutos (180 segundos)
      const estiloDuracion = esDuracionLarga ? 'style="color: red;"' : ''; 
  
      return `<div class="card">
                <div class="card-body">
                  <h5 class="">Nombre: ${this.nombre}</h5>
                  <h6 class="" ${estiloDuracion}>Duración: ${duracionFormateada}</h6>
                </div>
              </div>`;
    }
    show(etiqueta) {
      document.querySelector(etiqueta).innerHTML += this.toString();
    }
  }
  