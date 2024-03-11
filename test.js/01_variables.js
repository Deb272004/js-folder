const accountId = 144553
let accountEmail = "deblina.gupta@gamil.com"
var accountPassword = " 200427"
accountCity = " jaipur"
let accountstate;  // not defined or undefined

// accountId = 2  // not allowed

accountEmail = " deb.lina@gamil.com"
accountPassword = "3456"
accountCity = " bangaluru"

console.log(accountId);


/*
prefer not to use var  
because of issue in bloack scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountstate])