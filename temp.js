
var a=10,fn,bar=function(x){
    var b=5;
    fn(x+b);
};

fn=function(y){
var c=5;
console.log(y+c);
}
bar(10);



var a=10,b=20;
function fn(x){
    var a=100,c=300;
    function bar(X){
        var a=1000,d=4000
    }
    bar(100);
    bar(200);
}



var x=10
function fn(){
    var b=20;
    console.log(x+b);
}


var x=10;
function fn(){
    console.log(x);
}