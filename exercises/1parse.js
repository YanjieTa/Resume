console.info(Boolean(0));

console.info(Boolean(1));

console.info(Boolean(""));

console.info(Boolean("javascript"));

console.info(Boolean(null));

console.info(Boolean(new Object()));

console.info(Boolean(new Array()));

console.info(Boolean(undefined));


console.info(parseInt(""));

console.info(parseInt("12ab"));

console.info(parseInt("0xA"));

console.info(parseInt(0xA));

console.info(parseInt(10, 16));

console.info(parseInt(10, 8));

console.info(parseInt(22.5));


var a = new Object();
console.info(a.toString());

console.info(String(1));

console.info(String(null));

console.info(String(undefined));