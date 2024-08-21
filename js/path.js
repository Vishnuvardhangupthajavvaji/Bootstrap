// Import the path module
const path = require('path');

// Join multiple path segments into one
const joinedPath = path.join('/users', 'CSE', 'Desktop/js', 'server', '..');
console.log('Joined Path:', joinedPath);

// Resolve a sequence of paths into an absolute path
const resolvedPath = path.resolve('server.js');
console.log('Resolved Path:', resolvedPath);

// Get the directory name of a path
console.log('Directory Name:', path.dirname(resolvedPath));

// Get the base name of a path
console.log('Base Name:', path.basename(resolvedPath));

// Get the file extension of a path
console.log('File Extension:', path.extname(resolvedPath));
