class client {

  constructor() {
    const fetch = require('node-fetch');
    const num_of_packets = 50;
    const host = 'http://127.0.0.1:8888/';
  }


  async send_request_async(url){
    try{
      const fetch = require('node-fetch');
      //console.log('before fetch '+url)
      let resp = await fetch(url);
      //console.log('after fetch')
      let data = await resp.json();
      //console.log(data)
      //console.log('after json')
      return JSON.stringify(data);

    } catch(error){
        throw new Error ('unable to get data :'+error);
    }
  }


  async main(){
    console.log('in main')
    for (let i=0; i<this.num_of_packets; i++){
        var response = this.send_request_async(`${host}data/${i}`)
          .then(response => console.log(response));
    }
  }
}

module.exports = client;
