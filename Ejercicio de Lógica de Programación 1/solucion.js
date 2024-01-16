// Comprueba si un dato es un número
const esNumero = dato => !isNaN(dato);

// Se obtiene el valor de un número ingresado por el usuario
const obtenerNumero = ( indice ) => {
    let datoIngresado;
    do {
        datoIngresado = parseInt(prompt(`Ingrese el valor del elemento ${ indice + 1 }: `));
        if ( esNumero(datoIngresado) )
            break;
    } while ( true )
    return datoIngresado;
}

// Obtiene una lista de números ingresados por el usuario
const obtenerListaNumeros = () => {
    const listaNumeros = [];
    for (let i = 0; i < 3; i++)
        listaNumeros.push( obtenerNumero(i) );
    return listaNumeros;
}

// Muestra una lista de números ordenada de forma ascendente y descendente.
const mostrarOrden = () => {
    const listaNumeros = obtenerListaNumeros();
    // Orden ascendente
    console.log(listaNumeros.sort((a, b) => a - b));
    // Orden descendente
    console.log(listaNumeros.reverse());
}

mostrarOrden();
