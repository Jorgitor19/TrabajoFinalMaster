//---------------------------------------------------------------------------------------------------------
//                                  FETCH PARA EL HEADER
//---------------------------------------------------------------------------------------------------------
fetch('./components/header.html')

  .then(response => response.text())
  .then(data => {
    document.querySelector('header').innerHTML = data

  })
  .catch
//---------------------------------------------------------------------------------------------------------
//                                  FETCH PARA EL FOOTER
//---------------------------------------------------------------------------------------------------------

fetch('./components/footer.html')

  .then(response => response.text())
  .then(data => {
    document.querySelector('footer').innerHTML = data

  })
  .catch


//---------------------------------------------------------------------------------------------------------
//                                  TEXTO ANIMADO
//---------------------------------------------------------------------------------------------------------


/*Definimos una variable con un array que nos guarde el texto que va a cambiar, junto con
la creacion de un elemento HTML donde se van a mostrar las frases. Por ultimo creamos una
variable para el retardo y la duracuion de las animciones, tanto de entrada como la de salida*/

var textos = ["Jorge es ", "Jorge es aventura", "Jorge es emoción", "Jorge es recuerdos", "Jorge es nostalgia", "Jorge es adrenalina", "Jorge es explorador"];
var textoanimado = document.querySelector("#Textoanimado");
var retardo = 1000, duracionEntrada = 300, duracionSalida = 300;

/* Creamos una función para reemplazar la frase en el elemento ya creado. Seguidamente le decimos que 
actualize el contenido del html con la id "textoanimado" al texto en la posición [i] del array de textos*/
function reemplazarTexto(i) {
  setTimeout(() => {
    textoanimado.innerText = textos[i];
  }, retardo * i);
}

/*Creamos una función para animar la entrada y salida del texto, seguidamente vamos a actualizar
 la clase del html con la id "textoanimado" al valor de estado. */

function animar(estado, i) {
  setTimeout(() => {
    textoanimado.className = estado;
  }, retardo * i);


/* Si no es la primera animación, vuelve la clase del html con id "textoanimado" al estado original por ultimo 
calculamos el tiempo de espera antes de ejecutar la función donde le decimos que si estado es "animacion-js", 
selecciona la duración de entrada  de lo contrario, selecciona la duración de salida*/
  if (i !== 0) {
    setTimeout(() => {
      textoanimado.className = "";
    }, retardo * i - (retardo - (estado === "animacion-js" ? duracionEntrada : duracionSalida)));
  }
}

/*Ahora vamos a crear lo que seria la funcion principal para animar el texto donde le vamos a decir que 
reemplace el texto y que realice la animacion de entrada y ejecutamos la animacion de salida  */
function animarTexto() {
  for (let i = 0; i < textos.length; i++) {
    reemplazarTexto(i);
    animar("animacion-js", i);
    animar("animacion-js-off", i);
  }
}

// Llamamos a la funcion animarTexto y le decimos que repita la animacion cada cierto tiempo
animarTexto();
setInterval(animarTexto, retardo * textos.length);



//---------------------------------------------------------------------------------------------------------
//                                  FORMULARIO
//---------------------------------------------------------------------------------------------------------

// Creamos una funcion de un formulario donde guarde las variables de los campos del formulario

function enviarFormulario() {
  
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;

  // Creamos las variables con los distintos tipos de mensaje, o el bueno o el malo
  var mensajeBien = document.getElementById("mensajebien");
  var mensajeError = document.getElementById("mensajeerror");

  // Reiniciamos los mensajes
  mensajeBien.textContent = "";
  mensajeError.textContent = "";

  // Comprobamos que todos los mensajes estan completados
  if (nombre !== '' && email !== '' && mensaje !== '') {
    // Mostramos el mensaje de que todo esta bien y se ha enviado correctamente
    mensajeBien.textContent = "¡Datos enviados correctamente!";
  } else {
    // Si no mostramos el mensaje de error
    mensajeError.textContent = "Por favor, completa todos los campos.";
  }
}



//---------------------------------------------------------------------------------------------------------
//                                  MENU PARA MOVIL
//---------------------------------------------------------------------------------------------------------


// Creamos una funcion con un elemento en html con la id "menu_movil" para que sea el 100% del ancho

function abrirmenu() {
  document.getElementById("menu_movil").style.width = "100%";
}

// Creamos una funcion con un elemento en html con la id "menu_movil" para que sea el 0% del ancho

function cerrarmenu() {
  document.getElementById("menu_movil").style.width = "0%";
}



//---------------------------------------------------------------------------------------------------------
//                                  ACORDEON
//---------------------------------------------------------------------------------------------------------



/* Creamos las variables donde coja todos los elementos con la clase "acordeon" y los guarde en la variable "acordeon" y
creamos una variable sin declarar que la usaremos para el bucle*/
var acordeon = document.getElementsByClassName("acordeon");
var indice;

/* Recorremos todos los elementos con la clase "acordeon, agregamos un event listener para el evento "click" a cada 
elemento "acordeon", seguidamente alternamos la clase activo, dependiendo si esta activo o inactivo, finalmente creamos
la variable panel donde hara que se expanda o no al hacer clic en el elemento "acordeon"*/
for (indice = 0; indice < acordeon.length; indice++) {
  acordeon[indice].addEventListener("click", function () {
    this.classList.toggle("activo");
    var panel = this.nextElementSibling;


    // Comprobamos si el panel es "block" (visible), en ese caso ocultamos el panel
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {

      // En caso contrario ocultamos todos los paneles y luego mostramos el panel del elemento que nosotros seleccionemos
      var todosPaneles = document.querySelectorAll('.panel');
      for (var i = 0; i < todosPaneles.length; i++) {
        todosPaneles[i].style.display = 'none';
      }
      panel.style.display = "block";
    }
  });
}