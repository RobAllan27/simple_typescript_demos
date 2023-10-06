
import { Aussie_Person, numberbools, visible_human } from './TypesSource';
import { alphanumeric, StringValidator } from './TypesSource';

class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }

    createPerson(): void {
        const myInstance = new Aussie_Person("123456789", "Rob", "Allan");
        console.log(myInstance.getFullName());
    }
}

class PostCodeValidator implements StringValidator {
    isValid(s: string): boolean {
        const numberRegexp = /^[0-9]+$/;
        return s.length === 4 && numberRegexp.test(s);
    }
}

// we can have a single default validator - here a year as 2 or 4 chars
export default class YearValidator implements StringValidator {
    isValid(s: string): boolean {
        const numberRegexp = /^[0-9]+$/;
        return (s.length === 4 || s.length === 2) && numberRegexp.test(s);
    }
}

export { PostCodeValidator};
export { EmailValidator };




