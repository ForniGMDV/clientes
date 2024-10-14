function Calculadora(){
    let num1 = validarNum();

    let num2 = validarNum();
    
    let op = validarOp();
   
    let resultadop;

    switch(op){
        case "+":
            resultadop = Sumar(num1,num2);
            break;
        case "-":
            resultadop = Restar(num1,num2);
            break;
        case "*":
            resultadop = Multiplicar(num1,num2);
            break;
        case "/":
            resultadop = Dividir(num1,num2);
            break;
    }

    alert("Resultado: " + resultadop);
}

Calculadora();

function validarNum(){
    let numerito = prompt("Introduce un número: ");
    while(isNaN(numerito)){
        numerito = prompt("Error, introduce un número: ");
    }
    return Number(numerito);
}

function validarOp() {
    let oper;
    oper = prompt("Introduce una operación (+,-,*,/):");
    while (oper != "+" && oper != "-" && oper != "*" && oper != "/") {
        oper = prompt("Error, introduce una operación válida: ");
    }
    return String(oper);
}

function Sumar(numerin1,numerin2){
    return numerin1 + numerin2;
}
function Restar(numerin1,numerin2){
    return numerin1 - numerin2;
}
function Multiplicar(numerin1,numerin2){
    return numerin1 * numerin2;
}
function Dividir(numerin1,numerin2){
    return numerin1 / numerin2;
}

function SumarVentana(){
    let a = validarNum();
    let b = validarNum();

    let resultingui = Sumar(a,b);
    alert('Resultado: ' + resultingui);
}