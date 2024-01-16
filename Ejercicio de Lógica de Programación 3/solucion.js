// Comprueba si un dato es un número
const esNumero = dato => !isNaN(dato);

// Se obtiene el valor de un número ingresado por el usuario
const obtenerNumero = () => {
    let datoIngresado;
    do {
        datoIngresado = parseInt(prompt(`Ingrese un número: `));
        if ( esNumero(datoIngresado) && datoIngresado > 0 )
            break;
        else
            console.log("Por favor, ingrese un número válido.");
    } while ( true )
    return datoIngresado;
}

// Calcula el factorial de un número dado de forma recursiva.
const calcularFactorial = ( numero ) => (numero === 1) ? 1 : calcularFactorial(numero - 1) * numero;

// Función principal muestra el resultado.
const mostrarFactorial = () => {
    const numeroIngresado    = obtenerNumero();
    const resultadoFactorial = calcularFactorial(numeroIngresado);
    console.log(resultadoFactorial);
}

mostrarFactorial();