// Solicitar al usuario que seleccione una opción
let opcion = prompt("Seleccione una opción:\n1. Calcular área de una figura\n2. Calcular perímetro de una figura");

switch (opcion) {
    case "1":
        // Calcular área de una figura
        let figura = prompt("Seleccione la figura:\n1. Triángulo\n2. Rectángulo\n3. Cuadrado\n4. Circunferencia");
        switch (figura) {
            case "1":
                // Calcular área de un triángulo
                let baseTriangulo = parseFloat(prompt("Ingrese la base del triángulo:"));
                let alturaTriangulo = parseFloat(prompt("Ingrese la altura del triángulo:"));
                let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
                alert("El área del triángulo es: " + areaTriangulo);
                break;
            case "2":
                // Calcular área de un rectángulo
                let baseRectangulo = parseFloat(prompt("Ingrese la base del rectángulo:"));
                let alturaRectangulo = parseFloat(prompt("Ingrese la altura del rectángulo:"));
                let areaRectangulo = baseRectangulo * alturaRectangulo;
                alert("El área del rectángulo es: " + areaRectangulo);
                break;
            case "3":
                // Calcular área de un cuadrado
                let ladoCuadrado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
                let areaCuadrado = ladoCuadrado * ladoCuadrado;
                alert("El área del cuadrado es: " + areaCuadrado);
                break;
            case "4":
                // Calcular área de una circunferencia
                let radioCircunferencia = parseFloat(prompt("Ingrese el radio de la circunferencia:"));
                let areaCircunferencia = Math.PI * radioCircunferencia * radioCircunferencia;
                alert("El área de la circunferencia es: " + areaCircunferencia);
                break;
            default:
                alert("Opción no válida");
        }
        break;
    case "2":
        // Calcular perímetro de una figura
        let figura2 = prompt("Seleccione la figura:\n1. Triángulo\n2. Rectángulo\n3. Cuadrado\n4. Circunferencia");
        switch (figura2) {
            case "1":
                // Calcular perímetro de un triángulo
                let lado1 = parseFloat(prompt("Ingrese el lado 1 del triángulo:"));
                let lado2 = parseFloat(prompt("Ingrese el lado 2 del triángulo:"));
                let lado3 = parseFloat(prompt("Ingrese el lado 3 del triángulo:"));
                let perimetroTriangulo = lado1 + lado2 + lado3;
                alert("El perímetro del triángulo es: " + perimetroTriangulo);
                break;
            case "2":
                // Calcular perímetro de un rectángulo
                let baseRectangulo2 = parseFloat(prompt("Ingrese la base del rectángulo:"));
                let alturaRectangulo2 = parseFloat(prompt("Ingrese la altura del rectángulo:"));
                let perimetroRectangulo = 2 * (baseRectangulo2 + alturaRectangulo2);
                alert("El perímetro del rectángulo es: " + perimetroRectangulo);
                break;
            case "3":
                // Calcular perímetro de un cuadrado
                let ladoCuadrado2 = parseFloat(prompt("Ingrese el lado del cuadrado:"));
                let perimetroCuadrado = 4 * ladoCuadrado2;
                alert("El perímetro del cuadrado es: " + perimetroCuadrado);
                break;
            case "4":
                // Calcular perímetro de una circunferencia
                let radioCircunferencia2 = parseFloat(prompt("Ingrese el radio de la circunferencia:"));
                let perimetroCircunferencia = 2 * Math.PI * radioCircunferencia2;
                alert("El perímetro de la circunferencia es: " + perimetroCircunferencia);
                break;
            default:
                alert("Opción no válida");
        }
        break;
    default:
        alert("Opción no válida");
}
