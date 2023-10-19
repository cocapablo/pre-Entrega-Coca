//Variables y Constantes

let puntosTotales = 0;
let mensajeFinal = "";
let cupido;
let chuckNorris;

let usuario = new Galan("", "", "");


//Cupido
cupido = new Cupido(usuario);

//Renderizar Armas de Seduccion
cupido.renderArmasSeduccionDisponibles();

cupido.renderArmasSeduccionElegidas();

//Chuck Norris
chuckNorris = new ChuckNorris();

chuckNorris.renderizar("En instantes las mejores frases de Chuck en inglés. Si no sabés inglés tenés 10 segundos para aprender");

setInterval(chuckNorris.obtenerFraseEnIngles, 10000);



