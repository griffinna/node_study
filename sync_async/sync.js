const fs = require('fs');

console.log('start!');
let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());
console.log('end!');
// readFileSync: 직접 return 값을 받아온다. (콜백함수 X)
// 동기 메서드는 수백 개 이상의 요청이 들어올 때 성능에 문제가 발생함
// 백그라운드가 작업하는 동안 메인 스레드는 아무것도 하지 못하고 대기하고 있어야 함
// 프로그램을 처음 실행할 때 초기화 용도로만 사용하는 것을 권장함