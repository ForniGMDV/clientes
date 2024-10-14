// Definición de funciones

// Los parámetros y el código que llevará dentro
let func = new Function("a","b","return a * b");
let resultado = func(10,10);
console.log(resultado);

// Función autoinvocada

(function(){
    let msg = `hola!`;
    console.log(msg);
})();

// En el paréntesis del final de la función es por donde pasaríamos los parámetros si hiciese falta


// Función anónima

resultado = function(a,b){return a*b};
console.log(resultado(10,10));


// Notación flecha -- arrow functions

const arrowF = (a,b) => a*b;
console.log(arrowF(10,10));