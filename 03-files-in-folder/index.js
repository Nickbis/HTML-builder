const fs = require('fs'); // Common JS
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');

(async function listFiles() {
    const files = await fs.promises.readdir (folderPath);
    for (let i = 0; i < files.length; i++ ) {
        const fileStats = await fs.promises.stat(
            path.join(folderPath, files[i])
        );

        if (!fileStats.isDirectory()) {
            const dotIndex = files[i].indexOf('.');
            const fileName = files[i].slice(0, dotIndex);
            const fileExtension = files[i].slice(dotIndex +1);
            const fileSize = (fileStats.size / 1024).toFixed(3);
            console.log(`${fileName} - ${fileExtension} - ${fileSize}kb`);
        }
    }

})();