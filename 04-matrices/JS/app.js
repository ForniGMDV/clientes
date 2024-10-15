// // PEDIR NUMERO
// alert(`Vamos a crear una matriz`);

// // Matrices
// let matriz = [];
function crearMatriz(filas, columnas) {
    let matriz = [];

    for (let i = 0; i < filas; i++) {
        matriz[i] = []; // Inicializa la fila
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = i; // Asigna el valor inicial
        }
    }

    return matriz;
}

let matriz2 = crearMatriz(4,4);
console.log(matriz2);
// function pedirNum(msj) {
//     let a = prompt(); // Pedir al usuario
//     while (isNaN(a)) {
//         a = prompt("Error: introduce un número (a): ");
//     }
//     return Number(a);
// }

// Crear una matriz
let matriz3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Acceder a un elemento
console.log(matriz2[1][2]); // Salida: 6

// Modificar un elemento
matriz3[0][0] = 10;
console.log(matriz3[0][0]); // Salida: 10

// Recorrer la matriz
for (let i = 0; i < matriz3.length; i++) {
    for (let j = 0; j < matriz3[i].length; j++) {
        console.log(matriz3[i][j]);
    }
}
// let fila = pedirNum("Dime tamaño de la fila");
// let columna = pedirNum("Dime tamaño de la columna");

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
