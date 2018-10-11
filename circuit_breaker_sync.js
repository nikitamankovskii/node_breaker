var CircuitBreakerFactory = require( "@bennadel/circuit-breaker" ).CircuitBreakerFactory;
var client = require( "./client.js" );

num_of_packets=50

var client = new client(num_of_packets);
var client_circute = CircuitBreakerFactory.create({
	requestTimeout: 3000,
	failureTheshold: 35,
	isFailure: function( error ) {
		return (! is404(error));
	}});

var chain = Promise.resolve();

const host = 'http://127.0.0.1:8888/'
loop();
async function loop(){
  for ( let i = 0 ; i < num_of_packets ; i++ ) {
		console.log("loop "+i)
		let data = await senddata(i);}
}
async function senddata(i){
	let	data = await client_circute
				.executeMethod( client, "send_request_async", [`${host}data/${i}`] )
				.then(
					( result ) => {

						console.log( "[%s] ->\t   Success: %s", i, result );
						return result
					},
					( error ) => {

						console.log( "[%s] ->\t   Error: %s", i, error );

					}
				)
			;
		return data;
		}
