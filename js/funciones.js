//Funciones

//Nombre
function obtenerNombre() {
    let nombreUsuario = "";
    let mensajeBienvenida = "";

    mensajeBienvenida = "Bienvenido al Simulador de FriendZone\n";
    mensajeBienvenida += "Con esta joya del software usted sabrá si ella lo desea o lo ve como un amigo con total precisión\n \n";
    mensajeBienvenida += "Ingrese su nombre";
    
    do {
        nombreUsuario = prompt(mensajeBienvenida);
    } while(nombreUsuario.trim().length == 0);

    return nombreUsuario;
}

//Sobrenombre
function obtenerSobrenombre(nombreUsuario) {
    let sobreNombre = "";
    let mensajeBienvenida = "";

    mensajeBienvenida = `¡Bienvenido ${nombreUsuario}! \n`;
    mensajeBienvenida += "Ahora ingrese su sobrenombre (o apodo)";
    
    do {
        sobreNombre = prompt(mensajeBienvenida);
    } while(sobreNombre.trim().length == 0);

    return sobreNombre;
}

function puntosDespide() {
    let puntos = 0;
    let mensajeBienvenida = "";
    let opcion = 0;

    mensajeBienvenida = "¿Cómo se despide ella de usted cuando finaliza una cita?\n\n";
    mensajeBienvenida += "Opciones:\n\n";
    mensajeBienvenida += "1 - Con un beso\n";
    mensajeBienvenida += "2 - Con un abrazo\n";
    mensajeBienvenida += "3 - Con un puñito (como en la pandemia)\n";
    mensajeBienvenida += "4 - No se despide (ni chau te dice)";

    while ((opcion != 1) && (opcion != 2) && (opcion != 3) && (opcion != 4)) {
        opcion = parseInt(prompt(mensajeBienvenida));
    }

    switch (opcion) {
        case 1:
            puntos = 10;
            break;
        case 2:
            puntos = 6;
            break
        case 3:
            puntos = 4;
            break
        case 4:
            puntos = 1;
            break;
        default:
            puntos = 0;
    }

        return puntos;
}

function puntosMirada() {
    let puntos = 0;
    let mensajeBienvenida = "";
    let opcion = 0;

    mensajeBienvenida = "¿Cuando está frente a vos adonde apunta su mirada?\n\n";
    mensajeBienvenida += "Opciones:\n\n";
    mensajeBienvenida += "1 - Tus ojos\n";
    mensajeBienvenida += "2 - Tu boca\n";
    mensajeBienvenida += "3 - Tu pelvis\n";
    mensajeBienvenida += "4 - El edificio de enfrente";

    while ((opcion != 1) && (opcion != 2) && (opcion != 3) && (opcion != 4)) {
        opcion = parseInt(prompt(mensajeBienvenida));
    }

    switch (opcion) {
        case 1:
            puntos = 6;
            break;
        case 2:
            puntos = 8;
            break
        case 3:
            puntos = 10;
            break
        case 4:
            puntos = 1;
            break;
        default:
            puntos = 0;
    }

        return puntos;    
}

function puntosAnimal() {
    let puntos = 0;
    let mensajeBienvenida = "";
    let opcion = 0;

    mensajeBienvenida = "¿Con qué animal te identificás más?\n\n";
    mensajeBienvenida += "Opciones:\n\n";
    mensajeBienvenida += "1 - Un león\n";
    mensajeBienvenida += "2 - Un mono\n";
    mensajeBienvenida += "3 - Un conejo\n";
    mensajeBienvenida += "4 - Un axolote";

    while ((opcion != 1) && (opcion != 2) && (opcion != 3) && (opcion != 4)) {
        opcion = parseInt(prompt(mensajeBienvenida));
    }

    switch (opcion) {
        case 1:
            puntos = 8;
            break;
        case 2:
            puntos = 5;
            break
        case 3:
            puntos = 10;
            break
        case 4:
            puntos = 1;
            break;
        default:
            puntos = 0;
    }

        return puntos;    
}

