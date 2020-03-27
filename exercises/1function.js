// arguments
function factorial(num) {
    if(num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}

console.info(factorial(2));

// this
global.color = "red";

var o = {
    color: "blue"
};

function sayColor() {
    console.info(this.color);
}

sayColor();

o.sayColor = sayColor;

o.sayColor();

// call
sayColor.call(o);

// apply
sayColor.apply(o);

function sum(a, b){
    console.info(+a + +b);
}

sum.call(o, '1', '2');

sum.apply(o, ['1', '2']);