//Variables y Constantes
let nombreUsuario;
let sobreNombreUsuario;
let puntosDespedida;
let puntosOjos;
let puntosEspecie;
let puntosComoSeConocieron;
let puntosFortuna;
let probabilidadDeseo;
const maximoPuntaje = 70;
let puntosTotales = 0;
let mensajeFinal = "";

//Pedir Nombre
nombreUsuario = obtenerNombre();
console.log("Nombre de Usuario: " + nombreUsuario);

//Pedir Sobrenombre
sobreNombreUsuario = obtenerSobrenombre(nombreUsuario);
console.log("Sobrenombre de Usuario: " + sobreNombreUsuario);

//Como te despide
puntosDespedida = puntosDespide();
console.log("Puntos de como te despide: " + puntosDespedida);

//Donde te mira
puntosOjos = puntosMirada();
console.log("Puntos de donde te mira: " + puntosOjos);

//Animal
puntosEspecie = puntosAnimal();
console.log("Puntos de animal: " + puntosEspecie);

//Como se conocieron
puntosComoSeConocieron = puntosLugar();
console.log(`Puntos de Cómo se conocieron: ${puntosComoSeConocieron}`);

//Suerte
puntosFortuna = puntosSuerte();
console.log(`Puntos de la suerte: ${puntosFortuna}`);

//Puntos totales obtenidos
puntosTotales = puntosDespedida + puntosOjos + puntosEspecie + puntosComoSeConocieron + puntosFortuna;
console.log(`Puntos Totales: ${puntosTotales}`);

//Probabilidad de salir de la FriendZone
probabilidadDeseo = porcentajeExito(puntosTotales, maximoPuntaje);
console.log(`Probabilidad de Deseo: ${probabilidadDeseo.toFixed(2)}%`);

//Mensaje Final 
mensajeFinal = obtenerMensajeFinal(nombreUsuario, sobreNombreUsuario, probabilidadDeseo);
console.log(`Mensaje Final: ${mensajeFinal}`);

alert(mensajeFinal);