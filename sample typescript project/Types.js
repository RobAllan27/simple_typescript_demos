"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidator = exports.PostCodeValidator = void 0;
const TypesSource_1 = require("./TypesSource");
class EmailValidator {
    isValid(s) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
    createPerson() {
        const myInstance = new TypesSource_1.Aussie_Person("123456789", "Rob", "Allan");
        console.log(myInstance.getFullName());
    }
}
exports.EmailValidator = EmailValidator;
class PostCodeValidator {
    isValid(s) {
        const numberRegexp = /^[0-9]+$/;
        return s.length === 4 && numberRegexp.test(s);
    }
}
exports.PostCodeValidator = PostCodeValidator;
// we can have a single default validator - here a year as 2 or 4 chars
class YearValidator {
    isValid(s) {
        const numberRegexp = /^[0-9]+$/;
        return (s.length === 4 || s.length === 2) && numberRegexp.test(s);
    }
}
exports.default = YearValidator;
