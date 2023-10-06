"use strict";
function getRandomElement(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
const setOfNumbers = [1, 5, 7, 4, 2, 9];
const randomEle = getRandomElement(setOfNumbers);
console.log(randomEle);
/*
let returnElem: string;
returnElem = getRandomElement(setOfNumbers);
This will fail to compile - TS2322: Type 'number' is not assignable to type 'string'.
*/
const setOfStrings = ['A', 'B', 'C', 'D', 'E', 'F'];
const randomStringEle = getRandomElement(setOfStrings);
console.log(randomStringEle);
// With multiple types
class Animal {
}
class Pet extends Animal {
    // Constructor to initialize the properties
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
    // Method to override the toString 
    toString() {
        return `${this.name} who is ${this.age} years old is getting `;
    }
}
const pet1 = new Pet("Fido", 30);
const pet2 = new Pet("Rex", 32);
const pet3 = new Pet("Tiger", 33);
const setOfPets = [pet1, pet2, pet3];
class FeedingTime {
}
class Dinner extends FeedingTime {
    // Constructor to initialize the properties
    constructor(nameOfDish, hot) {
        super();
        this.nameOfDish = nameOfDish;
        this.hot = hot;
    }
    // Method to override the toString 
    toString() {
        const servingtemperature = this.hot ? '- Served Hot' : '- Served Cold';
        return `${this.nameOfDish} ${servingtemperature}`;
    }
}
const dinner1 = new Dinner("DogFood", false);
const dinner2 = new Dinner("Sausages", true);
const dinner3 = new Dinner("Steak", true);
const setOfDinners = [dinner1, dinner2, dinner3];
function getRandomPetFeedingCycle(items1stSet, items2ndSet) {
    const randomIndex1stSet = Math.floor(Math.random() * items1stSet.length);
    const randomIndex2ndSet = Math.floor(Math.random() * items2ndSet.length);
    const from1stSet = items1stSet[randomIndex1stSet];
    const from2ndSet = items2ndSet[randomIndex2ndSet];
    return from1stSet.toString() + from2ndSet.toString();
}
const randomStringAboutFoodsAndPets = getRandomPetFeedingCycle(setOfPets, setOfDinners);
console.log(` Tonight's arrangements -  ${randomStringAboutFoodsAndPets}`);
// Create a function that accepts a generic type T constrained to keys of Person
function getProperty(obj, key) {
    return obj[key];
}
// Create an instance of the Person object
const purchaser = {
    name: "Tommy",
    age: 20,
    company: "BCC Procurement",
};
// Access properties using getProperty function
const purchaserName = getProperty(purchaser, "name"); // Valid
const purchaserAge = getProperty(purchaser, "age"); // Valid
const purchaserCompany = getProperty(purchaser, "company"); // Valid
//const purchaserDiscount: string = getProperty(purchaser, "discount"); // Valid
console.log(purchaserName + " " + purchaserAge + " " + purchaserCompany);
// a generic class
class Stack {
    constructor(size) {
        this.size = size;
        this.elements = [];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    isFull() {
        return this.elements.length === this.size;
    }
    push(element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    }
    pop() {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}
const numbersStack = new Stack(5);
//numbersStack.push('rabbit')
numbersStack.push(1);
numbersStack.push(2);
numbersStack.push(3);
numbersStack.push(4);
numbersStack.push(5);
// numbersStack.push(3) - will throw an error
console.log("is the stack full? - should be " + numbersStack.isFull());
numbersStack.pop();
console.log("is the stack full? - should no longer be " + numbersStack.isFull());
while (!numbersStack.isEmpty()) {
    let n = numbersStack.pop();
    console.log(`Pop ${n} from the stack. - is it empty yet ` + numbersStack.isEmpty());
}
const stringStack = new Stack(2);
stringStack.push("Hello");
stringStack.push("there");
while (!stringStack.isEmpty()) {
    let n = stringStack.pop();
    console.log(`Pop String ${n} from the stack. - is it empty yet ` + stringStack.isEmpty());
}
