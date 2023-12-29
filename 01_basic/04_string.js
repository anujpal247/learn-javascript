const name = "Anuj Pal"
const marks = 60
//console.log(name + marks);    
console.log(`Hello, my name is ${name} and my marks is ${marks}.`);

const city = new String('Kanpur')
//console.log(city);
//console.log(city[0]);
//console.log(city.__proto__);
//console.log(city.length);
//console.log(city.charAt(2));
//console.log(city.indexOf('p'));

const newString = city.substring(0, 4)
console.log(newString);

// const anotherString = city.slice(0, 4)
// const anotherString = city.slice(-5, 3)
// console.log(anotherString);

// const state = "  Utter   Pradesh  "
// console.log(state);
// const str = state.trim()
// console.log(str);

const url = "https://localhost.com/anuj%20pal"
console.log(url.replace('%20', '-'));