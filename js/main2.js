// SIMULADOR DE PEDIDO DE HAMBURGUESAS. //
// - Pedir datos del usuario que compra (nombre, dirección, medio de pago)
// - Solicitar la selección de un barrio de la ciudad (para calcular envío y demora).
// - Seleccionar los ingredientes y aderezos y añadirlos al pedido (opciones veganas).
// - Cotizar el costo según los ingredientes y aderezos.
// - Calcular tiempo de demora en la preparación.
// - Cotizar y calcular el envío según el barrio de la ciudad.
// - Simulación de compra.

// DATOS
let nombre;
let tel;
let direccion;
let barrio;
let pedido;
let tiempoPreparar;
let tiempoEnvio;
let demoraTotal;
//DECLARO ARRAY PARA HACER LISTA DE USUARIOS
let listaUsuarios = [];

// PEDIR DATOS
function pedirNombre() {
  nombre = prompt("Ingrese su nombre:");
  while (nombre === "" || !isNaN(nombre)) {
    nombre = prompt("Por ingrese un nombre correcto: ");
  }
  return nombre;
}

function pedirTel() {
  tel = prompt("Ingrese su número de teléfono (sin el 0 y el 15): ");
  while (isNaN(parseInt(tel)) || tel.length <= 9 || tel.length >= 11) {
    tel = prompt("Por favor vuelva a ingresar su número sin el 0 ni el 15:");
  }
  return tel;
}

function pedirDir() {
  direccion = prompt("Ingrese una dirección de envío (con altura incluída): ");
  while (direccion === "") {
    direccion = prompt(
      "Por favor asegúrese de que ingresó correctamente la dirección:"
    );
  }
  return direccion;
}

function pedirBarrio() {
  barrio = prompt(
    "Escriba el número que corresponde a su barrio en Choele Choel. Coloque 0 si lo retira por el local:" +
      "\n" +
      "1- Barrio Centro" +
      "\n" +
      "2- Barrio Almafuerte" +
      "\n" +
      "3- Barrio Villa Unión Sur" +
      "\n" +
      "4- Barrio Villa Unión Norte" +
      "\n" +
      "5- Barrio Maldonado" +
      "\n" +
      "6- Barrio Las Bardas" +
      "\n" +
      "7- Barrio Las Mercedes"
  );
  switch (barrio) {
    case "1":
      barrio = "Barrio Centro";
      break;
    case "2":
      barrio = "Barrio Almafuerte";
      break;
    case "3":
      barrio = "Barrio Villa Unión Sur";
      break;
    case "4":
      barrio = "Barrio Villa Unión Norte";
      break;
    case "5":
      barrio = "Barrio Maldonado";
      break;
    case "6":
      barrio = "Barrio Las Bardas";
      break;
    case "7":
      barrio = "Barrio Las Mercedes";
      break;
    default:
      barrio = "Retiro por local";
      break;
  }
  return barrio;
}

// DECLARO UNA CLASE PARA CREAR USUARIOS
class Usuario {
  constructor(nombre, tel, direccion, barrio) {
    this.nombre = nombre;
    this.tel = tel;
    this.direccion = direccion;
    this.barrio = barrio;
  }
}

for (i = 0; i < 2; i++) {
  let usuario = new Usuario(
    pedirNombre(),
    pedirTel(),
    pedirDir(),
    pedirBarrio()
  );
  listaUsuarios.push(usuario);
}

//LISTO LOS USUARIOS INGRESADOS CON SUS DATOS
console.log(listaUsuarios);

//ARRAYS DE PRODUCTOS DISPONIBLES
const burgers = [
  { nombre: "Vegan", precio: 499 },
  { nombre: "Carne Premium", precio: 550 },
  { nombre: "Veggie", precio: 479 },
];
const aderezos = ["Mayonesa", "Mostaza", "Cheddar", "Ketchup", "Salsa Golf"];
const guarniciones = [
  "Papas fritas",
  "Papas Boston",
  "Papas noisette",
  "Aros de cebolla",
  "Bastones de mozarella",
  "Rabas",
];
