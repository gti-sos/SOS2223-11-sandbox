// ----------------------------Primer Laboratorio---------------------------

// Imprimir por pantalla

console.log("Hola Mundo");

// Declarar variables: var y let.

var a;

a = 1;

console.log(a);

// Variables enteros, reales, cadenas, booleanos.

// Podemos declarar una variable y cambiarla sin declarar su tipo.

var enteros = 2;
var reales = 2.0;
var cadenas = "";
var booleano = true;

// Igualdades

var a = 1, b = "1"; // b = "1" y b = 1 iguales.
                    // Con === son distintos. (estrictos).

if(a == b) {

    console.log("Iguales");

}

    else {

        console.log("Distintos");

    }


// Funciones

function log(msg) {

    console.log(msg);

}

log("Mi fantástico log".toLocaleUpperCase());

// Declarar objetos

var o = new Object();

// Declarar mapa

var m = new Map();

// Declarar array

var numbers = new Array();

a = [1, 2, 3, 4];

a[0] = 1;
a[1] = 2;
a[2] = 3;
a[3] = 4;

a.push(5); // Push pone un nuevo dato al final, pop lo quita.

log(a)

// Recorrer arrays

for(var i = 0; i < numbers.length; i++) {

    log(numbers[i]);

}

// Iteradores

numbers.forEach(function (msg) { // Hace lo mismo que el for.
// y hacer un callback, es decir, una función como parámetro.

        console.log("v2:" + msg);

});

numbers.forEach((msg) => { // La flecha representa function.

    console.log("v4:" + msg);

});

// Otro iterador

var i = a

    .filter((n) => { // Imprime los elementos de la condición
        return n > 2;
    }).map((n) => {
        return n + 1; // Suma todos los elementos del array en 1
    }).reduce((a, n) => {
        return n + a; // Reduce a 1 elemento la suma de los dos.
    });


// ----------------------------Segundo y Tercer Laboratorio---------------------------

// Cargar módulo para servidor Web.

var express = require("express");

// Cargar módulo de paquete instalado: Objetos.

var cool = require("cool-ascii-faces");

// Muestra emoticonos aleatorios

console.log(cool());

// Servidor Web: Función que se ejecuta cada vez que llamamos a "/faces"

var app = express();

// Parsear cuerpo del mensaje

var bodyparser = require("body-parser");

// Definir variable de entorno para el puerto

var port = process.env.PORT || 12345;

// Usar bodyparser para la app express

app.use(bodyparser.json());

// Creamos unas variables de recurso

var contacts = [

    {
        name: "pepe",
        phone: 12345
    },

    {
        name: "pablo",
        phone: 6789
    }
];

app.get("/faces", (request, response) => {
    response.send(cool());
    console.log("New Request");
});

// Creamos un nuevo GET y un nuevo POST

const BASE_API_URL = "/api/v1";

app.get(BASE_API_URL + "/contacts", (request, response) => {

    response.json(contacts);

    console.log("New GET to /contacts");

});

app.post(BASE_API_URL + "/contacts", (request, response) => {

    var newContact = request.body;

    // Sustituir object por la variable que le pasas, null para filtrar algo, y 2 para tabular

    console.log(`newContact = ${JSON.stringify(newContact, null, 2)}>`);
   
    console.log("New POST to /contacts");

    // Enviar código de estado

    response.sendStatus(201);

    // Meter datos dentro de un array 

    contacts.push(newContact);
});


// Arrancar servidor web (escuchar en un puerto) e ir al navegador y poner localhost:12345/faces

app.listen(port, () => {
    console.log(`Server ready in port ${port}`);
});





