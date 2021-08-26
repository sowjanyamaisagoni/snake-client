const  connect  = require('./client');
   const setupInput = function() {
   const stdin = process.stdin;
   stdin.on('data', (key) => {
      handleUserInput(key);
    });
   stdin.setRawMode(true);
   stdin.setEncoding('utf8');
   stdin.resume();
   stdin.on('data', (key) => {
     handleUserInput(key);
   });
 return stdin;
 };
 
 const handleUserInput = function(key) {
   // \u0003 maps to ctrl+c input
 
   if (key === '\u0003') {
     process.exit();
   }
 
 };
 console.log('Connecting ... ');
 
 setupInput();
 connect(); 
 
 