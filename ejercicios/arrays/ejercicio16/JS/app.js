function inicializarMesas(numMesas) {
    let mesas = [];
    for (let i = 0; i < numMesas; i++) {
        mesas.push(Math.floor(Math.random() * 5));
    }
    return mesas;
}

function mostrarEstadoMesas(mesas) {
    console.log("Estado de las mesas:", mesas.join(" "));
}

function buscarMesa(mesas, numPersonas) {
    let mesaLibre = mesas.findIndex(ocupacion => ocupacion === 0);
    if (mesaLibre !== -1) return mesaLibre;

    return mesas.findIndex(ocupacion => ocupacion + numPersonas <= 4);
}

function gestionarRestaurante() {
    let numMesas = parseInt(prompt("Ingrese el número de mesas del restaurante:"));
    let mesas = inicializarMesas(numMesas);
    
    mostrarEstadoMesas(mesas);

    while (true) {
        let numPersonas = parseInt(prompt("¿Cuántas personas son? (Ingrese un número negativo para salir)"));
        
        if (numPersonas < 0) break;
        
        if (numPersonas > 4) {
            console.log(`Lo siento, no admitimos grupos de ${numPersonas}, haga grupos de 4 personas como máximo e intente de nuevo`);
            continue;
        }

        let mesaAsignada = buscarMesa(mesas, numPersonas);

        if (mesaAsignada === -1) {
            console.log("Lo siento, no queda sitio en el restaurante.");
        } else {
            mesas[mesaAsignada] += numPersonas;
            console.log(`Por favor, siéntese en la mesa ${mesaAsignada + 1}`);
        }

        mostrarEstadoMesas(mesas);
    }

    console.log("Gracias por usar nuestro sistema de gestión de mesas.");
}

gestionarRestaurante();