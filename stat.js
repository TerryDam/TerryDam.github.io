(function(){
function reduce(array, combine, start) {
    var current = start;
    for (var element of array) {
        current = combine(current, element);
    }
    return current;
    }
    var max=function(data){
        return reduce(data,(a,b)=>a>b.credit?a:b.credit)
    }
    window.my={"max":max};
})()

