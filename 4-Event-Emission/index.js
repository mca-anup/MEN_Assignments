const EventEmitter = require('events');

class Task extends EventEmitter {
  doWork() {
    console.log("Doing some work...");

    // Defer the event emission until after this function finishes
    process.nextTick(() => {
      this.emit('done');
    });
  }
}

// Create instance
const task = new Task();

// Attach listener BEFORE the event fires
task.on('done', () => {
  console.log("Work completed!");
});

// Start work
task.doWork();
