var a = [1, 2, 3];

a.push(4);

console.info(a);

a.unshift(0);

console.info(a);

a.pop();

console.info(a);

a.shift();

console.info(a);

a.reverse();

console.info(a);

// sort
var b = [2, 1, 3, 7, 5, 4, 6];

b.sort(function(prev, next){
    if(prev > next){
        return 1;
    }

    if(prev < next){
        return -1;
    }

    return 0;
});

b.sort(function(prev, next){
    // if(prev > next){
    //     return 1;
    // }

    // if(prev < next){
    //     return -1;
    // }

    return prev - next;
});

b.sort(function(prev, next){
    // if(prev > next){
    //     return 1;
    // }

    // if(prev < next){
    //     return -1;
    // }

    return next - prev;
});

console.info(b);

// forEach
var c = [1, 2, 3];

c.forEach(function(d, e) {
    console.info(d, e);
});

// filter
var f = [-2, 0, 1, 2, 3];

var g = f.filter(function(h){
    return h > 0;
});

console.info(g);

// map
var i = f.map(function(j){
    return j * 2;
});

console.info(i);

// reduce
var k = f.reduce(function(a, b){
    return a + b;
}, 0);

console.info(k);