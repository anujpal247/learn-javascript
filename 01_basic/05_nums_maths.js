// Number
const score = 200
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toFixed(2));    // return type String
// console.log(balance.toString());

const accountBalance = 1000000
// console.log(accountBalance.toLocaleString('en-IN'));

const interest = 1234.567
// console.log(interest.toPrecision(5));

// Maths

// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(4.6));

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10)+1);

const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1)) + min);