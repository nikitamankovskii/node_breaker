const request = require('request');
const Promise = require('promise');

function send_request(url){

   request(url, function (error, response, body) {
      if (error!== null){
        console.log('error:', error);
      }
      else {
        console.log('Request number : '+body);
        return body;
      }
    });

};

const host = 'http://127.0.0.1:8888/'
var max = 50
let index = ''
for (let i = 0; i < max; i++){
  if (i%5===0){
    index = send_request(host+'sleep/3');
    console.log( 'Request number ' + i + ': ' + index )}// this muast wait upper line
  else {
    index = send_request(host+'data/'+i)
    console.log( 'Request number ' + i + ': ' + index)};
}
