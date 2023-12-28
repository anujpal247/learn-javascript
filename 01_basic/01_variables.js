const accountId = 12345
let accountName = "Anuj"
var accountEmail = "anuj123@gmail.com"
accountCity = "Kanpur"
let accountState


//accountId = 23456     // can not update bcoz accountId is const
console.log(accountId)

/*
prefer not use var because 
it has issue with block scope and functional scope.
*/

accountName = "Raju"
accountEmail = "raju123@gmail.com"
accountCity = "Delhi"

console.table([accountId, accountName, accountEmail, accountCity, accountState])