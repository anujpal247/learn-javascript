// Date
let today = new Date()
console.log(typeof(today));     // object
console.log(today);     //2023-12-30T03:49:26.548Z

console.log(today.toDateString());      // Sat Dec 30 2023
console.log(today.toISOString());       //2023-12-30T03:55:12.700Z
console.log(today.toJSON());            //2023-12-30T03:56:01.181Z
console.log(today.toLocaleDateString());        //12/30/2023
console.log(today.toString());          // Sat Dec 30 2023 03:58:05 GMT+0000 (Coordinated Universal Time)


let createDate = new Date(2023, 0, 23)
console.log(createDate.toLocaleString());

let newDate = new Date()
// console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear())

const updatedDate = newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(updatedDate);