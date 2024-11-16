const accountId = 112233
let accoundEmail = "hamza@gmail.com"
var accountPassword = "12345"
accounCity = "Gujranwala"

// accountId = 2 not allowed
accoundEmail = "ali@gmail.com"
accountPassword = "112233"
accounCity = "Gujrat"

/*
never use var
because of issues in block scoope and functional scope
*/

console.log(accountId);
console.table([accoundEmail, accountPassword, accounCity])
