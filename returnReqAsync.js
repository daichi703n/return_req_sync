console.log("Return Request Async");

var request = require('request');

//オプションを定義
var options = {
  url: 'https://hoge.com/api/v2/fuga',
  method: 'GET',
}

request(options, function (error, response, body) {
if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})


