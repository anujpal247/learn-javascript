let score = "123"

console.log(typeof score);

let value = Number(score)    // string to number conversion
console.log(value, typeof(value));

// "123" -> 123
// "123abc" -> NaN
// "" -> false
// "abc" -> true
