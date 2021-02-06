// cluster: 싱글 프로세스로 동작하는 노드가 CPU 코어를 모두 사용할 수 있게 해주는 모듈
// 포트를 공유하는 노드 프로세스를 여러 개 둘 수도 있으므로, 요청이 많이 들어왔을때 병렬로 실행된 서버의 개수만큼 요청이 분산
// 장점: 성능 개선
// 단점: 메모리 공유 불가 (ex. 세션을 메모리에 저장하는 경우)

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

// 마스터 프로세스: CPU 개수만큼 워커 프로세스를 만들도 8086 번 포트에서 대기
if(cluster.isMaster) {
    console.log(`마스터 프로세스 아이디: ${process.pid}`);
    // CPU 개수만큼 워커를 생산
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // 워커가 종료되었을 때
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid} 번 워커가 종료되었습니다.`);
        console.log('code', code, 'signal', signal);
    });
}else{
    // 워커들이 포트에서 대기
    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<h1>Hello world!</h1>');
        res.end('<p>Hello Cluster!</p>');
    }).listen(8086);

    console.log(`${process.pid} 번 워커 실행..`)
}