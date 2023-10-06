// the : number at the end defines the return type
// can be replaced with a void

function add2Nums(a: number, b: number): number {
    return a + b;
}

// define a function type
let addNumbers: (x: number, y: number) => number;

addNumbers = function(a: number, b: number): number {
    return a + b;
}
/*
function addNumbers(a: string, b: string): string {
    return a + b;
}
*/
console.log(`Adding 2 numbers `+ addNumbers(2,3));


// Optional parameters
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
} 


// or with a function type
let multiplyAgain: (x: number, y: number, z?: number) => number;

multiplyAgain = function (a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
} 

//let multiplyThirdTime: (x: number, y: number, z: number) => number;

/*
multiplyThirdTime = function (a: number, b: number, c: number = 2): number {
    return a * b * c;
} 
*/
function multiplyThirdTime(a: number, b: number, c: number = 2): number {
    return a * b * c;
}

console.log(`Multiplying 2 numbers - without the function type - expect 6 - got `+ multiply(2,3))
console.log(`Multiplying 3 numbers - without the function type - expect 24  - got `+ multiply(2,3,4))
console.log(`Multiplying 2 numbers - with the function type - expect 6 - got `+ multiplyAgain(2,3))
console.log(`Multiplying 3 numbers - with the function type - expect 24  - got `+ multiplyAgain(2,3,4))
console.log(`Multiplying 2 numbers - with the function type and default value defined but not used - expect 24 - got `+ multiplyThirdTime(2,3,4))
console.log(`Multiplying 3 numbers - with the function type - expect 12 - got `+ multiplyThirdTime(2,3))

// rest paramters - like varargs - they have to be of the same type

function getMultiplicationProduct(greetingMessage: string, ...numbers: number[]): number {
    let total = 1;
    console.log(`Greeting is ${greetingMessage}.`)
    if (numbers.length === 0) {
        return 0;
    }
    numbers.forEach((num) => total *= num);
    return total;
}

console.log(`Using the rest varags-like approach - no numbers passed in - should get 0 - got `+ getMultiplicationProduct('Hello'))
console.log(`Using the rest varags-like approach - 2 numbers passed in  - should get 6 - got `+ getMultiplicationProduct('Hello again', 2,3))
console.log(`Using the rest varags-like approach - 2 numbers passed in  - should get 24 - got `+ getMultiplicationProduct('Hello finally', 2,3,4))

// Method overloading - tells what the return type is - for the compiler. The implementation comes immediately. Using typesof-s we we vary the returned value.
function addElements(a: number, b: number): number;
function addElements(a: string, b: string): string;
function addElements(a: any, b: any): any {
   return a + b;
}

console.log(`Using function overloading -same logic`+ addElements(2,3))
console.log(`Using function overloading -same logic `+ addElements('rabbit','hare'))

function addingThings(x: number, y: number): number;
function addingThings(x: string, y: string): string;
function addingThings(x: any, y: any): any {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }
  if (typeof x === 'string' && typeof y === 'string') {
    return x + " --- " + y;
  }
}

console.log(`Using function overloading - diff logic`+ addingThings(5,6))
console.log(`Using function overloading - diff logic `+ addingThings('rabbit','hare'))