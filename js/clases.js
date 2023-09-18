//Clases
class Galan {
    constructor(sNombre, sSobrenombre, sAnimal) {
        this.nombre = sNombre;
        this.sobrenombre = sSobrenombre;
        this.animal = sAnimal;
        this.puntosAnimal = 0;
    }

    obtenerNombre() {
        let nombreUsuario = "";
        let mensajeBienvenida = "";
    
        mensajeBienvenida = "Bienvenido al Simulador de FriendZone\n";
        mensajeBienvenida += "Con esta joya del software usted sabrá si ella lo desea o lo ve como un amigo con total precisión\n \n";
        mensajeBienvenida += "Ingrese su nombre";
        
        do {
            nombreUsuario = prompt(mensajeBienvenida);
        } while(nombreUsuario.trim().length == 0);

        this.nombre = nombreUsuario;
    
        return nombreUsuario;
    }

    obtenerSobrenombre() {
        let sobreNombreUsuario = "";
        let mensajeBienvenida = "";
    
        mensajeBienvenida = `¡Bienvenido ${this.nombre}! \n`;
        mensajeBienvenida += "Ahora ingrese su sobrenombre (o apodo)";
        
        do {
            sobreNombreUsuario = prompt(mensajeBienvenida);
        } while(sobreNombreUsuario.trim().length == 0);
        
        this.sobrenombre = sobreNombreUsuario;

        return sobreNombreUsuario;
    }

    obtenerAnimal() {
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
                this.animal = "León";
                puntos = 6;
                break;
            case 2:
                this.animal = "Mono"
                puntos = 8;
                ;
                break
            case 3:
                this.animal = "Conejo";
                puntos = 10;
                break
            case 4:
                this.animal = "Axolote";
                puntos = 1;
                break;
            default:
                this.animal = "";
                puntos = 0;

        }

        this.puntosAnimal = puntos;

        return this.animal;
                
    }

 


}

class ArmaSeduccion {
    constructor(id, sNombre, poder) {
        this.idArma = id;
        this.nombre = sNombre;
        this.poderSeduccion = poder; //1, 2, o 3
    }

    obtenerPoder(poder) {
        let funcionPoder;

        switch (this.poderSeduccion) {
            case 1: 
                //Suma el poder
                funcionPoder = (x) => x + poder;
                break;
            case 2:
                //Multiplica el poder
                funcionPoder = (x) => x * poder;
                break;
            case 3:
                //Exponencial
                funcionPoder = (x) => Math.pow(x, poder);    
                break;
            default:
                //Devuelve el mismo parámetro que recibió sin modificaciones
                funcionPoder = (x) => x;

        }

        return funcionPoder;
    }

    
}

class Cupido {
    constructor(oGalan) {
        let arma;

        this.galan = oGalan;

        //Carga las Armas de Seducción disponibles
        this.armasSeduccion = [];

        //Perfume
        arma = new ArmaSeduccion(1, "Perfume", 2);
        this.armasSeduccion.push(arma);

        //Chamuyo
        arma = new ArmaSeduccion(2, "Chamuyo", 1);
        this.armasSeduccion.push(arma);

        //Bailar
        arma = new ArmaSeduccion(3, "Saber bailar", 2);
        this.armasSeduccion.push(arma);

        //Ser millonario
        arma = new ArmaSeduccion(4, "Ser millonario", 2);
        this.armasSeduccion.push(arma);

        //Ser influenecer
        arma = new ArmaSeduccion(5, "Ser influencer", 3);
        this.armasSeduccion.push(arma);

        //Puntos Despide
        this.puntosDespide = 0;

        //Puntos Mirada
        this.puntosMirada = 0;

        //Puntos Lugar
        this.puntosLugar = 0;

        //Puntos Suerte
        this.puntosSuerte= 0;

        //Maximo Puntaje
        this.maximoPuntaje = 370;

        //Puntos de Armas de Seduccion
        this.puntosSeduccion = 0;

        //Funcion obtenerPuntosSuerte
        this.obtenerPuntosSuerte = () => {
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
            
            this.puntosSuerte = puntos;

            return puntos;
            
        }

        //Puntos Obtenidos
        this.obtenerPuntosObtenidos = () => {
            let puntosTotales;

            puntosTotales = this.puntosDespide + this.puntosMirada + this.galan.puntosAnimal + this.puntosLugar + + this.puntosSeduccion + this.puntosSuerte;

            return puntosTotales;
        }

        //Porcentaje de éxito
        this.obtenerPorcentajeExito = () => {
            let porcentaje = (this.obtenerPuntosObtenidos() * 100) / this.maximoPuntaje;

            return porcentaje;
        } 

    }

