// alert("Hola Mundo")

// Para definir variables en Javascript se utiliza alguna de estas dos palabras reservadas:
// var, let o const y a continuación el nombre de la variable.
// diferencia entre var y let:

// • Con la palabra clave var se declaran variables locales y/o globales (depende del
// contexto) con ámbito de función.
// • Con la palabra clave let se declaran variables local con ámbito de bloque.
// Con la palabra clave const no va a sufrir modificaciones.

//nombre = "Alejo Forni"
console.log(nombre);
//alert(nombre);

//Ctrl + Shift + P
var nombre;
let a = 2;
let b = '3';
let c = a + b;
console.log(c);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

let ok = true;
console.log(typeof ok);


console.log(a + nombre);
nombre = "Alejo Forni";
console.log(a + nombre);

if (b>a) {
    console.log("");
} else {
    console.log("");
}

let objeto1 = Symbol('id1');
console.log(typeof objeto1);
console.log(objeto1);

let objeto2 = Symbol('id1');
console.log(typeof objeto2);
console.log(objeto2);

let horaDia = 20;
let mensaje = "";

//Buenos dias 6-11, Buenas tardes 12-18, Buenas noches 19-5

if (horaDia >= 6 && horaDia < 12) {
    let mensaje = "Buenos dias, actualmente son las " + horaDia + ":00";
    console.log(mensaje);
} 
else if(horaDia >= 12 && horaDia < 18) {
    let mensaje = "Buenas tardes, actualmente son las " + horaDia + ":00";
    console.log(mensaje);
}
else if((horaDia >= 18 && horaDia <= 24) || (horaDia >=1 && horaDia < 6)) {
    let mensaje = "Buenas noches, actualmente son las " + horaDia + ":00";
    console.log(mensaje);
}

let z =  2;
let y = 2;

if(z==y){
    console.log("Son iguales");
}
if(z===y){
    console.log("Son iguales");
}
else{
    console.log("No son iguales");
}

// El operador ternario de JavaScript es un operador condicional que tiene tres operandos.
// Se usa para tomar una decisión basada en una // expresión que se evalúa como true o false
// Es una forma abreviada de la sentencia if else que crea código más limpio, fácil de entender 
// y rápido de escribir.

let resultado = (z===y) ? "Verdadero" : "Falso";
console.log(resultado);

// CASTEO

let miNumero = "18"
console.log(miNumero);

if(isNaN(miNumero)){
    console.log("no es un numero")
}

miNumero = Number(miNumero);
console.log(miNumero);

let miString = String(miNumero);
console.log(miString);

// BUCLES

let contador = 0;
while (contador < 3){
    console.log(contador);
    contador++;
}

let cont = 0;
do {
    console.log(cont);
    cont++;
} while (cont < 4);

for (let conta = 0; conta <5; conta++){
    console.log(conta);
}

let mes =7;
let estacion = "desconocida";

// SWITCH

switch(mes){
    case 6: case 7: case 8:
        estacion = "primavera";
        break;
    case 3: case 4: case 5:
        estacion = "verano";
        break;
    case 9: case 10: case 11:
        estacion = "otoño";
        break;
    case 12: case 1: case 2:
        estacion = "invierno";
        break;
    default:
        estacion = "el mes no cumple con ninguna estación" 
}

console.log(estacion);

// FOR ANIDADO

for (let i=0; i<=2; i++){
    for(let j=0; j<=3; j++){
        console.log("c1 " + i + " c2: " + j);
        if(j==2){
            break;
        }
    }
}

const objeto ={
    nombre: "Jose Miguel",
    apellido: "Cabezuelo",
    edad: 47
}
console.log(typeof objeto);

// ARRAY

let marcaCoches = ['BMW', 'Audi', 'Renault', 'Ford'];
console.log(typeof marcaCoches);

for (let i = 0; i < marcaCoches.length; i++){
    console.log(marcaCoches[i]);
}

// Definir Clases

class Persona{
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    toString(){
        return `${this._nombre} ${this._apellido}, edad: ${this._edad}`;
    }
}

console.log(Persona);
console.log(typeof Persona);

// Probar la clase

let persona1 = new Persona('Juan', "Perez", 55);
console.log(persona1.toString());

let nombre2 = persona1.toString();
console.log(nombre2);

let persona2 = new Persona(objeto.nombre, objeto.apellido, objeto.edad);
console.log(persona2.toString());

// Funciones
var aa = 4;
var bb = 5;

function miFuncion(xx,yy){
    let aa = 7;
    let bb = 10;
    console.log("Suma: " + (xx+yy));
    console.log("Suma: " + (aa+bb));
    return (xx+yy);
}

let result = miFuncion(7,8);
console.log(result);


// function Sumar(){
//     let teclado = prompt("Dime número A: ");
//     while (isNaN(teclado)){
//         teclado = prompt("Error, introduce un número para A: ");
//     }

//     let teclado2 = window.prompt("Dime número B: ");
//     while (isNaN(teclado2)){
//         teclado2 = prompt("Error, introduce un número para B");
//     }

//     let resultadonsh = Number(a) + Number(b);



//     alert(`La suma es: ${resultadonsh}`);
// }

// Sumar();





// Math.random() devolverá un número de coma flotante mayor o igual que 0 y menor que (pero nunca igual a) 1.
// En otras palabras, 0 <= x < 1

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
console.log(getRandomInt(3));
// Salida: 0, 1 or 2
  
console.log(getRandomInt(1));
// Salids: 0
  
console.log(Math.random());
// Salida: un número de 0 a <1

// Generar número aleatorio entre mínimo y máximo sin incluir extremos
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// Generar número aleatorio entre mínimo y máximo incluyendo extremos (números enteros)
function getRandomEnteros(min, max) {
    return Math.random() * (max - min + 1) + min;
}
// Generar número aleatorio entre mínimo y máximo incluyendo extremos
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
     // The maximum is inclusive and the minimum is inclusive
}