function puntosLugar() {
    let puntos = 0;
    let mensajeBienvenida = "";
    let opcion = 0;

    mensajeBienvenida = "¿Cómo conociste a esa chica?\n\n";
    mensajeBienvenida += "Opciones:\n\n";
    mensajeBienvenida += "1 - Tinder\n";
    mensajeBienvenida += "2 - En el trabajo\n";
    mensajeBienvenida += "3 - Me la presentó un amigo\n";
    mensajeBienvenida += "4 - Programando JavaScript en el curso de Coderhouse";

    while ((opcion != 1) && (opcion != 2) && (opcion != 3) && (opcion != 4)) {
        opcion = parseInt(prompt(mensajeBienvenida));
    }

    switch (opcion) {
        case 1:
            puntos = 8;
            break;
        case 2:
            puntos = 5;
            break
        case 3:
            puntos = 2;
            break
        case 4:
            puntos = 10;
            break;
        default:
            puntos = 0;
    }

        return puntos;    
}

const puntosSuerte = () => {
    let puntos = 0;
    let mensajeBienvenida = "";
    let opcion = 0;
    
    
    mensajeBienvenida = "Siempre en el arte de la seducción hay un factor suerte\n";
    mensajeBienvenida += "Veamos que tal está la tuya\n\n";
    mensajeBienvenida += "Elegí un número del 1 al 10";
 
    //Tres intentos
    for (let i = 0; i <= 2; ++i) {
        let numeroSorteado = 0;
        let distanciaNumeros = 10;
        let mensajeSuerte = "";
        let puntosIntento = 0;
        const numeroMax = 10;

        opcion = 0;
        while ((opcion != 1) && (opcion != 2) && (opcion != 3) && (opcion != 4) && (opcion != 5) && (opcion != 6) && (opcion != 7) && (opcion != 8) && (opcion != 9) && (opcion != 10)) {
            opcion = parseInt(prompt(mensajeBienvenida));

        }   
        
        //Sorteo
        numeroSorteado = Math.floor(Math.random() * numeroMax);

        //Puntaje
        //Cuanto menos distancia haya entre el número elegido y el sorteado suma mas puntos
        if (opcion >= numeroSorteado) {
            distanciaNumeros = opcion - numeroSorteado;
        }
        else {
            distanciaNumeros = numeroSorteado - opcion;
        }

        puntosIntento = numeroMax - distanciaNumeros;

        mensajeSuerte = `Ingresaste el número ${opcion} y salió el número ${numeroSorteado}\nObtuviste ${puntosIntento} puntos en este intento`;
        alert(mensajeSuerte);

        //Sumo los puntos al total
        puntos += puntosIntento;
    }

    return puntos;
    
}

//Porcentaje de éxito
const porcentajeExito = (puntosObtenidos, maxPuntos) => {
    let porcentaje = (puntosObtenidos * 100) / maxPuntos;

    return porcentaje;
} 

//Mensaje Final
function obtenerMensajeFinal(nombre, sobrenombre, porcentaje) {
    let mensaje = "";
    let principioMensaje = "";
    let finalMensaje = "";
    
    
    principioMensaje = `Tu porcentaje de salir de la FriendZone es de ${porcentaje} %\n`;
    if (porcentaje <= 25) {
        principioMensaje += "Lamentablemente ";
        finalMensaje = "Ni siquiera sos visto como un amigo.\n Probá utilizar una pancarta gigante para llamar más su atención";
    }
    else if (porcentaje <= 50) {
        principioMensaje += "El mejor amigo sos ";
        finalMensaje = "Deberías prepararte emocionalmente porque en cualquier momento ella saldrá con otro. Y va a contarte todo, por ser su MEJOR amigo";
    }
    else if (porcentaje <= 75) { 
        principioMensaje += "Estás en la lucha ";
        finalMensaje = "Tal vez un curso de pole dance te ayudaría a definir este partido tan peleado";
    }
    else {
        principioMensaje += "Campeón eres ";
        finalMensaje = "'Osculum ei cum passione da' (que en latín significa : 'Dale un beso apasionado')";
    }

    mensaje = principioMensaje + nombre + " alias " + sobrenombre + "\n" + finalMensaje;

    return mensaje;
}