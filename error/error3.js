const fs = require('fs').promises;

setInterval(() => {
    fs.unlink('./adcdefg.js');
}, 1000);
/*  프로미스의 에러는 catch 하지 않아도 알아서 처리함. 
    다만 노드 버전이 올라감에 따라 바뀔 수 있기때문에 catch 를 붙여주는 것을 권장함
    (node:87032) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, unlink './adcdefg.js'
    (node:87032) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
*/