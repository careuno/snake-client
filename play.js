/*

Client setup: 

https://web.compass.lighthouselabs.ca/days/w02d3/activities/875

The client you build today will connect to a game server that is run by Lighthouse. 
The server holds all the logic for the rules of the game and also draws the game board. 
You can see the game board on a live video stream and eventually you will see you and your classmates' snakes on it!

IP: 165.227.47.243
PORT: 50541


Consider what is happening in the code that you wrote so far:

• You used Node's net library (specifically, the createConnection function) to create an object named conn in the code above.
• The conn object that Node returned to you represents the connection that you have with the server.
• The conn object is full of useful methods and properties that can now be used to interact with the server.

Handle Messages From Server -- You will use the CONN OBJECT to handle messages from the server.
EVENTS - when you connect to server, close connection, or send data, must LISTEN to event to react.
EVENT HANDLER - code that defines what to do when an event occurs

.ON method lets you specify an event name and a function that does something when that event happens. */

// conn.on("event name", functionThatDoesSomething); /*

// OR ... this is more commmon to use an anonymous function */

// conn.on("event name", () => {       //"event name" IS A SPECIFIC EVENT DEFINED BY NODE eg. connect 
//                                     //https://nodejs.org/api/net.html#net_class_net_socket
//   // code that does something       // connect is an event that happens when a succesful connection is made
// });
//                                     net.Server events                  
//                                     Event: 'close'
//                                     Event: 'connection'
//                                     Event: 'error'
//                                     Event: 'listening'

//                                     net.Socket events    
                                      // Event: 'close'
                                      // Event: 'connect'
                                      // Event: 'data'
                                      // Event: 'drain'
                                      // Event: 'end'
                                      // Event: 'error'
                                      // Event: 'lookup'
                                      // Event: 'ready'
                                      // Event: 'timeout'



const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();