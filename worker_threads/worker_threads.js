const {
    Worker, isMainThread, parentPort
} = require('worker_threads');

if(isMainThread){   // 부모일때 (메인스레드 여부)
    const worker = new Worker(__filename);  // 현재 파일을 워커 스레드에서 실행시킴
    // 부모는 worker.on('message') 로 메시지를 받음
    worker.on('message', message => console.log('from worker: ', message));
    // parentPort.close() 를 하면 부모와의 연결이 종료되고, 그때 worker.on('exit') 실행
    worker.on('exit', () => console.log('worker exit!'));
    // 부모에서 워커 생성 후 .postMessage 로 워커에 데이터 전달 가능
    worker.postMessage('ping');
}else{
    // 워커는 parentPort.on('message') 이벤트 리스너로 부모로부터 메시지를 받음
    parentPort.on('message', (value) => {
        console.log('from parent: ', value);
        // parentPort.postMessage 로 부모에게 메시지를 보냄
        parentPort.postMessage('pong');
        // *** 워커에서 on 을 사용 할 때는 직접 워커를 종료 해야 함 ***
        // 부모와의 연결이 종료
        parentPort.close();
    });
}
// 메시지를 한번만 받고싶다면 once('message') 사용

/*
    from parent:  ping
    from worker:  pong
    worker exit!
*/