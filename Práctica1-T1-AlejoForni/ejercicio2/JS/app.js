
function calcularNumerosSobreMedia() {
    let suma = 0;
    let contador = 0;
    let numerosIngresados = "";
    
    while (contador < 10) {
        let input = prompt(`Ingrese el número ${contador + 1} (o "." para terminar):`);
        
        if (input === ".") {
            break;
        }
        
        let numero = parseFloat(input);
        
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
            continue;
        }
        
        suma += numero;
        contador++;
        numerosIngresados += (contador > 1 ? "," : "") + numero;
    }
    
    if (contador === 0) {
        alert("No se ingresaron números.");
        return;
    }
    
    let media = suma / contador;
    let sobreMedia = "";
    let sobreDobleMedia = "";
    let contadorSobreMedia = 0;
    let contadorSobreDobleMedia = 0;
    
    for (let i = 0; i < contador; i++) {
        let numero = parseFloat(numerosIngresados.split(",")[i]);
        if (numero > media) {
            sobreMedia += (contadorSobreMedia > 0 ? ", " : "") + numero;
            contadorSobreMedia++;
            if (numero > media * 2) {
                sobreDobleMedia += (contadorSobreDobleMedia > 0 ? ", " : "") + numero;
                contadorSobreDobleMedia++;
            }
        }
    }
    
    alert(`Media: ${media}\nSupera la media: ${sobreMedia}.\nSupera el doble de la media: ${sobreDobleMedia}`);
}
