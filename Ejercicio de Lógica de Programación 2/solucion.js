// Comprueba si un dato es un número
const esNumero = dato => !isNaN(dato);

// Se obtiene el valor de la temperatura en grados Celsius
const obtenerGradosCelcius = ( ) => {
    let gradosCelsius ;
    do {
        gradosCelsius  = parseFloat(prompt(`Ingrese el valor del elemento : `));
        if ( esNumero(gradosCelsius ) )
            break;
        else
            console.alert("Por favor, ingrese un valor válido.");
    } while ( true )
    return gradosCelsius ;
}

// Convierte una temperatura de grados Celsius a Fahrenheit.
const convertirCelciusFarenheit = ( gradosCelsius  ) => (gradosCelsius * (9/5)) + 32;

// Convierte una temperatura de grados Celsius a Kelvin.
const convertirCelciusKelvin    = ( gradosCelsius  ) => gradosCelsius + 273.15;

// Función principal muestra el resultado.
const mostrarTemperaturas = () => {
    const tempCelsius   = obtenerGradosCelcius();
    const tempFarenheit = convertirCelciusFarenheit( tempCelsius ).toFixed(2);
    const tempKelvin    = convertirCelciusKelvin( tempCelsius ).toFixed(2);
    console.log(`Grados Fahrenheit: ${tempFarenheit}`);
    console.log(`Grados Kelvin: ${tempKelvin}`);
}

mostrarTemperaturas();
