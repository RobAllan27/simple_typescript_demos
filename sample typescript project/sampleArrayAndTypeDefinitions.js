"use strict";
// array definition
const names = ['John', 'Jane', 'Peter', 'David', 'Mary'];
names.push('Rob');
console.log(names);
let person;
person = {
    name: 'John',
    age: 25,
    height: 189
};
console.log(person.age + " --- " + person.name + "---" + person.height);
// functions - define the type of the functions
let greeting;
// name: string is an argument.
// => string is the return value
greeting = function (name) {
    return `Hi ${name}`;
};
console.log(" Greeting " + greeting("Rob"));
// Array - foreach / Map / Filter / Reduce / 
const peoplenames = ["Tom", "Dick", "Charlie", "Harry"];
// Use forEach to print each name
peoplenames.forEach((name) => {
    console.log(name);
});
// Map
const series = [2, 4, 8];
const doubleIt = series.map(f => f * 2);
console.log(doubleIt);
// Filter
// Define an array of numbers
const numbersto10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Use filter to get all divisible by 3 numbers from the array
const divisibleBy3Numbers = numbersto10.filter((number) => number % 3 === 0);
console.log(`Divisible by 3 numbers: ${divisibleBy3Numbers}`);
// Reduce
const numbers = [1, 2, 3, 4, 5];
// Use reduce to calculate the sum of all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(`The sum of the numbers is: ${sum}`);
// enum example
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
function getSeason(month) {
    let season;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            season = 'winter';
            break;
        case Month.Sep:
        case Month.Oct:
        case Month.Nov:
            season = 'spring';
            break;
        case Month.Mar:
        case Month.Apr:
        case Month.May:
            season = 'autumn';
            break;
        default:
            season = 'summer';
            break;
    }
    return season;
}
console.log(`Season for Feb is ${getSeason(Month.Feb)}.`);
console.log(`Season for Mar is ${getSeason(3)}.`);
console.log(`Season for June is ` + getSeason(Month.Jun));
// use void with a fucntion to indicate nothing returned
function printlog(message) {
    console.log("Hi there " + message);
}
printlog('hi there - in a function returning void message');
// Or with the type definition
let welcomeGreeting;
welcomeGreeting = function printlog(message) {
    console.log("Hi there  - in function with the separate  type definition up front --- " + message);
};
welcomeGreeting('Roberto Super Star');
/* never function
function testTypeOf(a: string | number): string {
  if (typeof a === "string") {
    return 'String Found';
  } else if (typeof a === "number") {
    return 'Number Found';
  }
  // make the function valid
  //return neverOccur();
}
*/
// never function
function testTypeOf(a) {
    if (typeof a === "string") {
        return 'String Found';
    }
    else if (a > 2) {
        return 'Number Found';
    }
    // make the function valid
    return neverOccur();
}
let neverOccur = () => {
    throw new Error('Never!');
};
const aString = 'Hello';
const aBigEnoughNumber = 3;
const aNotBigEnoughNumber = 1;
console.log(`Using never in function- with a string` + testTypeOf(aString));
console.log(`Using never in function - with a big enough number` + testTypeOf(aBigEnoughNumber));
let season;
season = 'Spring';
season = 'Summer';
season = 'Autumn';
season = 'Winter';
// compile error season = 'Holidays'
