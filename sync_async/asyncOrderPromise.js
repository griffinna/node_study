// Promise 나 async/await 로 콜백지옥 어느 정도 해결하기
const fs = require('fs').promises;

console.log('start!');
fs.readFile('./readme2.txt')
    .then((data) => {
        console.log('1번', data.toString());
        return fs.readFile('./readme2.txt');
    })
    .then((data) => {
        console.log('2번', data.toString());
        return fs.readFile('./readme2.txt');
    })
    .then((data) => {
        console.log('3번', data.toString());
        console.log('end!');
    })
    .catch((err) => {
        console.error(err);
    })