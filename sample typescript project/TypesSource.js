"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aussie_Person = exports.visible_human = void 0;
class human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get capitalisedName() {
        return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
    }
}
exports.visible_human = human;
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
exports.Aussie_Person = AUPerson;
//public firstName: string;
//lastName: string;
AUPerson.populationCount = 0;
