var request = require('sync-request');
var returnCode;

console.log("Start Return Request sync");
returnCode = getAuthKey();
//console.log(returnedCode);  // returnedCode does not exist
console.log(returnCode);

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

var myIP = "http://8.8.8.8";
var response = request(
  "POST",
  myIP,{
//  header: {"Content-Type": "application/json"},
  json: reqdata});
//  } , function(error, response, body){

  if (response.statusCode == '201'){
    console.log('if');
    return response.headers['x-subject-token'];
//  }
//});
}}
