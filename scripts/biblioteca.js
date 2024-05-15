class Biblioteca {

    #discos = [];
    #pistas = [];
    constructor() {
      this.#discos = [];
      this.#pistas = [];

    //   fetch("discos.json")
    //     .then(response => response.json())
    //     .then(json => {
  
    //       if(json != undefined) {
    //         console.log(json)
    //         for(let disco of json) {
    //           this.#discos.push(new Disco(
    //             disco.nombre, 
    //             disco.artista, 
    //             disco.id, 
    //             disco.pistas
    //           ));
    //         }
    //       }
          
    //     });  
    }
  
    registrarDisco() {
      let nombre = this.promptValidado("Nombre del disco");
      let artista = this.promptValidado("Autor del disco");
      let id = this.promptValidado("Código único de identificación", true);
    
      // Creo el disco
      let disco = new Disco(nombre, artista, id);
      // Agrego disco 
      this.discos = disco;

      this.registrarPista(disco);
    }

    registrarPista(disco) {
      //VALIDACION DE SEGUIR INGRESANDO PISTAS CON EL CONFIRM
      let nombre = this.promptValidado("Nombre de la pista");
      let duracion = this.promptValidado("Duración de la pista", true);
  
      // Creo la pista
      let pista = new Pista(nombre, duracion);
      // Agrego pista al disco
      disco.agregarPista(pista);
      
    }
  
    //VALIDACIÓN DE TEXTO Y NÚMERO 
    promptValidado(mensaje, esNumero = false) {
      let valor;
      while (true) { //Mientras que se ingrese un mensaje
        valor = prompt(mensaje);
        if (esNumero) {
          valor = parseInt(valor, 10); // Convierte un string en un num - utiliza la base 10 - logra identificar un número
          if (!isNaN(valor)) {
            break;
          } else {
            alert("Por favor, ingrese un número válido.");
          }
        } else if (this.validarNull(valor)) {//Si no es número, evalúa que el texto no sea null
          alert("El texto no puede ser vacío.");
        } else {
          break;
        }
      }
      return valor;
    }
  
    validarNull(texto) {
      return texto == null;
    }
  
    //Muestra el disco en el div seleccionado
    show(etiqueta) {
      const elemento = document.querySelector(etiqueta);
      elemento.innerHTML = "";  // Limpiar el contenido antes de mostrar los discos, evitando duplicidad
      for (let disco of this.discos) {
        disco.show(etiqueta);
      }
    }
  
    get discos() {
      return this.#discos;
    }
  
    set discos(disco) {
      this.#discos.push(disco);
    }

    get pistas() {
      return this.#pistas;
    }
  
    set pistas(pista) {
      this.pistas.push(pista);
    }
    
  }