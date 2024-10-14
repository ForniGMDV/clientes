function elementosUnicos(array1, array2) {
    const frecuencia = {};
    const resultado = [];

    for (let i = 0; i < array1.length; i++) {
        if (frecuencia[array1[i]]) {
            frecuencia[array1[i]]++;
        } else {
            frecuencia[array1[i]] = 1;
        }
    }
    for (let i = 0; i < array2.length; i++) {
        if (frecuencia[array2[i]]) {
            frecuencia[array2[i]]++;
        } else {
            frecuencia[array2[i]] = 1;
        }
    }

    for (let i = 0; i < array1.length; i++) {
        if (frecuencia[array1[i]] === 1) {
            resultado.push(array1[i]);
        }
    }

    for (let i = 0; i < array2.length; i++) {
        if (frecuencia[array2[i]] === 1 && !array1.includes(array2[i])) {
            resultado.push(array2[i]);
        }
    }

    return resultado;
}
    console.log(elementosUnicos([1, 2, 3, 3], [3, 2, 1, 4, 5]));
    console.log(elementosUnicos(["Ray", "Jose", "Dani"], ["Dani", "Jose", "Ivan"]));
    console.log(elementosUnicos([77, "ciao"], [78, 42, "ciao"]));
    console.log(elementosUnicos([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]));


