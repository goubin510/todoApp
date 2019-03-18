const brain = require('brain.js')

var net = new brain.recurrent.LSTM();
 
net.train([
  { input: 'I feel great about the world!', output: 'happy' },
  { input: 'The world is a terrible place!', output: 'sad' },
]);
 
var output = net.run('Great !'); 

console.log(output)