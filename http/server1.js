const http = require('http');

http.createServer((req, res) => {
    // res.writeHead: 응답에 대한 정보를 기록 (Header)
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    // res.write: body 에 보낼 데이터
    res.write('<h1>Hello Node!</h1>');
    // res.end: 응답 종료 메서드. 만약 인수가 있다면 그 데이터도 클라이언트에 보낸 후 응답 종료
    res.end('<p>Hello Server!</p>');
})
    .listen(8080, () => {   // 서버 연결
        console.log('8080 포트에서 대기중....');
    });

// node server1 실행 후, localhost:8080 접근
// **  맥, 리눅스에서 1024번 이하 포트에 연결할 때는 관리자 권한(sudo) 이 필요함