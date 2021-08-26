const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });
  conn.setEncoding('utf8')

  conn.addListener('data', data => {
    console.log('Server says', data);
  })
  conn.on('connect', () => {
   conn.write('Name: ABC');
   conn.write('Move: up');
   setInterval(() => {conn.write('Move: down')}, 200); 
   setTimeout(() => {conn.write('Move: left');}, 400);
   setTimeout(() => {conn.write('Move: right');}, 600);
 });
  return conn;
};

module.exports = connect;