    obtenerPuntosDespide() {
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
        
        this.puntosDespide = puntos;

        return puntos;
    }

    obtenerPuntosMirada() {
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
        
        this.puntosMirada = puntos;

        return puntos;    
    }

    obtenerPuntosLugar() {
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
        
        this.puntosLugar = puntos;

        return puntos;    
    }

    obtenerMensajeFinal() {
        let mensaje = "";
        let principioMensaje = "";
        let finalMensaje = "";
        let porcentaje;
        let nombre;
        let sobrenombre;
        
        nombre = this.galan.nombre;
        sobrenombre = this.galan.sobrenombre;
        porcentaje = this.obtenerPorcentajeExito();

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

    elegirArmasSeduccion() {
        let armasElegidas = [];
        let armasRestantes = [];
        let armaElegida;
        let indiceElegido;
        let mensajeFinal;

        //Cargo todas las armas actuales
        for (const arma of this.armasSeduccion) {
            armasRestantes.push(arma);
        }

        for(let i = 0; i < 3; ++i) {
            let mensaje;
            let opcion = 0;
            let opcionValida = false;


            mensaje = "Elige (de a una por vez) que 3 armas de seducción vas a utilizar \n\n";

            for (const arma of armasRestantes) {
                mensaje += arma.idArma + " - " + arma.nombre + "\n";
            }

            opcionValida = false;
            while (opcionValida == false) {
                opcion = parseInt(prompt(mensaje));

                opcionValida = armasRestantes.some((e) => e.idArma == opcion);
            }

            armaElegida = armasRestantes.find((e) => e.idArma == opcion);
            console.log("Arma elegida: " + armaElegida.nombre);

            armasElegidas.push(armaElegida);

            //Retiro el arma elegida de las armas restantes
            indiceElegido = armasRestantes.indexOf(armaElegida);
            console.log("Indice de arma elegida: " + indiceElegido);

            armasRestantes.splice(indiceElegido, 1);

        }

        mensajeFinal = "Armas elegidas: \n\n";
        for (const arma of armasElegidas) {
            mensajeFinal += arma.idArma + " - " + arma.nombre + "\n";    
        }
        console.log(mensajeFinal);

        return armasElegidas;
    }

    seducir() {
        let armasSeduccion;
        let puntosPorArma;
        let puntosTotales = 0;
        let factorPoder = 2;
        let mensajeFinal = "";

        //Obtengo las armas de seducción a utilizar
        armasSeduccion = this.elegirArmasSeduccion();

        mensajeFinal = "Resultados de su seducción : \n\n";

        for (const arma of armasSeduccion) {
            const funcionSeductora = arma.obtenerPoder(factorPoder);
            
            //Los puntos se calculan en funciòn del animal elegido por el galan
            puntosPorArma = funcionSeductora(this.galan.puntosAnimal);
            puntosTotales += puntosPorArma;
            mensajeFinal += "Por el arma : " + arma.nombre + " obtuvo " + puntosPorArma + " puntos\n";
            console.log("Por el arma : " + arma.nombre + " obtuvo " + puntosPorArma + " puntos");
        }

        mensajeFinal += "TOTAL PUNTOS OBTENIDOS : " + puntosTotales;

        alert(mensajeFinal);

        this.puntosSeduccion = puntosTotales;

        return puntosTotales;
    }
}