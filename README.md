# RC Assessment

## Prerequisite

Make to have Redis installed in your machine

## Service A

It is a NestJS application that'll act as a client which would mainly uses Redis as the transport
for microservice communication.

### Installation

Install the dependencies by entering the following command in the CLI

> $ npm install

Run the backend server

> $ npm start

The app runs on Port 3001

### APIs

- GET /double/:num - API to send a command to Service B to receive double of a number
- POST /double - API to create a number resource
- PUT /double/:num - API to update a number resource
- DELETE /double/:num - API to delete a number resource

## Service B

It is a NestJS application that'll act as a hybrid application which exposes a microservice function and also a set of REST APIs

### Installation

Install the dependencies by entering the following command in the CLI

> $ npm install

Run the backend server

> $ npm start

The Microservice runs on Redis Server and the exposed REST app runs on Port 4001

### APIs

- pattern "double" - Exposed microservice function to get double of a number
- GET /square/:num - API to get square of a number
- POST /square - API to create a number resource
- PUT /square/:num - API to update a number resource
- DELETE /square/:num - API to delete a number resource
