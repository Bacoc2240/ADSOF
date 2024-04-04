// Definición de la estructura de datos para una persona
class Persona {
    constructor(nombre, cedula, fechaNacimiento, correoElectronico, ciudadResidencia, ciudadOrigen, cancionesFavoritas = []) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.fechaNacimiento = fechaNacimiento;
        this.correoElectronico = correoElectronico;
        this.ciudadResidencia = ciudadResidencia;
        this.ciudadOrigen = ciudadOrigen;
        this.cancionesFavoritas = cancionesFavoritas;
    }
}

// Función para agregar una persona al registro
function agregarPersona() {
    let nombre = prompt("Ingrese el nombre:");
    let cedula = prompt("Ingrese el número de cédula:");
    let fechaNacimiento = prompt("Ingrese la fecha de nacimiento (YYYY-MM-DD):");
    let correoElectronico = prompt("Ingrese el correo electrónico:");
    let ciudadResidencia = prompt("Ingrese la ciudad de residencia:");
    let ciudadOrigen = prompt("Ingrese la ciudad de origen:");

    let cancionesFavoritas = [];
    for (let i = 0; i < 3; i++) {
        let artista = prompt(`Ingrese el artista de la canción ${i + 1}:`);
        let titulo = prompt(`Ingrese el título de la canción ${i + 1}:`);
        cancionesFavoritas.push({ artista, titulo });
    }

    let persona = new Persona(nombre, cedula, fechaNacimiento, correoElectronico, ciudadResidencia, ciudadOrigen, cancionesFavoritas);
    personas.push(persona);
}

// Función para mostrar la información de una persona por posición en el vector
function mostrarPersona(posicion) {
    let persona = personas[posicion];
    console.log("Información de la persona:");
    console.log("Nombre:", persona.nombre);
    console.log("Cédula:", persona.cedula);
    console.log("Fecha de Nacimiento:", persona.fechaNacimiento);
    console.log("Correo Electrónico:", persona.correoElectronico);
    console.log("Ciudad de Residencia:", persona.ciudadResidencia);
    console.log("Ciudad de Origen:", persona.ciudadOrigen);
    console.log("Canciones Favoritas:");
    persona.cancionesFavoritas.forEach((cancion, index) => {
        console.log(`Canción ${index + 1}: ${cancion.artista} - ${cancion.titulo}`);
    });
}

// Arreglo para almacenar las personas registradas
let personas = [];

// Menú de opciones
while (true) {
    let opcion = prompt("Menú de opciones:\na. Agregar una persona\nb. Mostrar información de una persona\nx. Salir");
    if (opcion === 'a') {
        agregarPersona();
    } else if (opcion === 'b') {
        let posicion = parseInt(prompt("Ingrese la posición de la persona a mostrar:"));
        if (!isNaN(posicion) && posicion >= 0 && posicion < personas.length) {
            mostrarPersona(posicion);
        } else {
            console.log("La posición ingresada no es válida.");
        }
    } else if (opcion === 'x') {
        break;
    } else {
        console.log("Opción no válida.");
    }
}
