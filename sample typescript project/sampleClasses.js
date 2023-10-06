"use strict";
class human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get capitalisedName() {
        return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
    }
}
class AUPerson extends human {
    constructor(taxFileNumber, firstName, lastName) {
        super(firstName, lastName);
        this.taxFileNumber = taxFileNumber;
        //this.firstName = firstName;
        //this.lastName = lastName;
        AUPerson.populationCount++;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getHomeLanguage() {
        return `English is probably the offical language - but we are mulit cultural`;
    }
    printTFN() {
        return `Tax File Number ${this.taxFileNumber}`;
    }
    describe() {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
    static getPopulationcount() {
        return AUPerson.populationCount;
    }
}
//public firstName: string;
//lastName: string;
AUPerson.populationCount = 0;
class AUEmployee extends AUPerson {
    constructor(taxFileNumber, firstName, lastName, jobTitle) {
        // call the constructor of the Person class:
        super(taxFileNumber, firstName, lastName);
        this.jobTitle = jobTitle;
    }
    // makes a call to the super class 
    describe() {
        return super.describe() + `My role is as a ${this.jobTitle}.`;
    }
}
console.log("we now have this many people " + AUPerson.getPopulationcount());
const auemployee = new AUEmployee('333333333', 'Rob', 'Allan', 'QA and Systems Web Developer');
console.log("we now have this many people " + AUPerson.getPopulationcount());
console.log(auemployee.getFullName());
console.log(auemployee.describe());
const auperson = new AUPerson('ABC_123_DEF', 'Roberto', 'Allan');
console.log("we now have this many people " + AUPerson.getPopulationcount());
console.log(auperson.getFullName());
console.log(auperson.printTFN());
console.log(auperson.getHomeLanguage());
// we can specify access modifiers - private / public / protected. They can go in the constructor.
class AUPersonAccessModified {
    constructor(ssn, firstName, lastName, birthDate) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getBirthMonth() {
        const formattedDate = this.birthDate.toLocaleString('en-AU'); // Australian (Australia) locale
        return formattedDate;
    }
}
const auAMPerson = new AUPersonAccessModified('ABC_123_DEF', 'Roberto', 'Allan', new Date(1990, 12, 25));
console.log(auAMPerson.getFullName());
console.log(auAMPerson.getBirthMonth());
