"use strict";
class Calculator {
    sum(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
    protectedMethod() {
        console.log('protected');
    }
    privateMethod() {
        console.log('private');
    }
}
const calc = new Calculator();
class SuperCalculate extends Calculator {
    constructor() {
        super();
        this.protectedMethod();
    }
}
setInterval(() => {
}, 10000000);
