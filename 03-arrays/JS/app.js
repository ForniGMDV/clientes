let autos = ['BMW', 'Audi', 'Volvo'];

console.log(autos);
console.log(typeof autos); 

let item = new Array(1,6); 
console.log(item);

let items = new Array(6);
console.log(items);

// let pets = new Array('perro','gato','periquito');  Es lo mismo que abajo
let pets = ['perro','gato','periquito'];

console.log(pets);
console.log(pets.length);
// .length devuelve el tamaño del array
console.log(pets[0]);


//Iterar en el Array
// let len = pets.length;
// for (i = 0; i < len; i++) {
//     console.log(pets[i]);
// }

// .push suma los valores al final del array.
pets.push('rana', 'toro');
pets.push('toro');
console.log(pets);

items[2] = 'toro';
console.log(items);

console.log(pets);
// .pop() elimina el último valor del array
console.log(pets.pop());
// .shift() elimina el primer valor del array
console.log(pets);
console.log(pets.shift());
console.log(pets);
// .unshift(VALOR) escribe el valor que quieras en la primera posición (como un .push() pero desde el principio)
pets.unshift('perro');
console.log(pets);


function log(msj){
    console.log(msj);
}

/////////////////////////////////////////////////////

const months = ['Jan', 'March', 'April', 'June'];
// .splice(posición, acción, valor)
// en la acción --> 1 = insertar | 2 = remplazar | 3 = concatenar
months.splice(1, 0, 'May');
console.log(months);

months.splice(1, 1, 'Feb');
console.log(months);

months.splice(5, 2, 'July', 'Agost', 'Sept'); // concatenamos a partir de la posición especificada
console.log(months);

// .splice(posicion)
// borra desde esa posición hasta la última
let eliminados = months.splice(3);

console.log(eliminados);
console.log(months);


// Ordenacion de arrays
// .reverse() pone los valores del revés
console.log(months.reverse());
// .sort() ordena el array, si se deja vacío lo ordena por ASCII
console.log(months.sort());

let cadena = 'Javascript es un lenguaje de programación';
let vector = '12,34,45,6,7,9';

// .replace(valor original, valor nuevo) reemplaza un valor por otro
console.log(cadena.replace('Java','ECMA'));

// .split(valor) separa lo que haya a ambos lados de dicho valor, los convierte en valores distintos
let palabras = cadena.split(' ');
let numeros = vector.split(',');

console.log(palabras);
console.log(numeros);


// .indexOf() busca una posición
let posicion = months.indexOf('Jan');
console.log(posicion);


//slice

// months.push('April');

// .slice(posición) borra desde esa posición hasta el principio del array, dejando el valor que ocupe esa posición y los siguientes
console.log(months.slice(2));
console.log(months);
console.log(months.slice(2));


