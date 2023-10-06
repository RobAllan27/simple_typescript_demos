"use strict";
// Control Flow statements - examples
// Control Flow statements - examples
// if else
// eslint-disable-next-line no-undef
const max = 100;
let counter = 100;
if (counter < max) {
    console.log(counter);
    counter++;
}
else {
    counter = 1;
}
console.log(counter);
let counter2 = 0;
counter2 < max ? counter2++ : counter2 = 1;
// Case statement with code in the loop
let month = 2, year = 2020;
let day = 0;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2:
        // leap year
        if (((year % 4 == 0) &&
            !(year % 100 == 0))
            || (year % 400 == 0))
            day = 29;
        else
            day = 28;
        break;
    default:
        throw Error('Invalid month');
}
console.log(`The month ${month} in ${year} has ${day} days`);
// for loops - nesetd loop
for (let i = 0; i < 10; i++) {
    //console.log(i);
    for (let j = 0; j < 10; j++) {
        console.log(i + " --- " + j);
    }
}
let whilecounter = 0;
while (whilecounter < 5) {
    console.log('whilecounter --- ' + whilecounter);
    whilecounter++;
}
let dowhilecounter = 0;
do {
    console.log('dowhilecounter --- ' + dowhilecounter);
    dowhilecounter++;
} while (dowhilecounter < 8);
// Example using break
for (let i = 1; i <= 5; i++) {
    if (i === 4) {
        console.log("Breaking the loop at i = 3");
        break; // This will exit the loop when i equals 3
    }
    console.log(`Aboutto break Current value of i: ${i}`);
}
// Example using continue
for (let j = 1; j <= 5; j++) {
    if (j === 2 || j === 4) {
        console.log(`Skipping iteration at j = ${j}`);
        continue; // This will skip the current iteration when j equals 2 or 4
    }
    console.log(`Doing some skips with a continue  - Current value of j: ${j}`);
}
