// Leer un vector de números enteros ordenados ascendentemente
let leerVector = function() {
    let vector = [];
    for (let i = 0; i < 5; i++) {
        let num;
        do {
            num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
            if (isNaN(num) || (i > 0 && num <= vector[i - 1])) {
                alert("El número ingresado no es válido. Debe ser mayor que el anterior.");
            }
        } while (isNaN(num) || (i > 0 && num <= vector[i - 1]));
        vector.push(num);
    }
    return vector;
};

// Mezclar dos vectores ordenados ascendentemente
let mezclarVectores = function(vector1, vector2) {
    let resultado = [];
    let i = 0, j = 0;
    while (i < vector1.length && j < vector2.length) {
        if (vector1[i] < vector2[j]) {
            resultado.push(vector1[i]);
            i++;
        } else {
            resultado.push(vector2[j]);
            j++;
        }
    }
    while (i < vector1.length) {
        resultado.push(vector1[i]);
        i++;
    }
    while (j < vector2.length) {
        resultado.push(vector2[j]);
        j++;
    }
    return resultado;
};

// Leer los dos vectores
console.log("Ingrese el primer vector:");
let vector1 = leerVector();
console.log("Ingrese el segundo vector:");
let vector2 = leerVector();

// Mezclar los vectores y mostrar el resultado
let resultado = mezclarVectores(vector1, vector2);
console.log("Lista ordenada de la mezcla de los dos vectores:");
console.log(resultado);
