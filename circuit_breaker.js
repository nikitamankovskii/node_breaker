class CircuitBreaker{


	constructor(){
		const CircuitBreakerFactory = require( "@bennadel/circuit-breaker" ).CircuitBreakerFactory;
		const Client = require( "./client.js" );
		const client_circute = CircuitBreakerFactory.create({
			//add good config file
			requestTimeout: 3000,
			failureTheshold: 35,
			isFailure: function( error ) {
				return (! is404(error));
			}});
		this.client = new Client();
	}

//takes "function_name" with ", and all arguments for that function
	async send_request_cb(){
		var chain = Promise.resolve();
		var method_name = arguments[0];
		var args = Array.from(arguments);
	  args.shift();
		console.log(method_name);
		console.log(args);
		console.log(this.client)
		var data = await chain.then( () => {
				promise = this.client_circute
				// link to the function, that make request
				// its take: class name, "method name", url(ars)
					.executeMethod(this.client, method_name, args)
					.then(
						( result ) => {
							console.log( "[%s] ->\t   Success: %s", i, result );// for debug
							return result
						},
						( error ) => {
							console.log( "[%s] ->\t   Error: %s", i, error );
							return error;
						}
					);
				return (promise);
		});
	}
}
module.exports = CircuitBreaker;
