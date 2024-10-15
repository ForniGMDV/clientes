
const PESETAS_POR_EURO = 166;
const DOLARES_POR_EURO = 1.09;

function esNumeroPositivo(valor) {
    return !isNaN(valor) && parseFloat(valor) > 0;
}


function solicitarCantidad() {
    let cantidad;
    do {
        cantidad = prompt("Ingrese la cantidad en euros a convertir:");
        if (!esNumeroPositivo(cantidad)) {
            alert("Por favor, ingrese una cantidad numérica mayor que 0.");
        }
    } while (!esNumeroPositivo(cantidad));
    return parseFloat(cantidad);
}

function convertirMoneda() {
    let opcion = prompt("Seleccione una opción:\n1. Convertir a pesetas\n2. Convertir a dólares");
    
    if (opcion !== "1" && opcion !== "2") {
        alert("Opción no válida. Por favor, seleccione 1 o 2.");
        return;
    }
    
    let cantidad = solicitarCantidad();
    let resultado;
    
    if (opcion === "1") {
        resultado = cantidad * PESETAS_POR_EURO;
        alert(`${cantidad} euros son ${resultado} pesetas.`);
    } else {
        resultado = cantidad * DOLARES_POR_EURO;
        alert(`${cantidad} euros son ${resultado} dólares.`);
    }
}

convertirMoneda();
