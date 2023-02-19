
function log(msg){
    console.log(msg);

}


log ("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
var o = new Object();

o.name = "petete";
o.l = log;

o.l("log del objeto")



numbers  = [1,2,3,4];
/*
for (var i = 0; i<numbers.length; i++){
    log(numbers[i])
}
*/


numbers.forEach(function log(msg){
    console.log("v2:"+msg)
});

numbers.forEach(function (msg){
    console.log("v3:"+msg)
});

numbers.forEach((msg)=>{
    console.log("v2:"+msg)
});

number.filter((n)=>{
    return n>2;
}).map((n)=>{
    return n+1;
}).reduce((a,n)=>{
    return n+a;
}).forEach(log);



