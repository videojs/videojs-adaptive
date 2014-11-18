module.exports = function(window){
  var adaptive = {};
  
  adaptive.SourceBufferQueue = require('./src/source-buffer-queue.js');

  return adaptive;
};