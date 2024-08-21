// Import the events module
const EventEmitter = require('events');

// Create an event emitter instance
const myEmitter = new EventEmitter();

// Create an event listener
myEmitter.on('event', () => {
    console.log('An event occurred!');
});

// Emit the event
myEmitter.emit('event');

// Create a custom event listener with arguments
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the custom event with arguments
myEmitter.emit('greet', 'World');
