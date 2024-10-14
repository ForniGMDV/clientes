function obtenerArray(mensaje) {
    const entrada = prompt(mensaje);
    const elementos = entrada.split(',');
    for (let i = 0; i < elementos.length; i++) {
        elementos[i] = elementos[i].trim();
    }
    return elementos;
}

function concatenarAlternado(A, B) {
    const resultado = [];
    const maxLongitud = Math.max(A.length, B.length);
    
    for (let i = 0; i < maxLongitud; i++) {
        if (i < A.length) {
            resultado.push(A[i]);
        }
        if (i < B.length) {
            resultado.push(B[i]);
        }
    }
    
    return resultado;
}

const A = obtenerArray("Ingrese los elementos del array A separados por comas:");
const B = obtenerArray("Ingrese los elementos del array B separados por comas:");

const resultado = concatenarAlternado(A, B);

console.log("Array resultante:", resultado);