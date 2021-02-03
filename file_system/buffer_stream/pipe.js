const fs = require('fs');

const readstream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readstream.pipe(writeStream);