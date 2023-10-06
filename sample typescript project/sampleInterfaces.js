"use strict";
1; // it can be used to describe a functions and the arguments - here a student implememts Student
function getFullName(student) {
    return `${student.firstName} ${student.lastName}`;
}
let john = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(john));
// to define a funtion - its arguments and rrutn type.
function reverseString(inputString) {
    // Convert the string to an array of characters, reverse it, and then join it back into a string
    return inputString.split('').reverse().join('');
}
let formatString;
formatString = function (str, returnReversed) {
    return returnReversed ? reverseString(str) : str;
};
console.log(formatString('hello', true));
console.log(formatString('hello_not_reversed', false));
class Teacher {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    toJSON() {
        return JSON.stringify(this);
    }
}
const teacher = new Teacher('Roberto', 'Allan');
const myEmployee = {
    firstname: 'Rob',
    lastname: 'Person',
    dateOfBirth: new Date(1990, 4, 15),
    id: 42787,
    department: 'Engieering',
    email: 'rob.person@nowhere.com',
    phone: '0487123456'
};
console.log(myEmployee);
const myCustomer = {
    firstname: 'RobCust',
    lastname: 'PersonCust',
    dateOfBirth: new Date(1990, 4, 15),
    email: 'rob.cust@nowhere.com',
    phone: '0487123456-cust'
};
console.log(myCustomer);
