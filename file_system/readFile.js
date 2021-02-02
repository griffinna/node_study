const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if(err){
        throw err;
    }
    // readFile의 결과물을 버퍼 형식으로 제공
    console.log(data);              // <Buffer 52 45 41 44 4d 45 20 50 6c 7a 2e>
    console.log(data.toString());   // README Plz.
});