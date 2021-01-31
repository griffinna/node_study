// os 모듈은 주로 컴퓨터 내부 자원에 빈번하게 접근하는 경우 사용
const os = require('os');

console.log('운영체제 정보 --------------');
console.log('os.arch(): ', os.arch());
console.log('os.platform(): ', os.platform());
console.log('os.type(): ', os.type());
console.log('os.uptime(): ', os.uptime());
console.log('os.hostname(): ', os.hostname());
console.log('os.release(): ', os.release());

console.log('경로 ---------------------');
console.log('os.homedir(): ', os.homedir());
console.log('os.tmpdir(): ', os.tmpdir());

console.log('cpu 정보 ---------------------');
console.log('os.cpus(): ', os.cpus());
console.log('os.cpus().length: ', os.cpus().length);

console.log('메모리 정보 ---------------------');
console.log('os.freemem(): ', os.freemem());
console.log('os.totalmem(): ', os.totalmem());

// os.constants: 각종 에러와 신호에 대한 정보가 담겨있음
// 에러가 발생했을 때, EADDRINUSE, ECONNRESET 같은 에러 코드를 함께 보여줌