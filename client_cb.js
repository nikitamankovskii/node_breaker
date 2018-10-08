class client_cb{

  constructor(num_of_packets){
    const request = require('request');
    console.log("constructor defined "+num_of_packets);
  }

   async send_request(url){
    const request = require('request');
    var response = await request(url, {timeout: 5000}, function (error, response, body) {
      if (error!==null){
        console.log('time out - '+url);
        return 0
      } // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body);
      return body; // Print user data
    })
    return response;
  }


    main(){
    const host = 'http://127.0.0.1:8888/'

    var max = 50
    for (let i = 0; i < max; i++){
      setTimeout(() => {
        //console.log("HERE " + i);
        console.log('from main '+this.send_request(host+'data/'+i))
      }, 1)} //use in debugging
  }
}
module.exports = client_cb;
//let client = new client_cb(50);
//client.main();
