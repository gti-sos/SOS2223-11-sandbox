/*var myInteger = 1;
var myDouble = 2.1;
var myString = "Pablo";
var myBoolean = true;

var my = 1;
my = 2.1;
my = "Pablo";
my = true;
var id = 1;
var s = `<body id="${id}">`;

function log(msg) {
    var type = typeof msg;
    var tipo = type.toString().toUpperCase();
    console.log(msg + " --- tipo: " + tipo);
}

var obj = new Object();
obj.name = "n";
obj.l = log;


var m = new Map();

var a = new Array();
a = [1, 2, 3, 4];
a[0] = 1;
a[1] = 2;
a[2] = 3;
a[3] = 4;

a.push(5);

// log(a);

var numbers = [1, 2, 3, 4];


for(var i = 0; i < numbers.length;i++) {
    log(numbers[i]);
}

numbers.forEach(log);

numbers.forEach(function log(msg) {
    console.log(msg);
});

numbers.forEach(function (msg){
    console.log(msg);
});

numbers.forEach((msg) => {
    console.log(msg);
});


// console.log(my);
// obj.l("Mi fantastico log");

var i = numbers.filter((n) => {
    return n > 2;
}).map((n) => {
    return n + 1;

}).reduce((acum, n) => {
    return n + acum;
});
// log(i);
*/

// ---------------------------------

var cool = require("cool-ascii-faces");
var express = require("express");

var app = express();
var port = process.env.PORT || 12345;

app.get("/faces", (req, res) => {
    res.send(cool());
    console.log(`New request`);
});

app.listen(port, () => {
    console.log(`Server ready in port ${port}`);
});


