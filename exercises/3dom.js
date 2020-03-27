
if (someNode.nodeType == 1) {
    value = someNode.nodeName;
}

var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes, 0);

function toArrArgs() {
    var args = Array.prototype.slice.call(arguments, 0);
}

// document node
var html = document.documentElement;
alert(html === document.childNodes[0]);
alert(html === document.firstChild);

// element node
element.id;
element.className;
element.title;

element.getAttribute("id");
element.getAttribute("class");
element.getAttribute("title");
element.getAttribute("val");

// dom operation

// creat
document.createElement("div");
var returnedNode = someNode.appendChild(newNode);
alert(returnedNode == newNode); // true
alert(someNode.lastChild == newNode); // true

var returnedNode = someNode.appendChild(someNode.firstChild);
alert(returnedNode == someNode.firstChild); // false
alert(returnedNode == someNode.lastChild); // true

// insert
returnedNode = someNode.insertBefore(newNode, null);
alert(newNode == someNode.lastChild);

var returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
alert(returnedNode == newNode); // true
alert(returnedNode == someNode.firstChild); // true

returnedNode = someNode.insertBefore(newNode, someNode.lastChild);
alert(newNode == someNode.childNodes[someNode.childNodes.length-2]); //true

// replace
var returnedNode = someNode.replaceChild(newNode, someNode.firstChild);
returnedNode = someNode.replaceChild(newNode, someNode.lastChild);

// delete
var formerFirstChild = someNode.removeChild(someNode.firstChild);
var formerLastChild = someNode.removeChild(someNode.lastChild);

// clone
var deepList = myList.cloneNode(true); // clone child nodes
var shallowList = myList.cloneNode(false); // not clone child nodes

