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
//DECLARO ARRAY PARA HACER LISTA DE USUARIOS
let listaUsuarios = [];
//ARRAYS DE PRODUCTOS DISPONIBLES
const burgers = [
  { nombre: "Vegan", precio: 499 },
  { nombre: "Carne Premium", precio: 550 },
  { nombre: "Veggie", precio: 479 },
];
const panes = [
  "Pan tradicional",
  "Pan de remolacha",
  "Pan de salvado",
  "Pan saborizado con semillas",
];
const aderezos = [
  "Mayonesa",
  "Mostaza",
  "Cheddar",
  "Ketchup",
  "Salsa Golf",
  "BBQ",
  "Chili",
];
const guarniciones = [
  { nombre: "Papas Boston", precio: 250 },
  { nombre: "Papas fritas", precio: 200 },
  { nombre: "Papas noisette", precio: 200 },
  { nombre: "Aros de cebolla", precio: 180 },
  { nombre: "Bastones de mozarella", precio: 300 },
  { nombre: "Nuggets", precio: 240 },
  { nombre: "Rabas", precio: 500 },
];
// ARRAY PARA HACER LISTA DE PRODUCTOS
let carrito = [];
const total = 0;

//ITERO LAS OPCIONES DISPONIBLES EL DÍA DE HOY
console.log("Burgers disponibles el día de hoy: ");
let burgerLista = burgers.map((el) => el.nombre);
console.log(burgerLista);
console.log("--------------");
console.log("Guarniciones disponibles el día de hoy:");
let guarnicionLista = guarniciones.map((el) => el.nombre);
console.log(guarnicionLista);
console.log("--------------");

//FILTRO LAS BURGERS SIN CARNE
const vegetarian = burgers.filter((item) => !item.nombre.includes("Carne"));
console.log("Tenemos opciones sin carne:");
console.log(vegetarian);

//   -------------------------------   //
//               USUARIO               //
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

for (i = 0; i < 1; i++) {
  let usuario = new Usuario(
    pedirNombre(),
    pedirTel(),
    pedirDir(),
    pedirBarrio()
  );
  listaUsuarios.push(usuario);
}

//LISTAR LOS USUARIOS INGRESADOS CON SUS DATOS
console.log("--------------");
let nombreUsuarios = listaUsuarios.map((el) => el.nombre);
console.log("Usuario que compra:");
console.log(nombreUsuarios);

//   -------------------------------   //
//        FUNCIONES PRODUCTO          //
function pedirBurger() {
  burger = prompt(
    "Elija el número de la burger que desea:" +
      "\n" +
      "1- Burger " +
      burgers[0].nombre +
      "\n" +
      "2- Burger " +
      burgers[1].nombre +
      "\n" +
      "3- Burger " +
      burgers[2].nombre
  );
  switch (burger) {
    case "1":
      burger = burgers[0];
      break;
    case "2":
      burger = burgers[1];
      break;
    case "3":
      burger = burgers[2];
      break;
    default:
      return "Error. Vuelva a intentarlo.";
  }
  return burger;
}

function pedirAderezo() {
  let cuantosAderezos = [];
  let aderezo = prompt(
    "Elija el aderezo que quiere agregarle a su burger:" +
      "\n" +
      aderezos.join(", ") +
      "."
  );
  cuantosAderezos = aderezo.split(", ");
  return cuantosAderezos;
}

function pedirPan() {
  let pan = prompt(
    "Elija qué pan prefiere de la lista:" +
      "\n" +
      "1- " +
      panes[0] +
      "\n " +
      "2- " +
      panes[1] +
      "\n " +
      "3- " +
      panes[2] +
      "\n " +
      "4-" +
      panes[3] +
      "."
  );
  switch (pan) {
    case "1":
      pan = panes[0];
      break;
    case "2":
      pan = panes[1];
      break;
    case "3":
      pan = panes[2];
      break;
    case "4":
      pan = panes[3];
      break;
    default:
      return "Error. Vuelva a intentarlo.";
  }
  return pan;
}

function pedirGuarnicion() {
  guarnicion = prompt(
    "Elija la guarnición para acompañarla" +
      "\n" +
      "1- " +
      guarniciones[0].nombre +
      "\n" +
      "2- " +
      guarniciones[1].nombre +
      "\n" +
      "3- " +
      guarniciones[2].nombre +
      "\n" +
      "4- " +
      guarniciones[3].nombre +
      "\n" +
      "5- " +
      guarniciones[4].nombre +
      "\n" +
      "6- " +
      guarniciones[5].nombre +
      "\n" +
      "7- " +
      guarniciones[6].nombre
  );
  switch (guarnicion) {
    case "1":
      guarnicion = guarniciones[0];
      break;
    case "2":
      guarnicion = guarniciones[1];
      break;
    case "3":
      guarnicion = guarniciones[2];
      break;
    case "4":
      guarnicion = guarniciones[3];
      break;
    case "5":
      guarnicion = guarniciones[4];
      break;
    case "6":
      guarnicion = guarniciones[5];
      break;
    case "7":
      guarnicion = guarniciones[6];
      break;
    default:
      return "Ninguna.";
  }
  return guarnicion;
}

//   -------------------------------   //
//                PEDIDO              //
class Burger {
  constructor(burger, aderezo, pan, guarnicion) {
    this.burger = burger;
    this.aderezo = aderezo;
    this.pan = pan;
    this.guarnicion = guarnicion;
  }
  calcularSubtotal(cantidad, porciones) {
    return this.burger.precio * cantidad + this.guarnicion.precio * porciones;
  }
}

let pedirCantidad = parseInt(prompt("Cuántas burgers deseas pedir?"));
const pedido1 = new Burger(
  pedirBurger(),
  pedirAderezo(),
  pedirPan(),
  pedirGuarnicion()
);
let porcionGuarnicion = parseInt(
  prompt("Cuántas porciones de guarnicion deseas pedir?")
);

carrito.push(pedido1);

//   ----------------------------------------   //
//                SALIDA DEL TOTAL             //
alert(
  nombreUsuarios +
    ", el costo total de tu compra es de $" +
    pedido1.calcularSubtotal(pedirCantidad, porcionGuarnicion) +
    "."
);
console.log("--------------");
console.log(
  nombreUsuarios +
    ", el costo total de tu compra es de $" +
    pedido1.calcularSubtotal(pedirCantidad, porcionGuarnicion) +
    "."
);

console.log("Detalle del pedido: ");

carrito.forEach((item) => {
  console.log(item);
});
