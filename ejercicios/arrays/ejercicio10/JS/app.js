function filtrarAmigos(nombres) {
    const amigos = [];
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].length === 4) {
            amigos.push(nombres[i]);
        }
    }
    return amigos;
}

// Ejemplos de uso
const entrada1 = ["Luis", "Estela", "Ángel", "Enya", "Jose Antonio"];
const salida1 = filtrarAmigos(entrada1);
console.log("Entrada 1:", entrada1);
console.log("Salida 1:", salida1);

const entrada2 = ["Joaquín", "Manuel", "Carlos"];
const salida2 = filtrarAmigos(entrada2);
console.log("Entrada 2:", entrada2);
console.log("Salida 2:", salida2);


// Modificación

function filtrarAmigos(nombres) {
    const amigos = [];
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].length === 4) {
            amigos.push(nombres[i]);
        }
    }
    return amigos;
}

let entrada = prompt("Introduce nombres separados por comas (por ejemplo: Luis,Estela,Ángel,Enya,Jose Antonio):");

let nombresString = entrada.split(',');
let nombres = [];
for (let i = 0; i < nombresString.length; i++) {
    nombres.push(nombresString[i].trim());
}

let salida = filtrarAmigos(nombres);

console.log("Nombres introducidos:", nombres);
console.log("Amigos (nombres con 4 letras):", salida);

alert("Nombres introducidos: " + nombres.join(', ') + "\n\nAmigos (nombres con 4 letras): " + salida.join(', '));