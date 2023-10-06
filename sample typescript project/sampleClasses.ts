abstract class human {
    constructor(protected firstName: string, protected lastName: string) {
    }
    abstract getHomeLanguage(): string
    get capitalisedName(): string {
        return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
    }
}


class AUPerson extends human{
    protected taxFileNumber: string;
    //public firstName: string;
    //lastName: string;
    private static populationCount: number = 0;

    constructor(taxFileNumber: string, firstName: string, lastName: string) {
        super(firstName, lastName)
        this.taxFileNumber = taxFileNumber;
        
        //this.firstName = firstName;
        //this.lastName = lastName;
        AUPerson.populationCount++;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getHomeLanguage(): string {
        return `English is probably the offical language - but we are mulit cultural`;
    }

    printTFN(): string {
        return `Tax File Number ${this.taxFileNumber}`;
    }

    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }

    public static getPopulationcount() {
        return AUPerson.populationCount;
    }
}

class AUEmployee extends AUPerson {
    constructor(
        taxFileNumber: string,
        firstName: string,
        lastName: string,
        private jobTitle: string) {
        
        // call the constructor of the Person class:
        super(taxFileNumber, firstName, lastName);
    }

    // makes a call to the super class 
    describe(): string {
        return super.describe() + `My role is as a ${this.jobTitle}.`;
    }
}

console.log("we now have this many people " + AUPerson.getPopulationcount())
const auemployee = new AUEmployee('333333333','Rob', 'Allan', 'QA and Systems Web Developer');
console.log("we now have this many people " + AUPerson.getPopulationcount())


console.log(auemployee.getFullName());
console.log(auemployee.describe());


const auperson = new AUPerson('ABC_123_DEF','Roberto','Allan');
console.log("we now have this many people " + AUPerson.getPopulationcount())

console.log(auperson.getFullName());
console.log(auperson.printTFN());
console.log(auperson.getHomeLanguage());

// we can specify access modifiers - private / public / protected. They can go in the constructor.
class AUPersonAccessModified {
    private readonly birthDate: Date;
    
    constructor(protected ssn: string, private firstName: string, private lastName: string, birthDate: Date) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getBirthMonth(): string {
        const formattedDate = this.birthDate.toLocaleString('en-AU'); // Australian (Australia) locale
        return formattedDate;
    }
}

const auAMPerson = new AUPersonAccessModified('ABC_123_DEF','Roberto','Allan', new Date(1990, 12, 25) );
console.log(auAMPerson.getFullName());
console.log(auAMPerson.getBirthMonth());
