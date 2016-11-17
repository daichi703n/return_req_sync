var request = require('request');
var returnCode;

console.log("Start  Return Request Async");
returnCode = httpGet();
console.log("Status Code (main)     : "+returnCode);
console.log("End    Return Request Async");

function httpGet(){
  var options = {
    url: 'https://google.com/',
    method: 'GET',
    };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("Status Code (function) : "+response.statusCode);
      return response.statusCode;
    }
  });
}
