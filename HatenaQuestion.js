/*
Hi,
I'm trying your solution with this code:
*/

var request = require('sync-request');

var returnCode;

console.log("Start Return Request sync");
returnCode = getAuthKey();
console.log(returnedCode);


function getAuthKey(){
var reqdata = {"auth": {
"identity": {
"methods": ["password"],
"password": {
"user": {
"name": "<mydata>",
"domain": { "id": "default" },
"password": "<mydata>"
}
}
}
}};
request({
url: "<myIP>",
method: "POST",
header: {"Content-Type": "application/json"},
json: true,
body: reqdata
}, function(error, response, body){

if (response.statusCode == '201'){
console.log('if');
return response.headers['x-subject-token'];
}
});
}

/*
but I receive this error: 
Start Return Request sync
/Users/macbookpro/devs/shapeant/node_modules/sync-request/index.js:37
throw new Error(response.error.message || response.error || response);
^

Error: The method must be a string.
at doRequest (/Users/macbookpro/devs/shapeant/node_modules/sync-request/index.js:37:11)
at getAuthKey (/Users/macbookpro/devs/shapeant/auth.js:24:1)
at Object.<anonymous> (/Users/macbookpro/devs/shapeant/auth.js:7:14)
at Module._compile (module.js:573:32)
at Object.Module._extensions..js (module.js:582:10)
at Module.load (module.js:490:32)
at tryModuleLoad (module.js:449:12)
at Function.Module._load (module.js:441:3)
at Module.runMain (module.js:607:10)
at run (bootstrap_node.js:382:7)
*/
