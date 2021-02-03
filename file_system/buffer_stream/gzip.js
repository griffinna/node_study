const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readme4.txt.gz');
// 버퍼 데이터가 전달되다가 gzip 압축을 거친 후 파일로 써진다.
readStream.pipe(zlibStream).pipe(writeStream);