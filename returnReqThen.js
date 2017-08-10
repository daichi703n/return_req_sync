var request = require('then-request');
var returnCode;

console.log("Start  Return Request Sync");
returnCode = httpGet();
console.log("Status Code (main)     : "+returnCode);
console.log("End    Return Request Sync");

function httpGet(){
  //var response = request('GET', 'https://google.com/');
  request('GET', 'https://google.com/').done(function (response) {
    //console.log(response.statusCode);
    console.log("Status Code (function) : "+response.statusCode);
    //console.log(result.getBody('utf8'));
    return response.statusCode;
  });
}
