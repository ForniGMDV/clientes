// // PEDIR NUMERO
// alert(`Vamos a crear una matriz`);

// // Matrices
// let matriz = [];
// // let i = prompt("Dime el tamaño de columna:");

// // for (let j = 0; j < i; j++){
// //     matriz[j] = new Array(i);
// // }

// autos = [['BMW1', 'BMW2', 'BMW3'], ['Audi1','Audi2'], ['Volvo']];
// console.log(autos);
// console.log(autos.length);

// function PintarMatriz(autos){
//     let resultado;
//     // ahora vamos a rellenar los valores
//     for (let i = 0; i < autos.length; i++){ 
//         for (let j = 0; j < autos[i].length; j++) {
//             resultado += autos[i][j];
//         }
//         console.log(autos[i]);
//     }
// }

// PintarMatriz(autos);
// function pedirNum(msj) {
//     let a = prompt(); // Pedir al usuario
//     while (isNaN(a)) {
//         a = prompt("Error: introduce un número (a): ");
//     }
//     return Number(a);
// }

// function CreaYPintaMatriz(fila, columna){
//     let matriz = new Array(fila);

//     for (let i = 0; i < columna; i++){  // inicializamos la matriz
//         matriz[i] = new Array(fila);
//     }

//     // ahora vamos a rellenar los valores
//     for (let i = 0; i < fila; i++){ 
//         for (let j = 0; j < columna; j++) {
//             matriz[i][j] = j;
//         }
//         console.log(matriz[i]);
//     }
// }

// let fila = pedirNum("Dime tamaño de la fila");
// let columna = pedirNum("Dime tamaño de la columna");

// CreaYPintaMatriz(fila, columna);


// //noooooo LA EMPEZO EL CIPOLLO PERO NO LA ACABO
// function otraCrearYPintarMatriz(fila,columna){
//     let matriz = new Array(columna);

//     // inicializamos matriz
//     for (let i = 0; i < columna; i++){
//         matriz[i] = [];
//     }

//     //relleno valores
//     for (let i = 0; i < fila; i++){
//     }
// }

// podemos crear una matriz tal que:  matriz = [[0,1,2,3],[0,1,2,3],[0,1,2,3]];





// Ejercicio de matrices
// Pedir por pantalla: numero de filas y de columnas (verificar que es numérico)
// Para cada una de las filas solicito un valor numérico
// Cada columna correspondiente será el todos los múltiplos de cada número insertado en la fila
// Cada numero tiene que tener dos digitos (02,04,06,08,10)

function validarNum() {
    let numerito = prompt("Introduce un número: ");
    while (isNaN(numerito) || numerito <= 0) {
        numerito = prompt("Error, introduce un número positivo: ");
    }
    return Number(numerito);
}

function formatearDosDigitos(numero) {
    let nuevoNum = Number(numero.toString());
    if(Number(nuevoNum)<10){
        return `0${nuevoNum}`;
    }
    else{
        return numero;
    };
}

alert(`Introduce un número para las filas`);
let numFilas = validarNum();
alert(`Introduce un número para las columnas`);
let numColumnas = validarNum();

let matriz = [];

for (let i = 0; i < numFilas; i++) {
    let fila = [];
    alert(`Ingrese un número para la fila ${i + 1}:`);
    let numeroBase = validarNum();
    
    for (let j = 0; j < numColumnas; j++) {
        let multiplo = numeroBase * (j + 1);
        fila.push(formatearDosDigitos(multiplo));
    }
    
    matriz.push(fila);
}

console.log("Matriz resultante:");
for (let fila of matriz) {
    console.log(fila.join(' '));
}
