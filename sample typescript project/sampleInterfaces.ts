
1// it can be used to describe a functions and the arguments - here a student implememts Student
interface Student {
    firstName: string;
    lastName: string;
}

function getFullName(student: Student) {
    return `${student.firstName} ${student.lastName}`;
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(john));

// to define a funtion - its arguments and rrutn type.

function reverseString(inputString: string): string {
    // Convert the string to an array of characters, reverse it, and then join it back into a string
    return inputString.split('').reverse().join('');
  }

interface StringReverser {
    (str: string, returnReversed: boolean): string
}

let formatString: StringReverser;

formatString = function (str: string, returnReversed : boolean) {
    return returnReversed ? reverseString(str) : str;
};

console.log(formatString('hello', true))
console.log(formatString('hello_not_reversed', false))

// to define a method (or mthods) that a class should fulfill.

interface Json {
    toJSON(): string
 }

class Teacher implements Json {
    constructor(private firstName: string,
        private lastName: string) {
    }
    toJSON(): string {
        return JSON.stringify(this);
    }
}

const teacher = new Teacher('Roberto','Allan')
//console.log(teacher.toJSON())

interface Ainterface {
    Amethod(): void
}

interface Binterface {
    Bmethod(): void
    Amethod(): void
}

interface Cinterface {
    Cmethod(): void
}

interface Dinterface extends Ainterface, Binterface, Cinterface{
    Dmethod(): void
}

interface HumanBeing {
    firstname: string;
    lastname: string;
	dateOfBirth: Date;
}

interface Employment {
    id: number;
    department: string;
}

interface Contact {
    email: string;
    phone: string;
}


type Employee = HumanBeing & Employment & Contact
type Customer = HumanBeing & Contact

const myEmployee: Employee = {
    firstname: 'Rob',
    lastname: 'Person',
    dateOfBirth: new Date(1990, 4, 15),
    id: 42787,
    department: 'Engieering',
    email: 'rob.person@nowhere.com',
    phone: '0487123456'
};
console.log(myEmployee);

const myCustomer: Customer = {
    firstname: 'RobCust',
    lastname: 'PersonCust',
    dateOfBirth: new Date(1990, 4, 15),
    email: 'rob.cust@nowhere.com',
    phone: '0487123456-cust'
};
console.log(myCustomer);