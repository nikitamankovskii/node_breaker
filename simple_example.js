var CircuitBreakerFactory = require( "@bennadel/circuit-breaker" ).CircuitBreakerFactory;
var client_cb = require( "./client_cb.js" );

num_of_packets=50

var client = new client_cb(num_of_packets);
var client_circute = CircuitBreakerFactory.create();
var chain = Promise.resolve();

const host = 'http://127.0.0.1:8888/'

for ( let i = 0 ; i < num_of_packets ; i++ ) {

	data = chain.then( () => {

			var promise = client_circute
				.executeMethod( client, "send_request", [host+'data/'+i] )
				.then(
					( result ) => {

						console.log( "[%s] -> Success: %s", i, result );
						return result
					},
					( error ) => {

						console.log( "[%s] -> Error: %s", i, error );

					}
				)
			;

		}
	);
	console.log('data :'+data)

}
