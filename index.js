const CircuitBreaker = require( "./circuit_breaker.js" );
const cb_name1 = new CircuitBreaker();
const host = 'http://127.0.0.1:8888/'
cb_name1.send_request_cb('send_request_async', `${host}data/1`)
