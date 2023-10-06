"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Node.js TypeScript');
console.log('Welcome to something that will use imports that have been exported from the source class.');
// Note the year validator is the default export - hence npt in brackets.
const Types_1 = __importStar(require("./Types"));
const Types_2 = require("./Types");
//import default_export from './Types'; does not seem to work to import the default export
let email = 'john.doe@typescripttutorial.net';
let emailValidator = new Types_1.EmailValidator();
let emailValidationResult = emailValidator.isValid(email);
console.log(email + " as an email is valid " + emailValidationResult);
emailValidator.createPerson();
let postcode = '2222';
let postalCodeValidator = new Types_2.PostCodeValidator();
let postalcodeValidationResult = postalCodeValidator.isValid(postcode);
console.log(postcode + " as a postcode is valid " + postalcodeValidationResult);
postcode = '222';
postalcodeValidationResult = postalCodeValidator.isValid(postcode);
console.log(postcode + " as a postcode is valid " + postalcodeValidationResult);
let year = '23';
let yearValidator = new Types_1.default();
let yearValidationResult = yearValidator.isValid(year);
console.log(year + " as a year is valid " + yearValidationResult);
year = '2023';
yearValidationResult = yearValidator.isValid(year);
console.log(year + " as a year is valid " + yearValidationResult);
year = '202';
yearValidationResult = yearValidator.isValid(year);
console.log(year + " as a year is valid " + yearValidationResult);
