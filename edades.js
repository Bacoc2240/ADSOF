// Definir un array para almacenar las edades
let edades = [];

// Definir variables para contar las edades
let menoresDeEdad = 0;
let mayoresDeEdad = 0;
let adultosMayores = 0;
let edadMasBaja = Infinity;
let edadMasAlta = -Infinity;
let sumaEdades = 0;

// Bucle para ingresar las edades
for (let i = 0; i < 10; i++) {
    let edad;
    do {
        edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1}:`));
        if (isNaN(edad) || edad < 1 || edad > 120) {
            alert("La edad ingresada no es válida. Por favor ingrese un valor entre 1 y 120.");
        }
    } while (isNaN(edad) || edad < 1 || edad > 120);

    // Agregar la edad al array
    edades.push(edad);

    // Contar las edades
    if (edad < 18) {
        menoresDeEdad++;
    } else if (edad < 60) {
        mayoresDeEdad++;
    } else {
        adultosMayores++;
    }

    // Actualizar la edad más baja y la más alta
    if (edad < edadMasBaja) {
        edadMasBaja = edad;
    }
    if (edad > edadMasAlta) {
        edadMasAlta = edad;
    }

    // Sumar la edad para calcular el promedio
    sumaEdades += edad;
}

// Calcular el promedio de edades
let promedioEdades = sumaEdades / edades.length;

// Mostrar resultados
console.log(`Cantidad de personas menores de edad: ${menoresDeEdad}`);
console.log(`Cantidad de personas mayores de edad: ${mayoresDeEdad}`);
console.log(`Cantidad de adultos mayores: ${adultosMayores}`);
console.log(`Edad más baja: ${edadMasBaja}`);
console.log(`Edad más alta: ${edadMasAlta}`);
console.log(`Promedio de edades: ${promedioEdades}`);
