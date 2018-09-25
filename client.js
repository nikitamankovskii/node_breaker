const http = require('http');

function send_request(url){
  http.get(url,(res) =>{
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log(data);
    });
    return data;
    // added the listener on errors, you could have a problem to reach the server itself, you want to know about it. 
    // Will save you time during debugging
  }).on('error', (err) => {
    console.error("Error: "+ err.message);
  });
}

const host = 'http://127.0.0.1:8888/'
console.log(send_request(host+'data'))
console.log(send_request(host+'sleep/5'))
console.log(send_request(host+'data'))
