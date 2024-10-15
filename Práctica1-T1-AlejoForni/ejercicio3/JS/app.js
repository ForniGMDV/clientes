
function validarNum() {
    let numero = prompt("Introduce un número entre 5 y 10: ");
    while (isNaN(numero) || (numero < 5 || numero > 10)) {
        numero = prompt("Error, introduce un número entre 5 y 10: ");
    }
    return Number(numero);
}


let tamanio = validarNum();

let array = new Array(tamanio);

let aleatorio;
let suma = 0;

for(let i = 0; i < array.length; i++){
    aleatorio = Number(Math.floor(Math.random() * 100));
    array[i] = 5 * aleatorio;
    suma += array[i];

    if(i == array.length-1){
        console.log(`${array[i]}`);
    }
    else{
        console.log(`${array[i]} `);
    }
    
}
7
let media = suma / tamanio;

for(let i = 0; i < array.length; i++){
    if(array[i] > media){
        console.log(`El número ${array[i]} es mayor que la media: ${media}`);
    }
}