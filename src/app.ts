let num2: number = 24;
let num1: number = 24;

function cal(num1: number, num2: number): number {
    return num1 + num2;
}

// console.log(cal(num1, num2))

// ---

let employee: {
    readonly id: number,
    age: number,
    name: string
} = {

    id: 2,
    age: 24,
    name: "omar"
}

// ---

// Advance

// Type Aliases: Type aliases allow you to create custom names for types.
// They are especially useful when you want to simplify complex type definitions or reuse types in multiple places. Here's an example:

type Point = {
    x: number;
    y: number;
};

const point: Point = { x: 10, y: 20 };

// Unions: With unions, a value can have one of several specified types. For example:
type Result = string | number;

function processResult(result: Result) {
    // ...
}

// Intersections: Intersections allow you to combine multiple types into one.
//  The resulting type will have all the properties and methods from the intersected types. For example:

type Admin = {
    name?: string; // optional property
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type AdminEmployee = Admin & Employee;

const adminEmployee: AdminEmployee = {
    name: 'John Doe',
    privileges: ['create', 'delete'],
    startDate: new Date(),
};


// Type Narrowing: Type narrowing refers to refining the type of a variable based on certain conditions.
//  It allows TypeScript to infer more specific types within conditional blocks. For example:

function printType(value: string | number) {
    if (typeof value === 'string') {
        console.log('Value is a string:', value.toUpperCase());
    } else if (typeof value === 'number') {
        console.log('Value is a number:', value.toFixed(2));
    }
}


// Nullable: In TypeScript, you can explicitly allow a variable to be null or undefined by using the null or undefined types.
//  By default, variables are assumed to be non-nullable. Here's an example:

let name2: string | null = 'John Doe';

// name2 = null;
// console.log(typeof name2)

// The unknown Type: The unknown type represents values that are of an unknown type.
//  It is similar to the any type, but with additional type safety.
//  You must perform type checks or assertions before using variables of type unknown. Here's an example:

function processValue(value: unknown) {
    if (typeof value === 'number') {
        console.log('Value is a number:', value);
    } else if (typeof value === 'string') {
        console.log('Value is a string:', value);
    } else {
        console.log('Value is of unknown type');
    }
}

// The never Type: The never type represents values that will never occur. 
// It is typically used to indicate functions that don't return or variables that can't have a value. For example:

function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // ...
    }
}

// optional property

type people = {
    name?: string;
    phone: string[];
};

// Optional property access operator 


type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

// console.log(customer?.birthday)

// Optional element access operator 

// -- customer?.[0]


// Optional call

let log: any = (message: string) => console.log(message);

// let log: any = null; ??

// log?.('Hello'); // if error it you get undefined


// Decorator

// @experimentalDecorators
function first(target: Function) {
    target.prototype.endPoint = '/user';
    target.prototype.login = () => { console.log('Login method') };

}

@first
class ExampleClass {
    method() { }
}

const ex = new ExampleClass;

// // @ts-ignore
// console.log(ex.endPoint)

// // @ts-ignore
// console.log(ex.login())


// ---


// Class Decorator
function LogClass(target: Function) {
    console.log(`Class ${target.name} is logged.`);
}

@LogClass
class MyClass {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Method Decorator
    @LogMethod
    greet() {
        console.log(`Hello, ${this.name}!`);
    }

    // Property Decorator
    @UpperCase
    message: string = 'default message';
}

// Method Decorator
function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    console.log(descriptor.value)
    descriptor.value = function (...args: any[]) {
        console.log(`Calling method ${key} with arguments ${args}`);
        return originalMethod.apply(this, args);
    };
}

// Property Decorator
function UpperCase(target: any, key: string) {
    let value = target[key];

    const getter = function () {
        return value.toUpperCase();
    };

    const setter = function (newValue: string) {
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
instance.greet(); // Output: Calling method greet with arguments []
// Output: Hello, John!
console.log(instance.message); // Output: DEFAULT MESSAGE
instance.message = 'new message';
console.log(instance.message); // Output: NEW MESSAGE

