const fs = require('fs'); // Common JS
const path = require('path');
const reads = fs.createReadStream(
    path.join(__dirname, 'text.txt'),
    'utf-8',
  );
const { stdout } = require('process');
reads.on('data', chunk => {
    stdout.write(chunk);
  });