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

// Genera y muestra la secuencia de Fibonacci hasta un número dado de iteraciones.
const generarFibonacci = ( numeroIteraciones, num1 = 0, num2 = 1 ) => {  
    if ( numeroIteraciones === 1 ) {
        console.log( num1 );
        return num2;
    } else {
        console.log( num1 );
        generarFibonacci( numeroIteraciones - 1, num2, num1 + num2 );
    }
}

// Función principal que muestra el resultado.
const mostrarFibonacci = () => {
    const numeroIngresado = obtenerNumero();
    generarFibonacci(numeroIngresado);
}

mostrarFibonacci();

