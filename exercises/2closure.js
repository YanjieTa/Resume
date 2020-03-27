function applyArr() {

    var arr = [];

    for(var i = 0; i < 10; i++) {

        // (function(index){
        //     debugger;
        //     arr.push(function(){
        //         return index;
        //     });
        // })(i);

        arr.push((function(index){
            debugger;
            return i;
        })(i));

        // arr.push(function() {
        //     debugger;
        //     return i;
        // });
    }

    return arr;
}

var arr = applyArr();

var b = arr[1]();

console.info(b);