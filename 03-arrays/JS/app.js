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
console.log(pets[0]);


//Iterar en el Array
// let len = pets.length;
// for (i = 0; i < len; i++) {
//     console.log(pets[i]);
// }


pets.push('rana', 'toro');
pets.push('toro');
//console.log(pets[i]);

items[2] = 'toro';
console.log(items);

console.log(pets);
console.log(pets.pop());
console.log(pets);
console.log(pets.shift());
console.log(pets);
pets.unshift('perro');
console.log(pets)


function log(msj){
    console.log(msj);
}

/////////////////////////////////////////////////////

const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'May'); // insertando en la posicion 1 (2)
console.log(months);

months.splice(1, 1, 'Feb'); // remplazando en la posiion 1 (2)
console.log(months);

months.splice(5, 2, 'July', 'Agost', 'Sept'); // concatenamos a partir de la pos especidicada
console.log(months);


let eliminados = months.splice(3);

console.log(eliminados);
console.log(months);


// Ordenacion de arrays
console.log(months.reverse());
console.log(months.sort());

let cadena = 'Javascript es un lenguaje de programación';
let vector = '12,34,45,6,7,9';

console.log(cadena.replace('Java','ECMA'));

let palabras = cadena.split(' ');
let numeros = vector.split(',');

console.log(palabras);
console.log(numeros);


//busqueda de una posición
let posicion = months.indexOf('Jan');
console.log(posicion);


//slice

// months.push('April');
console.log(months.slice(2));
console.log(months);
console.log(months.slice(-1));


