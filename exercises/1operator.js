console.info(typeof +"1", +"1");

var a = 1;
var b = a + "";
console.log(typeof b, b);

console.info(!!"");

if(true) {
    a = 2;
}

true && (a = 3);

console.info(a);

function score(s) {
    return s || 5;
}

console.info(score(1));
console.info(score());


function fib(n){
    if(n<2) {
        return n;
    } else {
        return fib(n-1) + fib(n-2);
    }
}

function fib(n) {
    // if(n < 2) {
    //     return n;
    // } else {
    //     return fib(n - 1) + fib(n-2);
    // }
    return n <= 2 ? n : fib(n-1) + fib(n - 2);
}

console.info(fib(6));