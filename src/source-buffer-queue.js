module.exports = SourceBufferQueue;

function SourceBufferQueue(sourceBuffer){
  this.queue = [];
  this.sourceBuffer = sourceBuffer;
}

SourceBufferQueue.prototype.push = function(segment){
  if (!this.sourceBuffer.updating && !this.queue.length) {
    this.sourceBuffer.appendBuffer(segment);
    return;
  }

  if (!this.queue.length) {
    this.sourceBuffer.addEventListener('updateend', this.handleUpdateEnd, false);
  }

  this.queue.push(segment);
};

SourceBufferQueue.prototype.handleUpdateEnd = function(){
  if (this.queue.length) {
    this.sourceBuffer.appendBuffer(this.queue.unshift());
  }

  if (!this.queue.length) {
    this.sourceBuffer.removeEventListener('updateend', this.handleUpdateEnd);
  }
};