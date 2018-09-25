const http = require('http');

function send_reqest(url){
  http.get(url,(res) =>{
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log(data);
    });
    return data;
  });
}

const host = 'http://127.0.0.1:8888/'
console.log(send_reqest(host+'data'))
console.log(send_reqest(host+'sleep/5'))
console.log(send_reqest(host+'data'))
