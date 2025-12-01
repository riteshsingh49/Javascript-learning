const accountId=14521
let accountEmail="riteshsingh@gmail.com"
var accountPassword="12345"
accountCity="Ranchi"

let accountState;  //value not defined so it is considered undefined

// accountId=54    //not allowed

accountEmail="rs@gmail.com"
accountPassword="21212"
accountCity="Bokaro"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

