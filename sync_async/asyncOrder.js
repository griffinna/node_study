// 비동기 방식으로 하되 순서를 유지
// 콜백지옥..
const fs = require('fs');

console.log('start!');
fs.readFile('./readme2.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./readme2.txt', (err, data) => {
        if(err){
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./readme2.txt', (err, data) => {
            if(err){
                throw err;
            }
            console.log('3번', data.toString());
            console.log('end!');
        });
    });
});