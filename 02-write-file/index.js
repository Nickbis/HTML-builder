const fs = require('fs'); // Common JS
const path = require('path');
const { stdout, stdin } = process;

process.on('exit', () => { stdout.write('Bye-Bye!') } );
process.on('SIGINT', () => { process.exit() });

fs.open( 
    path.join(__dirname, 'text.txt'), 'w',
    err => { if (err) throw err }
    );

stdout.write('Hello, write yoor text (for exit type: exit, or press ctrl^c):\n');

stdin.on('data', data => {
    const string = data.toString();
    if ( string.trim() === 'exit') {
        process.exit();
    } else {
        fs.appendFile(
            path.join(__dirname, 'text.txt'), string,
            err => {
                if (err) throw err;
            }
        );
    }
});