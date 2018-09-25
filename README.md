## Contain small server and client

[server.js](server.js) - server, that have few endpoints.

[client.js](client.js) - client, that sends some requests.

## Server

Server have command to sleep:

http://127.0.0.1:8888/sleep/{seconds} , where *seconds* is period in seconds to sleep.


Other URLs:
http://127.0.0.1:8888/data - show some data

http://127.0.0.1:8888/data/{id} - *id* of then data

http://127.0.0.1:8888/date - return current Date

## Installation

`npm install`

To run server: `node server.js`

To run client: `node client.js`
