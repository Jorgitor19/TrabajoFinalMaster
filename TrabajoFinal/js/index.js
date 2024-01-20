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
