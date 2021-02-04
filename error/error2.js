const { ifError } = require('assert');
const fs = require('fs');

setInterval(() => {
    // 노드 내장모듈의 에러는 실행중인 프로세스를 멈추지 않는다.
    fs.unlink('./abcdefg.js', (err) => {
        if(err){
            console.error(err);
            /*
               [Error: ENOENT: no such file or directory, unlink './abcdefg.js'] {
                    errno: -2,
                    code: 'ENOENT',
                    syscall: 'unlink',
                    path: './abcdefg.js'
                }
            */
        }
    });
}, 1000);