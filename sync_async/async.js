const fs = require('fs');

console.log('start!');
fs.readFile('./readme2.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('end!');
/* 실행할 때 마다 순서가 달라질 수 있음
    start!
    end!
    2번 여러번 읽어보세요.
    3번 여러번 읽어보세요.
    1번 여러번 읽어보세요.
*/

// 비동기 메서드들은 백그라운드에 해당 파일을 읽으라고만 요청하고 다음 작업으로 넘어감
// 1. 파일 읽기 요청 3번 보냄
// 2. console.log('end') 로깅
// 3. 읽기가 완료되면 백그라운드가 다시 메인 스레드에 알림
// 4. 메인 스레드는 그제서야 등록된 콜백 함수를 실행

/** 동기와 비동기, 블로킹과 논 블로킹
 * 1. 동기 & 비동기: 백그라운드 작업 완료 확인 여부
 * 2. 블로킹 & 논 블로킹: 함수가 바로 return 되는지 여부
 * 
 * 노드에서는 동기-블로킹 방식과 비동기-논 블로킹 방식이 대부분임
 * 1. 동기-블로킹 (다른 일을 못하고 대기)
 *  : 백그라운드 작업완료여부를 계속 확인,
 *    호출한 함수가 바로 return되지 않고 백그라운드 작업이 끝나야 return 됨
 * 2. 비동기-논 블로킹 (다른 일 수행 가능)
 *  : 호출한 함수가 바로 return 되어 다음작업으로 넘어가며
 *    백그라운드 작업 완료 여부는 신경쓰지않고 나중에 백그라운드가 알림을 줄 때 비로소 처리
 * 
 */