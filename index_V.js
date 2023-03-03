/*
function log(msg){
    console.log(msg);

}


log ("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
var o = new Object();

o.name = "petete";
o.l = log;

o.l("log del objeto")



numbers  = [1,2,3,4];

for (var i = 0; i<numbers.length; i++){
    log(numbers[i])
}



numbers.forEach(function log(msg){
    console.log("v2:"+msg)
});

numbers.forEach(function (msg){
    console.log("v3:"+msg)
});

numbers.forEach((msg)=>{
    console.log("v2:"+msg)
});

numbers.filter((n)=>{
    return n>2;
}).map((n)=>{
    return n+1;
}).reduce((a,n)=>{
    return n+a;
}).forEach(log);
*/


//----------------------------------------
// L05


var  cool = require("cool-ascii-faces");
console.log(cool());

var express = require("express");
var app = express();
var port = 12345
app.get("/faces", (req,res)=> {
    res.send(cool());
    console.log("New Request");
});

app.listen(port,()=>{
    console.log(`Server ready in port ${port}`);
});


//------------------------------------------
//L06 

var contacts = [{
                    name: "people",
                    phone: 12345                
                },
                {
                    name: "pablo",
                    phone: 6789
                }
];

const BASE_API_URL = "/api/v1";

app.get(BASE_API_URL+"/contacts", (req,res)=> {
    res.json(contacts);
    console.log("New GET Request to /contacts");
});

app.post(BASE_API_URL+"/contacts", (req,res)=> {
    var newContact = request.body;
    console.log(`new contact <${newContact}>`)
    console.log("New POST  to /contacts");
    res.sendStatus(201)
});
