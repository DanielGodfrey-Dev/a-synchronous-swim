const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  var commands = ['up', 'down', 'left', 'right'];
  var index = Math.floor(Math.random() * commands.length);
  // if (req.method === 'GET') {
  //   res.end(commands[index]);
  // } else {
  //   res.end();
  // }
  if (req.method === 'GET') {
    res.writeHead(200, headers);
    console.log(messageQueue.dequeue);
    res.end(messageQueue.dequeue);
  } else {
    res.end();
  }

  next(); // invoke next() at the end of a request to help with testing!
};
