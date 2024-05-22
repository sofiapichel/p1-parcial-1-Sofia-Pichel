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
      let id = this.promptValidado("Código único de identificación", true, true);
  
      let disco = new Disco(nombre, artista, id);
      this.discos.push(disco);
  
      this.registrarPistas(disco); 
    }
  
    registrarPistas(disco) {
      while (true) {
        let nombre = this.promptValidado("Nombre de la pista");
        if (nombre === null) break; 
  
        let duracion = this.promptValidado("Duración de la pista en segundos", true, false);
        if (duracion === null) break; 
    
        let pista = new Pista(nombre, duracion);
        disco.agregarPista(pista);
  
        if (!confirm("¿Desea ingresar otra pista?")) break;
      }
    }
  
  
    //VALIDACIÓN DE TEXTO Y NÚMERO 
    promptValidado(mensaje, esNumero = false, esId = false) {
      let valor;
      while (true) {
        valor = prompt(mensaje);
        if (esNumero) {
          valor = parseInt(valor, 10); // Convertir a número entero en base 10
          if (!isNaN(valor)) {
            console.log(valor)
            if (valor < 1 || valor > 999 && esId) {//Números válidos
              alert("Solo se permiten números entre el 1 y el 999.");
              console.log("numero invalido") 
            }
            else if (this.idRepetido(valor) && esId) {//Repetición de id existente
              alert("El ID ya existe. Por favor, ingrese otro.");
            } 
            else if(!esId && (valor > 7200 || valor < 0))//duración de pista
            {
              alert("Tiempo de la pista inválido.");
            }
            else {
              break;
            }
          } else {
            alert("Por favor, ingrese un número válido.");
          }
        } else if (this.validarNull(valor)) {//Texto vacío
          alert("El texto no puede ser vacío.");
        } else {
          break;
        }
      }
      return valor;
    }
  
    idRepetido(id) {
      for (let disco of this.discos) {//Busca en la lista de discos si el id se repite
        console.log(disco.id)
        if (disco.id === id) {
          return true;
        }
      }
      return false;
    }
    validarNull(texto) {
      return texto == null ||  texto.trim() === "" ;//Valor null o con espacios sin caractéres
    }
  
    //Muestra el disco en el div seleccionado
    show(etiqueta) {
      const elemento = document.querySelector(etiqueta);
      elemento.innerHTML = "";  // Limpia el contenido antes de mostrar los discos, evitando duplicidad
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