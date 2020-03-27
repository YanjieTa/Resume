function SuperType() {
    this.colors = ['blue', 'green', 'yellow'];
}

function SubType() {
    // SuperType.call(this);
    return SuperType();
}

var instance1 = new SubType();
instance1.colors.push('black');

var instance2 = new SubType();

console.info(instance1.colors, instance2.colors);