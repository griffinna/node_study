// 처리하지 못한 에러가 발생했을 때 이벤트 리스너가 실행되고 프로세스가 유지됨
// uncaughtException 은 최후의 수단으로 사용
process.on('uncaughtException', (err) => {
    console.error('예기치 못한 에러', err);
});

setInterval(() => {
    throw new Error('broken!!!');
}, 1000);

// uncaughtException 이벤트 리스너가 없으면 setTimeout 은 실행되지 않음
setTimeout(() => {
    console.log('execute!');
}, 2000);