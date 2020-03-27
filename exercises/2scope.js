global.color = "red";
var o = {
    color: "blue"
};

function sayColor() {
    debugger;
}

// sayColor.call(0);

var bindSayColor = sayColor.bind(o);

bindSayColor();