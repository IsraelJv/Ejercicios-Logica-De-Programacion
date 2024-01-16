// Comprueba si un dato es un número
const esNumero = dato => !isNaN(dato);

// Se obtiene el valor de un número ingresado por el usuario
const obtenerNumero = () => {
    let datoIngresado;
    do {
        datoIngresado = parseInt(prompt(`Ingrese un número del 0 al 100: `));
        if ( esNumero(datoIngresado) && datoIngresado >= 0  && datoIngresado < 100)
            break;
        else
            console.log("Por favor, ingrese un número válido.");
    } while ( true )
    return datoIngresado;
}

// Genera un número secreto aleatorio entre 0 y 99
const generarNumeroSecreto = () => Math.floor(Math.random() * 100) ;

// Función principal para el juego "Adivina el Número".
// El usuario intenta adivinar un número secreto generado aleatoriamente.
const jugarAdivinaNumero = () => {
    const numeroSecreto = generarNumeroSecreto();
    const numerosIngresados = [];
    let numeroIngresado;

    do{
        numeroIngresado = obtenerNumero();
        if ( numeroIngresado === numeroSecreto )
            break;
        console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
        numerosIngresados.push(numeroIngresado);
    } while (true);

    console.log("Felicidades, adivinaste el número secreto.");
    console.log(`Números introducidos antes de adivinar: ${numerosIngresados.join()}`);
}

jugarAdivinaNumero();