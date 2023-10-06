export type numberbools = number | boolean;
export type alphanumeric = string | number;

export {human as visible_human};
export {AUPerson as Aussie_Person};

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

interface Validator {
    isValid(s: string): boolean
}

export { Validator as StringValidator };
