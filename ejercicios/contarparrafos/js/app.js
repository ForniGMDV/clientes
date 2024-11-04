
// opción 1
// document.addEventListener("DOMContentLoaded",() => {
//     alert("DOM Cargado");

//     let texto = "";

//     if(window.navigator.cookieEnabled){
//         texto = "Cookies habilitadas"; 
//     } else {
//         texto = "Cookies están inhabilitadas";
//     }
//     alert(texto);

//     alert(`Tamaño de la ventana: Altura ${window.innerHeight}, Anchura: ${window.innerWidth}`);
// });

// function domCargado{
//     alert("DOM Cargado");

//     // contarParrafos();
// }


// El objeto window representa la ventana que contiene un documento DOM; 
// la propiedad document apunta al DOM document cargado en esa ventana.
// https://developer.mozilla.org/es/docs/Web/API/Window
// Window.innerHeight: Obtiene la altura del area de contenido del navegador incluyendo, 
// si es interpretado, la barra de deslizado.
// window.innerWidth: Obtiene el ancho del area de contenido de la ventana del navegador,
// si es interpretado, la barra de deslizado vertical.
// Window.location: Obtiene/fija la location, o URL actual, del objeto de la ventana.
// Window.navigator: Returns a reference to the navigator object.
// Window.sessionStorage: Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it.
// Window.localStorage: Retorna una referencia al objeto almacenamiento local usado para
// almacenar datos que pueden ser de accedidos por el origen que los creo.

// opcion 2 - onload
window.addEventListener("load",contarParrafos);

function contarEnlaces(){
    let info = document.getElementById("Información");

    // a) número de enlaces
    let numEnlaces = document.getElementsByTagName("a");
    console.log(numEnlaces);
    info.innerHTML = "El número de enlaces es: " + numEnlaces.length;

    // b) dirección del penúltimo enlace
    info.innerHTML += "<br>" + "La dirección del penúltimo enlace es: " + numEnlaces[numEnlaces.length-2];

    // c)
    let contador = 0;
    for (let i = 0; i<numEnlaces.length; i++){
        if(numEnlaces[i].href == 'http://prueba' || numEnlaces[i].href == 'http://prueba/'){
            contador++;
        }
    }
    info.innerHTML += "<br>" + "El número de enlaces que apunta a http://prueba/ es: " + contador;
    
    // d)
    let parrafos = document.getElementsByTagName("p");
    let enlaces = parrafos[2].getElementsByTagName("a").length;

    info.innerHTML += "<br>" + "El número de enlaces del tercer párrafo es: "+ enlaces.length;
}