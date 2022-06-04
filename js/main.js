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

// PEDIR DATOS
function pedirNombre() {
  nombre = prompt("Ingrese su nombre:");
  while (nombre === "" || !isNaN(nombre)) {
    nombre = prompt("Por ingrese un nombre correcto: ");
  }
}

function pedirTel() {
  tel = prompt("Ingrese su número de teléfono (sin el 0 y el 15): ");
  while (isNaN(parseInt(tel)) || tel.length <= 9 || tel.length >= 11) {
    tel = prompt("Por favor vuelva a ingresar su número sin el 0 ni el 15:");
  }
}

function pedirDir() {
  direccion = prompt("Ingrese una dirección de envío (con altura incluída): ");
  while (direccion === "") {
    direccion = prompt(
      "Por favor asegúrese de que ingresó correctamente la dirección:"
    );
  }
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
}

pedirNombre();
pedirTel();
pedirDir();
pedirBarrio();
console.log(nombre);
console.log(tel);
console.log(direccion);
console.log(barrio);

//CONFIRMACIÓN DE DATOS
let respuesta;
function confirmarDatos() {
  respuesta = prompt(
    nombre +
      " confirma, por favor, con Si/No, que los siguientes datos son correctos: " +
      "\n" +
      "Teléfono: " +
      tel +
      "\n" +
      "Dirección: " +
      direccion +
      "\n" +
      "Barrio: " +
      barrio
  );
  while ((respuesta == "No")) {
    alert("Acualice la página y vuelva a intentarlo.");
    break;
  }
  alert("Muy bien "+nombre+"!"+" Ahora continúe con su compra.")
}

confirmarDatos();
console.log(respuesta);
