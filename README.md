## Contain small server and client

[server.js](server.js) - server, that have few APIs.

[client.js](client.js) - client, that sends some requests.

[circuit_breaker_async.js](circuit_breaker_async.js) - use client to send messages to server

[circuit_breaker_sync.js](circuit_breaker_sync.js) - use client to send messages to server

## Server

Server have command to sleep:

http://127.0.0.1:8888/data - show some data

http://127.0.0.1:8888/data/{id} - *id* of then data

http://127.0.0.1:8888/date - return current Date

## Installation

`npm install`

To run server: `node server.js`

To run client: `node client.js`
