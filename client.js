const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
 
  conn.on('connect', (socket) => {
    conn.write('Name: BOB')
    // conn.write('Move: up')
    // setInterval(() => {
    //   conn.write('Move: up')
    // }, 50)

    console.log("you've connected to the server")
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

//console.log("Connecting ..."); 
//connect();//called in play.js, if you have both you make two snakes LOL

module.exports = {
  connect,
};