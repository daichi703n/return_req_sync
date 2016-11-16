var request = require('sync-request');
var returnCode;

console.log("Start  Return Request Sync");
returnCode = httpGet();
console.log("Status Code (main)     : "+returnCode)
console.log("End    Return Request Sync");

function httpGet(){
  var response = request(
    'GET',
    'https://google.com/'
    )
    if (response.statusCode == 200) {
      console.log("Status Code (function) : "+response.statusCode)
      return response.statusCode;
    }
}
