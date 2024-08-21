// Import the os module
const os = require('os');

// Get the system's architecture
console.log('Architecture:', os.arch());

// Get the number of CPUs
console.log('Number of CPUs:', os.cpus().length);

// Get the system's uptime in seconds
console.log('System Uptime:', os.uptime(), 'seconds');

// Get the free memory
console.log('Free Memory:', os.freemem());

// Get the total memory
console.log('Total Memory:', os.totalmem());
