setImmediate(() => {
    console.log('immediate');
});

// process.nextTick (콜백): 이벤트 루프가 다른 콜백 함수들보다 nextTick 의 콜백 함수를 우선으로 처리하도록 만든다.
process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('promise'));

/**
 *  node nextTick    
    nextTick
    promise
    timeout
    immediate
 */

 /**
  * 마이크로태스크 (microtask)
  * - process.nextTick
  * - Promise
  * 
  */