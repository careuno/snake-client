//In the input module, create a variable in the outer-most scope called connection, which can default to undefined.
// Stores the active TCP connection object.

//const connection = require("connection");

let connection; // should be in the outer-most scope so that it can be used by all functions in this module. https://web.compass.lighthouselabs.ca/days/w02d3/activities/881



// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);           //when data comes in from your keyboard the stdin event handler can interact with the server because of the scope of the handler now includes both data from keys and connection object. 
  stdin.setEncoding("utf8");
  stdin.resume();       
  stdin.on("data", handleUserInput); //has to happen before returning stdin object
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {      //https://web.compass.lighthouselabs.ca/days/w02d3/activities/881
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');  //OPTIONAL: https://web.compass.lighthouselabs.ca/days/w02d3/activities/883 turning more things into constants
  }
  if (key === 'e') {
    connection.write('Say: I\'ll eat you');
  }
  if (key === 'q') {
    connection.write('Say: CYA L8R');
  }
};


// In Client Setup, we returned a conn object from the connect function that allowed us to interact with the server.

//Similarly, the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.

module.exports = {
  setupInput,
};