function getRandomElement<T>(items: T[]): T {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

const setOfNumbers = [1, 5, 7, 4, 2, 9];
const randomEle = getRandomElement<number>(setOfNumbers);
console.log(randomEle);

/*
let returnElem: string;
returnElem = getRandomElement(setOfNumbers);
This will fail to compile - TS2322: Type 'number' is not assignable to type 'string'.
*/

const setOfStrings = ['A', 'B', 'C', 'D', 'E', 'F'];
const randomStringEle = getRandomElement<string>(setOfStrings);
console.log(randomStringEle);

// With multiple types

abstract class Animal{}

class Pet extends Animal{
    // Class properties
    name: string;
    age: number;

    // Constructor to initialize the properties
    constructor(name: string, age: number) {
        super()
        this.name = name;
        this.age = age;
    }

    // Method to override the toString 
    toString(): string {
        return `${this.name} who is ${this.age} years old is getting `;
    }
}

const pet1 = new Pet("Fido", 30);
const pet2 = new Pet("Rex", 32);
const pet3 = new Pet("Tiger", 33);

const setOfPets = [pet1, pet2, pet3];

abstract class FeedingTime{}

class Dinner extends FeedingTime{
    // Class properties
    nameOfDish: string;
    hot: boolean;

    // Constructor to initialize the properties
    constructor(nameOfDish: string, hot: boolean) {
        super();
        this.nameOfDish = nameOfDish;
        this.hot = hot;
    }

    // Method to override the toString 
    toString(): string {
        const servingtemperature: string = this.hot ? '- Served Hot' : '- Served Cold'
        return `${this.nameOfDish} ${servingtemperature}`;
    }
}

const dinner1 = new Dinner("DogFood", false);
const dinner2 = new Dinner("Sausages", true);
const dinner3 = new Dinner("Steak", true);

const setOfDinners = [dinner1, dinner2, dinner3];

function getRandomPetFeedingCycle<T extends Animal, U extends FeedingTime>(items1stSet: T[], items2ndSet: U[]): string {
    const randomIndex1stSet = Math.floor(Math.random() * items1stSet.length);
    const randomIndex2ndSet = Math.floor(Math.random() * items2ndSet.length);
    const from1stSet = items1stSet[randomIndex1stSet]
    const from2ndSet = items2ndSet[randomIndex2ndSet]
    return from1stSet.toString() + from2ndSet.toString();
}

const randomStringAboutFoodsAndPets = getRandomPetFeedingCycle<Animal, FeedingTime>(setOfPets,setOfDinners);
console.log(` Tonight's arrangements -  ${randomStringAboutFoodsAndPets}`)

// This will return the value of by key - if the key does not exist then it will not complie

// Define a simple object type
type Purchaser = {
    name: string;
    age: number;
    company: string;
  };
  
  // Create a function that accepts a generic type T constrained to keys of Person
  function getProperty<T extends keyof Purchaser>(obj: Purchaser, key: T): Purchaser[T] {
    return obj[key];
  }
  
  // Create an instance of the Person object
  const purchaser: Purchaser = {
    name: "Tommy",
    age: 20,
    company: "BCC Procurement",
  };
  
  // Access properties using getProperty function
  const purchaserName: string = getProperty(purchaser, "name"); // Valid
  const purchaserAge: number = getProperty(purchaser, "age"); // Valid
  const purchaserCompany: string = getProperty(purchaser, "company"); // Valid
  //const purchaserDiscount: string = getProperty(purchaser, "discount"); // Valid

  console.log(purchaserName + " " + purchaserAge + " " + purchaserCompany)

  // a generic class

  class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T | undefined {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}

const numbersStack = new Stack<number>(5);
//numbersStack.push('rabbit')
numbersStack.push(1)
numbersStack.push(2)
numbersStack.push(3)
numbersStack.push(4)
numbersStack.push(5)
// numbersStack.push(3) - will throw an error
console.log("is the stack full? - should be " + numbersStack.isFull())
numbersStack.pop()
console.log("is the stack full? - should no longer be " + numbersStack.isFull())

while (!numbersStack.isEmpty()) {
    let n = numbersStack.pop();
    console.log(`Pop ${n} from the stack. - is it empty yet ` + numbersStack.isEmpty());
}

const stringStack = new Stack<string>(2);
stringStack.push("Hello")
stringStack.push("there")
while (!stringStack.isEmpty()) {
    let n = stringStack.pop();
    console.log(`Pop String ${n} from the stack. - is it empty yet ` + stringStack.isEmpty());
}