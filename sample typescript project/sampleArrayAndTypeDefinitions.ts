// array definition

const names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
names.push('Rob')
console.log(names)

let person: {
    name: string;
    age: number
    height: number
 };
 
person = {
    name: 'John',
    age: 25,
    height: 189
 };

 console.log(person.age + " --- " +  person.name + "---" + person.height)


 // functions - define the type of the functions
let greeting : (name: string) => string;

// name: string is an argument.
// => string is the return value

greeting = function (name: string) {
    return `Hi ${name}`;
};

console.log(" Greeting " +  greeting("Rob"))



// Array - foreach / Map / Filter / Reduce / 

const peoplenames: string[] = ["Tom", "Dick", "Charlie", "Harry"];

// Use forEach to print each name
peoplenames.forEach((name: string) => {
  console.log(name);
});

// Map
const series = [2, 4, 8];
const doubleIt = series.map(f => f* 2);
console.log(doubleIt);


// Filter

// Define an array of numbers
const numbersto10: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use filter to get all divisible by 3 numbers from the array
const divisibleBy3Numbers = numbersto10.filter((number) => number % 3 === 0);

console.log(`Divisible by 3 numbers: ${divisibleBy3Numbers}`);

// Reduce

const numbers: number[] = [1, 2, 3, 4, 5];

// Use reduce to calculate the sum of all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(`The sum of the numbers is: ${sum}`);

// enum example

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}

function getSeason(month: Month) {
  let season: string;
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

console.log(`Season for June is `+ getSeason(Month.Jun));

// use void with a fucntion to indicate nothing returned
function printlog(message: string): void {
  console.log("Hi there " + message);
}

printlog('hi there - in a function returning void message')

// Or with the type definition
let welcomeGreeting : (name: string) => void;

welcomeGreeting = function printlog(message: string): void {
  console.log("Hi there  - in function with the separate  type definition up front --- " + message);
}

welcomeGreeting('Roberto Super Star')

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
function testTypeOf(a: string | number): string {
  if (typeof a === "string") {
    return 'String Found';
  } else if (a > 2) {
    return 'Number Found';
  }  
  // make the function valid
  return neverOccur();
}

let neverOccur = () => {
   throw new Error('Never!');
} 

const aString: string = 'Hello'
const aBigEnoughNumber: number = 3
const aNotBigEnoughNumber: number = 1

console.log(`Using never in function- with a string`+ testTypeOf(aString));
console.log(`Using never in function - with a big enough number`+ testTypeOf(aBigEnoughNumber));
//console.log(`Using never in function - with a not bit enough number`+ testTypeOf(aNotBigEnoughNumber));

type Season = 'Spring' | 'Summer' | 'Autumn' | 'Winter';
let season: Season;
season = 'Spring'
season = 'Summer'
season = 'Autumn'
season = 'Winter'
// compile error season = 'Holidays'
