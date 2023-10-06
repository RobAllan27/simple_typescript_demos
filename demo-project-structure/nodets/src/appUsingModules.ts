console.log('Node.js TypeScript');
console.log('Welcome to something that will use imports that have been exported from the source class.');

// Note the year validator is the default export - hence npt in brackets.
import YearValidator, { EmailValidator } from './Types';
import { PostCodeValidator as PostalCodeValidator} from './Types';
//import default_export from './Types'; does not seem to work to import the default export

let email = 'john.doe@typescripttutorial.net';
let emailValidator = new EmailValidator();
let emailValidationResult = emailValidator.isValid(email);
console.log(email + " as an email is valid " + emailValidationResult);
emailValidator.createPerson();

let postcode = '2222';
let postalCodeValidator = new PostalCodeValidator();
let postalcodeValidationResult = postalCodeValidator.isValid(postcode);
console.log(postcode + " as a postcode is valid " + postalcodeValidationResult);
postcode = '222';
postalcodeValidationResult = postalCodeValidator.isValid(postcode);
console.log(postcode + " as a postcode is valid " + postalcodeValidationResult);

let year = '23';
let yearValidator = new YearValidator();
let yearValidationResult = yearValidator.isValid(year);
console.log(year + " as a year is valid " + yearValidationResult);
year = '2023';
yearValidationResult = yearValidator.isValid(year);
console.log(year + " as a year is valid " + yearValidationResult);
year = '202';
yearValidationResult = yearValidator.isValid(year);
console.log(year + " as a year is valid " + yearValidationResult);