// Ejercicio: Administrador de Lista de Tareas Objetivo 1. Crear una lista de
// tareas con opciones para añadir elementos en diferentes posiciones, reemplazar,
// y eliminar. 2. Cada botón realizará una acción específica usando uno de los
// métodos de manipulación del DOM.

// Api de elementos
// elemento.before(); Añade el nuevo elemento justo antes.
// elemento.after(); Añade el nuevo elemento justo después.
// elemento.prepend(); Añade el nuevo elemento justo antes del primer hijo.
// elemento.append(); Añade el nuevo elemento justo después del último hijo
// elemento.replaceChildren(); eliminar todos los hijos y los cambia por el nuevo elemento.
// elemento.replaceWith(); se sustituye el elemento por el nuevo.
// elemento.remove(); elimina el propio elemento.


let AgregarAntes = document.getElementById('AgregarAntes');
AgregarAntes.addEventListener('click', agregarAntes);

function agregarAntes(){
    let primerElemento = document.getElementById('primerElemento');

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "AgregarAntes";
    primerElemento.before(nuevoElem);
}

let AgregarDespues = document.getElementById('AgregarDespues');
AgregarDespues.addEventListener('click', agregarDespues);

function agregarDespues(){
    let primerElemento = document.getElementById('primerElemento');

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "AgregarDespues";
    primerElemento.after(nuevoElem);
}

let AgregarInicio = document.getElementById('AgregarInicio');
AgregarInicio.addEventListener('click', agregarInicio);

function agregarInicio(){
    let primerElemento = document.getElementById('listaTareas');

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "AgregarInicio";
    primerElemento.prepend(nuevoElem);
}

let AgregarFinal = document.getElementById('AgregarFinal');
AgregarFinal.addEventListener('click', agregarFinal);

function agregarFinal(){
    let primerElemento = document.getElementById('listaTareas');

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "AgregarFinal";
    primerElemento.append(nuevoElem);
}

let ReemplazarTodo = document.getElementById('ReemplazarTodo');
ReemplazarTodo.addEventListener('click', reemplazarTodo);

function reemplazarTodo(){
    console.log("estoy");
    let primerElemento = document.getElementById('listaTareas');

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "ReemplazarTodo";
    primerElemento.replaceChildren(nuevoElem);
}

let ReemplazarPrimer = document.getElementById('ReemplazarPrimero');
ReemplazarPrimer.addEventListener('click', reemplazarPrimero);

function reemplazarPrimero(){
    let primerElemento = document.getElementById('primerElemento');

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "ReemplazarPrimero";
    primerElemento.replaceWith(nuevoElem);
    
}

let ElimPrimer = document.getElementById('ElimPrimer');
ElimPrimer.addEventListener('click', elimPrimer);

function elimPrimer(){
    let primerElemento = document.getElementById('primerElemento');
    primerElemento.remove();
}

let RemQuery = document.getElementById('ReemplazarPrimer');
RemQuery.addEventListener('click', query1);

function query1(){
    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "ReemplazarPrimero";
    let lista = document.querySelectorAll("li");
    lista[0].replaceWith(nuevoElem);
}

let ElimQuery = document.getElementById('ElimPrimera');
ElimQuery.addEventListener('click', query2);

function query2(){
    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    let lista = document.querySelectorAll("li");
    lista[0].remove();
}



