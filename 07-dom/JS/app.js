function inicioDOM(){
    console.log("Dom cargado");

    document.body.style.background = 'cyan';

    //document.getElementById
    let titulo = document.getElementById("title");
    console.log(titulo);
    console.log(titulo.innerHTML);
    console.log(titulo.textContent);
    console.log(titulo.textContent.length);

    // getElementsByName
    let up_name = document.getElementsByName("up");
    console.log(up_name[0]);
    console.log(up_name[1]);
    console.log(up_name[0].tagName);
    console.log(up_name[1].tagName);

    // getElementsByTagName
    let parrafos = document.getElementsByTagName("p");
    console.log(parrafos);

    console.log(`Número de párrafos que tengo ${parrafos.length}`);
    for (let i = 0; i<parrafos.length; i++){
        if(i == 3){
            parrafos[i].innerHTML = "Párrafo cambiado";
        }
        console.log(`Párrafo ${i}: ${parrafos[i].innerHTML}`);
    }

    // getElementsByClassName
    let parrafosclase = document.getElementsByClassName("parrafos");
    console.log(parrafosclase);

    for (let i = 0; i < parrafosclase.length; i++){
        if(i == 4){
            parrafosclase[i].innerHTML = "Párrafo cambiado";
        }
        console.log(`Párrafo ${i}: ${parrafosclase[i].innerHTML}`);
    }

    // querySelector()
    let parrafitos = document.querySelector("p.parrafos");
    console.log(parrafitos.innerHTML);

    let parrafitos2 = document.querySelector(".projects");
    console.log(parrafitos2);

    let titulin = document.getElementById("titulo");
    console.log(titulin);
    

    // querySelectorAll()
    let elementos = document.querySelectorAll("p.parrafos");
    console.log(elementos);

    for (let i = 0; i < elementos.length; i++){
        if(i == 5){
            elementos[i].innerHTML = "Párrafo cambiado";
        }
        console.log(`Párrafo ${i}: ${elementos[i].innerHTML}`);
    }

    // Seleccióno el DOM parcialmente
    let sectionProjects = document.getElementById("projects");
    console.log(sectionProjects);
    elementos = sectionProjects.querySelectorAll("p.parrafos");
    console.log(`Número de elementos que tengo ${elementos.length}`);
    for(let i = 0; i<elementos.length;i++){
        console.log(`Elementos ${i+1}: ${elementos[i].innerHTML}`);
    }
}

let estado = true;
function cambioCabecera(cabecera){
    if(estado){
        cabecera.style.color = 'red';
        estado = false;
    }
    else{
        cabecera.style.color = 'black';
        estado = true;
    }
}

// Vamos a modificar el Titulo 2

// Opcion 1
function cambioSubstitulo(elemento){
    elemento.stlye.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';
}

document.getElementById('subtitle').onclick = cambioSubstitulo;

// Opcion 2
function cambioSubstitulo2(){
    let elemento = document.getElementById('subtitle');
    elemento.style.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';
}

let titleh3 = document.getElementById('H3title');
titleh3.addEventListener(`click`,cambioSubstitulo3);

elemento = document.getElementById('H3title');
elemento.style.color = 'blue';

function cambioSubstitulo3(){
    let elemento = document.getElementById('H3title');
    elemento.style.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';
}
