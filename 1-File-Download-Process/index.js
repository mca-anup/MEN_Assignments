const EventEmitter = require('events');

class Downloader extends EventEmitter {
  startDownload() {
    // Emit start event
    this.emit('start');

    let progress = 0;
    const interval = setInterval(() => {
      progress += 25;
      this.emit('progress', progress);

      if (progress === 100) {
        clearInterval(interval);
        this.emit('end');
      }
    }, 2000); // simulate progress every second
  }
}

// Create instance
const downloader = new Downloader();

// Register listeners
downloader.on('start', () => {
  console.log('Download started...');
});

downloader.on('progress', (percent) => {
  console.log(`Download progress: ${percent}%`);
});

downloader.on('end', () => {
  console.log('Download completed!');
});

// Trigger download
downloader.startDownload();
