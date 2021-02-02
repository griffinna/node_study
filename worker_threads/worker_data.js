const {
    Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

if(isMainThread){   // 부모일 떄
    const threads = new Set();
    threads.add(new Worker(__filename, {
        // new Worker 를 호출 할 때, workerData 속성으로 원하는 데이터를 전달 가능
        workerData: {start: 1},
    }));
    threads.add(new Worker(__filename, {
        workerData: {start: 2},
    }));
    for(let worker of threads){
        worker.on('message', message => console.log('from worker: ', message));
        // 워커가 종료되면 worker.on('exit') 수행
        worker.on('exit', () => {
            threads.delete(worker);
            if(threads.size == 0){
                console.log('job done');
            }
        });
    }
} else {    // 워커일 떄
    const data = workerData;
    // 워커에서 부모로 데이터를 돌려주는 순간 워커 종료
    parentPort.postMessage(data.start + 100);
}

/*
    from worker:  101
    from worker:  102
    job done
*/