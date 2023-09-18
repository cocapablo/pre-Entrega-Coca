//Variables y Constantes

let nombreUsuario;
let sobreNombreUsuario;
let animal;
let puntosDespedida;
let puntosOjos;
let puntosEspecie;
let puntosComoSeConocieron;
let puntosFortuna;
let probabilidadDeseo;
let puntosTotales = 0;
let mensajeFinal = "";
let cupido;

let usuario = new Galan("", "", "");

//Pedir Nombre
nombreUsuario = usuario.obtenerNombre();
console.log("Nombre de Usuario: " + nombreUsuario);

//Pedir Sobrenombre
sobreNombreUsuario = usuario.obtenerSobrenombre();
console.log("Sobrenombre de Usuario: " + sobreNombreUsuario);

//Animal
animal = usuario.obtenerAnimal();
console.log("Animal: " + animal);
puntosEspecie = usuario.puntosAnimal;
console.log("Puntos de animal: " + puntosEspecie);

//Cupido
cupido = new Cupido(usuario);

//Como te despide
puntosDespedida = cupido.obtenerPuntosDespide();
console.log("Puntos de como te despide: " + puntosDespedida);

//Donde te mira
puntosOjos = cupido.obtenerPuntosMirada();
console.log("Puntos de donde te mira: " + puntosOjos);


//Como se conocieron
puntosComoSeConocieron = cupido.obtenerPuntosLugar();
console.log(`Puntos de Cómo se conocieron: ${puntosComoSeConocieron}`);

//Seducir
cupido.seducir();

//Suerte
puntosFortuna = cupido.obtenerPuntosSuerte();
console.log(`Puntos de la suerte: ${puntosFortuna}`);

//Puntos totales obtenidos
//puntosTotales = puntosDespedida + puntosOjos + puntosEspecie + puntosComoSeConocieron + puntosFortuna;
puntosTotales = cupido.obtenerPuntosObtenidos();
console.log(`Puntos Totales: ${puntosTotales}`);

//Probabilidad de salir de la FriendZone
probabilidadDeseo = cupido.obtenerPorcentajeExito();
console.log(`Probabilidad de Deseo: ${probabilidadDeseo.toFixed(2)}%`);

//Mensaje Final 
mensajeFinal = cupido.obtenerMensajeFinal();
console.log(`Mensaje Final: ${mensajeFinal}`);

alert(mensajeFinal);