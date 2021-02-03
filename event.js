const { resourceLimits } = require("worker_threads");

const EventEmitter = require('events');

const myEvent = new EventEmitter();
// .on 과 동일한 기능
myEvent.addListener('event1', () => {
    console.log('event1');
});
// .on(이벤트명, 콜백): 이벤트 이름과 이벤트 발생시의 콜백을 연결
// 이벤트 리스닝: 이벤트를 콜백과 연결하는 동작
myEvent.on('event2', () => {
    console.log('event2');
});
// 이벤트 하나에 여러 개를 달아줄 수도 있음
myEvent.on('event2', () => {
    console.log('add event2');
});
// .once(이벤트명, 콜백): 한 번만 실행되는 이벤트
myEvent.once('event3', () => {
    console.log('event3');
}); // 한번만 실행된

// .emit(이벤트명): 이벤트를 호출
myEvent.emit('event1'); // call event
myEvent.emit('event2'); // call event

myEvent.emit('event3'); // call event
myEvent.emit('event3'); // call event fail

myEvent.on('event4', () => {
    console.log('event4');
});
// .removeAllListeners(이벤트명): 이벤트에 연결된 모든 이벤트 리스너를 제거
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // call event fail

const listener = () => {
    console.log('event 5');
};
myEvent.on('event5', listener);
// .removeListener(이벤트명): 이벤트에 연결된 리스너를 하나씩 제거
// .off(이벤트명): 노드10 버전에 추가된 메서드, removeListener 와 동ㄱ일
myEvent.removeListener('event5', listener);
myEvent.emit('event5'); // call event fail

// .listenerCount(이벤트명): 리스너가 몇개 연결되어 있는지 확인
console.log(myEvent.listenerCount('event2'));