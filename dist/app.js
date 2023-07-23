"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let num2 = 24;
let num1 = 24;
function cal(num1, num2) {
    return num1 + num2;
}
let employee = {
    id: 2,
    age: 24,
    name: "omar"
};
const point = { x: 10, y: 20 };
function processResult(result) {
}
const adminEmployee = {
    name: 'John Doe',
    privileges: ['create', 'delete'],
    startDate: new Date(),
};
function printType(value) {
    if (typeof value === 'string') {
        console.log('Value is a string:', value.toUpperCase());
    }
    else if (typeof value === 'number') {
        console.log('Value is a number:', value.toFixed(2));
    }
}
let name2 = 'John Doe';
function processValue(value) {
    if (typeof value === 'number') {
        console.log('Value is a number:', value);
    }
    else if (typeof value === 'string') {
        console.log('Value is a string:', value);
    }
    else {
        console.log('Value is of unknown type');
    }
}
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
let log = (message) => console.log(message);
function first(target) {
    target.prototype.endPoint = '/user';
    target.prototype.login = () => { console.log('Login method'); };
}
let ExampleClass = class ExampleClass {
    method() { }
};
ExampleClass = __decorate([
    first
], ExampleClass);
const ex = new ExampleClass;
function LogClass(target) {
    console.log(`Class ${target.name} is logged.`);
}
let MyClass = class MyClass {
    constructor(name) {
        this.message = 'default message';
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};
__decorate([
    LogMethod
], MyClass.prototype, "greet", null);
__decorate([
    UpperCase
], MyClass.prototype, "message", void 0);
MyClass = __decorate([
    LogClass
], MyClass);
function LogMethod(target, key, descriptor) {
    const originalMethod = descriptor.value;
    console.log(descriptor.value);
    descriptor.value = function (...args) {
        console.log(`Calling method ${key} with arguments ${args}`);
        return originalMethod.apply(this, args);
    };
}
function UpperCase(target, key) {
    let value = target[key];
    const getter = function () {
        return value.toUpperCase();
    };
    const setter = function (newValue) {
        value = newValue.toUpperCase();
    };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}
const instance = new MyClass('John');
instance.greet();
console.log(instance.message);
instance.message = 'new message';
console.log(instance.message);
//# sourceMappingURL=app.js.map