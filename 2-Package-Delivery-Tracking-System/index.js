const EventEmitter = require('events');

class PackageTracker extends EventEmitter {
  constructor(packageId, destination) {
    super();
    this.packageId = packageId;
    this.destination = destination;
  }

  startTracking() {
    // Dispatched immediately
    this.emit('dispatched', this.packageId, this.destination);

    // In-Transit after short delay
    setTimeout(() => {
      this.emit('inTransit', this.packageId);
    }, 2000);

    // Simulate a possible delay event
    setTimeout(() => {
      this.emit('delayed', this.packageId, 'Weather conditions');
    }, 3000);

    // Delivered after longer delay
    setTimeout(() => {
      this.emit('delivered', this.packageId, this.destination);
    }, 6000);
  }
}

// Create tracker instance
const tracker = new PackageTracker(123, 'Pune');

// Register listeners
tracker.on('dispatched', (id, destination) => {
  console.log(`Package #${id} dispatched to ${destination}`);
});

tracker.on('inTransit', (id) => {
  console.log(`Package #${id} is in transit...`);
});

tracker.on('delayed', (id, reason) => {
  console.log(`Package #${id} delayed due to ${reason}`);
});

tracker.on('delivered', (id, destination) => {
  console.log(`Package #${id} delivered to ${destination}`);
});

// Start tracking
tracker.startTracking();
