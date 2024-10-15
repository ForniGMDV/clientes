function validarNum() {
    let numero = prompt("Introduce un número entre 2 y 5: ");
    while (isNaN(numero) || (numero < 2 || numero > 5)) {
        numero = prompt("Error, introduce un número entre 2 y 5: ");
    }
    return Number(numero);
}

let N = validarNum();

// APARTADO A
function crearMatriz(num) {
    let matriz = [];

    for (let i = 0; i < num; i++) {
        matriz[i] = [];
        for (let j = 0; j < num; j++) {
            matriz[i][j] = Math.floor((Math.random()*100)+1);
        }
    }

    return matriz;
}

let nuestramatriz = crearMatriz(3);
console.log(nuestramatriz);




// APARTADO B

pintarMatriz(nuestramatriz);

function pintarMatriz(matriz){
    let resultado = 0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(i == 0 && j == 0){
                if(matriz[i][j] < 10){
                    resultado = `0${matriz[i][j]} `;
                }
                else{
                    resultado = `${matriz[i][j]} `;
                }
            }
            else{
                if(matriz[i][j] < 10){
                    resultado += `0${matriz[i][j]} `;
                }
                else{
                    resultado += `${matriz[i][j]} `;
                }
            }
        }
        resultado += `\n`;
    }
    console.log(resultado);
}


// APARTADO C

function calcularMedia(matriz){
    let media = 0;
    let suma = 0;
    let contador = 0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            suma += Number(matriz[i][j]);
            contador++;
        }
    }

    media = Number(suma / contador);
    return media;
}

console.log(`La media es ${calcularMedia(nuestramatriz)}`);


// APARTADO D

function MayoresyMenoresQueLaMedia(matriz){
    let resultado = [[],[]];
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > calcularMedia(matriz)){
                resultado[0].push(matriz[i][j]);
            }
            else{
                resultado[1].push(matriz[i][j]);
            }
        }
    }
    return resultado;
}

console.log(`Los números que sean mayores que la media van en la fila de arriba y los que son menores van en la de abajo:`)
let result = MayoresyMenoresQueLaMedia(nuestramatriz)
console.log(result);



// APARTADO E

function validarNum2() {
    let numero = prompt("Escoge como ordenar el array resultados:\n0 --> Ascendente\n1 --> Descendente ");
    while (isNaN(numero) || (numero < 0 || numero > 1)) {
        numero = prompt("Error, introduce o 0 (Ascendiente) o 1 (Descendiente): ");
    }
    return Number(numero);
}

let pedir = validarNum2();

function ordenarMatriz(arrayresultados,seleccion){
    const numeros = arrayresultados;
    orden = numeros.sort(function(a,b){return a-b});
    if(seleccion == 0){
        console.log(orden);
    }
    else{
        console.log(orden.reverse());
    }
}

let ordenado = ordenarMatriz(result,pedir);
console.log(ordenado);