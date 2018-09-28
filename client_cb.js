const request = require('request');
const sleep = require('sleep');

function send_request(url){
  return request(url, {timeout: 5000}, function (error, response, body) {
    if (error!==null){console.log('error:', error);} // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print user data
  });
}

const host = 'http://127.0.0.1:8888/'

var max = 50
for (let i = 0; i < max; i++){
  setTimeout(() => {
    console.log("HERE " + i);
    send_request(host+'data/'+i)
  }, 1) //use in debugging
