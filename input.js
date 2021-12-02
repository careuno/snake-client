
// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //has to happen before returning stdin object
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};


// In Client Setup, we returned a conn object from the connect function that allowed us to interact with the server.

//Similarly, the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.

module.exports = {
  setupInput,
};