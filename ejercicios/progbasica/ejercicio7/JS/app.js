
function calcularMediaSumaMayorMenor(){
    let numeros = prompt(`Introduzca una seria de números dividos por comas`);

    let array1 = numeros.split(',');

    let suma;
    let media;
    let num = Number(array1[0]);
    let mayor = num;
    let menor = num;
    
    for (let i = 0; i < array1.length; i++) {
        num = Number(array1[i]);
        if (num > mayor) {
            mayor = num;
        }
        if (num < menor) {
            menor = num;
        }
        suma += num;
    }

    media = suma/array1.length;

    document.write(`Suma: ${suma}`);
    document.write(`Media: ${media}`);
    document.write(`Mayor: ${mayor}`);
    document.write(`Menor: ${menor}`);
    
    console.log(`Suma: ${suma}`);
    console.log(`Media: ${media}`);
    console.log(`Mayor: ${mayor}`);
    console.log(`Menor: ${menor}`);
}

calcularMediaSumaMayorMenor();
